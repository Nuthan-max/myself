import React from 'react';
import { X, Printer, Download, GraduationCap, Award, Cpu, Code2 } from 'lucide-react';
import { personalData } from '../data/personal';
import { educationData } from '../data/education';
import { skillsData } from '../data/skills';
import { projectsData } from '../data/projects';
import { hackathonsData } from '../data/hackathons';

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="modal-overlay open"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '850px',
          padding: 'clamp(1.5rem, 4vw, 3rem)',
          backgroundColor: '#FFFFFF',
          color: '#111111'
        }}
      >
        {/* Controls Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid #e0e0e0'
          }}
          className="no-print"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="tag-tech" style={{ backgroundColor: 'rgba(215, 241, 113, 0.3)', borderColor: '#D7F171' }}>
              OFFICIAL CURRICULUM VITAE
            </span>
            <span className="label-mono">NEXUS SYSTEM</span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={handlePrint}
              className="btn-primary"
              style={{ padding: '0.55rem 1.25rem', fontSize: '0.84rem' }}
            >
              <Printer size={15} /> Print / Save as PDF
            </button>
            <button
              onClick={onClose}
              className="btn-secondary"
              style={{ padding: '0.5rem', borderRadius: '50%' }}
              title="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div id="printable-cv">
          {/* Header */}
          <div style={{ borderBottom: '2px solid #111111', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
              <h1 className="font-interface" style={{ fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>
                {personalData.name.toUpperCase()}
              </h1>
              <span className="label-mono" style={{ fontSize: '0.82rem', color: '#555555' }}>
                {personalData.tagline}
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginTop: '0.75rem', fontSize: '0.88rem', color: '#444444' }}>
              <span>Email: <strong>{personalData.socials.email}</strong></span>
              <span>Institution: <strong>{personalData.university}</strong></span>
              <span>Degree: <strong>B.Tech ECE (2026–Present)</strong></span>
            </div>
          </div>

          {/* Education Section */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 className="heading-card" style={{ fontSize: '1.1rem', borderBottom: '1px solid #111111', paddingBottom: '0.3rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              1. Formal Education
            </h3>
            {educationData.map((edu) => (
              <div key={edu.id} style={{ marginBottom: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.95rem' }}>
                  <span>{edu.degree} — {edu.institution}</span>
                  <span>{edu.period}</span>
                </div>
                {edu.achievement && (
                  <div style={{ fontSize: '0.85rem', color: '#25825d', fontWeight: 600 }}>
                    Achievement: {edu.achievement}
                  </div>
                )}
                <div style={{ fontSize: '0.85rem', color: '#555555', marginTop: '0.2rem' }}>
                  {edu.description}
                </div>
              </div>
            ))}
          </div>

          {/* Core Technical Projects */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 className="heading-card" style={{ fontSize: '1.1rem', borderBottom: '1px solid #111111', paddingBottom: '0.3rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              2. Selected Engineering Projects
            </h3>
            {projectsData.map((p) => (
              <div key={p.id} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.95rem' }}>
                  <span>{p.title} ({p.subtitle})</span>
                  <span style={{ fontSize: '0.85rem', color: '#666' }}>{p.category}</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#444', marginTop: '0.25rem' }}>
                  <strong>Problem:</strong> {p.problemStatement}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#444', marginTop: '0.25rem' }}>
                  <strong>Key Results:</strong> {p.results.join(' • ')}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills Directory */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 className="heading-card" style={{ fontSize: '1.1rem', borderBottom: '1px solid #111111', paddingBottom: '0.3rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              3. Technical Skills Directory
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', fontSize: '0.85rem' }}>
              <div>
                <strong>Programming:</strong><br />
                {skillsData.programming.skills.map((s) => s.name).join(', ')}
              </div>
              <div>
                <strong>Electronics &amp; Hardware:</strong><br />
                {skillsData.electronics.skills.map((s) => s.name).join(', ')}
              </div>
              <div>
                <strong>Development Tools:</strong><br />
                {skillsData.development.skills.map((s) => s.name).join(', ')}
              </div>
              <div>
                <strong>Emerging Tech:</strong><br />
                {skillsData.emerging.skills.map((s) => s.name).join(', ')}
              </div>
            </div>
          </div>

          {/* Hackathons & Leadership */}
          <div>
            <h3 className="heading-card" style={{ fontSize: '1.1rem', borderBottom: '1px solid #111111', paddingBottom: '0.3rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              4. Hackathons &amp; Team Leadership (Team Byte Me)
            </h3>
            {hackathonsData.map((h) => (
              <div key={h.id} style={{ marginBottom: '0.6rem', fontSize: '0.85rem' }}>
                <span style={{ fontWeight: 700 }}>{h.name} ({h.date})</span> — <em>{h.role}</em>: {h.projectTitle} ({h.badge})
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
