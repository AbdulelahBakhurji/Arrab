'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Bot, BrainCircuit, Check, Code2, Compass, GitBranch, HeartHandshake, Languages, LockKeyhole, Mail, Menu, MessageSquare, Mic2, Moon, Network, ShieldCheck, Sparkles, Sun, Terminal, X } from 'lucide-react';

type View = 'home' | 'studio' | 'voice';
type Language = 'en' | 'ar';

const homeCopy = {
  en: {
    overline: 'Two products. One Arrab.', title: 'AI for your work.\nAI for your life.', intro: 'Arrab is building two connected AI experiences: a workspace for intelligent teams, and a personal voice mentor designed to understand you over time.', choose: 'Choose an experience', studioLabel: 'For work', studioTitle: 'Arrab Studio', studioText: 'Build AI employees and multi-agent teams that work across projects, knowledge, tools, and code.', studioCta: 'Explore Studio', voiceLabel: 'For life', voiceTitle: 'Arrab Voice', voiceText: 'Talk with a personal AI mentor that helps you think, decide, grow, and get things done.', voiceCta: 'Explore Voice', inDevelopment: 'In development', studioPoints: ['AI Employees', 'Multi-agent teams', 'Arrab IDE'], voicePoints: ['Personal mentor', 'Thinking partner', 'Natural conversation'],
  },
  ar: {
    overline: 'منتجان. عرّاب واحد.', title: 'ذكاء لعملك.\nوذكاء لحياتك.', intro: 'نبني في عرّاب تجربتين مترابطتين: مساحة عمل لفرق الذكاء الاصطناعي، ومرشدًا صوتيًا شخصيًا يفهمك أكثر مع الوقت.', choose: 'اختر تجربتك', studioLabel: 'للعمل', studioTitle: 'عرّاب ستوديو', studioText: 'ابنِ موظفين وفرقًا من وكلاء الذكاء الاصطناعي يعملون عبر المشاريع والمعرفة والأدوات والبرمجة.', studioCta: 'اكتشف عرّاب ستوديو', voiceLabel: 'للحياة', voiceTitle: 'عرّاب فويس', voiceText: 'تحدث مع مرشد ذكاء اصطناعي شخصي يساعدك على التفكير واتخاذ القرار والتطور وإنجاز مهامك.', voiceCta: 'اكتشف عرّاب فويس', inDevelopment: 'قيد التطوير', studioPoints: ['موظفو ذكاء اصطناعي', 'فرق متعددة الوكلاء', 'بيئة عرّاب البرمجية'], voicePoints: ['مرشد شخصي', 'شريك في التفكير', 'محادثة طبيعية'],
  },
};

function Header({ language, setLanguage, dark, setDark }: { language: Language; setLanguage: (language: Language) => void; dark: boolean; setDark: (dark: boolean) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = language === 'en' ? { home: 'Home', studio: 'Studio', voice: 'Voice', contact: 'Contact' } : { home: 'الرئيسية', studio: 'ستوديو', voice: 'فويس', contact: 'تواصل معنا' };
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Arrab home"><img src="/arrab-logo.png" alt="Arrab" /></a>
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="/">{nav.home}</a><a href="/studio">{nav.studio}</a><a href="/voice">{nav.voice}</a></nav>
      <div className="header-actions">
        <a className="contact-link" href="mailto:info@arrabai.com"><Mail size={16} /><span>{nav.contact}</span></a>
        <button className="icon-button" onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} aria-label={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'} title={language === 'en' ? 'العربية' : 'English'}><Languages size={18} /></button>
        <button className="icon-button" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} title={dark ? 'Light theme' : 'Dark theme'}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
      {menuOpen && <nav className="mobile-menu"><a href="/">{nav.home}</a><a href="/studio">{nav.studio}</a><a href="/voice">{nav.voice}</a><a href="mailto:info@arrabai.com">{nav.contact}</a></nav>}
    </header>
  );
}

