import { useState, useEffect } from 'react';
import './navbar.css';

const links = [
  { label: 'Tentang', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Portofolio', href: '#portfolio' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Efek untuk mengunci scroll body ketika menu mobile sedang terbuka
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      // Memberikan kompensasi offset tinggi navbar (sekitar 80px) agar judul section tidak tertutup
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 80;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className={`navbar-section ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-menu-active' : ''}`}>
        <div className="navbar-container">

          {/* Brand Logo */}
          <div className="navbar-brand-wrapper" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              className="navbar-brand-logo"
              src="/logo.png"
              alt="GRINT logo"
            />
            <span className="brand-text">
              <span className="brand-main">GRINT</span>
              <span className="brand-sub">Furniture Build</span>
            </span>

          </div>

          {/* Navigation Center Links */}
          <ul className={`navbar-menu-links ${menuOpen ? 'is-open' : ''}`}>
            {links.map(l => (
              <li className="navbar-item" key={l.href}>
                <button className="navbar-link-btn" onClick={() => scrollTo(l.href)}>
                  {l.label}
                </button>
              </li>
            ))}
            {/* Tombol duplikasi khusus di dalam menu mobile */}
            <li className="navbar-item mobile-only-cta">
              <button
                className="navbar-desktop-cta"
                onClick={() => window.open('https://wa.me/6281513135325?text=Halo%20Grint%20Furniture%20Build!%20Saya%20ingin%20konsultasi%20mengenai%20furniture%20custom.', '_blank')}
              >
                Pesan Sekarang
              </button>
            </li>
          </ul>

          {/* Action Button Desktop */}
          <div className="navbar-actions">
            <button
              className="navbar-desktop-cta"
              onClick={() => window.open('https://wa.me/6281513135325?text=Halo%20Grint%20Furniture%20Build!%20Saya%20ingin%20konsultasi%20mengenai%20furniture%20custom.', '_blank')}
            >
              Pesan Sekarang
            </button>

            {/* Hamburger Trigger */}
            <button
              className={`navbar-hamburger-trigger ${menuOpen ? 'is-transformed' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>

        </div>
      </nav>

      {/* Backdrop pendukung penutup otomatis ketika menu mobile aktif */}
      {menuOpen && <div className="navbar-menu-backdrop" onClick={() => setMenuOpen(false)} />}
    </>
  );
}
