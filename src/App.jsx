import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigationType } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Contact from './components/Contact';
import usePageTitle from './components/usePageTitle';
// Hero.css also holds the shared .btn-primary / .btn-secondary styles used on
// other routes, so keep it in the main bundle even though Hero itself is lazy.
import './components/Hero.css';

// Code-split the heavy parts: the force-graph hero and the markdown/KaTeX pages.
const Hero = lazy(() => import('./components/Hero'));
const NodePage = lazy(() => import('./pages/NodePage'));
const NotePage = lazy(() => import('./pages/NotePage'));

// Where a scrolled-to section heading should sit: just below the fixed nav
// (about 71px tall, or about 80px to the bottom of the floating pill).
const NAV_CLEARANCE = 96;

function HeroFallback() {
  return <div aria-hidden="true" style={{ minHeight: '100dvh', background: 'var(--bg-color)' }} />;
}

function RouteFallback() {
  return <div aria-hidden="true" style={{ minHeight: '100dvh', background: 'var(--bg-color)' }} />;
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;
  const target = section.querySelector('h1, h2') || section;
  const top = target.getBoundingClientRect().top + window.scrollY - NAV_CLEARANCE;
  window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
}

function HomePage() {
  const { hash, key } = useLocation();
  usePageTitle();

  // Links like /#about land here before the browser can resolve the anchor
  // (and on client-side navigation it never tries), so scroll ourselves on
  // every navigation that carries a hash. Content above the target can still
  // grow afterwards (lazy hero, web fonts), so keep the target pinned for a
  // moment unless the visitor starts scrolling themselves.
  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    scrollToSection(id);

    const observer = new ResizeObserver(() => scrollToSection(id));
    observer.observe(document.body);
    const userEvents = ['wheel', 'touchstart', 'keydown', 'pointerdown'];
    const stop = () => {
      observer.disconnect();
      clearTimeout(timer);
      userEvents.forEach((t) => window.removeEventListener(t, stop));
    };
    const timer = setTimeout(stop, 3000);
    userEvents.forEach((t) => window.addEventListener(t, stop, { passive: true }));
    return stop;
  }, [hash, key]);

  return (
    <>
      <Suspense fallback={<HeroFallback />}>
        <Hero />
      </Suspense>
      <About />
      <Experience />
      <Projects />
      <Interests />
      <Contact />
    </>
  );
}

function WritingsPage() {
  usePageTitle('Writings');
  const courseNotes = [
    {
      id: 'natural language processing',
      title: 'CSC401 — Natural Language Processing',
      description: 'Course notes covering linguistic knowledge, language modelling, Naive Bayes, entropy & information theory, neural networks, and machine translation.',
      tags: ['NLP', 'Transformers', 'Deep Learning', 'Probability'],
      date: '2026',
    },
    {
      id: 'CSC384 Index',
      title: 'CSC384 — Intro to Artificial Intelligence',
      description: 'Course notes covering search algorithms, heuristics, constraint satisfaction problems, game trees, and basic machine learning concepts.',
      tags: ['AI', 'Search', 'CSP', 'Machine Learning'],
      date: '2026',
    },
  ];

  return (
    <div className="container animate-fade-in" style={{ marginTop: '5rem', paddingBlock: 'clamp(3rem, 8vw, 5rem)', minHeight: '80vh', maxWidth: '900px' }}>
      <h2 className="title">Writings</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.15rem', lineHeight: 1.7 }}>
        Course notes from my CS classes at UofT.
      </p>

      {/* Course Notes section */}
      <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <span style={{ color: 'var(--accent-color)' }}>📚</span> Course Notes
      </h3>

      <div className="writings-grid">
        {courseNotes.map((note) => (
          <Link key={note.id} to={`/note/${encodeURIComponent(note.id)}`} style={{ textDecoration: 'none' }}>
            <div className="writing-card glass-card">
              <div className="writing-card-accent" />
              <p className="writing-card-date">{note.date}</p>
              <h4 className="writing-card-title">{note.title}</h4>
              <p className="writing-card-desc">{note.description}</p>
              <div className="writing-card-tags">
                {note.tags.map((t) => (
                  <span key={t} className="writing-tag">{t}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function NotFoundPage() {
  usePageTitle('Page Not Found');
  return (
    <div className="container animate-fade-in" style={{ marginTop: '5rem', paddingBlock: 'clamp(3rem, 8vw, 5rem)', minHeight: '80vh', maxWidth: '900px' }}>
      <h2 className="title">Page Not Found</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        There's nothing at this address.
      </p>
      <Link to="/" className="btn-secondary btn-touch">Back to Home</Link>
    </div>
  );
}

// New pages start at the top; back/forward keeps the browser's restored position.
function ScrollToTop() {
  const { hash, key } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (hash || navigationType === 'POP') return;
    window.scrollTo(0, 0);
  }, [key, hash, navigationType]);

  return null;
}

// Move keyboard focus past the nav without touching the URL (a plain #hash
// would be picked up by the router and the home page's section scrolling).
function skipToContent(e) {
  const main = document.getElementById('main-content');
  if (!main) return;
  e.preventDefault();
  main.focus({ preventScroll: true });
  main.scrollIntoView();
}

function AppContent() {
  return (
    <div className="app-container">
      <a href="#main-content" className="sr-only skip-link" onClick={skipToContent}>Skip to content</a>
      <ScrollToTop />
      <Nav />

      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/node/:id" element={<NodePage />} />
            <Route path="/note/:slug" element={<NotePage />} />
            <Route path="/blog" element={<WritingsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
