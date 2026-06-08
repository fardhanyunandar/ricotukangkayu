import { useState, useEffect } from 'react';
import { Star, MessageSquare, ArrowRight } from 'lucide-react';
import './hero.css';

import HeroImage from '/image/hero/hero.webp?url';
import HeroImage1 from '/image/hero/hero1.webp?url';
import HeroImage2 from '/image/hero/hero2.webp?url';
import HeroImage3 from '/image/hero/hero3.webp?url';
import HeroImage4 from '/image/hero/hero4.webp?url';

export default function Hero() {
  const images = [HeroImage, HeroImage1, HeroImage2, HeroImage3, HeroImage4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 detik memberikan waktu baca yang lebih nyaman untuk gambar premium

    return () => clearInterval(timer);
  }, [images.length]);

  const scrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container hero-grid">

        {/* Kolom Kiri: Informasi Utama & Call to Action */}
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <span>Handcrafted in Indonesia</span>
          </div>

          <h1 className="hero-title animate-slide-up">
            Furniture Kayu <span className="title-accent">Custom</span><br />
            Berkualitas Tinggi
          </h1>

          <div className="hero-description animate-slide-up-delayed">
            <p className="hero-sub-id" lang="id">
              Setiap karya dibuat dengan tangan menggunakan kayu solid pilihan, dirancang presisi sesuai kebutuhan dan karakter unik hunian Anda.
            </p>
            <p className="hero-sub-en" lang="en">
              Every single piece is meticulously crafted by hand using premium wood, tailor-made to elevate your vision.
            </p>
          </div>

          <div className="hero-btns animate-slide-up-delayed">
            <button className="btn-primary" onClick={() => scrollTo('#contact')}>
              <MessageSquare size={18} />
              <span>Konsultasi Gratis</span>
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('#portfolio')}>
              <span>Lihat Karya</span>
              <ArrowRight size={18} className="arrow-icon" />
            </button>
          </div>
        </div>

        {/* Kolom Kanan: Slideshow Gambar Premium */}
        <div className="hero-media-wrapper">
          <div className="hero-media-inner">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Contoh Furniture Kayu Bespoke ${index + 1}`}
                className={`hero-image ${index === currentIndex ? 'active' : ''}`}
                loading={index === 0 ? "eager" : "lazy"} 
              />
            ))}
          </div>
          
          {/* Navigasi Indikator Titik (Dots) */}
          <div className="hero-slider-dots">
            {images.map((_, index) => (
              <button 
                key={index} 
                className={`dot-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Bagian Statistik Bawah */}
      <div className="hero-stats-panel">
        <div className="stats-container">
          <div className="stats-row">
            {[
              { num: '200+', label: 'Proyek Selesai', sub: 'Projects Completed' },
              { num: '5+', label: 'Tahun Pengalaman', sub: 'Years of Experience' },
              { num: '100%', label: 'Custom & Handmade', sub: 'Every piece bespoke' },
            ].map((s, idx) => (
              <div className="stat-item" key={idx}>
                <div className="stat-num-wrapper">
                  <span className="stat-num">{s.num}</span>
                </div>
                <div className="stat-text-group">
                  <span className="stat-label">{s.label}</span>
                  <span className="stat-sub" lang="en">{s.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}