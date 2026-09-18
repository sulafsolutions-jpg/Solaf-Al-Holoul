import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Hero() {
  const { language } = useLanguage();
  const t = content[language].hero;

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="hero-badge">{t.badge}</span>
          <h1 className="hero-title">
            {t.titleA}
            <br />
            {t.titleB}
          </h1>
          <p className="hero-desc">{t.description}</p>
          <div className="hero-cta">
            <button className="btn btn-gold" onClick={() => go('contact')}>
              {t.primaryCta}
              <span aria-hidden="true">{language === 'ar' ? '←' : '→'}</span>
            </button>
            <button className="btn btn-outline" onClick={() => go('purpose')}>
              {t.secondaryCta}
            </button>
          </div>
        </div>
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
            alt={t.imageAlt}
            loading="eager"
          />
          <div className="hero-fade" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
