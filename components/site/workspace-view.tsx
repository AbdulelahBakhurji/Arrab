'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Brain,
  CheckSquare,
  LayoutGrid,
  MessageSquare,
  Plus,
  Settings,
  Sparkles,
  UserRound,
  ArrowUp,
} from 'lucide-react';
import { getTool, studioTools, tools, type Tool } from '@/lib/catalog';
import { Shell } from './shell';
import { Portrait, ToolCard } from './tool-card';
import { useSite } from './provider';

type Line = { id: string; role: 'user' | 'notice'; text: string };

export function WorkspaceView() {
  const { copy, language } = useSite();
  const params = useSearchParams();
  const initialRoom = params.get('room') === 'studio' ? 'studio' : 'chat';
  const initialCompanion = params.get('companion');
  const [room, setRoom] = useState<'chat' | 'studio'>(initialRoom);
  const [mode, setMode] = useState<'personal' | 'professional'>(initialRoom === 'studio' ? 'professional' : 'personal');
  const [active, setActive] = useState(initialCompanion || 'general');
  const [draft, setDraft] = useState('');
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    setRoom(initialRoom);
    if (initialCompanion && getTool(initialCompanion)) setActive(initialCompanion);
  }, [initialCompanion, initialRoom]);

  const chatTools = useMemo(
    () => tools.filter((tool) => (mode === 'professional' ? tool.group === 'studio' : tool.group !== 'studio')),
    [mode],
  );
  const current = getTool(active) ?? chatTools[0] ?? tools[0];
  const name = language === 'ar' ? current.nameAr : current.name;

  function submit() {
    const text = draft.trim();
    if (!text) return;
    setLines((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: 'user', text },
      { id: crypto.randomUUID(), role: 'notice', text: copy.notice },
    ]);
    setDraft('');
  }

  return (
    <Shell>
      <main className="workspace">
        <p className="preview-banner">{copy.workspaceNote}</p>
        <div className="app-shell">
          <aside className="rail" aria-label="Arrab">
            <img src="/arrab-symbol.png" alt="" />
            <button type="button" className={room === 'chat' ? 'on' : ''} onClick={() => setRoom('chat')} aria-pressed={room === 'chat'}>
              <MessageSquare size={20} strokeWidth={1.5} />
              <span>{copy.railChat}</span>
            </button>
            <button type="button" className={room === 'studio' ? 'on' : ''} onClick={() => setRoom('studio')} aria-pressed={room === 'studio'}>
              <Sparkles size={20} strokeWidth={1.5} />
              <span>{copy.railStudio}</span>
            </button>
            <Link href="/tools">
              <LayoutGrid size={20} strokeWidth={1.5} />
              <span>{copy.navTools}</span>
            </Link>
            <span className="rail-gap" />
            {[Brain, CheckSquare, UserRound, Settings].map((Icon, index) => (
              <button key={index} type="button" disabled title={copy.railSoon}>
                <Icon size={20} strokeWidth={1.5} />
                <span>{copy.coming}</span>
              </button>
            ))}
          </aside>
          {room === 'chat' ? (
            <section className="chat-room" aria-label={copy.chatTitle}>
              <header className="chat-head">
                <div>
                  <p className="eyebrow">Arrab</p>
                  <h1>{copy.chatTitle}</h1>
                </div>
                <div className="segment" role="tablist">
                  <button type="button" role="tab" aria-selected={mode === 'personal'} className={mode === 'personal' ? 'on' : ''} onClick={() => setMode('personal')}>
                    {copy.personal}
                  </button>
                  <button type="button" role="tab" aria-selected={mode === 'professional'} className={mode === 'professional' ? 'on' : ''} onClick={() => setMode('professional')}>
                    {copy.professional}
                  </button>
                </div>
              </header>
              <div className="companion-row">
                {chatTools.slice(0, 8).map((tool) => (
                  <button key={tool.slug} type="button" className={tool.slug === current.slug ? 'face on' : 'face'} onClick={() => { setActive(tool.slug); setLines([]); }}>
                    <Portrait tool={tool} size={52} />
                    <span>{language === 'ar' ? tool.nameAr : tool.name}</span>
                  </button>
                ))}
                <Link className="face add" href="/tools" title={copy.addCompanion}>
                  <Plus size={18} strokeWidth={1.5} />
                  <span>{copy.navTools}</span>
                </Link>
              </div>
              <div className="thread">
                {lines.length === 0 ? (
                  <div className="empty-mind">
                    <Portrait tool={current} size={64} />
                    <p className="eyebrow">{copy.yourSpace}</p>
                    <h2>{copy.mind}</h2>
                    <p>{copy.mindSub}</p>
                    <div className="suggest">
                      {copy.suggestions.map((item) => (
                        <button key={item} type="button" onClick={() => setDraft(item)}>
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <ol>
                    {lines.map((line) => (
                      <li key={line.id} className={line.role}>
                        {line.text}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
              <form
                className="composer"
                onSubmit={(event) => {
                  event.preventDefault();
                  submit();
                }}
              >
                <label className="sr-only" htmlFor="composer">
                  {copy.composer}
                </label>
                <textarea
                  id="composer"
                  rows={1}
                  value={draft}
                  placeholder={copy.composer}
                  onChange={(event) => setDraft(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' && !event.shiftKey) {
                      event.preventDefault();
                      submit();
                    }
                  }}
                />
                <button type="submit" aria-label={copy.send} disabled={!draft.trim()}>
                  <ArrowUp size={18} strokeWidth={1.75} />
                </button>
              </form>
              <div className="composer-meta">
                <span>{copy.enterHint}</span>
                <span>
                  {name} {copy.willAnswer}
                </span>
              </div>
            </section>
          ) : (
            <section className="studio-room" aria-label={copy.studioTitle}>
              <header className="chat-head">
                <div>
                  <p className="eyebrow">Arrab / Studio</p>
                  <h1>{copy.studioTitle}</h1>
                  <p>{copy.studioLead}</p>
                </div>
              </header>
              <div className="studio-grid in-app">
                {studioTools().map((tool: Tool) => (
                  <ToolCard key={tool.slug} tool={tool} wide={tool.slug === 'arrab-assistant'} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </Shell>
  );
}
