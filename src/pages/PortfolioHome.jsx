import React, { useEffect, useState } from 'react';
import { GrainGradient } from '@paper-design/shaders-react';
import { ArrowRight, ArrowUpRight, Check, Copy, FileText, Languages, Linkedin, Mail, Menu, Moon, Send, Sun, Volume2, VolumeX, X } from 'lucide-react';
import avatarImage from '../../assets/avatar.png';
import bbvaCover from '../../assets/359shots_so.png';
import yapeCover from '../../assets/216shots_so.png';
import allpaCover from '../../assets/344shots_so.png';

const CLIENTS = [['Fahrenheit DDB', 'Agency'], ['BBVA Perú', 'Banking'], ['CENTRUM PUCP', 'Business School'], ['Amsterdam Agency', 'Digital'], ['Utopiq', 'Tech']];

const CONTENT = {
  es: {
    nav: { about: 'Sobre mí', work: 'Proyectos', capabilities: 'Especialidades', contact: 'Contacto' },
    role: 'Product Designer & Design Engineer', location: 'Lima, Perú', eyebrow: 'PRODUCT DESIGN · FINTECH · DESIGN ENGINEERING', title: <>Rodrigo <em>Aquije</em></>,
    bio: 'Diseñador de producto digital con formación en economía. Conecto rigor analítico, sistemas de diseño escalables y conversión para construir interfaces financieras intuitivas, viables y de alto impacto.',
    bioDetail: <>Trabajo desde el problema conductual hasta la interfaz funcional: investigación, arquitectura de estados, UI, sistemas de diseño y prototipos en código. Busco que una decisión compleja se sienta <strong>clara, confiable y medible.</strong></>,
    about: 'Sobre mí', aboutTitle: <>Diseño en la intersección entre <em>personas, negocio y tecnología.</em></>,
    aboutCopy: 'Mi formación en economía me ayuda a leer incentivos, riesgo y comportamiento. Mi práctica en diseño convierte esa lectura en flujos, estados y sistemas que un equipo puede implementar y medir.',
    aboutAside: 'He trabajado en productos financieros, comunicaciones de alto volumen y experiencias digitales donde la confianza no es un detalle visual: es parte del producto.', aboutCta: 'Conocer más sobre mi trayectoria',
    hire: 'Contactar', hireDesc: 'Cuéntame el producto, el reto y el horizonte del proyecto.', name: 'Nombre', email: 'Email', brief: 'Contexto del proyecto', send: 'Preparar mensaje',
    copy: 'Copiar email', copied: 'Email copiado', trust: 'Experiencia & colaboraciones', selected: 'Casos de estudio', workTitle: 'Trabajo seleccionado',
    workIntro: 'Tres problemas financieros abordados desde conversión, comportamiento y sistemas de interfaz.', open: 'Explorar caso completo', soon: 'Caso en desarrollo',
    capabilities: 'Habilidades & especialidades', connect: 'Conectemos', footer: 'Diseñado y construido en Lima.',
    linkedinAction: 'Conectar en LinkedIn', linkedinNetwork: 'Red profesional', overlayLabels: ['Rol', 'Problema', 'Contribución'],
    capabilityData: [
      { title: 'Product & Interface Design', desc: 'Investigación conductual, flujos transaccionales y arquitectura de interfaces de alta conversión.', proof: 'Del mapa de decisiones al prototipo funcional.', chips: ['Figma', 'Framer', 'UX Audit', 'Prototyping'] },
      { title: 'Design Systems & Code', desc: 'Sistemas modulares escalables en Figma y componentes vivos con React y CSS Tokens.', proof: 'Diseño que conserva intención cuando llega a producción.', chips: ['Design Tokens', 'React', 'HTML / CSS', 'SFMC'] },
      { title: 'AI-Augmented Prototyping', desc: 'Aceleración del prototipado funcional mediante agentes generativos sin delegar el criterio de producto.', proof: 'Más iteraciones útiles antes de comprometer ingeniería.', chips: ['Codex', 'Claude Code', 'Cursor', 'Prompt-to-UI'] }
    ],
    projects: [
      { name: 'BBVA Perú', tag: 'Financial Design · Salesforce MC', desc: 'Optimización técnica y visual de comunicaciones masivas para BBVA Perú, manteniendo conversión e integridad regulatoria.', image: bbvaCover, href: '/casos/bbva', chips: ['Email UX', 'Compliance', 'SFMC'], overlay: { role: 'UX/UI & Email Design', problem: 'Una oferta variable, compleja y regulada competía por atención.', contribution: 'Jerarquía de decisión y sistema modular para campañas.' } },
      { name: 'Yape', tag: 'Behavioral Audit · State Systems', desc: 'Rediseño conductual del estado “en revisión” para mitigar ansiedad, reintentos y abandono transaccional.', image: yapeCover, chips: ['UX Audit', 'Microcopy', 'State System'], overlay: { role: 'Behavioral UX', problem: 'La incertidumbre operativa provocaba interpretaciones y acciones equivocadas.', contribution: 'Nueva arquitectura de estado, expectativa y recuperación.' } },
      { name: 'Allpa', tag: 'Behavioral Finance · Apple Ecosystem', desc: 'Concepto para Apple Watch e iOS que interviene en el flujo de caja antes de una compra impulsiva.', image: allpaCover, chips: ['watchOS', 'Behavioral Economics', 'Cash-flow UX'], overlay: { role: 'Product Concept', problem: 'La información financiera llega después de que el impulso ya ganó.', contribution: 'Intervención contextual antes del momento de gasto.' } }
    ]
  },
  en: {
    nav: { about: 'About', work: 'Projects', capabilities: 'Expertise', contact: 'Contact' },
    role: 'Product Designer & Design Engineer', location: 'Lima, Peru', eyebrow: 'PRODUCT DESIGN · FINTECH · DESIGN ENGINEERING', title: <>Rodrigo <em>Aquije</em></>,
    bio: 'Digital product designer with an economics background. I connect analytical rigor, scalable design systems and conversion to build intuitive, viable and high-impact financial interfaces.',
    bioDetail: <>I work from the behavioral problem to the functional interface: research, state architecture, UI, design systems and code prototypes. I want complex decisions to feel <strong>clear, trustworthy and measurable.</strong></>,
    about: 'About', aboutTitle: <>Design at the intersection of <em>people, business and technology.</em></>,
    aboutCopy: 'My economics background helps me read incentives, risk and behavior. My design practice turns that understanding into flows, states and systems a team can implement and measure.',
    aboutAside: 'I have worked on financial products, high-volume communication and digital experiences where trust is not a visual detail: it is part of the product.', aboutCta: 'Learn more about my background',
    hire: 'Get in touch', hireDesc: 'Share the product, the challenge and the project horizon.', name: 'Name', email: 'Email', brief: 'Project context', send: 'Prepare message',
    copy: 'Copy email', copied: 'Email copied', trust: 'Experience & collaborations', selected: 'Case studies', workTitle: 'Selected work',
    workIntro: 'Three financial problems approached through conversion, behavior and interface systems.', open: 'Explore full case', soon: 'Case in progress',
    capabilities: 'Capabilities & craft', connect: 'Let’s connect', footer: 'Designed and built in Lima.',
    linkedinAction: 'Connect on LinkedIn', linkedinNetwork: 'Professional network', overlayLabels: ['Role', 'Problem', 'Contribution'],
    capabilityData: [
      { title: 'Product & Interface Design', desc: 'Behavioral research, transactional flows and high-conversion interface architecture.', proof: 'From decision map to functional prototype.', chips: ['Figma', 'Framer', 'UX Audit', 'Prototyping'] },
      { title: 'Design Systems & Code', desc: 'Scalable modular systems in Figma and live components with React and CSS Tokens.', proof: 'Design that keeps its intent when it reaches production.', chips: ['Design Tokens', 'React', 'HTML / CSS', 'SFMC'] },
      { title: 'AI-Augmented Prototyping', desc: 'Faster functional prototyping with generative agents without outsourcing product judgment.', proof: 'More useful iterations before committing engineering.', chips: ['Codex', 'Claude Code', 'Cursor', 'Prompt-to-UI'] }
    ],
    projects: [
      { name: 'BBVA Peru', tag: 'Financial Design · Salesforce MC', desc: 'Technical and visual optimization of high-volume communications for BBVA Peru, balancing conversion and regulatory integrity.', image: bbvaCover, href: '/casos/bbva', chips: ['Email UX', 'Compliance', 'SFMC'], overlay: { role: 'UX/UI & Email Design', problem: 'A variable, complex and regulated offer competed for attention.', contribution: 'Decision hierarchy and a modular campaign system.' } },
      { name: 'Yape', tag: 'Behavioral Audit · State Systems', desc: 'Behavioral redesign of the under-review state to reduce anxiety, retries and transactional drop-off.', image: yapeCover, chips: ['UX Audit', 'Microcopy', 'State System'], overlay: { role: 'Behavioral UX', problem: 'Operational uncertainty caused incorrect interpretations and actions.', contribution: 'A new state, expectation and recovery architecture.' } },
      { name: 'Allpa', tag: 'Behavioral Finance · Apple Ecosystem', desc: 'An Apple Watch and iOS concept that intervenes in cash flow before an impulse purchase.', image: allpaCover, chips: ['watchOS', 'Behavioral Economics', 'Cash-flow UX'], overlay: { role: 'Product Concept', problem: 'Financial information arrives after the impulse has already won.', contribution: 'A contextual intervention before spending.' } }
    ]
  }
};

