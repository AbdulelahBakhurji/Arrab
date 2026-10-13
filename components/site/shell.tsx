'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Languages, Menu, Moon, Sun, X } from 'lucide-react';
import { contactHref } from '@/lib/messages';
import { useSite } from './provider';

const links = [
  { href: '/', key: 'navHome' },
  { href: '/tools', key: 'navTools' },
  { href: '/explore', key: 'navExplore' },
  { href: '/plans', key: 'navPlans' },
  { href: '/download', key: 'navDownload' },
] as const;

export function Shell({ children }: { children: React.ReactNode }) {
  const { copy, language, setLanguage, setDark, dark } = useSite();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="ab">
      <a className="skip" href="#content">
        {copy.skip}
      </a>
      <header className="top">
        <Link className="wordmark" href="/" aria-label="Arrab">
          <img src="/arrab-logo-white.png" alt="Arrab" />
        </Link>
        <nav className="nav" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>
              {copy[link.key]}
            </Link>
          ))}
        </nav>
        <div className="top-actions">
          <button
            type="button"
            className="icon-btn icon-only"
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            aria-label={copy.language}
          >
            <Languages size={18} />
          </button>
          <button
            type="button"
            className="icon-btn icon-only"
            onClick={() => setDark(!dark)}
            aria-label={dark ? copy.themeLight : copy.themeDark}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link className="btn btn-primary" href="/download">
            {copy.getArrab}
          </Link>
          <button type="button" className="icon-btn icon-only menu-btn" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? copy.close : copy.menu}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {open && (
          <nav className="mobile-nav" aria-label="Mobile">
            {links.map((link) => (
              <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>
                {copy[link.key]}
              </Link>
            ))}
            <Link href="/workspace">{copy.navWorkspace}</Link>
            <a href={contactHref}>{copy.contact}</a>
          </nav>
        )}
      </header>
      <div id="content">{children}</div>
      <footer className="foot">
        <div className="foot-inner">
          <Link className="wordmark foot-mark" href="/" aria-label="Arrab">
            <img src="/arrab-logo-white.png" alt="" />
          </Link>
          <div>
            <p>{copy.footerProduct}</p>
            <Link href="/tools">{copy.navTools}</Link>
            <Link href="/explore">{copy.navExplore}</Link>
            <Link href="/plans">{copy.navPlans}</Link>
            <Link href="/workspace">{copy.navWorkspace}</Link>
            <Link href="/download">{copy.navDownload}</Link>
            <a href={contactHref}>{copy.contact}</a>
          </div>
          <div>
            <p>{copy.footerLegal}</p>
            <Link href="/privacy">{copy.privacy}</Link>
            <Link href="/terms">{copy.terms}</Link>
            <Link href="/refund">{copy.refund}</Link>
          </div>
          <small>{copy.rights}</small>
        </div>
      </footer>
    </div>
  );
}
