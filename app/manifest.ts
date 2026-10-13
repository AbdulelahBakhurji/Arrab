import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Arrab',
    short_name: 'Arrab',
    description: 'Arrab workspace companions, in Arabic and English.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#14151c',
    theme_color: '#14151c',
    lang: 'en',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
  };
}
