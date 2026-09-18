import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function About() {
  const { language } = useLanguage();
  const t = content[language].about;

  return (
    <section id="about" className="about">
      <div className="wrap about-grid">
        <div className="about-copy">
          <span className="eyebrow">{t.label}</span>
          <h2 className="section-title">{t.title}</h2>
          {t.paragraphs.map((p, i) => (
            <p key={i} className="about-p">
              {p}
            </p>
          ))}
          <div className="stats">
            {t.stats.map((s) => (
              <div key={s.label} className="stat">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <button
            className="more"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t.moreLink} <span aria-hidden="true">{language === 'ar' ? '←' : '→'}</span>
          </button>
        </div>

        <div className="about-media">
          <img
            src="https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=900&q=80"
            alt={t.imageAlt}
            loading="lazy"
          />
          <div className="cert">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="12" cy="8" r="5" />
              <path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5" />
            </svg>
            <span>{t.certifiedBadge}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
