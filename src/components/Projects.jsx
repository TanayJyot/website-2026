import React from 'react';

export default function Projects() {
  const projects = [
    {
      name: "AI Warehouse Battle Simulation",
      desc: "Led the UTMIST × AI Warehouse team building a Unity battle sim where two species of up to 100 agents fight, reproduce and evolve in real time with a C# NEAT package. Published at CUCAI '25.",
      tags: ["C#", "Unity", "NEAT"]
    },
    {
      name: "rtxllm",
      desc: "llama.cpp serving CLI for the HCDS Lab's RTX 5080: a 15-model quantized GGUF catalog, an OpenAI-compatible REST gateway, and zero-downtime model swaps with automatic rollback.",
      tags: ["llama.cpp", "Python", "Inference"]
    },
    {
      name: "Senator Stock Trade Analysis",
      desc: "Analyzed 7,000+ U.S. Senator stock transactions to flag senators with unusual annual returns, visualized with networkx and plotly.",
      tags: ["Python", "yfinance", "plotly"]
    },
    {
      name: "Food A Friend",
      desc: "Flutter app letting students deliver and receive food in restricted campus locations, with Firebase auth, order queues, notifications and Google Maps tracking.",
      tags: ["Flutter", "Firebase"]
    },
    {
      name: "PhaseFlow",
      desc: "Java Swing tools to solve, plot and draw phase portraits of ordinary differential equations, built with Clean Architecture and SOLID principles.",
      tags: ["Java", "Swing"]
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
