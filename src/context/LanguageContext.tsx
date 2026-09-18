import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Language } from '../data/content';

interface LanguageContextValue {
  language: Language;
  dir: 'rtl' | 'ltr';
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function applyDocumentLang(lang: Language) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Arabic is the primary language
  const [language, setLanguageState] = useState<Language>('ar');

  useEffect(() => {
    applyDocumentLang('ar');
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    applyDocumentLang(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const next: Language = prev === 'ar' ? 'en' : 'ar';
      applyDocumentLang(next);
      return next;
    });
  }, []);

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, dir, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
