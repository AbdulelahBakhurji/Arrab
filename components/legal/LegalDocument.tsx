'use client';

import Link from 'next/link';
import { useEffect, useState, type ReactNode } from 'react';

type TocItem = { id: string; label: string; labelAr?: string };

type LegalLang = 'en' | 'ar';

type LegalDocumentProps = {
  title: string;
  titleAr?: string;
  description: string;
  active: 'privacy' | 'terms' | 'refund';
  toc: TocItem[];
  children: ReactNode;
  bilingual?: boolean;
};

function tocLabel(item: TocItem, language: LegalLang) {
  if (language === 'ar') {
    if (item.labelAr) return item.labelAr;
    const parts = item.label.split(' / ');
    return parts[1]?.trim() || item.label;
  }
  const parts = item.label.split(' / ');
  return parts[0]?.trim() || item.label;
}

export function LegalDocument({
  title,
  titleAr,
  description,
  active,
  toc,
  children,
  bilingual = false,
}: LegalDocumentProps) {
  const [language, setLanguage] = useState<LegalLang>('en');

  useEffect(() => {
    const stored = localStorage.getItem('arrab-legal-lang');
    if (stored === 'ar' || stored === 'en') setLanguage(stored);
  }, []);

  useEffect(() => {
    document.title = title;
    document.documentElement.classList.remove('light');
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.add('legal-doc');
    document.body.classList.toggle('legal-bilingual', bilingual);
    document.body.classList.toggle('legal-lang-en', language === 'en');
    document.body.classList.toggle('legal-lang-ar', language === 'ar');
    localStorage.setItem('arrab-legal-lang', language);
    const theme = document.querySelector('meta[name="theme-color"]');
    if (theme) theme.setAttribute('content', '#f7f7f8');
    return () => {
      document.body.classList.remove('legal-doc', 'legal-bilingual', 'legal-lang-en', 'legal-lang-ar');
    };
  }, [title, bilingual, language]);

  return (
    <>
      <link rel="stylesheet" href="/legal/styles.css?v=6" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <meta name="description" content={description} />
      <header className="topbar">
        <Link className="brand" href="/">
          <img src="/legal/assets/logotall-white.png?v=1" alt="Arrab" />
        </Link>
        <div className="topbar-actions">
          {bilingual && (
            <div className="lang-toggle" role="group" aria-label="Language">
              <button
                type="button"
                className={language === 'en' ? 'is-active' : undefined}
                onClick={() => setLanguage('en')}
                aria-pressed={language === 'en'}
              >
                English
              </button>
              <button
                type="button"
                className={language === 'ar' ? 'is-active' : undefined}
                onClick={() => setLanguage('ar')}
                aria-pressed={language === 'ar'}
              >
                العربية
              </button>
            </div>
          )}
          <nav className="top-links" aria-label="Legal">
            <Link className={active === 'terms' ? 'is-active' : undefined} href="/terms">
              {language === 'ar' ? 'الشروط' : 'Terms'}
            </Link>
            <Link className={active === 'privacy' ? 'is-active' : undefined} href="/privacy">
              {language === 'ar' ? 'الخصوصية' : 'Privacy'}
            </Link>
            <Link className={active === 'refund' ? 'is-active' : undefined} href="/refund">
              {language === 'ar' ? 'الاسترجاع' : 'Refund'}
            </Link>
          </nav>
        </div>
      </header>
      <div className={`layout${bilingual ? ' layout-bilingual' : ''}`}>
        <aside className="toc" aria-label={language === 'ar' ? 'في هذه الصفحة' : 'On this page'}>
          <p>{language === 'ar' ? 'في هذه الصفحة' : 'On this page'}</p>
          <ol>
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{tocLabel(item, language)}</a>
              </li>
            ))}
          </ol>
        </aside>
        <article
          className={`article${bilingual ? ' article-bilingual' : ''}`}
          dir={bilingual && language === 'ar' ? 'rtl' : 'ltr'}
          lang={language}
        >
          {titleAr ? <span className="sr-only">{titleAr}</span> : null}
          {children}
        </article>
      </div>
    </>
  );
}
