import type { Metadata } from 'next';
import { ArrabSite } from '../site';

export const metadata: Metadata = {
  title: 'Arrab Studio — Build your AI workforce',
  description: 'Create AI employees and multi-agent teams inside one connected AI workspace.',
};

export default function StudioPage() {
  return <ArrabSite view="studio" />;
}
