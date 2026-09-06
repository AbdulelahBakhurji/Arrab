import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Arrab — AI for your work and your life',
  description: 'Discover Arrab Studio for AI teams and Arrab Voice, your personal AI mentor.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
