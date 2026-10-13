'use client';

import { useEffect, useState } from 'react';
import { contactHref } from '@/lib/messages';
import { Shell } from './shell';
import { useSite } from './provider';

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

export function DownloadView() {
  const { copy, language } = useSite();
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const [ios, setIos] = useState(false);
  const appStore = process.env.NEXT_PUBLIC_APP_STORE_URL || '';
  const playStore = process.env.NEXT_PUBLIC_PLAY_STORE_URL || '';
  const desktop = process.env.NEXT_PUBLIC_DESKTOP_DOWNLOAD_URL || '';

  useEffect(() => {
    const ua = navigator.userAgent;
    setIos(/iphone|ipad|ipod/i.test(ua));
    const onPrompt = (event: Event) => {
      event.preventDefault();
      setPromptEvent(event as BeforeInstallPromptEvent);
    };
    const onInstalled = () => setInstalled(true);
    window.addEventListener('beforeinstallprompt', onPrompt);
    window.addEventListener('appinstalled', onInstalled);
    if (window.matchMedia('(display-mode: standalone)').matches) setInstalled(true);
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  async function install() {
    if (!promptEvent) return;
    await promptEvent.prompt();
    const choice = await promptEvent.userChoice;
    if (choice.outcome === 'accepted') setInstalled(true);
    setPromptEvent(null);
  }

  return (
    <Shell>
      <main className="page">
        <header className="page-intro">
          <p className="eyebrow">{copy.downloadPageKicker}</p>
          <h1>{copy.downloadPageTitle}</h1>
          <p>{copy.downloadPageText}</p>
        </header>
        <div className="download-grid">
          <article id="app-store">
            <h2>{copy.iphone}</h2>
            <p>{appStore ? (language === 'ar' ? 'الرابط الرسمي على آب ستور.' : 'Official App Store listing.') : copy.iphoneText}</p>
            {appStore ? (
              <a className="btn btn-primary" href={appStore}>
                App Store
              </a>
            ) : (
              <button type="button" className="btn btn-ghost" disabled>
                {copy.iphoneButton}
              </button>
            )}
          </article>
          <article id="play">
            <h2>{copy.android}</h2>
            <p>{copy.androidText}</p>
            {playStore ? (
              <a className="btn btn-primary" href={playStore}>
                Google Play
              </a>
            ) : (
              <button type="button" className="btn btn-ghost" disabled>
                {copy.androidButton}
              </button>
            )}
          </article>
          <article id="desktop">
            <h2>{copy.desktop}</h2>
            <p>{copy.desktopText}</p>
            {desktop ? (
              <a className="btn btn-primary" href={desktop}>
                {copy.desktopReady}
              </a>
            ) : (
              <a className="btn btn-primary" href={contactHref}>
                {copy.desktopButton}
              </a>
            )}
          </article>
          <article id="browser">
            <h2>{copy.browser}</h2>
            <p>{copy.browserText}</p>
            {installed ? (
              <p className="pill">{copy.installed}</p>
            ) : promptEvent ? (
              <button type="button" className="btn btn-primary" onClick={install}>
                {copy.install}
              </button>
            ) : (
              <p className="quiet">{ios ? copy.iosHelp : copy.unavailableInstall}</p>
            )}
          </article>
        </div>
      </main>
    </Shell>
  );
}