function HomeView({ language }: { language: Language }) {
  const copy = homeCopy[language];
  const ui = language === 'en' ? { project: 'Project Atlas', research: 'Research Agent', scan: 'Market scan', strategy: 'Strategy Agent', analyzing: 'Analyzing', writer: 'Report Writer', queued: 'Queued', talk: 'Just talk.' } : { project: 'مشروع أطلس', research: 'وكيل البحث', scan: 'دراسة السوق', strategy: 'وكيل الاستراتيجية', analyzing: 'جاري التحليل', writer: 'كاتب التقارير', queued: 'في الانتظار', talk: 'تحدث بطبيعتك.' };
  return (
    <main className="home-page"><section className="home-hero">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <div className="home-intro"><p className="overline"><span /> {copy.overline}</p><h1>{copy.title.split('\n').map((line, index) => <span key={line} className={index === 1 ? 'muted-line' : ''}>{line}</span>)}</h1><p className="intro-copy">{copy.intro}</p></div>
      <div className="product-heading"><span>{copy.choose}</span><i /></div>
      <div className="product-grid">
        <a className="product-card studio-card" href="/studio">
          <div className="product-card-top"><span className="product-kind"><Code2 size={16} /> {copy.studioLabel}</span><span className="status-dot"><i /> {copy.inDevelopment}</span></div>
          <div className="studio-visual"><div className="visual-bar"><img src="/arrab-symbol.png" alt="" /><span>{ui.project}</span><i /></div><div className="visual-body"><div className="visual-rail"><span /><span /><span /></div><div className="agent-list"><article><Bot size={15}/><div><b>{ui.research}</b><small>{ui.scan}</small></div><Check size={13}/></article><article><Network size={15}/><div><b>{ui.strategy}</b><small>{ui.analyzing}</small></div><i /></article><article><Sparkles size={15}/><div><b>{ui.writer}</b><small>{ui.queued}</small></div><span>03</span></article></div></div></div>
          <div className="product-copy"><div><span className="card-number">01</span><h2>{copy.studioTitle}</h2></div><p>{copy.studioText}</p><div className="product-points">{copy.studioPoints.map(point => <span key={point}>{point}</span>)}</div><strong>{copy.studioCta} <ArrowRight size={18}/></strong></div>
        </a>
        <a className="product-card voice-card" href="/voice">
          <div className="product-card-top"><span className="product-kind"><Mic2 size={16} /> {copy.voiceLabel}</span><span className="status-dot"><i /> {copy.inDevelopment}</span></div>
          <div className="voice-visual"><div className="voice-orb"><img src="/arrab-symbol.png" alt=""/><span className="wave wave-one"/><span className="wave wave-two"/><Mic2 size={18}/></div><div className="voice-caption"><MessageSquare size={14}/><span>{ui.talk}</span></div></div>
          <div className="product-copy"><div><span className="card-number">02</span><h2>{copy.voiceTitle}</h2></div><p>{copy.voiceText}</p><div className="product-points">{copy.voicePoints.map(point => <span key={point}>{point}</span>)}</div><strong>{copy.voiceCta} <ArrowRight size={18}/></strong></div>
        </a>
      </div>
    </section></main>
  );
}

