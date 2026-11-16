import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { personalData } from '../data/personal';
import { MapPin, GraduationCap, Compass, Sparkles, BookOpen, Layers } from 'lucide-react';

export default function About() {
  const metadataItems = [
    { label: 'Current Degree', value: personalData.degree, icon: GraduationCap },
    { label: 'University', value: personalData.university, icon: BookOpen },
    { label: 'Academic Standing', value: personalData.currentYear, icon: Layers },
    { label: 'Location & Origin', value: personalData.location, icon: MapPin },
  ];

  const interestPills = [
    'Circuit Schematics & PCB Design',
    'Microcontroller Firmware (ESP32/AVR)',
    'Computer Vision & Object Detection',
    'Dynamic Graph Pathfinding',
    'Edge Machine Learning Telemetry',
    'Luxury Web Architecture'
  ];

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeading
          badge="01 // IDENTITY"
          title="Bridging Hardware Rigor with"
          italicWord="Software Elegance."
          subtitle="An editorial perspective on my academic journey, engineering philosophy, and the intersections between physical circuits and computational logic."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 5vw, 4.5rem)',
            alignItems: 'flex-start'
          }}
        >
          {/* Left Column: Asymmetric Visual & Metadata Card */}
          <div
            style={{ gridColumn: 'span 12' }}
            className="hero-right-col"
          >
            <div
              style={{
                position: 'sticky',
                top: '110px'
              }}
            >
              <div
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-color)',
                  backgroundColor: '#FFFFFF',
                  boxShadow: 'var(--shadow-medium)',
                  marginBottom: '1.5rem'
                }}
              >
                <img
                  src="/gallery/portrait.svg"
                  alt="Prathamesh Engineering Profile"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* Monogram stamp */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem 1.25rem',
                  backgroundColor: 'var(--bg-primary)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-lime)'
                    }}
                  />
                  <span className="label-mono" style={{ color: 'var(--text-primary)' }}>
                    ARCHIVE ID: LPU-ECE-2026
                  </span>
                </div>
                <span className="label-mono" style={{ color: 'var(--text-muted)' }}>
                  PUNJAB / KARNATAKA
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio, Academic Metadata, and Philosophy */}
          <div
            style={{ gridColumn: 'span 12' }}
            className="hero-left-col"
          >
            {/* Lead Narrative */}
            <p
              className="body-lead"
              style={{
                fontSize: 'clamp(1.15rem, 1.6vw, 1.4rem)',
                lineHeight: 1.7,
                color: 'var(--text-primary)',
                marginBottom: '1.75rem'
              }}
            >
              I am an undergraduate student in <strong>Electronics and Communication Engineering</strong> at <strong>Lovely Professional University</strong>. My work lives at the physical boundary where physical electronic signals convert into intelligent computational decisions.
            </p>

            <p
              className="body-regular"
              style={{
                fontSize: '1.02rem',
                lineHeight: 1.8,
                marginBottom: '2rem'
              }}
            >
              Having completed my Higher Secondary education with a <strong>92% academic distinction</strong> under the Karnataka State Board, I approach engineering with equal measures of mathematical precision and hands-on curiosity. Whether designing 2-layer PCBs in KiCad, writing low-latency pathfinding simulations in Python, or training computer vision models for environmental telemetry at national hackathons, I focus on building systems that solve tangible, real-world problems.
            </p>

            {/* Editorial Quote Card */}
            <div
              style={{
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                backgroundColor: 'var(--bg-primary)',
                borderLeft: '4px solid var(--accent-lavender)',
                borderRadius: '0 var(--radius-lg) var(--radius-lg) 0',
                marginBottom: '2.5rem'
              }}
            >
              <p
                className="font-editorial"
                style={{
                  fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  color: 'var(--text-primary)',
                  marginBottom: '1rem'
                }}
              >
                "{personalData.editorialStatement}"
              </p>
              <span className="label-mono" style={{ color: 'var(--text-secondary)' }}>
                — PRATHAMESH // PERSONAL IDENTITY MANIFESTO
              </span>
            </div>

            {/* Structured Academic Metadata Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}
            >
              {metadataItems.map((meta) => {
                const IconComponent = meta.icon;
                return (
                  <div
                    key={meta.label}
                    style={{
                      padding: '1.25rem',
                      backgroundColor: '#FFFFFF',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.85rem'
                    }}
                  >
                    <div
                      style={{
                        padding: '0.5rem',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(23, 23, 23, 0.04)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <IconComponent size={18} />
                    </div>
                    <div>
                      <div className="label-mono" style={{ fontSize: '0.68rem', marginBottom: '0.2rem' }}>
                        {meta.label}
                      </div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {meta.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Core Technical Focus Areas */}
            <div>
              <div className="label-mono" style={{ color: 'var(--text-secondary)', marginBottom: '0.85rem' }}>
                CURRENT RESEARCH &amp; TECHNICAL INTERESTS
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {interestPills.map((pill) => (
                  <span
                    key={pill}
                    className="tag-tech"
                    style={{
                      padding: '0.45rem 0.95rem',
                      fontSize: '0.82rem',
                      backgroundColor: '#FFFFFF'
                    }}
                  >
                    <Sparkles size={13} color="var(--accent-lavender)" />
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
