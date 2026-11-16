import React from 'react';
import { ArrowDown, Download, Sparkles, ChevronRight, Cpu, Radio, Shield } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import HeroThreeCanvas from '../components/HeroThreeCanvas';
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
      {/* Three.js 3D Visual Mesh in Background */}
      <HeroThreeCanvas />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(1.5rem, 4vw, 3.5rem)',
            alignItems: 'center'
          }}
        >
          {/* Left Column (7 cols on desktop) */}
          <div
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem'
            }}
            className="hero-left-col"
          >
            {/* Small Introductory Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 0.9rem',
                backgroundColor: 'rgba(23, 23, 23, 0.04)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-pill)',
                width: 'fit-content'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#25825d',
                  display: 'inline-block'
                }}
                className="animate-pulse-subtle"
              />
              <span className="label-mono" style={{ color: 'var(--text-primary)', letterSpacing: '0.12em' }}>
                {personalData.tagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="display-hero">
              {personalData.headline.part1}{' '}
              <span style={{ color: 'var(--text-secondary)' }}>{personalData.headline.part2}</span><br />
              <span className="editorial-italic">{personalData.headline.part3}</span>
            </h1>

            {/* Supporting Text */}
            <p
              className="body-lead"
              style={{
                maxWidth: '620px',
                color: 'var(--text-secondary)'
              }}
            >
              First-year undergraduate at <strong>{personalData.university}</strong>. Bridging hardware intelligence with software craft — architecting embedded sensor nodes, circuit schematics, graph pathfinding simulations, and applied AI systems.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '0.5rem'
              }}
            >
              <MagneticButton
                href="#projects"
                className="btn-primary"
                style={{ fontSize: '0.96rem', padding: '1rem 2rem' }}
              >
                Explore My Work
                <ChevronRight size={16} />
              </MagneticButton>

              <MagneticButton
                onClick={onDownloadCV}
                className="btn-secondary"
                style={{ fontSize: '0.96rem', padding: '1rem 1.85rem' }}
              >
                <Download size={16} />
                Download Resume
              </MagneticButton>
            </div>

            {/* Quick Metrics Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1.25rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-color)',
                marginTop: '0.75rem'
              }}
            >
              {personalData.stats.map((st) => (
                <div key={st.label}>
                  <div
                    className="font-interface"
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {st.value}
                  </div>
                  <div className="label-mono" style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    {st.label}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {st.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Hero Visual / Floating Technical Elements) */}
          <div
            style={{
              gridColumn: 'span 12',
              position: 'relative'
            }}
            className="hero-right-col"
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '460px',
                margin: '0 auto'
              }}
            >
              {/* Main Visual Image Card */}
              <div
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-medium)',
                  backgroundColor: '#FFFFFF',
                  position: 'relative'
                }}
              >
                <img
                  src="/gallery/portrait.svg"
                  alt="Prathamesh — Digital Identity Portrait"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>

              {/* Floating Technical Badge 1: Top Left */}
              <div
                className="animate-float"
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-24px',
                  padding: '0.75rem 1.25rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(215, 241, 113, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Cpu size={18} color="#111111" />
                </div>
                <div>
                  <div className="label-mono" style={{ fontSize: '0.65rem' }}>FOCUS MODULE</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#171717' }}>Cyber-Physical &amp; IoT</div>
                </div>
              </div>

              {/* Floating Technical Badge 2: Bottom Right */}
              <div
                className="animate-float-alt"
                style={{
                  position: 'absolute',
                  bottom: '-24px',
                  right: '-20px',
                  padding: '0.75rem 1.25rem',
                  backgroundColor: '#111111',
                  color: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 16px 36px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(215, 241, 113, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Radio size={18} color="#D7F171" />
                </div>
                <div>
                  <div className="label-mono" style={{ color: '#D7F171', fontSize: '0.65rem' }}>TEAM BYTE ME</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#F7F6F2' }}>Hackathon Lead</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
