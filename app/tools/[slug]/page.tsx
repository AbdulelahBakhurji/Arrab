import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTool, tools } from '@/lib/catalog';
import { ToolView } from '@/components/site/tool-view';

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return { title: 'Companion' };
  return { title: tool.name, description: tool.blurb };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getTool(slug)) notFound();
  return <ToolView slug={slug} />;
}
