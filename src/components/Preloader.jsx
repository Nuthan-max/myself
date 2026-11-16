import React, { useEffect, useState } from 'react';

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      const step = Math.floor(Math.random() * 14) + 6;
      current = Math.min(current + step, 100);
      setPercent(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 500);
        }, 200);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#0F1012',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
        transform: isDone ? 'translateY(-100%)' : 'translateY(0%)',
        transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: isDone ? 'none' : 'auto'
      }}
    >
      {/* Top Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#CEEA50',
              borderRadius: '2px'
            }}
          />
          <span className="label-mono" style={{ color: '#CEEA50', letterSpacing: '0.1em' }}>
            NEXUS // PORTFOLIO
          </span>
        </div>
        <span className="label-mono" style={{ color: '#888888' }}>
          PRATHAMESH • ECE
        </span>
      </div>

      {/* Center Monogram */}
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '72px',
            height: '72px',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.1)',
            backgroundColor: '#18191C',
            marginBottom: '1.25rem'
          }}
        >
          <svg width="34" height="34" viewBox="0 0 64 64" fill="none">
            <path
              d="M18 46V18L32 36V18M46 18V46L32 28V46"
              stroke="#CEEA50"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="32" cy="32" r="3.5" fill="#8B6FD8" />
          </svg>
        </div>
        <h2
          className="font-interface"
          style={{
            fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            color: '#F7F6F2',
            marginBottom: '0.35rem'
          }}
        >
          Prathamesh
        </h2>
        <p className="label-mono" style={{ color: '#8A8F98', letterSpacing: '0.06em' }}>
          ELECTRONICS &amp; COMMUNICATION ENGINEERING
        </p>
      </div>

      {/* Bottom Loading Bar */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.6rem' }}>
          <span className="label-mono" style={{ color: '#888888', fontSize: '0.68rem' }}>
            LOADING SYSTEM MODULES
          </span>
          <span
            className="font-mono"
            style={{
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#CEEA50'
            }}
          >
            {percent}%
          </span>
        </div>
        <div
          style={{
            width: '100%',
            height: '2px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '999px',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              width: `${percent}%`,
              height: '100%',
              backgroundColor: '#CEEA50',
              transition: 'width 0.1s linear'
            }}
          />
        </div>
      </div>
    </div>
  );
}
