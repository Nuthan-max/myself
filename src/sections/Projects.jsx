import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { projectsData } from '../data/projects';
import { ArrowUpRight, Github, ExternalLink, Cpu, Sparkles, Layers } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

export default function Projects({ onSelectProject }) {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <SectionHeading
          badge="04 // PROJECTS"
          title="Featured Systems &amp;"
          highlightWord="Engineering Work."
          subtitle="Applied cyber-physical hardware, graph-search pathfinding simulations, and computer vision models developed for hackathons and academic study."
        />

        {/* Big Photographic Project Cards Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 6vw, 5rem)' }}>
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
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  border: isHovered ? '1px solid rgba(23, 23, 23, 0.3)' : '1px solid var(--border-color)',
                  overflow: 'hidden',
                  padding: 'clamp(1.5rem, 3.5vw, 3rem)',
                  boxShadow: isHovered ? 'var(--shadow-card-hover)' : 'var(--shadow-subtle)',
                  transition: 'all var(--transition-normal)'
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: 'clamp(1.5rem, 4vw, 3rem)',
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
                        backgroundColor: '#111111',
                        border: '1px solid var(--border-color)',
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
                          transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                      />

                      {/* Click overlay pill */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '16px',
                          right: '16px',
                          padding: '0.45rem 1rem',
                          backgroundColor: 'rgba(17, 17, 17, 0.85)',
                          backdropFilter: 'blur(8px)',
                          borderRadius: 'var(--radius-pill)',
                          color: '#FFFFFF',
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-mono)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          border: '1px solid rgba(255, 255, 255, 0.15)'
                        }}
                      >
                        VIEW DEEP DIVE <ArrowUpRight size={13} color="var(--accent-lime)" />
                      </div>
                    </div>
                  </div>

                  {/* Narrative Info Column */}
                  <div
                    style={{
                      gridColumn: 'span 12',
                      order: isEven ? 2 : 1,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.25rem'
                    }}
                    className="hero-right-col"
                  >
                    {/* Index & Category */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '1.75rem',
                          fontWeight: 800,
                          color: 'var(--accent-lavender)'
                        }}
                      >
                        /{project.number}
                      </span>
                      <span className="tag-tech" style={{ backgroundColor: 'rgba(215, 241, 113, 0.25)', borderColor: '#D7F171' }}>
                        {project.status}
                      </span>
                    </div>

                    <h3
                      className="heading-card"
                      style={{
                        fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                        color: 'var(--text-primary)',
                        lineHeight: 1.15
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="body-regular"
                      style={{
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {project.shortDescription}
                    </p>

                    {/* Tech Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech.name} className="tag-tech">
                          <Cpu size={12} color="var(--accent-lavender)" />
                          {tech.name}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', paddingTop: '0.5rem' }}>
                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="btn-primary"
                        style={{ padding: '0.75rem 1.4rem', fontSize: '0.88rem' }}
                      >
                        Technical Case Study
                        <ArrowUpRight size={15} />
                      </button>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        style={{ padding: '0.75rem 1.25rem', fontSize: '0.88rem' }}
                      >
                        <Github size={15} />
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
