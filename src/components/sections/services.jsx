import { Sofa, Bed, ChefHat, Store, Palette, Wrench } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Sofa,
    name: 'Furniture Ruang Tamu',
    en: 'Living Room Furniture',
    desc: 'Sofa frame, meja tamu, rak TV, kabinet — dirancang sesuai ukuran dan konsep ruangan Anda.'
  },
  {
    icon: Bed,
    name: 'Furniture Kamar Tidur',
    en: 'Bedroom Furniture',
    desc: 'Ranjang, lemari pakaian, nakas, hingga meja rias custom dengan berbagai pilihan finishing.'
  },
  {
    icon: ChefHat, // Menggunakan ChefHat / Refrigerator / Utensils yang stabil di Lucide untuk Kitchen
    name: 'Kitchen Set',
    en: 'Kitchen Cabinet & Set',
    desc: 'Kitchen set upper & base cabinet, island, dengan material multiplek HPL maupun solid wood.'
  },
  {
    icon: Store,
    name: 'Furniture Komersial',
    en: 'Commercial Furniture',
    desc: 'Cafe, restoran, kantor, dan retail — kami terima proyek skala kecil hingga besar.'
  },
  {
    icon: Palette,
    name: 'Custom Finishing',
    en: 'Wood Finishing & Refinishing',
    desc: 'Natural oil, stain, duco, HPL, hingga cat custom sesuai palet warna interior Anda.'
  },
  {
    icon: Wrench,
    name: 'Renovasi & Restorasi',
    en: 'Renovation & Restoration',
    desc: 'Furniture lama rusak atau ingin diperbarui? Kami menerima jasa perbaikan dan restorasi kayu.'
  },
];

const steps = [
  { num: '01', title: 'Konsultasi', sub: 'Free Consultation' },
  { num: '02', title: 'Desain & RAB', sub: 'Design & Quotation' },
  { num: '03', title: 'Produksi', sub: 'Production' },
  { num: '04', title: 'Kirim & Pasang', sub: 'Delivery & Install' },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">

        {/* Header Section */}
        <header className="services-header">
          <span className="services-badge">Layanan Kami / Our Services</span>
          <h2 className="services-title">Apa yang Kami Kerjakan</h2>
          <p className="services-subtitle">What we build for you</p>
          <div className="services-decorator-line" />
        </header>

        {/* Services Cards Grid */}
        <div className="services-grid">
          {services.map((s, index) => {
            const IconComponent = s.icon;
            return (
              <div className="service-card" key={index}>
                <div className="service-icon-wrapper">
                  <IconComponent size={24} strokeWidth={1.75} />
                </div>
                <div className="service-info">
                  <h3 className="service-name">{s.name}</h3>
                  <span className="service-name-en">{s.en}</span>
                  <p className="service-desc">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Roadmap Section */}
        <div className="process-wrapper">
          <div className="process-header">
            <h3 className="process-main-title">Alur Kerja Kami</h3>
            <p className="process-sub-title">Our Step-by-Step Process</p>
          </div>

          <div className="process-row">
            {steps.map((s, i) => (
              <div className="process-step" key={s.num}>
                <div className="step-node-container">
                  <div className="step-node">
                    <span className="step-num">{s.num}</span>
                  </div>
                  {/* Garis diletakkan di sini agar bebas menjangkau step berikutnya tanpa merusak lingkaran */}
                  {i < steps.length - 1 && <div className="step-connector-line" aria-hidden="true" />}
                </div>
                <div className="step-text-content">
                  <h4 className="step-title">{s.title}</h4>
                  <p className="step-sub">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}