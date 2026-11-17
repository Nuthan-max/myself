import React from 'react';

export default function WindowFrame({
  title,
  subtitle,
  badge,
  children,
  className = '',
  style = {}
}) {
  return (
    <div
      className={`spotlight-card ${className}`}
      style={{
        backgroundColor: 'var(--bg-card)',
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-window)',
        boxSizing: 'border-box',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        ...style
      }}
    >
      {/* macOS-style Window Title Bar */}
      <div className="window-frame-titlebar">
        <div className="window-frame-heading">
          <span className="window-frame-title">{title}</span>
          {subtitle && (
            <span className="window-frame-subtitle">— {subtitle}</span>
          )}
        </div>

        <div className="window-frame-badge">
          {badge ? (
            <span
              className="tag-tech"
              style={{
                padding: '0.2rem 0.55rem',
                backgroundColor: 'rgba(139, 154, 110, 0.1)',
                borderColor: 'rgba(139, 154, 110, 0.3)',
                color: 'var(--accent-lime)'
              }}
            >
              {badge}
            </span>
          ) : (
            <div className="window-frame-badge-placeholder" aria-hidden="true" />
          )}
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        {children}
      </div>
    </div>
  );
}
