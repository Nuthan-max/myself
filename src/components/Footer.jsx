import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { personalData } from '../data/personal';

export default function Footer() {
  const socialLinks = [
    { label: 'GitHub', href: personalData.socials.github, icon: Github },
    { label: 'LinkedIn', href: personalData.socials.linkedin, icon: Linkedin },
    { label: 'Email', href: personalData.socials.email && `mailto:${personalData.socials.email}`, icon: Mail },
    { label: 'Phone', href: personalData.phone && `tel:${personalData.phone.replace(/[^+\d]/g, '')}`, icon: Phone }
  ].filter((link) => link.href);

  return (
    <footer
      className="portfolio-footer"
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-primary)',
        paddingTop: 'clamp(3rem, 5vw, 5rem)',
        borderTop: '1px solid var(--border-dark)'
      }}
    >
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', paddingBottom: '1.75rem', borderBottom: '1px solid var(--border-color)' }}>
          <div>
            <h2 className="font-interface" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              {personalData.name}
            </h2>
            <p className="body-regular" style={{ marginTop: '0.25rem' }}>
              {personalData.role} · From {personalData.location}
            </p>
          </div>

          {socialLinks.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label === 'GitHub' || label === 'LinkedIn' ? '_blank' : undefined}
                  rel={label === 'GitHub' || label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  className="tag-tech"
                  style={{ padding: '0.55rem 0.9rem' }}
                >
                  <Icon size={15} />
                  {label}
                  <ArrowUpRight size={12} />
                </a>
              ))}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', paddingTop: '1.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
          <span>© {new Date().getFullYear()} {personalData.name}</span>
          <span>{personalData.university} · {personalData.degree}</span>
        </div>
      </div>
    </footer>
  );
}
