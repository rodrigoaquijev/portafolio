import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GrainGradient } from '@paper-design/shaders-react';
import { ArrowBendUpRightIcon } from '@phosphor-icons/react/dist/csr/ArrowBendUpRight';
import { ArrowCircleRightIcon } from '@phosphor-icons/react/dist/csr/ArrowCircleRight';
import { Check, Copy, Linkedin, Send, Sparkles } from 'lucide-react';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteLoader from '../components/SiteLoader.jsx';
import SectionLabel from '../components/SectionLabel.jsx';
import EditorialKicker from '../components/EditorialKicker.jsx';
import SiteContact from '../components/SiteContact.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { useSiteDesignSystem } from '../components/SiteDesignSystem.jsx';
import avatarImage from '../../assets/avatar.webp';
import bbvaCover from '../../assets/359shots_so.webp';
import nacionCover from '../../assets/cases/banco-nacion/caso/bn-portada.jpg';

const CLIENTS = {
  es: [['Fahrenheit DDB', 'Agencia'], ['BBVA Perú', 'Banca'], ['Amsterdam', 'Agencia digital'], ['CENTRUM PUCP', 'Educación ejecutiva'], ['UTOPIQ', 'EdTech']],
  en: [['Fahrenheit DDB', 'Agency'], ['BBVA Peru', 'Banking'], ['Amsterdam', 'Digital agency'], ['CENTRUM PUCP', 'Executive education'], ['UTOPIQ', 'EdTech']]
};

