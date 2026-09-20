import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import Logo from './Logo';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const t = content[language].nav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <button className="brand" onClick={() => go('home')} aria-label="Sulaf Solutions">
          <Logo language={language} height={66} />
        </button>

        <nav className="links" aria-label="Primary">
          {t.links.map((l) => (
            <button key={l.id} className="link" onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="lang" onClick={toggleLanguage} aria-label={t.langToggleLabel} title={t.langToggleLabel}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            {language === 'ar' ? '🏳 EN' : '🏳 ع'}
          </button>
          <button className="burger" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <div className="wrap">
          <div className="mobile">
            {t.links.map((l) => (
              <button key={l.id} onClick={() => go(l.id)}>
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
