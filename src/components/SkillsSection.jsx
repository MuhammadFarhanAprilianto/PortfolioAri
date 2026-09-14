import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import Layers01Icon from '@hugeicons/core-free-icons/Layers01Icon';
import FireIcon from '@hugeicons/core-free-icons/FireIcon';
import Wrench01Icon from '@hugeicons/core-free-icons/Wrench01Icon';
import ShieldCheckIcon from '@hugeicons/core-free-icons/ShieldCheckIcon';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Rancang Bangun & CAD 2D/3D',
      icon: <HugeiconsIcon icon={Layers01Icon} size={24} strokeWidth={1.8} className="cat-icon text-blue-600" />,
      desc: 'Perancangan mekanikal parametrik 3D, perakitan model assembly, pembuatan gambar kerja 2D orthogonal, serta toleransi geometris presisi.',
      skills: ['Autodesk Inventor', 'AutoCAD 2D / 3D', '3D Assembly Modeling', 'Gambar Kerja Orthogonal'],
      highlightColor: 'rgba(37, 99, 235, 0.1)',
      accentColor: '#2563eb',
    },
    {
      title: 'Pengelasan & Fabrikasi (SMAW 3G)',
      icon: <HugeiconsIcon icon={FireIcon} size={24} strokeWidth={1.8} className="cat-icon text-orange-500" />,
      desc: 'Pengelasan sambungan kampuh groove joint posisi 1G, 2G, 3G Plat & fillet 1F-3F standar AWS serta pemotongan termal presisi.',
      skills: ['Sertifikasi BNSP 3G Plat', 'Standar AWS', 'Plate 3G SMAW', 'Inspeksi Visual WPS'],
      highlightColor: 'rgba(249, 115, 22, 0.1)',
      accentColor: '#f97316',
    },
    {
      title: 'Manufaktur & Process Improvement',
      icon: <HugeiconsIcon icon={Wrench01Icon} size={24} strokeWidth={1.8} className="cat-icon text-amber-600" />,
      desc: 'Analisis waktu siklus kerja (Time Study), eliminasi bottleneck assembly alat berat, standarisasi Design Sheet, dan pembentukan pipa otomotif.',
      skills: ['Time Study Analysis', 'Line Balancing', 'Design Sheet & SOP', 'Mesin Expand Pipe'],
      highlightColor: 'rgba(217, 119, 6, 0.1)',
      accentColor: '#d97706',
    },
    {
      title: 'Dasar K3 & Pemeliharaan Mekanikal',
      icon: <HugeiconsIcon icon={ShieldCheckIcon} size={24} strokeWidth={1.8} className="cat-icon text-emerald-600" />,
      desc: 'Melalui pendalaman materi Keselamatan dan Kesehatan Kerja (K3), saya telah mempelajari konsep fundamental Occupational Health and Safety (OHS) dalam mempromosikan kesejahteraan pekerja, mengasah kemampuan analisis proaktif melalui identifikasi hazards dan penilaian risk menggunakan metode HIRARC, serta memahami implementasi praktis budaya 5S untuk menciptakan lingkungan kerja yang ringkas, rapi, dan bebas dari risiko kecelakaan.',
      skills: ['Dasar-Dasar K3 / OHS', 'Budaya Kerja 5S / 5R', 'Preventive Maintenance', 'Troubleshooting Mekanikal'],
      highlightColor: 'rgba(5, 150, 105, 0.1)',
      accentColor: '#059669',
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        <div className="section-head sr">
          <h2 className="section-title">Core Competencies & Expertise</h2>
          <p className="section-desc">
            Kombinasi keilmuan S1 Teknik Mesin, keahlian fabrikasi las SMAW 3G Plat standar AWS bersertifikasi BNSP, pemodelan 3D CAD parametrik, serta analisis manufaktur dan K3 industri.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div key={i} className={`skill-cat-card glass-card sr sr-d${Math.min(i + 1, 6)}`}>
              <div className="cat-card-header">
                <div className="cat-title-row">
                  <div className="cat-icon-box" style={{ background: cat.highlightColor, color: cat.accentColor }}>
                    {cat.icon}
                  </div>
                  <h3 className="cat-card-title">{cat.title}</h3>
                </div>
                <p className="cat-card-desc">{cat.desc}</p>
              </div>

              <div className="chips-list">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .skills-section {
          padding: 80px 0 180px;
          position: relative;
          z-index: 20;
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
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

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          max-width: 1100px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .skills-section {
            padding: 60px 0 130px;
          }
          .section-head {
            margin-bottom: 36px;
          }
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        .skill-cat-card {
          padding: 28px 24px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(226, 232, 240, 0.85);
          box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transform: none !important;
        }

        .skill-cat-card:hover {
          transform: none !important;
          border-color: #cbd5e1;
          box-shadow: 0 8px 22px -4px rgba(15, 23, 42, 0.08);
        }

        .cat-title-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 14px;
        }

        .cat-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-bottom: 0;
        }

        .cat-card-title {
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Bold', sans-serif);
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.3;
          margin-bottom: 0;
        }

        .cat-card-desc {
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.55;
          margin-bottom: 24px;
        }

        .chips-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .skill-chip {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-family: var(--font-gilroy, 'Gilroy', 'Gilroy-Medium', 'Plus Jakarta Sans', sans-serif);
          font-size: 13px;
          font-weight: 600;
          color: #334155;
          background: #f8fafc;
          border: 1px solid rgba(226, 232, 240, 0.85);
          padding: 9px 12px;
          border-radius: 10px;
          transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          line-height: 1.35;
          transform: none !important;
        }

        .skill-chip:hover {
          background: #ffffff;
          border-color: #cbd5e1;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
          transform: none !important;
        }

        @media (max-width: 480px) {
          .skill-cat-card {
            padding: 20px 16px;
            border-radius: 18px;
          }
          .cat-title-row {
            gap: 12px;
            margin-bottom: 10px;
          }
          .cat-card-title {
            font-size: 16px;
          }
          .cat-icon-box {
            width: 42px;
            height: 42px;
            border-radius: 12px;
          }
          .cat-card-desc {
            font-size: 13px;
            margin-bottom: 18px;
          }
          .chips-list {
            gap: 8px;
          }
          .skill-chip {
            font-size: 11.5px;
            padding: 8px 6px;
          }
        }

        @media (max-width: 350px) {
          .chips-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
