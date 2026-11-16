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
          badge="06 // ATHLETICS &amp; DRIVE"
          title="Competitive Sports &amp;"
          highlightWord="Extracurriculars."
          subtitle="Physical endurance, team leadership on the pitch, and fast tactical decision-making — grounding algorithmic rigor in real-world athleticism."
        />

        {/* Masonry / Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem'
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
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: isHovered ? '1px solid rgba(212, 255, 0, 0.35)' : '1px solid var(--border-color)',
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
                    backgroundColor: '#090B0E',
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
                      transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                  
                  {/* Floating Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      padding: '0.3rem 0.75rem',
                      backgroundColor: 'rgba(9, 11, 14, 0.88)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: 'var(--radius-pill)',
                      color: '#D4FF00',
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-mono)',
                      border: '1px solid rgba(212, 255, 0, 0.3)'
                    }}
                  >
                    {sport.badge}
                  </div>
                </div>

                {/* Content Details */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
                      <h3 className="heading-card" style={{ fontSize: '1.3rem', color: '#F4F5F8' }}>
                        {sport.activity}
                      </h3>
                      <span className="label-mono" style={{ fontSize: '0.7rem', color: '#888' }}>
                        {sport.year}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.85rem' }}>
                      <Trophy size={13} color="#D4FF00" />
                      <span style={{ fontSize: '0.85rem', fontWeight: 650, color: '#D4FF00' }}>
                        {sport.achievement}
                      </span>
                    </div>

                    <p className="body-regular" style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#8E94A0', marginBottom: '1.15rem' }}>
                      {sport.description}
                    </p>
                  </div>

                  {/* Key Takeaway Pill & Trigger */}
                  <div
                    style={{
                      paddingTop: '0.85rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.76rem', color: '#8E94A0' }}>
                      <Zap size={12} color="#00F0FF" />
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
                      style={{ padding: '0.4rem 0.8rem', fontSize: '0.76rem' }}
                    >
                      Certificate / View
                      <ArrowUpRight size={12} />
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
