'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { getTool, rememberTool, tools } from '@/lib/catalog';
import { contactHref } from '@/lib/messages';
import { Shell } from './shell';
import { Portrait } from './tool-card';
import { useSite } from './provider';

export function ToolView({ slug }: { slug: string }) {
  const { copy, language } = useSite();
  const tool = getTool(slug);

  useEffect(() => {
    if (tool) rememberTool(tool.slug);
  }, [tool]);

  if (!tool) return null;
  const name = language === 'ar' ? tool.nameAr : tool.name;
  const blurb = language === 'ar' ? tool.blurbAr : tool.blurb;
  const kicker = language === 'ar' ? tool.kickerAr : tool.kicker;
  const related = tools.filter((item) => item.group === tool.group && item.slug !== tool.slug).slice(0, 3);

  return (
    <Shell>
      <main className="page tool-page">
        <Link className="back" href="/tools">
          {copy.toolBack}
        </Link>
        <header className="tool-hero">
          <Portrait tool={tool} size={84} />
          <div>
            <p className="eyebrow">{kicker}</p>
            <h1>{name}</h1>
            <p className="lede">{blurb}</p>
            <span className="pill">{copy.available}</span>
          </div>
        </header>
        <div className="tool-grid">
          <section>
            <h2>{copy.whatItDoes}</h2>
            <ul>
              {tool.tasks.map(([en, ar]) => (
                <li key={en}>{language === 'ar' ? ar : en}</li>
              ))}
            </ul>
            {tool.note && <p className="note">{language === 'ar' ? tool.note[1] : tool.note[0]}</p>}
          </section>
          <aside>
            <h2>{copy.where}</h2>
            <p>{copy.whereText}</p>
            <div className="actions">
              <Link className="btn btn-primary" href={`/workspace?room=${tool.surface}&companion=${tool.slug}`}>
                {copy.openInPreview}
              </Link>
              <a className="btn btn-ghost" href={contactHref}>
                {copy.requestApp}
              </a>
            </div>
          </aside>
        </div>
        <section className="recent">
          <h2>{copy.related}</h2>
          <div className="related-list">
            {related.map((item) => (
              <Link key={item.slug} href={`/tools/${item.slug}`}>
                <Portrait tool={item} size={40} />
                <span>{language === 'ar' ? item.nameAr : item.name}</span>
                <small>{language === 'ar' ? item.kickerAr : item.kicker}</small>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  );
}
