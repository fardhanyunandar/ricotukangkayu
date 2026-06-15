import { useState } from 'react';
import './portofolio.css';

const items = [
  {
    id: 1,
    tag: 'Kabinet',
    name: 'Kabinet',
    mat: 'Kabinet',
    img: '/image/portofolio/Kabinet1.png',
  },
  {
    id: 2,
    tag: 'Kabinet',
    name: 'Kabinet',
    mat: 'Kabinet',
    img: '/image/portofolio/Kabinet2.png',
  },
  {
    id: 3,
    tag: 'Kabinet',
    name: 'Kabinet',
    mat: 'Kabinet',
    img: '/image/portofolio/Kabinet3.png',
  },
  {
    id: 4,
    tag: 'Kitchen',
    name: 'Kitchen Set',
    mat: 'Kitchen Set',
    img: '/image/portofolio/Kitchen set1.png',
  },
  {
    id: 5,
    tag: 'Kitchen',
    name: 'Kitchen Set',
    mat: 'Kitchen Set',
    img: '/image/portofolio/Kitchen set2.png',
  },
  {
    id: 6,
    tag: 'Resepsionis',
    name: 'Resepsionis',
    mat: 'Resepsionis',
    img: '/image/portofolio/Resepsionis1.png',
  },
  {
    id: 7,
    tag: 'Resepsionis',
    name: 'Resepsionis',
    mat: 'Resepsionis',
    img: '/image/portofolio/Resepsionis2.png',
  },
  {
    id: 8,
    tag: 'Restoran',
    name: 'Restoran',
    mat: 'Restoran',
    img: '/image/portofolio/Restoran1.png',
  },
  {
    id: 9,
    tag: 'Restoran',
    name: 'Restoran',
    mat: 'Restoran',
    img: '/image/portofolio/Restoran2.png',
  },
  {
    id: 10,
    tag: 'Restoran',
    name: 'Restoran',
    mat: 'Restoran',
    img: '/image/portofolio/Restoran3.png',
  },
];

const filters = ['Semua', 'Kabinet', 'Kitchen', 'Resepsionis', 'Restoran'];

function Placeholder({ tag }) {
  return (
    <div className="portfolio-fallback">
      <div className="fallback-grain-pattern" />
      <div className="fallback-box">
        <span className="fallback-tag">{tag}</span>
        <span className="fallback-text">Grint Project Photo</span>
      </div>
    </div>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState('Semua');
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const filtered = active === 'Semua' ? items : items.filter(i => i.tag === active);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        
        {/* Header Section */}
        <header className="portfolio-header">
          <span className="portfolio-badge">Portofolio / Our Work</span>
          <h2 className="portfolio-title">Karya Terbaru Kami</h2>
          <p className="portfolio-subtitle">Recent projects from the workshop</p>
          <div className="portfolio-decorator-line" />
        </header>

        {/* Filter Navigation Bar */}
        <nav className="portfolio-filters" role="group" aria-label="Filter portofolio">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn ${active === f ? 'is-active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </nav>

        {/* Portfolio Cards Grid */}
        <div className="portfolio-grid">
          {filtered.map(item => {
            const hasError = imageErrors[item.id];
            return (
              <article className="portfolio-card is-animated" key={item.id}>
                <div className="portfolio-thumb-wrapper">
                  {/* Perbaikan struktur ternary operator di bawah ini */}
                  {item.img && !hasError ? (
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="portfolio-img" 
                      loading="lazy" 
                      onError={() => handleImageError(item.id)}
                    />
                  ) : (
                    <Placeholder tag={item.tag} />
                  )}
                  
                  {/* Hover Overlay Mask */}
                  <div className="portfolio-hover-overlay">
                    <div className="overlay-content">
                      <span className="overlay-zoom-icon" aria-hidden="true">+</span>
                      <span className="portfolio-mat-tag">{item.mat}</span>
                    </div>
                  </div>
                  
                  <span className="portfolio-tag-badge">{item.tag}</span>
                </div>

                <div className="portfolio-meta-info">
                  <h3 className="portfolio-item-title">{item.name}</h3>
                  <p className="portfolio-item-mat">{item.mat}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA Bottom Section */}
        <div className="portfolio-cta-wrapper">
          <a
            href="https://www.instagram.com/ricotukangkayuindonesia_/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-cta-button"
          >
            <InstagramIcon className="cta-ig-icon" />
            <span>Lihat Semua Karya di Instagram</span>
          </a>
        </div>

      </div>
    </section>
  );
}
