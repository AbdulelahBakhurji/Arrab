'use client';

import { useEffect, useState } from 'react';

const copy = {
  en: {
    title: 'Stay tuned · Arrab',
    kicker: 'Coming soon',
    heading: 'Stay tuned',
    lineA: 'Arrab is almost here.',
    lineB: 'We will open the doors when it is ready.',
    place: 'Saudi Arabia',
    label: 'Switch to Arabic',
    hint: 'العربية',
  },
  ar: {
    title: 'ترقّبوا · عرّاب',
    kicker: 'قريباً',
    heading: 'ترقّبوا',
    lineA: 'عرّاب على وشك الوصول.',
    lineB: 'نفتح الأبواب حين يجهز.',
    place: 'المملكة العربية السعودية',
    label: 'Switch to English',
    hint: 'English',
  },
} as const;

type Language = keyof typeof copy;

export default function HomePage() {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const stored = localStorage.getItem('arrab-soon-language');
    if (stored === 'ar') setLanguage('ar');
  }, []);

  useEffect(() => {
    const text = copy[language];
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.title = text.title;
    localStorage.setItem('arrab-soon-language', language);
  }, [language]);

  const text = copy[language];

  return (
    <>
      <header className="bar">
        <img className="logo" src="/arrab-logo-white.png" alt="Arrab" />
        <button
          className="lang"
          type="button"
          aria-label={text.label}
          title={text.hint}
          onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18" />
            <path d="M12 3c2.6 2.4 4 5.5 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.5-4-9s1.4-6.6 4-9z" />
          </svg>
        </button>
      </header>
      <main className="stage">
        <div className="card">
          <p className="kicker">
            <span className="dot" aria-hidden="true" />
            {text.kicker}
          </p>
          <h1>{text.heading}</h1>
          <p className="lede">
            <span>{text.lineA}</span>
            <span>{text.lineB}</span>
          </p>
        </div>
      </main>
      <footer className="foot">
        <p className="mark">{text.place}</p>
      </footer>
    </>
  );
}
