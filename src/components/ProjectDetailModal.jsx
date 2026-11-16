import React from 'react';
import { X, Github, ExternalLink, Cpu, CheckCircle2, Layers } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

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
          maxWidth: '920px',
          padding: 'clamp(1.5rem, 3vw, 2.5rem)',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          color: '#F4F5F8'
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1rem',
            marginBottom: '1.25rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '1rem'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <span className="tag-tech" style={{ backgroundColor: 'rgba(212, 255, 0, 0.1)', borderColor: 'rgba(212, 255, 0, 0.3)', color: '#D4FF00' }}>
                System {project.number}
              </span>
              <span className="label-mono" style={{ color: '#888' }}>{project.category}</span>
            </div>
            <h3 className="heading-card" style={{ fontSize: '1.55rem', color: '#F4F5F8' }}>
              {project.title}
            </h3>
            <p className="body-regular" style={{ fontSize: '0.9rem', color: '#8E94A0' }}>
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="btn-secondary"
            style={{ padding: '0.45rem', borderRadius: '50%' }}
            title="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        {/* Hero Visual */}
        <div
          style={{
            backgroundColor: '#090B0E',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            marginBottom: '1.75rem',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <img
            src={project.heroImage}
            alt={project.title}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Problem & Solution Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
            marginBottom: '1.75rem'
          }}
        >
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(255, 255, 255, 0.06)'
            }}
          >
            <span className="label-mono" style={{ color: '#ff6b6b', display: 'block', marginBottom: '0.4rem' }}>
              ● PROBLEM STATEMENT
            </span>
            <p className="body-regular" style={{ color: '#C5C9D3', fontSize: '0.88rem' }}>
              {project.problemStatement}
            </p>
          </div>

          <div
            style={{
              padding: '1.25rem',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(255, 255, 255, 0.06)'
            }}
          >
            <span className="label-mono" style={{ color: '#D4FF00', display: 'block', marginBottom: '0.4rem' }}>
              ● ENGINEERED SOLUTION
            </span>
            <p className="body-regular" style={{ color: '#C5C9D3', fontSize: '0.88rem' }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* System Architecture */}
        <div style={{ marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.85rem' }}>
            <Layers size={16} color="#00F0FF" />
            <h4 className="heading-card" style={{ fontSize: '1.1rem', color: '#F4F5F8' }}>
              System Architecture &amp; Methodology
            </h4>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {project.architecture.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem',
                  padding: '0.85rem 1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(212, 255, 0, 0.15)',
                    color: '#D4FF00',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    flexShrink: 0
                  }}
                >
                  {idx + 1}
                </div>
                <p className="body-regular" style={{ color: '#C5C9D3', margin: 0, fontSize: '0.88rem' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div style={{ marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.85rem' }}>
            <CheckCircle2 size={16} color="#D4FF00" />
            <h4 className="heading-card" style={{ fontSize: '1.1rem', color: '#F4F5F8' }}>
              Demonstrated Engineering Results
            </h4>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {project.results.map((res, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem',
                  color: '#8E94A0',
                  fontSize: '0.88rem'
                }}
              >
                <span style={{ color: '#D4FF00', marginTop: '0.2rem' }}>▸</span>
                <span style={{ color: '#C5C9D3' }}>{res}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack & Actions */}
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
            {project.technologies.map((tech) => (
              <span key={tech.name} className="tag-tech">
                <Cpu size={11} color="#00F0FF" />
                <strong>{tech.name}</strong> ({tech.category})
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.65rem' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '0.55rem 1.15rem', fontSize: '0.82rem' }}
            >
              <Github size={14} /> Repository
            </a>
            <button
              onClick={onClose}
              className="btn-primary"
              style={{ padding: '0.55rem 1.15rem', fontSize: '0.82rem' }}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
