import React, { useState } from 'react';
import { X, Download, ShieldCheck, ZoomIn, ZoomOut } from 'lucide-react';

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
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          color: '#F4F5F8'
        }}
      >
        {/* Modal Header */}
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
                <ShieldCheck size={13} color="#D4FF00" />
                {certificate.verificationStatus}
              </span>
              <span className="label-mono" style={{ color: '#888' }}>{certificate.category}</span>
            </div>
            <h3
              className="heading-card"
              style={{ fontSize: '1.35rem', color: '#F4F5F8' }}
            >
              {certificate.title}
            </h3>
            <p className="body-regular" style={{ fontSize: '0.85rem', color: '#8E94A0' }}>
              Issued by {certificate.issuer} • {certificate.year}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <button
              onClick={() => setZoom((z) => (z === 1 ? 1.3 : 1))}
              className="btn-secondary"
              style={{ padding: '0.45rem', borderRadius: '50%' }}
              title="Toggle Zoom"
            >
              {zoom === 1 ? <ZoomIn size={16} /> : <ZoomOut size={16} />}
            </button>
            <button
              onClick={handleDownload}
              className="btn-secondary"
              style={{ padding: '0.45rem', borderRadius: '50%' }}
              title="Download Certificate"
            >
              <Download size={16} />
            </button>
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

        {/* Certificate Display Area */}
        <div
          style={{
            backgroundColor: '#090B0E',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
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
              borderRadius: '6px',
              boxShadow: '0 12px 36px rgba(0,0,0,0.6)',
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
            marginTop: '1.25rem',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div>
            <span className="label-mono" style={{ color: '#565C68' }}>
              OFFICIAL CREDENTIAL ID
            </span>
            <p className="font-mono" style={{ fontSize: '0.84rem', fontWeight: 600, color: '#D4FF00' }}>
              {certificate.credentialId}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.65rem' }}>
            <button onClick={handleDownload} className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.82rem' }}>
              <Download size={14} /> Download Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
