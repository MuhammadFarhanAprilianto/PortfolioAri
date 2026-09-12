import React, { useState, useEffect, lazy, Suspense } from 'react';
import { ArrowRight, CornerDownRight, TrendingUp } from 'lucide-react';
import confetti from 'canvas-confetti';

const ThreeCanvas = lazy(() => import('./ThreeCanvas'));

class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.warn('Canvas 3D Error:', error, info);
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

export default function HeroSection({ onExploreClick }) {
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    let timer;
    const trigger3D = () => {
      setShow3D(true);
      window.removeEventListener('scroll', trigger3D);
      window.removeEventListener('mousemove', trigger3D);
      window.removeEventListener('touchstart', trigger3D);
      if (timer) clearTimeout(timer);
    };

    window.addEventListener('scroll', trigger3D, { passive: true, once: true });
    window.addEventListener('mousemove', trigger3D, { passive: true, once: true });
    window.addEventListener('touchstart', trigger3D, { passive: true, once: true });
    timer = setTimeout(trigger3D, 400);

    return () => {
      window.removeEventListener('scroll', trigger3D);
      window.removeEventListener('mousemove', trigger3D);
      window.removeEventListener('touchstart', trigger3D);
      if (timer) clearTimeout(timer);
    };
  }, []);

  const triggerConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { x, y },
      colors: ['#3b82f6', '#60a5fa', '#a855f7', '#38bdf8', '#fbbf24'],
    });

    if (onExploreClick) onExploreClick();
  };

  return (
    <section id="home" className="hero-section">
      {/* 3D Three.js Background Canvas khusus di dalam batas Hero section */}
      <CanvasErrorBoundary>
        <Suspense fallback={null}>
          {show3D && <ThreeCanvas />}
        </Suspense>
      </CanvasErrorBoundary>

      <div className="container hero-content">
        
        {/* Main Headline — Above the fold: rendered immediately for max LCP score */}
        <div className="hero-header-text">
          <div className="status-badge-pill">
            <span>S1 Teknik Mesin • Welder SMAW 3G Plat • Ex-Komatsu Indonesia</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line">Hi, I'm Ari Supriyanto —</span>
            <span className="hero-title-line hero-highlight">Mechanical Engineer & Welder Plate 3G SMAW</span>
          </h1>

          <p className="hero-subtitle">
            Menggabungkan ketelitian analisis Teknik Mesin (S1 IPK 3.52) dengan keahlian praktis pengelasan <strong>SMAW 3G Plat</strong>, pemodelan 3D CAD Autodesk Inventor, serta rekam jejak manufaktur perakitan main frame alat berat di <strong>PT. Komatsu Indonesia</strong>.
          </p>

          {/* Action Row */}
          <div className="hero-action-row">
            <a 
              href="#contact" 
              className="hero-cta-btn" 
              onClick={triggerConfetti}
              id="hero-partner-btn"
            >
              <span>Hubungi / Rekrut Ari</span>
              <ArrowRight size={16} />
            </a>

            <div className="proof-text">
              <span>Alumni</span>
              <strong>PPKD Jaktim</strong>
              <span>&</span>
              <strong>UNDIRA</strong>
            </div>
          </div>
        </div>

        {/* Center Stage: Hero Image & 3 Floating Cards */}
        <div className="hero-visual-stage">
          
          {/* Subtle Stage Backlight Glow */}
          <div className="stage-glow"></div>

          {/* Floating Card 1 (Top Left) - Sertifikasi SMAW 3G */}
          <div className="floating-stat-card card-top-left glass-card">
            <div className="card-header-row">
              <div className="stat-value">SMAW 3G Plat</div>
              <span className="badge-micro"><TrendingUp size={12} /> Lulus Uji</span>
            </div>
            <div className="stat-label">Sertifikasi PPKD Jaktim</div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: '95%' }}>
                <span className="progress-knob"></span>
              </div>
            </div>
          </div>

          {/* Floating Card 2 (Right Middle) - Pengalaman PT Komatsu Indonesia */}
          <div className="floating-stat-card card-right-mid glass-card">
            <div className="reply-card-header">
              <img 
                src="/Gemini_Generated_Image_vdreu6vdreu6vdre.webp" 
                alt="Ari Supriyanto - PT Komatsu Indonesia" 
                className="reply-avatar" 
                loading="lazy"
                decoding="async"
                width="40"
                height="40"
              />
              <div className="reply-meta">
                <div className="reply-sender">
                  <CornerDownRight size={13} className="reply-icon" />
                  <span>PT. Komatsu Indonesia</span>
                </div>
                <div className="reply-message">
                  <span className="reply-line">Time Study assembly main frame HD 785 &</span>
                  <span className="reply-line">pembaruan design sheet / K3.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card 3 (Bottom Left) - Pendidikan & IPK */}
          <div className="floating-stat-card card-bottom-left glass-card">
            <div className="meetings-meta">
              <span className="stat-sublabel">S1 Teknik Mesin</span>
              <div className="meetings-row">
                <span className="meetings-number">IPK 3.52 / 4.0</span>
                <span className="active-indicator-bar"></span>
              </div>
            </div>
            <div className="meetings-arrow">
              <ArrowRight size={14} />
            </div>
          </div>

          {/* Hero Portrait Photo — LCP Element Optimized */}
          <div className="hero-image-wrapper">
            <img 
              src="/Gemini_Generated_Image_vdreu6vdreu6vdre.webp" 
              alt="Ari Supriyanto - Mechanical Engineer & Certified Welder 3G" 
              className="hero-portrait-img" 
              fetchPriority="high"
              decoding="async"
              width="440"
              height="550"
            />
            {/* Soft bottom blend mask */}
            <div className="bottom-blend-gradient"></div>
          </div>

        </div>

      </div>

      <style>{`
        .hero-section {
          padding-top: 130px;
          padding-bottom: 70px;
          position: relative;
          overflow: hidden;
          z-index: 10;
        }

        .hero-content {
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .status-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(226, 232, 240, 0.9);
          font-family: 'Plus Jakarta Sans', var(--font-main), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #475569;
          margin-bottom: 24px;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.03);
        }

        .hero-title {
          font-family: var(--font-sf-pro, 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
          font-size: clamp(1.65rem, 3.1vw, 2.75rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #0f172a;
          line-height: 1.18;
          margin-bottom: 22px;
          max-width: 1100px;
          width: 100%;
        }

        .hero-title-line {
          display: block;
          white-space: nowrap;
        }

        .hero-highlight {
          color: #1e293b;
          background: linear-gradient(135deg, #0f172a 30%, #334155 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 0.95em;
        }

        .hero-subtitle {
          font-family: 'Plus Jakarta Sans', var(--font-main), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: clamp(1rem, 1.25vw, 1.2rem);
          color: #475569;
          line-height: 1.6;
          max-width: 660px;
          margin: 0 auto 34px auto;
          font-weight: 400;
        }

        .hero-subtitle strong {
          font-family: 'Plus Jakarta Sans', var(--font-main), sans-serif;
          font-weight: 600;
          color: #1e293b;
        }

        .hero-action-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 22px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .hero-cta-btn {
          position: relative;
          background: #2563eb;
          color: #ffffff;
          padding: 13px 30px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          box-shadow: 0 10px 25px -4px rgba(37, 99, 235, 0.35);
          border: 1.5px solid #2563eb;
          overflow: hidden;
          z-index: 1;
          transition: color 1000ms ease, border-color 1000ms ease, box-shadow 1000ms ease;
        }

        .hero-cta-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 100%;
          background: #ffffff;
          transition: width 1000ms cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
        }

        .hero-cta-btn span,
        .hero-cta-btn svg {
          position: relative;
          z-index: 2;
          transition: color 1000ms ease, stroke 1000ms ease;
        }

        .hero-cta-btn:hover::before {
          width: 100%;
        }

        .hero-cta-btn:hover {
          color: #000000;
          border-color: #2563eb;
          box-shadow: 0 10px 25px -4px rgba(37, 99, 235, 0.25);
          /* Tetap diam di tempat, tanpa gerak ke atas */
          transform: none;
        }

        .hero-cta-btn:hover span {
          color: #000000;
        }

        .hero-cta-btn:hover svg {
          stroke: #000000;
        }

        .proof-text {
          font-family: 'Plus Jakarta Sans', var(--font-main), -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 14px;
          color: #475569;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          flex-wrap: wrap;
          text-align: center;
          letter-spacing: 0.01em;
        }

        .proof-text strong {
          color: #0f172a;
          font-weight: 600;
        }

        /* Hero Visual Stage */
        .hero-visual-stage {
          position: relative;
          width: 100%;
          max-width: 680px;
          margin-top: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .stage-glow {
          position: absolute;
          width: 460px;
          height: 460px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(147, 197, 253, 0.35) 0%, rgba(224, 231, 255, 0.2) 50%, rgba(255, 255, 255, 0) 75%);
          filter: blur(40px);
          z-index: 1;
          pointer-events: none;
        }

        .hero-image-wrapper {
          position: relative;
          width: 380px;
          max-width: 85vw;
          height: 480px;
          z-index: 2;
          overflow: hidden;
          border-radius: 36px 36px 0 0;
        }

        .hero-portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          filter: drop-shadow(0 15px 30px rgba(15, 23, 42, 0.12));
        }

        .bottom-blend-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: linear-gradient(to bottom, rgba(248, 250, 252, 0) 0%, #f8fafc 100%);
          pointer-events: none;
        }

        /* Floating Cards */
        .floating-stat-card {
          position: absolute;
          z-index: 5;
          text-align: left;
          font-family: 'Plus Jakarta Sans', var(--font-main), -apple-system, BlinkMacSystemFont, sans-serif;
          animation: none !important;
          transform: none !important;
        }

        .floating-stat-card * {
          font-family: 'Plus Jakarta Sans', var(--font-main), -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Card 1: Top Left - SMAW 3G Plat 1 Baris */
        .card-top-left {
          top: 35%;
          left: -45px;
          width: 236px;
          padding: 15px 18px;
        }

        .card-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          margin-bottom: 2px;
        }

        .stat-value {
          font-size: 14.5px;
          font-weight: 700;
          color: #0f172a;
          white-space: nowrap;
        }

        .badge-micro {
          font-size: 11px;
          color: #2563eb;
          background: #eff6ff;
          padding: 2px 6px;
          border-radius: 6px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 2px;
          white-space: nowrap;
        }

        .stat-label {
          font-size: 12px;
          color: #64748b;
          margin-bottom: 12px;
          white-space: nowrap;
        }

        .progress-track {
          width: 100%;
          height: 7px;
          background: #e2e8f0;
          border-radius: 9999px;
          position: relative;
          overflow: visible;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
          border-radius: 9999px;
          position: relative;
        }

        .progress-knob {
          position: absolute;
          right: -3px;
          top: -2.5px;
          width: 12px;
          height: 12px;
          background: #ffffff;
          border: 2.5px solid #2563eb;
          border-radius: 50%;
          box-shadow: 0 2px 5px rgba(37, 99, 235, 0.4);
        }

        /* Card 2: Right Mid - Komatsu Message 2 Baris */
        .card-right-mid {
          top: 40%;
          right: -80px;
          width: 325px;
          padding: 14px 16px;
        }

        .reply-card-header {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .reply-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          object-fit: cover;
          object-position: top center;
          flex-shrink: 0;
          border: 1.5px solid #ffffff;
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
        }

        .reply-meta {
          flex: 1;
        }

        .reply-sender {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 13px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 4px;
          white-space: nowrap;
        }

        .reply-icon {
          color: #64748b;
        }

        .reply-message {
          font-size: 12px;
          color: #475569;
          line-height: 1.45;
        }

        .reply-line {
          display: block;
          white-space: nowrap;
        }

        /* Card 3: Bottom Left */
        .card-bottom-left {
          bottom: 12%;
          left: -15px;
          width: 185px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .stat-sublabel {
          font-size: 11.5px;
          color: #64748b;
          display: block;
          margin-bottom: 2px;
          white-space: nowrap;
        }

        .meetings-row {
          display: flex;
          align-items: center;
          gap: 7px;
          white-space: nowrap;
        }

        .meetings-number {
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
          white-space: nowrap;
        }

        .active-indicator-bar {
          display: inline-block;
          width: 4px;
          height: 14px;
          background: #2563eb;
          border-radius: 2px;
        }

        .meetings-arrow {
          color: #cbd5e1;
          display: flex;
          align-items: center;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .card-top-left {
            left: -10px;
            top: 25%;
            width: 215px;
          }
          .card-right-mid {
            right: -20px;
            top: 38%;
            width: 295px;
          }
          .card-bottom-left {
            left: 0px;
            bottom: 6%;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 100px;
            padding-bottom: 50px;
          }
          .hero-title-line {
            white-space: normal;
          }
          .hero-subtitle {
            text-align: justify;
            text-justify: inter-word;
          }
          .hero-action-row {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 12px;
            width: 100%;
            margin: 0 auto 30px auto;
          }
          .hero-cta-btn {
            width: auto;
            align-self: center;
            justify-content: center;
            text-align: center;
          }
          .proof-text {
            justify-content: center;
            text-align: center;
            width: 100%;
          }
          .bottom-blend-gradient {
            height: 25px;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding-top: 85px;
            padding-bottom: 35px;
          }
          .hero-title {
            font-size: clamp(1.35rem, 5.2vw, 1.95rem);
            line-height: 1.24;
          }
          .hero-image-wrapper {
            width: min(310px, 84vw);
          }

          /* Card 1 (Gambar 2): SMAW 3G Plat - Diperkecil & digeser ke sudut atas agar tidak menutupi wajah */
          .card-top-left {
            left: -10px;
            top: 3%;
            width: 155px;
            padding: 7px 10px;
            border-radius: 12px;
            transform: none !important;
          }
          .card-top-left .stat-value {
            font-size: 11px;
          }
          .card-top-left .badge-micro {
            font-size: 8.5px;
            padding: 1px 4px;
          }
          .card-top-left .stat-label {
            font-size: 9px;
            margin-bottom: 5px;
          }
          .card-top-left .progress-track {
            height: 4px;
          }
          .card-top-left .progress-knob {
            width: 8px;
            height: 8px;
            top: -2px;
          }

          /* Card 2 (Gambar 3): Komatsu - Diperkecil & digeser ke bawah agar tidak menutupi badan */
          .card-right-mid {
            right: -10px;
            top: 58%;
            width: 190px;
            max-width: calc(100vw - 40px);
            padding: 8px 10px;
            border-radius: 12px;
            transform: none !important;
          }
          .card-right-mid .reply-card-header {
            gap: 7px;
          }
          .card-right-mid .reply-avatar {
            width: 24px;
            height: 24px;
          }
          .card-right-mid .reply-sender {
            font-size: 10px;
            margin-bottom: 2px;
            gap: 3px;
          }
          .card-right-mid .reply-message {
            font-size: 8.5px;
            line-height: 1.35;
          }
          .card-right-mid .reply-line {
            display: inline;
            white-space: normal;
          }

          /* Card 3 (Gambar 4): S1 Teknik Mesin - Diperkecil di sudut bawah */
          .card-bottom-left {
            left: -10px;
            bottom: 4%;
            width: 125px;
            padding: 6px 10px;
            border-radius: 12px;
            transform: none !important;
          }
          .card-bottom-left .stat-sublabel {
            font-size: 8.5px;
            margin-bottom: 1px;
          }
          .card-bottom-left .meetings-number {
            font-size: 11px;
          }
          .card-bottom-left .active-indicator-bar {
            width: 3px;
            height: 10px;
          }
          .card-bottom-left .meetings-arrow {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-action-row {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            width: 100%;
            gap: 12px;
            margin: 0 auto 28px auto;
          }
          .hero-cta-btn {
            width: auto;
            align-self: center;
            justify-content: center;
            padding: 12px 28px;
            font-size: 14.5px;
          }
          .proof-text {
            justify-content: center;
            text-align: center;
            font-size: 13px;
          }
          .card-top-left {
            width: 140px;
            left: -6px;
            top: 2%;
          }
          .card-right-mid {
            width: 175px;
            right: -6px;
            top: 56%;
          }
          .card-bottom-left {
            width: 115px;
            left: -6px;
            bottom: 3%;
          }
        }

        @media (max-width: 360px) {
          .card-top-left {
            width: 130px;
            left: -4px;
          }
          .card-right-mid {
            width: 160px;
            right: -4px;
          }
          .card-bottom-left {
            width: 110px;
            left: -4px;
          }
        }
      `}</style>
    </section>
  );
}
