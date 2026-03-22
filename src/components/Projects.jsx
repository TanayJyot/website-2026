import React from 'react';

export default function Projects() {
  const projects = [
    {
      name: "PersonaWorks",
      desc: "Persona graphs and digital footprint pipelines. Built complex data processing systems to map and analyze digital identities.",
      tags: ["Python", "Data Pipelines", "ML"]
    },
    {
      name: "Image Processing API",
      desc: "End-to-end web application with a Flask backend handling dynamic image uploads from a React frontend.",
      tags: ["React", "Flask", "Full Stack"]
    },
    {
      name: "RL & Systems Tooling",
      desc: "Work tied to Tenstorrent hardware and tooling, bridging the gap between reinforcement learning models and specialized hardware.",
      tags: ["RL", "Hardware Systems"]
    },
    {
      name: "NEAT Genetic Algorithms",
      desc: "Implementation of NeuroEvolution of Augmenting Topologies (NEAT) for specialized evolutionary ML experiments.",
      tags: ["C#", "Evolutionary AI"]
    },
    {
      name: "Resume Automation",
      desc: "Script pipeline to securely download, rename, and categorize resumes from Google Drive using CSV metadata.",
      tags: ["Automation", "Python"]
    }
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="title">Projects</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          {projects.map((proj, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem' }}>{proj.name}</h3>
              <p style={{ flexGrow: 1, marginBottom: '1.5rem' }}>{proj.desc}</p>
              
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {proj.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--accent-color)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
