import React, { useState } from 'react';
import {
  Cpu,
  FileText,
  FolderGit2,
  GraduationCap,
  House,
  Mail,
  UserRound
} from 'lucide-react';

export default function FloatingDock({ onDownloadCV, activeSection = 'hero' }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const dockItems = [
    { id: 'hero', label: 'Home', icon: House, href: '#hero' },
    { id: 'about', label: 'About', icon: UserRound, href: '#about' },
    { id: 'education', label: 'Journey', icon: GraduationCap, href: '#education' },
    { id: 'projects', label: 'Projects', icon: FolderGit2, href: '#projects' },
    { id: 'skills', label: 'Skills', icon: Cpu, href: '#skills' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
    { id: 'cv', label: 'Résumé', icon: FileText, onClick: onDownloadCV }
  ];

  return (
    <nav
      className="portfolio-dock"
      aria-label="Quick navigation"
      onMouseLeave={() => setHoveredIdx(null)}
    >
      {dockItems.map((item, index) => {
        const Icon = item.icon;
        const isHovered = hoveredIdx === index;
        const isNeighbor = hoveredIdx !== null && Math.abs(hoveredIdx - index) === 1;
        const scale = isHovered ? 1.16 : isNeighbor ? 1.06 : 1;
        const content = (
          <span className="portfolio-dock-item">
            {isHovered && <span className="portfolio-dock-tooltip">{item.label}</span>}
            <span
              className={`portfolio-dock-icon${activeSection === item.id ? ' is-active' : ''}`}
              style={{ transform: `translateY(${isHovered ? '-3px' : '0'}) scale(${scale})` }}
            >
              <Icon size={18} strokeWidth={1.8} />
            </span>
          </span>
        );

        if (item.href) {
          return (
            <a
              key={item.id}
              href={item.href}
              aria-label={item.label}
              onMouseEnter={() => setHoveredIdx(index)}
            >
              {content}
            </a>
          );
        }

        return (
          <button
            key={item.id}
            type="button"
            aria-label={item.label}
            onClick={item.onClick}
            onMouseEnter={() => setHoveredIdx(index)}
          >
            {content}
          </button>
        );
      })}
    </nav>
  );
}
