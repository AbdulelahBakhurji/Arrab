import type { Metadata } from 'next';
import { HomeView } from '@/components/site/home-view';

export const metadata: Metadata = {
  title: 'Arrab',
  description: 'Your AI workspace. Chat and studio companions for design, markets, writing, and personal work.',
};

export default function Home() {
  return <HomeView />;
}
