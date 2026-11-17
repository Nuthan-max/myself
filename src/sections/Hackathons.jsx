import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { hackathonsData } from '../data/hackathons';

export default function Hackathons() {
  return (
    <section id="hackathons" className="section-padding section-dark">
      <div className="container">
        <SectionHeading
          badge="05 // HACKATHONS"
          title="Hackathon concepts &amp;"
          highlightWord="participation."
          subtitle="Available details are included below. Event names, years, roles, implementation, and outcomes remain unconfirmed where noted."
          isDark={true}
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))', gap: '1.25rem' }}>
          {hackathonsData.map((item) => (
            <article
              key={item.id}
              className="spotlight-card"
              style={{
                padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span className="tag-tech" style={{ backgroundColor: 'rgba(139, 154, 110, 0.1)', color: 'var(--accent-lime)' }}>
                  {item.badge}
                </span>
                <span className="label-mono" style={{ textAlign: 'right' }}>
                  {item.date}
                </span>
              </div>

              <h3 className="heading-card" style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>
                {item.name}
              </h3>
              <p className="label-mono" style={{ marginBottom: '0.85rem' }}>
                {item.edition}
              </p>
              {item.teamName && (
                <p className="body-regular" style={{ marginBottom: '0.6rem' }}>
                  Team: {item.teamName} · {item.role}
                </p>
              )}
              <p className="body-regular" style={{ marginBottom: '1rem' }}>
                {item.summary}
              </p>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', paddingLeft: '1.15rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                {item.contributions.map((detail) => (
                  <li key={detail} style={{ paddingLeft: '0.2rem', fontSize: '0.88rem', lineHeight: 1.55 }}>
                    {detail}
                  </li>
                ))}
              </ul>

              {item.techStack.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-color)' }}>
                  {item.techStack.map((technology) => (
                    <span key={technology} className="tag-tech">
                      {technology}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