const detailCopy = {
  en: {
    back: 'Back to products', contact: 'Contact us', inDevelopment: 'In development',
    studio: {
      eyebrow: 'Arrab Studio', title: 'Build your AI workforce.', intro: 'Create specialized AI employees, connect them to your projects, and organize them into teams that can collaborate on real work.', primary: 'Start a conversation', secondary: 'Meet Arrab Voice',
      employees: 'AI Employees', employeesText: 'Give each agent a persistent role, clear goals, dedicated knowledge, memory, tools, and permissions.', teams: 'AI Teams', teamsText: 'Let specialized agents divide the work, share project context, and hand results to the right teammate.',
      shared: 'One workspace. Shared context.', sharedText: 'Projects, conversations, files, knowledge, memory, Git, tools, and agent activity stay connected around the work.',
      ide: 'Arrab IDE', ideTitle: 'AI that understands the project — not just the prompt.', ideText: 'Bring coding agents into real software projects with files, code, Git, tests, reviews, and controlled execution environments.',
      control: 'Human control', controlTitle: 'You set the goal. You set the boundaries.', controlText: 'Choose what agents can see, use, and modify. Important actions can stay behind your approval.', cta: 'Build the team you wish you had.', ctaText: 'Arrab Studio is currently in development. Talk with us about early access.',
    },
    voice: {
      eyebrow: 'Arrab Voice', title: 'Your personal AI mentor for life.', intro: 'An AI built to understand you—not just answer you. Talk naturally, think more clearly, and move forward with an AI that grows with your journey.', primary: 'Talk with us', secondary: 'Meet Arrab Studio',
      knows: 'An AI that knows you', knowsText: 'With your permission, Arrab can understand your goals, habits, projects, challenges, and what matters to you.', honest: 'Honest by design', honestText: 'A useful mentor should not agree with every idea. Arrab can question assumptions and challenge your reasoning with care.', thinking: 'Your thinking partner', thinkingText: 'Talk through difficult decisions, examine different perspectives, and reach your own conclusion with greater clarity.', heavy: 'When life gets heavy', heavyText: 'Sometimes you need advice. Sometimes perspective. Sometimes you simply need somewhere to talk.',
      roles: 'One AI. Many roles.', rolesText: 'Mentor when you need direction. Advisor when you face a decision. Assistant when something needs to get done.',
      arabic: 'Arabic from the foundation', arabicText: 'Arrab Voice is being designed for the language, dialects, culture, expressions, and natural way Arabic speakers communicate—including conversations that move between Arabic and English.',
      yours: 'It understands you through conversation.', yoursText: 'There is nothing to configure. Talk naturally, and Arrab learns how to support your thinking, when to challenge you, and when to simply listen.',
    },
  },
  ar: {
    back: 'العودة للمنتجات', contact: 'تواصل معنا', inDevelopment: 'قيد التطوير',
    studio: {
      eyebrow: 'عرّاب ستوديو', title: 'ابنِ فريق الذكاء الاصطناعي الخاص بك.', intro: 'أنشئ موظفين متخصصين من الذكاء الاصطناعي، واربطهم بمشاريعك، ونظّمهم في فرق تتعاون على عمل حقيقي.', primary: 'ابدأ محادثة', secondary: 'تعرّف على عرّاب فويس',
      employees: 'موظفو الذكاء الاصطناعي', employeesText: 'امنح كل وكيل دورًا مستمرًا وأهدافًا واضحة ومعرفة وذاكرة وأدوات وصلاحيات مخصصة.', teams: 'فرق الذكاء الاصطناعي', teamsText: 'دع الوكلاء المتخصصين يقسّمون العمل ويتشاركون سياق المشروع ويسلّمون النتائج للزميل المناسب.',
      shared: 'مساحة واحدة. سياق مشترك.', sharedText: 'المشاريع والمحادثات والملفات والمعرفة والذاكرة وGit والأدوات ونشاط الوكلاء تبقى مترابطة حول العمل.',
      ide: 'بيئة عرّاب البرمجية', ideTitle: 'ذكاء يفهم المشروع، وليس الطلب فقط.', ideText: 'أدخل وكلاء البرمجة إلى مشاريع حقيقية تشمل الملفات والكود وGit والاختبارات والمراجعة وبيئات تنفيذ محكومة.',
      control: 'تحكم بشري', controlTitle: 'أنت تحدد الهدف. وأنت تضع الحدود.', controlText: 'اختر ما يمكن للوكلاء رؤيته واستخدامه وتعديله، واجعل الإجراءات المهمة مرتبطة بموافقتك.', cta: 'ابنِ الفريق الذي تمنيت وجوده.', ctaText: 'عرّاب ستوديو قيد التطوير حاليًا. تواصل معنا لمعرفة المزيد عن الوصول المبكر.',
    },
    voice: {
      eyebrow: 'عرّاب فويس', title: 'مرشدك الشخصي بالذكاء الاصطناعي.', intro: 'ذكاء صُمم ليفهمك، لا ليجيبك فقط. تحدث بطبيعتك، وفكّر بوضوح، وتقدم مع ذكاء ينمو مع رحلتك.', primary: 'تحدث معنا', secondary: 'تعرّف على عرّاب ستوديو',
      knows: 'ذكاء يعرفك', knowsText: 'بإذنك، يستطيع عرّاب فهم أهدافك وعاداتك ومشاريعك وتحدياتك وما يهمك حقًا.', honest: 'صادق بطبيعته', honestText: 'المرشد المفيد لا يوافق على كل فكرة. يستطيع عرّاب مساءلة افتراضاتك وتحدي تفكيرك باهتمام.', thinking: 'شريكك في التفكير', thinkingText: 'ناقش القرارات الصعبة، وانظر إلى زوايا مختلفة، واصل إلى قرارك بوضوح أكبر.', heavy: 'عندما تثقل الحياة', heavyText: 'أحيانًا تحتاج نصيحة، وأحيانًا منظورًا مختلفًا، وأحيانًا تحتاج فقط إلى من تتحدث معه.',
      roles: 'ذكاء واحد. أدوار عديدة.', rolesText: 'مرشد عندما تحتاج الاتجاه، ومستشار أمام القرار، ومساعد عندما تحتاج إلى إنجاز أمر.',
      arabic: 'العربية من الأساس', arabicText: 'نصمم عرّاب فويس للغة العربية ولهجاتها وثقافتها وتعبيراتها وطريقة أهلها الطبيعية في الحديث، بما في ذلك التنقل بين العربية والإنجليزية.',
      yours: 'يفهمك من خلال الحديث.', yoursText: 'لا تحتاج إلى اختيار أسلوب أو ضبط إعدادات. تحدث بطبيعتك، ومع الوقت يفهم عرّاب كيف يساعدك، ومتى يتحدّى تفكيرك، ومتى يكتفي بالاستماع.',
    },
  },
};

