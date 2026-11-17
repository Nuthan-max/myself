import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { skillsData } from '../data/skills';
import { Code2, Cpu, Wrench, Sparkles } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('programming');
  const [activeSkill, setActiveSkill] = useState(null);

  const categories = [
    { key: 'programming', label: 'Programming', icon: Code2, count: skillsData.programming.skills.length },
    { key: 'electronics', label: 'Electronics', icon: Cpu, count: skillsData.electronics.skills.length },
    { key: 'development', label: 'Development', icon: Wrench, count: skillsData.development.skills.length },
    { key: 'emerging', label: 'Interests', icon: Sparkles, count: skillsData.emerging.skills.length },
  ];

  const currentCategoryData = skillsData[activeCategory];

  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeading
          badge="03 // CAPABILITIES"
          title="Technical interests &amp;"
          highlightWord="exploration."
          subtitle="Areas of interest and tools explored so far. These entries do not imply advanced proficiency."
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
                  padding: '0.65rem 1.25rem',
                  borderRadius: 'var(--radius-pill)',
                  fontFamily: 'var(--font-interface)',
                  fontSize: '0.88rem',
                  fontWeight: isSelected ? 700 : 500,
                  backgroundColor: isSelected ? 'var(--accent-lime)' : 'rgba(85, 91, 77, 0.04)',
                  color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                  border: isSelected ? '1px solid var(--accent-lime)' : '1px solid rgba(85, 91, 77, 0.08)',
                  boxShadow: isSelected ? '0 0 16px rgba(139, 154, 110, 0.25)' : 'none',
                  transition: 'all var(--transition-fast)',
                  cursor: 'pointer'
                }}
              >
                <Icon size={15} color={isSelected ? 'var(--text-primary)' : 'inherit'} />
                {cat.label}
                <span
                  style={{
                    fontSize: '0.7rem',
                    padding: '0.15rem 0.45rem',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: isSelected ? 'rgba(0, 0, 0, 0.2)' : 'rgba(85, 91, 77, 0.08)',
                    color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)'
                  }}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Scope Banner */}
        <div
          style={{
            padding: '0.85rem 1.25rem',
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)',
            marginBottom: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <span className="label-mono" style={{ color: 'var(--accent-lime)' }}>
            SCOPE // {currentCategoryData.category.toUpperCase()}
          </span>
          <span className="label-mono" style={{ color: 'var(--text-secondary)' }}>
            {currentCategoryData.tagline}
          </span>
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.25rem'
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
                  padding: '1.5rem',
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: 'var(--radius-lg)',
                  border: isHovered ? '1px solid var(--accent-lime)' : '1px solid var(--border-color)',
                  transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                  transition: 'all var(--transition-normal)'
                }}
              >
                {/* Header */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.85rem'
                  }}
                >
                  <h3
                    className="heading-card"
                    style={{
                      fontSize: '1.2rem',
                      color: 'var(--text-primary)',
                      margin: 0
                    }}
                  >
                    {skill.name}
                  </h3>
                  <span
                    className="label-mono"
                    style={{
                      padding: '0.2rem 0.55rem',
                      borderRadius: 'var(--radius-pill)',
                      backgroundColor: 'rgba(139, 154, 110, 0.12)',
                      color: 'var(--accent-lime)',
                      border: '1px solid rgba(139, 154, 110, 0.25)',
                      fontWeight: 650,
                      fontSize: '0.68rem'
                    }}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Practical Scope Description */}
                <p
                  className="body-regular"
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: 'var(--text-secondary)',
                    marginBottom: '1.2rem'
                  }}
                >
                  {skill.scope}
                </p>

                {/* Implementations */}
                <div>
                  <div
                    className="label-mono"
                    style={{
                      fontSize: '0.65rem',
                      color: '#565C68',
                      marginBottom: '0.45rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    EXPOSURE &amp; RELATED AREAS
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {skill.useCases.map((uc) => (
                      <div
                        key={uc}
                        style={{
                          fontSize: '0.82rem',
                          color: 'var(--text-secondary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.45rem'
                        }}
                      >
                        <span style={{ color: 'var(--accent-cyan)' }}>▸</span>
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
