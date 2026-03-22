import React from 'react';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="title">About Me</h2>
        
        <div className="glass-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div>
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>The Builder</h3>
            <p style={{ marginBottom: '1rem' }}>
              I'm an undergraduate at the <strong>University of Toronto</strong> studying Computer Science, with minors in Economics and Business.
              I am focused on end-to-end AI/ML engineering—from data pipelines and modeling to backend architecture and deployment.
            </p>
            <p>
              Whether it's orchestrating SLURM-style workflows on GPU clusters or building out scalable APIs, I think in terms of systems, optimization, and real-world scalability.
            </p>
          </div>
          
          <div>
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>Beyond the Code</h3>
            <p style={{ marginBottom: '1rem' }}>
              Outside of engineering, I'm deeply involved in community building. As <strong>Co-President of UTMIST</strong>, I lead an organization of hundreds of members, running large-scale events like DevCon and managing AI compute resources for students.
            </p>
            <p>
              When I'm off the clock, you can find me playing the <strong>Guitar</strong> or grinding the ladder in <strong>Clash Royale</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
