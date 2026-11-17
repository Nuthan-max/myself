import React from 'react';
import { ArrowDown, ArrowUpRight, Download, MoveUpRight } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import { personalData } from '../data/personal';

export default function Hero({ onDownloadCV }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span className="hero-status-dot" />
              <span>ECE student · {personalData.location}</span>
            </div>

            <h1 className="hero-title">
              I’m learning where
              <br />
              <span>hardware meets</span>
              <br />
              <span className="hero-title-accent">intelligence.</span>
            </h1>

            <p className="hero-description">
              {personalData.bio}
            </p>

            <div className="hero-actions">
              <MagneticButton href="#projects" className="btn-primary hero-primary-action">
                Explore my work
                <MoveUpRight size={16} />
              </MagneticButton>
              <MagneticButton onClick={onDownloadCV} className="btn-secondary hero-secondary-action">
                <Download size={15} />
                View résumé
              </MagneticButton>
            </div>

            <div className="hero-footnote">
              <span className="hero-footnote-mark">↳</span>
              <span>First semester · Lovely Professional University, Punjab</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
            <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
            <div className="hero-portrait-shell">
              <img
                src="/images/nuthan-portrait.jpg"
                alt="Portrait of Nuthan G"
                className="hero-portrait"
              />
              <div className="hero-image-caption">
                <span>ECE · LPU</span>
                <span>HARDWARE × SOFTWARE</span>
              </div>
            </div>

            <div className="hero-float-card hero-float-card-top">
              <span className="hero-float-icon">↗</span>
              <span>
                <strong>Curious by design</strong>
                <small>Exploring hardware and software</small>
              </span>
            </div>

            <a className="hero-float-card hero-float-card-bottom" href="#projects">
              <span className="hero-signal" aria-hidden="true">
                <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
              </span>
              <span>
                <strong>Ideas into projects</strong>
                <small>See project notes and status</small>
              </span>
              <ArrowUpRight size={17} />
            </a>

            <div className="hero-side-note">LEARN · EXPLORE · BUILD</div>
          </div>
        </div>

        <div className="hero-bottom-row">
          <a href="#about" className="hero-scroll-link">
            <span className="hero-scroll-icon"><ArrowDown size={14} /></span>
            Scroll to explore
          </a>
          <div className="hero-stats" aria-label="Portfolio highlights">
            <div className="hero-stat">
              <strong>92<span>%</span></strong>
              <small>Class 12 · 2025</small>
            </div>
            <div className="hero-stat">
              <strong>01</strong>
              <small>Current semester</small>
            </div>
          </div>
          <span className="hero-edition">B.TECH · ECE</span>
        </div>
      </div>
    </section>
  );
}
