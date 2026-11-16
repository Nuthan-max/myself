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
          badge="07 // ARCHIVE"
          title="Verifiable Credentials &amp;"
          highlightWord="Certifications."
          subtitle="Official academic board records, national hackathon accomplishments, circuit EDA credentials, and athletic awards."
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
                  padding: '0.5rem 1.15rem',
                  borderRadius: 'var(--radius-pill)',
                  fontFamily: 'var(--font-interface)',
                  fontSize: '0.84rem',
                  fontWeight: isSelected ? 700 : 500,
                  backgroundColor: isSelected ? '#D4FF00' : 'rgba(255, 255, 255, 0.04)',
                  color: isSelected ? '#08090C' : '#8E94A0',
                  border: isSelected ? '1px solid #D4FF00' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isSelected ? '0 0 14px rgba(212, 255, 0, 0.25)' : 'none',
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
            gap: '1.5rem'
          }}
        >
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              className="spotlight-card"
              onClick={() => onSelectCertificate(cert.id)}
              style={{
                backgroundColor: 'var(--bg-card)',
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
                  backgroundColor: '#090B0E',
                  padding: '1.25rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '200px'
                }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  style={{
                    maxHeight: '170px',
                    width: 'auto',
                    borderRadius: '4px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                    transition: 'transform 0.35s ease'
                  }}
                  className="cert-img-hover"
                />

                {/* Hover overlay hint */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    padding: '0.25rem 0.6rem',
                    backgroundColor: 'rgba(9, 11, 14, 0.9)',
                    color: '#D4FF00',
                    border: '1px solid rgba(212, 255, 0, 0.3)',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.68rem',
                    fontFamily: 'var(--font-mono)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <Eye size={11} />
                  PREVIEW
                </div>
              </div>

              {/* Certificate Info */}
              <div style={{ padding: '1.35rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.45rem' }}>
                    <span className="tag-tech" style={{ fontSize: '0.66rem', backgroundColor: 'rgba(212, 255, 0, 0.1)', borderColor: 'rgba(212, 255, 0, 0.25)', color: '#D4FF00' }}>
                      <ShieldCheck size={11} />
                      {cert.verificationStatus}
                    </span>
                    <span className="label-mono" style={{ fontSize: '0.66rem', color: '#888' }}>
                      {cert.year}
                    </span>
                  </div>

                  <h3
                    className="heading-card"
                    style={{
                      fontSize: '1.08rem',
                      lineHeight: 1.35,
                      color: '#F4F5F8',
                      marginBottom: '0.35rem'
                    }}
                  >
                    {cert.title}
                  </h3>

                  <p style={{ fontSize: '0.82rem', color: '#8E94A0', marginBottom: '0.65rem' }}>
                    {cert.issuer}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '0.75rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span className="label-mono" style={{ fontSize: '0.65rem', color: '#565C68' }}>
                    ID: {cert.credentialId.slice(0, 14)}...
                  </span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#D4FF00' }}>
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