export default function PortfolioHome() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('es');
  const [audio, setAudio] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hireOpen, setHireOpen] = useState(false);
  const [toast, setToast] = useState('');
  const [navTarget, setNavTarget] = useState('');
  const [currentSection, setCurrentSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const t = CONTENT[lang];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.documentElement.dataset.audio = audio ? 'on' : 'off';
    document.documentElement.dataset.typePair = 'contrast';
    document.documentElement.dataset.typeScale = 'major-third';
    document.title = 'Rodrigo Aquije — Product Designer & Design Engineer';
  }, [theme, audio]);

  useEffect(() => { const media = window.matchMedia('(prefers-reduced-motion: reduce)'); const update = () => setReducedMotion(media.matches); update(); media.addEventListener('change', update); return () => media.removeEventListener('change', update); }, []);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 72); if (window.scrollY < 420) setCurrentSection(''); };
    handleScroll(); window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { if (!toast) return undefined; const timer = setTimeout(() => setToast(''), 2400); return () => clearTimeout(timer); }, [toast]);
  useEffect(() => { const nodes = document.querySelectorAll('.ref-reveal'); const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: .1 }); nodes.forEach((node) => observer.observe(node)); return () => observer.disconnect(); }, []);
  useEffect(() => { const sections = document.querySelectorAll('[data-section]'); const observer = new IntersectionObserver((entries) => { const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (visible) setCurrentSection(visible.target.dataset.section); }, { rootMargin: '-24% 0px -58% 0px', threshold: [0, .2, .45] }); sections.forEach((section) => observer.observe(section)); return () => observer.disconnect(); }, []);

  const sound = (frequency = 520, force = false) => { if (!audio && !force) return; const AudioCtx = window.AudioContext || window.webkitAudioContext; if (!AudioCtx) return; const ctx = new AudioCtx(); const oscillator = ctx.createOscillator(); const gain = ctx.createGain(); oscillator.frequency.value = frequency; gain.gain.setValueAtTime(.025, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .065); oscillator.connect(gain); gain.connect(ctx.destination); oscillator.start(); oscillator.stop(ctx.currentTime + .07); };
  const notify = (message) => { setToast(message); sound(650); };
  const copyEmail = async () => { await navigator.clipboard.writeText('rodrigoaq996@gmail.com'); notify(t.copied); };
  const scrollTo = (id) => { setCurrentSection(id); setNavTarget(id); setMenuOpen(false); sound(); requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })); setTimeout(() => setNavTarget(''), 850); };

  return <main className={`ref-home ref-home--contrast ${navTarget ? 'is-navigating' : ''}`} data-nav-target={navTarget || undefined}>
    <div className="ref-ambient" aria-hidden="true" />
    <div className="ref-column">
      <CommandDeck t={t} theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} audio={audio} setAudio={setAudio} open={menuOpen} setOpen={setMenuOpen} scrollTo={scrollTo} sound={sound} currentSection={currentSection} scrolled={scrolled} />
      <section className="ref-section ref-hero ref-reveal"><div className="hero-heading-grid"><div><span className="ref-hero-eyebrow">{t.eyebrow}</span><h1 className="ref-hero-title">{t.title}</h1><p className="ref-hero-role">{t.role}</p></div><div className="hero-avatar-block"><span className="hero-avatar-ring"><img src={avatarImage} alt="Rodrigo Aquije" /></span><span>{t.location}</span><small>Economía · FinTech · Diseño</small></div></div><div className="ref-bio"><p>{t.bio}</p><p>{t.bioDetail}</p></div><div className="ref-actions"><HireConsole t={t} open={hireOpen} setOpen={setHireOpen} sound={sound} /><button className="ref-secondary ref-press" onClick={copyEmail}><Copy size={18} /> {t.copy}</button><LinkedInButton t={t} /></div></section>
      <section id="projects" data-section="projects" className="ref-section projects-section ref-reveal"><div className="ref-heading-row"><div><SectionLabel>{t.selected}</SectionLabel><h2>{t.workTitle}</h2></div><p>{t.workIntro}</p></div><div className="case-square-grid">{t.projects.map((project) => <CaseCard key={project.name} project={project} t={t} onOpen={() => project.href ? window.location.assign(project.href) : notify(t.soon)} />)}</div></section>
      <section id="about" data-section="about" className="ref-section about-section ref-reveal"><SectionLabel>{t.about}</SectionLabel><div className="about-layout"><h2>{t.aboutTitle}</h2><div><p>{t.aboutCopy}</p><p>{t.aboutAside}</p><a className="about-page-cta" href="/sobre-mi"><span>{t.aboutCta}</span><ArrowUpRight /></a></div></div><div className="ref-client-strip" aria-label={t.trust}>{CLIENTS.map(([name, type]) => <span key={name}><strong>{name}</strong><small>{type}</small></span>)}</div></section>
      <section id="capabilities" data-section="capabilities" className="ref-section capabilities-section capabilities-section--shader ref-reveal"><CapabilityShader theme={theme} reducedMotion={reducedMotion} /><div className="capabilities-content"><SectionLabel>{t.capabilities}</SectionLabel><div className="capability-list capability-list--expressive">{t.capabilityData.map((capability) => <article key={capability.title} className="capability-row capability-row--expressive"><div><h3>{capability.title}</h3><p>{capability.desc}</p></div><div className="capability-reveal"><strong>{capability.proof}</strong><span>{capability.chips.map((chip) => <small key={chip}>{chip}</small>)}</span><ArrowUpRight /></div></article>)}</div></div></section>
      <section id="contact" data-section="contact" className="ref-section ref-contact ref-reveal"><SectionLabel>{t.connect}</SectionLabel><h2>{lang === 'es' ? <>Conversemos sobre el <em>problema real.</em></> : <>Let’s discuss the <em>real problem.</em></>}</h2><div className="contact-links"><button onClick={copyEmail}><Mail /><span><strong>Email</strong><small>rodrigoaq996@gmail.com</small></span><ArrowUpRight /></button><a href="https://linkedin.com/in/rodrigo-aquije" target="_blank" rel="noreferrer"><Linkedin /><span><strong>LinkedIn</strong><small>{t.linkedinNetwork}</small></span><ArrowUpRight /></a><div className="cv-card"><FileText /><span><strong>Currículum Vitae</strong><small>Descargar versión</small></span><div className="cv-actions"><a href="/cv-es.pdf" download>Español</a><a href="/cv-en.pdf" download>English</a></div></div></div></section>
      <footer className="ref-footer"><span>© 2026 Rodrigo Aquije</span><span>{t.footer}</span><nav><a href="mailto:rodrigoaq996@gmail.com">Email</a><a href="https://linkedin.com/in/rodrigo-aquije" target="_blank" rel="noreferrer">LinkedIn</a></nav></footer>
    </div><div className={`ref-toast ${toast ? 'is-visible' : ''}`} role="status" aria-live="polite"><Check size={15} /> {toast}</div>
  </main>;
}

