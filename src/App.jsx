import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import MenuBar from './components/MenuBar';
import FloatingDock from './components/FloatingDock';
import SpotlightSearch from './components/SpotlightSearch';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CertificateModal from './components/CertificateModal';
import ProjectDetailModal from './components/ProjectDetailModal';
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
import Contact from './sections/Contact';

// Data
import { certificatesData } from './data/certificates';
import { projectsData } from './data/projects';

export default function App() {
  const [selectedCertId, setSelectedCertId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [spotlightOpen, setSpotlightOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll with Lenis
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

  // Keyboard shortcut for Spotlight (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSpotlightOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Track active section for dock indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'skills', 'projects', 'hackathons', 'certificates', 'contact'];
      let current = 'hero';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 260 && rect.bottom >= 260) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentCertificate = selectedCertId
    ? certificatesData.find((c) => c.id === selectedCertId)
    : null;

  return (
    <>
      {/* Subtle Grain Overlay for Spatial Texture */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Custom Fluid Cursor */}
      <CustomCursor />

      {/* Top macOS Menu Bar */}
      <MenuBar
        onOpenSpotlight={() => setSpotlightOpen(true)}
        onDownloadCV={() => setCvModalOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main id="main-content" style={{ paddingBottom: '80px' }}>
        <Hero onDownloadCV={() => setCvModalOpen(true)} />
        <About />
        <Education />
        <Skills />
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <Hackathons />
        <Sports />
        <Certificates
          onSelectCertificate={(id) => setSelectedCertId(id)}
        />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating macOS Dock */}
      <FloatingDock
        onOpenSpotlight={() => setSpotlightOpen(true)}
        onDownloadCV={() => setCvModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Back to Top with Scroll Progress */}
      <BackToTop />

      {/* Spotlight Command Palette (Cmd + K) */}
      <SpotlightSearch
        isOpen={spotlightOpen}
        onClose={() => setSpotlightOpen(false)}
        onSelectProject={(project) => setSelectedProject(project)}
        onSelectCertificate={(id) => setSelectedCertId(id)}
        onDownloadCV={() => setCvModalOpen(true)}
      />

      {/* Modals */}
      <CertificateModal
        certificate={currentCertificate}
        onClose={() => setSelectedCertId(null)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CVModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </>
  );
}
