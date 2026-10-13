'use client';

import { useState } from 'react';
import { tools } from '@/lib/catalog';
import { Shell } from './shell';
import { ToolCard } from './tool-card';
import { useSite } from './provider';

export function ExploreView() {
  const { copy } = useSite();
  const [mode, setMode] = useState<'personal' | 'professional'>('professional');
  const list = tools.filter((tool) => (mode === 'professional' ? tool.group === 'studio' : tool.group !== 'studio'));
  return (
    <Shell>
      <main className="page">
        <header className="page-intro">
          <p className="eyebrow">{copy.exploreKicker}</p>
          <h1>{copy.exploreTitle}</h1>
          <p>{copy.exploreText}</p>
          <div className="segment" role="tablist" aria-label={copy.exploreKicker}>
            <button type="button" role="tab" aria-selected={mode === 'personal'} className={mode === 'personal' ? 'on' : ''} onClick={() => setMode('personal')}>
              {copy.personal}
            </button>
            <button type="button" role="tab" aria-selected={mode === 'professional'} className={mode === 'professional' ? 'on' : ''} onClick={() => setMode('professional')}>
              {copy.professional}
            </button>
          </div>
        </header>
        <div className="studio-grid">
          {list.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} wide={tool.slug === 'arrab-assistant' && mode === 'professional'} />
          ))}
        </div>
      </main>
    </Shell>
  );
}
