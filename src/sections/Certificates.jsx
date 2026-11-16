import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { certificatesData, certificateCategories } from '../data/certificates';
import { ShieldCheck, Download, ExternalLink, Eye, Award, FileText } from 'lucide-react';

export default function Certificates({ onSelectCertificate }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCertificates = activeCategory === 'All'
    ? certificatesData
    : certificatesData.filter((c) => c.category === activeCategory);

  return (
    <section id="certificates" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeading
          badge="07 // DIGITAL ARCHIVE"
          title="Verifiable Credentials &amp;"
          italicWord="Achievement Records."
          subtitle="A high-resolution archive of academic board records, national hackathon accomplishments, circuit EDA credentials, and athletic awards."
        />

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2.5rem',
            justifyContent: 'flex-start'
          }}
        >
          {certificateCategories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: 'var(--radius-pill)',
                  fontFamily: 'var(--font-interface)',
                  fontSize: '0.86rem',
                  fontWeight: isSelected ? 700 : 500,
                  backgroundColor: isSelected ? 'var(--text-primary)' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                  border: isSelected ? '1px solid var(--text-primary)' : '1px solid var(--border-color)',
                  boxShadow: isSelected ? '0 4px 14px rgba(23, 23, 23, 0.15)' : 'none',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Certificates Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              className="spotlight-card"
              onClick={() => onSelectCertificate(cert.id)}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Certificate Preview Frame */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#F7F6F2',
                  padding: '1.25rem',
                  borderBottom: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '210px'
                }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  style={{
                    maxHeight: '180px',
                    width: 'auto',
                    borderRadius: '4px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                    transition: 'transform 0.4s ease'
                  }}
                  className="cert-img-hover"
                />

                {/* Hover overlay hint */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    padding: '0.3rem 0.65rem',
                    backgroundColor: 'rgba(23, 23, 23, 0.85)',
                    color: 'var(--accent-lime)',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <Eye size={12} />
                  PREVIEW
                </div>
              </div>

              {/* Certificate Info */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span className="tag-tech" style={{ fontSize: '0.68rem', backgroundColor: 'rgba(215, 241, 113, 0.25)', borderColor: '#D7F171' }}>
                      <ShieldCheck size={12} />
                      {cert.verificationStatus}
                    </span>
                    <span className="label-mono" style={{ fontSize: '0.68rem' }}>
                      {cert.year}
                    </span>
                  </div>

                  <h3
                    className="heading-card"
                    style={{
                      fontSize: '1.12rem',
                      lineHeight: 1.35,
                      color: 'var(--text-primary)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    {cert.title}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                    {cert.issuer}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '0.85rem',
                    borderTop: '1px solid var(--border-color)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span className="label-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                    ID: {cert.credentialId.slice(0, 14)}...
                  </span>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#25825d' }}>
                    {cert.grade}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
