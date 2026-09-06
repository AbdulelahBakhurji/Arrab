import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  ChevronDown,
  Code2,
  Database,
  GitBranch,
  Languages,
  LockKeyhole,
  MessageSquare,
  Mic2,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Terminal,
  Wrench,
} from 'lucide-react';

const agents = [
  { name: 'Research', task: 'Saudi market scan', state: 'Complete' },
  { name: 'Strategy', task: 'Opportunity analysis', state: 'Working' },
  { name: 'Writer', task: 'Executive report', state: 'Queued' },
];

const pillars = [
  { icon: Bot, label: 'Create', text: 'Build specialized AI employees.' },
  { icon: Network, label: 'Connect', text: 'Bring in projects, knowledge, tools, and Git.' },
  { icon: BrainCircuit, label: 'Collaborate', text: 'Organize agents into coordinated teams.' },
  { icon: Code2, label: 'Build', text: 'Work with coding agents inside Arrab IDE.' },
  { icon: Wrench, label: 'Execute', text: 'Give approved agents a place to work.' },
  { icon: ShieldCheck, label: 'Control', text: 'Set permissions, memory, and approvals.' },
];

const useCases = [
  { icon: Search, number: '01', title: 'Research teams', text: 'Investigate topics, compare sources, analyze findings, and turn research into a clear report.' },
  { icon: Database, number: '02', title: 'Business teams', text: 'Shape AI roles around strategy, operations, marketing, support, planning, and internal knowledge.' },
  { icon: Code2, number: '03', title: 'Software teams', text: 'Bring architects, engineers, QA agents, reviewers, and Git into one software project.' },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Arrab home">
          <img src="/arrab-logo.png" alt="Arrab" />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#studio">Studio</a>
          <a href="#teams">AI teams</a>
          <a href="#ide">IDE</a>
          <a href="#arabic">العربية</a>
        </nav>
        <a className="header-cta" href="#early-access">
          Join early access <ArrowRight size={15} />
        </a>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><ChevronDown size={20} /></summary>
          <nav aria-label="Mobile navigation">
            <a href="#studio">Studio</a><a href="#teams">AI teams</a><a href="#ide">IDE</a><a href="#arabic">العربية</a><a href="#early-access">Join early access</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Arrab Studio · In development</p>
          <h1>Build your<br /><span>AI workforce.</span></h1>
          <p className="hero-lede">Create AI employees and multi-agent teams for coding, research, business, and more — all working inside one connected AI workspace.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#studio">Explore Arrab Studio <ArrowRight size={17} /></a>
            <a className="button button-secondary" href="#early-access">Join early access</a>
          </div>
          <div className="hero-note">
            <span><Check size={14} /> Specialized agents</span><span><Check size={14} /> Shared context</span><span><Check size={14} /> Human control</span>
          </div>
        </div>

        <div className="studio-frame" aria-label="Arrab Studio product concept">
          <div className="frame-topbar">
            <div className="frame-mark"><img src="/arrab-symbol.png" alt="" /></div><span>Project Atlas</span><div className="frame-status"><i /> 3 agents active</div>
          </div>
          <div className="frame-body">
            <aside className="frame-sidebar">
              <p>Workspace</p>
              {['Overview', 'Agents', 'Projects', 'Knowledge'].map((item, i) => <div className={i === 1 ? 'active' : ''} key={item}><span>{item.slice(0, 1)}</span>{item}</div>)}
            </aside>
            <div className="frame-main">
              <div className="frame-heading"><div><small>AI team</small><h2>Market Intelligence</h2></div><button>+ New agent</button></div>
              <div className="agent-stack">
                {agents.map((agent, i) => (
                  <article className="agent-row" key={agent.name} style={{ '--delay': `${i * 0.16}s` } as React.CSSProperties}>
                    <div className={`agent-avatar agent-${i + 1}`}><Sparkles size={16} /></div>
                    <div className="agent-info"><strong>{agent.name} Agent</strong><span>{agent.task}</span></div>
                    <div className={`agent-state state-${i}`}><i /> {agent.state}</div>
                  </article>
                ))}
              </div>
              <div className="handoff-line"><span>One goal</span><b>→</b><span>Specialists</span><b>→</b><span>Coordinated result</span></div>
            </div>
          </div>
          <div className="floating-command"><Sparkles size={15} /><span>Ask your entire workspace…</span><kbd>⌘ K</kbd></div>
        </div>
      </section>

      <section className="manifesto section" id="studio">
        <div className="section-tag">01 · Arrab Studio</div>
        <div className="manifesto-head">
          <h2>One workspace.<br />Multiple agents.<br /><span>Shared context.</span></h2>
          <div>
            <p>Arrab Studio is an AI-native workspace for creating and working with AI employees. Give every agent a role, the right context, and clear boundaries—then bring them together as a team.</p>
            <p className="quiet">More than AI chat. More than an IDE. A connected place for AI agents to work with you.</p>
          </div>
        </div>
        <div className="pillar-grid">
          {pillars.map(({ icon: Icon, label, text }, i) => (
            <article className="pillar" key={label}><div className="pillar-top"><Icon size={19} /><span>0{i + 1}</span></div><h3>{label}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="employees section">
        <div className="section-tag">02 · AI Employees</div>
        <div className="split-head">
          <h2>Give every agent<br />a real responsibility.</h2>
          <p>An AI Employee is a specialized agent with a persistent role, instructions, knowledge, memory, tools, and permissions. You stay in control of what it knows and what it can do.</p>
        </div>
        <div className="employee-builder">
          <div className="builder-prompt">
            <span className="prompt-label"><Sparkles size={15} /> Build through conversation</span>
            <blockquote>“Create a research agent that specializes in the Saudi technology market and reports to me in Arabic.”</blockquote>
            <div className="prompt-footer"><span>Arrab will propose a configuration</span><ArrowRight size={18} /></div>
          </div>
          <div className="agent-config">
            <div className="config-head"><div className="big-avatar"><Search size={22} /></div><div><small>AI Employee</small><strong>Saudi Tech Researcher</strong></div><span>Draft</span></div>
            <div className="config-row"><span>Role</span><b>Market Research Specialist</b></div>
            <div className="config-row"><span>Language</span><b>Arabic + English</b></div>
            <div className="config-row"><span>Project</span><b>Saudi Expansion</b></div>
            <div className="config-chips"><span>Web research</span><span>Company knowledge</span><span>Memory</span></div>
          </div>
        </div>
      </section>

      <section className="teams section" id="teams">
        <div className="section-tag">03 · Multi-agent teams</div>
        <div className="split-head">
          <h2>Don’t ask one AI<br />to do everything.</h2>
          <p>Create specialists. Give each agent a clear responsibility, then let them hand work to the right teammate inside the same project.</p>
        </div>
        <div className="team-map">
          <div className="team-goal"><small>YOUR GOAL</small><strong>Analyze this market and give me a strategic report.</strong></div>
          <div className="team-rail" aria-hidden="true" />
          <div className="team-nodes">
            {['Research Agent', 'Market Analyst', 'Strategy Agent', 'Report Writer'].map((name, i) => (
              <article key={name}><span>0{i + 1}</span><div><small>{i === 0 ? 'Discover' : i === 1 ? 'Analyze' : i === 2 ? 'Decide' : 'Deliver'}</small><strong>{name}</strong></div><Check size={15} /></article>
            ))}
          </div>
          <div className="team-result"><Check size={18} /><div><small>COORDINATED RESULT</small><strong>Strategic market report ready</strong></div></div>
        </div>
      </section>

      <section className="workspace section">
        <div className="workspace-grid">
          <div className="workspace-copy">
            <div className="section-tag">04 · Shared context</div>
            <h2>Chat with your<br />entire workspace.</h2>
            <p>Your agents shouldn’t live in disconnected conversations. Arrab brings approved project context into one environment, so work can move forward without constant copy and paste.</p>
            <div className="context-list">
              {['Projects', 'Agents', 'Files', 'Knowledge', 'Memory', 'Git', 'Tasks', 'Tools'].map(item => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div className="chat-card">
            <div className="chat-top"><MessageSquare size={17} /><span>Ask Arrab</span><small>Project Atlas</small></div>
            <div className="user-message">What did the research team find?</div>
            <div className="arrab-message"><img src="/arrab-symbol.png" alt="" /><div><strong>Arrab</strong><p>The team identified three high-potential segments. The Strategy Agent is comparing market entry paths now.</p><div className="source-row"><span>Research output</span><span>Strategy brief</span><span>2 project files</span></div></div></div>
            <div className="chat-input"><Sparkles size={15} /><span>Ask about your project…</span><ArrowRight size={15} /></div>
          </div>
        </div>
      </section>

      <section className="ide section" id="ide">
        <div className="section-tag">05 · Arrab IDE</div>
        <div className="split-head">
          <h2>Built to build.</h2>
          <p>Arrab IDE brings AI conversation, code, files, Git, and development environments together. Coding agents can understand the project around the prompt.</p>
        </div>
        <div className="ide-window">
          <div className="ide-top"><span className="window-dots"><i /><i /><i /></span><strong>arrab-platform</strong><span>main</span></div>
          <div className="ide-grid">
            <aside><p>EXPLORER</p>{['app', 'components', 'agents', 'lib', 'package.json'].map((f,i)=><span className={i===2?'file-active':''} key={f}>{i<4?'⌄':'#'} {f}</span>)}</aside>
            <div className="code-pane"><div className="code-tabs"><span>agent.ts</span><span>orchestrator.ts</span></div><pre><code><em>export async function</em> orchestrate(goal) {'{'}
  <i>const</i> team = <b>await</b> project.agents.select(goal)

  <i>const</i> result = <b>await</b> team.coordinate({'{'}
    context: project.context,
    approvals: <u>true</u>
  {'}'})

  <em>return</em> result
{'}'}</code></pre></div>
            <div className="ide-agent"><div className="ide-agent-head"><Sparkles size={15} /><strong>Coding Agent</strong><span>Working</span></div><p>I’ve inspected the repository and prepared a plan. No files will change until you approve.</p><div className="ide-plan"><span><Check size={13} /> Understand repository</span><span><Check size={13} /> Plan change</span><span className="current"><i /> Await approval</span><span>○ Modify and test</span></div><button>Review plan <ArrowRight size={14} /></button></div>
          </div>
          <div className="ide-terminal"><Terminal size={14} /><span>Tests</span><b>24 passed</b><span>Git</span><b>Clean</b></div>
        </div>
      </section>

      <section className="use-cases section">
        <div className="section-tag">06 · Shape it around your work</div>
        <div className="split-head"><h2>One platform.<br />Many ways to work.</h2><p>Start with one specialist or design an entire AI team around your project, company, or craft.</p></div>
        <div className="use-grid">{useCases.map(({icon:Icon,number,title,text})=><article key={title}><div><Icon size={22}/><span>{number}</span></div><h3>{title}</h3><p>{text}</p><ArrowRight size={18}/></article>)}</div>
      </section>

      <section className="arabic section" id="arabic">
        <div className="arabic-grid">
          <div className="arabic-copy" dir="rtl">
            <div className="section-tag">07 · العربية من الأساس</div>
            <h2>الذكاء الاصطناعي<br /><span>للعمل العربي.</span></h2>
            <p>نبني عرّاب ليعمل بشكل طبيعي مع المستخدم العربي، من المحادثات اليومية إلى الأعمال والبحث والبرمجة.</p>
            <div className="dialects"><span>العربية السعودية</span><span>الخليجية</span><span>الفصحى</span><span>عربي + English</span></div>
          </div>
          <div className="arabic-prompt" dir="rtl">
            <small>تحدث بطريقتك</small>
            <blockquote>سو لي research agent يركز على السوق السعودي وبعدين خله يرسل النتائج للـ business agent.</blockquote>
            <div className="arabic-flow" dir="ltr"><span>Research</span><ArrowRight size={15}/><span>Business</span><ArrowRight size={15}/><span dir="rtl">النتيجة</span></div>
          </div>
        </div>
      </section>

      <section className="voice section">
        <div className="voice-orb"><img src="/arrab-symbol.png" alt="" /><span className="orb-ring ring-one"/><span className="orb-ring ring-two"/><Mic2 size={24}/></div>
        <div className="voice-copy">
          <div className="section-tag">08 · Arrab Voice · In development</div>
          <h2>More than an assistant.<br /><span>Your personal AI mentor.</span></h2>
          <p>Talk naturally with an AI designed to understand your goals, challenge your thinking, help you make sense of difficult moments, and grow with you over time—with your permission.</p>
          <div className="voice-roles"><span>Mentor</span><span>Advisor</span><span>Assistant</span><span>Thinking partner</span><span>Listener</span></div>
        </div>
      </section>

      <section className="control section">
        <div className="control-copy"><div className="section-tag">09 · Human control</div><h2>Powerful agents.<br />Clear boundaries.</h2><p>You decide what every agent can see, use, and change—and which actions require your approval. Arrab is being designed for transparent, controlled execution.</p></div>
        <div className="permission-card">
          <div className="permission-head"><LockKeyhole size={19}/><div><small>Permissions</small><strong>Software Engineer</strong></div><span>Project Atlas</span></div>
          {[['Read project files','Allowed'],['Edit source code','Approval required'],['Use Git','Approval required'],['Access production','Not allowed']].map(([a,b],i)=><div className="permission-row" key={a}><span>{a}</span><b className={`permission-${i}`}>{b}</b></div>)}
          <div className="control-note"><ShieldCheck size={16}/> You set the goal. You set the boundaries.</div>
        </div>
      </section>

      <section className="early-access section" id="early-access">
        <img src="/arrab-symbol.png" alt="" />
        <div className="section-tag">Arrab · Early access</div>
        <h2>Build the team<br />you wish you had.</h2>
        <p>One agent or an entire AI team. Arrab Studio is in development.</p>
        <a className="button button-primary" href="#top">Follow the Arrab journey <ArrowRight size={17}/></a>
        <p className="arabic-line" dir="rtl">ابنِ فريق الذكاء الاصطناعي الذي تحتاجه.</p>
      </section>

      <footer><a className="brand" href="#top"><img src="/arrab-logo.png" alt="Arrab"/></a><p>AI agents need a team, a project, and a place to work.</p><span>© 2026 Arrab</span></footer>
    </main>
  );
}