const CONTENT = {
  es: {
    nav: { about: 'Sobre mí', work: 'Proyectos', capabilities: 'Especialidades', contact: 'Contacto' },
    role: 'Product Designer', location: 'Lima, Perú', eyebrow: 'Producto digital · UX/UI · Prototipos en código', title: 'Rodrigo Aquije',
    profile: 'Producto · UX/UI · Código',
    bio: 'Soy Product Designer en Lima. Diseño flujos, estados e interfaces, y construyo prototipos en código con IA para probar las decisiones antes de que lleguen a desarrollo.',
    bioDetail: 'Hoy trabajo como Diseñador UX en Fahrenheit DDB para BBVA Perú. Diseño las campañas de mailing de Préstamos de Libre Disponibilidad para móvil y escritorio, y trabajo con producto y marketing en torno a los KPIs de cada campaña.',
    about: 'Sobre mí', aboutTitle: 'Empecé analizando datos. Hoy diseño productos.',
    aboutCopy: 'Estudié Economía y pasé más de cuatro años en análisis de riesgo crediticio antes de dedicarme al diseño. De esa etapa conservo una forma de trabajar: partir de datos, entender las restricciones y medir las consecuencias de cada decisión.',
    aboutAside: 'Hoy la aplico en UX para email dentro de BBVA Perú y la complemento con diseño visual y prototipos en código construidos con IA.', aboutCta: 'Conocer más sobre mi trayectoria',
    hire: 'Contactar', hireDesc: 'Cuéntame el producto, el reto y el horizonte del proyecto.', name: 'Nombre', email: 'Email', brief: 'Contexto del proyecto', send: 'Preparar mensaje',
    copy: 'Copiar email', copied: 'Email copiado', trust: 'Experiencia & colaboraciones', selected: 'Casos de estudio', workTitle: 'Trabajo seleccionado',
    workIntro: 'Un caso profesional de UX para email en BBVA Perú, un sistema de diseño para la app del Banco de la Nación y un producto conceptual llevado hasta un prototipo navegable.', open: 'Explorar caso completo', soon: 'Caso en desarrollo',
    capabilities: 'Habilidades & especialidades', connect: 'Conectemos', footer: 'Diseñado y construido en Lima.',
    linkedinAction: 'Conectar en LinkedIn', linkedinNetwork: 'Red profesional', overlayLabels: ['Rol', 'Problema', 'Contribución'],
    avatarAction: 'Abrir nota personal', avatarHint: 'Lado personal', avatarNote: 'Nota personal', avatarStoryTitle: 'Si llegaste hasta aquí, ya estás dentro.',
    avatarStoryCopy: 'Escucho álbumes completos, vivo con Lola y Perlita y estoy aprendiendo a cocinar.', avatarStoryCta: 'Conocer mi lado personal',
    capabilityData: [
      { title: 'Producto y UX/UI', desc: 'Defino arquitectura de información, flujos, estados y prototipos para convertir requisitos de usuario y negocio en decisiones de interfaz.', proof: 'Del problema al prototipo que se puede revisar y probar.', chips: ['Figma', 'Framer', 'Investigación de usuarios', 'Prototipado'] },
      { title: 'Interfaces y front-end', desc: 'Construyo prototipos funcionales y sistemas de componentes para comprobar comportamiento, responsive y consistencia fuera del archivo de diseño.', proof: 'El código funciona como una herramienta para validar y comunicar decisiones de diseño.', chips: ['HTML', 'CSS', 'JavaScript', 'React'] },
      { title: 'Diseño visual e IA', desc: 'Combino herramientas visuales con agentes de IA para explorar alternativas, documentar decisiones y construir prototipos con mayor rapidez.', proof: 'La IA acelera la ejecución; el criterio de producto y la revisión siguen siendo míos.', chips: ['Adobe Creative Cloud', 'Codex', 'Claude Code', 'Gemini'] }
    ],
    projects: [
      { name: 'BBVA Perú', tag: 'Caso profesional · UX para email', headline: 'Una oferta distinta para cada cliente.', summary: 'Un email que debía funcionar para todos.', image: bbvaCover, href: '/casos/bbva', chips: ['UX para email', 'Compliance', 'SFMC'], overlay: { role: 'Diseñador UX', problem: 'Cada cliente recibía una oferta variable que debía entenderse rápido y cumplir restricciones bancarias.', contribution: 'Jerarquía de información, módulos responsive y preparación de activos para Salesforce Marketing Cloud.' } },
      { name: 'Banco de la Nación', tag: 'Proyecto conceptual · Sistema de diseño', headline: 'Once tareas escondidas en un solo menú.', summary: 'Nación, un sistema de 68 tokens y 22 componentes documentados, aplicado a una transferencia a celular de principio a fin.', image: nacionCover, href: '/casos/banco-nacion', chips: ['Design system', 'Tokens', 'Documentación'], overlay: { role: 'Product Designer', problem: 'Las tareas estaban escondidas en un menú de once opciones y la app no compartía reglas con la web del banco.', contribution: 'Auditoría, tokens en dos niveles, foundations, 22 componentes documentados, roadmap y un flujo de 10 pantallas.' } },
      { name: 'Vaca', tag: 'Proyecto conceptual · Producto', headline: 'Dividir la cuenta es fácil. Cobrarle a tus roommates no.', summary: 'Un fondo compartido que se llena antes del gasto, llevado de la investigación de escritorio a un prototipo navegable.', visual: 'vaca', href: '/casos/vaca', chips: ['Product design', 'Flujos y estados', 'Prototipo navegable'], overlay: { role: 'Product Designer', problem: 'Dividir la deuda no elimina el momento incómodo de cobrar.', contribution: 'Benchmark, flujos, modelo de estados, kit de UI y un prototipo navegable de cinco tareas.' } }
    ]
  },
  en: {
    nav: { about: 'About', work: 'Projects', capabilities: 'Expertise', contact: 'Contact' },
    role: 'Product Designer', location: 'Lima, Peru', eyebrow: 'Digital product · UX/UI · Code prototypes', title: 'Rodrigo Aquije',
    profile: 'Product · UX/UI · Code',
    bio: 'I am a Product Designer based in Lima. I design flows, states and interfaces, and I build code prototypes with AI to test decisions before they reach development.',
    bioDetail: 'I currently work as a UX Designer at Fahrenheit DDB for BBVA Peru. I design the personal-loan email campaigns for mobile and desktop, and I work with product and marketing around each campaign’s KPIs.',
    about: 'About', aboutTitle: 'I started by analyzing data. Now I design products.',
    aboutCopy: 'I studied Economics and spent more than four years in credit-risk analysis before moving into design. From that stage I kept a way of working: start from data, understand the constraints and measure the consequences of each decision.',
    aboutAside: 'Today I apply it to email UX for BBVA Peru, complemented by visual design and code prototypes built with AI.', aboutCta: 'Learn more about my background',
    hire: 'Get in touch', hireDesc: 'Share the product, the challenge and the project horizon.', name: 'Name', email: 'Email', brief: 'Project context', send: 'Prepare message',
    copy: 'Copy email', copied: 'Email copied', trust: 'Experience & collaborations', selected: 'Case studies', workTitle: 'Selected work',
    workIntro: 'A professional email UX case for BBVA Peru, a design system for the Banco de la Nación app and a concept product taken all the way to a clickable prototype.', open: 'Explore full case', soon: 'Case in progress',
    capabilities: 'Capabilities & craft', connect: 'Let’s connect', footer: 'Designed and built in Lima.',
    linkedinAction: 'Connect on LinkedIn', linkedinNetwork: 'Professional network', overlayLabels: ['Role', 'Problem', 'Contribution'],
    avatarAction: 'Open personal note', avatarHint: 'Personal side', avatarNote: 'Personal note', avatarStoryTitle: 'If you made it here, you are already in.',
    avatarStoryCopy: 'I listen to full albums, live with Lola and Perlita, and I am learning to cook.', avatarStoryCta: 'See my personal side',
    capabilityData: [
      { title: 'Product and UX/UI', desc: 'I define information architecture, flows, states and prototypes to turn user and business requirements into interface decisions.', proof: 'From the problem to a prototype that can be reviewed and tested.', chips: ['Figma', 'Framer', 'User research', 'Prototyping'] },
      { title: 'Interfaces and front-end', desc: 'I build functional prototypes and component systems to check behavior, responsiveness and consistency outside the design file.', proof: 'Code is a tool for validating and communicating design decisions.', chips: ['HTML', 'CSS', 'JavaScript', 'React'] },
      { title: 'Visual design and AI', desc: 'I combine visual tools with AI agents to explore alternatives, document decisions and build prototypes faster.', proof: 'AI speeds up execution; product judgment and review remain mine.', chips: ['Adobe Creative Cloud', 'Codex', 'Claude Code', 'Gemini'] }
    ],
    projects: [
      { name: 'BBVA Peru', tag: 'Professional case · Email UX', headline: 'A different offer for every customer.', summary: 'One email that had to work for all of them.', image: bbvaCover, href: '/casos/bbva', chips: ['Email UX', 'Compliance', 'SFMC'], overlay: { role: 'UX Designer', problem: 'Each customer received a variable offer that had to be understood quickly while meeting banking restrictions.', contribution: 'Information hierarchy, responsive modules and asset preparation for Salesforce Marketing Cloud.' } },
      { name: 'Banco de la Nación', tag: 'Concept project · Design system', headline: 'Eleven tasks hidden in a single menu.', summary: 'Nación, a system of 68 tokens and 22 documented components, applied to a phone transfer from start to finish.', image: nacionCover, href: '/casos/banco-nacion', chips: ['Design system', 'Tokens', 'Documentation'], overlay: { role: 'Product Designer', problem: 'Tasks were hidden in an eleven-item menu and the app shared no rules with the bank’s website.', contribution: 'Audit, two-level tokens, foundations, 22 documented components, roadmap and a 10-screen flow.' } },
      { name: 'Vaca', tag: 'Concept project · Product', headline: 'Splitting the bill is easy. Collecting from your roommates is not.', summary: 'A shared fund that fills up before spending, taken from desk research to a clickable prototype.', visual: 'vaca', href: '/casos/vaca', chips: ['Product design', 'Flows and states', 'Clickable prototype'], overlay: { role: 'Product Designer', problem: 'Splitting a debt does not remove the awkward moment of collecting it.', contribution: 'Benchmark, flows, state model, UI kit and a five-task clickable prototype.' } }
    ]
  }
};

