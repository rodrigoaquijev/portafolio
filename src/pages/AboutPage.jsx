import React, { useEffect, useState } from 'react';
import { ArrowBendUpRightIcon } from '@phosphor-icons/react/dist/csr/ArrowBendUpRight';
import { Aperture, Check, Headphones, UtensilsCrossed } from 'lucide-react';
import SiteHeader from '../components/SiteHeader.jsx';
import SectionLabel from '../components/SectionLabel.jsx';
import SiteContact from '../components/SiteContact.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import MusicPlayer from '../components/MusicPlayer.jsx';
import { useSiteDesignSystem } from '../components/SiteDesignSystem.jsx';
import avatarImage from '../../assets/avatar.png';
import sonatePacifique from "../../assets/L'impératrice - Sonate Pacifique.mp3";

const PERSONAL_TRACK = {
  src: sonatePacifique,
  title: 'Sonate Pacifique',
  artist: "L'Impératrice"
};

const CONTENT = {
  es: {
    nav: { personal: 'Personal', story: 'Historia', experience: 'Experiencia', contact: 'Contacto' },
    eyebrow: 'PRODUCT DESIGN · FINTECH · DISEÑO CONDUCTUAL',
    name: 'Rodrigo Aquije Vásquez',
    role: 'Product Designer & Design Engineer',
    quote: 'Diseñar con restricciones demuestra el verdadero valor del producto.',
    intro: 'Soy Product Designer especializado en FinTech y sistemas complejos. Trabajo en la intersección entre el diseño de experiencias y el conocimiento profundo del producto financiero.',
    introTwo: 'Creo que una industria no se transforma solo con tecnología: también necesita información clara, comprensible y capaz de generar confianza.',
    portraitCaption: 'Lima, Perú · GMT−5',
    personalLabel: 'Fuera del trabajo', personalTitle: 'Las cosas que mantienen despierta mi curiosidad.',
    personalIntro: 'No todo termina en una interfaz. La música, la cultura visual y la ciudad también entrenan mi manera de observar, ordenar y construir experiencias.',
    hobbies: [
      { title: 'Música electrónica', body: 'Escuchar con atención, descubrir texturas y armar selecciones para distintos estados de ánimo.', action: 'Escuchar' },
      { title: 'Cultura visual', body: 'Fotografía, portadas, títulos de cine y sistemas editoriales que convierten una idea en una atmósfera.', action: 'Observar' },
      { title: 'Comida & ciudad', body: 'Conocer lugares nuevos y fijarme en esos pequeños detalles que hacen memorable una experiencia.', action: 'Explorar' }
    ],
    storyLabel: 'Mi historia',
    storyTitle: 'Una trayectoria construida con propósito.',
    storyIntro: 'Economía, banca y diseño no son capítulos separados. Son las capas que hoy me permiten entender un problema desde el negocio hasta la interfaz.',
    story: [
      { period: 'Base analítica', title: 'Economista antes que diseñador.', body: 'Me gradué en Economía en la Universidad de Lima con un enfoque en análisis cuantitativo y finanzas. Aprendí a leer incentivos, riesgo y comportamiento para evaluar si una decisión también es viable para el negocio.', tags: ['Universidad de Lima', 'Economía'] },
      { period: 'Sistema financiero', title: 'Cuatro años dentro de la banca peruana.', body: 'Trabajé en riesgo crediticio, evaluación de portafolios y gestión de inversiones. Allí entendí la lógica del banco, las exigencias regulatorias y la incertidumbre que una mala comunicación produce en las personas.', tags: ['Riesgo', 'Finanzas', 'Banca'] },
      { period: 'Cambio de práctica', title: 'Construir la capacidad de diseño.', body: 'Estudié Diseño Gráfico en Toulouse Lautrec y UX/UI en Coderhouse. No buscaba sumar una capa estética: quería convertir problemas complejos en sistemas, jerarquías y decisiones que un equipo pudiera implementar.', tags: ['Toulouse Lautrec', 'Coderhouse'] },
      { period: 'Experiencia real', title: 'Los primeros productos y sistemas.', body: 'Mientras estudiaba diseñé identidades, landing pages y experiencias digitales para Utopiq, Reina Inca y CENTRUM PUCP. Aprendí que una interfaz útil siempre conecta usuarios, operación y objetivos concretos.', tags: ['Utopiq', 'Reina Inca', 'CENTRUM PUCP'] },
      { period: 'Presente', title: 'BBVA Perú: donde ambos mundos convergen.', body: 'Hoy diseño comunicaciones y módulos digitales de alto rendimiento para BBVA Perú. Trabajo con contenido dinámico, compliance, Salesforce Marketing Cloud y sistemas visuales que deben conservar claridad a gran escala.', tags: ['BBVA Perú', 'Amsterdam Agency', 'Actual'] }
    ],
    skillsLabel: 'Especialidades',
    skillsTitle: 'Lo que sé hacer bien.',
    skillsIntro: 'Una práctica híbrida que une criterio de producto, oficio visual y comprensión del contexto financiero.',
    skills: [
      { title: 'Producto & UX', items: ['UI Design', 'UX Research', 'Prototipado', 'Arquitectura de información', 'Design Systems'], note: 'De la pregunta correcta al flujo que se puede probar.' },
      { title: 'Herramientas & código', items: ['Figma', 'Framer', 'Adobe Creative Suite', 'Salesforce Marketing Cloud', 'React / CSS'], note: 'Suficiente profundidad técnica para preservar la intención.' },
      { title: 'Dominio', items: ['Finanzas y banca', 'Compliance', 'Email Marketing UX', 'Diseño conductual', 'Inglés profesional'], note: 'Entender el contexto antes de dibujar la solución.' }
    ],
    experienceLabel: 'Experiencia',
    experienceTitle: 'Trayectoria y roles.',
    experienceIntro: 'Responsabilidades que explican cómo trabajo, no solo dónde estuve.',
    roles: [
      { company: 'Amsterdam Agency · BBVA Perú', date: 'Ago 2025 — Presente', role: 'Product Designer / UX–UI Designer', body: 'Diseño y ejecuto campañas de comunicación digital en Salesforce Marketing Cloud. Construyo módulos responsive, contenido dinámico y jerarquías capaces de sostener conversión, marca y compliance bancario.' },
      { company: 'Utopiq', date: 'Feb 2025 — Ago 2025', role: 'Diseñador Gráfico & UX/UI', body: 'Desarrollé productos de capacitación, landing pages y piezas de adquisición. El foco fue convertir propuestas complejas en recorridos claros y medibles.' },
      { company: 'Restaurante Reina Inca', date: '2022 — 2024', role: 'Diseñador Gráfico & Visual', body: 'Construí una identidad visual coherente y un sistema de contenidos para redes, materiales promocionales y puntos de contacto de marca.' },
      { company: 'Industria financiera', date: '2018 — 2022', role: 'Riesgo, portafolios e inversiones', body: 'Experiencia en análisis financiero, riesgo crediticio y evaluación de portafolios. Esta base sigue informando cómo priorizo viabilidad, regulación y comportamiento.' }
    ],
    educationLabel: 'Formación',
    education: [
      { program: 'Behavioral Design', school: 'PUCP', year: '2026' },
      { program: 'Diseño Gráfico', school: 'Toulouse Lautrec', year: '2021 — 2025' },
      { program: 'Diseño UX/UI', school: 'Coderhouse', year: '2021 — 2022' },
      { program: 'Economía', school: 'Universidad de Lima', year: '2017 — 2021' }
    ],
    principlesLabel: 'Criterio de diseño',
    principlesTitle: 'Principios que guían mi práctica.',
    principles: [
      { title: 'Negocio y usuario integrados', body: 'Una buena experiencia también debe sostener conversión, riesgo, rentabilidad y operación.' },
      { title: 'Las restricciones dan estructura', body: 'Compliance, tecnología y contenido delimitan el problema y ayudan a enfocar mejores decisiones.' },
      { title: 'El dominio del producto es una ventaja', body: 'Comprender la mecánica del negocio permite diseñar con más profundidad y menos suposiciones.' },
      { title: 'Claridad antes que complejidad', body: 'Reducir carga mental y fricción convierte un problema complejo en una decisión comprensible.' }
    ],
    connect: 'Conectemos', connectTitle: 'Conversemos sobre el problema real.', linkedinNetwork: 'Red profesional',
    ctaLabel: 'Próxima conversación',
    ctaTitle: 'Trabajemos en productos donde la claridad sí importa.',
    ctaBody: 'Estoy abierto a roles y proyectos donde producto, sistemas y contexto financiero se encuentren. Si ese es el reto, conversemos.',
    email: 'Copiar email', copied: 'Email copiado', linkedin: 'Conectar en LinkedIn', cv: 'Ver currículum', footer: 'Diseñado y construido en Lima.'
  },
  en: {
    nav: { personal: 'Personal', story: 'Story', experience: 'Experience', contact: 'Contact' },
    eyebrow: 'PRODUCT DESIGN · FINTECH · BEHAVIORAL DESIGN',
    name: 'Rodrigo Aquije Vásquez',
    role: 'Product Designer & Design Engineer',
    quote: 'Designing within constraints reveals the true value of a product.',
    intro: 'I am a Product Designer focused on FinTech and complex systems. I work at the intersection of experience design and deep financial-product knowledge.',
    introTwo: 'I believe an industry is not transformed by technology alone: it also needs information that is clear, understandable and able to build trust.',
    portraitCaption: 'Lima, Peru · GMT−5',
    personalLabel: 'Outside work', personalTitle: 'The things that keep my curiosity awake.',
    personalIntro: 'Not everything ends in an interface. Music, visual culture and the city also train the way I observe, organize and build experiences.',
    hobbies: [
      { title: 'Electronic music', body: 'Listening closely, discovering textures and building selections for different moods.', action: 'Listen' },
      { title: 'Visual culture', body: 'Photography, covers, film titles and editorial systems that turn an idea into an atmosphere.', action: 'Observe' },
      { title: 'Food & city', body: 'Discovering new places and noticing the small details that make an experience memorable.', action: 'Explore' }
    ],
    storyLabel: 'My story', storyTitle: 'A career built with purpose.',
    storyIntro: 'Economics, banking and design are not separate chapters. They are the layers that let me understand a problem from the business model to the interface.',
    story: [
      { period: 'Analytical foundation', title: 'An economist before becoming a designer.', body: 'I graduated in Economics from Universidad de Lima with a focus on quantitative analysis and finance. I learned to read incentives, risk and behavior, and to evaluate whether a decision is viable for the business.', tags: ['Universidad de Lima', 'Economics'] },
      { period: 'Financial system', title: 'Four years inside Peruvian banking.', body: 'I worked in credit risk, portfolio evaluation and investment management. I learned the logic of banks, regulatory requirements and the uncertainty that poor communication creates for people.', tags: ['Risk', 'Finance', 'Banking'] },
      { period: 'A new practice', title: 'Building the ability to design.', body: 'I studied Graphic Design at Toulouse Lautrec and UX/UI at Coderhouse. I was not looking for an aesthetic layer; I wanted to turn complex problems into systems, hierarchies and implementable decisions.', tags: ['Toulouse Lautrec', 'Coderhouse'] },
      { period: 'Real experience', title: 'The first products and systems.', body: 'While studying, I designed identities, landing pages and digital experiences for Utopiq, Reina Inca and CENTRUM PUCP. I learned that a useful interface connects users, operations and concrete goals.', tags: ['Utopiq', 'Reina Inca', 'CENTRUM PUCP'] },
      { period: 'Present', title: 'BBVA Peru: where both worlds converge.', body: 'Today I design high-performance digital communications and modules for BBVA Peru. I work with dynamic content, compliance, Salesforce Marketing Cloud and visual systems that must remain clear at scale.', tags: ['BBVA Peru', 'Amsterdam Agency', 'Current'] }
    ],
    skillsLabel: 'Expertise', skillsTitle: 'What I do well.',
    skillsIntro: 'A hybrid practice bringing together product judgment, visual craft and knowledge of the financial context.',
    skills: [
      { title: 'Product & UX', items: ['UI Design', 'UX Research', 'Prototyping', 'Information architecture', 'Design Systems'], note: 'From the right question to a testable flow.' },
      { title: 'Tools & code', items: ['Figma', 'Framer', 'Adobe Creative Suite', 'Salesforce Marketing Cloud', 'React / CSS'], note: 'Enough technical depth to preserve intent.' },
      { title: 'Domain', items: ['Finance and banking', 'Compliance', 'Email Marketing UX', 'Behavioral design', 'Professional English'], note: 'Understand the context before drawing the solution.' }
    ],
    experienceLabel: 'Experience', experienceTitle: 'Career and roles.',
    experienceIntro: 'Responsibilities that explain how I work, not just where I have been.',
    roles: [
      { company: 'Amsterdam Agency · BBVA Peru', date: 'Aug 2025 — Present', role: 'Product Designer / UX–UI Designer', body: 'I design and execute digital communication campaigns in Salesforce Marketing Cloud, building responsive modules, dynamic content and hierarchies that balance conversion, brand and bank compliance.' },
      { company: 'Utopiq', date: 'Feb 2025 — Aug 2025', role: 'Graphic & UX/UI Designer', body: 'I developed training products, landing pages and acquisition assets, turning complex offers into clear, measurable journeys.' },
      { company: 'Restaurante Reina Inca', date: '2022 — 2024', role: 'Graphic & Visual Designer', body: 'I built a coherent visual identity and content system for social media, promotional materials and brand touchpoints.' },
      { company: 'Financial industry', date: '2018 — 2022', role: 'Risk, portfolios and investments', body: 'Experience in financial analysis, credit risk and portfolio evaluation. This foundation still informs how I prioritize feasibility, regulation and behavior.' }
    ],
    educationLabel: 'Education',
    education: [
      { program: 'Behavioral Design', school: 'PUCP', year: '2026' },
      { program: 'Graphic Design', school: 'Toulouse Lautrec', year: '2021 — 2025' },
      { program: 'UX/UI Design', school: 'Coderhouse', year: '2021 — 2022' },
      { program: 'Economics', school: 'Universidad de Lima', year: '2017 — 2021' }
    ],
    principlesLabel: 'Design judgment', principlesTitle: 'Principles guiding my practice.',
    principles: [
      { title: 'Business and user, together', body: 'A good experience must also support conversion, risk, profitability and operations.' },
      { title: 'Constraints create structure', body: 'Compliance, technology and content define the problem and focus better decisions.' },
      { title: 'Product knowledge is an advantage', body: 'Understanding business mechanics leads to deeper design and fewer assumptions.' },
      { title: 'Clarity before complexity', body: 'Reducing mental load and friction turns a complex problem into an understandable decision.' }
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
    await navigator.clipboard.writeText('rodrigoaq996@gmail.com');
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
        <SectionLabel>{t.eyebrow}</SectionLabel>
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
            const HobbyIcon = [Headphones, Aperture, UtensilsCrossed][index];
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

    <section id="principles" data-about-section="experience" className="about-principles about-reveal">
      <div className="about-principles-ambient" aria-hidden="true" />
      <div className="about-shell">
        <SectionLabel>{t.principlesLabel}</SectionLabel>
        <h2>{t.principlesTitle}</h2>
        <div className="about-principle-grid">{t.principles.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p><ArrowBendUpRightIcon weight="duotone" /></article>)}</div>
      </div>
    </section>

    <SiteContact id="about-contact" dataAboutSection="about-contact" label={t.connect} title={t.connectTitle} lang={lang} linkedinNetwork={t.linkedinNetwork} onCopy={copyEmail} className="about-shell about-contact-shared about-reveal" />
    <SiteFooter text={t.footer} className="about-shell" />
    <div className={`about-toast ${copied ? 'is-visible' : ''}`} role="status" aria-live="polite"><Check /> {t.copied}</div>
  </main>;
}
