'use client';

import { useEffect, type ReactNode } from 'react';

type TocItem = { id: string; label: string };

type LegalDocumentProps = {
  title: string;
  description: string;
  active: 'privacy' | 'terms';
  toc: TocItem[];
  children: ReactNode;
};

export function LegalDocument({ title, description, active, toc, children }: LegalDocumentProps) {
  useEffect(() => {
    document.title = title;
    document.documentElement.classList.remove('light');
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    document.body.classList.add('legal-doc');
    const theme = document.querySelector('meta[name="theme-color"]');
    if (theme) theme.setAttribute('content', '#f7f7f8');
    return () => {
      document.body.classList.remove('legal-doc');
    };
  }, [title]);

  return (
    <>
      <link rel="stylesheet" href="/legal/styles.css?v=2" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <meta name="description" content={description} />
      <header className="topbar">
        <a className="brand" href="/">
          <img src="/legal/assets/logotall-white.png?v=1" alt="Arrab" />
        </a>
        <nav className="top-links" aria-label="Legal">
          <a className={active === 'terms' ? 'is-active' : undefined} href="/terms">
            Terms
          </a>
          <a className={active === 'privacy' ? 'is-active' : undefined} href="/privacy">
            Privacy
          </a>
        </nav>
      </header>
      <div className="layout">
        <aside className="toc" aria-label="On this page">
          <p>On this page</p>
          <ol>
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ol>
        </aside>
        <article className="article">{children}</article>
      </div>
    </>
  );
}
