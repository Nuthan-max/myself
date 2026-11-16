import React, { useState } from 'react';
import { X, Download, ExternalLink, ShieldCheck, ZoomIn, ZoomOut } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  const [zoom, setZoom] = useState(1);

  if (!certificate) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = certificate.image;
    link.download = `${certificate.id}-certificate.svg`;
    link.click();
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
          maxWidth: '920px',
          padding: 'clamp(1.5rem, 3vw, 2.5rem)',
          backgroundColor: '#FFFFFF'
        }}
      >
        {/* Modal Header */}
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
                <ShieldCheck size={14} color="#171717" />
                {certificate.verificationStatus}
              </span>
              <span className="label-mono">{certificate.category}</span>
            </div>
            <h3
              className="heading-card"
              style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}
            >
              {certificate.title}
            </h3>
            <p className="body-regular" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Issued by {certificate.issuer} • {certificate.year}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={() => setZoom((z) => (z === 1 ? 1.4 : 1))}
              className="btn-secondary"
              style={{ padding: '0.5rem', borderRadius: '50%' }}
              title="Toggle Zoom"
            >
              {zoom === 1 ? <ZoomIn size={18} /> : <ZoomOut size={18} />}
            </button>
            <button
              onClick={handleDownload}
              className="btn-secondary"
              style={{ padding: '0.5rem', borderRadius: '50%' }}
              title="Download Certificate"
            >
              <Download size={18} />
            </button>
            <button
              onClick={onClose}
              className="btn-secondary"
              style={{ padding: '0.5rem', borderRadius: '50%' }}
              title="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Certificate Display Area */}
        <div
          style={{
            backgroundColor: '#F7F6F2',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            padding: '1.25rem',
            overflow: 'auto',
            maxHeight: '58vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src={certificate.image}
            alt={certificate.title}
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
              transform: `scale(${zoom})`,
              transformOrigin: 'center center',
              transition: 'transform 0.3s ease'
            }}
          />
        </div>

        {/* Modal Footer Metadata */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '1.5rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-color)'
          }}
        >
          <div>
            <span className="label-mono" style={{ color: 'var(--text-muted)' }}>
              OFFICIAL CREDENTIAL ID
            </span>
            <p className="font-mono" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              {certificate.credentialId}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={handleDownload} className="btn-primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}>
              <Download size={15} /> Download Original Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
