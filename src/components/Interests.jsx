import React from 'react';
import { Link } from 'react-router-dom';

export default function Interests() {
  return (
    <section className="section" id="interests">
      <div className="container">
        <h2 className="title">Notes &amp; Resources</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 'clamp(1.5rem, 5vw, 3rem)' }}>
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Course Notes</h3>
            <p style={{ marginBottom: '2rem' }}>
              My notes from CSC401 (Natural Language Processing) and CSC384 (Intro to AI).
            </p>
            <Link to="/blog" className="btn-secondary btn-touch">Read the Notes</Link>
          </div>

          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Open Opportunities</h3>
            <p style={{ marginBottom: '2rem' }}>
              A running list of research labs, startup boards and programs for students looking for their first opportunity.
            </p>
            <Link to="/node/Opportunities" className="btn-secondary btn-touch">See the List</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
