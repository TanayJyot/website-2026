import React from 'react';
import { Link } from 'react-router-dom';

export default function Interests() {
  const books = [
    { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", desc: "A must-read for distributed systems." },
    { title: "The Pragmatic Programmer", author: "Andrew Hunt & David Thomas", desc: "Timeless advice on software craftsmanship." },
    { title: "Deep Learning", author: "Ian Goodfellow", desc: "The foundational text for modern AI/ML architectures." }
  ];

  return (
    <section className="section" id="interests">
      <div className="container">
        <h2 className="title">Interests & Writings</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>Book Recommendations</h3>
            <p style={{ marginBottom: '1.5rem' }}>Some of the technical and non-technical books that have shaped my thinking:</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {books.map((book, idx) => (
                <div key={idx} style={{ padding: '1rem', borderLeft: '2px solid var(--accent-color)', background: 'var(--glass-bg)' }}>
                  <h4 style={{ color: '#fff' }}>{book.title}</h4>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>by {book.author}</div>
                  <p style={{ fontSize: '0.95rem' }}>{book.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>My Blog</h3>
            <p style={{ marginBottom: '2rem' }}>
              I occasionally write about ML architectures, system optimization, my journey in AI research, and thoughts on life & music.
            </p>
            <Link to="/blog" className="btn-secondary">Read My Writings</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
