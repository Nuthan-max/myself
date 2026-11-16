import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { personalData } from '../data/personal';
import { MapPin, GraduationCap, Sparkles, BookOpen, Layers } from 'lucide-react';

export default function About() {
  const metadataItems = [
    { label: 'Current Degree', value: personalData.degree, icon: GraduationCap },
    { label: 'University', value: personalData.university, icon: BookOpen },
    { label: 'Academic Standing', value: personalData.currentYear, icon: Layers },
    { label: 'Location', value: personalData.location, icon: MapPin },
  ];

  const interestPills = [
    'Circuit Schematics & PCB Design',
    'Microcontroller Firmware (ESP32/AVR)',
    'Computer Vision & Object Detection',
    'Dynamic Graph Pathfinding',
    'Edge Machine Learning Telemetry',
    'Modern Web Engineering'
  ];

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeading
          badge="01 // BACKGROUND"
          title="Bridging physical electronics with"
          highlightWord="software craft."
          subtitle="Academic foundation, engineering philosophy, and the intersections between physical circuits and computational logic."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4.5vw, 4rem)',
            alignItems: 'flex-start'
          }}
        >
          {/* Left Column: Visual & Metadata Card */}
          <div
            style={{ gridColumn: 'span 12' }}
            className="hero-right-col"
          >
            <div
              style={{
                position: 'sticky',
                top: '95px'
              }}
            >
              <div
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-color)',
                  backgroundColor: '#FFFFFF',
                  boxShadow: 'var(--shadow-medium)',
                  marginBottom: '1.25rem'
                }}
              >
                <img
                  src="/gallery/portrait.svg"
                  alt="Prathamesh Profile"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* Status pill */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 1.15rem',
                  backgroundColor: 'var(--bg-primary)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-lime)'
                    }}
                  />
                  <span className="label-mono" style={{ color: 'var(--text-primary)' }}>
                    LPU • ECE UNDERGRADUATE
                  </span>
                </div>
                <span className="label-mono" style={{ color: 'var(--text-muted)' }}>
                  CLASS OF 2029
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Metadata, and Focus */}
          <div
            style={{ gridColumn: 'span 12' }}
            className="hero-left-col"
          >
            {/* Lead Narrative */}
            <p
              className="body-lead"
              style={{
                fontSize: 'clamp(1.05rem, 1.35vw, 1.2rem)',
                lineHeight: 1.68,
                color: 'var(--text-primary)',
                marginBottom: '1.5rem'
              }}
            >
              I am an undergraduate student in <strong>Electronics and Communication Engineering</strong> at <strong>Lovely Professional University</strong>. My work focuses on the physical layer where electronic signals are measured, filtered, and converted into intelligent computational actions.
            </p>

            <p
              className="body-regular"
              style={{
                marginBottom: '1.75rem',
                lineHeight: 1.7
              }}
            >
              Having completed my Higher Secondary education with a <strong>92% academic distinction</strong> under the Karnataka State Board, I apply mathematical discipline and methodical testing to every build. From designing schematics in KiCad and programming microcontrollers to deploying graph search algorithms and computer vision models at national hackathons, I focus on practical, verifiable engineering.
            </p>

            {/* Quote Card */}
            <div
              style={{
                padding: '1.25rem 1.5rem',
                backgroundColor: 'var(--bg-primary)',
                borderLeft: '3px solid var(--accent-lavender)',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                marginBottom: '2rem'
              }}
            >
              <p
                style={{
                  fontSize: '0.98rem',
                  lineHeight: 1.6,
                  color: 'var(--text-primary)',
                  marginBottom: '0.65rem',
                  fontWeight: 500
                }}
              >
                "{personalData.editorialStatement}"
              </p>
              <span className="label-mono" style={{ color: 'var(--text-secondary)' }}>
                — PRATHAMESH
              </span>
            </div>

            {/* Academic Metadata Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '0.85rem',
                marginBottom: '2rem'
              }}
            >
              {metadataItems.map((meta) => {
                const IconComponent = meta.icon;
                return (
                  <div
                    key={meta.label}
                    style={{
                      padding: '1.1rem',
                      backgroundColor: '#FFFFFF',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem'
                    }}
                  >
                    <div
                      style={{
                        padding: '0.45rem',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(18, 19, 22, 0.04)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <IconComponent size={16} />
                    </div>
                    <div>
                      <div className="label-mono" style={{ fontSize: '0.66rem', marginBottom: '0.15rem' }}>
                        {meta.label}
                      </div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {meta.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Core Technical Focus Areas */}
            <div>
              <div className="label-mono" style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                CURRENT TECHNICAL &amp; RESEARCH FOCUS
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {interestPills.map((pill) => (
                  <span
                    key={pill}
                    className="tag-tech"
                    style={{
                      padding: '0.4rem 0.85rem',
                      fontSize: '0.8rem',
                      backgroundColor: '#FFFFFF'
                    }}
                  >
                    <Sparkles size={12} color="var(--accent-lavender)" />
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
