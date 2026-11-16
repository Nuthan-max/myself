import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CertificateModal from './components/CertificateModal';
import ProjectDetailModal from './components/ProjectDetailModal';
import LightboxModal from './components/LightboxModal';
import CVModal from './components/CVModal';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Hackathons from './sections/Hackathons';
import Sports from './sections/Sports';
import Certificates from './sections/Certificates';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';

// Data
import { certificatesData } from './data/certificates';
import { projectsData } from './data/projects';
import { galleryData } from './data/gallery';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [selectedCertId, setSelectedCertId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxState, setLightboxState] = useState({ isOpen: false, item: null, allItems: [] });
  const [cvModalOpen, setCvModalOpen] = useState(false);

  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    let lenis;
    try {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    } catch (err) {
      console.warn('Lenis smooth scroll fallback:', err);
    }

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  const currentCertificate = selectedCertId
    ? certificatesData.find((c) => c.id === selectedCertId)
    : null;

  const handleOpenLightbox = (item, allItems = galleryData) => {
    setLightboxState({
      isOpen: true,
      item,
      allItems
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState({ isOpen: false, item: null, allItems: [] });
  };

  return (
    <>
      {/* Subtle Grain Overlay for Luxury Editorial Texture */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Custom Fluid Cursor */}
      <CustomCursor />

      {/* Cinematic Preloader */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* Top Navigation */}
      <Navbar onDownloadCV={() => setCvModalOpen(true)} />

      {/* Main Portfolio Sections */}
      <main id="main-content">
        <Hero onDownloadCV={() => setCvModalOpen(true)} />
        <About />
        <Education
          onSelectCertificate={(id) => setSelectedCertId(id)}
        />
        <Skills />
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <Hackathons
          onSelectCertificate={(id) => setSelectedCertId(id)}
        />
        <Sports
          onSelectCertificate={(id) => setSelectedCertId(id)}
          onOpenLightbox={(item) => handleOpenLightbox(item, [item])}
        />
        <Certificates
          onSelectCertificate={(id) => setSelectedCertId(id)}
        />
        <Gallery
          onOpenLightbox={(item, all) => handleOpenLightbox(item, all)}
        />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top with Scroll Progress */}
      <BackToTop />

      {/* Modals */}
      <CertificateModal
        certificate={currentCertificate}
        onClose={() => setSelectedCertId(null)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {lightboxState.isOpen && (
        <LightboxModal
          item={lightboxState.item}
          allItems={lightboxState.allItems}
          onSelect={(newItem) => setLightboxState((prev) => ({ ...prev, item: newItem }))}
          onClose={handleCloseLightbox}
        />
      )}

      <CVModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </>
  );
}
