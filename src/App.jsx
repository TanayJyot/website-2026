import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Contact from './components/Contact';
import NodePage from './pages/NodePage';
import NotePage from './pages/NotePage';
import './App.css'; 

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Interests />
      <Contact />
    </>
  );
}

function WritingsPage() {
  const courseNotes = [
    {
      id: 'natural language processing',
      title: 'CSC401 — Natural Language Processing',
      description: 'Course notes covering linguistic knowledge, language modelling, Naive Bayes, entropy & information theory, neural networks, and machine translation.',
      tags: ['NLP', 'Transformers', 'Deep Learning', 'Probability'],
      date: '2026',
    },
  ];

  return (
    <div className="container section animate-fade-in" style={{ marginTop: '5rem', minHeight: '80vh', maxWidth: '900px' }}>
      <h2 className="title">Writings &amp; Thoughts</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.15rem', lineHeight: 1.7 }}>
        Technical deep dives, book reviews, and notes on my hardware/music adventures. More coming soon.
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

function AppContent() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only apply the pill-shrink effect on the homepage
  const navScrolled = isHome && scrolled;

  return (
    <div className="app-container">
      <nav className="glass-nav" style={{
        position: isHome ? 'fixed' : 'relative',
        top: navScrolled ? '20px' : '0',
        left: isHome ? '50%' : 'auto',
        transform: isHome ? 'translateX(-50%)' : 'none',
        width: navScrolled ? '85%' : '100%',
        maxWidth: navScrolled ? '900px' : 'none',
        borderRadius: navScrolled ? '50px' : '0',
        zIndex: 100, 
        background: navScrolled ? 'rgba(13, 15, 18, 0.85)' : 'rgba(13, 15, 18, 0.5)', 
        backdropFilter: 'blur(12px)',
        border: navScrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
        borderBottom: navScrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.05)',
        boxShadow: navScrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', padding: navScrolled ? '0.8rem 2.5rem' : '1.2rem 2rem', alignItems: 'center', transition: 'padding 0.4s ease' }}>
          <Link to="/" style={{ fontWeight: 700, fontSize: '1.2rem', color: '#fff' }}>Tanayjyot</Link>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="/#about">About</a>
            <a href="/#experience">Experience</a>
            <a href="/#projects">Projects</a>
            <Link to="/blog" style={{ color: 'var(--accent-color)' }}>Writings</Link>
          </div>
        </div>
      </nav>
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/node/:id" element={<NodePage />} />
          <Route path="/note/:slug" element={<NotePage />} />
          <Route path="/blog" element={<WritingsPage />} />
        </Routes>
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
