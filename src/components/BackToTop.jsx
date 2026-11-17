import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
        setVisible(window.scrollY > 400);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      type="button"
      className="back-to-top-button"
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: 'var(--back-to-top-bottom, 2rem)',
        right: 'var(--back-to-top-right, 2rem)',
        zIndex: 900,
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: 'var(--accent-lime)',
        color: 'var(--text-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(57, 61, 48, 0.18)',
        cursor: 'pointer',
        border: 'none',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s',
        transform: 'scale(1)'
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1) translateY(-3px)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          transform: 'rotate(-90deg)'
        }}
      >
        <circle
          cx="24"
          cy="24"
          r="18"
          stroke="rgba(85, 91, 77, 0.15)"
          strokeWidth="2.5"
          fill="none"
        />
        <circle
          cx="24"
          cy="24"
          r="18"
          stroke="var(--accent-lime)"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.1s linear' }}
        />
      </svg>
      <ArrowUp size={18} style={{ zIndex: 1 }} />
    </button>
  );
}
