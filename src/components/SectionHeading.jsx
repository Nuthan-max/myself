import React from 'react';

export default function SectionHeading({
  badge,
  title,
  italicWord,
  subtitle,
  align = 'left',
  isDark = false
}) {
  const isCentered = align === 'center';

  return (
    <div
      style={{
        marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)',
        textAlign: isCentered ? 'center' : 'left',
        maxWidth: isCentered ? '820px' : '900px',
        marginLeft: isCentered ? 'auto' : 0,
        marginRight: isCentered ? 'auto' : 0
      }}
    >
      {badge && (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem'
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
              letterSpacing: '0.12em'
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
          marginBottom: subtitle ? '1rem' : 0
        }}
      >
        {title}{' '}
        {italicWord && (
          <span
            className="editorial-italic"
            style={{
              color: isDark ? 'var(--accent-lime)' : 'var(--accent-lavender)',
              fontWeight: 400
            }}
          >
            {italicWord}
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
