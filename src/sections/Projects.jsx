import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { projectsData } from '../data/projects';
import { ArrowUpRight, Github, ExternalLink, Cpu, Sparkles, Terminal } from 'lucide-react';

export default function Projects({ onSelectProject }) {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <SectionHeading
          badge="04 // HARDWARE &amp; SOFTWARE SYSTEMS"
          title="Featured Projects &amp;"
          highlightWord="Engineering Systems."
          subtitle="Applied cyber-physical hardware, graph-search pathfinding simulations, and computer vision models developed for hackathons and academic study."
        />

        {/* Project Cards Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2.5rem, 5vw, 4rem)' }}>
          {projectsData.map((project, index) => {
            const isHovered = hoveredProjectId === project.id;
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="spotlight-card"
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: 'var(--radius-xl)',
                  border: isHovered ? '1px solid rgba(212, 255, 0, 0.4)' : '1px solid var(--border-color)',
                  overflow: 'hidden',
                  padding: 'clamp(1.5rem, 3.5vw, 2.75rem)',
                  boxShadow: isHovered ? 'var(--shadow-card-hover)' : 'var(--shadow-subtle)',
                  transition: 'all var(--transition-normal)'
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                    alignItems: 'center'
                  }}
                >
                  {/* Visual Column */}
                  <div
                    style={{
                      gridColumn: 'span 12',
                      order: isEven ? 1 : 2
                    }}
                    className="hero-left-col"
                  >
                    <div
                      onClick={() => onSelectProject(project)}
                      style={{
                        position: 'relative',
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        backgroundColor: '#090B0E',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        aspectRatio: '16 / 10'
                      }}
                    >
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                      />

                      {/* Pill */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '14px',
                          right: '14px',
                          padding: '0.4rem 0.85rem',
                          backgroundColor: 'rgba(9, 11, 14, 0.9)',
                          backdropFilter: 'blur(8px)',
                          borderRadius: 'var(--radius-pill)',
                          color: '#FFFFFF',
                          fontSize: '0.74rem',
                          fontFamily: 'var(--font-mono)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          border: '1px solid rgba(212, 255, 0, 0.3)'
                        }}
                      >
                        TECHNICAL STUDY <ArrowUpRight size={12} color="#D4FF00" />
                      </div>
                    </div>
                  </div>

                  {/* Info Column */}
                  <div
                    style={{
                      gridColumn: 'span 12',
                      order: isEven ? 2 : 1,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.15rem'
                    }}
                    className="hero-right-col"
                  >
                    {/* Index & Category */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '1.4rem',
                          fontWeight: 800,
                          color: '#D4FF00'
                        }}
                      >
                        /{project.number}
                      </span>
                      <span className="tag-tech" style={{ backgroundColor: 'rgba(212, 255, 0, 0.1)', borderColor: 'rgba(212, 255, 0, 0.3)', color: '#D4FF00' }}>
                        {project.status}
                      </span>
                    </div>

                    <h3
                      className="heading-card"
                      style={{
                        fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                        color: '#F4F5F8',
                        lineHeight: 1.2
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="body-regular"
                      style={{
                        fontSize: '0.94rem',
                        lineHeight: 1.65,
                        color: '#8E94A0'
                      }}
                    >
                      {project.shortDescription}
                    </p>

                    {/* Tech Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech.name} className="tag-tech">
                          <Cpu size={11} color="#00F0FF" />
                          {tech.name}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '0.4rem' }}>
                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="btn-primary"
                        style={{ padding: '0.7rem 1.35rem', fontSize: '0.86rem' }}
                      >
                        Technical Case Study
                        <ArrowUpRight size={14} />
                      </button>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        style={{ padding: '0.7rem 1.2rem', fontSize: '0.86rem' }}
                      >
                        <Github size={14} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
