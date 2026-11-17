import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { sportsData } from '../data/sports';

export default function Sports() {
  return (
    <section id="sports" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <SectionHeading
          badge="06 // SPORTS & LEADERSHIP"
          title="Beyond the"
          highlightWord="classroom."
          subtitle="Sports participation, student leadership, and a Physics workshop hosted during Class 12."
        />

        {sportsData.length === 0 ? (
          <div className="spotlight-card" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)' }}>
            <p className="body-regular">
              No sports or extracurricular activities have been added yet.
            </p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.25rem' }}>
            {sportsData.map((sport) => (
              <article key={sport.id} className="spotlight-card" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)' }}>
                <h3 className="heading-card">{sport.activity}</h3>
                {sport.year && <p className="label-mono" style={{ marginTop: '0.25rem' }}>{sport.year}</p>}
                {sport.event && <p className="body-regular" style={{ marginTop: '0.5rem' }}>{sport.event}</p>}
                {sport.description && <p className="body-regular" style={{ marginTop: '0.5rem' }}>{sport.description}</p>}
                {sport.achievement && <p className="label-mono" style={{ color: 'var(--accent-lime)', marginTop: '0.75rem' }}>{sport.achievement}</p>}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
