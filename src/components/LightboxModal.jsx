import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ item, allItems, onSelect, onClose }) {
  if (!item) return null;

  const currentIndex = allItems.findIndex((i) => i.id === item.id);

  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + allItems.length) % allItems.length;
    onSelect(allItems[prevIndex]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % allItems.length;
    onSelect(allItems[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + allItems.length) % allItems.length;
        onSelect(allItems[prevIndex]);
      }
      if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % allItems.length;
        onSelect(allItems[nextIndex]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, allItems, onClose, onSelect]);

  return (
    <div
      className="modal-overlay open"
      onClick={onClose}
      style={{
        backgroundColor: 'rgba(10, 10, 12, 0.94)',
        padding: 'clamp(1rem, 3vw, 2.5rem)'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '1000px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '-50px',
            right: '0',
            color: '#FFFFFF',
            padding: '0.5rem',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.1)',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          title="Close (Esc)"
        >
          <X size={22} />
        </button>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          style={{
            position: 'absolute',
            left: '-60px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#FFFFFF',
            padding: '0.75rem',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.1)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          className="hide-on-mobile"
          title="Previous (Left arrow)"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          style={{
            position: 'absolute',
            right: '-60px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#FFFFFF',
            padding: '0.75rem',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.1)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          className="hide-on-mobile"
          title="Next (Right arrow)"
        >
          <ChevronRight size={24} />
        </button>

        {/* Media Frame */}
        <div
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#111111',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
            border: '1px solid rgba(255,255,255,0.1)',
            maxHeight: '75vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{
              maxHeight: '75vh',
              maxWidth: '100%',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Caption Bar Below Image */}
        <div
          style={{
            width: '100%',
            marginTop: '1.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1.5rem',
            color: '#F7F6F2'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
              <span className="tag-tech" style={{ backgroundColor: 'rgba(215, 241, 113, 0.2)', borderColor: '#D7F171', color: '#D7F171' }}>
                {item.category}
              </span>
              <span className="label-mono" style={{ color: '#888888' }}>
                {item.year}
              </span>
            </div>
            <h4 className="heading-card" style={{ color: '#FFFFFF', fontSize: '1.25rem' }}>
              {item.title}
            </h4>
            <p style={{ color: '#AAAAAA', fontSize: '0.9rem', marginTop: '0.35rem' }}>
              {item.caption}
            </p>
          </div>

          <div className="label-mono" style={{ color: 'var(--accent-lime)', flexShrink: 0 }}>
            {currentIndex + 1} / {allItems.length}
          </div>
        </div>
      </div>
    </div>
  );
}
