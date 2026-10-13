import type { Metadata } from 'next';
import { DownloadView } from '@/components/site/download-view';

export const metadata: Metadata = {
  title: 'Download',
  description: 'Get Arrab on desktop, or install the website. App Store and Google Play are not published yet.',
};

export default function DownloadPage() {
  return <DownloadView />;
}
