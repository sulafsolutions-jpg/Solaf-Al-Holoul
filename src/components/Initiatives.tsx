import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Initiatives() {
  const { language } = useLanguage();
  const t = content[language].initiatives;

  return (
    <section id="initiatives" className="initiatives">
      <div className="wrap init-grid">
        <div>
          <span className="eyebrow">{t.label}</span>
          <h2 className="section-title">{t.title}</h2>
          <ol className="init-list">
            {t.items.map((item) => (
              <li key={item.index}>
                <span className="idx">{item.index}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <button className="btn btn-dark init-btn">{t.viewAll}</button>
        </div>

        <div className="featured">
          <span className="featured-badge">{t.featuredBadge}</span>
          <img
            src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=900&q=80"
            alt={t.imageAlt}
            loading="lazy"
          />
          <div className="impact">
            <span className="impact-icon">◉</span>
            <span>
              <small>{t.impactLabel}</small>
              <strong>{t.impactValue}</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
