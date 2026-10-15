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
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <h2 className="title" id="projects-title">Projects</h2>

        <ul className="projects-grid" role="list">
          {projects.map((proj) => (
            <li key={proj.name} className="glass-card project-card">
              <h3 className="project-title">{proj.name}</h3>
              <p className="project-desc">{proj.desc}</p>

              <ul className="project-tags" aria-label="Technologies">
                {proj.tags.map(tag => (
                  <li key={tag} className="project-tag">{tag}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
