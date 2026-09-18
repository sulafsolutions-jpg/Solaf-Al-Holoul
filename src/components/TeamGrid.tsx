import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

const FACES = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/54.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/men/75.jpg',
  'https://randomuser.me/api/portraits/women/12.jpg',
  'https://randomuser.me/api/portraits/men/22.jpg',
  'https://randomuser.me/api/portraits/women/33.jpg',
];

export default function TeamGrid() {
  const { language } = useLanguage();
  const t = content[language].team;

  const go = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="team" aria-label={t.title}>
      <div className="wrap">
        <span className="eyebrow">{t.label}</span>
        <h2 className="section-title">{t.title}</h2>
        <p className="team-desc">{t.description}</p>
        <div className="faces">
          {FACES.map((src, i) => (
            <img key={i} src={src} alt={`${t.imageAlt} ${i + 1}`} loading="lazy" />
          ))}
        </div>
        <button className="btn btn-gold" onClick={go}>
          {t.button}
        </button>
      </div>
    </section>
  );
}
