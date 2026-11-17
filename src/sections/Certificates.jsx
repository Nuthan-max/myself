import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { certificatesData } from '../data/certificates';
import { FileText, ArrowUpRight } from 'lucide-react';

export default function Certificates({ onSelectCertificate }) {
  return (
    <section id="certificates" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeading
          badge="07 // CERTIFICATES"
          title="Certificates &amp;"
          highlightWord="Credentials."
          subtitle="Shared certificate documents. Titles and issuers are shown only where identifiable from the supplied files."
        />

        {certificatesData.length === 0 ? (
          <div className="spotlight-card" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)' }}>
            <p className="body-regular">
              No certificate documents have been added yet.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
              gap: '1.5rem'
            }}
          >
            {certificatesData.map((cert) => (
              <button
                key={cert.id}
                type="button"
                className="spotlight-card"
                onClick={() => onSelectCertificate(cert.id)}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  textAlign: 'left',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)',
                  color: 'var(--text-primary)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                  <FileText size={22} color="var(--accent-lime)" aria-hidden="true" />
                  <ArrowUpRight size={17} color="var(--text-secondary)" aria-hidden="true" />
                </div>
                <h3 className="heading-card" style={{ marginTop: '1.2rem', fontSize: '1.08rem' }}>
                  {cert.title}
                </h3>
                <p className="body-regular" style={{ marginTop: '0.45rem', fontSize: '0.84rem' }}>
                  {cert.issuer ? `Issued by ${cert.issuer}` : 'Issuer and certificate details to confirm'}
                </p>
                <span className="label-mono" style={{ display: 'block', marginTop: '1.1rem', color: 'var(--accent-lime)' }}>
                  VIEW PDF
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