function DetailTop({ language, product }: { language: Language; product: 'studio' | 'voice' }) {
  const copy = detailCopy[language];
  return <div className="detail-top"><a href="/"><ArrowRight size={15}/>{copy.back}</a><span><i/>{copy.inDevelopment}</span></div>;
}

function StudioView({ language }: { language: Language }) {
  const c = detailCopy[language]; const copy = c.studio;
  return <main className="detail-page studio-page">
    <section className="detail-hero studio-detail-hero"><DetailTop language={language} product="studio"/><div className="detail-hero-grid"><div><p className="overline"><Code2 size={15}/>{copy.eyebrow}</p><h1>{copy.title}</h1><p>{copy.intro}</p><div className="detail-actions"><a className="primary-button" href="mailto:info@arrabai.com">{copy.primary}<Mail size={16}/></a><a className="secondary-button" href="/voice">{copy.secondary}<ArrowRight size={16}/></a></div></div><StudioDemo language={language}/></div></section>
    <section className="detail-section"><div className="section-label">01 · {copy.employees}</div><div className="two-feature"><article><Bot size={24}/><span>01</span><h2>{copy.employees}</h2><p>{copy.employeesText}</p><div className="feature-tags"><b>Role</b><b>Knowledge</b><b>Memory</b><b>Tools</b></div></article><article><Network size={24}/><span>02</span><h2>{copy.teams}</h2><p>{copy.teamsText}</p><div className="mini-flow"><b>Research</b><ArrowRight size={14}/><b>Analyze</b><ArrowRight size={14}/><b>Deliver</b></div></article></div></section>
    <section className="context-section"><div><div className="section-label">02 · Shared context</div><h2>{copy.shared}</h2><p>{copy.sharedText}</p></div><div className="context-orbit"><span>Projects</span><span>Agents</span><span>Files</span><span>Knowledge</span><span>Memory</span><span>Git</span><span>Tools</span><strong><img src="/arrab-symbol.png" alt=""/></strong></div></section>
    <section className="detail-section ide-feature"><div className="ide-copy"><div className="section-label">03 · {copy.ide}</div><h2>{copy.ideTitle}</h2><p>{copy.ideText}</p></div><div className="code-window"><div><i/><i/><i/><span>agent.ts</span></div><pre><code><em>const</em> team = <b>await</b> project.agents.select(goal){'\n\n'}<em>const</em> result = <b>await</b> team.coordinate({'{'}{'\n'}  context: project.context,{'\n'}  approvals: <u>true</u>{'\n'}{'}'})</code></pre><footer><Terminal size={14}/><span>Tests</span><b>24 passed</b><GitBranch size={14}/><span>main</span></footer></div></section>
    <section className="control-band"><div><div className="section-label">04 · {copy.control}</div><h2>{copy.controlTitle}</h2><p>{copy.controlText}</p></div><div className="permissions"><div><LockKeyhole size={18}/><strong>Agent permissions</strong></div><span><b>Read project files</b><i>Allowed</i></span><span><b>Edit source code</b><i>Approval required</i></span><span><b>Access production</b><i>Not allowed</i></span></div></section>
    <ProductCta language={language} title={copy.cta} text={copy.ctaText}/>
  </main>;
}

