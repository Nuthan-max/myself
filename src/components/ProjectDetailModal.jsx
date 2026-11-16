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
          backgroundColor: '#FFFFFF'
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1rem',
            marginBottom: '1.5rem',
            borderBottom: '1px solid var(--border-color)',
            paddingBottom: '1rem'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
              <span className="tag-tech" style={{ backgroundColor: 'rgba(215, 241, 113, 0.25)', borderColor: '#D7F171' }}>
                Project {project.number}
              </span>
              <span className="label-mono">{project.category}</span>
            </div>
            <h3 className="heading-card" style={{ fontSize: '1.75rem', color: 'var(--text-primary)' }}>
              {project.title}
            </h3>
            <p className="body-regular" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="btn-secondary"
            style={{ padding: '0.5rem', borderRadius: '50%' }}
            title="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Hero Visual */}
        <div
          style={{
            backgroundColor: '#111111',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            marginBottom: '2rem',
            border: '1px solid var(--border-color)'
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
            gap: '1.5rem',
            marginBottom: '2rem'
          }}
        >
          <div
            style={{
              padding: '1.5rem',
              backgroundColor: '#F7F6F2',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)'
            }}
          >
            <span className="label-mono" style={{ color: '#ff4d4d', display: 'block', marginBottom: '0.5rem' }}>
              ● PROBLEM STATEMENT
            </span>
            <p className="body-regular" style={{ color: 'var(--text-primary)' }}>
              {project.problemStatement}
            </p>
          </div>

          <div
            style={{
              padding: '1.5rem',
              backgroundColor: '#F7F6F2',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)'
            }}
          >
            <span className="label-mono" style={{ color: '#25825d', display: 'block', marginBottom: '0.5rem' }}>
              ● ENGINEERED SOLUTION
            </span>
            <p className="body-regular" style={{ color: 'var(--text-primary)' }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* System Architecture */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Layers size={18} color="var(--accent-lavender)" />
            <h4 className="heading-card" style={{ fontSize: '1.2rem' }}>
              System Architecture &amp; Methodology
            </h4>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {project.architecture.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '1rem',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(23, 23, 23, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    flexShrink: 0
                  }}
                >
                  {idx + 1}
                </div>
                <p className="body-regular" style={{ color: 'var(--text-primary)', margin: 0 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Verified Results */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <CheckCircle2 size={18} color="#25825d" />
            <h4 className="heading-card" style={{ fontSize: '1.2rem' }}>
              Demonstrated Engineering Results
            </h4>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {project.results.map((res, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.92rem'
                }}
              >
                <span style={{ color: '#D7F171', backgroundColor: '#111', width: '6px', height: '6px', borderRadius: '50%', marginTop: '0.55rem', flexShrink: 0 }} />
                <span>{res}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Tags & Actions */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-color)'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.technologies.map((tech) => (
              <span key={tech.name} className="tag-tech">
                <Cpu size={12} />
                <strong>{tech.name}</strong> ({tech.category})
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
            >
              <Github size={15} /> View Code
            </a>
            <button
              onClick={onClose}
              className="btn-primary"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
