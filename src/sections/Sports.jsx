import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { sportsData } from '../data/sports';
import { Trophy, Activity, Medal, ArrowUpRight, Award, Zap } from 'lucide-react';

export default function Sports({ onSelectCertificate, onOpenLightbox }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="sports" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <SectionHeading
          badge="06 // BEYOND ENGINEERING"
          title="Athletics, Competitive Sports &amp;"
          italicWord="Extracurricular Drive."
          subtitle="Physical endurance, team leadership on the pitch, and fast tactical decision-making — grounding algorithmic rigor in real-world athleticism."
        />

        {/* Masonry / Grid of Large Photographic Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {sportsData.map((sport) => {
            const isHovered = hoveredCard === sport.id;
            return (
              <div
                key={sport.id}
                className="spotlight-card"
                onMouseEnter={() => setHoveredCard(sport.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: isHovered ? '1px solid rgba(23, 23, 23, 0.3)' : '1px solid var(--border-color)',
                  boxShadow: isHovered ? 'var(--shadow-card-hover)' : 'var(--shadow-subtle)',
                  transition: 'all var(--transition-normal)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Visual Area */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '16 / 10',
                    backgroundColor: '#111111',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    if (onOpenLightbox) {
                      onOpenLightbox({
                        id: sport.id,
                        title: sport.activity,
                        category: 'Sports',
                        year: sport.year,
                        caption: `${sport.achievement} — ${sport.description}`,
                        image: sport.image
                      });
                    }
                  }}
                >
                  <img
                    src={sport.image}
                    alt={sport.activity}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                  
                  {/* Floating Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      padding: '0.35rem 0.85rem',
                      backgroundColor: 'rgba(17, 17, 17, 0.85)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: 'var(--radius-pill)',
                      color: 'var(--accent-lime)',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      border: '1px solid rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    {sport.badge}
                  </div>
                </div>

                {/* Content Details */}
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                      <h3 className="heading-card" style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>
                        {sport.activity}
                      </h3>
                      <span className="label-mono" style={{ fontSize: '0.72rem' }}>
                        {sport.year}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <Trophy size={14} color="#25825d" />
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#25825d' }}>
                        {sport.achievement}
                      </span>
                    </div>

                    <p className="body-regular" style={{ fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {sport.description}
                    </p>
                  </div>

                  {/* Key Takeaway Pill & Trigger */}
                  <div
                    style={{
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border-color)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      <Zap size={13} color="var(--accent-lavender)" />
                      <span>{sport.keyTakeaway}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        const certId = sport.id === 'athletics' ? 'cert-sports-relay' : sport.id === 'cricket' ? 'cert-sports-cricket' : null;
                        if (onSelectCertificate && certId) {
                          onSelectCertificate(certId);
                        } else if (onOpenLightbox) {
                          onOpenLightbox({
                            id: sport.id,
                            title: sport.activity,
                            category: 'Sports',
                            year: sport.year,
                            caption: `${sport.achievement} — ${sport.description}`,
                            image: sport.image
                          });
                        }
                      }}
                      className="btn-secondary"
                      style={{ padding: '0.45rem 0.85rem', fontSize: '0.78rem' }}
                    >
                      Certificate / View
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