function StudioDemo({ language }: { language: Language }) {
  const ui = language === 'en' ? { project:'Project Atlas', active:'3 agents active', team:'AI TEAM', title:'Market Intelligence', context:'Project context connected', agents:[['Research Agent','Complete'],['Strategy Agent','Working'],['Report Writer','Queued']] } : { project:'مشروع أطلس', active:'٣ وكلاء نشطون', team:'فريق الذكاء الاصطناعي', title:'استخبارات السوق', context:'مرتبط بسياق المشروع', agents:[['وكيل البحث','مكتمل'],['وكيل الاستراتيجية','يعمل'],['كاتب التقرير','في الانتظار']] };
  return <div className="studio-demo"><div className="demo-head"><img src="/arrab-symbol.png" alt=""/><span>{ui.project}</span><i/>{ui.active}</div><div className="demo-content"><aside>{['O','A','P','K'].map((x,i)=><span className={i===1?'on':''} key={x}>{x}</span>)}</aside><div><small>{ui.team}</small><h3>{ui.title}</h3>{ui.agents.map(([name,state],i)=><article key={name}><span>0{i+1}</span><div><b>{name}</b><small>{ui.context}</small></div><i className={`state-${i}`}/>{state}</article>)}</div></div></div>;
}

function VoiceView({ language }: { language: Language }) {
  const c = detailCopy[language]; const copy = c.voice;
  const ui = language === 'en' ? {
    private: 'Private by design', live: 'Listening', prompt: 'What is taking most of your attention today?', reply: 'I need to make a difficult decision.', clarity: 'Let’s separate what is urgent from what is important.', designed: 'Designed around you', manyRoles: 'Adapts to the moment', language: 'Arabic & English', personal: 'Learns through dialogue', contact: 'Follow Arrab Voice',
  } : {
    private: 'الخصوصية أولاً', live: 'يستمع إليك', prompt: 'ما أكثر شيء يشغل تفكيرك اليوم؟', reply: 'أحتاج إلى اتخاذ قرار صعب.', clarity: 'لنفرّق أولاً بين ما هو عاجل وما هو مهم.', designed: 'مصمم من أجلك', manyRoles: 'يتكيّف مع اللحظة', language: 'العربية والإنجليزية', personal: 'يتعلم من الحوار', contact: 'تابع عرّاب فويس',
  };
  const features = [{icon:BrainCircuit,title:copy.knows,text:copy.knowsText},{icon:ShieldCheck,title:copy.honest,text:copy.honestText},{icon:Compass,title:copy.thinking,text:copy.thinkingText},{icon:HeartHandshake,title:copy.heavy,text:copy.heavyText}];
  return <main className="detail-page voice-page"><section className="detail-hero voice-detail-hero"><DetailTop language={language} product="voice"/><div className="detail-hero-grid"><div className="voice-hero-copy"><p className="overline"><Mic2 size={15}/>{copy.eyebrow}</p><h1>{copy.title}</h1><p>{copy.intro}</p><div className="detail-actions"><a className="primary-button" href="mailto:info@arrabai.com">{copy.primary}<Mail size={16}/></a><a className="secondary-button" href="/studio">{copy.secondary}<ArrowRight size={16}/></a></div><div className="trust-row"><span><ShieldCheck size={15}/>{ui.private}</span><span><Languages size={15}/>{ui.language}</span></div></div><div className="voice-console" aria-label="Arrab Voice conversation preview"><div className="voice-console-head"><span><img src="/arrab-symbol.png" alt=""/>Arrab Voice</span><i/>{ui.live}</div><div className="voice-conversation"><p className="arrab-line"><span>A</span>{ui.prompt}</p><p className="user-line">{ui.reply}</p><p className="arrab-line"><span>A</span>{ui.clarity}</p></div><div className="voice-input"><Mic2 size={18}/><div className="audio-wave" aria-hidden="true">{[8,15,22,12,28,18,10,24,16,7,19,12].map((height,i)=><i key={i} style={{height}}/>)}</div><strong>{ui.live}</strong></div></div></div></section>
    <section className="detail-section voice-features"><div className="section-intro"><div className="section-label">01 · {ui.designed}</div><h2>{ui.designed}</h2></div><div className="voice-feature-grid">{features.map(({icon:Icon,title,text},i)=><article key={title}><div><Icon size={20}/><span>0{i+1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="roles-band"><div><div className="section-label">02 · {ui.manyRoles}</div><h2>{copy.roles}</h2><p>{copy.rolesText}</p></div><div className="role-list">{['Mentor','Advisor','Assistant','Thinking partner','Teacher','Listener'].map((role,i)=><span key={role}><i>0{i+1}</i>{language==='ar'?['مرشد','مستشار','مساعد','شريك تفكير','معلّم','مستمع'][i]:role}<ArrowRight size={14}/></span>)}</div></section>
    <section className="voice-split"><article><Languages size={22}/><div className="section-label">03 · {ui.language}</div><h2>{copy.arabic}</h2><p>{copy.arabicText}</p><div className="language-pair"><b>العربية</b><span>+</span><b>English</b></div></article><article><MessageSquare size={22}/><div className="section-label">04 · {ui.personal}</div><h2>{copy.yours}</h2><p>{copy.yoursText}</p><div className="learning-flow">{(language==='ar'?['يستمع','يفهم','يتكيّف']:['Listens','Understands','Adapts']).map((step,index)=><span key={step}>{step}{index<2&&<ArrowRight size={13}/>}</span>)}</div></article></section>
    <section className="voice-final"><img src="/arrab-symbol.png" alt=""/><div><div className="section-label">Arrab Voice · Early access</div><h2>{language==='en'?'A clearer conversation starts here.':'محادثة أوضح تبدأ من هنا.'}</h2><p>{language==='en'?'Arrab Voice is in development. Contact us to follow the journey.':'عرّاب فويس قيد التطوير. تواصل معنا لمتابعة الرحلة.'}</p></div><a className="primary-button" href="mailto:info@arrabai.com">{ui.contact}<Mail size={16}/></a></section>
  </main>;
}

function ProductCta({ language, title, text }: { language: Language; title: string; text: string }) {
  return <section className="product-cta"><img src="/arrab-symbol.png" alt=""/><div><div className="section-label">Arrab · Early access</div><h2>{title}</h2><p>{text}</p><a className="primary-button" href="mailto:info@arrabai.com">{language==='en'?'Contact info@arrabai.com':'تواصل عبر info@arrabai.com'}<Mail size={16}/></a></div></section>;
}

export function ArrabSite({ view }: { view: View }) {
  const [language, setLanguage] = useState<Language>('en');
  const [dark, setDark] = useState(true);
  useEffect(() => { const storedLanguage = localStorage.getItem('arrab-language') as Language | null; const storedTheme = localStorage.getItem('arrab-theme'); if (storedLanguage === 'ar' || storedLanguage === 'en') setLanguage(storedLanguage); if (storedTheme === 'light') setDark(false); }, []);
  useEffect(() => { document.documentElement.classList.toggle('light', !dark); document.documentElement.lang = language; document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'; localStorage.setItem('arrab-language', language); localStorage.setItem('arrab-theme', dark ? 'dark' : 'light'); }, [dark, language]);
  return <div className="site-root" dir={language === 'ar' ? 'rtl' : 'ltr'}><Header language={language} setLanguage={setLanguage} dark={dark} setDark={setDark}/>{view === 'home' ? <HomeView language={language}/> : view === 'studio' ? <StudioView language={language}/> : <VoiceView language={language}/>}</div>;
}
