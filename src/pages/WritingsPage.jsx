import React from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../components/usePageTitle';
import { WRITINGS } from '../content/writings';

const COURSE_NOTES = [
  {
    id: 'natural language processing',
    title: 'CSC401 — Natural Language Processing',
    description: 'Course notes covering linguistic knowledge, language modelling, Naive Bayes, entropy & information theory, neural networks, and machine translation.',
    tags: ['NLP', 'Transformers', 'Deep Learning', 'Probability'],
    date: '2026',
  },
  {
    id: 'CSC384 Index',
    title: 'CSC384 — Intro to Artificial Intelligence',
    description: 'Course notes covering search algorithms, heuristics, constraint satisfaction problems, game trees, and basic machine learning concepts.',
    tags: ['AI', 'Search', 'CSP', 'Machine Learning'],
    date: '2026',
  },
];

const SECTIONS = [
  { key: 'essay', title: 'Essays', layout: 'cards' },
  { key: 'list', title: 'Lists', layout: 'cards' },
  { key: 'short', title: 'Short Pieces', layout: 'rows' },
  { key: 'journal', title: 'From My Journal', layout: 'rows' },
];

function WritingCard({ writing }) {
  return (
    <Link to={`/writing/${writing.slug}`} style={{ textDecoration: 'none' }}>
      <div className="writing-card glass-card">
        <div className="writing-card-accent" />
        <p className="writing-card-date">{writing.label}</p>
        <h4 className="writing-card-title">{writing.title}</h4>
        <p className="writing-card-desc">{writing.excerpt}</p>
        {writing.status && (
          <div className="writing-card-tags"><span className="writing-tag">{writing.status}</span></div>
        )}
      </div>
    </Link>
  );
}

function WritingRow({ writing }) {
  return (
    <li>
      <Link to={`/writing/${writing.slug}`} className="writing-row">
        <span className="writing-row-title">
          {writing.title}
          {writing.status && <span className="writing-tag writing-row-tag">{writing.status}</span>}
        </span>
        <span className="writing-row-date">{writing.label}</span>
      </Link>
    </li>
  );
}

function SectionHeading({ children }) {
  return <h3 className="writings-section-title">{children}</h3>;
}

export default function WritingsPage() {
  usePageTitle('Writings');

  return (
    <div className="container animate-fade-in" style={{ marginTop: '5rem', paddingBlock: 'clamp(3rem, 8vw, 5rem)', minHeight: '80vh', maxWidth: '900px' }}>
      <h2 className="title">Writings</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.15rem', lineHeight: 1.7 }}>
        Essays, short pieces and pages from my journal since 2023, plus course notes from my CS classes at UofT.
      </p>

      {SECTIONS.map(({ key, title, layout }) => {
        const items = WRITINGS.filter((w) => w.section === key);
        return (
          <section key={key} className="writings-section">
            <SectionHeading>{title}</SectionHeading>
            {layout === 'cards' ? (
              <div className="writings-grid">
                {items.map((w) => <WritingCard key={w.slug} writing={w} />)}
              </div>
            ) : (
              <ul className="writing-rows">
                {items.map((w) => <WritingRow key={w.slug} writing={w} />)}
              </ul>
            )}
          </section>
        );
      })}

      <section className="writings-section">
        <SectionHeading>Course Notes</SectionHeading>
        <div className="writings-grid">
          {COURSE_NOTES.map((note) => (
            <Link key={note.id} to={`/note/${encodeURIComponent(note.id)}`} style={{ textDecoration: 'none' }}>
              <div className="writing-card glass-card">
                <div className="writing-card-accent" />
                <p className="writing-card-date">{note.date}</p>
                <h4 className="writing-card-title">{note.title}</h4>
                <p className="writing-card-desc">{note.description}</p>
                <div className="writing-card-tags">
                  {note.tags.map((t) => (
                    <span key={t} className="writing-tag">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
