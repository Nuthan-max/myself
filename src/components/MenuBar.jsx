import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';

const menuSections = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Work', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Contact', href: '#contact', id: 'contact' }
];

export default function MenuBar({ onOpenSpotlight }) {
  const [time, setTime] = useState('');
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const updateTime = () => {
      setTime(new Intl.DateTimeFormat('en', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata'
      }).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let current = 'hero';
      for (const section of menuSections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= 180) current = section.id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="portfolio-menubar">
      <a className="portfolio-brand" href="#hero" aria-label="Nuthan G, home">
        <span className="portfolio-brand-mark">N.</span>
        <span>Nuthan G</span>
        <span className="portfolio-brand-divider" />
        <span className="portfolio-brand-role">ECE</span>
      </a>

      <nav className="portfolio-nav" aria-label="Main navigation">
        {menuSections.map((section) => (
          <a
            key={section.id}
            href={section.href}
            className={activeSection === section.id ? 'is-active' : ''}
          >
            {section.label}
          </a>
        ))}
      </nav>

      <div className="portfolio-menu-actions">
        <button
          type="button"
          className="portfolio-search-button"
          onClick={onOpenSpotlight}
          aria-label="Open search"
          title="Search (Ctrl or Cmd + K)"
        >
          <Search size={15} />
          <span>Search</span>
          <kbd>⌘ K</kbd>
        </button>
        <span className="portfolio-clock">{time} IST</span>
      </div>
    </header>
  );
}
