import type { MetadataRoute } from 'next';
import { tools } from '@/lib/catalog';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const paths = ['', '/tools', '/explore', '/plans', '/download', '/workspace', '/privacy', '/terms', '/refund', ...tools.map((tool) => `/tools/${tool.slug}`)];
  return paths.map((path) => ({ url: `${siteUrl}${path}`, changeFrequency: 'weekly', priority: path === '' ? 1 : 0.7 }));
}
