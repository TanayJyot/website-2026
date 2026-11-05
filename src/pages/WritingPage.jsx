import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft } from 'lucide-react';
import usePageTitle from '../components/usePageTitle';
import { WRITINGS_BY_SLUG, LINKED_FROM } from '../content/writings';

/** Links to other pages on the site navigate client-side; anything else is external. */
function MarkdownLink({ href = '', children }) {
  if (href.startsWith('/')) return <Link to={href}>{children}</Link>;
  if (href.startsWith('#')) return <a href={href}>{children}</a>;
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

const MARKDOWN_COMPONENTS = { a: MarkdownLink };

export default function WritingPage() {
  const { slug } = useParams();
  const writing = WRITINGS_BY_SLUG[slug];
  usePageTitle(writing ? writing.title : 'Page Not Found');

  if (!writing) {
    return (
      <div className="container animate-fade-in" style={{ marginTop: '5rem', paddingBlock: 'clamp(3rem, 8vw, 5rem)', minHeight: '80vh', maxWidth: '800px' }}>
        <h2 className="title">Page Not Found</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>There's no writing at this address.</p>
        <Link to="/blog" className="btn-secondary btn-touch">Back to Writings</Link>
      </div>
    );
  }

  const linkedFrom = LINKED_FROM[slug] || [];

  return (
    <div className="container animate-fade-in" style={{ marginTop: '5rem', paddingBlock: 'clamp(3rem, 8vw, 5rem)', minHeight: '80vh', maxWidth: '800px' }}>
      <Link to="/blog" className="btn-secondary btn-touch" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2.5rem' }}>
        <ArrowLeft size={18} /> Writings
      </Link>

      <article className="glass-card markdown-body writing-article">
        <h1>{writing.title}</h1>
        <p className="writing-article-meta">
          {writing.label}
          {writing.status && <span className="writing-tag writing-row-tag">{writing.status}</span>}
        </p>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={MARKDOWN_COMPONENTS}>
          {writing.body}
        </ReactMarkdown>

        {linkedFrom.length > 0 && (
          <aside className="writing-linked-from">
            <h3>Linked from</h3>
            <ul>
              {linkedFrom.map((w) => (
                <li key={w.slug}><Link to={`/writing/${w.slug}`}>{w.title}</Link></li>
              ))}
            </ul>
          </aside>
        )}
      </article>
    </div>
  );
}
