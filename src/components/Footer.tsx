import { useLanguage } from '../context/LanguageContext';
import { content, LOGO } from '../data/content';
import Logo from './Logo';

export default function Footer() {
  const { language } = useLanguage();
  const t = content[language].footer;

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="foot-logo">
              <Logo language={language} height={110} src={LOGO.footerSvg} />
            </div>
            <div className="foot-brand-name">{t.brandName}</div>
            <p>{t.description}</p>
          </div>

          <div className="foot-col contact-col">
            <h4>{t.contactTitle}</h4>
            <ul className="contact-list">
              <li className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>{t.address}</span>
              </li>
              <li className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a href={`tel:${t.phone.replace(/\s/g, '')}`} dir="ltr">{t.phone}</a>
              </li>
              <li className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <a href={`mailto:${t.email}`} dir="ltr">{t.email}</a>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>{t.legalTitle}</h4>
            <ul>
              {t.legal.map((l) => (
                <li key={l}>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot-col">
            <h4>{t.brandNameEn}</h4>
            <div className="socials">
              <a href="#" aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
                </svg>
              </a>
              <a href="https://x.com/Sol_Sulaf99" aria-label="X">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/sulaf.solutions2026/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* <div className="foot-links">
          {t.columns.map((col) => (
            <div key={col.title} className="foot-col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <span>{link}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}

        <div className="foot-bottom">
          <span>{t.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
