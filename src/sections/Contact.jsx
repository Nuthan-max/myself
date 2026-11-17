import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { personalData } from '../data/personal';
import { Mail, Github, Linkedin, Phone, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const channels = [
    { label: 'Email', href: personalData.socials.email && `mailto:${personalData.socials.email}`, icon: Mail },
    { label: 'Phone', href: personalData.phone && `tel:${personalData.phone.replace(/[^+\d]/g, '')}`, icon: Phone },
    { label: 'GitHub', href: personalData.socials.github, icon: Github },
    { label: 'LinkedIn', href: personalData.socials.linkedin, icon: Linkedin }
  ].filter((channel) => channel.href);

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <SectionHeading
          badge="08 // CONTACT"
          title="Stay in"
          highlightWord="touch."
          subtitle="Get in touch by email or phone, or find me on GitHub."
        />

        <div className="spotlight-card" style={{ padding: 'clamp(1.5rem, 3vw, 2.25rem)', backgroundColor: 'var(--bg-card)' }}>
          {channels.length > 0 ? (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {channels.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} className="btn-secondary">
                  <Icon size={16} />
                  {label}
                  <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          ) : (
            <p className="body-regular">
              No contact details are available yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
