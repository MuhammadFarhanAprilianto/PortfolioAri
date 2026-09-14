import React, { useRef, useEffect } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import Briefcase01Icon from '@hugeicons/core-free-icons/Briefcase01Icon';
import Certificate01Icon from '@hugeicons/core-free-icons/Certificate01Icon';
import CheckmarkCircle01Icon from '@hugeicons/core-free-icons/CheckmarkCircle01Icon';
import ViewIcon from '@hugeicons/core-free-icons/ViewIcon';

export default function ExperienceSection() {
  const expScrollRef = useRef(null);
  const certScrollRef = useRef(null);

  useEffect(() => {
    const bindWheel = (el) => {
      if (!el) return () => {};
      const onWheel = (e) => {
        const atTop = el.scrollTop <= 0 && e.deltaY < 0;
        const atBottom = Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight && e.deltaY > 0;

        if (!atTop && !atBottom) {
          e.stopPropagation();
        }
      };
      el.addEventListener('wheel', onWheel, { passive: false });
      return () => el.removeEventListener('wheel', onWheel);
    };

    const cleanupExp = bindWheel(expScrollRef.current);
    const cleanupCert = bindWheel(certScrollRef.current);

    // Deteksi card yang baru masuk ke area scroll container agar transisi dari burem ke jelas
    const checkVisibleCards = (container) => {
      if (!container) return;
      const cRect = container.getBoundingClientRect();
      const items = container.querySelectorAll('.sr:not(.sr-visible)');
      items.forEach((item) => {
        const iRect = item.getBoundingClientRect();
        if (iRect.top < cRect.bottom - 15 && iRect.bottom > cRect.top + 15) {
          item.classList.add('sr-visible');
        }
      });
    };

    const onScrollExp = () => checkVisibleCards(expScrollRef.current);
    const onScrollCert = () => checkVisibleCards(certScrollRef.current);

    const expEl = expScrollRef.current;
    const certEl = certScrollRef.current;

    if (expEl) expEl.addEventListener('scroll', onScrollExp, { passive: true });
    if (certEl) certEl.addEventListener('scroll', onScrollCert, { passive: true });

    const t1 = setTimeout(() => {
      checkVisibleCards(expEl);
      checkVisibleCards(certEl);
    }, 150);

    return () => {
      cleanupExp();
      cleanupCert();
      clearTimeout(t1);
      if (expEl) expEl.removeEventListener('scroll', onScrollExp);
      if (certEl) certEl.removeEventListener('scroll', onScrollCert);
    };
  }, []);

  const experiences = [
    {
      role: 'Operator Produksi (Expand Pipe & Finishing)',
      company: 'PT. Komponen Futaba Nusapersada',
      period: '2026 — Saat Ini',
      desc: 'Bertanggung jawab dalam pengoperasian mesin Expand Pipe untuk pembentukan diameter pipa knalpot presisi tinggi otomotif, proses chatting pipa, buffing dan grinding permukaan material, serta penerapan inspeksi mutu berlandaskan budaya kerja 5S dan kepatuhan APD K3 pabrik.',
      tags: ['Mesin Expand Pipe', 'Chatting Pipe', 'Buffing & Grinding', 'Quality Control', 'Budaya 5S', 'Standar APD K3'],
    },
    {
      role: 'Welder 3G Plat SMAW (Pelatihan & Sertifikasi BNSP)',
      company: 'Pusat Pelatihan Kerja Daerah (PPKD) Jakarta Timur',
      period: '2026',
      desc: 'Menjalani pelatihan kejuruan intensif dan pengujian kompetensi pengelasan posisi 1G, 2G, 3G Plat (Groove Joint) serta 1F, 2F, 3F (Fillet Joint) metode SMAW standar American Welding Society (AWS). Melakukan pemotongan termal oxy-fuel presisi serta visual inspection cacat las sesuai Welding Procedure Specification (WPS).',
      tags: ['Sertifikasi BNSP 3G', 'Standar AWS', 'Plate 3G SMAW', 'Groove Joint', 'Oxy-Fuel Cutting', 'Inspeksi Visual WPS'],
    },
    {
      role: 'Asisten Manager Assembly (Magang Teknik Mesin)',
      company: 'PT. Komatsu Indonesia',
      period: 'Feb 2024 — Jul 2024',
      desc: 'Melakukan analisis waktu siklus kerja (Time Study) dan line balancing perakitan Main Frame dump truck Komatsu HD 785 guna mengeliminasi bottleneck. Memperbarui Design Sheet, menyusun manual instruksi kerja (SOP), serta pengawasan keselamatan kerja K3 manufaktur alat berat.',
      tags: ['Time Study Analysis', 'Line Balancing', 'Design Sheet & SOP', 'Dump Truck HD 785', 'K3 Manufaktur', 'Eliminasi Bottleneck'],
    },
    {
      role: 'Teknisi Mekanik Kendaraan (Praktek Kerja Lapangan)',
      company: 'PT. Indomobil Prima Niaga',
      period: 'Jan 2020 — Apr 2020',
      desc: 'Melaksanakan pemeliharaan berkala (preventive maintenance) armada kendaraan diesel dan bensin. Melakukan perbaikan dan overhaul sistem rem, kopling, transmisi, dan suspensi, serta penanganan troubleshooting kelistrikan bodi kendaraan sesuai standar checklist resmi pabrikan.',
      tags: ['Preventive Maintenance', 'Overhaul Mesin', 'Sistem Rem & Kopling', 'Mesin Diesel', 'Diagnosis Mekanikal', 'Standar Bengkel'],
    },
  ];

  const certifications = [
    {
      id: 1,
      title: 'Plate Welder : 3G SMAW',
      issuer: 'Badan Nasional Sertifikasi Profesi (BNSP) - Jakarta',
      year: '2026',
      badge: 'Sertifikasi Nasional BNSP',
      image: '/SERTIFIKAT_3G_SMAW.webp',
      file: '/SERTIFIKAT Plate Welder  3G SMAW.pdf',
      desc: 'Sertifikasi kompetensi resmi pengelasan sambungan kampuh posisi 1G, 2G, 3G Plat (Groove Joint) serta sambungan fillet 1F, 2F, 3F metode SMAW standar American Welding Society (AWS).',
      tags: ['Sertifikasi BNSP', 'Welder 3G Plat', 'Standar AWS', 'SMAW Groove Joint'],
    },
    {
      id: 2,
      title: 'Ahli K3 (AK3)',
      issuer: 'Mita Training (PT. Mita Indonesia Berdaya)',
      year: '2025',
      badge: 'Sertifikasi K3',
      image: '/K3_SERTIFIKASI.webp',
      file: '/Sertifikat K3 Umum Ari Supriyanto.pdf',
      desc: 'Menguasai konsep fundamental K3/OHS demi mendukung kesejahteraan pekerja.Mampu menganalisis risiko proaktif melalui identifikasi bahaya metode HIRARC.Menerapkan budaya 5S untuk menciptakan lingkungan kerja aman dan rapi.',
      tags: ['Ahli K3 ', 'Mita Training', 'Audit SMK3', 'Budaya 5S Industri'],
    },
    {
      id: 3,
      title: 'Rancang Bangun Dan Validasi Alat Uji Kekerasan Brinell Sederhana Menggunakan Dongkrak Botol',
      issuer: 'Publikasi Riset Jurnal Ilmiah - Jakarta',
      year: '2025',
      badge: 'Jurnalis / Publikasi Riset',
      image: '/BRINELL.webp',
      file: '/24393-Article Text-88834-2-10-20260115 (2).pdf',
      desc: 'Penulisan karya ilmiah dan pengujian mekanikal alat uji kekerasan Brinell berbasis sistem hidrolik dongkrak botol presisi untuk material logam teknik.',
      tags: ['Jurnalis', 'Uji Kekerasan Brinell', 'Validasi Tekanan', 'Karya Ilmiah'],
    },
    {
      id: 4,
      title: 'Juara 2 Karya Terbaik Teknik Mesin (Technofest)',
      issuer: 'Universitas Dian Nusantara - Jakarta',
      year: '2024',
      badge: 'Penghargaan Prestasi',
      image: '/TECHNOFEST.webp',
      file: '/Juara 2 Karya Terbaik Teknik Mesin (Technofest).pdf',
      desc: 'Penghargaan kompetisi karya teknik terbaik rancang bangun venturi flow meter pada pengukuran laju aliran fluida industri pipa farmasi serta minyak & gas.',
      tags: ['Juara 2 Technofest', 'Venturi Flow Meter', 'Mekanika Fluida', 'UNDIRA'],
    },
    {
      id: 5,
      title: 'Divisi Keorganisasian HMTM',
      issuer: 'Universitas Dian Nusantara - Jakarta',
      year: '2024',
      badge: 'Organisasi Mahasiswa',
      image: '/HMTM.webp',
      file: '/Sertifikat HIMA ARI SUPRIYANTO (2).pdf',
      desc: 'Pengurus aktif Himpunan Mahasiswa Teknik Mesin dalam koordinasi program kerja, kepemimpinan organisasi, dan penyelenggaraan kegiatan teknik.',
      tags: ['Divisi Keorganisasian', 'Himpunan Teknik Mesin', 'Leadership', 'Manajemen Tim'],
    },
    {
      id: 6,
      title: 'Partisipasi Eksibisi Industri & Manufaktur',
      issuer: 'Pamerindo Indonesia - Jakarta',
      year: '2023',
      badge: 'Eksibisi Nasional',
      image: '/PAMERINDO.webp',
      file: '/PAMERINDO.webp',
      desc: 'Partisipasi aktif dalam pameran internasional permesinan, manufaktur logam, peralatan otomasi industri, dan teknologi rekayasa teknik terkini.',
      tags: ['Pamerindo Indonesia', 'Eksibisi Manufaktur', 'Teknologi Permesinan', 'Partisipasi'],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-head sr">
          <h2 className="section-title">Work Experience & Track Record</h2>
          <p className="section-desc">
            Rekam jejak profesional, pelatihan kejuruan pengelasan bersertifikasi BNSP, sertifikasi keahlian K3 Umum, serta penghargaan kompetisi rancang bangun teknik.
          </p>
        </div>

        {/* Highlight Stats Row */}
        <div className="stats-metric-strip glass-card sr sr-d2">
          <div className="metric-col">
            <span className="metric-num">3.52</span>
            <span className="metric-txt">IPK S1 Teknik Mesin (UNDIRA)</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-col">
            <span className="metric-num">3G Plat</span>
            <span className="metric-txt">Sertifikasi Welder BNSP & AWS</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-col">
            <span className="metric-num">100%</span>
            <span className="metric-txt">Penerapan SOP Mutu & K3 Industri</span>
          </div>
        </div>

        {/* Dual Layout: Pengalaman Kerja (Kiri) & Sertifikasi (Kanan) */}
        <div className="experience-dual-grid">
          
          {/* Kolom 1: Pengalaman Kerja */}
          <div className="exp-column">
            <div className="col-header sr">
              <div className="col-header-info">
                <div className="col-icon-wrap">
                  <HugeiconsIcon icon={Briefcase01Icon} size={20} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="col-title">Pengalaman Kerja</h3>
                  <p className="col-sub">4 Rekam Jejak Industri & Kejuruan</p>
                </div>
              </div>
              <span className="col-count-pill">Timeline</span>
            </div>

            <div ref={expScrollRef} className="timeline-scroll-wrapper" data-lenis-prevent="true">
              <div className="timeline-container">
                {experiences.map((exp, idx) => (
                  <div key={idx} className={`timeline-item sr sr-d${Math.min(idx + 1, 6)}`}>
                    <div className="timeline-dot-wrapper">
                      <div className="timeline-dot"></div>
                      {idx !== experiences.length - 1 && <div className="timeline-line"></div>}
                    </div>

                    <div className="timeline-content glass-card">
                      <div className="content-top-row">
                        <div>
                          <h4 className="timeline-role">{exp.role}</h4>
                          <div className="timeline-company">{exp.company}</div>
                        </div>
                        <span className="timeline-period">{exp.period}</span>
                      </div>

                      <p className="timeline-desc">{exp.desc}</p>

                      <div className="timeline-tags">
                        {exp.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="exp-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Kolom 2: Sertifikasi & Penghargaan */}
          <div className="exp-column">
            <div className="col-header sr">
              <div className="col-header-info">
                <div className="col-icon-wrap cert-icon-wrap">
                  <HugeiconsIcon icon={Certificate01Icon} size={20} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="col-title">Sertifikasi & Penghargaan</h3>
                  <p className="col-sub">6 Dokumen Resmi & Prestasi</p>
                </div>
              </div>
              <span className="col-count-pill">Terverifikasi</span>
            </div>

            <div ref={certScrollRef} className="cert-scroll-wrapper" data-lenis-prevent="true">
              <div className="cert-cards-list">
                {certifications.map((cert, idx) => (
                  <div key={cert.id} className={`cert-item sr sr-d${Math.min(idx + 1, 6)}`}>
                    <div className="cert-card glass-card">
                      <div className="cert-card-layout">
                        
                        {/* Kolom Teks (Rata Kiri) */}
                        <div className="cert-card-content">
                          <h4 className="cert-title">{cert.title}</h4>

                          <div className="cert-issuer-row">
                            <HugeiconsIcon icon={CheckmarkCircle01Icon} size={14} strokeWidth={2} className="cert-check-icon" />
                            <span className="cert-issuer">{cert.issuer}</span>
                          </div>

                          <p className="cert-desc">{cert.desc}</p>
                        </div>

                        {/* Kolom Media Gambar di Sampingnya dengan Badge di Atasnya */}
                        <div className="cert-media-col">
                          <div className="cert-card-top">
                            <span className="cert-badge">{cert.badge}</span>
                            <span className="cert-year">{cert.year}</span>
                          </div>

                          <a
                            href={cert.file || cert.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-media-wrap"
                            title={`Klik untuk membuka dokumen: ${cert.title}`}
                          >
                            <img
                              src={cert.image}
                              alt={cert.title}
                              className="cert-img"
                              loading="lazy"
                            />
                            <div className="cert-media-hover-overlay">
                              <div className="cert-media-hover-badge">
                                <HugeiconsIcon icon={ViewIcon} size={14} strokeWidth={2} />
                                <span>Buka Dokumen</span>
                              </div>
                            </div>
                          </a>
                        </div>

                      </div>

                      {/* Baris Tags di Bagian Bawah (Satu Baris Penuh) */}
                      <div className="cert-tags">
                        {cert.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="cert-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .experience-section {
          background-color: #2563eb;
          padding: 100px 0 110px;
          position: relative;
          z-index: 10;
        }

        /* Gradasi bayangan biru: di bawah nyatu 100% solid (#2563eb) tanpa garis, lalu memudar halus blur ke atas */
        .experience-section::before {
          content: '';
          position: absolute;
          bottom: calc(100% - 2px);
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(
            to top,
            #2563eb 0%,
            rgba(37, 99, 235, 0.85) 20%,
            rgba(37, 99, 235, 0.55) 45%,
            rgba(37, 99, 235, 0.25) 70%,
            rgba(37, 99, 235, 0.08) 85%,
            rgba(37, 99, 235, 0) 100%
          );
          pointer-events: none;
          z-index: 5;
        }

        /* Gradasi bayangan biru ke bawah: di atas nyatu 100% solid (#2563eb) tanpa garis, lalu memudar halus blur ke bawah menuju Contact */
        .experience-section::after {
          content: '';
          position: absolute;
          top: calc(100% - 2px);
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(
            to bottom,
            #2563eb 0%,
            rgba(37, 99, 235, 0.85) 20%,
            rgba(37, 99, 235, 0.55) 45%,
            rgba(37, 99, 235, 0.25) 70%,
            rgba(37, 99, 235, 0.08) 85%,
            rgba(37, 99, 235, 0) 100%
          );
          pointer-events: none;
          z-index: 5;
        }

        .experience-section .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .experience-section .section-head {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 46px auto;
        }

        .experience-section .section-title {
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Bold', sans-serif);
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #ffffff;
          margin-bottom: 14px;
        }

        .experience-section .section-desc {
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 16px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }

        .stats-metric-strip {
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 26px 20px;
          margin-bottom: 50px;
          border-radius: 20px;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 15px 35px -5px rgba(15, 23, 42, 0.22);
          flex-wrap: wrap;
          gap: 20px;
          transform: none !important;
        }

        .stats-metric-strip:hover {
          transform: none !important;
        }

        .metric-col {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .metric-num {
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Bold', sans-serif);
          font-size: 36px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #0f172a 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .metric-txt {
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 13.5px;
          color: #64748b;
          font-weight: 500;
          margin-top: 4px;
        }

        .metric-divider {
          width: 1px;
          height: 48px;
          background: #e2e8f0;
        }

        /* -------------------------------------------
           DUAL 2-COLUMN LAYOUT
           ------------------------------------------- */
        .experience-dual-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }

        .exp-column {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .col-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
          padding: 0 4px;
        }

        .col-header-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .col-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
        }

        .col-icon-wrap.cert-icon-wrap {
          background: rgba(255, 255, 255, 0.2);
        }

        .col-title {
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Bold', sans-serif);
          font-size: 19px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .col-sub {
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 12px;
          color: rgba(255, 255, 255, 0.85);
          margin: 2px 0 0 0;
        }

        .col-count-pill {
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Medium', sans-serif);
          font-size: 11.5px;
          font-weight: 600;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.35);
          padding: 4px 12px;
          border-radius: 9999px;
          backdrop-filter: blur(8px);
        }

        /* Scroll wrappers for both columns */
        .timeline-scroll-wrapper,
        .cert-scroll-wrapper {
          width: 100%;
          max-height: 520px;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 6px 12px 10px 4px;
          scroll-behavior: smooth;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.45) rgba(255, 255, 255, 0.12);
        }

        .timeline-scroll-wrapper::-webkit-scrollbar,
        .cert-scroll-wrapper::-webkit-scrollbar {
          width: 6px;
        }

        .timeline-scroll-wrapper::-webkit-scrollbar-track,
        .cert-scroll-wrapper::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.12);
          border-radius: 9999px;
          margin: 6px 0;
        }

        .timeline-scroll-wrapper::-webkit-scrollbar-thumb,
        .cert-scroll-wrapper::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.45);
          border-radius: 9999px;
          transition: background 0.2s ease;
        }

        .timeline-scroll-wrapper::-webkit-scrollbar-thumb:hover,
        .cert-scroll-wrapper::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.75);
        }

        /* Timeline Items (Kolom 1) */
        .timeline-container {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .timeline-item {
          display: flex;
          gap: 16px;
          position: relative;
          padding-bottom: 18px;
        }

        .timeline-item:last-child {
          padding-bottom: 4px;
        }

        .timeline-dot-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 20px;
          padding-top: 6px;
        }

        .timeline-dot {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid #2563eb;
          box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.4);
          z-index: 2;
        }

        .timeline-line {
          width: 2px;
          flex: 1;
          background: rgba(255, 255, 255, 0.35);
          margin-top: 6px;
        }

        .timeline-content {
          flex: 1;
          padding: 18px 22px;
          border-radius: 18px;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 10px 25px -4px rgba(15, 23, 42, 0.18);
          transform: none !important;
          transition: box-shadow 0.3s ease;
        }

        .timeline-content:hover {
          transform: none !important;
          box-shadow: 0 16px 36px -4px rgba(15, 23, 42, 0.26);
        }

        .content-top-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
          gap: 12px;
          flex-wrap: wrap;
        }

        .timeline-role {
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Bold', sans-serif);
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 3px 0;
          line-height: 1.35;
        }

        .timeline-company {
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Medium', sans-serif);
          font-size: 13.5px;
          color: #2563eb;
          font-weight: 600;
        }

        .timeline-period {
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 11.5px;
          font-weight: 600;
          color: #1d4ed8;
          background: #eff6ff;
          border: 1px solid #dbeafe;
          padding: 2px 10px;
          border-radius: 9999px;
          white-space: nowrap;
        }

        .timeline-desc {
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 13px;
          color: #475569;
          line-height: 1.55;
          margin-bottom: 12px;
          text-align: justify;
          text-justify: inter-word;
        }

        .timeline-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .exp-tag {
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 11px;
          font-weight: 500;
          color: #334155;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 3px 8px;
          border-radius: 6px;
        }

        /* Cert Cards (Kolom 2) */
        .cert-cards-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cert-item {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .cert-card {
          width: 100%;
          padding: 18px 20px;
          border-radius: 18px;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 10px 25px -4px rgba(15, 23, 42, 0.18);
          transform: none !important;
          transition: box-shadow 0.3s ease;
          overflow: hidden;
        }

        .cert-card:hover {
          transform: none !important;
          box-shadow: 0 16px 36px -4px rgba(15, 23, 42, 0.26);
        }

        .cert-card-layout {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
        }

        .cert-card-content {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .cert-title {
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Bold', sans-serif);
          font-size: 15.5px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 5px 0;
          line-height: 1.35;
          text-align: left;
        }

        .cert-issuer-row {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 8px;
          text-align: left;
        }

        .cert-check-icon {
          color: #2563eb;
          flex-shrink: 0;
        }

        .cert-issuer {
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Medium', sans-serif);
          font-size: 12.5px;
          font-weight: 600;
          color: #2563eb;
          text-align: left;
        }

        .cert-desc {
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 12.5px;
          color: #475569;
          line-height: 1.55;
          margin-bottom: 0;
          text-align: justify;
          text-justify: inter-word;
        }

        /* Baris Tags Satu Baris Penuh */
        .cert-tags {
          display: flex;
          align-items: center;
          flex-wrap: nowrap !important;
          white-space: nowrap !important;
          gap: 6px;
          margin-top: 14px;
          padding-top: 10px;
          border-top: 1px solid #f1f5f9;
          text-align: left;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .cert-tags::-webkit-scrollbar {
          display: none;
        }

        .cert-tag {
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 11px;
          font-weight: 500;
          color: #334155;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 3px 9px;
          border-radius: 6px;
          white-space: nowrap !important;
          flex-shrink: 0;
        }

        /* Kolom Media Gambar di Sampingnya dengan Badge di Atasnya */
        .cert-media-col {
          display: flex;
          flex-direction: column;
          width: 215px;
          min-width: 215px;
          gap: 10px;
          flex-shrink: 0;
        }

        .cert-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          width: 100%;
        }

        .cert-badge {
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Bold', sans-serif);
          font-size: 10px;
          font-weight: 700;
          color: #2563eb;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          background: #eff6ff;
          padding: 3px 8px;
          border-radius: 6px;
          white-space: nowrap;
        }

        .cert-year {
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 11px;
          font-weight: 600;
          color: #1d4ed8;
          background: #eff6ff;
          border: 1px solid #dbeafe;
          padding: 2px 8px;
          border-radius: 9999px;
          white-space: nowrap;
        }

        .cert-media-wrap {
          width: 100%;
          aspect-ratio: 16 / 10;
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          background: #f1f5f9;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.1);
          border: 1px solid rgba(226, 232, 240, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .cert-media-wrap:hover {
          border-color: #2563eb;
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.25);
        }

        .cert-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          /* Tidak ada zoom zoom pada hover sesuai permintaan user */
          transform: none !important;
          transition: none;
        }

        /* Overlay Buka Dokumen saat Hover */
        .cert-media-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.45);
          backdrop-filter: blur(2px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.25s ease;
          pointer-events: none;
        }

        .cert-media-wrap:hover .cert-media-hover-overlay {
          opacity: 1;
        }

        .cert-media-hover-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          color: #1d4ed8;
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Bold', sans-serif);
          font-size: 11px;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 9999px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
        }

        /* -------------------------------------------
           RESPONSIVE
           ------------------------------------------- */
        @media (max-width: 980px) {
          .experience-section {
            padding: 80px 0 90px;
          }
          .experience-dual-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .timeline-scroll-wrapper,
          .cert-scroll-wrapper {
            max-height: 480px;
          }
        }

        @media (max-width: 640px) {
          .experience-section {
            padding: 70px 0 80px;
          }
          .section-head {
            margin-bottom: 32px;
          }
          .stats-metric-strip {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px 10px;
            padding: 20px 14px;
            border-radius: 16px;
            margin-bottom: 36px;
          }
          .metric-divider {
            display: none;
          }
          .metric-num {
            font-size: 28px;
          }
          .metric-txt {
            font-size: 12px;
          }
          .timeline-item {
            gap: 12px;
          }
          .timeline-content,
          .cert-card {
            padding: 16px;
            border-radius: 18px;
          }
          .timeline-role,
          .cert-title {
            font-size: 15.5px;
          }
        }

        @media (max-width: 580px) {
          .cert-card-layout {
            flex-direction: column-reverse;
            gap: 14px;
          }
          .cert-media-col {
            width: 100%;
            min-width: 100%;
          }
          .cert-media-wrap {
            width: 100%;
            height: auto;
            aspect-ratio: 16 / 10;
          }
          .timeline-scroll-wrapper,
          .cert-scroll-wrapper {
            max-height: 440px;
            padding-right: 6px;
          }
        }
      `}</style>
    </section>
  );
}
