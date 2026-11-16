import React from 'react';
import { Download, ChevronRight, Terminal, Radio, ShieldCheck, Cpu } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import HeroThreeCanvas from '../components/HeroThreeCanvas';
import InteractiveLabDeck from '../components/InteractiveLabDeck';
import { personalData } from '../data/personal';

export default function Hero({ onDownloadCV }) {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--header-height) + 2rem)',
        paddingBottom: '4rem',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      {/* Subtle Star/Signal Particles */}
      <HeroThreeCanvas />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(1.5rem, 3.5vw, 3rem)',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Kinetic Identity & Headline (7 cols) */}
          <div
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.35rem'
            }}
            className="hero-left-col"
          >
            {/* Live System Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.35rem 0.85rem',
                backgroundColor: 'rgba(212, 255, 0, 0.08)',
                border: '1px solid rgba(212, 255, 0, 0.3)',
                borderRadius: 'var(--radius-pill)',
                width: 'fit-content'
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: '#D4FF00',
                  boxShadow: '0 0 8px #D4FF00'
                }}
                className="animate-pulse-subtle"
              />
              <span className="label-mono" style={{ color: '#D4FF00', letterSpacing: '0.08em' }}>
                ECE UNDERGRADUATE // LOVELY PROFESSIONAL UNIVERSITY
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="display-hero"
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                color: '#F4F5F8'
              }}
            >
              Engineering <span style={{ color: '#D4FF00' }}>hardware intelligence</span> into physical &amp; deep code.
            </h1>

            {/* Supporting Description */}
            <p
              className="body-lead"
              style={{
                maxWidth: '580px',
                color: '#8E94A0',
                fontSize: '1.02rem',
                lineHeight: 1.65
              }}
            >
              Bridging the gap between physical sensor physics and algorithmic logic. Designing PCB schematics, programming dual-core microcontrollers, and building dynamic computer vision telemetry.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.85rem',
                paddingTop: '0.2rem'
              }}
            >
              <MagneticButton
                href="#projects"
                className="btn-primary"
                style={{ fontSize: '0.92rem', padding: '0.85rem 1.65rem' }}
              >
                Inspect Selected Projects
                <ChevronRight size={15} />
              </MagneticButton>

              <MagneticButton
                onClick={onDownloadCV}
                className="btn-secondary"
                style={{ fontSize: '0.92rem', padding: '0.85rem 1.5rem' }}
              >
                <Download size={15} />
                Download Curriculum Vitae
              </MagneticButton>
            </div>

            {/* Telemetry Metrics Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                gap: '1rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                marginTop: '0.4rem'
              }}
            >
              {[
                { val: '92%', label: 'HIGHER SECONDARY', sub: 'Academic Distinction' },
                { val: '03+', label: 'CORE SYSTEMS', sub: 'Hardware & ML' },
                { val: 'BYTE ME', label: 'HACKATHONS', sub: 'Hardware Lead' },
                { val: 'AI + IoT', label: 'SPECIALIZATION', sub: 'Cyber-Physical' }
              ].map((st) => (
                <div key={st.label}>
                  <div
                    className="font-interface"
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 750,
                      letterSpacing: '-0.02em',
                      color: '#F4F5F8'
                    }}
                  >
                    {st.val}
                  </div>
                  <div className="label-mono" style={{ fontSize: '0.65rem', color: '#8E94A0', marginTop: '0.15rem' }}>
                    {st.label}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#565C68' }}>
                    {st.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Interactive Hardware Studio (5 cols) */}
          <div
            style={{
              gridColumn: 'span 12'
            }}
            className="hero-right-col"
          >
            <InteractiveLabDeck />
          </div>
        </div>
      </div>
    </section>
  );
}
