import './testimonials.css';

const reviews = [
  { 
    initials: 'DS', 
    name: 'Dewi Susanti',  
    loc: 'Surabaya · Kitchen Set',    
    stars: 5, 
    text: '"Kitchen set dari Gr_int kualitasnya luar biasa. Finishing rapih, ukuran pas, dan prosesnya transparan dari awal sampai selesai. Highly recommended!"' 
  },
  { 
    initials: 'AR', 
    name: 'Ahmad Rizky',   
    loc: 'Jakarta · Bedroom Set',     
    stars: 5, 
    text: '"Sudah order lemari sliding dan ranjang. Hasilnya memuaskan banget, kayu solid berkualitas dan harga masih bersahabat untuk kualitas segini."' 
  },
  { 
    initials: 'MR', 
    name: 'Michelle R.',   
    loc: 'Bali · Cafe Interior',      
    stars: 5, 
    text: '"The craftsmanship is excellent. Rico was very communicative throughout the process and delivered exactly what we envisioned."' 
  },
  { 
    initials: 'FH', 
    name: 'Farah Husna',  
    loc: 'Bandung · Dining Table',    
    stars: 4, 
    text: '"Proses konsultasinya enak, Rico banyak kasih saran soal material dan warna. Meja makan yang jadi lebih bagus dari ekspektasi saya."' 
  },
];

function StarIcon({ filled }) {
  return (
    <svg
      className={`testi-star ${filled ? 'is-filled' : 'is-empty'}`}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

// Ikon tanda petik dekoratif premium
function QuoteIcon() {
  return (
    <svg 
      className="testi-quote-bg"
      width="64" 
      height="64" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      aria-hidden="true"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9 Diploma-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="testimoni" className="testimonials-section">
      <div className="testimonials-container">
        
        {/* Section Header */}
        <header className="testimonials-header">
          <span className="testimonials-badge">Testimoni / Reviews</span>
          <h2 className="testimonials-title">Kata Mereka</h2>
          <p className="testimonials-subtitle">What our clients say</p>
          <div className="testimonials-decorator-line" />
        </header>

        {/* Reviews Grid */}
        <div className="testimonials-grid">
          {reviews.map((r, index) => (
            <article className="testi-card" key={index}>
              
              {/* Decorative Background Quote */}
              <QuoteIcon />

              {/* Rating Row */}
              <div className="testi-stars-row" aria-label={`${r.stars} dari 5 bintang`}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <StarIcon key={idx} filled={idx < r.stars} />
                ))}
              </div>

              {/* Quote Content */}
              <div className="testi-content">
                <blockquote className="testi-text">{r.text}</blockquote>
              </div>

              {/* Author Profile */}
              <footer className="testi-author-wrapper">
                <div className="testi-avatar" aria-hidden="true">
                  {r.initials}
                </div>
                <div className="testi-meta">
                  <cite className="testi-name">{r.name}</cite>
                  <span className="testi-loc">{r.loc}</span>
                </div>
              </footer>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}