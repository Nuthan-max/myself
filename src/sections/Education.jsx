import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { educationData } from '../data/education';
import { GraduationCap, Award, FileCheck, Calendar, MapPin, ChevronRight } from 'lucide-react';

export default function Education({ onSelectCertificate }) {
  return (
    <section id="education" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <SectionHeading
          badge="02 // ACADEMIC RECORD"
          title="Formal Education &amp;"
          highlightWord="Academic Milestones."
          subtitle="A verifiable timeline of secondary foundation, higher secondary distinction (92%), and ongoing undergraduate engineering study."
        />

        {/* Vertical Editorial Timeline */}
        <div
          style={{
            position: 'relative',
            maxWidth: '960px',
            margin: '0 auto',
            paddingLeft: 'clamp(1rem, 3vw, 2.5rem)',
            borderLeft: '2px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {educationData.map((item, index) => (
            <div
              key={item.id}
              style={{
                position: 'relative',
                marginBottom: index === educationData.length - 1 ? 0 : 'clamp(2.5rem, 5vw, 4rem)'
              }}
            >
              {/* Timeline Indicator Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: 'calc(-1 * clamp(1rem, 3vw, 2.5rem) - 7px)',
                  top: '8px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: index === 0 ? '#D4FF00' : 'rgba(255, 255, 255, 0.4)',
                  boxShadow: index === 0 ? '0 0 10px #D4FF00' : 'none',
                  border: '2px solid #08090C'
                }}
              />

              {/* Card Container */}
              <div
                className="spotlight-card"
                style={{
                  padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                  backgroundColor: 'var(--bg-card)',
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
                    marginBottom: '0.85rem'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <span className="tag-tech" style={{ backgroundColor: index === 0 ? 'rgba(212, 255, 0, 0.15)' : 'rgba(255, 255, 255, 0.04)', borderColor: index === 0 ? 'rgba(212, 255, 0, 0.3)' : 'var(--border-color)', color: index === 0 ? '#D4FF00' : 'inherit' }}>
                        <GraduationCap size={13} />
                        {item.badge}
                      </span>
                      <span className="label-mono" style={{ color: '#8E94A0' }}>
                        {item.status}
                      </span>
                    </div>

                    <h3
                      className="heading-card"
                      style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.55rem)', color: '#F4F5F8' }}
                    >
                      {item.degree}
                    </h3>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginTop: '0.25rem', fontSize: '0.88rem' }}>
                      <span style={{ fontWeight: 600, color: '#F4F5F8' }}>{item.institution}</span>
                      <span style={{ color: '#565C68' }}>•</span>
                      <span style={{ color: '#8E94A0', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                        <MapPin size={12} /> {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Year Tag & Highlight Grade */}
                  <div style={{ textAlign: 'right' }}>
                    <div
                      className="label-mono"
                      style={{
                        padding: '0.35rem 0.75rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        color: '#C5C9D3'
                      }}
                    >
                      <Calendar size={12} />
                      {item.period}
                    </div>
                    {item.achievement && (
                      <div
                        className="font-interface"
                        style={{
                          fontSize: '1.15rem',
                          fontWeight: 750,
                          color: '#D4FF00',
                          marginTop: '0.4rem'
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
                    fontSize: '0.94rem',
                    lineHeight: 1.65,
                    color: '#8E94A0',
                    marginBottom: '1.25rem'
                  }}
                >
                  {item.description}
                </p>

                {/* Coursework & Milestones */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div className="label-mono" style={{ fontSize: '0.66rem', color: '#565C68', marginBottom: '0.5rem' }}>
                    KEY HIGHLIGHTS &amp; CURRICULUM
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {item.highlights.map((hl, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.88rem',
                          color: '#C5C9D3'
                        }}
                      >
                        <span style={{ color: '#00F0FF', fontSize: '0.9rem', lineHeight: '1.2' }}>▸</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certificate Verification Trigger */}
                <div
                  style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <FileCheck size={15} color="#D4FF00" />
                    <span className="label-mono" style={{ fontSize: '0.7rem', color: '#8E94A0' }}>
                      {item.certificateTitle}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      const certId = item.id === 'higher-secondary' ? 'cert-academic-puc' : item.id === 'secondary' ? 'cert-academic-cbse' : null;
                      if (onSelectCertificate && certId) {
                        onSelectCertificate(certId);
                      }
                    }}
                    className="btn-secondary"
                    style={{
                      padding: '0.45rem 0.9rem',
                      fontSize: '0.78rem',
                      borderRadius: 'var(--radius-pill)'
                    }}
                  >
                    View Verified Record
                    <ChevronRight size={13} />
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
