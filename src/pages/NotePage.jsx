import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';
import { BookOpen, FileText, CornerDownLeft } from 'lucide-react';
import notesIndex from '../content/notes-index.json';

/* ────────────────────────────────────────────────────────────
   Vite glob: every .md file under content/notes becomes its own
   chunk (raw string), fetched only when that note is opened.
   ──────────────────────────────────────────────────────────── */
const noteModules = import.meta.glob('../content/notes/*.md', {
  query: '?raw',
  import: 'default',
});

/** Lookup: slug (lowercase filename without .md) → () => Promise<raw markdown> */
const NOTE_LOADERS = {};
for (const [path, load] of Object.entries(noteModules)) {
  // path looks like "../content/notes/naive bayes.md"
  const filename = path.split('/').pop().replace(/\.md$/, '');
  NOTE_LOADERS[filename.toLowerCase()] = load;
}

/**
 * Built from every note by scripts/build-notes-index.mjs (run by the Vite plugin
 * in vite.config.js), so backlinks don't require loading all notes at runtime.
 *   backlinks: target slug → [source slugs]
 *   images:    lowercase embed target → actual file name in /notes-assets
 */
const BACKLINKS = notesIndex.backlinks;
const IMAGE_FILES = notesIndex.images;

/* ────────────────────────────────────────────────────────────
   Pre-processing pipeline: Obsidian → standard Markdown
   ──────────────────────────────────────────────────────────── */

/** Strip YAML frontmatter — only a --- block at the very start of the file */
function stripFrontmatter(md) {
  return md.replace(/^---\r?\n[\s\S]*?\r?\n---[ \t]*(?:\r?\n)*/, '');
}

/** encodeURIComponent leaves ( and ) alone, which breaks markdown link parsing */
function encodeSlug(name) {
  return encodeURIComponent(name).replace(/\(/g, '%28').replace(/\)/g, '%29');
}

/**
 * Convert ![[image.png]] and ![[image.png|300]] → standard markdown image syntax.
 * Embeds whose exported file has a different name (Obsidian subfolders such as
 * `Pictures/x.png` are flattened to `Pictures - x.png`) are mapped via the index.
 */
function convertObsidianImages(md) {
  return md.replace(/!\[\[([^\]|]+\.(?:png|jpg|jpeg|gif|svg|webp|bmp|tiff|tif|excalidraw))(?:\|[^\]]*)?\]\]/gi,
    (_, embed) => {
      const filename = embed.trim();
      const file = IMAGE_FILES[filename.toLowerCase()] || filename;
      return `![${filename}](/notes-assets/${encodeSlug(file)})`;
    }
  );
}

/**
 * Convert [[Note Name]], [[Note Name|Alias]] and note embeds ![[Note Name]] → markdown links.
 * Embeds (transclusions) aren't supported, so they degrade to a plain link.
 */