function CommandDeck({ t, theme, setTheme, lang, setLang, audio, setAudio, open, setOpen, scrollTo, sound, currentSection, scrolled }) {
  const items = [['about', t.nav.about], ['projects', t.nav.work], ['capabilities', t.nav.capabilities], ['contact', t.nav.contact]];
  return <header className={`command-deck command-deck--refined ${open ? 'is-open' : ''} ${scrolled ? 'is-scrolled' : ''}`}><div className="command-main"><button className="command-wordmark" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><strong>Rodrigo Aquije</strong><small>Product Designer</small></button><nav className="command-direct-nav" aria-label="Primary">{items.map(([id, label]) => <button key={id} className={currentSection === id ? 'is-active' : ''} aria-current={currentSection === id ? 'page' : undefined} onClick={() => scrollTo(id)}>{label}</button>)}</nav><div className="command-controls"><button className="nav-control" aria-label={audio ? 'Desactivar sonido' : 'Activar sonido'} aria-pressed={audio} data-tip={audio ? 'Sonido activo' : 'Sonido apagado'} onClick={() => { setAudio(!audio); if (!audio) sound(720, true); }}>{audio ? <Volume2 /> : <VolumeX />}</button><button className="nav-control" aria-label="Cambiar tema" data-tip={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'} onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark'); sound(); }}>{theme === 'dark' ? <Moon /> : <Sun />}</button><button className="nav-control nav-control--language" aria-label="Cambiar idioma" data-tip={lang === 'es' ? 'View in English' : 'Ver en español'} onClick={() => { setLang(lang === 'es' ? 'en' : 'es'); sound(); }}><Languages /><span>{lang.toUpperCase()}</span></button><button className="command-menu" aria-label="Abrir navegación" aria-expanded={open} onClick={() => { setOpen(!open); sound(460); }}>{open ? <X /> : <Menu />}</button></div></div><div className="command-mobile-panel" inert={!open ? '' : undefined}><nav>{items.map(([id, label]) => <button key={id} className={currentSection === id ? 'is-active' : ''} onClick={() => scrollTo(id)}>{label}<ArrowUpRight /></button>)}</nav></div></header>;
}

