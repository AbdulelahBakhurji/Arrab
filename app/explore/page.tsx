import type { Metadata } from 'next';
import { ExploreView } from '@/components/site/explore-view';

export const metadata: Metadata = {
  title: 'Explore',
  description: 'Personal chat companions and professional studio companions in Arrab.',
};

export default function ExplorePage() {
  return <ExploreView />;
}
