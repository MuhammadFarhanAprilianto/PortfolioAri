import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';
import SmoothScrollProvider from './components/SmoothScrollProvider';

export default function App() {
  // Aktifkan scroll reveal untuk semua elemen .sr di halaman (kecuali navbar, sidebar, footer)
  useScrollReveal();

  const handleScrollToContact = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo('#contact', { offset: -20, duration: 1.2 });
    } else {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <SmoothScrollProvider>
      <div className="portfolio-app-root">
        {/* Dynamic Background Atmosphere */}
        <div className="bg-atmosphere" aria-hidden="true">
          <div className="gradient-orb-1"></div>
          <div className="gradient-orb-2"></div>
          <div className="gradient-orb-3"></div>
          <div className="bg-grid-mesh"></div>
        </div>

        {/* Floating Pill Navigation */}
        <Navbar onContactClick={handleScrollToContact} />

        {/* Main Page Content */}
        <main>
          <HeroSection onExploreClick={handleScrollToContact} />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        {/* Minimal Footer */}
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