export default function PortfolioHome() {
  const { theme, lang, audio } = useSiteDesignSystem();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hireOpen, setHireOpen] = useState(false);
  const [toast, setToast] = useState('');
  const [navTarget, setNavTarget] = useState('');
  const [currentSection, setCurrentSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [loading, setLoading] = useState(true);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const t = CONTENT[lang];
  const emailCopied = toast === t.copied;

  useEffect(() => { document.title = 'Rodrigo Aquije — Product Designer'; }, [lang]);

  useEffect(() => { const media = window.matchMedia('(prefers-reduced-motion: reduce)'); const update = () => setReducedMotion(media.matches); update(); media.addEventListener('change', update); return () => media.removeEventListener('change', update); }, []);
  useEffect(() => { document.body.classList.add('is-loading'); const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 240 : 880; const timer = setTimeout(() => setLoading(false), delay); return () => { clearTimeout(timer); document.body.classList.remove('is-loading'); }; }, []);
  useEffect(() => { if (!loading) document.body.classList.remove('is-loading'); }, [loading]);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 72); if (window.scrollY < 420) setCurrentSection(''); };
    handleScroll(); window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { if (!toast) return undefined; const timer = setTimeout(() => setToast(''), 2400); return () => clearTimeout(timer); }, [toast]);
  useEffect(() => { if (!avatarOpen) return undefined; const closeOnEscape = (event) => { if (event.key !== 'Escape') return; setAvatarOpen(false); if (document.activeElement instanceof HTMLElement && document.activeElement.closest('.hero-avatar-interaction')) document.activeElement.blur(); }; window.addEventListener('keydown', closeOnEscape); return () => window.removeEventListener('keydown', closeOnEscape); }, [avatarOpen]);
  useEffect(() => { const nodes = document.querySelectorAll('.ref-reveal'); const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: .1 }); nodes.forEach((node) => observer.observe(node)); return () => observer.disconnect(); }, []);
  useEffect(() => { const sections = document.querySelectorAll('[data-section]'); const observer = new IntersectionObserver((entries) => { const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (visible) setCurrentSection(visible.target.dataset.section); }, { rootMargin: '-24% 0px -58% 0px', threshold: [0, .2, .45] }); sections.forEach((section) => observer.observe(section)); return () => observer.disconnect(); }, []);

  const sound = (frequency = 520, force = false) => { if (!audio && !force) return; const AudioCtx = window.AudioContext || window.webkitAudioContext; if (!AudioCtx) return; const ctx = new AudioCtx(); const oscillator = ctx.createOscillator(); const gain = ctx.createGain(); oscillator.frequency.value = frequency; gain.gain.setValueAtTime(.025, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .065); oscillator.connect(gain); gain.connect(ctx.destination); oscillator.start(); oscillator.stop(ctx.currentTime + .07); };
  const notify = (message) => { setToast(message); sound(650); };
  const copyEmail = async () => { await navigator.clipboard.writeText('rodriaquij1994@gmail.com'); notify(t.copied); };
  const scrollTo = (id) => { setCurrentSection(id); setNavTarget(id); setMenuOpen(false); sound(); requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })); setTimeout(() => setNavTarget(''), 850); };

  return <main className={`ref-home ref-home--contrast ${navTarget ? 'is-navigating' : ''}`} data-nav-target={navTarget || undefined}>
    <SiteLoader visible={loading} />
    <div className="ref-ambient" aria-hidden="true" />
    <div className="ref-column">
      <SiteHeader items={[{ id: 'about', label: t.nav.about }, { id: 'projects', label: t.nav.work }, { id: 'capabilities', label: t.nav.capabilities }, { id: 'contact', label: t.nav.contact }]} open={menuOpen} setOpen={setMenuOpen} onNavigate={scrollTo} currentSection={currentSection} scrolled={scrolled} />
      <section className="ref-section ref-hero ref-reveal">
        <div className="hero-heading-grid">
          <div><EditorialKicker>{t.eyebrow}</EditorialKicker><h1 className="ref-hero-title">{t.title}</h1><p className="ref-hero-role">{t.role}</p></div>
          <div className="hero-avatar-block">
            <div className={`hero-avatar-interaction ${avatarOpen ? 'is-open' : ''}`}>
              <button className="hero-avatar-ring" type="button" aria-label={t.avatarAction} aria-expanded={avatarOpen} aria-controls="avatar-close-friends-card" onClick={() => { setAvatarOpen((open) => !open); sound(720); }}>
                <img src={avatarImage} alt="Rodrigo Aquije" />
                <span className="hero-avatar-badge" aria-hidden="true"><Sparkles size={15} /></span>
              </button>
              <div id="avatar-close-friends-card" className="avatar-story-card" role="note">
                <span>{t.avatarNote}</span>
                <strong>{t.avatarStoryTitle}</strong>
                <p>{t.avatarStoryCopy}</p>
                <Link to="/sobre-mi" onClick={() => setAvatarOpen(false)}>{t.avatarStoryCta}<ArrowBendUpRightIcon weight="bold" /></Link>
              </div>
            </div>
            <span>{t.location}</span><small>{t.profile}</small><em>{t.avatarHint}</em>
          </div>
        </div>
        <div className="ref-bio"><p>{t.bio}</p><p>{t.bioDetail}</p></div>
        <div className="ref-actions"><HireConsole t={t} open={hireOpen} setOpen={setHireOpen} sound={sound} /><button className={`ref-secondary ref-press copy-email-button ${emailCopied ? 'is-copied' : ''}`} onClick={copyEmail} aria-label={emailCopied ? t.copied : t.copy}><span className="copy-email-icon" aria-hidden="true">{emailCopied ? <Check size={17} /> : <Copy size={17} />}</span><span>{emailCopied ? t.copied : t.copy}</span></button><LinkedInButton t={t} /></div>
      </section>
      <section id="projects" data-section="projects" className="ref-section projects-section ref-reveal"><div className="ref-heading-row"><div><SectionLabel>{t.selected}</SectionLabel><h2>{t.workTitle}</h2></div><p>{t.workIntro}</p></div><div className="case-square-grid">{t.projects.map((project) => <CaseCard key={project.name} project={project} t={t} onOpen={() => project.href ? window.location.assign(project.href) : notify(t.soon)} />)}</div></section>
      <section id="about" data-section="about" className="ref-section about-section ref-reveal"><SectionLabel>{t.about}</SectionLabel><div className="about-layout"><h2>{t.aboutTitle}</h2><div><p>{t.aboutCopy}</p><p>{t.aboutAside}</p><Link className="about-page-cta" to="/sobre-mi"><span>{t.aboutCta}</span><ArrowBendUpRightIcon weight="bold" /></Link></div></div><div className="ref-client-strip" aria-label={t.trust}>{CLIENTS[lang].map(([name, type]) => <span key={name}><strong>{name}</strong><small>{type}</small></span>)}</div></section>
      <section id="capabilities" data-section="capabilities" className="ref-section capabilities-section capabilities-section--shader ref-reveal"><CapabilityShader theme={theme} reducedMotion={reducedMotion} /><div className="capabilities-content"><SectionLabel>{t.capabilities}</SectionLabel><div className="capability-list capability-list--expressive">{t.capabilityData.map((capability) => <article key={capability.title} className="capability-row capability-row--expressive"><div><h3>{capability.title}</h3><p>{capability.desc}</p></div><div className="capability-reveal"><strong>{capability.proof}</strong><span>{capability.chips.map((chip) => <small key={chip}>{chip}</small>)}</span><ArrowBendUpRightIcon weight="duotone" /></div></article>)}</div></div></section>
      <SiteContact dataSection="contact" label={t.connect} title={lang === 'es' ? 'Conversemos sobre el problema real.' : 'Let’s discuss the real problem.'} lang={lang} linkedinNetwork={t.linkedinNetwork} onCopy={copyEmail} className="ref-reveal" />
      <SiteFooter text={t.footer} />
    </div><div className={`ref-toast ${toast ? 'is-visible' : ''}`} role="status" aria-live="polite"><Check size={15} /> {toast}</div>
  </main>;
}

