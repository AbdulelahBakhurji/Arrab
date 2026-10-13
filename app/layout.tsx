import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource/cairo/400.css';
import '@fontsource/cairo/500.css';
import '@fontsource/cairo/600.css';
import '@fontsource/cairo/700.css';
import './globals.css';
import { SiteProvider } from '@/components/site/provider';
import { RegisterSw } from '@/components/site/register-sw';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Arrab',
    template: '%s · Arrab',
  },
  description:
    'Arrab is an AI workspace for chat and studio companions — design, markets, writing, and personal work, in Arabic and English.',
  applicationName: 'Arrab',
  icons: {
    icon: [{ url: '/icons/icon-192.png', type: 'image/png' }],
    apple: '/icons/icon-192.png',
  },
  openGraph: {
    title: 'Arrab',
    description: 'Your AI workspace. Everything connected.',
    siteName: 'Arrab',
    type: 'website',
    images: ['/icons/icon-512.png'],
  },
  twitter: {
    card: 'summary',
    title: 'Arrab',
    description: 'Your AI workspace. Everything connected.',
  },
};

export const viewport: Viewport = {
  themeColor: '#14151c',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('arrab-theme');var l=localStorage.getItem('arrab-language');if(t==='light')document.documentElement.classList.add('light');if(l==='ar'){document.documentElement.lang='ar';document.documentElement.dir='rtl'}else{document.documentElement.lang='en';document.documentElement.dir='ltr'}}catch(e){}",
          }}
        />
      </head>
      <body>
        <SiteProvider>
          <RegisterSw />
          {children}
        </SiteProvider>
      </body>
    </html>
  );
}
