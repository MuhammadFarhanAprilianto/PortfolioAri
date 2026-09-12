import React, { useState, useEffect, useRef } from 'react';
import { Mail, MessageCircle, Send, CheckCircle2, Copy, MapPin, ArrowUpRight, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';

const opportunityOptions = [
  'Operator Produksi & Manufaktur Otomotif',
  'Welder 3G Plat SMAW (Fabrikasi & Konstruksi)',
  'Assembly & Time Study Alat Berat (Komatsu HD 785)',
  'Teknisi Pemeliharaan & Mekanik Kendaraan Niaga',
  'Keselamatan Kerja (K3) & Pengawasan Mutu 5S',
  'Tawaran Karir Full-Time (S1 Teknik Mesin)',
  'Diskusi & Peluang Kerjasama Lainnya',
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    opportunityType: 'Operator Produksi & Manufaktur Otomotif',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.7 },
      colors: ['#2563eb', '#38bdf8', '#a855f7', '#10b981'],
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        opportunityType: 'Operator Produksi & Manufaktur Otomotif',
        message: '',
      });
    }, 4000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('arisupriyanto376@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        <div className="contact-card-wrapper">
          <div className="contact-grid">
            
            {/* Left Info Column */}
            <div className="contact-info-col sr">
              <h2 className="contact-heading">
                Mari Terhubung & Bangun Kolaborasi Profesional
              </h2>

              <p className="contact-subtext">
                Terbuka untuk peluang karir industri manufaktur, rekrutmen fabrikasi pengelasan bersertifikasi BNSP, posisi engineering otomotif/alat berat, maupun proyek teknik mesin. Hubungi Ari secara langsung atau kirimkan pesan Anda melalui formulir.
              </p>

              <div className="direct-channels">
                <div className="channel-item" onClick={copyEmail} role="button" tabIndex={0}>
                  <div className="channel-icon-box">
                    <Mail size={18} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-title">Email Resmi</span>
                    <span className="channel-val">arisupriyanto376@gmail.com</span>
                  </div>
                  <button className="copy-chip-btn">
                    {copiedEmail ? <CheckCircle2 size={14} className="text-green-600" /> : <Copy size={14} />}
                    <span>{copiedEmail ? 'Tersalin!' : 'Salin'}</span>
                  </button>
                </div>

                <a 
                  href="https://wa.me/62895365251714?text=Halo%20Ari%20Supriyanto,%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20peluang%20kerja%20/%20kerjasama%20teknik%20mesin." 
                  target="_blank" 
                  rel="noreferrer" 
                  className="channel-item"
                >
                  <div className="channel-icon-box whatsapp-icon">
                    <MessageCircle size={18} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-title">WhatsApp Langsung</span>
                    <span className="channel-val">+62 895-3652-51714</span>
                  </div>
                  <div className="open-arrow">
                    <ArrowUpRight size={16} />
                  </div>
                </a>

                <div className="channel-item non-clickable">
                  <div className="channel-icon-box location-icon">
                    <MapPin size={18} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-title">Domisili & Kesiapan</span>
                    <span className="channel-val">Jakarta, Indonesia (Siap Penempatan)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="contact-form-col sr sr-d3">
              {submitted ? (
                <div className="success-banner">
                  <div className="success-icon-ring">
                    <CheckCircle2 size={40} className="text-green-500" />
                  </div>
                  <h3 className="success-title">Pesan Berhasil Terkirim!</h3>
                  <p className="success-sub">
                    Terima kasih telah menghubungi. Ari akan segera meninjau pesan Anda dan merespons via email atau WhatsApp.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="actual-form">
                  <div className="form-group">
                    <label className="form-label" htmlFor="client-name">Nama Lengkap / Perusahaan</label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="Contoh: Bpk. Budi Santoso / PT. Manufaktur Indonesia"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-row-2col">
                    <div className="form-group">
                      <label className="form-label" htmlFor="client-email">Alamat Email</label>
                      <input
                        id="client-email"
                        type="email"
                        required
                        placeholder="hrd@perusahaan.com / nama@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="client-phone">Nomor WhatsApp / Telepon</label>
                      <input
                        id="client-phone"
                        type="tel"
                        placeholder="Contoh: 0812-3456-7890"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" id="opportunity-label">Kategori Keahlian / Bidang Peluang</label>
                    <div className="custom-dropdown-container" ref={dropdownRef}>
                      <button
                        type="button"
                        id="opportunity-dropdown-btn"
                        className={`custom-dropdown-trigger ${isDropdownOpen ? 'active' : ''}`}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        aria-haspopup="listbox"
                        aria-expanded={isDropdownOpen}
                      >
                        <span className="dropdown-selected-text">{formData.opportunityType}</span>
                        <ChevronDown size={18} className={`dropdown-chevron ${isDropdownOpen ? 'open' : ''}`} />
                      </button>

                      {isDropdownOpen && (
                        <div className="custom-dropdown-menu" role="listbox" aria-labelledby="opportunity-label">
                          {opportunityOptions.map((opt, idx) => {
                            const isSelected = formData.opportunityType === opt;
                            return (
                              <div
                                key={idx}
                                role="option"
                                aria-selected={isSelected}
                                className={`dropdown-option-item ${isSelected ? 'selected' : ''}`}
                                onClick={() => {
                                  setFormData({ ...formData, opportunityType: opt });
                                  setIsDropdownOpen(false);
                                }}
                              >
                                <span>{opt}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="client-msg">Pesan / Rincian Penawaran</label>
                    <textarea
                      id="client-msg"
                      rows="4"
                      required
                      placeholder="Tuliskan rincian lowongan kerja, kebutuhan pengelasan/fabrikasi, lokasi penempatan, atau tawaran untuk Ari..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input form-textarea"
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-form-btn" id="contact-submit-btn">
                    <span>Kirim Pesan ke Ari Supriyanto</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .contact-section {
          padding: 160px 0 100px 0;
          position: relative;
          z-index: 20;
        }

        .contact-card-wrapper {
          border-radius: 32px;
          padding: 48px;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 30px 70px -15px rgba(15, 23, 42, 0.12);
          transform: none !important;
          transition: none !important;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .contact-card-wrapper:hover {
          transform: none !important;
          box-shadow: 0 30px 70px -15px rgba(15, 23, 42, 0.12) !important;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 50px;
          align-items: center;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        .contact-info-col,
        .contact-form-col {
          width: 100%;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        .contact-heading {
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Bold', sans-serif);
          font-size: clamp(2rem, 3.2vw, 2.6rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #0f172a;
          line-height: 1.25;
          margin-bottom: 18px;
        }

        .contact-subtext {
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 15px;
          color: #64748b;
          line-height: 1.65;
          margin-bottom: 30px;
        }

        .direct-channels {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 0;
        }

        .channel-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          border-radius: 16px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        .channel-item:hover {
          background: #ffffff;
          border-color: #cbd5e1;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
          transform: none;
        }

        .channel-item.non-clickable {
          cursor: default;
        }

        .channel-item.non-clickable:hover {
          transform: none;
          box-shadow: none;
          background: #f8fafc;
          border-color: #e2e8f0;
        }

        .channel-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: #eff6ff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .whatsapp-icon {
          background: #ecfdf5;
          color: #059669;
        }

        .location-icon {
          background: #fef2f2;
          color: #ef4444;
        }

        .channel-details {
          flex: 1;
          min-width: 0;
          overflow: hidden;
        }

        .channel-title {
          display: block;
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
        }

        .channel-val {
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Bold', sans-serif);
          font-size: 14.5px;
          font-weight: 600;
          color: #0f172a;
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .copy-chip-btn {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 6px 12px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 600;
          color: #475569;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: all 0.2s ease;
        }

        .copy-chip-btn:hover {
          background: #f1f5f9;
          color: #0f172a;
        }

        .open-arrow {
          color: #94a3b8;
        }

        /* Form */
        .actual-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        .form-row-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        .form-label {
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 13px;
          font-weight: 600;
          color: #334155;
        }

        .form-input {
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1.5px solid #e2e8f0;
          background: #ffffff;
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 14px;
          color: #0f172a;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          outline: none;
        }

        .form-input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }

        /* Custom Modern Dropdown matching the UI reference */
        .custom-dropdown-container {
          position: relative;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        .custom-dropdown-trigger {
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 12px 18px;
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          border-radius: 14px;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          outline: none;
        }

        .custom-dropdown-trigger:hover {
          border-color: #94a3b8;
          background: #fafafa;
        }

        .custom-dropdown-trigger.active {
          border-color: #2563eb;
          box-shadow: 0 0 0 3.5px rgba(37, 99, 235, 0.15);
        }

        .dropdown-selected-text {
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Bold', sans-serif);
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .dropdown-chevron {
          color: #0f172a;
          flex-shrink: 0;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .dropdown-chevron.open {
          transform: rotate(180deg);
        }

        .custom-dropdown-menu {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          box-shadow: 0 16px 36px -6px rgba(15, 23, 42, 0.12), 0 4px 12px rgba(15, 23, 42, 0.05);
          padding: 6px;
          max-height: 220px;
          overflow-y: auto;
          overflow-x: hidden;
          z-index: 50;
          animation: dropdownSlideIn 0.18s cubic-bezier(0.16, 1, 0.3, 1);
          scrollbar-width: thin;
          scrollbar-color: #2563eb transparent;
        }

        /* Sleek vertical pill scrollbar indicator in signature blue */
        .custom-dropdown-menu::-webkit-scrollbar {
          width: 5px;
        }

        .custom-dropdown-menu::-webkit-scrollbar-track {
          background: transparent;
          margin: 8px 0;
        }

        .custom-dropdown-menu::-webkit-scrollbar-thumb {
          background: #2563eb;
          border-radius: 9999px;
        }

        @keyframes dropdownSlideIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-option-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-radius: 10px;
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 13.5px;
          color: #334155;
          cursor: pointer;
          transition: all 0.15s ease;
          user-select: none;
        }

        .dropdown-option-item:hover {
          background: #f8fafc;
          color: #0f172a;
        }

        .dropdown-option-item.selected {
          background: #eff6ff;
          color: #2563eb;
          font-weight: 600;
        }

        .form-textarea {
          resize: vertical;
        }

        .submit-form-btn {
          position: relative;
          background: #2563eb;
          color: #ffffff;
          border: 1.5px solid #2563eb;
          padding: 14px 28px;
          border-radius: 14px;
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Bold', sans-serif);
          font-weight: 600;
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          overflow: hidden;
          z-index: 1;
          box-shadow: 0 10px 25px -4px rgba(37, 99, 235, 0.35);
          transition: color 1000ms ease, border-color 1000ms ease, box-shadow 1000ms ease;
          margin-top: 6px;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .submit-form-btn::before {
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

        .submit-form-btn span,
        .submit-form-btn svg {
          position: relative;
          z-index: 2;
          transition: color 1000ms ease, stroke 1000ms ease;
        }

        .submit-form-btn:hover::before {
          width: 100%;
        }

        .submit-form-btn:hover {
          color: #000000;
          border-color: #2563eb;
          box-shadow: 0 10px 25px -4px rgba(37, 99, 235, 0.25);
          /* Tetap diam di tempat, tanpa gerak ke atas */
          transform: none;
        }

        .submit-form-btn:hover span {
          color: #000000;
        }

        .submit-form-btn:hover svg {
          stroke: #000000;
        }

        .success-banner {
          text-align: center;
          padding: 40px 20px;
        }

        .success-title {
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Bold', sans-serif);
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .success-sub {
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 14px;
          color: #64748b;
          line-height: 1.5;
          max-width: 380px;
          margin: 0 auto;
        }

        @media (max-width: 900px) {
          .contact-section {
            padding: 100px 0 70px 0;
          }
          .contact-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 36px;
            width: 100%;
            min-width: 0;
          }
          .contact-card-wrapper {
            padding: 32px 24px;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            overflow: hidden;
          }
        }

        @media (max-width: 600px) {
          .contact-section {
            padding: 80px 0 60px 0;
          }
          .contact-card-wrapper {
            padding: 22px 16px;
            border-radius: 20px;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            overflow: hidden;
          }
          .contact-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 26px;
            width: 100%;
            min-width: 0;
          }
          .contact-heading {
            font-size: clamp(1.4rem, 5.5vw, 1.85rem);
            margin-bottom: 12px;
          }
          .contact-subtext {
            font-size: 13.5px;
            margin-bottom: 22px;
          }
          .form-row-2col {
            grid-template-columns: minmax(0, 1fr);
            gap: 14px;
            width: 100%;
            min-width: 0;
          }
          .channel-item {
            padding: 10px 12px;
            gap: 10px;
            width: 100%;
            max-width: 100%;
            min-width: 0;
            box-sizing: border-box;
          }
          .channel-icon-box {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            flex-shrink: 0;
          }
          .channel-title {
            font-size: 11px;
          }
          .channel-val {
            font-size: 12.5px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .copy-chip-btn {
            padding: 4px 8px;
            font-size: 11px;
            flex-shrink: 0;
          }
          .custom-dropdown-trigger,
          .form-input {
            padding: 11px 13px;
            font-size: 13.5px;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }
          .submit-form-btn {
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            padding: 13px 12px;
            font-size: clamp(12.5px, 3.8vw, 14px);
            gap: 8px;
            border-radius: 12px;
          }
          .submit-form-btn span {
            white-space: nowrap;
          }
        }

        @media (max-width: 380px) {
          .contact-card-wrapper {
            padding: 18px 12px;
            width: 100%;
            box-sizing: border-box;
          }
          .custom-dropdown-trigger,
          .form-input {
            padding: 10px 11px;
            font-size: 12.5px;
          }
          .submit-form-btn {
            font-size: 12px;
            padding: 12px 8px;
            gap: 6px;
          }
        }
      `}</style>
    </section>
  );
}
