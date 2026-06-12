import { useState } from 'react';
import './contact.css';

// ─── CONFIG — Nomor WA Asli Rico Workshop ───────────────────────────────
const WA_NUMBER = '6281513135325'; 
const WA_DEFAULT_MSG = encodeURIComponent(
  'Halo Grint Furniture Build! Saya ingin konsultasi mengenai furniture custom.'
);

const furnitureTypes = [
  'Kitchen Set',
  'Lemari / Wardrobe',
  'Ranjang / Bed Frame',
  'Meja Makan / Dining Table',
  'Furniture Komersial / Commercial',
  'Rak / Shelving',
  'Lainnya / Other',
];

// ─── KOMPONEN IKON SVG PREMIUM (Bebas Dependency / Anti-Error) ───
function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  );
}


export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', type: '', desc: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const set = (field) => (e) => {
    setError('');
    setForm(f => ({ ...f, [field]: e.target.value }));
  };

  const buildWAMessage = () => {
    if (!form.name.trim()) return WA_DEFAULT_MSG;
    
    return encodeURIComponent(
      `Halo Bapak Rico, saya *${form.name.trim()}*.\n` +
      `No. WA: ${form.phone || '-'}\n\n` +
      `Saya ingin konsultasi mengenai proyek kustom: *${form.type || 'Furniture Custom'}*.\n\n` +
      `*Deskripsi Kebutuhan:*\n${form.desc || 'Belum ada deskripsi spesifik.'}`
    );
  };

  const handleDirectWA = () => {
    const msg = buildWAMessage();
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!form.name.trim() || !form.phone.trim()) {
      setError('Mohon lengkapi Nama dan Nomor WhatsApp Anda.');
      return;
    }

    setSent(true);
    
    const msg = buildWAMessage();
    setTimeout(() => {
      window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
      setSent(false);
      setForm({ name: '', phone: '', type: '', desc: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container contact-grid">

        {/* ── Info Kolom Kiri ── */}
        <div className="contact-info">
          <span className="contact-badge">Kontak / Contact Us</span>
          <h2 className="contact-title">Hubungi Kami</h2>
          <p className="contact-subtitle">Let's talk about your project</p>
          <div className="contact-decorator-line" />

          <div className="contact-items">
            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true">
                <MapPinIcon />
              </div>
              <div>
                <div className="contact-label">Workshop</div>
                <div className="contact-val">Indonesia (Konfirmasi via WhatsApp)</div>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true">
                <ClockIcon />
              </div>
              <div>
                <div className="contact-label">Jam Operasional / Working Hours</div>
                <div className="contact-val">Senin – Sabtu · 08.00 – 17.00 WIB</div>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true">
                <MessageIcon />
              </div>
              <div>
                <div className="contact-label">Response Time</div>
                <div className="contact-val">Biasanya &lt; 1 jam di jam kerja</div>
              </div>
            </div>
          </div>

          <button className="wa-primary-btn" onClick={handleDirectWA} type="button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            <span>Chat via WhatsApp Sekarang</span>
          </button>

          <div className="socials-contact-row">
            <a href="https://www.instagram.com/ricotukangkayuindonesia_/" target="_blank" rel="noopener noreferrer" className="social-contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              <span>Instagram</span>
            </a>
            <a href="https://www.tiktok.com/@ricotukangkayuindonesia" target="_blank" rel="noopener noreferrer" className="social-contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.07a8.16 8.16 0 0 0 4.77 1.52V7.15a4.85 4.85 0 0 1-1-.46z"/></svg>
              <span>TikTok</span>
            </a>
            <a href="https://grintfurniturebuild.taplink.id" target="_blank" rel="noopener noreferrer" className="social-contact-link">
              <span>🔗 Taplink</span>
            </a>
          </div>
        </div>

        {/* ── Form Kolom Kanan ── */}
        <div className="contact-form-card">
          <header className="form-header-node">
            <h3 className="form-card-title">Request Konsultasi</h3>
            <p className="form-card-sub">Consultation Request</p>
          </header>

          {sent ? (
            <div className="form-status-box is-success">
              <span className="status-icon">✅</span>
              <p>Membuka WhatsApp... Silakan kirim pesan yang telah terformat di chat room Rico.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {error && <div className="form-status-box is-error">{error}</div>}
              
              <div className="form-group-field">
                <label htmlFor="cf-name">Nama Lengkap / Full Name</label>
                <input
                  id="cf-name"
                  type="text"
                  placeholder="Nama Anda"
                  value={form.name}
                  onChange={set('name')}
                />
              </div>

              <div className="form-group-field">
                <label htmlFor="cf-phone">Nomor WhatsApp</label>
                <input
                  id="cf-phone"
                  type="tel"
                  placeholder="Contoh: 08123456789"
                  value={form.phone}
                  onChange={set('phone')}
                />
              </div>

              <div className="form-group-field">
                <label htmlFor="cf-type">Jenis Furniture / Furniture Type</label>
                <select id="cf-type" value={form.type} onChange={set('type')}>
                  <option value="">Pilih / Select...</option>
                  {furnitureTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div className="form-group-field">
                <label htmlFor="cf-desc">Deskripsi Kebutuhan / Project Description</label>
                <textarea
                  id="cf-desc"
                  rows={4}
                  placeholder="Ceritakan kebutuhan furniture Anda — ukuran, material, atau referensi desain..."
                  value={form.desc}
                  onChange={set('desc')}
                />
              </div>

              <div className="form-submit-actions">
                <button type="submit" className="action-btn-submit">
                  Kirim via WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