function convertWikilinks(md) {
  return md.replace(/!?\[\[([^\]]+)\]\]/g, (match, inner) => {
    // Handle [[Note Name|Display Text]] and [[Note Name#Heading|Display Text]]
    const parts = inner.split('|');
    const target = parts[0].split('#')[0].trim();
    const display = parts.length > 1 ? parts.slice(1).join('|').trim() : parts[0].trim();

    // Same-note heading/block reference ([[#^abc|text]]) — no page to link to
    if (!target) return display.replace(/^#\^?/, '');

    const isMissing = !(target.toLowerCase() in NOTE_LOADERS);
    const suffix = isMissing ? '?missing=true' : '';

    return `[${display}](/note/${encodeSlug(target)}${suffix})`;
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

/**
 * Ensure $$...$$ blocks have their delimiters on separate lines
 * so that remark-math parses them as display math, not inline.
 */
const EMPTY_LIST_ITEM_RE = /^\s*(?:[-*+]|\d+[.)])\s*$/;
const LIST_PREFIX_RE = /^\s*(?:[-*+]|\d+\.)\s*/;

/** Is this line (ignoring a list prefix and indentation) the start of a $$ block? */
function startsDisplayMath(line) {
  return line.replace(LIST_PREFIX_RE, '').trim().startsWith('$$');
}

function isolateDisplayMath(md) {
  const lines = md.split('\n');
  const result = [];
  let i = 0;

  let inFence = false;

  while (i < lines.length) {
    const line = lines[i];

    // Leave fenced code blocks untouched
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      result.push(line);
      i++;
      continue;
    }
    if (inFence) {
      result.push(line);
      i++;
      continue;
    }

    // An empty bullet whose "content" is the $$ block on the next line(s) would
    // render as an empty <li> followed by the equation, since the block is
    // hoisted out of the list below — drop the bullet.
    if (EMPTY_LIST_ITEM_RE.test(line)) {
      let next = i + 1;
      while (next < lines.length && lines[next].trim() === '') next++;
      if (next < lines.length && startsDisplayMath(lines[next])) {
        i++;
        continue;
      }
    }

    // Strip list prefix if the line is just a list item wrapping $$...$$
    const stripped = line.replace(/^\s*[-*+]\s*/, '').replace(/^\s*\d+\.\s*/, '').trim();

    // Case 1: Single-line display math  $$...$$
    if (/^\$\$.*\$\$$/.test(stripped) && stripped !== '$$') {
      const mathContent = stripped.slice(2, -2).trim();
      if (result.length > 0 && result[result.length - 1].trim() !== '') {
        result.push('');
      }
      result.push('$$');
      result.push(mathContent);
      result.push('$$');
      result.push('');
      i++;
      continue;
    }

    // Case 2: Multi-line display math starting with $$
    if (/^\$\$/.test(stripped) && !/\$\$$/.test(stripped.slice(2))) {
      if (result.length > 0 && result[result.length - 1].trim() !== '') {
        result.push('');
      }
      // If the first line is just $$, keep it. If it has content like $$ math, split it.
      if (stripped === '$$') {
        result.push('$$');
      } else {
        result.push('$$');
        result.push(stripped.slice(2).trim());
      }
      
      i++;
      while (i < lines.length) {
        const nextLine = lines[i].trim();
        if (/\$\$\s*$/.test(nextLine)) {
          if (nextLine === '$$') {
            result.push('$$');
          } else {
            result.push(nextLine.slice(0, -2).trim());
            result.push('$$');
          }
          i++;
          break;
        } else {
          result.push(nextLine);
          i++;
        }
      }
      result.push('');
      continue;
    }

    // Case 3: Line contains $$...$$ in the middle
    const inlineDisplayMatch = line.match(/^(.*?)\s*(\$\$[^$]+\$\$)\s*(.*)$/);
    if (inlineDisplayMatch && inlineDisplayMatch[2]) {
      const before = inlineDisplayMatch[1].trim();
      const mathContent = inlineDisplayMatch[2].slice(2, -2).trim();
      const after = inlineDisplayMatch[3].trim();
      
      if (before) result.push(before);
      result.push('');
      result.push('$$');
      result.push(mathContent);
      result.push('$$');
      result.push('');
      if (after) result.push(after);
      i++;
      continue;
    }

    // Default: pass line through
    result.push(line);
    i++;
  }

  return result.join('\n');
}

/** Full pre-processing pipeline */
function preprocessObsidian(raw) {
  let md = stripFrontmatter(raw);
  md = convertObsidianImages(md);
  md = convertCallouts(md);
  md = convertWikilinks(md);
  // Remove empty ## headings (common in Obsidian templates)
  md = md.replace(/^##\s*$/gm, '');
  // Isolate $$...$$ display math blocks onto their own paragraphs
  md = isolateDisplayMath(md);
  return md;
}

/* ────────────────────────────────────────────────────────────
   Custom renderers for ReactMarkdown
   ──────────────────────────────────────────────────────────── */
function NoteLink({ href, children, ...props }) {
  const navigate = useNavigate();
  delete props.node; // react-markdown's hast node, not a DOM attribute

  // Same-page anchors (e.g. GFM footnotes #user-content-fn-1): plain link, keeping
  // data-footnote-ref / data-footnote-backref and the other attributes
  if (href && href.startsWith('#')) {
    return <a href={href} {...props}>{children}</a>;
  }

  // Internal /note/ links
  if (href && href.startsWith('/note/')) {
    const isMissing = href.endsWith('?missing=true');
    const cleanHref = href.replace(/\?missing=true$/, '');
    const classes = `wikilink ${isMissing ? 'is-unresolved' : ''}`.trim();
    
    return (
      <a
        href={cleanHref}
        className={classes}
        onClick={(e) => {
          e.preventDefault();
          navigate(cleanHref);
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
  const [failed, setFailed] = useState(false);

  // Image wasn't exported with the notes — show its name instead of a broken icon
  if (failed) {
    return <em className="note-image-missing">[missing image: {alt || src}]</em>;
  }

  return (
    <span className="note-image-wrapper">
      <img
        src={src}
        alt={alt || ''}
        loading="lazy"
        className="note-image"
        onError={() => setFailed(true)}
      />
    </span>
  );
}

/** Everything the page renders for a note, given its raw markdown (undefined = not found) */
function buildNote(name, raw) {
  // Empty notes are valid (raw === ''), so check for undefined rather than falsiness
  if (raw === undefined) {
    return {
      content: `# Note Not Found\n\nCould not find a note named **${name}**. It may not have been included in the exported set.`,
      title: 'Not Found',
      linkedNotes: [],
      backlinks: [],
    };
  }

  const content = preprocessObsidian(raw) || `# ${name}\n\n*This note is empty.*`;

  // Extract title from first # heading
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : name;

  // Extract linked notes from the processed markdown (the /note/ links)
  const linkPattern = /\[([^\]]+)\]\(\/note\/([^)?]+)(\?missing=true)?\)/g;
  const linkedNotes = [];
  const seen = new Set();
  let m;
  while ((m = linkPattern.exec(content)) !== null) {
    const slug = m[2];
    if (seen.has(slug)) continue;
    seen.add(slug);
    linkedNotes.push({ display: m[1], slug, exists: !m[3] });
  }

  const backlinks = (BACKLINKS[name.toLowerCase()] || []).map(source => ({
    display: source,
    slug: encodeSlug(source),
    exists: true, // the index only lists notes that exist
  }));

  return { content, title, linkedNotes, backlinks };
}

/**
 * Fetch the note's chunk. Returns null while it loads, otherwise what buildNote returns.
 * A failed chunk load (e.g. a stale deploy) is reported as { error }.
 */
function useNote(name) {
  const key = name.toLowerCase();
  const load = NOTE_LOADERS[key];
  const [loaded, setLoaded] = useState({ key: null, raw: undefined, error: null });

  useEffect(() => {
    if (!load) return undefined;
    let cancelled = false;
    load().then(
      raw => { if (!cancelled) setLoaded({ key, raw, error: null }); },
      error => { if (!cancelled) setLoaded({ key, raw: undefined, error }); },
    );
    return () => { cancelled = true; };
  }, [key, load]);

  return useMemo(() => {
    if (!load) return buildNote(name, undefined);
    if (loaded.key !== key) return null;
    if (loaded.error) return { error: loaded.error };
    return buildNote(name, loaded.raw);
  }, [name, key, load, loaded]);
}

export default function NotePage() {
  // useParams already returns the decoded value; decoding again breaks names containing '%'
  const { slug } = useParams();
  const note = useNote(slug);
  const ready = note !== null && !note.error;
  const { content, title, linkedNotes, backlinks } = ready
    ? note
    : { content: '', title: slug, linkedNotes: [], backlinks: [] };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (ready) document.title = `${title} · Tanayjyot Singh Chawla`;
  }, [ready, title]);

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
        <article key={slug} className="note-content glass-card markdown-body" aria-busy={note === null}>
          {note === null && (
            <p className="note-loading" style={{ color: 'var(--text-muted)' }}>Loading note…</p>
          )}
          {note?.error && (
            <p>
              This note couldn&apos;t be loaded — the site may have been updated.{' '}
              <a href={`/note/${encodeSlug(slug)}`}>Reload the page</a> to try again.
            </p>
          )}
          {ready && (
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
          )}
        </article>
        {/* Sidebar: linked notes + backlinks */}
        {(linkedNotes.length > 0 || backlinks.length > 0) && (
          <aside className="note-sidebar">
            {backlinks.length > 0 && (
              <div className="sidebar-card glass-card">
                <h4 className="sidebar-title sidebar-title-backlinks">
                  <CornerDownLeft size={16} /> Backlinks
                </h4>
                <ul className="sidebar-links">
                  {backlinks.map((link) => (
                    <li key={link.slug}>
                      <Link to={`/note/${link.slug}`} className="sidebar-link">
                        {link.display}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {linkedNotes.length > 0 && (
              <div className="sidebar-card glass-card" style={{ marginTop: backlinks.length > 0 ? '1rem' : 0 }}>
                <h4 className="sidebar-title sidebar-title-forward">
                  <FileText size={16} /> Forward Links
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
            )}
          </aside>
        )}
      </div>
    </div>
  );
}
