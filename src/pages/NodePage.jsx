import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft } from 'lucide-react';
import usePageTitle from '../components/usePageTitle';

// Lazy loaders for every node file, keyed by lowercase file name so that
// /node/opportunities and /node/Opportunities resolve to the same page.
const nodeLoaders = Object.fromEntries(
  Object.entries(import.meta.glob('../content/nodes/*.md', { query: '?raw', import: 'default' }))
    .map(([path, load]) => [path.split('/').pop().replace(/\.md$/, '').toLowerCase(), load])
);

function titleFromMarkdown(markdown) {
  const match = markdown.match(/^#[ \t]+(.+?)[ \t#]*$/m);
  if (!match) return '';
  // Drop inline markdown (emphasis, code, links) so the tab title is plain text.
  return match[1]
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`~]/g, '')
    .trim();
}

export default function NodePage() {
  const { id = '' } = useParams();
  const key = id.toLowerCase();
  const load = nodeLoaders[key];
  // Holds the result for one key; a result for a different key is stale.
  const [result, setResult] = useState({ key: null, content: '', failed: false });
  const current = result.key === key ? result : null;
  const notFound = !load || Boolean(current?.failed);
  const content = current?.content ?? '';

  usePageTitle(notFound ? 'Page Not Found' : titleFromMarkdown(content) || id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!load) return undefined;
    let cancelled = false; // ignore stale loads if the user navigates before this one resolves

    load()
      .then((markdown) => { if (!cancelled) setResult({ key, content: markdown, failed: false }); })
      .catch((err) => {
        console.error(err);
        if (!cancelled) setResult({ key, content: '', failed: true });
      });

    return () => { cancelled = true; };
  }, [key, load]);

  return (
    <div className="container animate-fade-in" style={{ marginTop: '5rem', paddingBlock: 'clamp(3rem, 8vw, 5rem)', minHeight: '80vh', maxWidth: '800px' }}>
      <Link to="/" className="btn-secondary btn-touch" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.2rem', marginBottom: '2.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
        <ArrowLeft size={18} /> Back to Interface
      </Link>

      <div className="glass-card markdown-body" style={{ padding: 'clamp(1.25rem, 6vw, 3.5rem)', background: 'rgba(22, 25, 33, 0.4)' }}>
        {notFound ? (
          <>
            <h1>Page not found</h1>
            <p>
              There's no page called <strong>{id}</strong> here. It may have been renamed or removed.
            </p>
            <p>
              <Link to="/">Go back to the home page</Link> to find what you were looking for.
            </p>
          </>
        ) : (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}
