import { useState } from 'react';
import './Portofolio.css'; // Pastikan penulisan sesuai dengan nama file fisik Anda (Portofolio.css atau Portfolio.css)

const items = [
  {
    id: 1,
    tag: 'Bedroom',
    name: 'Ranjang Minimalis Kayu Jati',
    mat: 'Solid Teak · Natural Oil Finish',
    img: '/image/portofolio/badroom.png',
  },
  {
    id: 2,
    tag: 'Kitchen',
    name: 'Kitchen Set Modern HPL',
    mat: 'Multiplek HPL · Putih Doff',
    img: '/image/portofolio/kitchen.png',
  },
  {
    id: 3,
    tag: 'Living Room',
    name: 'Meja Makan Kayu Solid',
    mat: 'Mahoni · Stain Walnut',
    img: '/image/portofolio/livingroom.png',
  },
  {
    id: 4,
    tag: 'Storage',
    name: 'Lemari Pakaian Sliding',
    mat: 'Multiplek · HPL Kayu Walnut',
    img: '/image/portofolio/storage.png',
  },
  {
    id: 5,
    tag: 'Commercial',
    name: 'Meja Bar Cafe Custom',
    mat: 'Solid Wood · Dark Stain',
    img: '/image/portofolio/commercial.png',
  },
  {
    id: 6,
    tag: 'Office',
    name: 'Rak Buku & Display',
    mat: 'Kayu Pinus · Natural Finish',
    img: '/image/portofolio/office.png',
  },
];

const filters = ['Semua', 'Bedroom', 'Kitchen', 'Living Room', 'Storage', 'Commercial', 'Office'];

function Placeholder({ tag }) {
  return (
    <div className="portfolio-fallback">
      <div className="fallback-grain-pattern" />
      <span className="fallback-text">{tag} Project</span>
    </div>
  );
}

// Custom Instagram Icon mandiri tanpa bergantung pada paket external lucide
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
  const filtered = active === 'Semua' ? items : items.filter(i => i.tag === active);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        
        <header className="portfolio-header">
          <span className="portfolio-badge">Portofolio / Our Work</span>
          <h2 className="portfolio-title">Karya Terbaru Kami</h2>
          <p className="portfolio-subtitle">Recent projects from the workshop</p>
          <div className="portfolio-decorator-line" />
        </header>

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

        <div className="portfolio-grid">
          {filtered.map(item => (
            <article className="portfolio-card" key={item.id}>
              <div className="portfolio-thumb-wrapper">
                {item.img ? (
                  <img src={item.img} alt={item.name} className="portfolio-img" loading="lazy" />
                ) : (
                  <Placeholder tag={item.tag} />
                )}
                <div className="portfolio-hover-overlay">
                  <span className="portfolio-mat-tag">{item.mat}</span>
                </div>
                <span className="portfolio-tag-badge">{item.tag}</span>
              </div>
              <div className="portfolio-meta-info">
                <h3 className="portfolio-item-title">{item.name}</h3>
                <p className="portfolio-item-mat">{item.mat}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="portfolio-cta-wrapper">
          <a
            href="https://www.instagram.com/ricotukangkayuindonesia_/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-cta-button"
          >
            <InstagramIcon />
            <span>Lihat Semua Karya di Instagram</span>
          </a>
        </div>

      </div>
    </section>
  );
}