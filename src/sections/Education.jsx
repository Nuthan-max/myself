import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { educationData } from '../data/education';
import { GraduationCap, Award, FileCheck, Calendar, MapPin, ChevronRight } from 'lucide-react';

export default function Education({ onSelectCertificate }) {
  return (
    <section id="education" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <SectionHeading
          badge="02 // ACADEMIC JOURNEY"
          title="Formal Education &amp;"
          italicWord="Academic Milestones."
          subtitle="A verifiable vertical chronicle of secondary foundation, higher secondary distinction (92%), and ongoing undergraduate engineering study."
        />

        {/* Vertical Editorial Timeline */}
        <div
          style={{
            position: 'relative',
            maxWidth: '1000px',
            margin: '0 auto',
            paddingLeft: 'clamp(1rem, 3vw, 2.5rem)',
            borderLeft: '2px solid var(--border-color)'
          }}
        >
          {educationData.map((item, index) => (
            <div
              key={item.id}
              style={{
                position: 'relative',
                marginBottom: index === educationData.length - 1 ? 0 : 'clamp(3rem, 6vw, 5rem)'
              }}
            >
              {/* Timeline Indicator Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: 'calc(-1 * clamp(1rem, 3vw, 2.5rem) - 7px)',
                  top: '6px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: index === 0 ? 'var(--accent-lime)' : 'var(--text-primary)',
                  border: '3px solid var(--bg-primary)',
                  boxShadow: '0 0 0 2px var(--border-color)'
                }}
              />

              {/* Card Container */}
              <div
                className="spotlight-card"
                style={{
                  padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-xl)'
                }}
              >
                {/* Header Row */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    marginBottom: '1rem'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
                      <span className="tag-tech" style={{ backgroundColor: index === 0 ? 'rgba(215, 241, 113, 0.3)' : 'rgba(23, 23, 23, 0.05)' }}>
                        <GraduationCap size={13} />
                        {item.badge}
                      </span>
                      <span className="label-mono" style={{ color: 'var(--text-secondary)' }}>
                        {item.status}
                      </span>
                    </div>

                    <h3
                      className="heading-card"
                      style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.75rem)', color: 'var(--text-primary)' }}
                    >
                      {item.degree}
                    </h3>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.25rem' }}>
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{item.institution}</span>
                      <span style={{ color: 'var(--text-muted)' }}>•</span>
                      <span style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.88rem' }}>
                        <MapPin size={13} /> {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Year Tag & Highlight Grade */}
                  <div style={{ textAlign: 'right' }}>
                    <div
                      className="label-mono"
                      style={{
                        padding: '0.4rem 0.85rem',
                        backgroundColor: 'var(--bg-primary)',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid var(--border-color)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <Calendar size={13} />
                      {item.period}
                    </div>
                    {item.achievement && (
                      <div
                        className="font-interface"
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: 800,
                          color: '#25825d',
                          marginTop: '0.5rem'
                        }}
                      >
                        {item.achievement}
                      </div>
                    )}
                  </div>
                </div>

                {/* Narrative Description */}
                <p
                  className="body-regular"
                  style={{
                    fontSize: '0.98rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem'
                  }}
                >
                  {item.description}
                </p>

                {/* Coursework & Milestones */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <div className="label-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                    KEY HIGHLIGHTS &amp; CURRICULUM
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {item.highlights.map((hl, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.6rem',
                          fontSize: '0.92rem',
                          color: 'var(--text-primary)'
                        }}
                      >
                        <span style={{ color: 'var(--accent-lavender)', fontSize: '1rem', lineHeight: '1.2' }}>▸</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certificate Verification Trigger */}
                <div
                  style={{
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border-color)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FileCheck size={16} color="#25825d" />
                    <span className="label-mono" style={{ fontSize: '0.72rem' }}>
                      {item.certificateTitle}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      // Map to certificate object
                      const certId = item.id === 'higher-secondary' ? 'cert-academic-puc' : item.id === 'secondary' ? 'cert-academic-cbse' : null;
                      if (onSelectCertificate && certId) {
                        onSelectCertificate(certId);
                      }
                    }}
                    className="btn-secondary"
                    style={{
                      padding: '0.5rem 1rem',
                      fontSize: '0.82rem',
                      borderRadius: 'var(--radius-pill)'
                    }}
                  >
                    View Verified Record
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
