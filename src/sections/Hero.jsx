import React from 'react';
import { Download, ChevronRight, Cpu, Radio } from 'lucide-react';
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
        paddingTop: 'calc(var(--header-height) + 1.5rem)',
        paddingBottom: '3.5rem',
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
            gap: 'clamp(1.5rem, 3.5vw, 3rem)',
            alignItems: 'center'
          }}
        >
          {/* Left Column (7 cols on desktop) */}
          <div
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.4rem'
            }}
            className="hero-left-col"
          >
            {/* Small Introductory Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.85rem',
                backgroundColor: 'rgba(18, 19, 22, 0.04)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-pill)',
                width: 'fit-content'
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: '#25825d',
                  display: 'inline-block'
                }}
                className="animate-pulse-subtle"
              />
              <span className="label-mono" style={{ color: 'var(--text-primary)', letterSpacing: '0.08em' }}>
                {personalData.tagline.toUpperCase()}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="display-hero">
              Engineering intelligent hardware and computational systems.
            </h1>

            {/* Supporting Text */}
            <p
              className="body-lead"
              style={{
                maxWidth: '600px',
                color: 'var(--text-secondary)'
              }}
            >
              First-year undergraduate at <strong>{personalData.university}</strong>. Focused on bridging physical electronics with software — architecting embedded sensor nodes, circuit schematics, graph pathfinding simulations, and applied telemetry.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.85rem',
                paddingTop: '0.25rem'
              }}
            >
              <MagneticButton
                href="#projects"
                className="btn-primary"
                style={{ fontSize: '0.92rem', padding: '0.85rem 1.65rem' }}
              >
                Explore Projects
                <ChevronRight size={15} />
              </MagneticButton>

              <MagneticButton
                onClick={onDownloadCV}
                className="btn-secondary"
                style={{ fontSize: '0.92rem', padding: '0.85rem 1.5rem' }}
              >
                <Download size={15} />
                Download Resume
              </MagneticButton>
            </div>

            {/* Quick Metrics Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '1rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-color)',
                marginTop: '0.5rem'
              }}
            >
              {personalData.stats.map((st) => (
                <div key={st.label}>
                  <div
                    className="font-interface"
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 750,
                      letterSpacing: '-0.02em',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {st.value}
                  </div>
                  <div className="label-mono" style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                    {st.label}
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
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
                maxWidth: '430px',
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
                  alt="Prathamesh Profile"
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
                  top: '-16px',
                  left: '-18px',
                  padding: '0.65rem 1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem'
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(206, 234, 80, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Cpu size={16} color="#111111" />
                </div>
                <div>
                  <div className="label-mono" style={{ fontSize: '0.62rem' }}>FOCUS</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 650, color: '#171717' }}>Embedded &amp; IoT</div>
                </div>
              </div>

              {/* Floating Technical Badge 2: Bottom Right */}
              <div
                className="animate-float-alt"
                style={{
                  position: 'absolute',
                  bottom: '-18px',
                  right: '-16px',
                  padding: '0.65rem 1rem',
                  backgroundColor: '#0F1012',
                  color: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem'
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(206, 234, 80, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Radio size={16} color="var(--accent-lime)" />
                </div>
                <div>
                  <div className="label-mono" style={{ color: 'var(--accent-lime)', fontSize: '0.62rem' }}>TEAM BYTE ME</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 650, color: '#F7F6F2' }}>Hackathon Unit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
