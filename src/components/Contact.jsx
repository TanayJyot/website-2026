import React from 'react';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';

const links = [
  { href: 'mailto:tj.singhchawla@mail.utoronto.ca', label: 'Email Me', Icon: Mail },
  { href: 'https://github.com/tanayjyot', label: 'GitHub', Icon: Github, external: true },
  { href: 'https://linkedin.com/in/tanayjyot', label: 'LinkedIn', Icon: Linkedin, external: true },
  { href: '/Resume.pdf', label: 'Resume', Icon: FileText, external: true },
];

export default function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-inner">
        <h2 className="title" id="contact-title">Get In Touch</h2>
        <p className="contact-intro">
          Happy to chat about ML infrastructure, LLM inference, research, or UTMIST.
        </p>

        <ul className="contact-links" role="list">
          {links.map((link) => {
            const { href, label, Icon, external } = link;
            return (
              <li key={label}>
                <a
                  href={href}
                  className="glass-card contact-link"
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <Icon size={20} aria-hidden="true" focusable="false" />
                  <span>{label}</span>
                  {external && <span className="sr-only"> (opens in a new tab)</span>}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="contact-footer">
        © {new Date().getFullYear()} Tanayjyot Singh Chawla. Built with React & Vite.
      </p>
    </section>
  );
}
