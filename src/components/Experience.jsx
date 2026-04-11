import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Experience() {
  const technicalExperiences = [
    {
      role: "Incoming Intern",
      company: "Shopify",
      date: "May 2026 – Aug 2026",
      desc: "Upcoming software engineering internship focused on scalable commerce systems.",
      nodeId: "Shopify"
    },
    {
      role: "Researcher",
      company: "Human-Centered Data Science Lab",
      date: "2026",
      desc: "Research at Human-Centered Data Science Lab.",
      nodeId: "HCDSL"
    },
    {
      role: "Participant",
      company: "RBC Let's Solve It",
      date: "2026",
      desc: "Participated in RBC Let's Solve It program.",
      nodeId: "RBC"
    },
    {
      role: "AI Research Intern",
      company: "Flybits",
      date: "Mar 2025 – Present",
      desc: "Working on advanced AI research and implementation for personalization engines.",
      nodeId: "Flybits"
    },
    {
      role: "Research Lead",
      company: "Lee Language Lab",
      date: "Mar 2025 – Present",
      desc: "Leading research initiatives at the intersection of NLP and language processing.",
      nodeId: "LeeLang"
    },
    {
      role: "AI & Backend Eng Intern",
      company: "Neurobridge Tech Pvt. Ltd.",
      date: "Jun 2024 – Aug 2024",
      desc: "Built backend APIs and integrated AI models into production environments.",
      nodeId: "Neurobridge"
    }
  ];

  const leadershipExperiences = [
    {
      role: "Co-President",
      company: "UTMIST",
      date: "Present",
      desc: "Oversight of entire UofT Machine Intelligence Student Team. Running DevCon, managing budgets/sponsorships, and allocating GPU cluster resources.",
      nodeId: "UTMIST"
    },
    {
      role: "Director of Partnerships",
      company: "UofT AI Group",
      date: "Jun 2024 – Present",
      desc: "Leading a team of 25+ to raise $60k+ for North America's largest undergraduate A.I. conference.",
      nodeId: "UofTAI"
    },
    {
      role: "Recognized Study Group Assistant",
      company: "University of Toronto",
      date: "Oct 2024 – Present",
      desc: "Trained 100+ students on facilitating group study sessions while organizing administrative data.",
      nodeId: "RSG"
    },
    {
      role: "Crisis Manager & Chair",
      company: "Model United Nations",
      date: "Jan 2022 – Feb 2024",
      desc: "Acted as final decision maker in tense situations, coordinating solutions and winning best delegate.",
      nodeId: "IIMUN"
    }
  ];

  const renderCard = (exp, idx) => (
    <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
        <h3 style={{ fontSize: '1.3rem', lineHeight: '1.3' }}>{exp.role} <br/><span style={{ color: 'var(--accent-color)', fontSize: '1rem' }}>@ {exp.company}</span></h3>
        <div style={{ padding: '0.2rem 0.6rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          {exp.date}
        </div>
      </div>
      <p style={{ color: '#fff', fontSize: '0.95rem', flex: 1 }}>{exp.desc}</p>
      {exp.nodeId && (
        <Link to={`/node/${exp.nodeId}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: 600, marginTop: 'auto' }}>
          Read Technical Breakdown <ArrowRight size={14} />
        </Link>
      )}
    </div>
  );

  return (
    <section className="section" id="experience">
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
          <div>
            <h2 className="title" style={{ marginBottom: '2rem', fontSize: '2rem' }}>Technical Experience</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {technicalExperiences.map((exp, idx) => renderCard(exp, idx))}
            </div>
          </div>
          
          <div>
            <h2 className="title" style={{ marginBottom: '2rem', fontSize: '2rem' }}>Leadership</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {leadershipExperiences.map((exp, idx) => renderCard(exp, idx))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
