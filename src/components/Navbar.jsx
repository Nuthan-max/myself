import React, { useState, useEffect } from 'react';
import MagneticButton from './MagneticButton';
import { Menu, X, ArrowUpRight, Download, FileText } from 'lucide-react';

export default function Navbar({ onDownloadCV }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Detect active section
      const sections = ['about', 'education', 'skills', 'projects', 'hackathons', 'sports', 'certificates', 'gallery', 'contact'];
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
    { name: 'Journey', href: '#education', id: 'education' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Achievements', href: '#certificates', id: 'certificates' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        paddingTop: isScrolled ? '0.75rem' : '1.5rem',
        paddingBottom: isScrolled ? '0.75rem' : '1.5rem',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: isScrolled ? 'rgba(247, 246, 242, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(232, 230, 225, 0.8)' : '1px solid transparent'
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
              width: isScrolled ? '38px' : '44px',
              height: isScrolled ? '38px' : '44px',
              backgroundColor: '#111111',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
            <svg width="22" height="22" viewBox="0 0 64 64" fill="none">
              <path
                d="M18 46V18L32 36V18M46 18V46L32 28V46"
                stroke="#D7F171"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="32" cy="32" r="5" fill="#B8A1E3" />
            </svg>
          </div>
          <div>
            <span
              className="font-interface"
              style={{
                fontSize: '1.1rem',
                fontWeight: 750,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                display: 'block',
                lineHeight: 1.1
              }}
            >
              PRATHAMESH
            </span>
            <span
              className="label-mono"
              style={{
                fontSize: '0.65rem',
                color: 'var(--text-secondary)',
                letterSpacing: '0.06em'
              }}
            >
              ECE • LPU
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav
          className="hide-on-mobile"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 0.6rem',
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.5)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-pill)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  padding: '0.45rem 1rem',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 650 : 500,
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: isActive ? 'rgba(23, 23, 23, 0.08)' : 'transparent',
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
            gap: '0.75rem'
          }}
        >
          <MagneticButton
            className="btn-secondary"
            onClick={onDownloadCV}
            style={{
              padding: '0.65rem 1.25rem',
              fontSize: '0.84rem'
            }}
          >
            <Download size={14} />
            Download CV
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="btn-primary"
            style={{
              padding: '0.65rem 1.35rem',
              fontSize: '0.84rem'
            }}
          >
            Contact
            <ArrowUpRight size={14} />
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
            backgroundColor: 'rgba(23, 23, 23, 0.05)',
            color: 'var(--text-primary)'
          }}
          className="mobile-nav-toggle"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid var(--border-color)',
            padding: '1.5rem var(--container-pad)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                padding: '0.5rem 0',
                borderBottom: '1px solid #f0f0f0'
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onDownloadCV) onDownloadCV();
              }}
              className="btn-secondary"
              style={{ flex: 1, padding: '0.75rem' }}
            >
              <Download size={15} /> CV
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ flex: 1, padding: '0.75rem' }}
            >
              Contact <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
