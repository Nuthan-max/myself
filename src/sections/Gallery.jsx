import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { galleryData } from '../data/gallery';
import { Maximize2, Camera, Sparkles } from 'lucide-react';

export default function Gallery({ onOpenLightbox }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'University', 'Projects', 'Events', 'Sports'];

  const filteredItems = filter === 'All'
    ? galleryData.filter(i => i.category !== 'Portrait') // exclude standalone portrait
    : galleryData.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeading
          badge="08 // GALLERY"
          title="Moments &amp;"
          highlightWord="Visual Archive."
          subtitle="A photographic narrative capturing laboratory instrumentation, competitive sports, hackathons, and university life."
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
                  fontSize: '0.82rem',
                  fontWeight: isSelected ? 700 : 500,
                  backgroundColor: isSelected ? '#D4FF00' : 'rgba(255, 255, 255, 0.04)',
                  color: isSelected ? '#08090C' : '#8E94A0',
                  border: isSelected ? '1px solid #D4FF00' : '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Masonry Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            alignItems: 'stretch'
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item, filteredItems)}
              className="spotlight-card"
              style={{
                backgroundColor: 'var(--bg-card)',
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
                  backgroundColor: '#090B0E',
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
                    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Hover Maximize Button */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(9, 11, 14, 0.8)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D4FF00',
                    border: '1px solid rgba(212, 255, 0, 0.3)'
                  }}
                >
                  <Maximize2 size={14} />
                </div>
              </div>

              {/* Caption & Metadata */}
              <div style={{ padding: '1.25rem 1.4rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="tag-tech" style={{ fontSize: '0.68rem', backgroundColor: 'rgba(212, 255, 0, 0.1)', borderColor: 'rgba(212, 255, 0, 0.25)', color: '#D4FF00' }}>
                    {item.category}
                  </span>
                  <span className="label-mono" style={{ fontSize: '0.68rem', color: '#888' }}>
                    {item.year}
                  </span>
                </div>
                <h4 className="heading-card" style={{ fontSize: '1.1rem', color: '#F4F5F8' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.84rem', color: '#8E94A0', lineHeight: 1.5 }}>
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
