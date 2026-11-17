import React from 'react';
import { X, Printer } from 'lucide-react';
import { personalData } from '../data/personal';
import { educationData } from '../data/education';
import { skillsData } from '../data/skills';
import { projectsData } from '../data/projects';
import { hackathonsData } from '../data/hackathons';
import { certificatesData } from '../data/certificates';
import { sportsData } from '../data/sports';

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay open" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="cv-title">
      <div
        className="modal-content"
        onClick={(event) => event.stopPropagation()}
        style={{
          maxWidth: '850px',
          padding: 'clamp(1.5rem, 4vw, 3rem)',
          backgroundColor: '#FFFFFF',
          color: '#111111'
        }}
      >
        <div
          className="no-print"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid #e0e0e0'
          }}
        >
          <div>
            <h2 id="cv-title" className="heading-card" style={{ fontSize: '1.2rem' }}>
              Portfolio résumé
            </h2>
            <span className="label-mono">Print or save as PDF</span>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button onClick={handlePrint} className="btn-primary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.84rem' }}>
              <Printer size={15} /> Print / Save as PDF
            </button>
            <button onClick={onClose} className="btn-secondary" style={{ padding: '0.5rem', borderRadius: '50%' }} title="Close">
              <X size={18} />
            </button>
          </div>
        </div>

        <div id="printable-cv">
          <header style={{ borderBottom: '2px solid #111111', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
            <h1 className="font-interface" style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>
              {personalData.name}
            </h1>
            <p style={{ marginTop: '0.25rem', fontWeight: 600 }}>{personalData.tagline}</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.88rem', color: '#444444' }}>
              {personalData.university} · {personalData.institutionLocation} · From {personalData.location}
            </p>
            {personalData.socials.email && (
              <p style={{ marginTop: '0.25rem', fontSize: '0.88rem', color: '#444444' }}>
                Email: {personalData.socials.email}
              </p>
            )}
            {personalData.phone && (
              <p style={{ marginTop: '0.25rem', fontSize: '0.88rem', color: '#444444' }}>
                Phone: {personalData.phone}
              </p>
            )}
            {personalData.socials.github && (
              <p style={{ marginTop: '0.25rem', fontSize: '0.88rem', color: '#444444' }}>
                GitHub: {personalData.socials.github}
              </p>
            )}
          </header>

          <section style={{ marginBottom: '1.5rem' }}>
            <h3 className="heading-card" style={{ fontSize: '1.05rem', borderBottom: '1px solid #111111', paddingBottom: '0.3rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
              Profile
            </h3>
            <p style={{ fontSize: '0.84rem', color: '#444444', lineHeight: 1.6 }}>
              {personalData.bio}
            </p>
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h3 className="heading-card" style={{ fontSize: '1.05rem', borderBottom: '1px solid #111111', paddingBottom: '0.3rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
              Education
            </h3>
            {educationData.map((item) => (
              <div key={item.id} style={{ marginBottom: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', fontWeight: 700, fontSize: '0.92rem' }}>
                  <span>{item.degree} — {item.institution}</span>
                  <span>{item.period}</span>
                </div>
                <p style={{ fontSize: '0.84rem', color: '#555555', marginTop: '0.15rem' }}>
                  {item.location} · {item.status}{item.achievement ? ` · ${item.achievement}` : ''}
                </p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h3 className="heading-card" style={{ fontSize: '1.05rem', borderBottom: '1px solid #111111', paddingBottom: '0.3rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
              Sports and leadership
            </h3>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.84rem' }}>
              {sportsData.map((item) => (
                <li key={item.id} style={{ marginBottom: '0.35rem' }}>
                  <strong>{item.activity}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h3 className="heading-card" style={{ fontSize: '1.05rem', borderBottom: '1px solid #111111', paddingBottom: '0.3rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
              Projects and exploration
            </h3>
            {projectsData.map((project) => (
              <div key={project.id} style={{ marginBottom: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', fontWeight: 700, fontSize: '0.92rem' }}>
                  <span>{project.title}</span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 500 }}>{project.status}</span>
                </div>
                <p style={{ fontSize: '0.84rem', color: '#444444', marginTop: '0.2rem' }}>
                  {project.shortDescription}
                </p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h3 className="heading-card" style={{ fontSize: '1.05rem', borderBottom: '1px solid #111111', paddingBottom: '0.3rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
              Interests and tools explored
            </h3>
            <p style={{ fontSize: '0.8rem', color: '#555555', marginBottom: '0.6rem' }}>
              Interests and areas of exposure; not claims of advanced proficiency.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', fontSize: '0.84rem' }}>
              {Object.values(skillsData).map((group) => (
                <div key={group.category}>
                  <strong>{group.category}:</strong>{' '}
                  {group.skills.map((skill) => skill.name).join(', ')}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="heading-card" style={{ fontSize: '1.05rem', borderBottom: '1px solid #111111', paddingBottom: '0.3rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
              Hackathons and prototypes
            </h3>
            {hackathonsData.map((item) => (
              <div key={item.id} style={{ marginBottom: '0.75rem', fontSize: '0.84rem' }}>
                <strong>{item.projectTitle}</strong> · {item.date}
                <p style={{ color: '#444444', marginTop: '0.15rem' }}>{item.summary}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h3 className="heading-card" style={{ fontSize: '1.05rem', borderBottom: '1px solid #111111', paddingBottom: '0.3rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
              Certificates
            </h3>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.84rem' }}>
              {certificatesData.map((certificate) => (
                <li key={certificate.id} style={{ marginBottom: '0.35rem' }}>
                  {certificate.title}
                  {certificate.issuer ? ` — ${certificate.issuer}` : ' — issuer and details to confirm'}
                </li>
              ))}
            </ul>
          </section>

          <section style={{ marginTop: '1.5rem' }}>
            <h3 className="heading-card" style={{ fontSize: '1.05rem', borderBottom: '1px solid #111111', paddingBottom: '0.3rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
              Career direction
            </h3>
            <p style={{ fontSize: '0.84rem', color: '#444444' }}>{personalData.careerDirection}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
