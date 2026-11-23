import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft } from 'lucide-react';
import usePageTitle from '../components/usePageTitle';
import useWritingsAuth from '../components/useWritingsAuth';
import WritingsLogin from '../components/WritingsLogin';
import { WRITINGS_BY_SLUG, LINKED_FROM, PRIVATE_BY_SLUG } from '../content/writings';

/** Links to other pages on the site navigate client-side; anything else is external. */
function MarkdownLink({ href = '', children }) {
  if (href.startsWith('/')) return <Link to={href}>{children}</Link>;
  if (href.startsWith('#')) return <a href={href}>{children}</a>;
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

const MARKDOWN_COMPONENTS = { a: MarkdownLink };

const PAGE_STYLE = { marginTop: '5rem', paddingBlock: 'clamp(3rem, 8vw, 5rem)', minHeight: '80vh', maxWidth: '800px' };

function BackLink() {
  return (
    <Link to="/blog" className="btn-secondary btn-touch" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2.5rem' }}>
      <ArrowLeft size={18} /> Writings
    </Link>
  );
}

function Article({ writing, linkedFrom }) {
  return (
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
  );
}

/** A piece that only signed-in readers get: asks for the password, then fetches it from the API. */
function PrivateWriting({ meta }) {
  const auth = useWritingsAuth();
  const [loaded, setLoaded] = useState(null); // { slug, writing } | { slug, error }
  const signedIn = auth.status === 'in';

  useEffect(() => {
    if (!signedIn) return undefined;
    let live = true;
    fetch(`/api/private-writing?slug=${encodeURIComponent(meta.slug)}`, { credentials: 'same-origin' })
      .then(async (res) => {
        if (res.status === 401) { auth.logout(); return; }
        if (!res.ok) throw new Error();
        const writing = await res.json();
        if (live) setLoaded({ slug: meta.slug, writing });
      })
      .catch(() => live && setLoaded({ slug: meta.slug, error: true }));
    return () => { live = false; };
    // auth.logout is stable; re-fetch only when the piece or sign-in state changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meta.slug, signedIn]);

  const current = loaded && loaded.slug === meta.slug ? loaded : null;

  return (
    <>
      <BackLink />
      {auth.status === 'loading' && <div aria-hidden="true" style={{ minHeight: '40vh' }} />}
      {auth.status === 'out' && <WritingsLogin onLogin={auth.login} configured={auth.configured} heading={meta.title} />}
      {signedIn && !current && <p style={{ color: 'var(--text-muted)' }}>Loading…</p>}
      {signedIn && current?.error && <p style={{ color: 'var(--text-muted)' }}>Couldn't load this piece. Try again in a moment.</p>}
      {signedIn && current?.writing && <Article writing={current.writing} linkedFrom={current.writing.linkedFrom} />}
    </>
  );
}

export default function WritingPage() {
  const { slug } = useParams();
  const writing = WRITINGS_BY_SLUG[slug];
  const privateMeta = PRIVATE_BY_SLUG[slug];
  // Private titles are listed on the Writings page anyway, so the tab can show them
  usePageTitle(writing || privateMeta ? (writing || privateMeta).title : 'Page Not Found');

  if (privateMeta) {
    return (
      <div className="container animate-fade-in" style={PAGE_STYLE}>
        <PrivateWriting meta={privateMeta} />
      </div>
    );
  }

  if (!writing) {
    return (
      <div className="container animate-fade-in" style={PAGE_STYLE}>
        <h2 className="title">Page Not Found</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>There's no writing at this address.</p>
        <Link to="/blog" className="btn-secondary btn-touch">Back to Writings</Link>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={PAGE_STYLE}>
      <BackLink />
      <Article writing={writing} linkedFrom={LINKED_FROM[slug] || []} />
    </div>
  );
}
