'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Download, LayoutGrid, MessageSquare, Sparkles, ArrowUpRight } from 'lucide-react';
import { getTool, studioTools } from '@/lib/catalog';
import { plans } from '@/lib/plans';
import { Portrait } from './tool-card';
import { Shell } from './shell';
import { ToolCard } from './tool-card';
import { InstallBar } from './install-bar';
import { useSite } from './provider';

export function HomeView() {
  const { copy, language } = useSite();
  const [room, setRoom] = useState<'chat' | 'studio'>('chat');
  const [face, setFace] = useState('general');
  const studio = studioTools();
  const lead = studio[0];
  const rest = studio.slice(1);
  const faces = [getTool('general'), getTool('hessa'), getTool('nouf'), getTool('lina')].filter((tool) => tool !== undefined);
  const active = getTool(face) ?? faces[0];
  return (
    <Shell>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <h1>{copy.heroTitle}</h1>
            <p className="lede">{copy.heroText}</p>
            <div className="actions">
              <Link className="btn btn-primary" href="/workspace">{copy.start}</Link>
              <Link className="btn btn-ghost" href="/tools">{copy.exploreTools}</Link>
            </div>
          </div>
          <InstallBar />
          <div className="hero-frame">
            <div className="mini-app">
              <aside className="mini-rail" aria-label={copy.navWorkspace}>
                <img src="/arrab-symbol.png" alt="" />
                <button type="button" className={room === 'chat' ? 'on' : ''} aria-label={copy.chatTitle} aria-pressed={room === 'chat'} onClick={() => setRoom('chat')}>
                  <MessageSquare size={16} />
                </button>
                <button type="button" className={room === 'studio' ? 'on' : ''} aria-label={copy.studioTitle} aria-pressed={room === 'studio'} onClick={() => setRoom('studio')}>
                  <Sparkles size={16} />
                </button>
                <Link href="/tools" aria-label={copy.navTools}><LayoutGrid size={16} /></Link>
                <Link href="/download" aria-label={copy.navDownload}><Download size={16} /></Link>
              </aside>
              <div className="mini-main">
                <div className="frame-bar">
                  <div className="segment" role="tablist" aria-label={copy.surfacesKicker}>
                    <button type="button" role="tab" aria-selected={room === 'chat'} className={room === 'chat' ? 'on' : ''} onClick={() => setRoom('chat')}>{copy.chatTitle}</button>
                    <button type="button" role="tab" aria-selected={room === 'studio'} className={room === 'studio' ? 'on' : ''} onClick={() => setRoom('studio')}>{copy.studioTitle}</button>
                  </div>
                  <i />
                  <Link href={room === 'studio' ? '/workspace?room=studio' : '/workspace'}>{copy.openPreview}</Link>
                </div>
                {room === 'chat' ? (
                  <>
                    <div className="mini-faces" role="tablist" aria-label={copy.navTools}>
                      {faces.map((tool) => (
                        <button key={tool.slug} type="button" role="tab" aria-selected={tool.slug === active?.slug} className={tool.slug === active?.slug ? 'on' : ''} onClick={() => setFace(tool.slug)}>
                          <Portrait tool={tool} size={44} />
                          <small>{language === 'ar' ? tool.nameAr : tool.name}</small>
                        </button>
                      ))}
                    </div>
                    <div className="frame-stage">
                      {active && <Portrait tool={active} size={52} />}
                      <p className="eyebrow">{copy.yourSpace}</p>
                      <h2>{copy.mind}</h2>
                      <p>{active ? (language === 'ar' ? active.blurbAr : active.blurb) : copy.mindSub}</p>
                      <div className="mini-suggest">
                        {copy.suggestions.slice(0, 2).map((item) => (
                          <Link key={item} href={`/workspace?companion=${active?.slug || 'general'}`}>{item}</Link>
                        ))}
                      </div>
                    </div>
                    <Link className="mini-composer" href={`/workspace?companion=${active?.slug || 'general'}`}>
                      <span>{copy.composer}</span>
                      <b><ArrowUpRight size={16} strokeWidth={1.75} /></b>
                    </Link>
                  </>
                ) : (
                  <div className="mini-studio">
                    {studio.slice(0, 4).map((tool) => (
                      <Link key={tool.slug} href={`/tools/${tool.slug}`}>
                        <Portrait tool={tool} size={40} />
                        <span>{language === 'ar' ? tool.nameAr : tool.name}</span>
                        <small>{language === 'ar' ? tool.kickerAr : tool.kicker}</small>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="section-head">
            <div>
              <p className="eyebrow">{copy.featuredKicker}</p>
              <h2>{copy.featuredTitle}</h2>
              <p>{copy.featuredText}</p>
            </div>
            <Link className="btn btn-ghost" href="/tools">
              {copy.allCompanions}
            </Link>
          </div>
          <div className="studio-grid">
            {lead && <ToolCard tool={lead} wide />}
            {rest.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>

        <section className="band steps">
          <p className="eyebrow">{copy.howKicker}</p>
          <h2>{copy.howTitle}</h2>
          <ol>
            {copy.steps.map(([title, text], index) => (
              <li key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="band split">
          <div>
            <p className="eyebrow">{copy.surfacesKicker}</p>
            <h2>{copy.surfacesTitle}</h2>
          </div>
          <div className="split-grid">
            <article>
              <h3>{copy.chatTitle}</h3>
              <p>{copy.chatText}</p>
              <Link href="/workspace">{copy.openChat}</Link>
            </article>
            <article>
              <h3>{copy.studioTitle}</h3>
              <p>{copy.studioText}</p>
              <Link href="/workspace?room=studio">{copy.openStudio}</Link>
            </article>
          </div>
        </section>

        <section className="band">
          <div className="section-head">
            <div>
              <p className="eyebrow">{copy.plansKicker}</p>
              <h2>{copy.plansHomeTitle}</h2>
              <p>{copy.plansHomeText}</p>
            </div>
            <Link className="btn btn-ghost" href="/plans">{copy.seePlans}</Link>
          </div>
          <div className="plan-grid home-plans">
            {plans.filter((plan) => plan.id === 'free' || plan.id === 'pro' || plan.id === 'family_plus').map((plan) => (
              <Link key={plan.id} className={plan.highlight ? 'plan highlight' : 'plan'} href="/plans">
                <div className="plan-top">
                  <h2>{language === 'ar' ? plan.nameAr : plan.name}</h2>
                  {plan.badge && <span className="pill">{language === 'ar' ? plan.badgeAr : plan.badge}</span>}
                </div>
                <p className="plan-price">
                  <strong>{new Intl.NumberFormat(language === 'ar' ? 'ar-SA' : 'en', { maximumFractionDigits: 0 }).format(plan.priceHalalas / 100)}</strong>
                  <span>{copy.perMonth}</span>
                </p>
                <p>{language === 'ar' ? plan.descriptionAr : plan.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="band download-band" id="install">
          <div>
            <p className="eyebrow">{copy.downloadKicker}</p>
            <h2>{copy.downloadTitle}</h2>
            <p>{copy.downloadText}</p>
          </div>
          <InstallBar />
        </section>
      </main>
    </Shell>
  );
}
