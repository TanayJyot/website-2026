import React from 'react';

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <h2 className="title" id="about-title">About Me</h2>

        <div className="glass-card about-card">
          <div>
            <h3 className="about-heading">What I Work On</h3>
            <p>
              I'm a Computer Science student at the <strong>University of Toronto</strong>, with a minor in Economics and a Certificate in Business Fundamentals.
            </p>
            <p>
              My work is in ML infrastructure and inference: serving and benchmarking LLMs, recommender pipelines and feature stores at <strong>Shopify</strong>, and on-prem LLM serving at the <strong>Human-Centered Data Science Lab</strong>.
            </p>
          </div>

          <div>
            <h3 className="about-heading">Beyond the Code</h3>
            <p>
              I'm <strong>Co-President of UTMIST</strong>, North America's largest AI student organization, where we run events like DevCon and EigenAI.
            </p>
            <p>
              Outside of that, I play <strong>guitar</strong> and play <strong>Clash Royale</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
