import React from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

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
          color: 'var(--text-primary)'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1rem',
            marginBottom: '1.25rem',
            borderBottom: '1px solid rgba(85, 91, 77, 0.08)',
            paddingBottom: '1rem'
          }}
        >
          <div>
            <h3
              className="heading-card"
              style={{ fontSize: '1.35rem', color: 'var(--text-primary)' }}
            >
              {certificate.title}
            </h3>
            {certificate.issuer && (
              <p className="body-regular" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Issued by {certificate.issuer}
              </p>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <a
              href={certificate.file}
              download
              className="btn-secondary"
              style={{ padding: '0.45rem', borderRadius: '50%' }}
              title="Download certificate PDF"
            >
              <Download size={16} />
            </a>
            <a
              href={certificate.file}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '0.45rem', borderRadius: '50%' }}
              title="Open certificate in a new tab"
            >
              <ExternalLink size={16} />
            </a>
            <button
              onClick={onClose}
              className="btn-secondary"
              style={{ padding: '0.45rem', borderRadius: '50%' }}
              title="Close modal"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        <iframe
          src={certificate.file}
          title={certificate.title}
          style={{
            width: '100%',
            height: 'min(65vh, 760px)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--bg-card)'
          }}
        />
        <a
          href={certificate.file}
          download
          className="btn-primary"
          style={{ marginTop: '1rem', padding: '0.6rem 1.2rem', fontSize: '0.82rem' }}
        >
          <Download size={14} /> Download PDF
        </a>
      </div>
    </div>
  );
}
