import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, Code2, Copy,
  FileText, Headphones, Home, Languages, Layers3, Linkedin, Mail, Menu,
  Moon, Palette, Send, Sun, Volume2, VolumeX, X
} from 'lucide-react';
import avatarImage from '../../assets/avatar.png';
import bbvaCover from '../../assets/359shots_so.png';
import yapeCover from '../../assets/216shots_so.png';
import allpaCover from '../../assets/344shots_so.png';

const COPY = {
  es: {
    about: 'Perfil', projects: 'Proyectos', stack: 'Sistema', contact: 'Contacto', menu: 'Abrir menú',
    role: 'Product Designer & Design Engineer', location: 'Lima, Perú',
    intro: <>Diseño productos financieros desde la estrategia hasta la interfaz que llega a producción. Mi formación en <strong>economía</strong> me ayuda a conectar comportamiento, conversión y viabilidad; mi práctica en <strong>diseño y código</strong> evita que el detalle muera en el handoff.</>,
    intro2: <>Trabajo con flujos transaccionales, sistemas de estados, CRM y prototipos funcionales. La meta no es decorar: es hacer que una decisión compleja se sienta <strong>clara, confiable y medible.</strong></>,
    hire: 'Hablemos', hireDesc: 'Cuéntame el producto, el reto y el horizonte del proyecto.',
    name: 'Nombre', email: 'Email', brief: 'Contexto del proyecto', send: 'Preparar mensaje', copy: 'Copiar email', copied: 'Email copiado',
    selected: 'Trabajo seleccionado', open: 'Abrir proyecto', soon: 'Caso en desarrollo', scope: 'Alcance',
    year: 'Año', focus: 'Enfoque', tools: 'Herramientas & práctica', footer: 'Diseñado y construido en Lima.',
    projectsData: [
      { id: '001', name: 'BBVA Perú', desc: 'Sistema de comunicación para convertir ofertas financieras complejas en decisiones claras, escalables y compatibles con compliance.', year: '2026', stack: 'SFMC', focus: 'Conversión', image: bbvaCover, href: '/casos/bbva', areas: ['Estrategia', 'UX/UI', 'Sistema', 'Frontend'] },
      { id: '002', name: 'Yape', desc: 'Arquitectura conductual para estados de operación en revisión: menos ansiedad, reintentos y decisiones equivocadas.', year: '2026', stack: 'Figma', focus: 'Estados', image: yapeCover, areas: ['Research', 'UX/UI', 'Microcopy'] },
      { id: '003', name: 'Allpa', desc: 'Intervención de economía conductual para iOS y watchOS antes de una compra impulsiva.', year: '2026', stack: 'watchOS', focus: 'Behavioral', image: allpaCover, areas: ['Producto', 'UX/UI', 'Prototipo', 'Sistema'] }
    ]
  },
  en: {
    about: 'Profile', projects: 'Projects', stack: 'System', contact: 'Contact', menu: 'Open menu',
    role: 'Product Designer & Design Engineer', location: 'Lima, Peru',
    intro: <>I design financial products from strategy to the interface that reaches production. My background in <strong>economics</strong> helps me connect behavior, conversion and viability; my practice in <strong>design and code</strong> keeps detail alive beyond handoff.</>,
    intro2: <>I work across transactional flows, state systems, CRM and functional prototypes. The goal is not decoration: it is making complex decisions feel <strong>clear, trustworthy and measurable.</strong></>,
    hire: 'Let’s talk', hireDesc: 'Share the product, the challenge and the project horizon.',
    name: 'Name', email: 'Email', brief: 'Project context', send: 'Prepare message', copy: 'Copy email', copied: 'Email copied',
    selected: 'Selected work', open: 'Open project', soon: 'Case in progress', scope: 'Scope',
    year: 'Year', focus: 'Focus', tools: 'Tools & practice', footer: 'Designed and built in Lima.',
    projectsData: [
      { id: '001', name: 'BBVA Peru', desc: 'A communication system that turns complex financial offers into clear, scalable and compliant decisions.', year: '2026', stack: 'SFMC', focus: 'Conversion', image: bbvaCover, href: '/casos/bbva', areas: ['Strategy', 'UX/UI', 'System', 'Frontend'] },
      { id: '002', name: 'Yape', desc: 'Behavioral architecture for operations under review: reducing anxiety, retries and incorrect decisions.', year: '2026', stack: 'Figma', focus: 'States', image: yapeCover, areas: ['Research', 'UX/UI', 'Microcopy'] },
      { id: '003', name: 'Allpa', desc: 'A behavioral economics intervention for iOS and watchOS before an impulse purchase.', year: '2026', stack: 'watchOS', focus: 'Behavioral', image: allpaCover, areas: ['Product', 'UX/UI', 'Prototype', 'System'] }
    ]
  }
};

