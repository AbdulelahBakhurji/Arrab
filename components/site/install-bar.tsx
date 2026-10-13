'use client';

import { useEffect, useState } from 'react';
import { contactHref } from '@/lib/messages';
import { useSite } from './provider';

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

function AppleMark() {
  return (
    <svg className="store-mark" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.37 12.72c-.03-2.35 1.92-3.48 2.01-3.53-1.1-1.61-2.81-1.83-3.41-1.85-1.45-.15-2.84.86-3.58.86-.74 0-1.88-.84-3.09-.82-1.59.02-3.06.93-3.88 2.36-1.66 2.88-.42 7.14 1.19 9.48.79 1.14 1.73 2.42 2.96 2.37 1.19-.05 1.64-.77 3.08-.77 1.44 0 1.84.77 3.1.74 1.28-.02 2.09-1.16 2.87-2.31.9-1.32 1.27-2.6 1.29-2.66-.03-.01-2.48-.95-2.51-3.77zM14.3 6.3c.66-.8 1.1-1.91.98-3.02-1 .04-2.2.66-2.91 1.49-.64.74-1.2 1.92-1.05 3.05 1.11.09 2.24-.56 2.98-1.52z"
      />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg className="store-mark" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M4.2 3.2c-.3.3-.5.8-.5 1.4v14.8c0 .6.2 1.1.5 1.4l.1.1 8.3-8.3v-.2L4.3 3.1l-.1.1z" />
      <path fill="#34A853" d="M16.4 14.9l-3.8-3.8v-.2l3.8-3.8.1.1 4.5 2.6c1.3.7 1.3 1.9 0 2.6l-4.5 2.5h-.1z" />
      <path fill="#FBBC04" d="M16.5 14.8L12.6 11 4.2 19.4c.4.4 1.1.5 1.9.1l10.4-4.7z" />
      <path fill="#EA4335" d="M16.5 7.2L6.1 2.5c-.8-.4-1.5-.3-1.9.1L12.6 11l3.9-3.8z" />
    </svg>
  );
}

function DesktopMark() {
  return (
    <svg className="store-mark" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H13v2h2.2a.8.8 0 0 1 0 1.6H8.8a.8.8 0 0 1 0-1.6H11v-2H6.5A2.5 2.5 0 0 1 4 13.5v-8Zm2.5-.9a.9.9 0 0 0-.9.9v8c0 .5.4.9.9.9h11c.5 0 .9-.4.9-.9v-8a.9.9 0 0 0-.9-.9h-11Z"
      />
    </svg>
  );
}

function BrowserMark() {
  return (
    <svg className="store-mark" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm6.7 8.2h-3.1a14 14 0 0 0-1.2-4.6 7.4 7.4 0 0 1 4.3 4.6ZM12 4.6c.8 1.1 1.7 3.1 2.1 6.6H9.9c.4-3.5 1.3-5.5 2.1-6.6ZM8.6 6.6A14 14 0 0 0 7.4 11.2H4.3a7.4 7.4 0 0 1 4.3-4.6ZM4.3 12.8h3.1c.2 1.7.6 3.3 1.2 4.6a7.4 7.4 0 0 1-4.3-4.6Zm3.6 0h8.2c-.4 3.5-1.3 5.5-2.1 6.6-.8-1.1-1.7-3.1-2.1-6.6H7.9Zm8.5 4.6c.6-1.3 1-2.9 1.2-4.6h3.1a7.4 7.4 0 0 1-4.3 4.6Z"
      />
    </svg>
  );
}

export function InstallBar() {
  const { copy, language } = useSite();
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const [ios, setIos] = useState(false);
  const appStore = process.env.NEXT_PUBLIC_APP_STORE_URL || '';
  const playStore = process.env.NEXT_PUBLIC_PLAY_STORE_URL || '';
  const desktop = process.env.NEXT_PUBLIC_DESKTOP_DOWNLOAD_URL || '';

  useEffect(() => {
    setIos(/iphone|ipad|ipod/i.test(navigator.userAgent));
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
    if (!promptEvent) {
      window.location.href = '/download#browser';
      return;
    }
    await promptEvent.prompt();
    const choice = await promptEvent.userChoice;
    if (choice.outcome === 'accepted') setInstalled(true);
    setPromptEvent(null);
  }

  return (
    <div className="store-row">
      <a className="store" href={appStore || '/download#app-store'} aria-label={language === 'ar' ? 'حمّل من آب ستور' : 'Download on the App Store'}>
        <AppleMark />
        <span className="store-copy">
          <small>{language === 'ar' ? 'حمّل من' : 'Download on the'}</small>
          <strong>App Store</strong>
        </span>
      </a>
      <a className="store" href={playStore || '/download#play'} aria-label={language === 'ar' ? 'احصل عليه من جوجل بلاي' : 'Get it on Google Play'}>
        <PlayMark />
        <span className="store-copy">
          <small>{language === 'ar' ? 'احصل عليه من' : 'Get it on'}</small>
          <strong>Google Play</strong>
        </span>
      </a>
      <a className="store" href={desktop || contactHref}>
        <DesktopMark />
        <span className="store-copy">
          <small>{language === 'ar' ? 'للكمبيوتر' : 'For desktop'}</small>
          <strong>{desktop ? copy.desktopReady : copy.desktopButton}</strong>
        </span>
      </a>
      {installed ? (
        <p className="store store-note">{copy.installed}</p>
      ) : (
        <button type="button" className="store" onClick={install}>
          <BrowserMark />
          <span className="store-copy">
            <small>{ios ? 'Safari' : language === 'ar' ? 'المتصفح' : 'Browser'}</small>
            <strong>{copy.install}</strong>
          </span>
        </button>
      )}
    </div>
  );
}
