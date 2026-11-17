import React, { useState, useEffect } from 'react';
import MagneticButton from './MagneticButton';
import { Menu, X, ArrowUpRight, Download, Terminal } from 'lucide-react';

export default function Navbar({ onDownloadCV }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' IST');
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['about', 'education', 'skills', 'projects', 'hackathons', 'sports', 'certificates', 'contact'];
      let current = 'hero';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Hackathons', href: '#hackathons', id: 'hackathons' },
    { name: 'Credentials', href: '#certificates', id: 'certificates' }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        paddingTop: isScrolled ? '0.75rem' : '1.25rem',
        paddingBottom: isScrolled ? '0.75rem' : '1.25rem',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: isScrolled ? 'var(--bg-surface)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(85, 91, 77, 0.08)' : '1px solid transparent'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem'
        }}
      >
        {/* Left: Monogram + Name */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            textDecoration: 'none'
          }}
        >
          <div
            style={{
              width: isScrolled ? '36px' : '40px',
              height: isScrolled ? '36px' : '40px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid rgba(139, 154, 110, 0.35)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 12px rgba(139, 154, 110, 0.15)'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
              <path
                d="M18 46V18L32 36V18M46 18V46L32 28V46"
                stroke="var(--accent-lime)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="32" cy="32" r="4" fill="var(--accent-cyan)" />
            </svg>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <span
                className="font-interface"
                style={{
                  fontSize: '0.98rem',
                  fontWeight: 750,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                  display: 'block',
                  lineHeight: 1.1
                }}
              >
                NUTHAN G
              </span>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-lime)',
                  boxShadow: '0 0 6px var(--accent-lime)'
                }}
              />
            </div>
            <span
              className="label-mono"
              style={{
                fontSize: '0.64rem',
                color: 'var(--text-secondary)',
                letterSpacing: '0.04em'
              }}
            >
              ECE // {time || 'SYS ACTIVE'}
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav
          className="hide-on-mobile"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.2rem',
            padding: '0.3rem 0.5rem',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid rgba(85, 91, 77, 0.08)',
            borderRadius: 'var(--radius-pill)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)'
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  padding: '0.4rem 0.9rem',
                  fontSize: '0.84rem',
                  fontWeight: isActive ? 650 : 500,
                  color: isActive ? 'var(--accent-lime)' : 'var(--text-secondary)',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: isActive ? 'rgba(139, 154, 110, 0.1)' : 'transparent',
                  border: `1px solid ${isActive ? 'rgba(139, 154, 110, 0.25)' : 'transparent'}`,
                  transition: 'all var(--transition-fast)'
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: Download CV & Contact Button */}
        <div
          className="hide-on-mobile"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem'
          }}
        >
          <MagneticButton
            className="btn-secondary"
            onClick={onDownloadCV}
            style={{
              padding: '0.55rem 1.15rem',
              fontSize: '0.82rem'
            }}
          >
            <Download size={13} />
            CV
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="btn-primary"
            style={{
              padding: '0.55rem 1.25rem',
              fontSize: '0.82rem'
            }}
          >
            Contact
            <ArrowUpRight size={13} />
          </MagneticButton>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            padding: '0.5rem',
            borderRadius: '8px',
            backgroundColor: 'rgba(85, 91, 77, 0.06)',
            color: 'var(--text-primary)'
          }}
          className="mobile-nav-toggle"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-surface)',
            borderBottom: '1px solid rgba(85, 91, 77, 0.1)',
            padding: '1.25rem var(--container-pad)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '0.98rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(85, 91, 77, 0.05)'
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onDownloadCV) onDownloadCV();
              }}
              className="btn-secondary"
              style={{ flex: 1, padding: '0.65rem' }}
            >
              <Download size={14} /> CV
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ flex: 1, padding: '0.65rem' }}
            >
              Contact <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
