import React, { useEffect, useState } from 'react';

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Non-linear realistic loading increment
      const step = Math.floor(Math.random() * 12) + 4;
      current = Math.min(current + step, 100);
      setPercent(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600);
        }, 300);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#111111',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(1.5rem, 4vw, 3rem)',
        transform: isDone ? 'translateY(-100%)' : 'translateY(0%)',
        transition: 'transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)',
        pointerEvents: isDone ? 'none' : 'auto'
      }}
    >
      {/* Top Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#D7F171',
              borderRadius: '2px'
            }}
          />
          <span className="label-mono" style={{ color: '#D7F171', letterSpacing: '0.15em' }}>
            NEXUS OS // INITIALIZING
          </span>
        </div>
        <span className="label-mono" style={{ color: '#777777' }}>
          ECE DEPT • PRATHAMESH
        </span>
      </div>

      {/* Center Monogram */}
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '90px',
            height: '90px',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.12)',
            backgroundColor: '#191919',
            marginBottom: '1.5rem'
          }}
        >
          <svg width="44" height="44" viewBox="0 0 64 64" fill="none">
            <path
              d="M18 46V18L32 36V18M46 18V46L32 28V46"
              stroke="#D7F171"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="32" cy="32" r="4" fill="#B8A1E3" />
          </svg>
        </div>
        <h1
          className="font-interface"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#F7F6F2',
            marginBottom: '0.5rem'
          }}
        >
          Building. Exploring. <span style={{ color: '#D7F171', fontStyle: 'italic', fontFamily: 'var(--font-editorial)' }}>Creating.</span>
        </h1>
        <p className="label-mono" style={{ color: '#888888', letterSpacing: '0.08em' }}>
          PERSONAL DIGITAL IDENTITY ARCHIVE
        </p>
      </div>

      {/* Bottom Loading Bar */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
          <span className="label-mono" style={{ color: '#888888' }}>
            OPTIMIZING HARDWARE &amp; TELEMETRY MODULES
          </span>
          <span
            className="font-mono"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: 700,
              color: '#D7F171'
            }}
          >
            {percent}%
          </span>
        </div>
        <div
          style={{
            width: '100%',
            height: '3px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '999px',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              width: `${percent}%`,
              height: '100%',
              backgroundColor: '#D7F171',
              transition: 'width 0.1s linear'
            }}
          />
        </div>
      </div>
    </div>
  );
}
