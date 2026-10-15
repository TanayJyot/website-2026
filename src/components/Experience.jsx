import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Experience() {
  const technicalExperiences = [
    {
      role: "MLOps Intern",
      company: "Shopify",
      date: "May 2026 – Aug 2026",
      desc: "Owned the team's H100 cluster, built an Airflow retraining pipeline that lifted Recall@200 by 39.5%, and registered 790 inference features in Feast.",
      nodeId: "Shopify"
    },
    {
      role: "ML Research Assistant",
      company: "Human-Centered Data Science Lab",
      date: "Jun 2026 – Present",
      desc: "On-prem LLM infrastructure for the Children's Aid Society of Toronto: built rtxllm for the lab's RTX 5080 and cut Tenstorrent batch time by 44%.",
      nodeId: "HCDSL"
    },
    {
      role: "Let's Solve It Fellow",
      company: "RBC Borealis",
      date: "Mar 2026 – May 2026",
      desc: "Built Python/LangChain pipelines that condense 1,100 pages into one-page digests, cutting review time by 90%.",
      nodeId: "RBC"
    },
    {
      role: "AI Research Intern",
      company: "Flybits",
      date: "Mar 2025 – Jan 2026",
      desc: "Multi-agent LangGraph pipelines and a knowledge-graph schema for business events; co-authored the PAiNT paper, published in MDPI Data (2026).",
      nodeId: "Flybits"
    },
    {
      role: "Research Lead",
      company: "Lee Language Lab",
      date: "Mar 2025 – Jan 2026",
      desc: "Led a student team building a Hokkien language-learning app and running user studies on its features.",
      nodeId: "LeeLang"
    },
    {
      role: "AI & Backend Engineering Intern",
      company: "Neurobridge Tech",
      date: "Jun 2024 – Aug 2024",
      desc: "Prepared Indic-language text and audio datasets for Llama 3 fine-tuning and built Django REST APIs for auth and payments.",
      nodeId: "Neurobridge"
    }
  ];

  const leadershipExperiences = [
    {
      role: "Co-President",
      company: "UTMIST",
      date: "Present",
      desc: "Leading North America's largest AI student organization (350+ executives): $60k+ secured, 30+ events, 3,500+ students reached.",
      nodeId: "UTMIST"
    },
    {
      role: "Director of Partnerships",
      company: "UofT AI Group",
      date: "From Jun 2024",
      desc: "Led a 25+ person partnerships team for UofT AI's undergraduate AI conference and started the collaboration with Flybits.",
      nodeId: "UofTAI"
    },
    {
      role: "Recognized Study Group Assistant",
      company: "University of Toronto",
      date: "From Oct 2024",
      desc: "Trained 100+ study group leaders and maintained the program's administrative records.",
      nodeId: "RSG"
    },
    {
      role: "Senior Secretariat Member",
      company: "IIMUN",
      date: "Jan 2022 – Sep 2022",
      desc: "Organized the Raipur, Kanpur, Banaras and digital conferences; Best Delegate in the UNSC committee.",
      nodeId: "IIMUN"
    }
  ];

  const renderCard = (exp) => (
    <li key={exp.nodeId ?? `${exp.role}-${exp.company}`} className="glass-card experience-card">
      <div className="experience-card-header">
        <h3 className="experience-role">
          {exp.role}
          <span className="experience-company">@ {exp.company}</span>
        </h3>
        <p className="experience-date">{exp.date}</p>
      </div>
      <p className="experience-desc">{exp.desc}</p>
      {exp.nodeId && (
        <Link to={`/node/${exp.nodeId}`} className="details-link">
          Details<span className="sr-only"> about {exp.role} at {exp.company}</span>
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      )}
    </li>
  );

  return (
    <section className="section" id="experience" aria-label="Experience">
      <div className="container">
        <div className="experience-columns">
          <div className="experience-column">
            <h2 className="title experience-column-title">Technical Experience</h2>
            <ul className="experience-list" role="list">
              {technicalExperiences.map(renderCard)}
            </ul>
          </div>

          <div className="experience-column">
            <h2 className="title experience-column-title">Leadership</h2>
            <ul className="experience-list" role="list">
              {leadershipExperiences.map(renderCard)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
