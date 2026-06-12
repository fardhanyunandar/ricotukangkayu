import { useState } from 'react';
import './faq.css';

const faqs = [
  {
    q: 'Berapa lama waktu pengerjaan?',
    qen: 'How long does production take?',
    a: 'Tergantung kompleksitas proyek. Rata-rata 2–4 minggu untuk furniture tunggal, dan 4–8 minggu untuk full set. Kami akan memberikan estimasi waktu yang akurat setelah konsultasi desain.',
    aen: 'Depends on project complexity. Typically 2–4 weeks for single pieces, 4–8 weeks for full sets.',
  },
  {
    q: 'Apakah bisa dikirim ke luar kota?',
    qen: 'Do you ship outside the city?',
    a: 'Ya, kami melayani pengiriman ke seluruh Indonesia menggunakan jasa ekspedisi terpercaya dengan packing yang aman. Biaya pengiriman dihitung sesuai lokasi dan berat produk.',
    aen: 'Yes, we ship nationwide across Indonesia with secure packaging. Shipping cost depends on location and weight.',
  },
  {
    q: 'Material apa saja yang tersedia?',
    qen: 'What materials are available?',
    a: 'Kami menggunakan kayu solid (jati, mahoni, sungkai), multiplek/plywood, dan kombinasi material. Untuk finishing, tersedia natural oil, stain, duco, HPL, dan cat custom.',
    aen: 'We work with solid wood (teak, mahogany, sungkai), plywood, and combined materials. Finishes include natural oil, stain, duco, HPL, and custom paint.',
  },
  {
    q: 'Apakah ada garansi produk?',
    qen: 'Is there a product warranty?',
    a: 'Ya, semua produk bergaransi terhadap cacat produksi. Kami juga menyediakan layanan after-sales jika ada kebutuhan perbaikan minor setelah pemasangan.',
    aen: 'Yes, all products are warranted against manufacturing defects, with after-sales support for minor repairs.',
  },
  {
    q: 'Bagaimana sistem pembayaran?',
    qen: 'What is the payment system?',
    a: 'Sistem DP 50% di awal produksi, pelunasan 50% sebelum pengiriman. Kami menerima transfer bank, dompet digital, dan tunai.',
    aen: '50% down payment to start, 50% balance before delivery. We accept bank transfer, e-wallets, and cash.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container faq-layout">

        {/* Left Side: Header Sticky Info */}
        <div className="faq-header-panel">
          <div className="faq-sticky-content">
            <span className="faq-badge">FAQ / Pertanyaan Umum</span>
            <h2 className="faq-title">Yang Sering Ditanyakan</h2>
            <p className="faq-subtitle">Frequently asked questions</p>
            <div className="faq-decorator-line" />

            <div className="faq-contact-card">
              <p className="faq-contact-text">
                Punya pertanyaan khusus mengenai proyek kustom Anda?
              </p>
              <button
                className="faq-wa-button"
                onClick={() => window.open('https://wa.me/6281513135325?text=Halo%20Grint%20Furniture%20Build!%20Saya%20ingin%20konsultasi%20mengenai%20furniture%20custom.', '_blank')}
              >
                Hubungi via WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Accordion List */}
        <div className="faq-accordion-list">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-row-item ${isOpen ? 'is-open' : ''}`} key={i}>
                <button
                  className="faq-trigger"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="faq-question-text">
                    {item.q}
                    <span className="faq-question-en"> / {item.qen}</span>
                  </span>
                  <div className="faq-icon-wrapper">
                    <svg
                      className="faq-chevron-icon"
                      width="18" height="18"
                      viewBox="0 0 24 24"
                      fill="none" stroke="currentColor"
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>

                {/* Panel jawaban dengan animasi tinggi berbasis CSS Grid */}
                <div
                  id={`faq-panel-${i}`}
                  className="faq-panel-content"
                  aria-hidden={!isOpen}
                >
                  <div className="faq-panel-inner">
                    <p className="faq-answer-id">{item.a}</p>
                    <p className="faq-answer-en" lang="en">{item.aen}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}