import React from 'react';
import SectionHeading from '../components/SectionHeading';
import WindowFrame from '../components/WindowFrame';
import { projectsData } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';

export default function Projects({ onSelectProject }) {
  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <SectionHeading
          badge="04 // PROJECTS"
          title="Ideas, learning, and"
          highlightWord="project work."
          subtitle="A current snapshot of concepts and work discussed so far. Implementation status is stated explicitly; unconfirmed results are not presented as achievements."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
          {projectsData.map((project) => (
            <WindowFrame
              key={project.id}
              title={`${project.id}.app`}
              subtitle={project.category}
            >
              <article style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <span className="font-annotation" style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-lime)' }}>
                    /{project.number}
                  </span>
                  <span className="tag-tech" style={{ backgroundColor: 'rgba(139, 154, 110, 0.1)', borderColor: 'rgba(139, 154, 110, 0.3)', color: 'var(--accent-lime)' }}>
                    {project.status}
                  </span>
                </div>

                <h3 className="heading-card" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.65rem)', color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                  {project.title}
                </h3>
                <p className="body-regular" style={{ maxWidth: '850px', marginBottom: '1rem' }}>
                  {project.shortDescription}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.15rem' }}>
                  {project.technologies.map((technology) => (
                    <span key={technology} className="tag-tech">
                      {technology}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="btn-secondary"
                  style={{ padding: '0.6rem 1rem', fontSize: '0.82rem' }}
                >
                  Project details
                  <ArrowUpRight size={14} />
                </button>
              </article>
            </WindowFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
