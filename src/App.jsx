import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Contact from './components/Contact';
import NodePage from './pages/NodePage';
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

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <nav className="glass-nav" style={{
          position: 'fixed',
          top: scrolled ? '20px' : '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: scrolled ? '85%' : '100%',
          maxWidth: scrolled ? '900px' : 'none',
          borderRadius: scrolled ? '50px' : '0',
          zIndex: 100, 
          background: scrolled ? 'rgba(13, 15, 18, 0.85)' : 'rgba(13, 15, 18, 0.5)', 
          backdropFilter: 'blur(12px)',
          border: scrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.05)',
          boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', padding: scrolled ? '0.8rem 2.5rem' : '1.2rem 2rem', alignItems: 'center', transition: 'padding 0.4s ease' }}>
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
            <Route path="/blog" element={
              <div className="container section" style={{marginTop:'5rem', minHeight: '80vh'}}>
                <h2 className="title">Writings & Thoughts</h2>
                <div className="glass-card">
                  <h3 style={{marginBottom: '1rem'}}>Welcome to my blog</h3>
                  <p style={{color: 'var(--text-muted)'}}>Dec 10, 2025</p>
                  <p style={{marginTop: '1rem'}}>
                    In the future, I will be posting thorough technical deep dives, book reviews, and notes on my hardware/music adventures right here. Stay tuned!
                  </p>
                </div>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
