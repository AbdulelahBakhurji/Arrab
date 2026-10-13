'use client';

import { Search } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { getTool, readRecentSlugs, tools, type ToolGroup } from '@/lib/catalog';
import { Shell } from './shell';
import { ToolCard } from './tool-card';
import { useSite } from './provider';

type Sort = 'featured' | 'az' | 'za';

export function ToolsView() {
  const { copy, language } = useSite();
  const [query, setQuery] = useState('');
  const [group, setGroup] = useState<ToolGroup | 'all'>('all');
  const [sort, setSort] = useState<Sort>('featured');
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    setRecent(readRecentSlugs());
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const list = tools.filter((tool) => {
      if (group !== 'all' && tool.group !== group) return false;
      if (!needle) return true;
      const haystack = [tool.name, tool.nameAr, tool.blurb, tool.blurbAr, tool.kicker, tool.kickerAr, tool.badge, tool.badgeAr]
        .join(' ')
        .toLowerCase();
      return haystack.includes(needle);
    });
    const nameOf = (tool: (typeof tools)[number]) => (language === 'ar' ? tool.nameAr : tool.name);
    return [...list].sort((a, b) => {
      if (sort === 'az') return nameOf(a).localeCompare(nameOf(b), language);
      if (sort === 'za') return nameOf(b).localeCompare(nameOf(a), language);
      return Number(!a.featured) - Number(!b.featured) || nameOf(a).localeCompare(nameOf(b), language);
    });
  }, [group, language, query, sort]);

  const recentTools = recent.map((slug) => getTool(slug)).filter((tool) => tool !== undefined);
  const groups: Array<ToolGroup | 'all'> = ['all', 'studio', 'chat', 'life'];
  const groupLabel = {
    all: copy.groupAll,
    studio: copy.groupStudio,
    chat: copy.groupChat,
    life: copy.groupLife,
  };

  return (
    <Shell>
      <main className="page">
        <header className="page-intro">
          <p className="eyebrow">{copy.navTools}</p>
          <h1>{copy.allCompanions}</h1>
          <p>{copy.featuredText}</p>
        </header>
        <div className="toolbar">
          <label className="search">
            <Search size={16} strokeWidth={1.75} aria-hidden="true" />
            <span className="sr-only">{copy.search}</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy.searchPlaceholder} type="search" />
          </label>
          <div className="chips" role="toolbar" aria-label={copy.filters}>
            {groups.map((item) => (
              <button key={item} type="button" className={group === item ? 'chip on' : 'chip'} onClick={() => setGroup(item)} aria-pressed={group === item}>
                {groupLabel[item]}
              </button>
            ))}
          </div>
          <label className="sort">
            <span>{copy.sort}</span>
            <select value={sort} onChange={(event) => setSort(event.target.value as Sort)}>
              <option value="featured">{copy.sortFeatured}</option>
              <option value="az">{copy.sortAz}</option>
              <option value="za">{copy.sortZa}</option>
            </select>
          </label>
        </div>
        <p className="count">
          {filtered.length} {copy.results}
        </p>
        {recentTools.length > 0 && !query && group === 'all' && (
          <section className="recent">
            <h2>{copy.recent}</h2>
            <div className="studio-grid">
              {recentTools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </section>
        )}
        {filtered.length === 0 ? (
          <div className="empty">
            <p>{copy.emptySearch}</p>
            <button type="button" className="btn btn-ghost" onClick={() => { setQuery(''); setGroup('all'); }}>
              {copy.clearSearch}
            </button>
          </div>
        ) : (
          <div className="studio-grid">
            {filtered.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        )}
        {recentTools.length === 0 && (
          <p className="quiet">{copy.recentEmpty}</p>
        )}
      </main>
    </Shell>
  );
}
