import React from 'react';

export default function SectionHeading({
  badge,
  title,
  highlightWord,
  subtitle,
  align = 'left',
  isDark = false
}) {
  const isCentered = align === 'center';

  return (
    <div
      style={{
        marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
        textAlign: isCentered ? 'center' : 'left',
        maxWidth: isCentered ? '760px' : '840px',
        marginLeft: isCentered ? 'auto' : 0,
        marginRight: isCentered ? 'auto' : 0
      }}
    >
      {badge && (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            marginBottom: '0.85rem'
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: isDark ? 'var(--accent-lime)' : 'var(--text-primary)'
            }}
          />
          <span
            className="label-mono"
            style={{
              color: isDark ? 'var(--accent-lime)' : 'var(--text-secondary)',
              letterSpacing: '0.08em'
            }}
          >
            {badge}
          </span>
        </div>
      )}

      <h2
        className="heading-section"
        style={{
          color: isDark ? 'var(--text-light)' : 'var(--text-primary)',
          marginBottom: subtitle ? '0.75rem' : 0
        }}
      >
        {title}{' '}
        {highlightWord && (
          <span
            style={{
              color: isDark ? 'var(--accent-lime)' : 'var(--accent-lavender)',
              fontWeight: 700
            }}
          >
            {highlightWord}
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          className="body-lead"
          style={{
            color: isDark ? 'var(--text-light-secondary)' : 'var(--text-secondary)',
            maxWidth: '680px',
            marginLeft: isCentered ? 'auto' : 0,
            marginRight: isCentered ? 'auto' : 0
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