const SKILLS = [
  ['Behavioral UX', 'Decision architecture for high-friction financial moments.'],
  ['Design Systems', 'Tokens and components that survive channel and scale.'],
  ['React / CSS', 'Functional prototypes with production-minded behavior.'],
  ['Figma', 'Flows, interface systems and interaction specs.'],
  ['Salesforce MC', 'Responsive, measurable financial communications.'],
  ['AI workflows', 'Faster exploration without outsourcing judgment.']
];

export default function PortfolioHome() {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('es');
  const [audio, setAudio] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hireOpen, setHireOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [toast, setToast] = useState('');
  const [time, setTime] = useState('');
  const drag = useRef(false);
  const t = COPY[lang];
  const project = t.projectsData[active];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.audio = audio ? 'on' : 'off';
    document.title = 'Rodrigo Aquije — Product Designer & Design Engineer';
  }, [theme, audio]);

  useEffect(() => {
    const tick = () => setTime(new Intl.DateTimeFormat(lang === 'es' ? 'es-PE' : 'en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Lima' }).format(new Date()));
    tick(); const timer = setInterval(tick, 30000); return () => clearInterval(timer);
  }, [lang]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(''), 2400);
    return () => clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    const nodes = document.querySelectorAll('.ref-reveal');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: .12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const sound = (frequency = 520, force = false) => {
    if (!audio && !force) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx(); const oscillator = ctx.createOscillator(); const gain = ctx.createGain();
    oscillator.frequency.value = frequency; oscillator.type = 'sine'; gain.gain.setValueAtTime(.035, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .07);
    oscillator.connect(gain); gain.connect(ctx.destination); oscillator.start(); oscillator.stop(ctx.currentTime + .075);
  };

  const selectProject = (index) => { const next = (index + t.projectsData.length) % t.projectsData.length; setActive(next); sound(420 + next * 80); };
  const notify = (message) => { setToast(message); sound(650); };
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); setMenuOpen(false); sound(); };
  const openProject = () => project.href ? window.location.assign(project.href) : notify(t.soon);
  const copyEmail = async () => { await navigator.clipboard.writeText('rodrigoaq996@gmail.com'); notify(t.copied); };

  const handleKnobMove = (event) => {
    if (!drag.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const angle = Math.atan2(event.clientY - (rect.top + rect.height / 2), event.clientX - (rect.left + rect.width / 2)) * 180 / Math.PI;
    const normalized = (angle + 360 + 135) % 360;
    selectProject(Math.min(t.projectsData.length - 1, Math.floor(normalized / (270 / t.projectsData.length))));
  };

  return (
    <main className="ref-home">
      <div className="ref-ambient" aria-hidden="true" />
      <div className="ref-column">
        <CommandDeck t={t} time={time} theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} audio={audio} setAudio={setAudio} open={menuOpen} setOpen={setMenuOpen} scrollTo={scrollTo} sound={sound} />

        <section id="profile" className="ref-section ref-reveal">
          <SectionLabel>{t.about}</SectionLabel>
          <div className="ref-bio"><p>{t.intro}</p><p>{t.intro2}</p></div>
          <div className="ref-actions">
            <div className={`hire-console ${hireOpen ? 'is-open' : ''}`}>
              <button className="hire-trigger ref-press" onClick={() => { setHireOpen(!hireOpen); sound(560); }} aria-expanded={hireOpen}><span>{t.hire}</span><ArrowRight size={16} /></button>
              <div className="hire-panel" inert={!hireOpen ? '' : undefined}>
                <p>{t.hireDesc}</p>
                <form onSubmit={(event) => { event.preventDefault(); const data = new FormData(event.currentTarget); window.location.href = `mailto:rodrigoaq996@gmail.com?subject=${encodeURIComponent(`Portfolio inquiry · ${data.get('name')}`)}&body=${encodeURIComponent(`${data.get('brief')}\n\n${data.get('email')}`)}`; }}>
                  <label>{t.name}<input name="name" required autoComplete="name" /></label>
                  <label>{t.email}<input name="email" type="email" required autoComplete="email" /></label>
                  <label>{t.brief}<textarea name="brief" required rows="4" /></label>
                  <button type="submit" className="hire-submit ref-press"><Send size={14} /> {t.send}</button>
                </form>
              </div>
            </div>
            <button className="ref-secondary ref-press" onClick={copyEmail}><Copy size={14} /> {t.copy}</button>
            <a className="ref-icon-button ref-press" href="https://linkedin.com/in/rodrigo-aquije" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
          </div>
        </section>

        <section id="projects" className="ref-section ref-reveal">
          <SectionLabel>{t.selected}</SectionLabel>
          <div className="project-console">
            <header className="console-topbar">
              <button onClick={() => selectProject(active - 1)} aria-label="Previous project"><ArrowLeft size={16} /></button>
              <div><strong>{project.name}</strong><span>{project.id} / 00{t.projectsData.length}</span></div>
              <button onClick={() => selectProject(active + 1)} aria-label="Next project"><ArrowRight size={16} /></button>
            </header>

            <div className="console-hero">
              <aside className="console-knob-rail">
                <span>PROJECT</span>
                <button className="console-knob" aria-label={`Project ${project.id}`} aria-valuenow={active + 1} aria-valuemin="1" aria-valuemax={t.projectsData.length}
                  style={{ '--knob-angle': `${-135 + active * (270 / (t.projectsData.length - 1))}deg` }}
                  onPointerDown={(event) => { drag.current = true; event.currentTarget.setPointerCapture(event.pointerId); }}
                  onPointerMove={handleKnobMove} onPointerUp={() => { drag.current = false; }}
                  onKeyDown={(event) => { if (event.key === 'ArrowRight' || event.key === 'ArrowUp') selectProject(active + 1); if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') selectProject(active - 1); }}
                  onWheel={(event) => { event.preventDefault(); selectProject(active + (event.deltaY > 0 ? 1 : -1)); }}>
                  <i><b /></i><em>{project.id}</em>
                </button>
                <div className="console-meta"><span>{t.year}<b>{project.year}</b></span><span>STACK<b>{project.stack}</b></span><span>{t.focus}<b>{project.focus}</b></span></div>
              </aside>

              <div className="console-body">
                <ul className="project-tabs">
                  {t.projectsData.map((item, index) => <li key={item.id}><TiltCard active={index === active} onClick={() => selectProject(index)} image={item.image} name={item.name} id={item.id} /></li>)}
                </ul>
                <div className="project-stage" key={`${lang}-${project.id}`}>
                  <div><h2>{project.name}</h2><p>{project.desc}</p></div>
                  <TiltCover project={project} label={project.href ? t.open : t.soon} onClick={openProject} />
                </div>
              </div>
            </div>

            <ScopeMeter label={t.scope} areas={project.areas} />
          </div>
        </section>

        <section id="system" className="ref-section ref-reveal">
          <SectionLabel>{t.tools}</SectionLabel>
          <ul className="skill-rack">{SKILLS.map(([name, description], index) => <li key={name}><button className="skill-module ref-press" aria-describedby={`skill-${index}`}><span>{index % 3 === 0 ? <Layers3 /> : index % 3 === 1 ? <Palette /> : <Code2 />}</span><strong>{name}</strong><small id={`skill-${index}`} role="tooltip">{description}</small></button></li>)}</ul>
        </section>

        <footer className="ref-footer"><span>© 2026 Rodrigo Aquije</span><span>{t.footer}</span><nav><a href="mailto:rodrigoaq996@gmail.com">Email</a><a href="https://linkedin.com/in/rodrigo-aquije" target="_blank" rel="noreferrer">LinkedIn</a></nav></footer>
      </div>
      <div className={`ref-toast ${toast ? 'is-visible' : ''}`} role="status" aria-live="polite"><Check size={14} /> {toast}</div>
    </main>
  );
}

function CommandDeck({ t, time, theme, setTheme, lang, setLang, audio, setAudio, open, setOpen, scrollTo, sound }) {
  return <header className={`command-deck ${open ? 'is-open' : ''}`}>
    <div className="command-main">
      <div className="command-identity"><span className="command-avatar"><img src={avatarImage} alt="Rodrigo Aquije" /></span><span><strong>Rodrigo Aquije</strong><small>{t.role}</small></span></div>
      <span className="command-time">{time} · {t.location}</span>
      <div className="command-switches">
        <HardwareSwitch label={audio ? 'Mute audio' : 'Unmute audio'} active={audio} onClick={() => { setAudio(!audio); if (!audio) sound(720, true); }} on={<Volume2 />} off={<VolumeX />} />
        <HardwareSwitch label="Toggle theme" active={theme === 'light'} onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark'); sound(); }} on={<Sun />} off={<Moon />} />
        <HardwareSwitch label="Toggle language" active={lang === 'en'} onClick={() => { setLang(lang === 'es' ? 'en' : 'es'); sound(); }} on={<span>EN</span>} off={<span>ES</span>} />
        <button className="command-menu ref-press" aria-label={t.menu} aria-expanded={open} onClick={() => { setOpen(!open); sound(460); }}>{open ? <X /> : <Menu />}</button>
      </div>
    </div>
    <div className="command-panel" inert={!open ? '' : undefined}>
      <span>SECTIONS</span>
      <nav><button onClick={() => scrollTo('profile')}><Home />{t.about}</button><button onClick={() => scrollTo('projects')}><Layers3 />{t.projects}</button><button onClick={() => scrollTo('system')}><Code2 />{t.stack}</button><button onClick={() => scrollTo('profile')}><Mail />{t.contact}</button></nav>
      <div className="command-panel-footer"><span>THEME · {theme.toUpperCase()}</span><span>LANG · {lang.toUpperCase()}</span><span>AUDIO · {audio ? 'ON' : 'OFF'}</span></div>
    </div>
  </header>;
}

function HardwareSwitch({ label, active, onClick, on, off }) {
  return <button className={`hardware-switch ${active ? 'is-on' : ''}`} aria-label={label} aria-pressed={active} onClick={onClick}><i><b /></i><span>{active ? on : off}</span></button>;
}

function SectionLabel({ children }) { return <h2 className="ref-section-label">{children}</h2>; }

function TiltCard({ active, onClick, image, name, id }) {
  const move = (event) => { const rect = event.currentTarget.getBoundingClientRect(); const x = (event.clientX - rect.left) / rect.width; const y = (event.clientY - rect.top) / rect.height; event.currentTarget.style.setProperty('--rx', `${(y - .5) * -8}deg`); event.currentTarget.style.setProperty('--ry', `${(x - .5) * 10}deg`); event.currentTarget.style.setProperty('--gx', `${x * 100}%`); event.currentTarget.style.setProperty('--gy', `${y * 100}%`); };
  const reset = (event) => { event.currentTarget.style.setProperty('--rx', '0deg'); event.currentTarget.style.setProperty('--ry', '0deg'); };
  return <button className={`tilt-project ${active ? 'is-active' : ''}`} onClick={onClick} onPointerMove={move} onPointerLeave={reset}><span><img src={image} alt="" /><i /></span><strong>{name}</strong><small>{id}</small><em /></button>;
}

function TiltCover({ project, label, onClick }) {
  const move = (event) => { const rect = event.currentTarget.getBoundingClientRect(); const x = (event.clientX - rect.left) / rect.width; const y = (event.clientY - rect.top) / rect.height; event.currentTarget.style.setProperty('--cover-rx', `${(y - .5) * -2.5}deg`); event.currentTarget.style.setProperty('--cover-ry', `${(x - .5) * 3}deg`); event.currentTarget.style.setProperty('--cover-x', `${x * 100}%`); event.currentTarget.style.setProperty('--cover-y', `${y * 100}%`); };
  return <button className="tilt-cover ref-press" onClick={onClick} onPointerMove={move} onPointerLeave={(event) => { event.currentTarget.style.setProperty('--cover-rx', '0deg'); event.currentTarget.style.setProperty('--cover-ry', '0deg'); }}><img src={project.image} alt={`${project.name} project cover`} /><i /><span>{label}<ArrowUpRight size={14} /></span></button>;
}

function ScopeMeter({ label, areas }) {
  const all = ['Product', 'UX/UI', 'System', 'Frontend', 'Research'];
  return <footer className="scope-module"><div className="scope-meter"><span>{label}</span><div>{Array.from({ length: 24 }).map((_, index) => <i key={index} className={index < areas.length * 5 ? 'is-lit' : ''} />)}</div><strong>{areas.length}/5</strong></div><div className="scope-scale">{all.map((item, index) => <span key={item} className={index < areas.length ? 'is-on' : ''}>{areas[index] || item}</span>)}</div></footer>;
}
