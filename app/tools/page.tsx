import type { Metadata } from 'next';
import { ToolsView } from '@/components/site/tools-view';

export const metadata: Metadata = {
  title: 'Companions',
  description: 'Browse Arrab studio and personal companions.',
};

export default function ToolsPage() {
  return <ToolsView />;
}
