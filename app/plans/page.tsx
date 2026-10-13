import type { Metadata } from 'next';
import { PlansView } from '@/components/site/plans-view';

export const metadata: Metadata = {
  title: 'Plans',
  description: 'Arrab plans for one person, a family, or a team. Prices are in Saudi riyals and billed in the application.',
};

export default function PlansPage() {
  return <PlansView />;
}
