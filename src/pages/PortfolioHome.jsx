import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GrainGradient } from '@paper-design/shaders-react';
import { ArrowBendUpRightIcon } from '@phosphor-icons/react/dist/csr/ArrowBendUpRight';
import { ArrowCircleRightIcon } from '@phosphor-icons/react/dist/csr/ArrowCircleRight';
import { Check, Copy, Linkedin, Send } from 'lucide-react';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteLoader from '../components/SiteLoader.jsx';
import SectionLabel from '../components/SectionLabel.jsx';
import EditorialKicker from '../components/EditorialKicker.jsx';
import SiteContact from '../components/SiteContact.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { useSiteDesignSystem } from '../components/SiteDesignSystem.jsx';
import avatarImage from '../../assets/avatar.webp';
import bbvaCover from '../../assets/359shots_so.webp';
import yapeCover from '../../assets/216shots_so.webp';
import allpaCover from '../../assets/344shots_so.webp';

const CLIENTS = {
  es: [['Fahrenheit DDB', 'Agencia'], ['BBVA Perú', 'Banca'], ['Amsterdam', 'Agencia digital'], ['CENTRUM PUCP', 'Educación ejecutiva'], ['UTOPIQ', 'EdTech']],
  en: [['Fahrenheit DDB', 'Agency'], ['BBVA Peru', 'Banking'], ['Amsterdam', 'Digital agency'], ['CENTRUM PUCP', 'Executive education'], ['UTOPIQ', 'EdTech']]
};

