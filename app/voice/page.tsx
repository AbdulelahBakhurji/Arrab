import type { Metadata } from 'next';
import { ArrabSite } from '../site';

export const metadata: Metadata = {
  title: 'Arrab Voice — Your personal AI mentor',
  description: 'A personal AI mentor designed to understand you, challenge your thinking, and grow with your journey.',
};

export default function VoicePage() {
  return <ArrabSite view="voice" />;
}
