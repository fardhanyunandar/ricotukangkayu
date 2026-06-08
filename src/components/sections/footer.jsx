import './Footer.css'; // Pastikan penulisan huruf kapital sesuai dengan nama file fisik Anda

export default function Footer() {
  const year = new Date().getFullYear();
  
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTo = (href) => {
    const target = document.querySelector(href);
    if (target) {
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      // Dikurangi 80px agar pas di bawah batas sticky navbar
      const offsetPosition = elementPosition - 80;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container footer-inner-layout">
        
        {/* Kolom Kiri: Brand & Deskripsi */}
        <div className="footer-brand-panel">
          <div className="footer-logo-wrapper">
            <span className="footer-logo-main">GRINT</span>
            <span className="footer-logo-sub">Furniture Build</span>
          </div>
          <p className="footer-tagline-en">
            Handcrafted wood furniture — made with care, built to last.
          </p>
          <p className="footer-tagline-id">
            Furniture kayu custom, dibuat dengan hati.
          </p>
        </div>

        {/* Kolom Kanan: Navigasi & Links */}
        <div className="footer-links-grid">
          
          {/* Kelompok Navigasi */}
          <div className="footer-column">
            <h4 className="footer-column-title">Navigasi</h4>
            <div className="footer-links-list">
              {[
                ['#about', 'Tentang Kami'],
                ['#services', 'Layanan'],
                ['#portfolio', 'Portofolio'],
                ['#testimoni', 'Testimoni'],
                ['#faq', 'FAQ'],
                ['#contact', 'Kontak'],
              ].map(([href, label]) => (
                <button 
                  key={href} 
                  className="footer-action-link" 
                  onClick={() => handleScrollTo(href)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Kelompok Social Media */}
          <div className="footer-column">
            <h4 className="footer-column-title">Social Media</h4>
            <div className="footer-links-list">
              <a href="https://www.instagram.com/ricotukangkayuindonesia_/" target="_blank" rel="noopener noreferrer" className="footer-action-link">
                Instagram
              </a>
              <a href="https://www.tiktok.com/@ricotukangkayuindonesia" target="_blank" rel="noopener noreferrer" className="footer-action-link">
                TikTok
              </a>
              <a href="https://grintfurniturebuild.taplink.id" target="_blank" rel="noopener noreferrer" className="footer-action-link">
                Taplink
              </a>
            </div>
          </div>

          {/* Kelompok Layanan */}
          <div className="footer-column">
            <h4 className="footer-column-title">Layanan</h4>
            <div className="footer-links-list">
              {[
                'Kitchen Set', 
                'Bedroom Furniture', 
                'Living Room', 
                'Commercial', 
                'Custom Finishing', 
                'Restorasi'
              ].map(s => (
                <span key={s} className="footer-plain-text">{s}</span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bagian Bawah Footer (Copyright) */}
      <div className="footer-bottom-bar">
        <div className="footer-container footer-bottom-inner">
          <span className="footer-copyright-text">
            © {year} Grint Furniture Build · @ricotukangkayuindonesia_
          </span>
          <button className="footer-back-to-top-btn" onClick={scrollTop} aria-label="Kembali ke atas">
            <svg 
              className="back-to-top-icon"
              width="14" height="14" 
              viewBox="0 0 24 24" 
              fill="none" stroke="currentColor" 
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
            <span>Kembali ke atas</span>
          </button>
        </div>
      </div>
    </footer>
  );
}