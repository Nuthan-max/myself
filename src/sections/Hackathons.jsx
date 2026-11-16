import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { hackathonsData } from '../data/hackathons';
import { Trophy, Users, Calendar, Award, ChevronRight, FileCheck, CheckCircle2 } from 'lucide-react';

export default function Hackathons({ onSelectCertificate }) {
  const [activeHackathon, setActiveHackathon] = useState(hackathonsData[0]);

  return (
    <section id="hackathons" className="section-padding section-dark">
      <div className="container">
        <SectionHeading
          badge="05 // HACKATHONS"
          title="Hackathons &amp; Collegiate"
          highlightWord="Innovation Sprints."
          subtitle="High-intensity 24h &amp; 36h innovation challenges, rapid prototyping under Team Byte Me, and verifiable evaluations."
          isDark={true}
        />

        {/* Byte Me Team Identity Banner */}
        <div
          style={{
            padding: '1.5rem 2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-dark)',
            marginBottom: '3rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: 'rgba(215, 241, 113, 0.15)',
                border: '1px solid var(--accent-lime)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Users size={22} color="var(--accent-lime)" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span className="font-interface" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>
                  TEAM BYTE ME
                </span>
                <span className="tag-tech" style={{ backgroundColor: 'rgba(215, 241, 113, 0.2)', borderColor: 'var(--accent-lime)', color: 'var(--accent-lime)' }}>
                  Active Engineering Unit
                </span>
              </div>
              <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.88rem', marginTop: '0.2rem' }}>
                Collegiate hardware/software hackathon team specializing in IoT telemetry, computer vision &amp; rapid algorithmic prototypes.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div>
              <div className="font-mono" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-lime)' }}>
                3+
              </div>
              <div className="label-mono" style={{ fontSize: '0.68rem', color: '#777777' }}>
                COMPLETED SPRINTS
              </div>
            </div>
            <div>
              <div className="font-mono" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-lavender)' }}>
                100%
              </div>
              <div className="label-mono" style={{ fontSize: '0.68rem', color: '#777777' }}>
                PROTOTYPE COMPLETION
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Event Selector Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '0.85rem',
            overflowX: 'auto',
            paddingBottom: '1rem',
            marginBottom: '2rem'
          }}
        >
          {hackathonsData.map((hack) => {
            const isSelected = activeHackathon.id === hack.id;
            return (
              <button
                key={hack.id}
                type="button"
                onClick={() => setActiveHackathon(hack)}
                style={{
                  padding: '1rem 1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: isSelected ? 'var(--bg-dark-card)' : 'rgba(255, 255, 255, 0.02)',
                  border: isSelected ? '1px solid var(--accent-lime)' : '1px solid var(--border-dark)',
                  color: isSelected ? '#FFFFFF' : 'var(--text-light-secondary)',
                  textAlign: 'left',
                  minWidth: '240px',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  flexShrink: 0
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span className="label-mono" style={{ color: isSelected ? 'var(--accent-lime)' : '#666666' }}>
                    {hack.date}
                  </span>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-mono)',
                      color: isSelected ? 'var(--accent-lime)' : '#888'
                    }}
                  >
                    {hack.badge}
                  </span>
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>
                  {hack.name}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#777777', marginTop: '0.2rem' }}>
                  {hack.organizer}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Hackathon Detailed Stage Card */}
        <div
          className="spotlight-dark-card"
          style={{
            padding: 'clamp(1.75rem, 4vw, 3rem)',
            backgroundColor: 'var(--bg-dark-card)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-dark)'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: 'clamp(1.5rem, 4vw, 3rem)',
              alignItems: 'center'
            }}
          >
            {/* Left: Hackathon Graphic Preview */}
            <div style={{ gridColumn: 'span 12' }} className="hero-left-col">
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: '#0a0a0f'
                }}
              >
                <img
                  src={activeHackathon.image}
                  alt={activeHackathon.name}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

            {/* Right: Contributions, Team Role & Outcomes */}
            <div
              style={{
                gridColumn: 'span 12',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
              className="hero-right-col"
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                  <span className="tag-tech" style={{ backgroundColor: 'rgba(215, 241, 113, 0.2)', borderColor: 'var(--accent-lime)', color: 'var(--accent-lime)' }}>
                    Role: {activeHackathon.role}
                  </span>
                  <span className="label-mono" style={{ color: '#888888' }}>
                    {activeHackathon.edition}
                  </span>
                </div>
                <h3 className="heading-card" style={{ fontSize: '1.8rem', color: '#FFFFFF' }}>
                  {activeHackathon.projectTitle}
                </h3>
              </div>

              <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.96rem', lineHeight: 1.7 }}>
                {activeHackathon.summary}
              </p>

              {/* Verified Contributions */}
              <div>
                <div className="label-mono" style={{ color: 'var(--accent-lime)', marginBottom: '0.6rem' }}>
                  CORE CONTRIBUTIONS &amp; TASKS
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {activeHackathon.contributions.map((c, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem',
                        fontSize: '0.9rem',
                        color: '#E0E0E0'
                      }}
                    >
                      <CheckCircle2 size={16} color="var(--accent-lime)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack & Certificate Button */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {activeHackathon.techStack.map((tech) => (
                    <span key={tech} className="tag-tech">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (onSelectCertificate) {
                      onSelectCertificate('cert-hackathon-sih');
                    }
                  }}
                  className="btn-accent"
                  style={{ padding: '0.65rem 1.25rem', fontSize: '0.84rem' }}
                >
                  <FileCheck size={15} />
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
