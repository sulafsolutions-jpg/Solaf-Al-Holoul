import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function ContactCTA() {
  const { language } = useLanguage();
  const t = content[language].contact;

  return (
    <section id="contact" className="cta-section">
      <div className="wrap">
        <div className="cta-card">
          <div className="cta-copy">
            <h2>{t.title}</h2>
            <p>{t.description}</p>
            <div className="cta-meta">
              <a href={`tel:${t.phone.replace(/\s/g, '')}`} className="meta">
                <span className="meta-icon">☎</span>
                <span dir="ltr">{t.phone}</span>
              </a>
              <a href={`mailto:${t.email}`} className="meta">
                <span className="meta-icon">✉</span>
                <span dir="ltr">{t.email}</span>
              </a>
              <a href={`https://${t.website}`} target="_blank" rel="noreferrer" className="meta">
                <span className="meta-icon">🌐</span>
                <span dir="ltr">{t.website}</span>
              </a>
            </div>
          </div>
          <div className="cta-action">
            <button className="btn btn-gold btn-big">{t.button}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
