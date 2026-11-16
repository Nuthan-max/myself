import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { skillsData } from '../data/skills';
import { Code2, Cpu, Wrench, Sparkles, Check, ChevronRight } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('programming');
  const [activeSkill, setActiveSkill] = useState(null);

  const categories = [
    { key: 'programming', label: 'Programming', icon: Code2, count: skillsData.programming.skills.length },
    { key: 'electronics', label: 'Electronics', icon: Cpu, count: skillsData.electronics.skills.length },
    { key: 'development', label: 'Development', icon: Wrench, count: skillsData.development.skills.length },
    { key: 'emerging', label: 'Emerging Tech', icon: Sparkles, count: skillsData.emerging.skills.length },
  ];

  const currentCategoryData = skillsData[activeCategory];

  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeading
          badge="03 // SKILLS"
          title="Technical Competencies &amp;"
          highlightWord="Applied Stack."
          subtitle="Practical hardware, circuit design, and software engineering capabilities developed through laboratory coursework and real builds."
        />

        {/* Category Switcher Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '2.5rem',
            justifyContent: 'flex-start'
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.key);
                  setActiveSkill(null);
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.75rem 1.4rem',
                  borderRadius: 'var(--radius-pill)',
                  fontFamily: 'var(--font-interface)',
                  fontSize: '0.92rem',
                  fontWeight: isSelected ? 700 : 500,
                  backgroundColor: isSelected ? 'var(--text-primary)' : '#FFFFFF',
                  color: isSelected ? 'var(--bg-primary)' : 'var(--text-secondary)',
                  border: isSelected ? '1px solid var(--text-primary)' : '1px solid var(--border-color)',
                  boxShadow: isSelected ? '0 4px 16px rgba(23, 23, 23, 0.15)' : 'none',
                  transition: 'all var(--transition-fast)',
                  cursor: 'pointer'
                }}
              >
                <Icon size={16} color={isSelected ? 'var(--accent-lime)' : 'inherit'} />
                {cat.label}
                <span
                  style={{
                    fontSize: '0.72rem',
                    padding: '0.15rem 0.5rem',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.2)' : 'rgba(23, 23, 23, 0.05)',
                    color: isSelected ? '#FFFFFF' : 'var(--text-muted)'
                  }}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Tagline Banner */}
        <div
          style={{
            padding: '1rem 1.5rem',
            backgroundColor: 'var(--bg-primary)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)',
            marginBottom: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <span className="label-mono" style={{ color: 'var(--text-primary)' }}>
            CATEGORY SCOPE // {currentCategoryData.category.toUpperCase()}
          </span>
          <span className="label-mono" style={{ color: 'var(--text-secondary)' }}>
            {currentCategoryData.tagline}
          </span>
        </div>

        {/* Skills Cards Grid with Hover Expansion & Tilt */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {currentCategoryData.skills.map((skill) => {
            const isHovered = activeSkill === skill.name;
            return (
              <div
                key={skill.name}
                className="spotlight-card"
                onMouseEnter={() => setActiveSkill(skill.name)}
                onMouseLeave={() => setActiveSkill(null)}
                style={{
                  padding: '1.75rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: isHovered ? '1px solid var(--text-primary)' : '1px solid var(--border-color)',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  transition: 'all var(--transition-normal)'
                }}
              >
                {/* Header */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  <h3
                    className="heading-card"
                    style={{
                      fontSize: '1.35rem',
                      color: 'var(--text-primary)',
                      margin: 0
                    }}
                  >
                    {skill.name}
                  </h3>
                  <span
                    className="label-mono"
                    style={{
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-pill)',
                      backgroundColor: 'rgba(215, 241, 113, 0.25)',
                      color: '#171717',
                      fontWeight: 600,
                      fontSize: '0.7rem'
                    }}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Practical Scope Description */}
                <p
                  className="body-regular"
                  style={{
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    color: 'var(--text-secondary)',
                    marginBottom: '1.25rem'
                  }}
                >
                  {skill.scope}
                </p>

                {/* Demonstrated Real-world Use Cases */}
                <div>
                  <div
                    className="label-mono"
                    style={{
                      fontSize: '0.68rem',
                      color: 'var(--text-muted)',
                      marginBottom: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <Check size={12} color="#25825d" />
                    PRACTICAL IMPLEMENTATIONS
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {skill.useCases.map((uc) => (
                      <div
                        key={uc}
                        style={{
                          fontSize: '0.84rem',
                          color: 'var(--text-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <span style={{ color: 'var(--accent-lavender)' }}>▸</span>
                        <span>{uc}</span>
                      </div>
                    ))}
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
