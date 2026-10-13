'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { messages, type Copy, type Language } from '@/lib/messages';

type SiteContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  dark: boolean;
  setDark: (dark: boolean) => void;
  copy: Copy;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [language, setLanguage] = useState<Language>('en');
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('arrab-language');
    const storedTheme = localStorage.getItem('arrab-theme');
    if (storedLanguage === 'ar' || storedLanguage === 'en') setLanguage(storedLanguage);
    if (storedTheme === 'light') setDark(false);
  }, []);

  useEffect(() => {
    const legal = pathname === '/privacy' || pathname === '/terms' || pathname === '/refund';
    const root = document.documentElement;
    root.lang = language;
    root.dir = language === 'ar' ? 'rtl' : 'ltr';
    if (!legal) root.classList.toggle('light', !dark);
    localStorage.setItem('arrab-language', language);
    localStorage.setItem('arrab-theme', dark ? 'dark' : 'light');
    const theme = document.querySelector('meta[name="theme-color"]');
    if (theme && !legal) theme.setAttribute('content', dark ? '#14151c' : '#f4f4f6');
  }, [dark, language, pathname]);

  const value = useMemo<SiteContextValue>(
    () => ({
      language,
      setLanguage,
      dark,
      setDark,
      copy: messages[language] as Copy,
    }),
    [dark, language],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const value = useContext(SiteContext);
  if (!value) throw new Error('useSite must be used inside SiteProvider');
  return value;
}
