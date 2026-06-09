import { useState, useEffect, useRef } from 'react';
import { Leaf, Hammer, Ruler, Check } from 'lucide-react';
import './about.css';

const companyValues = [
  {
    icon: Leaf,
    title: 'Material Alami',
    sub: 'Natural Wood Materials'
  },
  {
    icon: Hammer,
    title: 'Handcrafted',
    sub: 'Dibuat dengan tangan'
  },
  {
    icon: Ruler,
    title: 'Custom Size',
    sub: 'Sesuai ukuran & desain Anda'
  },
  {
    icon: Check,
    title: 'Bergaransi',
    sub: 'Quality guaranteed'
  },
];

// Komponen Ikon Instagram Custom SVG (Anti-Error Import)
function InstagramIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: '16px', height: '16px' }}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

// Komponen Ikon TikTok Custom SVG
function TikTokIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      style={{ width: '16px', height: '16px' }}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.07a8.16 8.16 0 0 0 4.77 1.52V7.15a4.85 4.85 0 0 1-1-.46z" />
    </svg>
  );
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      className={`about-section ${isVisible ? 'is-visible' : ''}`} 
      ref={sectionRef}
    >
      <div className="about-container about-grid">

        {/* Kolom Kiri: Informasi Utama */}
        <div className="about-main-content">
          <header className="about-header">
            <span className="about-badge">Tentang Kami / About Us</span>
            <h2 className="about-title">Dari Workshop<br />ke Rumah Anda</h2>
            <p className="about-subtitle">From our workshop to your home</p>
            <div className="about-decorator-line" />
          </header>

          <div className="about-story">
            <p className="story-paragraph">
              Grint Furniture Build didirikan oleh <strong>Rico</strong>, seorang pengrajin kayu berpengalaman yang mencintai setiap detail dalam proses pembuatan furniture. Kami percaya bahwa furniture yang baik bukan hanya soal fungsi — tapi juga cerita dan karakter.
            </p>
            <p className="story-paragraph story-paragraph--en" lang="en">
              Founded by Rico, a passionate woodworker who believes great furniture tells a story. Every piece is crafted with care, precision, and a deep respect for natural materials.
            </p>
            <p className="story-paragraph">
              Dengan menggunakan bahan kayu solid pilihan dan teknik tradisional yang dipadukan dengan desain modern, kami menghadirkan furniture yang tahan lama dan estetik untuk hunian maupun komersial.
            </p>
          </div>

          {/* Grid Nilai Perusahaan */}
          <div className="values-grid">
            {companyValues.map((item, index) => {
              const ValueIcon = item.icon;
              return (
                <div 
                  className="value-card" 
                  key={index}
                  style={{ '--delay': `${index * 150}ms` }}
                >
                  <div className="value-icon-wrapper">
                    <ValueIcon className="value-icon" size={20} strokeWidth={2.5} />
                  </div>
                  <div className="value-text-group">
                    <h3 className="value-title">{item.title}</h3>
                    <p className="value-sub">{item.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Kolom Kanan: Profil Founder & Sosial Media */}
        <aside className="about-side-content">
          {/* Card Founder */}
          <div className="profile-card">
            <div className="profile-card-inner">
              <div className="profile-meta-row">
                <div className="profile-avatar-wrapper">
                  <div className="profile-avatar">R</div>
                </div>
                <div className="profile-info">
                  <h3 className="profile-name">Rico</h3>
                  <p className="profile-role">Founder & Master Craftsman</p>
                </div>
              </div>
              
              <blockquote className="profile-blockquote">
                <p className="quote-id">
                  "Saya mulai dari rasa cinta terhadap kayu dan keinginan untuk membuat sesuatu yang bertahan lama — bukan hanya furniture, tapi karya yang bisa diwariskan."
                </p>
                <p className="quote-en" lang="en">
                  "I started from a love of wood and a desire to create things that last — not just furniture, but pieces worth passing down."
                </p>
              </blockquote>
            </div>
          </div>

          {/* Card Sosial Media */}
          <div className="socials-card">
            <h4 className="socials-title">Temukan kami di / Find us on</h4>
            <div className="socials-links">
              <a
                href="https://www.instagram.com/ricotukangkayuindonesia_/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button btn-ig"
              >
                <InstagramIcon />
                <span>@ricotukangkayuindonesia_</span>
              </a>
              <a
                href="https://www.tiktok.com/@ricotukangkayuindonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button btn-tt"
              >
                <TikTokIcon />
                <span>@ricotukangkayuindonesia</span>
              </a>
            </div>
          </div>
        </aside>

      </div>
    </section>
  );
}
