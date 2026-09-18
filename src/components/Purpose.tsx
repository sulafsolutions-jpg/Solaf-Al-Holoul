import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

type TabId = 'vision' | 'mission' | 'values';

export default function Purpose() {
  const { language } = useLanguage();
  const t = content[language].purpose;
  const [tab, setTab] = useState<TabId>('vision');
  const panel = t.panels[tab];

  return (
    <section id="purpose" className="purpose">
      <div className="wrap">
        <span className="eyebrow eyebrow-light">{t.label}</span>
        <h2 className="purpose-title">{t.title}</h2>

        <div className="tabs" role="tablist">
          {t.tabs.map((item) => (
            <button
              key={item.id}
              role="tab"
              aria-selected={tab === item.id}
              className={`tab ${tab === item.id ? 'active' : ''}`}
              onClick={() => setTab(item.id as TabId)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="panel">
          <div className="panel-copy">
            <h3>{panel.heading}</h3>
            <p>{panel.quote}</p>
          </div>
          <div className="panel-visual" aria-hidden="true">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#d9a419" strokeWidth="1.1" opacity="0.55">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
