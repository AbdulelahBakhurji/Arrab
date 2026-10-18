import type { Metadata } from 'next';
import { Cairo, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-sans' });
const cairo = Cairo({ subsets: ['arabic', 'latin'], variable: '--font-arabic' });

export const metadata: Metadata = {
  title: 'Stay tuned · Arrab',
  description: 'Arrab is on the way.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" className={`${manrope.variable} ${cairo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
