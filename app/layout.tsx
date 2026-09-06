import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource/ibm-plex-sans-arabic/400.css';
import '@fontsource/ibm-plex-sans-arabic/500.css';
import '@fontsource/ibm-plex-sans-arabic/600.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Arrab — AI for your work and your life',
  description: 'Discover Arrab Studio for AI teams and Arrab Voice, your personal AI mentor.',
  icons: {
    icon: [{ url: '/arrab-symbol.png', type: 'image/png' }],
    shortcut: '/arrab-symbol.png',
    apple: '/arrab-symbol.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
