'use client';

import Link from 'next/link';
import { ArrowUpRight, EyeOff, Sparkles } from 'lucide-react';
import type { Tool } from '@/lib/catalog';
import { useSite } from './provider';

export function Portrait({ tool, size = 56 }: { tool: Tool; size?: number }) {
  if (tool.slug === 'general') {
    return (
      <span className="avatar avatar-general" style={{ width: size, height: size }} aria-hidden="true">
        <Sparkles size={size * 0.4} strokeWidth={1.5} />
      </span>
    );
  }
  if (tool.slug === 'incognito') {
    return (
      <span className="avatar avatar-ghost" style={{ width: size, height: size }} aria-hidden="true">
        <EyeOff size={size * 0.38} strokeWidth={1.5} />
      </span>
    );
  }
  if (tool.portrait) {
    return <img className="avatar" src={tool.portrait} alt="" width={size} height={size} style={{ width: size, height: size }} />;
  }
  return (
    <span className="avatar avatar-letter" style={{ width: size, height: size, background: `hsl(${tool.hue} 42% 42%)` }} aria-hidden="true">
      {tool.name.slice(0, 1)}
    </span>
  );
}

export function ToolCard({ tool, wide = false }: { tool: Tool; wide?: boolean }) {
  const { language, copy } = useSite();
  const name = language === 'ar' ? tool.nameAr : tool.name;
  const blurb = language === 'ar' ? tool.blurbAr : tool.blurb;
  const kicker = language === 'ar' ? tool.kickerAr : tool.kicker;
  const badge = language === 'ar' ? tool.badgeAr : tool.badge;
  return (
    <Link className={wide ? 'companion wide' : 'companion'} href={`/tools/${tool.slug}`}>
      <Portrait tool={tool} size={wide ? 84 : 64} />
      <div className="companion-copy">
        <span className="kicker">
          {kicker}
          {wide && <em className="main-flag">{copy.main}</em>}
        </span>
        <strong>{name}</strong>
        <p>{blurb}</p>
      </div>
      <span className="pill">{badge}</span>
      <span className="open-btn" aria-hidden="true">
        <ArrowUpRight size={16} strokeWidth={1.75} />
      </span>
    </Link>
  );
}
