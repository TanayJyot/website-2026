import React from 'react';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';

export default function Contact() {
  return (
    <section className="section" id="contact" style={{ borderTop: '1px solid var(--glass-border)', marginTop: '2rem' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="title">Get In Touch</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
          Whether you want to chat about AI systems, community building at UofT, or just want to jam on some guitars, feel free to reach out!
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href="mailto:tanay@example.com" className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 1.5rem' }}>
            <Mail size={20} color="var(--accent-color)" />
            <span>Email Me</span>
          </a>
          <a href="https://github.com/tjsin" target="_blank" rel="noreferrer" className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 1.5rem' }}>
            <Github size={20} color="var(--accent-color)" />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/tanayjyot" target="_blank" rel="noreferrer" className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 1.5rem' }}>
            <Linkedin size={20} color="var(--accent-color)" />
            <span>LinkedIn</span>
          </a>
          <a href="/Resume.pdf" target="_blank" className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 1.5rem' }}>
            <FileText size={20} color="var(--accent-color)" />
            <span>Resume</span>
          </a>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Tanayjyot Singh Chawla. Built with React & Vite.
      </div>
    </section>
  );
}
