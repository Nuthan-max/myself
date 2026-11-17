import React from 'react';
import SectionHeading from '../components/SectionHeading';
import WindowFrame from '../components/WindowFrame';
import { personalData } from '../data/personal';
import { MapPin, GraduationCap, BookOpen, Layers, Sparkles } from 'lucide-react';

export default function About() {
  const metadataItems = [
    { label: 'Degree', value: personalData.degree, icon: GraduationCap },
    { label: 'Institution', value: `${personalData.university} • ${personalData.institutionLocation}`, icon: BookOpen },
    { label: 'Current semester', value: personalData.currentYear, icon: Layers },
    { label: 'From', value: personalData.location, icon: MapPin }
  ];

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeading
          badge="01 // PROFILE"
          title="Learning across electronics"
          highlightWord="and computing."
          subtitle="A first-semester ECE student at Lovely Professional University, with interests spanning hardware, software, and practical engineering."
        />

        <div
          className="about-layout-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
            gap: 'clamp(2rem, 4.5vw, 3.5rem)',
            alignItems: 'flex-start'
          }}
        >
          <div style={{ gridColumn: 'span 12' }} className="hero-right-col">
            <WindowFrame
              title="StudentProfile.app"
              subtitle="Electronics & Communication Engineering"
              badge={personalData.currentYear}
            >
              <div style={{ padding: '1.4rem' }}>
                <div style={{ marginBottom: '1.2rem' }}>
                  <h3 className="font-interface" style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {personalData.name.toUpperCase()}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-annotation)', marginTop: '0.2rem' }}>
                    {personalData.degree}
                  </div>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '0.65rem'
                  }}
                >
                  {metadataItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.65rem',
                          padding: '0.7rem 0.8rem',
                          backgroundColor: 'rgba(85, 91, 77, 0.04)',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-sm)'
                        }}
                      >
                        <Icon size={15} color="var(--accent-lime)" />
                        <div>
                          <div className="label-mono" style={{ fontSize: '0.62rem', marginBottom: '0.15rem' }}>
                            {item.label}
                          </div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                            {item.value}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </WindowFrame>
          </div>

          <div style={{ gridColumn: 'span 12' }} className="hero-left-col">
            <p
              className="body-lead"
              style={{
                fontSize: 'clamp(1.05rem, 1.35vw, 1.2rem)',
                lineHeight: 1.68,
                color: 'var(--text-primary)',
                marginBottom: '1.75rem'
              }}
            >
              {personalData.bio}
            </p>

            <div
              style={{
                padding: '1.25rem 1.5rem',
                backgroundColor: 'var(--bg-card)',
                borderLeft: '3px solid var(--accent-lime)',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                border: '1px solid var(--border-color)',
                borderLeftColor: 'var(--accent-lime)',
                marginBottom: '1.75rem'
              }}
            >
              <div className="label-mono" style={{ color: 'var(--accent-lime)', marginBottom: '0.5rem' }}>
                CAREER DIRECTION
              </div>
              <p style={{ fontSize: '0.96rem', lineHeight: 1.6, color: 'var(--text-primary)', fontWeight: 500 }}>
                {personalData.careerDirection}
              </p>
            </div>

            <div>
              <div className="label-mono" style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                INTERESTS &amp; AREAS OF EXPOSURE
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {personalData.interests.map((interest) => (
                  <span
                    key={interest}
                    className="tag-tech"
                    style={{
                      padding: '0.4rem 0.85rem',
                      fontSize: '0.8rem',
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-color)'
                    }}
                  >
                    <Sparkles size={12} color="var(--accent-cyan)" />
                    {interest}
                  </span>
                ))}
              </div>
              <p className="body-regular" style={{ marginTop: '0.75rem' }}>
                These are interests and areas of exposure, not claims of advanced proficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
