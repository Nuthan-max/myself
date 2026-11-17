import React from 'react';
import { X } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="modal-overlay open"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
    >
      <div
        className="modal-content"
        onClick={(event) => event.stopPropagation()}
        style={{
          maxWidth: '760px',
          padding: 'clamp(1.5rem, 3vw, 2.5rem)',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-color)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
          <div>
            <span className="label-mono" style={{ color: 'var(--accent-lime)' }}>
              {project.category}
            </span>
            <h2 id="project-detail-title" className="heading-card" style={{ fontSize: '1.6rem', marginTop: '0.35rem' }}>
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="btn-secondary"
            style={{ padding: '0.45rem', borderRadius: '50%' }}
            aria-label="Close project details"
          >
            <X size={16} />
          </button>
        </div>

        <span className="tag-tech" style={{ marginBottom: '1rem', backgroundColor: 'rgba(139, 154, 110, 0.1)', color: 'var(--accent-lime)' }}>
          {project.status}
        </span>

        <p className="body-regular" style={{ margin: '0.25rem 0 1.25rem' }}>
          {project.shortDescription}
        </p>

        <div style={{ marginBottom: '1.25rem' }}>
          <h3 className="label-mono" style={{ marginBottom: '0.55rem' }}>
            Details shared so far
          </h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
            {project.details.map((detail) => (
              <li key={detail} style={{ paddingLeft: '0.2rem' }}>
                {detail}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
          {project.technologies.map((technology) => (
            <span key={technology} className="tag-tech">
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