const CONTENT = {
  es: {
    nav: { about: 'Sobre mí', work: 'Proyectos', capabilities: 'Especialidades', contact: 'Contacto' },
    role: 'Product Designer & UX/UI Designer', location: 'Lima, Perú', eyebrow: 'Producto digital · Banca · UX/UI', title: 'Rodrigo Aquije',
    profile: 'Economía · Banca · Diseño',
    bio: 'Soy Product Designer y UX/UI Designer con formación en Economía y más de cuatro años de experiencia previa en riesgo crediticio y evaluación de portafolios. Esa base me ayuda a conectar decisiones de interfaz con regulación, comportamiento y objetivos de negocio.',
    bioDetail: 'Actualmente trabajo en Fahrenheit DDB, donde diseño UX para campañas de mailing de Préstamos de Libre Disponibilidad de BBVA Perú. Trabajo con versiones para móvil y escritorio y con las restricciones propias del canal, la marca y el compliance bancario.',
    about: 'Sobre mí', aboutTitle: 'Pasé del análisis de riesgo crediticio al diseño UX para banca.',
    aboutCopy: 'Antes de trabajar en UX/UI pasé más de cuatro años analizando riesgo crediticio y portafolios. Esa experiencia me ayuda a entender cómo una decisión de interfaz afecta al usuario, la operación y los objetivos comerciales.',
    aboutAside: 'Hoy aplico esa base en UX para email dentro de BBVA Perú y la complemento con diseño visual, prototipado y desarrollo front-end asistido por IA.', aboutCta: 'Conocer más sobre mi trayectoria',
    hire: 'Contactar', hireDesc: 'Cuéntame el producto, el reto y el horizonte del proyecto.', name: 'Nombre', email: 'Email', brief: 'Contexto del proyecto', send: 'Preparar mensaje',
    copy: 'Copiar email', copied: 'Email copiado', trust: 'Experiencia & colaboraciones', selected: 'Casos de estudio', workTitle: 'Trabajo seleccionado',
    workIntro: 'Cuatro casos de estudio: uno profesional de UX para email y tres proyectos conceptuales sobre estados transaccionales, decisiones financieras y gastos compartidos.', open: 'Explorar caso completo', soon: 'Caso en desarrollo',
    capabilities: 'Habilidades & especialidades', connect: 'Conectemos', footer: 'Diseñado y construido en Lima.',
    linkedinAction: 'Conectar en LinkedIn', linkedinNetwork: 'Red profesional', overlayLabels: ['Rol', 'Problema', 'Contribución'],
    capabilityData: [
      { title: 'Producto y UX/UI', desc: 'Defino arquitectura de información, flujos, estados y prototipos para convertir requisitos de usuario y negocio en decisiones de interfaz.', proof: 'Del problema al prototipo que se puede revisar y probar.', chips: ['Figma', 'Framer', 'Investigación de usuarios', 'Prototipado'] },
      { title: 'Interfaces y front-end', desc: 'Construyo prototipos funcionales y sistemas de componentes para comprobar comportamiento, responsive y consistencia fuera del archivo de diseño.', proof: 'El código funciona como una herramienta para validar y comunicar decisiones de diseño.', chips: ['HTML', 'CSS', 'JavaScript', 'React'] },
      { title: 'Diseño visual e IA', desc: 'Combino herramientas visuales con agentes de IA para explorar alternativas, documentar decisiones y construir prototipos con mayor rapidez.', proof: 'La IA acelera la ejecución; el criterio de producto y la revisión siguen siendo míos.', chips: ['Adobe Creative Cloud', 'Codex', 'Claude Code', 'Gemini'] }
    ],
    projects: [
      { name: 'BBVA Perú', tag: 'Caso profesional · UX para email', headline: 'Una oferta distinta para cada cliente.', summary: 'Un email que debía funcionar para todos.', image: bbvaCover, href: '/casos/bbva', chips: ['UX para email', 'Compliance', 'SFMC'], overlay: { role: 'Product Designer / UX/UI Designer', problem: 'Cada cliente recibía una oferta variable que debía entenderse rápido y cumplir restricciones bancarias.', contribution: 'Jerarquía de información, módulos responsive y preparación de activos para Salesforce Marketing Cloud.' } },
      { name: 'Yape', tag: 'Proyecto conceptual · Estados transaccionales', headline: '¿Qué haces cuando Yape no puede confirmar si tu dinero llegó?', summary: 'Una propuesta para comunicar la espera y ofrecer una siguiente acción clara.', image: yapeCover, href: '/casos/yape', chips: ['Auditoría UX', 'Microcopy', 'Sistema de estados'], overlay: { role: 'UX/UI Designer', problem: 'Un estado sin confirmación puede llevar al usuario a repetir una transferencia o buscar ayuda.', contribution: 'Arquitectura propuesta de estados, expectativas y opciones de recuperación.' } },
      { name: 'Allpa', tag: 'Proyecto conceptual · Finanzas conductuales', headline: '¿Puede tu reloj hacerte pensar dos veces antes de pagar?', summary: 'Un concepto para mostrar el efecto de una compra sobre el flujo de caja antes de confirmarla.', image: allpaCover, href: '/casos/allpa', chips: ['watchOS', 'Economía conductual', 'UX de flujo de caja'], overlay: { role: 'Product Designer', problem: 'El impacto de una compra suele revisarse después del gasto, cuando ya no puede cambiar la decisión.', contribution: 'Intervención contextual propuesta para Apple Watch e iOS antes de confirmar el pago.' } },
      { name: 'Vaca', tag: 'Proyecto conceptual · Gastos compartidos', headline: 'Dividir la cuenta es fácil. Cobrarle a tus roommates no.', summary: 'Vaca propone reunir el dinero antes de pagar los gastos comunes.', visual: 'vaca', href: '/casos/vaca', chips: ['Estrategia de producto', 'UX de wallet', 'Flujo conceptual'], overlay: { role: 'Product Designer', problem: 'Dividir la deuda no elimina el momento incómodo de cobrar.', contribution: 'Definición conceptual de un fondo prepagado para cubrir gastos del hogar antes de que aparezca la deuda.' } }
    ]
  },
  en: {
    nav: { about: 'About', work: 'Projects', capabilities: 'Expertise', contact: 'Contact' },
    role: 'Product Designer & UX/UI Designer', location: 'Lima, Peru', eyebrow: 'Digital product · Banking · UX/UI', title: 'Rodrigo Aquije',
    profile: 'Economics · Banking · Design',
    bio: 'I am a Product Designer and UX/UI Designer with a background in Economics and more than four years of previous experience in credit risk and portfolio evaluation. That foundation helps me connect interface decisions with regulation, behavior and business goals.',
    bioDetail: 'I currently work at Fahrenheit DDB, where I design UX for BBVA Peru’s personal-loan email campaigns. I work across mobile and desktop versions within the channel, brand and banking-compliance constraints.',
    about: 'About', aboutTitle: 'I moved from credit-risk analysis to UX design for banking.',
    aboutCopy: 'Before working in UX/UI, I spent more than four years analyzing credit risk and portfolios. That experience helps me understand how an interface decision affects users, operations and commercial goals.',
    aboutAside: 'Today I apply that foundation to email UX for BBVA Peru, complemented by visual design, prototyping and AI-assisted front-end development.', aboutCta: 'Learn more about my background',
    hire: 'Get in touch', hireDesc: 'Share the product, the challenge and the project horizon.', name: 'Name', email: 'Email', brief: 'Project context', send: 'Prepare message',
    copy: 'Copy email', copied: 'Email copied', trust: 'Experience & collaborations', selected: 'Case studies', workTitle: 'Selected work',
    workIntro: 'Four case studies: one professional email UX case and three conceptual projects about transaction states, financial decisions and shared expenses.', open: 'Explore full case', soon: 'Case in progress',
    capabilities: 'Capabilities & craft', connect: 'Let’s connect', footer: 'Designed and built in Lima.',
    linkedinAction: 'Connect on LinkedIn', linkedinNetwork: 'Professional network', overlayLabels: ['Role', 'Problem', 'Contribution'],
    capabilityData: [
      { title: 'Product and UX/UI', desc: 'I define information architecture, flows, states and prototypes to turn user and business requirements into interface decisions.', proof: 'From the problem to a prototype that can be reviewed and tested.', chips: ['Figma', 'Framer', 'User research', 'Prototyping'] },
      { title: 'Interfaces and front-end', desc: 'I build functional prototypes and component systems to check behavior, responsiveness and consistency outside the design file.', proof: 'Code is a tool for validating and communicating design decisions.', chips: ['HTML', 'CSS', 'JavaScript', 'React'] },
      { title: 'Visual design and AI', desc: 'I combine visual tools with AI agents to explore alternatives, document decisions and build prototypes faster.', proof: 'AI speeds up execution; product judgment and review remain mine.', chips: ['Adobe Creative Cloud', 'Codex', 'Claude Code', 'Gemini'] }
    ],
    projects: [
      { name: 'BBVA Peru', tag: 'Professional case · Email UX', headline: 'A different offer for every customer.', summary: 'One email that had to work for all of them.', image: bbvaCover, href: '/casos/bbva', chips: ['Email UX', 'Compliance', 'SFMC'], overlay: { role: 'Product Designer / UX/UI Designer', problem: 'Each customer received a variable offer that had to be understood quickly while meeting banking restrictions.', contribution: 'Information hierarchy, responsive modules and asset preparation for Salesforce Marketing Cloud.' } },
      { name: 'Yape', tag: 'Concept project · Transaction states', headline: 'What do you do when Yape cannot confirm whether your money arrived?', summary: 'A proposal for communicating the wait and offering a clear next action.', image: yapeCover, href: '/casos/yape', chips: ['UX audit', 'Microcopy', 'State system'], overlay: { role: 'UX/UI Designer', problem: 'An unconfirmed state can lead users to repeat a transfer or seek help.', contribution: 'A proposed architecture for states, expectations and recovery options.' } },
      { name: 'Allpa', tag: 'Concept project · Behavioral finance', headline: 'Can your watch make you think twice before paying?', summary: 'A concept that shows how a purchase affects cash flow before confirmation.', image: allpaCover, href: '/casos/allpa', chips: ['watchOS', 'Behavioral economics', 'Cash-flow UX'], overlay: { role: 'Product Designer', problem: 'The impact of a purchase is often reviewed after spending, when the decision can no longer change.', contribution: 'A proposed contextual intervention for Apple Watch and iOS before payment confirmation.' } },
      { name: 'Vaca', tag: 'Concept project · Shared expenses', headline: 'Splitting the bill is easy. Collecting from your roommates is not.', summary: 'Vaca proposes gathering the money before paying shared expenses.', visual: 'vaca', href: '/casos/vaca', chips: ['Product strategy', 'Wallet UX', 'Concept flow'], overlay: { role: 'Product Designer', problem: 'Splitting a debt does not remove the awkward moment of collecting it.', contribution: 'A concept for a prepaid fund that covers household expenses before debt appears.' } }
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
  const t = CONTENT[lang];

  useEffect(() => { document.title = 'Rodrigo Aquije — Product Designer & UX/UI Designer'; }, [lang]);

  useEffect(() => { const media = window.matchMedia('(prefers-reduced-motion: reduce)'); const update = () => setReducedMotion(media.matches); update(); media.addEventListener('change', update); return () => media.removeEventListener('change', update); }, []);
  useEffect(() => { document.body.classList.add('is-loading'); const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 240 : 880; const timer = setTimeout(() => setLoading(false), delay); return () => { clearTimeout(timer); document.body.classList.remove('is-loading'); }; }, []);
  useEffect(() => { if (!loading) document.body.classList.remove('is-loading'); }, [loading]);

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
  const copyEmail = async () => { await navigator.clipboard.writeText('rodriaquij1994@gmail.com'); notify(t.copied); };
  const scrollTo = (id) => { setCurrentSection(id); setNavTarget(id); setMenuOpen(false); sound(); requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })); setTimeout(() => setNavTarget(''), 850); };

  return <main className={`ref-home ref-home--contrast ${navTarget ? 'is-navigating' : ''}`} data-nav-target={navTarget || undefined}>
    <SiteLoader visible={loading} />
    <div className="ref-ambient" aria-hidden="true" />
    <div className="ref-column">
      <SiteHeader items={[{ id: 'about', label: t.nav.about }, { id: 'projects', label: t.nav.work }, { id: 'capabilities', label: t.nav.capabilities }, { id: 'contact', label: t.nav.contact }]} open={menuOpen} setOpen={setMenuOpen} onNavigate={scrollTo} currentSection={currentSection} scrolled={scrolled} />
      <section className="ref-section ref-hero ref-reveal"><div className="hero-heading-grid"><div><EditorialKicker>{t.eyebrow}</EditorialKicker><h1 className="ref-hero-title">{t.title}</h1><p className="ref-hero-role">{t.role}</p></div><div className="hero-avatar-block"><span className="hero-avatar-ring"><img src={avatarImage} alt="Rodrigo Aquije" /></span><span>{t.location}</span><small>{t.profile}</small></div></div><div className="ref-bio"><p>{t.bio}</p><p>{t.bioDetail}</p></div><div className="ref-actions"><HireConsole t={t} open={hireOpen} setOpen={setHireOpen} sound={sound} /><button className="ref-secondary ref-press" onClick={copyEmail}><Copy size={18} /> {t.copy}</button><LinkedInButton t={t} /></div></section>
      <section id="projects" data-section="projects" className="ref-section projects-section ref-reveal"><div className="ref-heading-row"><div><SectionLabel>{t.selected}</SectionLabel><h2>{t.workTitle}</h2></div><p>{t.workIntro}</p></div><div className="case-square-grid">{t.projects.map((project) => <CaseCard key={project.name} project={project} t={t} onOpen={() => project.href ? window.location.assign(project.href) : notify(t.soon)} />)}</div></section>
      <section id="about" data-section="about" className="ref-section about-section ref-reveal"><SectionLabel>{t.about}</SectionLabel><div className="about-layout"><h2>{t.aboutTitle}</h2><div><p>{t.aboutCopy}</p><p>{t.aboutAside}</p><Link className="about-page-cta" to="/sobre-mi"><span>{t.aboutCta}</span><ArrowBendUpRightIcon weight="bold" /></Link></div></div><div className="ref-client-strip" aria-label={t.trust}>{CLIENTS[lang].map(([name, type]) => <span key={name}><strong>{name}</strong><small>{type}</small></span>)}</div></section>
      <section id="capabilities" data-section="capabilities" className="ref-section capabilities-section capabilities-section--shader ref-reveal"><CapabilityShader theme={theme} reducedMotion={reducedMotion} /><div className="capabilities-content"><SectionLabel>{t.capabilities}</SectionLabel><div className="capability-list capability-list--expressive">{t.capabilityData.map((capability) => <article key={capability.title} className="capability-row capability-row--expressive"><div><h3>{capability.title}</h3><p>{capability.desc}</p></div><div className="capability-reveal"><strong>{capability.proof}</strong><span>{capability.chips.map((chip) => <small key={chip}>{chip}</small>)}</span><ArrowBendUpRightIcon weight="duotone" /></div></article>)}</div></div></section>
      <SiteContact dataSection="contact" label={t.connect} title={lang === 'es' ? 'Conversemos sobre el problema real.' : 'Let’s discuss the real problem.'} lang={lang} linkedinNetwork={t.linkedinNetwork} onCopy={copyEmail} className="ref-reveal" />
      <SiteFooter text={t.footer} />
    </div><div className={`ref-toast ${toast ? 'is-visible' : ''}`} role="status" aria-live="polite"><Check size={15} /> {toast}</div>
  </main>;
}

function CapabilityShader({ theme, reducedMotion }) { const isLight = theme === 'light'; return <div className="capabilities-shader" aria-hidden="true"><GrainGradient width="100%" height="100%" colors={isLight ? ['#F1F4F9', '#D8F4E7', '#DCE8FF', '#F4F7F3'] : ['#090B10', '#10241D', '#142035', '#090B10']} colorBack={isLight ? '#F1F4F9' : '#090B10'} softness={.88} intensity={.22} noise={.12} shape="corners" speed={reducedMotion ? 0 : .055} scale={1.15} maxPixelCount={700000} /></div>; }
function LinkedInButton({ t }) { return <a className="ref-icon-button linkedin-hover" href="https://linkedin.com/in/rodrigo-aquije" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /><span className="linkedin-profile-card"><span className="linkedin-banner"><b>in</b></span><span className="linkedin-card-body"><img src={avatarImage} alt="" /><strong>Rodrigo Aquije V.</strong><small>Product Designer & UX/UI Designer</small><span className="linkedin-location">{t.location}</span><span className="linkedin-connect">{t.linkedinAction}</span></span></span></a>; }
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
