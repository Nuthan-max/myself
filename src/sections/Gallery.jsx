import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { galleryData } from '../data/gallery';
import { Maximize2, Camera, Sparkles } from 'lucide-react';

export default function Gallery({ onOpenLightbox }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'University', 'Projects', 'Events', 'Sports', 'Portrait'];

  const filteredItems = filter === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <SectionHeading
          badge="08 // VISUAL ARCHIVE"
          title="Editorial Moments &amp;"
          italicWord="Visual Chronicle."
          subtitle="A curated photographic narrative capturing laboratory instrumentation, competitive sports, hackathons, and university life."
        />

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2.5rem'
          }}
        >
          {categories.map((cat) => {
            const isSelected = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                style={{
                  padding: '0.45rem 1.15rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.84rem',
                  fontWeight: isSelected ? 700 : 500,
                  backgroundColor: isSelected ? 'var(--text-primary)' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                  border: isSelected ? '1px solid var(--text-primary)' : '1px solid var(--border-color)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Masonry Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item, galleryData)}
              className="spotlight-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Media Frame */}
              <div
                style={{
                  position: 'relative',
                  aspectRatio: item.aspect === 'tall' ? '4 / 5' : item.aspect === 'square' ? '1 / 1' : '16 / 10',
                  backgroundColor: '#111111',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Hover Maximize Button */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(17, 17, 17, 0.75)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF'
                  }}
                >
                  <Maximize2 size={16} />
                </div>
              </div>

              {/* Caption & Metadata */}
              <div style={{ padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="tag-tech" style={{ fontSize: '0.7rem' }}>
                    {item.category}
                  </span>
                  <span className="label-mono" style={{ fontSize: '0.7rem' }}>
                    {item.year}
                  </span>
                </div>
                <h4 className="heading-card" style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