function SectionLabel({ children }) { return <p className="ref-section-label">{children}</p>; }
function CapabilityShader({ theme, reducedMotion }) { const isLight = theme === 'light'; return <div className="capabilities-shader" aria-hidden="true"><GrainGradient width="100%" height="100%" colors={isLight ? ['#F1F4F9', '#D8F4E7', '#DCE8FF', '#F4F7F3'] : ['#090B10', '#10241D', '#142035', '#090B10']} colorBack={isLight ? '#F1F4F9' : '#090B10'} softness={.88} intensity={.22} noise={.12} shape="corners" speed={reducedMotion ? 0 : .055} scale={1.15} maxPixelCount={700000} /></div>; }
function LinkedInButton({ t }) { return <a className="ref-icon-button linkedin-hover" href="https://linkedin.com/in/rodrigo-aquije" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /><span className="linkedin-profile-card"><span className="linkedin-banner"><b>in</b></span><span className="linkedin-card-body"><img src={avatarImage} alt="" /><strong>Rodrigo Aquije V.</strong><small>Product Designer & Design Engineer</small><em>{t.location}</em><i>{t.linkedinAction}</i></span></span></a>; }
function CaseCard({ project, t, onOpen }) { return <article className="case-square-card"><button className="case-square-media" onClick={onOpen}><img src={project.image} alt={`${project.name} project cover`} /><span className="case-square-overlay"><span><small>{t.overlayLabels[0]}</small><strong>{project.overlay.role}</strong></span><span><small>{t.overlayLabels[1]}</small><strong>{project.overlay.problem}</strong></span><span><small>{t.overlayLabels[2]}</small><strong>{project.overlay.contribution}</strong></span></span><i><span>{project.href ? t.open : t.soon}</span><ArrowUpRight /></i></button><div className="case-square-copy"><span>{project.tag}</span><h3>{project.name}</h3><p>{project.desc}</p><div>{project.chips.map((chip) => <small key={chip}>{chip}</small>)}</div></div></article>; }
function HireConsole({ t, open, setOpen, sound }) { return <div className={`hire-console ${open ? 'is-open' : ''}`}><button className="hire-trigger ref-press" onClick={() => { setOpen(!open); sound(560); }} aria-expanded={open}><span>{t.hire}</span><ArrowRight size={17} /></button><div className="hire-panel" inert={!open ? '' : undefined}><p>{t.hireDesc}</p><form onSubmit={(event) => { event.preventDefault(); const data = new FormData(event.currentTarget); window.location.href = `mailto:rodrigoaq996@gmail.com?subject=${encodeURIComponent(`Portfolio inquiry · ${data.get('name')}`)}&body=${encodeURIComponent(`${data.get('brief')}\n\n${data.get('email')}`)}`; }}><label>{t.name}<input name="name" required autoComplete="name" /></label><label>{t.email}<input name="email" type="email" required autoComplete="email" /></label><label>{t.brief}<textarea name="brief" required rows="4" /></label><button type="submit" className="hire-submit ref-press"><Send size={15} /> {t.send}</button></form></div></div>; }