function CapabilityShader({ theme, reducedMotion }) { const isLight = theme === 'light'; return <div className="capabilities-shader" aria-hidden="true"><GrainGradient width="100%" height="100%" colors={isLight ? ['#F1F4F9', '#D8F4E7', '#DCE8FF', '#F4F7F3'] : ['#090B10', '#10241D', '#142035', '#090B10']} colorBack={isLight ? '#F1F4F9' : '#090B10'} softness={.88} intensity={.22} noise={.12} shape="corners" speed={reducedMotion ? 0 : .055} scale={1.15} maxPixelCount={700000} /></div>; }
function LinkedInButton({ t }) { return <a className="ref-icon-button linkedin-hover" href="https://linkedin.com/in/rodrigo-aquije" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /><span className="linkedin-profile-card"><span className="linkedin-banner"><b>in</b></span><span className="linkedin-card-body"><img src={avatarImage} alt="" /><strong>Rodrigo Aquije V.</strong><small>Product Designer</small><span className="linkedin-location">{t.location}</span><span className="linkedin-connect">{t.linkedinAction}</span></span></span></a>; }
function CaseCard({ project, t, onOpen }) {
  const cover = project.visual === 'vaca'
    ? <span className="case-generated-cover case-generated-cover--vaca" aria-hidden="true"><span className="vaca-cover-brand">vaca</span><span className="vaca-cover-ledger"><small>Fondo del depa</small><strong>S/ 480</strong><i><b /><b /><b /></i></span><span className="vaca-cover-members"><i>R</i><i>C</i><i>D</i></span></span>
    : <img src={project.image} alt={`${project.name} project cover`} />;
  const media = <span className="case-square-media">{cover}<span className="case-square-overlay"><span><small>{t.overlayLabels[0]}</small><strong>{project.overlay.role}</strong></span><span><small>{t.overlayLabels[1]}</small><strong>{project.overlay.problem}</strong></span><span><small>{t.overlayLabels[2]}</small><strong>{project.overlay.contribution}</strong></span></span><span className="case-square-action"><span>{project.href ? t.open : t.soon}</span><ArrowBendUpRightIcon weight="bold" /></span></span>;
  const copy = <div className="case-square-copy"><span>{project.tag}</span><strong className="case-square-name">{project.name}</strong><h3>{project.headline}</h3><p>{project.summary}</p><div>{project.chips.map((chip) => <small key={chip}>{chip}</small>)}</div></div>;

  return <article className="case-square-card">{project.href
    ? <Link className="case-square-link" to={project.href} aria-label={`${t.open}: ${project.name}`}>{media}{copy}</Link>
    : <><button className="case-square-media-trigger" onClick={onOpen} aria-label={`${t.soon}: ${project.name}`}>{media}</button>{copy}</>}
  </article>;
}
function HireConsole({ t, open, setOpen, sound }) { return <div className={`hire-console ${open ? 'is-open' : ''}`}><button className="hire-trigger ref-press" onClick={() => { setOpen(!open); sound(560); }} aria-expanded={open}><span>{t.hire}</span><ArrowCircleRightIcon size={18} weight="duotone" /></button><div className="hire-panel" inert={!open ? '' : undefined}><p>{t.hireDesc}</p><form onSubmit={(event) => { event.preventDefault(); const data = new FormData(event.currentTarget); window.location.href = `mailto:rodriaquij1994@gmail.com?subject=${encodeURIComponent(`Portfolio inquiry · ${data.get('name')}`)}&body=${encodeURIComponent(`${data.get('brief')}\n\n${data.get('email')}`)}`; }}><label>{t.name}<input name="name" required autoComplete="name" /></label><label>{t.email}<input name="email" type="email" required autoComplete="email" /></label><label>{t.brief}<textarea name="brief" required rows="4" /></label><button type="submit" className="hire-submit ref-press"><Send size={15} /> {t.send}</button></form></div></div>; }
