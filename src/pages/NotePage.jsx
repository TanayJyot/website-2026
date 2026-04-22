import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';
import { ArrowLeft, BookOpen, FileText } from 'lucide-react';

/* ────────────────────────────────────────────────────────────
   Vite glob: eagerly import every .md file under content/notes
   as raw strings so we can look them up by slug at runtime.
   ──────────────────────────────────────────────────────────── */
const noteModules = import.meta.glob('../content/notes/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

/** Build a lookup: slug (lowercase filename without .md) → raw markdown string */
function buildNoteLookup() {
  const lookup = {};
  for (const [path, raw] of Object.entries(noteModules)) {
    // path looks like "../content/notes/naive bayes.md"
    const filename = path.split('/').pop().replace(/\.md$/, '');
    lookup[filename.toLowerCase()] = raw;
  }
  return lookup;
}

const NOTES = buildNoteLookup();

/* ────────────────────────────────────────────────────────────
   Pre-processing pipeline: Obsidian → standard Markdown
   ──────────────────────────────────────────────────────────── */

/** Strip YAML frontmatter (---…---) */
function stripFrontmatter(md) {
  return md.replace(/^---[\s\S]*?---\n*/m, '');
}

/** Convert ![[image.png]] → standard markdown image syntax */
function convertObsidianImages(md) {
  return md.replace(/!\[\[([^\]]+\.(png|jpg|jpeg|gif|svg|webp|bmp|tiff|tif|excalidraw))\]\]/gi,
    (_, filename) => `![${filename}](/notes-assets/${encodeURIComponent(filename)})`
  );
}

/** Convert [[Note Name]] and [[Note Name|Alias]] → markdown links */
function convertWikilinks(md) {
  return md.replace(/\[\[([^\]]+)\]\]/g, (match, inner) => {
    // Skip if it looks like an image (already handled)
    if (/\.(png|jpg|jpeg|gif|svg|webp|bmp|tiff|tif|excalidraw)$/i.test(inner)) {
      return match;
    }
    // Handle [[Note Name|Display Text]] and [[Note Name#Heading|Display Text]]
    const parts = inner.split('|');
    const target = parts[0].split('#')[0].trim();
    const display = parts.length > 1 ? parts[1].trim() : inner.split('#')[0].trim();
    const slug = encodeURIComponent(target);
    return `[${display}](/note/${slug})`;
  });
}

/**
 * Convert Obsidian callouts to styled HTML.
 * > [!note] Title    →    <div class="callout callout-note"><strong>Title</strong>…</div>
 * > [!warning] Text  →    <div class="callout callout-warning"><strong>Text</strong>…</div>
 */
function convertCallouts(md) {
  // Multi-line callout blocks
  return md.replace(
    /> \[!(note|tip|warning|important|caution|info|example|abstract|summary|todo|success|question|failure|danger|bug|quote)\]([^\n]*)\n((?:>.*\n?)*)/gi,
    (_, type, title, body) => {
      const typeLower = type.toLowerCase();
      const cleanTitle = title.trim() || typeLower.charAt(0).toUpperCase() + typeLower.slice(1);
      const cleanBody = body
        .split('\n')
        .map(l => l.replace(/^>\s?/, ''))
        .join('\n')
        .trim();
      return `<div class="callout callout-${typeLower}"><div class="callout-title">${cleanTitle}</div>\n\n${cleanBody}\n\n</div>\n`;
    }
  );
}

/** Full pre-processing pipeline */
function preprocessObsidian(raw) {
  let md = stripFrontmatter(raw);
  md = convertObsidianImages(md);
  md = convertCallouts(md);
  md = convertWikilinks(md);
  // Remove empty ## headings (common in Obsidian templates)
  md = md.replace(/^##\s*$/gm, '');
  return md;
}

/* ────────────────────────────────────────────────────────────
   Custom renderers for ReactMarkdown
   ──────────────────────────────────────────────────────────── */
function NoteLink({ href, children }) {
  const navigate = useNavigate();

  // Internal /note/ links
  if (href && href.startsWith('/note/')) {
    return (
      <a
        href={href}
        className="wikilink"
        onClick={(e) => {
          e.preventDefault();
          navigate(href);
        }}
      >
        {children}
      </a>
    );
  }

  // External links
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

function NoteImage({ src, alt }) {
  return (
    <span className="note-image-wrapper">
      <img
        src={src}
        alt={alt || ''}
        loading="lazy"
        className="note-image"
      />
    </span>
  );
}

/* ────────────────────────────────────────────────────────────
   NotePage component
   ──────────────────────────────────────────────────────────── */
export default function NotePage() {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [linkedNotes, setLinkedNotes] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const decodedSlug = decodeURIComponent(slug);
    const raw = NOTES[decodedSlug.toLowerCase()];

    if (!raw) {
      setContent(`# Note Not Found\n\nCould not find a note named **${decodedSlug}**. It may not have been included in the exported set.`);
      setTitle('Not Found');
      setLinkedNotes([]);
      return;
    }

    const processed = preprocessObsidian(raw);
    setContent(processed);

    // Extract title from first # heading
    const titleMatch = processed.match(/^#\s+(.+)$/m);
    setTitle(titleMatch ? titleMatch[1] : decodedSlug);

    // Extract linked notes from the processed markdown (the /note/ links)
    const linkPattern = /\[([^\]]+)\]\(\/note\/([^)]+)\)/g;
    const links = [];
    let m;
    while ((m = linkPattern.exec(processed)) !== null) {
      const display = m[1];
      const targetSlug = decodeURIComponent(m[2]);
      const exists = targetSlug.toLowerCase() in NOTES;
      links.push({ display, slug: m[2], exists });
    }
    // Deduplicate
    const seen = new Set();
    setLinkedNotes(links.filter(l => {
      if (seen.has(l.slug)) return false;
      seen.add(l.slug);
      return true;
    }));
  }, [slug]);

  return (
    <div className="note-page-container animate-fade-in">
      {/* Breadcrumb */}
      <div className="note-breadcrumb">
        <Link to="/blog" className="breadcrumb-link">
          <BookOpen size={16} /> Course Notes
        </Link>
        <span className="breadcrumb-sep">›</span>
        <span className="breadcrumb-current">{title}</span>
      </div>

      <div className="note-layout">
        {/* Main content */}
        <article className="note-content glass-card markdown-body">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex, rehypeRaw]}
            components={{
              a: NoteLink,
              img: NoteImage,
            }}
          >
            {content}
          </ReactMarkdown>
        </article>

        {/* Sidebar: linked notes */}
        {linkedNotes.length > 0 && (
          <aside className="note-sidebar">
            <div className="sidebar-card glass-card">
              <h4 className="sidebar-title">
                <FileText size={16} /> Linked Notes
              </h4>
              <ul className="sidebar-links">
                {linkedNotes.map((link) => (
                  <li key={link.slug}>
                    <Link
                      to={`/note/${link.slug}`}
                      className={`sidebar-link ${link.exists ? '' : 'sidebar-link-missing'}`}
                    >
                      {link.display}
                      {!link.exists && <span className="missing-badge">missing</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
