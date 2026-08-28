import React, { useEffect, useState } from 'react';
import { ArrowBendUpRightIcon } from '@phosphor-icons/react/dist/csr/ArrowBendUpRight';
import { Cat, Check, Clapperboard, Footprints, Laptop, UtensilsCrossed } from 'lucide-react';
import SiteHeader from '../components/SiteHeader.jsx';
import SectionLabel from '../components/SectionLabel.jsx';
import EditorialKicker from '../components/EditorialKicker.jsx';
import SiteContact from '../components/SiteContact.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import MusicPlayer from '../components/MusicPlayer.jsx';
import { useSiteDesignSystem } from '../components/SiteDesignSystem.jsx';
import avatarImage from '../../assets/avatar.webp';
import sonatePacifique from "../../assets/L'impératrice - Sonate Pacifique.mp3";

const PERSONAL_TRACK = {
  src: sonatePacifique,
  title: 'Sonate Pacifique',
  artist: "L'Impératrice"
};

const CONTENT = {
  es: {
    nav: { personal: 'Personal', story: 'Historia', experience: 'Experiencia', contact: 'Contacto' },
    eyebrow: 'Producto digital · Banca · UX/UI',
    name: 'Rodrigo Aquije Vásquez',
    role: 'Product Designer & UX/UI Designer',
    quote: 'No empecé mi carrera en diseño.',
    intro: 'Estudié Economía y pasé más de cuatro años trabajando en riesgo crediticio y evaluación de portafolios. Con el tiempo decidí acercarme a otra parte del problema: cómo se presenta la información y qué necesita una persona para tomar una decisión.',
    introTwo: 'En Fahrenheit DDB diseño UX para campañas de mailing de Préstamos de Libre Disponibilidad de BBVA Perú. Trabajo con versiones para móvil y escritorio y con las restricciones propias del canal, la marca y el compliance bancario.',
    portraitCaption: 'Lima, Perú · GMT−5',
    personalLabel: 'Fuera del trabajo', personalTitle: 'Prefiero escuchar un álbum completo.',
    personalIntro: 'Me interesa entender cómo un artista construye un proyecto de principio a fin: el orden de las canciones, los cambios de ritmo y la identidad visual. Algún día me gustaría aprender a mezclar como DJ o producir mi propia música.',
    hobbies: [
      { title: 'Lola y Perlita', body: 'Tengo dos gatas, Lola y Perlita. Compartir la casa con ellas es parte de mi rutina diaria.', action: 'Compañía' },
      { title: 'Tecnología y ciencia', body: 'Me gusta entender cómo funcionan las computadoras y las laptops, comparar sus componentes y seguir los cambios de la industria. La ciencia también ocupa buena parte de lo que leo y veo por curiosidad.', action: 'Aprender' },
      { title: 'Arte, cine y música', body: 'El arte, el cine y la música alimentan mi criterio visual. Me interesa observar cómo cada disciplina construye una atmósfera y sostiene una intención.', action: 'Observar' },
      { title: 'Cocina', body: 'Desde 2025 aprendo cocina por mi cuenta. Pruebo recetas nuevas y algunas variaciones propias. Mi postre favorito es el suspiro a la limeña.', action: 'Probar' },
      { title: 'Movimiento y objetos', body: 'Me gusta el fútbol y salir a correr. También me interesan las zapatillas New Balance por su comodidad y su diseño retrofuturista.', action: 'Moverme' }
    ],
    storyLabel: 'Mi historia',
    storyTitle: 'De analizar riesgo a diseñar interfaces.',
    storyIntro: 'Mi transición al diseño cambió la forma en que uso mi experiencia anterior: ahora observo cómo una decisión visual o de contenido afecta la comprensión, la operación y los objetivos del producto.',
    story: [
      { period: 'Base analítica', title: 'Economía antes que diseño.', body: 'Estudié Economía en la Universidad de Lima entre 2012 y 2017. La formación cuantitativa y financiera me enseñó a trabajar con evidencia, evaluar supuestos y entender que cada decisión tiene costos, riesgos y consecuencias.', tags: ['Universidad de Lima', 'Economía', 'Titulado'] },
      { period: 'Experiencia financiera', title: 'Más de cuatro años en riesgo crediticio y portafolios.', body: 'Entre 2017 y 2022 trabajé en Scania del Perú, Financiera Qapaq y Caja Prymera. Analicé riesgo crediticio y evalué portafolios dentro de entornos donde la regulación y la viabilidad comercial forman parte de cada decisión.', tags: ['Scania del Perú', 'Financiera Qapaq', 'Caja Prymera'] },
      { period: 'Cambio de práctica', title: 'Aprender a convertir análisis en experiencias.', body: 'En 2021 empecé a estudiar Diseño Gráfico en Toulouse Lautrec y UX/UI en Coderhouse. Buscaba una práctica donde pudiera combinar análisis, estructura y oficio visual para trabajar directamente sobre la forma en que las personas entienden y usan un producto.', tags: ['Toulouse Lautrec', 'Coderhouse'] },
      { period: 'Primeras experiencias de diseño', title: 'De identidad visual a productos digitales.', body: 'Entre 2022 y 2025 desarrollé identidad y contenidos para Reina Inca, y después diseñé landing pages, piezas de adquisición y productos de capacitación para UTOPIQ y CENTRUM PUCP. Esta etapa me permitió pasar del diseño visual a problemas de información, recorrido y conversión.', tags: ['Reina Inca', 'UTOPIQ', 'CENTRUM PUCP'] },
      { period: 'Presente', title: 'UX para mailing dentro de BBVA Perú.', body: 'Desde agosto de 2025 trabajo para Préstamos de Libre Disponibilidad de BBVA Perú. Empecé desde Amsterdam y, desde agosto de 2026, continúo con el mismo cliente y las mismas funciones en Fahrenheit DDB. Diseño campañas de mailing, jerarquías de información, módulos responsive y contenido dinámico.', tags: ['BBVA Perú', 'Amsterdam', 'Fahrenheit DDB', 'Salesforce Marketing Cloud'] }
    ],
    skillsLabel: 'Capacidades',
    skillsTitle: 'Capacidades y herramientas.',
    skillsIntro: 'Agrupo las herramientas según el trabajo que me ayudan a resolver.',
    skills: [
      { title: 'Producto y UX/UI', items: ['Arquitectura de información', 'Flujos y estados', 'Investigación de usuarios', 'Prototipado', 'UX writing', 'Diseño conductual'], note: 'Trabajo desde la definición del problema hasta una interfaz que pueda revisarse y probarse.' },
      { title: 'Diseño y prototipado', items: ['Figma', 'Framer', 'Photoshop', 'Illustrator', 'InDesign'], note: 'Uso estas herramientas para explorar conceptos, construir sistemas visuales y comunicar cómo debe comportarse una experiencia.' },
      { title: 'Front-end e IA', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Codex', 'Claude Code', 'Gemini'], note: 'Construyo prototipos funcionales y uso agentes de IA para acelerar la implementación sin delegar el criterio de diseño.' },
      { title: 'Mailing financiero', items: ['Salesforce Marketing Cloud', 'Contenido dinámico', 'Diseño responsive', 'Compatibilidad entre clientes de correo', 'Compliance', 'Métricas de conversión'], note: 'Diseño para las restricciones técnicas, regulatorias y comerciales del canal.' }
    ],
    experienceLabel: 'Experiencia',
    experienceTitle: 'Trayectoria profesional.',
    experienceIntro: 'Cargos, fechas y responsabilidades verificadas.',
    roles: [
      { company: 'Fahrenheit DDB · BBVA Perú', date: 'Ago 2026 — Presente', role: 'Product Designer / UX/UI Designer', body: 'Diseño UX para campañas de mailing de Préstamos de Libre Disponibilidad. Construyo módulos responsive, organizo contenido variable y preparo activos para Salesforce Marketing Cloud bajo requisitos de marca, compatibilidad y compliance bancario.' },
      { company: 'Amsterdam · BBVA Perú', date: 'Ago 2025 — Ago 2026', role: 'Product Designer / UX/UI Designer', body: 'Asumí el diseño y la ejecución de campañas de mailing para el mismo producto de BBVA Perú. Trabajé con producto y marketing para alinear jerarquía, contenido y llamadas a la acción con los objetivos de cada campaña.' },
      { company: 'UTOPIQ · CENTRUM PUCP', date: 'Feb 2025 — Ago 2025', role: 'Diseñador UX/UI & Gráfico', body: 'Diseñé y mantuve landing pages, productos de capacitación y piezas de adquisición para CENTRUM PUCP, con foco en coherencia de marca y conversión.' },
      { company: 'Restaurante Reina Inca', date: '2022 — 2024', role: 'Diseñador Gráfico & Visual', body: 'Desarrollé la identidad visual del restaurante y un sistema de contenidos para redes sociales, materiales promocionales y otros puntos de contacto de marca.' },
      { company: 'Caja Prymera', date: '2021 — 2022', role: 'Analista de Portafolio', body: 'Analicé riesgo crediticio y evalué el comportamiento de portafolios para apoyar su seguimiento y control.' },
      { company: 'Financiera Qapaq', date: '2019 — 2021', role: 'Asistente de Riesgos', body: 'Apoyé el análisis de riesgo crediticio y el seguimiento de portafolios dentro de una institución financiera regulada.' },
      { company: 'Scania del Perú', date: '2017 — 2018', role: 'Practicante', body: 'Inicié mi experiencia profesional en funciones relacionadas con finanzas y créditos.' }
    ],
    educationLabel: 'Formación',
    education: [
      { program: 'Design System', school: 'repensar.la · En curso', year: '2026' },
      { program: 'Google UX Design Professional Certificate', school: 'Google · Concluido', year: '2026' },
      { program: 'Behavioral Design', school: 'PUCP · Concluido', year: '2026' },
      { program: 'Diseño Gráfico', school: 'Toulouse Lautrec', year: '2021 — 2025' },
      { program: 'Diseño UX/UI', school: 'Coderhouse', year: '2021 — 2022' },
      { program: 'Economía', school: 'Universidad de Lima · Titulado', year: '2012 — 2017' }
    ],
    connect: 'Conectemos', connectTitle: 'Conversemos sobre el problema real.', linkedinNetwork: 'Red profesional',
    ctaLabel: 'Próxima conversación',
    ctaTitle: 'Trabajemos en productos donde la claridad sí importa.',
    ctaBody: 'Estoy abierto a roles y proyectos donde producto, sistemas y contexto financiero se encuentren. Si ese es el reto, conversemos.',
    email: 'Copiar email', copied: 'Email copiado', linkedin: 'Conectar en LinkedIn', cv: 'Ver currículum', footer: 'Diseñado y construido en Lima.'
  },
  en: {
    nav: { personal: 'Personal', story: 'Story', experience: 'Experience', contact: 'Contact' },
    eyebrow: 'Digital product · Banking · UX/UI',
    name: 'Rodrigo Aquije Vásquez',
    role: 'Product Designer & UX/UI Designer',
    quote: 'I did not begin my career in design.',
    intro: 'I studied Economics and spent more than four years working in credit risk and portfolio evaluation. Over time, I moved closer to another part of the problem: how information is presented and what a person needs to make a decision.',
    introTwo: 'At Fahrenheit DDB, I design UX for BBVA Peru’s personal-loan email campaigns. I work across mobile and desktop versions within the channel, brand and banking-compliance constraints.',
    portraitCaption: 'Lima, Peru · GMT−5',
    personalLabel: 'Outside work', personalTitle: 'I prefer listening to a full album.',
    personalIntro: 'I am interested in how an artist builds a project from beginning to end: the sequence of songs, shifts in rhythm and visual identity. Someday I would like to learn to DJ or produce my own music.',
    hobbies: [
      { title: 'Lola and Perlita', body: 'I have two cats, Lola and Perlita. Sharing my home with them is part of my daily routine.', action: 'Company' },
      { title: 'Technology and science', body: 'I like understanding how computers and laptops work, comparing their components and following changes in the industry. Science also takes up a good part of what I read and watch out of curiosity.', action: 'Learn' },
      { title: 'Art, film and music', body: 'Art, film and music feed my visual judgment. I am interested in how each discipline builds an atmosphere and sustains an intention.', action: 'Observe' },
      { title: 'Cooking', body: 'Since 2025, I have been teaching myself to cook. I try new recipes and some variations of my own. My favorite dessert is suspiro a la limeña.', action: 'Try' },
      { title: 'Movement and objects', body: 'I like football and running. I am also interested in New Balance sneakers for their comfort and retrofuturist design.', action: 'Move' }
    ],
    storyLabel: 'My story', storyTitle: 'From analyzing risk to designing interfaces.',
    storyIntro: 'My transition into design changed how I use my previous experience: I now look at how a visual or content decision affects understanding, operations and product goals.',
    story: [
      { period: 'Analytical foundation', title: 'Economics before design.', body: 'I studied Economics at Universidad de Lima from 2012 to 2017. My quantitative and financial education taught me to work with evidence, assess assumptions and understand that every decision has costs, risks and consequences.', tags: ['Universidad de Lima', 'Economics', 'Degree completed'] },
      { period: 'Financial experience', title: 'More than four years in credit risk and portfolios.', body: 'From 2017 to 2022, I worked at Scania del Peru, Financiera Qapaq and Caja Prymera. I analyzed credit risk and evaluated portfolios in environments where regulation and commercial viability are part of every decision.', tags: ['Scania del Peru', 'Financiera Qapaq', 'Caja Prymera'] },
      { period: 'A new practice', title: 'Learning to turn analysis into experiences.', body: 'In 2021, I began studying Graphic Design at Toulouse Lautrec and UX/UI at Coderhouse. I wanted a practice where I could combine analysis, structure and visual craft to work directly on how people understand and use a product.', tags: ['Toulouse Lautrec', 'Coderhouse'] },
      { period: 'First design roles', title: 'From visual identity to digital products.', body: 'Between 2022 and 2025, I developed identity and content for Reina Inca, then designed landing pages, acquisition assets and training products for UTOPIQ and CENTRUM PUCP. This stage moved my work from visual design into information, journeys and conversion.', tags: ['Reina Inca', 'UTOPIQ', 'CENTRUM PUCP'] },
      { period: 'Present', title: 'Email UX for BBVA Peru.', body: 'I have worked on BBVA Peru’s personal-loan campaigns since August 2025. I began at Amsterdam and continued with the same client and responsibilities at Fahrenheit DDB in August 2026. I design email campaigns, information hierarchies, responsive modules and dynamic content.', tags: ['BBVA Peru', 'Amsterdam', 'Fahrenheit DDB', 'Salesforce Marketing Cloud'] }
    ],
    skillsLabel: 'Capabilities', skillsTitle: 'Capabilities and tools.',
    skillsIntro: 'I group tools by the work they help me solve.',
    skills: [
      { title: 'Product and UX/UI', items: ['Information architecture', 'Flows and states', 'User research', 'Prototyping', 'UX writing', 'Behavioral design'], note: 'I work from problem definition to an interface that can be reviewed and tested.' },
      { title: 'Design and prototyping', items: ['Figma', 'Framer', 'Photoshop', 'Illustrator', 'InDesign'], note: 'I use these tools to explore concepts, build visual systems and communicate how an experience should behave.' },
      { title: 'Front-end and AI', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Codex', 'Claude Code', 'Gemini'], note: 'I build functional prototypes and use AI agents to accelerate implementation without outsourcing design judgment.' },
      { title: 'Financial email', items: ['Salesforce Marketing Cloud', 'Dynamic content', 'Responsive design', 'Email-client compatibility', 'Compliance', 'Conversion metrics'], note: 'I design for the channel’s technical, regulatory and commercial constraints.' }
    ],
    experienceLabel: 'Experience', experienceTitle: 'Professional experience.',
    experienceIntro: 'Verified roles, dates and responsibilities.',
    roles: [
      { company: 'Fahrenheit DDB · BBVA Peru', date: 'Aug 2026 — Present', role: 'Product Designer / UX/UI Designer', body: 'I design email UX for personal-loan campaigns. I build responsive modules, organize variable content and prepare assets for Salesforce Marketing Cloud under brand, compatibility and banking-compliance requirements.' },
      { company: 'Amsterdam · BBVA Peru', date: 'Aug 2025 — Aug 2026', role: 'Product Designer / UX/UI Designer', body: 'I handled the design and execution of email campaigns for the same BBVA Peru product. I worked with product and marketing to align hierarchy, content and calls to action with each campaign’s goals.' },
      { company: 'UTOPIQ · CENTRUM PUCP', date: 'Feb 2025 — Aug 2025', role: 'UX/UI & Graphic Designer', body: 'I designed and maintained landing pages, training products and acquisition assets for CENTRUM PUCP, focusing on brand consistency and conversion.' },
      { company: 'Restaurante Reina Inca', date: '2022 — 2024', role: 'Graphic & Visual Designer', body: 'I developed the restaurant’s visual identity and a content system for social media, promotional materials and other brand touchpoints.' },
      { company: 'Caja Prymera', date: '2021 — 2022', role: 'Portfolio Analyst', body: 'I analyzed credit risk and evaluated portfolio behavior to support monitoring and control.' },
      { company: 'Financiera Qapaq', date: '2019 — 2021', role: 'Risk Assistant', body: 'I supported credit-risk analysis and portfolio monitoring within a regulated financial institution.' },
      { company: 'Scania del Peru', date: '2017 — 2018', role: 'Intern', body: 'I began my professional experience in responsibilities related to finance and credit.' }
    ],
    educationLabel: 'Education',
    education: [
      { program: 'Design System', school: 'repensar.la · In progress', year: '2026' },
      { program: 'Google UX Design Professional Certificate', school: 'Google · Completed', year: '2026' },
      { program: 'Behavioral Design', school: 'PUCP · Completed', year: '2026' },
      { program: 'Graphic Design', school: 'Toulouse Lautrec', year: '2021 — 2025' },
      { program: 'UX/UI Design', school: 'Coderhouse', year: '2021 — 2022' },
      { program: 'Economics', school: 'Universidad de Lima · Degree completed', year: '2012 — 2017' }
    ],
    connect: 'Let’s connect', connectTitle: 'Let’s discuss the real problem.', linkedinNetwork: 'Professional network',
    ctaLabel: 'Next conversation', ctaTitle: 'Let’s work on products where clarity matters.',
    ctaBody: 'I am open to roles and projects where product, systems and financial context meet. If that is the challenge, let’s talk.',
    email: 'Copy email', copied: 'Email copied', linkedin: 'Connect on LinkedIn', cv: 'View résumé', footer: 'Designed and built in Lima.'
  }
};

export default function AboutPage() {
  const { lang } = useSiteDesignSystem();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [navTarget, setNavTarget] = useState('');
  const [copied, setCopied] = useState(false);
  const t = CONTENT[lang];

  useEffect(() => { document.title = `${lang === 'es' ? 'Sobre mí' : 'About'} — Rodrigo Aquije`; }, [lang]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const nodes = document.querySelectorAll('.about-reveal');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: .1 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const sections = document.querySelectorAll('[data-about-section]');
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setCurrentSection(visible.target.dataset.aboutSection);
    }, { rootMargin: '-24% 0px -58% 0px', threshold: [0, .2, .45] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText('rodriaquij1994@gmail.com');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };
  const scrollTo = (id) => {
    setCurrentSection(id);
    setNavTarget(id);
    setMenuOpen(false);
    window.requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    window.setTimeout(() => setNavTarget(''), 850);
  };

  return <main className={`about-page ${navTarget ? 'is-navigating' : ''}`} data-nav-target={navTarget || undefined}>
    <div className="about-noise" aria-hidden="true" />
    <SiteHeader items={[{ id: 'personal', label: t.nav.personal }, { id: 'story', label: t.nav.story }, { id: 'experience', label: t.nav.experience }, { id: 'about-contact', label: t.nav.contact }]} open={menuOpen} setOpen={setMenuOpen} scrolled={scrolled} currentSection={currentSection} onNavigate={scrollTo} wordmarkHref="/" wordmarkSubtitle={lang === 'es' ? 'Sobre mí' : 'About'} variant="detail" />

    <section className="about-hero about-shell about-reveal">
      <div className="about-hero-title">
        <EditorialKicker>{t.eyebrow}</EditorialKicker>
        <h1>{t.name}</h1>
        <p>{t.role}</p>
        <MusicPlayer lang={lang} track={PERSONAL_TRACK} />
      </div>
      <div className="about-hero-profile">
        <figure className="about-portrait"><img src={avatarImage} alt="Rodrigo Aquije" /><figcaption><span>{t.portraitCaption}</span><small>{t.role}</small></figcaption></figure>
        <div><strong>{t.quote}</strong><p>{t.intro}</p><p>{t.introTwo}</p></div>
      </div>
    </section>

    <section id="personal" data-about-section="personal" className="about-personal about-reveal">
      <div className="about-shell">
        <div className="about-heading-row about-personal-heading"><div><SectionLabel>{t.personalLabel}</SectionLabel><h2>{t.personalTitle}</h2></div><p>{t.personalIntro}</p></div>
        <div className="about-hobby-list">
          {t.hobbies.map((hobby, index) => {
            const HobbyIcon = [Cat, Laptop, Clapperboard, UtensilsCrossed, Footprints][index];
            return <article key={hobby.title}><header><span><HobbyIcon /></span><small>{hobby.action}</small></header><h3>{hobby.title}</h3><p>{hobby.body}</p><ArrowBendUpRightIcon weight="duotone" /></article>;
          })}
        </div>
      </div>
    </section>

    <section id="story" data-about-section="story" className="about-story about-reveal">
      <div className="about-shell about-story-layout">
        <header>
          <SectionLabel>{t.storyLabel}</SectionLabel>
          <h2>{t.storyTitle}</h2>
          <p>{t.storyIntro}</p>
        </header>
        <div className="about-timeline">
          {t.story.map((item) => <article key={item.title}>
            <span className="timeline-node" aria-hidden="true" />
            <p className="timeline-period">{item.period}</p>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <div>{item.tags.map((tag) => <small key={tag}>{tag}</small>)}</div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="about-skills about-shell about-reveal">
      <div className="about-heading-row"><div><SectionLabel>{t.skillsLabel}</SectionLabel><h2>{t.skillsTitle}</h2></div><p>{t.skillsIntro}</p></div>
      <div className="about-skill-grid">
        {t.skills.map((skill) => <article key={skill.title}><header><h3>{skill.title}</h3><ArrowBendUpRightIcon weight="duotone" /></header><ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul><p>{skill.note}</p></article>)}
      </div>
    </section>

    <section id="experience" data-about-section="experience" className="about-experience about-shell about-reveal">
      <div className="about-heading-row"><div><SectionLabel>{t.experienceLabel}</SectionLabel><h2>{t.experienceTitle}</h2></div><p>{t.experienceIntro}</p></div>
      <div className="about-role-list">
        {t.roles.map((item) => <article key={item.company}><div className="role-company"><h3>{item.company}</h3><span>{item.date}</span></div><div className="role-detail"><strong>{item.role}</strong><p>{item.body}</p></div></article>)}
      </div>
      <div className="about-education"><SectionLabel>{t.educationLabel}</SectionLabel><div>{t.education.map((item) => <article key={item.program}><span>{item.year}</span><h3>{item.program}</h3><p>{item.school}</p></article>)}</div></div>
    </section>

    <SiteContact id="about-contact" dataAboutSection="about-contact" label={t.connect} title={t.connectTitle} lang={lang} linkedinNetwork={t.linkedinNetwork} onCopy={copyEmail} className="about-shell about-contact-shared about-reveal" />
    <SiteFooter text={t.footer} className="about-shell" />
    <div className={`about-toast ${copied ? 'is-visible' : ''}`} role="status" aria-live="polite"><Check /> {t.copied}</div>
  </main>;
}
