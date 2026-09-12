import React, { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import Award01Icon from '@hugeicons/core-free-icons/Award01Icon';
import Wrench01Icon from '@hugeicons/core-free-icons/Wrench01Icon';
import FireIcon from '@hugeicons/core-free-icons/FireIcon';
import Settings01Icon from '@hugeicons/core-free-icons/Settings01Icon';
import Layers01Icon from '@hugeicons/core-free-icons/Layers01Icon';
import ShieldCheckIcon from '@hugeicons/core-free-icons/ShieldCheckIcon';
import CheckmarkCircle01Icon from '@hugeicons/core-free-icons/CheckmarkCircle01Icon';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');

  const categories = [
    'All',
    'Rancang Bangun & CAD',
    'Pengelasan & Fabrikasi',
    'Manufaktur & Assembly'
  ];

  const projects = [
    {
      id: 1,
      title: 'Presisi Pembentukan Pipa Knalpot & Expand Pipe Otomotif',
      category: 'Manufaktur & Assembly',
      image: '/PT_KFN.webp',
      imagePosition: 'center 56%',
      description: 'Pengoperasian mesin expand pipe untuk pembentukan diameter pipa presisi sesuai spesifikasi knalpot otomotif, proses chatting komponen, buffing/grinding permukaan, serta penerapan SOP mutu 5S dan APD K3.',
      tech: [
        'Mesin Expand Pipe', 'Chatting Pipe', 'Buffing & Grinding',
        'Diameter Presisi', 'Knalpot Otomotif', 'Quality Control',
        'Standar APD', 'SOP Produksi', 'Budaya Kerja 5S'
      ],
      icon: <HugeiconsIcon icon={Settings01Icon} size={22} strokeWidth={1.8} className="text-emerald-600" />,
      stats: 'Presisi Tinggi • Standar Mutu Industri',
      organization: 'PT. Futaba Nusapersada',
      year: '2026',
      color: 'linear-gradient(135deg, #dcfce7 0%, #f0fdf4 100%)',
    },
    {
      id: 2,
      title: 'Fabrikasi & Pengelasan Sambungan Kampuh 3G SMAW',
      category: 'Pengelasan & Fabrikasi',
      image: '/PPKD.webp',
      imagePosition: 'center 12%',
      description: 'Pengelasan sambungan kampuh (groove joint) posisi 1G, 2G, 3G Plat dan sambungan fillet 1F, 2F, 3F metode SMAW standar American Welding Society (AWS). Pemotongan presisi oxy-fuel, blender potong, dan inspeksi visual cacat las sesuai Welding Procedure Specification (WPS).',
      tech: [
        'Sertifikasi BNSP', 'Standar AWS', 'SMAW 3G Plat',
        'Groove Joint', 'Sambungan Fillet', 'Oxy-Fuel Cutting',
        'Blender Potong', 'Inspeksi WPS', 'Visual Testing'
      ],
      icon: <HugeiconsIcon icon={FireIcon} size={22} strokeWidth={1.8} className="text-orange-500" />,
      stats: 'Sertifikasi BNSP 3G • Standar AWS',
      organization: 'PPKD Jakarta Timur / BNSP',
      year: '2026',
      color: 'linear-gradient(135deg, #ffedd5 0%, #fff7ed 100%)',
    },
    {
      id: 3,
      title: 'Venturi Flow Meter pada Pengukuran Aliran pada Pipa',
      category: 'Rancang Bangun & CAD',
      badgeTitle: 'JUARA 2 TECHNOFEST',
      image: '/VENTURI.webp',
      imagePosition: 'center 25%',
      description: 'Venturi flow meter sendiri bekerja berdasarkan prinsip persamaan Bernoulli. Perangkat ini digunakan untuk mengukur laju aliran fluida pada industri farmasi, minyak dan gas untuk mengukur aliran cairan di dalam pipa.',
      tech: [
        'Venturi Flow Meter', 'Persamaan Bernoulli', 'Mekanika Fluida',
        'Laju Aliran Fluida', 'Pipa Industri', 'Industri Farmasi',
        'Minyak & Gas', 'Validasi Tekanan', 'Karya Technofest'
      ],
      icon: <HugeiconsIcon icon={Award01Icon} size={22} strokeWidth={1.8} className="text-amber-500" />,
      stats: 'Juara 2 Technofest • Aliran Pipa',
      organization: 'Universitas Dian Nusantara',
      year: '2025',
      color: 'linear-gradient(135deg, #fef3c7 0%, #fffbeb 100%)',
    },
    {
      id: 4,
      title: 'Pemodelan 3D CAD Mekanikal & Gambar Kerja 2D Presisi',
      category: 'Rancang Bangun & CAD',
      image: '/PIPA_AUTO_CAD.webp',
      imagePosition: 'center 45%',
      description: 'Perancangan komponen mekanikal parametrik 3D, perancangan assembly mesin, penerapan toleransi geometri (GD&T), serta penyusunan lembar gambar teknik kerja 2D orthogonal standar manufaktur.',
      tech: [
        'Autodesk Inventor', 'AutoCAD 2D/3D', '3D Modeling',
        'Assembly Part', 'GD&T Toleransi', 'Gambar Ortogonal',
        'Lembar Kerja 2D', 'Ukuran Presisi', 'Standar ISO CAD'
      ],
      icon: <HugeiconsIcon icon={Layers01Icon} size={22} strokeWidth={1.8} className="text-cyan-600" />,
      stats: 'CAD Modeling • Gambar Kerja 2D',
      organization: 'Universitas Dian Nusantara',
      year: '2025',
      color: 'linear-gradient(135deg, #cffafe 0%, #ecfeff 100%)',
    },
    {
      id: 5,
      title: 'Time Study & Process Improvement Main Frame HD 785',
      category: 'Manufaktur & Assembly',
      image: '/Komatsu.webp',
      description: 'Analisis waktu siklus kerja (Time Study) dan identifikasi bottleneck perakitan alat berat dump truck Komatsu HD 785. Pembaruan Design Sheet, Manual Book standar perakitan, serta penguatan keselamatan K3 di lini assembly.',
      tech: [
        'Time Study', 'Line Balancing', 'Design Sheet',
        'Standar SOP', 'K3 Manufaktur', 'Frame Assembly',
        'Bottleneck Check', 'Komatsu HD 785', 'Budaya Kerja 5S'
      ],
      icon: <HugeiconsIcon icon={Wrench01Icon} size={22} strokeWidth={1.8} className="text-blue-600" />,
      stats: 'Optimasi Efisiensi • Standar SOP',
      organization: 'PT. Komatsu Indonesia',
      year: '2024',
      color: 'linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)',
    },
    {
      id: 6,
      title: 'Servis & Preventive Maintenance Sistem Mekanikal Kendaraan',
      category: 'Manufaktur & Assembly',
      image: '/MEKANIK.webp',
      imagePosition: 'center center',
      description: 'Perawatan berkala mesin diesel dan bensin, overhaul sistem rem, kopling, suspensi, serta diagnosis kelistrikan bodi dan transmisi kendaraan operasional sesuai checklist standar pabrikan.',
      tech: [
        'Servis Berkala', 'Overhaul Mesin', 'Sistem Rem',
        'Kopling Manual', 'Sistem Suspensi', 'Mesin Diesel',
        'Transmisi Mobil', 'Troubleshooting', 'Standar Bengkel'
      ],
      icon: <HugeiconsIcon icon={ShieldCheckIcon} size={22} strokeWidth={1.8} className="text-indigo-600" />,
      stats: 'Standar Bengkel Resmi • Servis Berkala',
      organization: 'PT. Indomobil Prima Niaga',
      year: '2020',
      color: 'linear-gradient(135deg, #e0e7ff 0%, #eef2ff 100%)',
    },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-head sr">
          <h2 className="section-title">Selected Projects & Builds</h2>
          <p className="section-desc">
            Koleksi karya teknik mesin pilihan yang menggabungkan perancangan CAD presisi, analisis manufaktur alat berat, serta fabrikasi pengelasan bersertifikasi standar industri.
          </p>

          {/* Filter Pills */}
          <div className="filter-pills-row sr sr-d2">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-pill ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                <span>{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className={`project-card glass-card sr sr-d${Math.min(idx + 1, 6)}`}>
              <div className="project-banner" style={{ background: project.color }}>
                {project.image && (
                  <>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-banner-img" 
                      loading="lazy"
                      decoding="async"
                      width="600"
                      height="220"
                      style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
                    />
                    <div className="project-banner-overlay" />
                  </>
                )}
                <div className="banner-icon-badge">
                  {project.icon}
                </div>
                <div className="banner-stats-tag">
                  {project.stats}
                </div>
              </div>

              <div className="project-body">
                <div className="project-cat-row">
                  <span className="project-cat">{project.badgeTitle || project.category}</span>
                </div>
                <h3 className="project-item-title">{project.title}</h3>
                <p className="project-item-desc">{project.description}</p>

                <div className="project-tech-tags">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-footer-links">
                  <div className="project-org-badge">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={14} strokeWidth={2} className="org-check-icon" />
                    <span>{project.organization}</span>
                  </div>
                  <span className="project-year-badge">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .projects-section {
          background-color: #ffffff;
          padding: 90px 0;
          position: relative;
          z-index: 15;
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          box-shadow: 
            /* Bayangan putih ke atas (menuju Hero / About) */
            0 -25px 50px 10px #ffffff, 
            0 -60px 100px 20px rgba(255, 255, 255, 0.85),
            /* Bayangan putih ke bawah (menuju Skills) */
            0 25px 50px 10px #ffffff, 
            0 60px 100px 20px rgba(255, 255, 255, 0.85);
        }

        .section-container,
        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          box-sizing: border-box;
        }

        @media (max-width: 768px) {
          .section-container,
          .projects-container {
            padding: 0 16px;
          }
          .projects-section {
            padding: 70px 0;
            box-shadow: 
              /* Bayangan putih ke atas lebih rendah & tipis agar tidak menutupi foto/kartu Hero */
              0 -8px 18px 2px rgba(255, 255, 255, 0.9),
              /* Bayangan putih ke bawah (menuju Skills) */
              0 25px 50px 10px #ffffff, 
              0 60px 100px 20px rgba(255, 255, 255, 0.85);
          }
          .projects-section::before {
            height: 30px;
            background: linear-gradient(to top, #ffffff 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%);
          }
          .section-head {
            margin-bottom: 36px;
          }
        }

        .projects-section::before {
          content: '';
          position: absolute;
          bottom: 100%;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(to top, #ffffff 0%, rgba(255, 255, 255, 0.85) 40%, rgba(255, 255, 255, 0.3) 75%, rgba(255, 255, 255, 0) 100%);
          pointer-events: none;
          z-index: 2;
        }

        /* Bayangan putih jatuh ke bawah ke arah section Skills */
        .projects-section::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(to bottom, #ffffff 0%, rgba(255, 255, 255, 0.85) 40%, rgba(255, 255, 255, 0.3) 75%, rgba(255, 255, 255, 0) 100%);
          pointer-events: none;
          z-index: 15;
        }

        .section-head {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 50px auto;
        }

        .section-title {
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Bold', sans-serif);
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #0f172a;
          margin-bottom: 14px;
        }

        .section-desc {
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 16px;
          color: #64748b;
          line-height: 1.6;
        }

        .filter-pills-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .filter-pill {
          position: relative;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          color: #475569;
          padding: 9px 20px;
          border-radius: 9999px;
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Medium', 'Plus Jakarta Sans', sans-serif);
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          overflow: hidden;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transform: none !important;
          transition: color 1000ms ease, border-color 1000ms ease, box-shadow 1000ms ease, background 1000ms ease;
        }

        .filter-pill::before {
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

        .filter-pill span {
          position: relative;
          z-index: 2;
          transition: color 1000ms ease;
          display: inline-block;
          white-space: nowrap;
        }

        .filter-pill:hover::before {
          width: 100%;
        }

        .filter-pill:hover {
          border-color: #2563eb;
          box-shadow: 0 4px 15px -2px rgba(37, 99, 235, 0.25);
          transform: none !important;
        }

        .filter-pill:hover span {
          color: #ffffff;
        }

        /* Active Filter Pill (Royal Blue base, sweeps to white on hover with black text) */
        .filter-pill.active {
          background: #2563eb;
          border-color: #2563eb;
          color: #ffffff;
          box-shadow: 0 4px 15px -2px rgba(37, 99, 235, 0.35);
        }

        .filter-pill.active span {
          color: #ffffff;
        }

        .filter-pill.active::before {
          background: #ffffff;
        }

        .filter-pill.active:hover {
          border-color: #2563eb;
          box-shadow: 0 4px 15px -2px rgba(37, 99, 235, 0.25);
          transform: none !important;
        }

        .filter-pill.active:hover span {
          color: #000000;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 310px), 1fr));
          gap: 28px;
        }

        .project-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border-radius: 24px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          transform: none !important;
        }

        .project-card:hover {
          transform: none !important;
          border-color: #94a3b8;
          box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08);
        }

        .project-banner {
          height: 180px;
          padding: 18px 20px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }

        .project-banner-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
          z-index: 1;
        }

        .project-banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.3) 0%, rgba(15, 23, 42, 0.05) 50%, rgba(15, 23, 42, 0.4) 100%);
          z-index: 2;
          pointer-events: none;
        }

        .banner-icon-badge {
          position: relative;
          z-index: 3;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
        }

        .banner-stats-tag {
          position: relative;
          z-index: 3;
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Medium', 'Plus Jakarta Sans', sans-serif);
          font-size: 12px;
          font-weight: 600;
          color: #0f172a;
          background: rgba(255, 255, 255, 0.92);
          padding: 5px 13px;
          border-radius: 9999px;
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .project-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .project-cat-row {
          margin-bottom: 8px;
        }

        .project-cat {
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Bold', sans-serif);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #2563eb;
        }

        .project-item-title {
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Bold', sans-serif);
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
          line-height: 1.35;
        }

        .project-item-desc {
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
          text-align: justify;
          text-justify: inter-word;
        }

        .project-tech-tags {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 7px;
          margin-bottom: 22px;
        }

        .tech-tag {
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 11px;
          font-weight: 500;
          color: #334155;
          background: #f8fafc;
          border: 1px solid rgba(226, 232, 240, 0.85);
          padding: 6px 4px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          line-height: 1.25;
          transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .tech-tag:hover {
          background: #ffffff;
          border-color: #cbd5e1;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .project-banner {
            height: 165px;
            padding: 14px 16px;
          }
          .project-body {
            padding: 18px 16px;
          }
          .project-item-title {
            font-size: 16px;
          }
          .project-tech-tags {
            gap: 5px;
          }
          .tech-tag {
            font-size: 10px;
            padding: 5px 2px;
          }
          .filter-pill {
            padding: 7px 14px;
            font-size: 12.5px;
          }
        }

        @media (max-width: 360px) {
          .project-tech-tags {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .project-footer-links {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid rgba(241, 245, 249, 1);
          margin-top: auto;
        }

        .project-org-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Medium', 'Plus Jakarta Sans', sans-serif);
          font-size: 12.5px;
          font-weight: 600;
          color: #334155;
        }

        .org-check-icon {
          color: #2563eb;
          flex-shrink: 0;
        }

        .project-year-badge {
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 11.5px;
          font-weight: 600;
          color: #64748b;
          background: #f1f5f9;
          padding: 3px 8px;
          border-radius: 6px;
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
}
