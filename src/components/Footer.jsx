import React from 'react';
import { ArrowUp } from 'lucide-react';
import { HugeiconsIcon } from '@hugeicons/react';
import WhatsappIcon from '@hugeicons/core-free-icons/WhatsappIcon';
import Mail01Icon from '@hugeicons/core-free-icons/Mail01Icon';
import Linkedin01Icon from '@hugeicons/core-free-icons/Linkedin01Icon';
import InstagramIcon from '@hugeicons/core-free-icons/InstagramIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        
        <div className="footer-top-row">
          <div className="footer-brand">
            <div className="brand-pill">
              <span>Ari Supriyanto</span>
            </div>
            <p className="brand-tagline">
              Lulusan S1 Teknik Mesin & Welder 3G Plat BNSP dengan kompetensi manufaktur <br className="tagline-break" />
              otomotif, fabrikasi pengelasan presisi, time study alat berat, dan kepatuhan K3 industri.
            </p>
          </div>

          <div className="footer-socials">
            <a 
              href="https://wa.me/62895365251714?text=Halo%20Ari%20Supriyanto,%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20peluang%20kerja%20/%20kerjasama." 
              target="_blank" 
              rel="noreferrer" 
              className="social-pill" 
              aria-label="WhatsApp"
            >
              <HugeiconsIcon icon={WhatsappIcon} size={16} strokeWidth={1.8} className="social-icon" />
              <span>WhatsApp</span>
            </a>
            <a 
              href="mailto:arisupriyanto376@gmail.com" 
              className="social-pill" 
              aria-label="Email"
            >
              <HugeiconsIcon icon={Mail01Icon} size={16} strokeWidth={1.8} className="social-icon" />
              <span>Email</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/ari-supriyanto-a84720395/" 
              target="_blank" 
              rel="noreferrer" 
              className="social-pill" 
              aria-label="LinkedIn"
            >
              <HugeiconsIcon icon={Linkedin01Icon} size={16} strokeWidth={1.8} className="social-icon" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://www.instagram.com/aryspyt__" 
              target="_blank" 
              rel="noreferrer" 
              className="social-pill" 
              aria-label="Instagram"
            >
              <HugeiconsIcon icon={InstagramIcon} size={16} strokeWidth={1.8} className="social-icon" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="copyright-text">
            © {new Date().getFullYear()} Ari Supriyanto.
          </p>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>

      <style>{`
        .footer-wrapper {
          padding: 60px 0 40px 0;
          border-top: 1px solid rgba(226, 232, 240, 0.8);
          position: relative;
          z-index: 10;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(12px);
        }

        .footer-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(241, 245, 249, 1);
          flex-wrap: wrap;
          gap: 24px;
        }

        .footer-brand {
          max-width: 650px;
        }

        .brand-pill {
          display: inline-block;
          background: #2563eb;
          color: #ffffff;
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Bold', sans-serif);
          font-weight: 700;
          font-size: 15px;
          padding: 6px 18px;
          border-radius: 9999px;
          margin-bottom: 12px;
          box-shadow: 0 4px 14px -2px rgba(37, 99, 235, 0.35);
        }

        .brand-tagline {
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 15.5px;
          color: #475569;
          line-height: 1.65;
          font-weight: 500;
        }

        .footer-socials {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .social-pill {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          padding: 8px 18px;
          border-radius: 9999px;
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 13.5px;
          font-weight: 600;
          color: #334155;
          text-decoration: none;
          overflow: hidden;
          z-index: 1;
          transform: none !important;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
          transition: color 1000ms ease, border-color 1000ms ease, box-shadow 1000ms ease;
        }

        .social-pill::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 100%;
          background: #2563eb;
          transition: width 1000ms cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
        }

        .social-pill span,
        .social-pill svg,
        .social-pill .social-icon {
          position: relative;
          z-index: 2;
          transition: color 1000ms ease, stroke 1000ms ease;
        }

        .social-pill:hover::before {
          width: 100%;
        }

        .social-pill:hover {
          color: #ffffff;
          border-color: #2563eb;
          box-shadow: 0 6px 20px -2px rgba(37, 99, 235, 0.35);
          transform: none !important;
        }

        .social-pill:hover span {
          color: #ffffff;
        }

        .social-pill:hover svg,
        .social-pill:hover .social-icon {
          color: #ffffff;
          stroke: #ffffff;
        }

        .footer-bottom-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 13.5px;
          color: #64748b;
          flex-wrap: wrap;
          gap: 14px;
        }

        .copyright-text {
          color: #64748b;
          font-weight: 500;
        }

        .back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          color: #64748b;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .back-to-top-btn:hover {
          color: #2563eb;
        }

        @media (max-width: 768px) {
          .tagline-break {
            display: none;
          }
          .brand-tagline {
            font-size: 14px;
          }
          .footer-wrapper {
            padding: 45px 0 calc(30px + env(safe-area-inset-bottom, 0px)) 0;
          }
          .footer-top-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 22px;
            padding-bottom: 28px;
          }
          .footer-bottom-row {
            flex-direction: column-reverse;
            align-items: flex-start;
            gap: 14px;
          }
          .social-pill {
            padding: 7px 14px;
            font-size: 12.5px;
          }
        }
      `}</style>
    </footer>
  );
}
