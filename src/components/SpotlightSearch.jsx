import React, { useState, useEffect, useRef } from 'react';
import { Search, CornerDownLeft, FolderGit2, Cpu, GraduationCap, Award, FileText, Mail } from 'lucide-react';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';
import { certificatesData } from '../data/certificates';

export default function SpotlightSearch({
  isOpen,
  onClose,
  onSelectProject,
  onSelectCertificate,
  onDownloadCV
}) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  // Search Items Corpus
  const allItems = [
    // Actions & Sections
    { id: 'sec-projects', title: 'Projects', type: 'Section', href: '#projects', icon: FolderGit2, desc: 'Project concepts, progress, and details to confirm' },
    { id: 'sec-education', title: 'Education', type: 'Section', href: '#education', icon: GraduationCap, desc: 'Class 10: 84%; Class 12: 92%; first-semester B.Tech ECE' },
    { id: 'sec-skills', title: 'Interests and tools explored', type: 'Section', href: '#skills', icon: Cpu, desc: 'Electronics, AI, IoT, software, automation, and more' },
    { id: 'sec-hackathons', title: 'Hackathons and prototypes', type: 'Section', href: '#hackathons', icon: Award, desc: 'Water-body detection concept and storage-related hackathon; details pending' },
    { id: 'sec-credentials', title: 'Certificates', type: 'Section', href: '#certificates', icon: Award, desc: 'Supplied certificate PDFs; some document details need confirmation' },
    { id: 'act-cv', title: 'Print portfolio summary', type: 'Action', action: onDownloadCV, icon: FileText, desc: 'Open and print the current portfolio summary' },
    { id: 'act-contact', title: 'Contact details', type: 'Section', href: '#contact', icon: Mail, desc: 'Email, phone, and GitHub profile' },

    // Projects
    ...projectsData.map((p) => ({
      id: `proj-${p.id}`,
      title: p.title,
      type: 'Project',
      action: () => onSelectProject(p),
      icon: FolderGit2,
      desc: p.shortDescription
    })),

    ...Object.values(skillsData).flatMap((category) => category.skills.map((skill) => ({
      id: `skill-${skill.name}`,
      title: skill.name,
      type: 'Interest',
      href: '#skills',
      icon: Cpu,
      desc: skill.scope
    }))),

    // Certificates
    ...certificatesData.map((c) => ({
      id: `cert-${c.id}`,
      title: c.title,
      type: 'Certificate',
      action: () => onSelectCertificate(c.id),
      icon: Award,
      desc: c.issuer ? `Issued by ${c.issuer}` : 'Provided PDF · details to confirm'
    }))
  ];

  const filteredItems = query.trim() === ''
    ? allItems.slice(0, 8)
    : allItems.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selected = filteredItems[selectedIndex];
        if (selected) {
          handleExecute(selected);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex]);

  const handleExecute = (item) => {
    onClose();
    if (item.action) {
      item.action();
    } else if (item.href) {
      window.location.hash = item.href;
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay open"
      onClick={onClose}
      style={{
        backgroundColor: 'rgba(5, 7, 10, 0.85)',
        alignItems: 'flex-start',
        paddingTop: '12vh'
      }}
    >
      <div
        className="spotlight-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '640px',
          width: '100%',
          backgroundColor: 'var(--bg-card)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-spotlight)',
          overflow: 'hidden',
          animation: 'fadeIn 0.2s ease'
        }}
      >
        {/* Spotlight Search Input */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            padding: '1.15rem 1.4rem',
            borderBottom: '1px solid var(--border-color)'
          }}
        >
          <Search size={20} color="var(--accent-lime)" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command, project, skill, or credential..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            style={{
              width: '100%',
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              fontFamily: 'var(--font-interface)',
              fontSize: '1.1rem',
              color: 'var(--text-primary)',
              fontWeight: 500
            }}
          />
          <kbd
            style={{
              fontSize: '0.7rem',
              color: 'var(--text-secondary)',
              padding: '0.2rem 0.5rem',
              backgroundColor: 'rgba(85, 91, 77, 0.08)',
              borderRadius: '4px',
              fontFamily: 'var(--font-annotation)'
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: '380px', overflowY: 'auto', padding: '0.5rem' }}>
          {filteredItems.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              No matches found for "{query}".
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = selectedIndex === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => handleExecute(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: isSelected ? 'rgba(139, 154, 110, 0.12)' : 'transparent',
                    border: `1px solid ${isSelected ? 'rgba(139, 154, 110, 0.3)' : 'transparent'}`,
                    cursor: 'pointer',
                    transition: 'all 0.12s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        backgroundColor: isSelected ? 'rgba(139, 154, 110, 0.2)' : 'rgba(85, 91, 77, 0.04)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={16} color={isSelected ? 'var(--accent-lime)' : 'var(--text-secondary)'} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 600, color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', maxWidth: '420px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span
                      className="label-mono"
                      style={{
                        fontSize: '0.65rem',
                        padding: '0.15rem 0.45rem',
                        backgroundColor: 'rgba(85, 91, 77, 0.05)',
                        borderRadius: '4px',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {item.type}
                    </span>
                    {isSelected && <CornerDownLeft size={14} color="var(--accent-lime)" />}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.65rem 1.25rem',
            backgroundColor: 'var(--color-beige)',
            borderTop: '1px solid var(--border-color)',
            fontSize: '0.72rem',
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-annotation)'
          }}
        >
          <span>Use ↑ ↓ to navigate</span>
          <span>Press ↵ Enter to select</span>
          <span>Esc to exit</span>
        </div>
      </div>
    </div>
  );
}
