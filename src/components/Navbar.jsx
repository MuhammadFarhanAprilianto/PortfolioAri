import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight, Download, Mail, Check } from 'lucide-react';

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const email = 'arisupriyanto376@gmail.com';

  useEffect(() => {
    const handleScroll = () => {
      // Toggle ke mode sidebar jika scroll lebih dari 70px di desktop
      const scrolled = window.scrollY > 70;
      setIsScrolled(scrolled);

      // Deteksi section yang sedang aktif
      const sections = ['home', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tutup menu mobile jika layar di-resize ke ukuran desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Kunci scroll body saat mobile menu terbuka
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCV = (e) => {
    if (e) e.preventDefault();
    const link = document.createElement('a');
    link.href = '/CV - ARI SUPRIYANTO.pdf';
    link.download = 'CV - ARI SUPRIYANTO.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'About', icon3d: '/3dicons/home-3d.webp' },
    { id: 'projects', label: 'Projects', icon3d: '/3dicons/projects-gradient.webp' },
    { id: 'skills', label: 'Skills', icon3d: '/3dicons/skills-gradient.webp' },
    { id: 'experience', label: 'Experience', icon3d: '/3dicons/trophy-gradient.webp' },
    { id: 'contact', label: 'Contact', icon3d: '/3dicons/contact-gradient.webp' },
  ];

  return (
    <>
      {/* 1. TOP NAVBAR */}
      <header className={`top-navbar-wrapper ${isScrolled ? 'nav-hidden' : 'nav-visible'} ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
        <div className="navbar-content">
          
          {/* Sisi Kiri Desktop: Email + Logo Ari + Pill CV */}
          <div className="navbar-left desktop-only">
            <span className="navbar-email">{email}</span>
            
            <button 
              className={`nav-action-pill nav-logo-pill ${copied ? 'copied' : ''}`}
              onClick={handleCopy}
              title={copied ? "Email tersalin!" : "Ari - Salin Email"}
              aria-label="Logo Ari"
              id="nav-logo-btn"
            >
              <img 
                src="/Ari-logo.png" 
                alt="Ari Logo" 
                className="nav-brand-logo-img" 
              />
              {copied && <span className="copied-bubble">Copied!</span>}
            </button>

            <a 
              href="/CV - ARI SUPRIYANTO.pdf" 
              download="CV - ARI SUPRIYANTO.pdf"
              className="nav-action-pill"
              onClick={handleDownloadCV}
              title="Download CV Ari Supriyanto"
              id="nav-cv-btn"
            >
              <span>CV</span>
            </a>
          </div>

          {/* Sisi Kiri Mobile (Android & iOS): Logo + Nama Brand */}
          <div className="mobile-brand-left mobile-only">
            <button 
              className="mobile-logo-btn" 
              onClick={scrollToTop} 
              aria-label="Kembali ke atas"
            >
              <img src="/Ari-logo.png" alt="Ari Logo" className="mobile-brand-img" />
              <span className="mobile-brand-name">Ari Supriyanto</span>
            </button>
          </div>

          {/* Sisi Kanan Desktop: Social Links */}
          <div className="navbar-right desktop-only">
            <a 
              href="https://www.linkedin.com/in/ari-supriyanto-a84720395/" 
              target="_blank" 
              rel="noreferrer" 
              className="social-nav-link"
            >
              LinkedIn
            </a>
            <span className="social-slash">/</span>
            <a 
              href="https://wa.me/62895365251714?text=Halo%20Ari%20Supriyanto,%20saya%20tertarik%20bekerja%20sama" 
              target="_blank" 
              rel="noreferrer" 
              className="social-nav-link"
            >
              WhatsApp
            </a>
            <span className="social-slash">/</span>
            <a 
              href="mailto:arisupriyanto376@gmail.com" 
              className="social-nav-link"
            >
              Email
            </a>
          </div>

          {/* Sisi Kanan Mobile: Tombol CV + Hamburger Toggle Button */}
          <div className="mobile-actions-right mobile-only">
            <a 
              href="/CV - ARI SUPRIYANTO.pdf" 
              download="CV - ARI SUPRIYANTO.pdf"
              className="mobile-cv-pill"
              onClick={handleDownloadCV}
              title="Download CV Ari Supriyanto"
            >
              <span>CV</span>
            </a>

            <button 
              className={`hamburger-toggle-btn ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Tutup Menu Navigasi' : 'Buka Menu Navigasi'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X size={22} className="hamburger-icon" />
              ) : (
                <Menu size={22} className="hamburger-icon" />
              )}
            </button>
          </div>

        </div>

        {/* MOBILE MENU DRAWER PANEL (Khusus Android & iOS) */}
        <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'drawer-open' : 'drawer-closed'}`}>
          <div className="mobile-drawer-inner">
            
            {/* Navigasi Utama */}
            <div className="mobile-nav-section">
              <span className="mobile-section-label">Navigasi</span>
              <nav className="mobile-nav-items">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  >
                    <span className="mobile-nav-icon-box">
                      <img src={item.icon3d} alt={item.label} className="mobile-nav-3d-img" />
                    </span>
                    <span className="mobile-nav-text">{item.label}</span>
                    <span className="mobile-active-dot"></span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="mobile-drawer-divider"></div>

            {/* Quick Actions & Kontak */}
            <div className="mobile-actions-section">
              <span className="mobile-section-label">Aksi & Kontak Cepat</span>
              
              <div className="mobile-quick-actions-grid">
                <a 
                  href="/CV - ARI SUPRIYANTO.pdf" 
                  download="CV - ARI SUPRIYANTO.pdf"
                  className="mobile-quick-btn mobile-cv-action"
                  onClick={(e) => { handleDownloadCV(e); setIsMobileMenuOpen(false); }}
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </a>

                <a 
                  href="https://wa.me/62895365251714?text=Halo%20Ari%20Supriyanto,%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20peluang%20kerja." 
                  target="_blank" 
                  rel="noreferrer"
                  className="mobile-quick-btn mobile-wa-action"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="mobile-footer-links">
                <button 
                  className={`mobile-contact-pill ${copied ? 'copied' : ''}`}
                  onClick={handleCopy}
                >
                  {copied ? <Check size={14} className="text-green-600" /> : <Mail size={14} />}
                  <span>{copied ? 'Email Tersalin!' : email}</span>
                </button>

                <a 
                  href="https://www.linkedin.com/in/ari-supriyanto-a84720395/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="mobile-contact-pill"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Backdrop overlay saat menu mobile terbuka */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-backdrop-overlay" 
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* 2. FLOATING SIDEBAR (Tampil khusus di layar Desktop saat di-scroll) */}
      <aside 
        className={`floating-sidebar-wrapper ${isScrolled ? 'sidebar-visible' : 'sidebar-hidden'}`}
        aria-label="Floating Navigation Sidebar"
      >
        <div className="sidebar-glass-card">
          
          {/* Logo Brand Ari di atas Sidebar */}
          <button 
            className="sidebar-brand-btn" 
            onClick={scrollToTop}
            title="Kembali ke atas"
            aria-label="Kembali ke atas"
          >
            <img src="/Ari-logo.png" alt="Ari Logo" className="sidebar-logo-img" />
          </button>

          <div className="sidebar-divider"></div>

          {/* Navigasi Menu Vertikal dengan 3DIcons */}
          <nav className="sidebar-nav-list">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`sidebar-nav-item ${activeSection === item.id ? 'active' : ''}`}
                title={item.label}
              >
                <span className="nav-item-icon">
                  <img 
                    src={item.icon3d} 
                    alt={item.label} 
                    className="nav-3d-icon" 
                  />
                </span>
                <span className="nav-item-text">{item.label}</span>

              </a>
            ))}
          </nav>

          <div className="sidebar-divider"></div>

          {/* Quick Actions (CV, WhatsApp, Copy Email) */}
          <div className="sidebar-actions-group">
            <a 
              href="/CV - ARI SUPRIYANTO.pdf" 
              download="CV - ARI SUPRIYANTO.pdf"
              className="sidebar-pill-action"
              onClick={handleDownloadCV}
              title="Download CV Ari Supriyanto"
            >
              <span>CV</span>
            </a>

            <a 
              href="https://wa.me/6281234567890?text=Halo%20Ari,%20saya%20tertarik%20bekerja%20sama"
              target="_blank"
              rel="noreferrer"
              className="sidebar-icon-action whatsapp-action"
              title="Chat WhatsApp"
            >
              <MessageCircle size={15} />
            </a>


          </div>

        </div>
      </aside>

      <style>{`
        /* -------------------------------------------
           TOP NAVBAR STYLES
           ------------------------------------------- */
        .top-navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(226, 232, 240, 0.4);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease;
          font-family: var(--font-gilroy);
        }

        .top-navbar-wrapper.nav-visible {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .top-navbar-wrapper.nav-hidden {
          transform: translateY(-100%);
          opacity: 0;
          pointer-events: none;
        }

        .navbar-content {
          max-width: 1320px;
          margin: 0 auto;
          padding: 16px 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .navbar-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .navbar-email {
          font-family: var(--font-gilroy);
          font-size: 13.5px;
          font-weight: 500;
          color: #334155;
          letter-spacing: -0.01em;
          margin-right: 4px;
        }

        .nav-action-pill {
          position: relative;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 9999px;
          padding: 6px 18px;
          font-family: var(--font-gilroy);
          font-size: 13px;
          font-weight: 600;
          color: #1e293b;
          text-decoration: none;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          height: 31px;
          line-height: 1;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          isolation: isolate;
        }

        /* Hover sweep dari kiri ke kanan dengan warna #2C62F6 */
        .nav-action-pill::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: #2C62F6;
          border-radius: 9999px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1);
          z-index: 1;
        }

        .nav-action-pill:hover::before {
          transform: scaleX(1);
        }

        .nav-action-pill:hover {
          border-color: #2C62F6;
          box-shadow: 0 4px 14px rgba(44, 98, 246, 0.3);
        }

        .nav-action-pill > * {
          position: relative;
          z-index: 2;
          transition: color 0.25s ease, filter 0.25s ease;
        }

        .nav-action-pill:hover > span {
          color: #ffffff;
        }

        .nav-logo-pill {
          padding: 3px 12px;
          min-width: 42px;
        }

        .nav-brand-logo-img {
          height: 18px;
          width: 18px;
          object-fit: contain;
          display: block;
          transition: filter 0.25s ease;
        }

        .nav-logo-pill:hover .nav-brand-logo-img {
          filter: brightness(0) invert(1);
        }

        .copied-bubble {
          position: absolute;
          top: 36px;
          left: 50%;
          transform: translateX(-50%);
          background: #0f172a;
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 6px;
          white-space: nowrap;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          pointer-events: none;
          z-index: 10;
        }

        .navbar-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .social-nav-link {
          font-family: var(--font-gilroy);
          font-size: 13.5px;
          font-weight: 500;
          color: #334155;
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: color 0.2s ease;
        }

        .social-nav-link:hover {
          color: #0f172a;
        }

        .social-slash {
          color: #94a3b8;
          font-size: 13px;
          user-select: none;
        }

        /* -------------------------------------------
           FLOATING SIDEBAR STYLES (Tampil saat di-scroll)
           ------------------------------------------- */
        .floating-sidebar-wrapper {
          position: fixed;
          top: 50%;
          right: 24px;
          transform: translateY(-50%);
          z-index: 120;
          font-family: var(--font-gilroy);
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease;
        }

        .floating-sidebar-wrapper.sidebar-visible {
          transform: translateY(-50%) translateX(0);
          opacity: 1;
          pointer-events: auto;
        }

        .floating-sidebar-wrapper.sidebar-hidden {
          transform: translateY(-50%) translateX(70px);
          opacity: 0;
          pointer-events: none;
        }

        .sidebar-glass-card {
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          border-radius: 28px;
          padding: 14px 10px;
          box-shadow: 0 20px 45px -10px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(226, 232, 240, 0.6);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          min-width: 58px;
        }



        .sidebar-brand-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);
          position: relative;
          overflow: hidden;
        }

        .sidebar-brand-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: #2C62F6;
          border-radius: 50%;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
          z-index: 1;
        }

        .sidebar-brand-btn:hover::before {
          transform: scaleX(1);
        }

        .sidebar-logo-img {
          width: 20px;
          height: 20px;
          object-fit: contain;
          position: relative;
          z-index: 2;
          transition: filter 0.25s ease;
        }

        .sidebar-brand-btn:hover .sidebar-logo-img {
          filter: brightness(0) invert(1);
        }

        .sidebar-divider {
          width: 28px;
          height: 1px;
          background: rgba(226, 232, 240, 0.9);
          margin: 4px 0;
        }

        .sidebar-nav-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          align-items: center;
        }

        .sidebar-nav-item {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 14px;
          text-decoration: none;
          transition: box-shadow 0.3s ease;
          isolation: isolate;
        }

        /* Hover sweep dari kiri ke kanan dengan warna #2C62F6 (persis seperti tombol navbar) */
        .sidebar-nav-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: #2C62F6;
          border-radius: 14px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1);
          z-index: 1;
        }

        .sidebar-nav-item:hover::before {
          transform: scaleX(1);
        }

        .sidebar-nav-item.active::before {
          transform: scaleX(1);
        }

        .sidebar-nav-item:hover,
        .sidebar-nav-item.active {
          box-shadow: 0 4px 14px rgba(44, 98, 246, 0.3);
        }

        .sidebar-nav-item > * {
          position: relative;
          z-index: 2;
        }

        .nav-item-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Icon tetap diam dan tidak zoom */
        .nav-3d-icon {
          width: 24px;
          height: 24px;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 2px 4px rgba(15, 23, 42, 0.1));
        }

        /* Tooltip Teks samping saat hover icon navigasi */
        .nav-item-text {
          position: absolute;
          right: 52px;
          background: #0f172a;
          color: #ffffff;
          padding: 5px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          transform: translateX(6px);
          pointer-events: none;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
          z-index: 10;
        }

        .sidebar-nav-item:hover .nav-item-text {
          opacity: 1;
          transform: translateX(0);
        }



        /* Actions di bagian bawah Sidebar */
        .sidebar-actions-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          align-items: center;
        }

        .sidebar-pill-action {
          position: relative;
          overflow: hidden;
          width: 40px;
          height: 30px;
          border-radius: 9999px;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          font-size: 12px;
          font-weight: 700;
          color: #1e293b;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.25s ease;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
        }

        .sidebar-pill-action::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: #2C62F6;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
          z-index: 1;
        }

        .sidebar-pill-action:hover::before {
          transform: scaleX(1);
        }

        .sidebar-pill-action span {
          position: relative;
          z-index: 2;
          transition: color 0.2s ease;
        }

        .sidebar-pill-action:hover span {
          color: #ffffff;
        }

        .sidebar-icon-action {
          position: relative;
          overflow: hidden;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.85);
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          text-decoration: none;
          isolation: isolate;
        }

        /* Hover sweep dari kiri ke kanan dengan warna #2C62F6 */
        .sidebar-icon-action::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: #2C62F6;
          border-radius: 50%;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1);
          z-index: 1;
        }

        .sidebar-icon-action:hover::before {
          transform: scaleX(1);
        }

        .sidebar-icon-action:hover {
          border-color: #2C62F6;
          box-shadow: 0 4px 14px rgba(44, 98, 246, 0.3);
        }

        .sidebar-icon-action > * {
          position: relative;
          z-index: 2;
          transition: color 0.25s ease, stroke 0.25s ease;
        }

        .sidebar-icon-action:hover > * {
          color: #ffffff;
          stroke: #ffffff;
        }

        .sidebar-icon-action.copied::before {
          background-color: #16a34a;
          transform: scaleX(1);
        }

        .sidebar-icon-action.copied {
          border-color: #16a34a;
        }

        /* Desktop Only vs Mobile Only visibility */
        @media (min-width: 769px) {
          .mobile-only {
            display: none !important;
          }
          .mobile-menu-drawer {
            display: none !important;
          }
          .mobile-backdrop-overlay {
            display: none !important;
          }
        }

        /* Responsive Mobile & Tablet (Android & iOS) */
        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }

          /* Hide desktop floating sidebar dock completely on mobile */
          .floating-sidebar-wrapper {
            display: none !important;
          }

          /* Top Navbar stays fixed & clean at the top of the mobile screen */
          .top-navbar-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 200;
            padding: calc(10px + env(safe-area-inset-top, 0px)) 16px 10px 16px;
            background: rgba(255, 255, 255, 0.94);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(226, 232, 240, 0.85);
            box-shadow: 0 4px 16px -4px rgba(15, 23, 42, 0.06);
            transform: translateY(0) !important;
            opacity: 1 !important;
            pointer-events: auto !important;
          }

          .navbar-content {
            padding: 0;
            max-width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
          }

          .mobile-brand-left {
            display: flex;
            align-items: center;
          }

          .mobile-logo-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
            text-decoration: none;
          }

          .mobile-brand-img {
            width: 30px;
            height: 30px;
            object-fit: contain;
          }

          .mobile-brand-name {
            font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Bold', sans-serif);
            font-size: 16.5px;
            font-weight: 700;
            color: #0f172a;
            letter-spacing: -0.015em;
          }

          .mobile-actions-right {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .mobile-cv-pill {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 36px;
            padding: 0 14px;
            border-radius: 9999px;
            background: #0f172a;
            color: #ffffff;
            font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Bold', sans-serif);
            font-size: 12.5px;
            font-weight: 700;
            text-decoration: none;
            box-shadow: 0 2px 8px rgba(15, 23, 42, 0.15);
            transition: background-color 0.2s ease;
          }

          .mobile-cv-pill:hover {
            background: #2563eb;
          }

          .hamburger-toggle-btn {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            background: #f1f5f9;
            border: 1.5px solid #e2e8f0;
            color: #0f172a;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            padding: 0;
          }

          .hamburger-toggle-btn.open {
            background: #2563eb;
            color: #ffffff;
            border-color: #2563eb;
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
          }

          /* Mobile Menu Drawer */
          .mobile-menu-drawer {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(28px);
            -webkit-backdrop-filter: blur(28px);
            border-bottom: 1px solid rgba(226, 232, 240, 0.95);
            box-shadow: 0 20px 40px -10px rgba(15, 23, 42, 0.18);
            max-height: calc(100vh - 65px);
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
            z-index: 190;
          }

          .mobile-menu-drawer.drawer-open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }

          .mobile-menu-drawer.drawer-closed {
            transform: translateY(-15px);
            opacity: 0;
            pointer-events: none;
          }

          .mobile-drawer-inner {
            padding: 18px 18px calc(24px + env(safe-area-inset-bottom, 0px)) 18px;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .mobile-section-label {
            font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Bold', sans-serif);
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: #94a3b8;
            display: block;
            margin-bottom: 8px;
            padding-left: 4px;
          }

          .mobile-nav-items {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .mobile-nav-link {
            display: flex;
            align-items: center;
            gap: 12px;
            width: 100%;
            padding: 10px 14px;
            border-radius: 14px;
            background: transparent;
            border: 1px solid transparent;
            color: #1e293b;
            font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Bold', sans-serif);
            font-size: 15px;
            font-weight: 600;
            text-align: left;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .mobile-nav-link:hover,
          .mobile-nav-link.active {
            background: #eff6ff;
            border-color: #dbeafe;
            color: #2563eb;
          }

          .mobile-nav-icon-box {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            background: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 6px rgba(15, 23, 42, 0.05);
            border: 1px solid #f1f5f9;
            flex-shrink: 0;
          }

          .mobile-nav-3d-img {
            width: 22px;
            height: 22px;
            object-fit: contain;
          }

          .mobile-nav-text {
            flex: 1;
          }

          .mobile-active-dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #2563eb;
            display: none;
          }

          .mobile-nav-link.active .mobile-active-dot {
            display: block;
          }

          .mobile-drawer-divider {
            height: 1px;
            background: #f1f5f9;
            width: 100%;
          }

          .mobile-quick-actions-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-bottom: 10px;
          }

          .mobile-quick-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 12px 14px;
            border-radius: 12px;
            font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Bold', sans-serif);
            font-size: 13px;
            font-weight: 700;
            text-decoration: none;
          }

          .mobile-cv-action {
            background: #0f172a;
            color: #ffffff;
            box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
          }

          .mobile-wa-action {
            background: #16a34a;
            color: #ffffff;
            box-shadow: 0 4px 12px rgba(22, 163, 74, 0.25);
          }

          .mobile-footer-links {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .mobile-contact-pill {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 14px;
            border-radius: 12px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
            font-size: 13px;
            color: #334155;
            text-decoration: none;
            cursor: pointer;
            width: 100%;
          }

          .mobile-contact-pill.copied {
            background: #ecfdf5;
            border-color: #a7f3d0;
            color: #065f46;
          }

          /* Backdrop overlay */
          .mobile-backdrop-overlay {
            position: fixed;
            inset: 0;
            background: rgba(15, 23, 42, 0.45);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            z-index: 180;
          }
        }
      `}</style>
    </>
  );
}
