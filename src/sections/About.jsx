import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { personalData } from '../data/personal';
import { MapPin, GraduationCap, Sparkles, BookOpen, Layers, Cpu, Terminal, ShieldCheck, Wrench } from 'lucide-react';

export default function About() {
  const metadataItems = [
    { label: 'Current Degree', value: personalData.degree, icon: GraduationCap },
    { label: 'University', value: personalData.university, icon: BookOpen },
    { label: 'Academic Standing', value: personalData.currentYear, icon: Layers },
    { label: 'Location Base', value: personalData.location, icon: MapPin },
  ];

  const interestPills = [
    'Circuit Schematics & PCB Design (KiCad)',
    'Microcontroller Firmware (ESP32 / AVR)',
    'Computer Vision & Object Detection (OpenCV)',
    'Dynamic Graph Pathfinding (A* & Dijkstra)',
    'Edge Machine Learning Telemetry',
    'High-Performance Web Dashboards'
  ];

  const labSpecs = [
    { label: 'Core Platform', val: 'ESP32 Dual-Core (240MHz Xtensa LX6)' },
    { label: 'EDA Environment', val: 'KiCad 8.0 PCB Layout & DRC Verification' },
    { label: 'Firmware Languages', val: 'Embedded C++, Python, MicroPython' },
    { label: 'Instruments', val: 'Digital Storage Oscilloscope, Logic Analyzer, DMM' },
    { label: 'Protocols', val: 'I2C, SPI, UART, MQTT, WebSocket, FreeRTOS' },
  ];

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeading
          badge="01 // IDENTITY &amp; PHILOSOPHY"
          title="Bridging physical electronics with"
          highlightWord="deep code."
          subtitle="Academic foundation, engineering philosophy, and the intersections between physical circuits and computational logic."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4.5vw, 3.5rem)',
            alignItems: 'flex-start'
          }}
        >
          {/* Left Column: Cybernetic Hardware Spec Sheet */}
          <div
            style={{ gridColumn: 'span 12' }}
            className="hero-right-col"
          >
            <div
              style={{
                position: 'sticky',
                top: '95px',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-color)',
                padding: '1.5rem',
                boxShadow: 'var(--shadow-medium)'
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: '0.85rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  marginBottom: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Cpu size={16} color="#D4FF00" />
                  <span className="label-mono" style={{ color: '#D4FF00', fontSize: '0.72rem' }}>
                    ENGINEERING BENCH PROFILE
                  </span>
                </div>
                <span className="label-mono" style={{ color: '#888' }}>
                  REV 2.4
                </span>
              </div>

              {/* Identity Quick Block */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h3 className="font-interface" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#F4F5F8' }}>
                  PRATHAMESH
                </h3>
                <div style={{ fontSize: '0.82rem', color: '#00F0FF', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                  B.Tech ECE • Lovely Professional University
                </div>
                <div style={{ fontSize: '0.78rem', color: '#8E94A0', marginTop: '0.35rem' }}>
                  Higher Secondary: <strong>92% Academic Distinction</strong>
                </div>
              </div>

              {/* Lab & Hardware Specs List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
                {labSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    style={{
                      padding: '0.65rem 0.85rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <div className="label-mono" style={{ fontSize: '0.62rem', color: '#565C68', marginBottom: '0.15rem' }}>
                      {spec.label}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#C5C9D3', fontWeight: 550 }}>
                      {spec.val}
                    </div>
                  </div>
                ))}
              </div>

              {/* Status pill */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.65rem 0.85rem',
                  backgroundColor: 'rgba(212, 255, 0, 0.08)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(212, 255, 0, 0.25)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#D4FF00',
                      boxShadow: '0 0 6px #D4FF00'
                    }}
                  />
                  <span className="label-mono" style={{ color: '#D4FF00', fontSize: '0.65rem' }}>
                    HARDWARE / CODE VERIFIED
                  </span>
                </div>
                <span className="label-mono" style={{ color: '#888', fontSize: '0.65rem' }}>
                  LPU CLASS OF 2029
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Metadata, and Focus */}
          <div
            style={{ gridColumn: 'span 12' }}
            className="hero-left-col"
          >
            {/* Lead Narrative */}
            <p
              className="body-lead"
              style={{
                fontSize: 'clamp(1.05rem, 1.35vw, 1.2rem)',
                lineHeight: 1.68,
                color: '#F4F5F8',
                marginBottom: '1.25rem'
              }}
            >
              I am an undergraduate student in <strong>Electronics and Communication Engineering</strong> at <strong>Lovely Professional University</strong>. My work focuses on the physical layer where electronic signals are measured, filtered, and converted into intelligent computational actions.
            </p>

            <p
              className="body-regular"
              style={{
                marginBottom: '1.75rem',
                lineHeight: 1.7,
                color: '#8E94A0'
              }}
            >
              Having completed my Higher Secondary education with a <strong>92% academic distinction</strong> under the Karnataka State Board, I apply mathematical discipline and methodical bench testing to every build. From designing schematics in KiCad and programming microcontrollers to deploying graph search algorithms and computer vision models at national hackathons, I focus on practical, verifiable engineering.
            </p>

            {/* Quote Card */}
            <div
              style={{
                padding: '1.25rem 1.5rem',
                backgroundColor: 'var(--bg-card)',
                borderLeft: '3px solid #D4FF00',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                border: '1px solid var(--border-color)',
                borderLeftColor: '#D4FF00',
                marginBottom: '1.75rem'
              }}
            >
              <p
                style={{
                  fontSize: '0.96rem',
                  lineHeight: 1.6,
                  color: '#F4F5F8',
                  marginBottom: '0.5rem',
                  fontWeight: 500
                }}
              >
                "{personalData.editorialStatement}"
              </p>
              <span className="label-mono" style={{ color: '#8E94A0' }}>
                — PRATHAMESH // ENGINEERING MANIFESTO
              </span>
            </div>

            {/* Academic Metadata Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '0.85rem',
                marginBottom: '1.75rem'
              }}
            >
              {metadataItems.map((meta) => {
                const IconComponent = meta.icon;
                return (
                  <div
                    key={meta.label}
                    style={{
                      padding: '1.1rem',
                      backgroundColor: 'var(--bg-card)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem'
                    }}
                  >
                    <div
                      style={{
                        padding: '0.45rem',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        color: '#D4FF00'
                      }}
                    >
                      <IconComponent size={16} />
                    </div>
                    <div>
                      <div className="label-mono" style={{ fontSize: '0.66rem', marginBottom: '0.15rem' }}>
                        {meta.label}
                      </div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#F4F5F8' }}>
                        {meta.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Core Technical Focus Areas */}
            <div>
              <div className="label-mono" style={{ color: '#8E94A0', marginBottom: '0.75rem' }}>
                CURRENT TECHNICAL &amp; RESEARCH FOCUS
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {interestPills.map((pill) => (
                  <span
                    key={pill}
                    className="tag-tech"
                    style={{
                      padding: '0.4rem 0.85rem',
                      fontSize: '0.8rem',
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-color)'
                    }}
                  >
                    <Sparkles size={12} color="#00F0FF" />
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
