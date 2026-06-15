import { useState, useEffect } from 'react';
import { Star, MessageSquare, ArrowRight } from 'lucide-react';
import './hero.css';

import HeroImage from '/image/hero/hero.webp?url';
import HeroImage1 from '/image/hero/hero1.webp?url';
import HeroImage2 from '/image/hero/hero2.webp?url';
import HeroImage3 from '/image/hero/hero3.webp?url';
import HeroImage4 from '/image/hero/hero4.webp?url';
import HeroImage5 from '/image/hero/hero5.webp?url';
import HeroImage6 from '/image/hero/hero6.webp?url';
import HeroImage7 from '/image/hero/hero7.webp?url';
import HeroImage8 from '/image/hero/hero8.webp?url';
import HeroImage9 from '/image/hero/hero9.webp?url';

export default function Hero() {
  const images = [HeroImage, HeroImage1, HeroImage2, HeroImage3, HeroImage4, HeroImage5, HeroImage6, HeroImage7, HeroImage8, HeroImage9];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

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
      {/* Elemen Dekoratif Background Mekar Modern */}
      <div className="hero-bg-glow-1"></div>
      <div className="hero-bg-glow-2"></div>

      <div className="hero-container hero-grid">

        {/* Kolom Kiri: Informasi Utama & Call to Action */}
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <span className="badge-dot"></span>
            <span>Handcrafted in Indonesia</span>
          </div>

          <h1 className="hero-title animate-slide-up">
            Furniture Kayu <br />
            <span className="title-accent">Custom Bespoke</span><br />
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
              <MessageSquare size={19} />
              <span>Konsultasi Gratis</span>
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('#portfolio')}>
              <span>Lihat Karya</span>
              <ArrowRight size={19} className="arrow-icon" />
            </button>
          </div>
        </div>

        {/* Kolom Kanan: Slideshow Gambar Premium */}
        <div className="hero-media-wrapper animate-fade-in-delayed">
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
            {/* Overlay Gradasi Elegan di Atas Gambar */}
            <div className="media-overlay"></div>
          </div>
          
          {/* Navigasi Indikator Titik (Dots) dengan Line Effect */}
          <div className="hero-slider-dots">
            {images.map((_, index) => (
              <button 
                key={index} 
                className={`dot-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <span className="dot-line"></span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}