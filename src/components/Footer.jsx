import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalData } from '../data/personal';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-light)',
        paddingTop: 'clamp(4rem, 6vw, 6rem)',
        paddingBottom: '2.5rem',
        borderTop: '1px solid var(--border-dark)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Top Accent Strip */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div>
            <span
              className="label-mono"
              style={{
                color: 'var(--accent-lime)',
                letterSpacing: '0.15em',
                display: 'block',
                marginBottom: '0.5rem'
              }}
            >
              PROJECT CODENAME: NEXUS
            </span>
            <h3
              className="font-interface"
              style={{
                fontSize: 'clamp(1.35rem, 2.2vw, 1.8rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--text-light)'
              }}
            >
              Prathamesh • <span style={{ color: 'var(--accent-lavender)', fontWeight: 600 }}>ECE Undergraduate</span>
            </h3>
            <p
              style={{
                color: 'var(--text-light-secondary)',
                fontSize: '0.95rem',
                marginTop: '0.25rem'
              }}
            >
              Lovely Professional University • Class of 2029
            </p>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '0.85rem' }}>
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="tag-tech"
              style={{
                padding: '0.6rem 1.1rem',
                borderRadius: 'var(--radius-pill)',
                borderColor: 'var(--border-dark)',
                color: 'var(--text-light)'
              }}
            >
              <Github size={16} />
              GitHub
              <ArrowUpRight size={13} />
            </a>

            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="tag-tech"
              style={{
                padding: '0.6rem 1.1rem',
                borderRadius: 'var(--radius-pill)',
                borderColor: 'var(--border-dark)',
                color: 'var(--text-light)'
              }}
            >
              <Linkedin size={16} />
              LinkedIn
              <ArrowUpRight size={13} />
            </a>

            <a
              href={`mailto:${personalData.socials.email}`}
              className="tag-tech"
              style={{
                padding: '0.6rem 1.1rem',
                borderRadius: 'var(--radius-pill)',
                borderColor: 'var(--border-dark)',
                color: 'var(--text-light)'
              }}
            >
              <Mail size={16} />
              Email
            </a>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            paddingTop: '2.5rem',
            fontSize: '0.84rem',
            color: 'var(--text-light-secondary)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Prathamesh. Designed under the NEXUS Master Blueprint.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Swiss Editorial &amp; Neo-Minimalist System</span>
            <span style={{ color: 'var(--accent-lime)' }}>● Live Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
