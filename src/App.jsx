import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CaseBBVA from './pages/CaseBBVA.jsx';
import PortfolioHome from './pages/PortfolioHome.jsx';
import AboutPage from './pages/AboutPage.jsx';
import { SiteDesignSystemProvider } from './components/SiteDesignSystem.jsx';
import avatarImage from '../assets/avatar.png';
import bbvaCover from '../assets/359shots_so.png';
import yapeCover from '../assets/216shots_so.png';
import allpaCover from '../assets/344shots_so.png';
import { 
  Clock, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Home, 
  Layers, 
  User, 
  Send, 
  Mail, 
  Linkedin, 
  FileText, 
  Sun, 
  Moon, 
  Languages,
  Layout,
  Cpu,
  Sparkles
} from 'lucide-react';

const CONTENT = {
  es: {
    heroKicker: "Diseño financiero con criterio de negocio.",
    heroTitle: "Diseño productos financieros que convierten sin perder",
    heroTitleEm: "confianza.",
    role: "Product Designer & Design Engineer",
    bio: "Diseñador de producto digital con formación en economía. Conecto rigor analítico, sistemas de diseño escalables y conversión para construir interfaces financieras intuitivas, viables y de alto impacto.",
    getInTouch: "Contactar",
    copied: "¡Copiado!",
    copyEmail: "Copiar Email",
    trustLabel: "Experiencia & Colaboraciones",
    capabilitiesTitle: "Habilidades & Especialidades",
    workSectionTitle: "Casos de Estudio",
    viewCase: "Explorar caso completo",
    comingSoon: "Caso en desarrollo",
    viewWork: "Ver proyectos",
    workIntro: "Trabajo seleccionado donde estrategia, comportamiento e implementación se conectan con resultados de negocio.",
    profileNote: "Economía + diseño + código",
    
    // Capabilities
    cap1Title: "Product & Interface Design",
    cap1Desc: "Investigación conductual, flujos transaccionales y arquitectura de interfaces de alta conversión.",
    
    cap2Title: "Design Systems & Code",
    cap2Desc: "Sistemas modulares escalables en Figma y maquetación de componentes vivos en React / CSS Tokens.",
    
    cap3Title: "Prototipado e implementación",
    cap3Desc: "Prototipos funcionales para probar decisiones temprano y acercar diseño, negocio e ingeniería.",

    // Caso 1: BBVA
    bbvaTag: "BBVA Perú · Comunicación financiera",
    bbvaTitle: "Cómo diseñar con conversión y compliance bancario.",
    bbvaDesc: "Optimización técnica y visual de envíos masivos para BBVA Perú manteniendo integridad regulatoria.",
    bbvaChips: ['Salesforce MC', 'Email UX', 'Compliance Bancario', 'Figma Tokens'],

    // Caso 2: Yape
    yapeTag: "Yape · Estados transaccionales",
    yapeTitle: "La pantalla de error que te hace perder dinero.",
    yapeDesc: "Rediseño conductual de los estados 'en revisión' de Yape para mitigar fricción y drop-off.",
    yapeChips: ['UX Audit', 'Microcopy', 'Arquitectura de Estados', 'Growth Design'],

    // Caso 3: Allpa
    allpaTag: "Allpa · Diseño conductual",
    allpaTitle: "El sistema que te impide gastar tu propia plata.",
    allpaDesc: "Concepto de diseño conductual para Apple Watch e iOS que interviene en el flujo de caja antes de una compra impulsiva.",
    allpaChips: ['watchOS / iOS', 'Economía Conductual', 'Cash-Flow UX', 'Figma Prototyping'],

    // Playground final
    connectTitle: "Conectemos",
    emailTileLabel: "Bandeja de Entrada",
    emailTileSub: "rodrigoaq996@gmail.com",
    linkedinTileLabel: "Red Profesional",
    linkedinTileSub: "Conectar en LinkedIn",
    cvTileLabel: "Currículum Vitae"
  },
  en: {
    heroKicker: "Financial design grounded in business.",
    heroTitle: "I design financial products that convert without losing",
    heroTitleEm: "trust.",
    role: "Product Designer & Design Engineer",
    bio: "Digital product designer with an economics background. I connect analytical rigor, scalable design systems, and conversion to build intuitive, viable, and high-impact financial interfaces.",
    getInTouch: "Get in touch",
    copied: "Copied!",
    copyEmail: "Copy Email",
    trustLabel: "Experience & Collaborations",
    capabilitiesTitle: "Capabilities & Craft",
    workSectionTitle: "Selected Works",
    viewCase: "Explore full case",
    comingSoon: "Case in progress",
    viewWork: "View projects",
    workIntro: "Selected work connecting strategy, behavior and implementation to business outcomes.",
    profileNote: "Economics + design + code",

    // Capabilities
    cap1Title: "Product & Interface Design",
    cap1Desc: "Behavioral research, transactional user flows, and high-conversion interface architecture.",
    
    cap2Title: "Design Systems & Code",
    cap2Desc: "Scalable design tokens in Figma and live responsive component architecture in React / CSS.",
    
    cap3Title: "Prototyping & implementation",
    cap3Desc: "Functional prototypes to test decisions early and bring design, business and engineering closer.",

    // Caso 1: BBVA
    bbvaTag: "BBVA Perú · Financial communication",
    bbvaTitle: "Designing with conversion and bank compliance.",
    bbvaDesc: "Technical and visual optimization of massive lending campaigns in Salesforce Marketing Cloud for BBVA Perú.",
    bbvaChips: ['Salesforce MC', 'Email UX', 'Bank Compliance', 'Figma Tokens'],

    // Caso 2: Yape
    yapeTag: "Yape · Transaction states",
    yapeTitle: "The error screen making you lose money.",
    yapeDesc: "Behavioral redesign for Yape's 'under review' states to eliminate transactional friction.",
    yapeChips: ['UX Audit', 'Microcopy', 'State Systems', 'Growth Design'],

    // Caso 3: Allpa
    allpaTag: "Allpa · Behavioral design",
    allpaTitle: "The system that prevents you from overspending.",
    allpaDesc: "Behavioral design concept for Apple Watch & iOS that intervenes in cash flow before impulse purchases.",
    allpaChips: ['watchOS / iOS', 'Behavioral Economics', 'Cash-Flow UX', 'Figma Prototyping'],

    // Playground final
    connectTitle: "Let's connect",
    emailTileLabel: "Direct Inbox",
    emailTileSub: "rodrigoaq996@gmail.com",
    linkedinTileLabel: "Professional Network",
    linkedinTileSub: "Connect on LinkedIn",
    cvTileLabel: "Curriculum Vitae"
  }
};

function HomePage() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('es');
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState('');
  const [mouseGlow, setMouseGlow] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Reloj Lima GMT-5
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString(lang === 'es' ? 'es-PE' : 'en-US', {
          timeZone: 'America/Lima',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [lang]);

  const handleMouseMove = (e) => {
    setMouseGlow({
      x: e.clientX - 350,
      y: e.clientY - 350
    });
  };

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const toggleLang = () => setLang(prev => prev === 'es' ? 'en' : 'es');

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('rodrigoaq996@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const t = CONTENT[lang];

  return (
    <div onMouseMove={handleMouseMove}>
      <div className="grain-overlay" />
      <div 
        className="ambient-silk-glow" 
        style={{
          transform: `translate(${mouseGlow.x}px, ${mouseGlow.y}px)`
        }}
      />

      <div className="editorial-canvas">
        
        {/* 1. STATUS BAR */}
        <header className="clean-status-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <strong className="status-signature">RODRIGO AQUIJE</strong>
            <span className="status-divider" />
            <Clock size={12} />
            <span>{time ? `${time} · LIMA` : 'LIMA, GMT-5'}</span>
          </div>

          <div className="clean-controls">
            <button type="button" className="control-pill-btn" onClick={toggleLang}>
              <Languages size={12} />
              <span>{lang.toUpperCase()}</span>
            </button>
            <button type="button" className="control-pill-btn" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'dark' ? <Sun size={12} /> : <Moon size={12} />}
            </button>
          </div>
        </header>

        {/* 2. HERO SECTION */}
        <section className="hero-editorial-grid">
          <div className="hero-text-flow">
            <span className="hero-kicker">{t.heroKicker}</span>
            <h1 className="hero-name-title">
              {t.heroTitle} <em>{t.heroTitleEm}</em>
            </h1>
            <p className="hero-description">{t.bio}</p>

            <div className="hero-action-cluster">
              <a href="#work" className="btn-primary-action">
                {t.viewWork} <ArrowUpRight size={14} />
              </a>
              <a href="mailto:rodrigoaq996@gmail.com" className="btn-glass-action">{t.getInTouch} <ArrowUpRight size={13} /></a>
            </div>
          </div>

          <div className="hero-profile-rail">
            <div className="hero-avatar-wrapper">
              <img src={avatarImage} alt="Rodrigo Aquije V." className="hero-avatar-img" />
            </div>
            <div className="hero-profile-copy"><strong>{t.role}</strong><span>{t.profileNote}</span><span>Lima, Perú · GMT−5</span></div>
          </div>
        </section>

        {/* 3. SOCIAL PROOF (EMPRESAS REDISEÑADAS) */}
        <section className="trust-strip">
          <span className="trust-label">{t.trustLabel}</span>
          <div className="trust-logos-row">
            <span className="trust-brand">
              Fahrenheit DDB <span className="trust-brand-tag">Agency</span>
            </span>
            <span className="trust-brand">
              BBVA Perú <span className="trust-brand-tag">Banking</span>
            </span>
            <span className="trust-brand">
              CENTRUM PUCP <span className="trust-brand-tag">Business School</span>
            </span>
            <span className="trust-brand">
              Amsterdam Agency <span className="trust-brand-tag">Digital</span>
            </span>
            <span className="trust-brand">
              Utopiq <span className="trust-brand-tag">Tech</span>
            </span>
          </div>
        </section>

        {/* 4. DESIGN CAPABILITIES (STACK REFORMULADO COMO UX/UI CRAFT) */}
        <section className="stack-editorial-section">
          <h2 className="editorial-section-title" style={{ fontSize: '28px', marginBottom: '24px' }}>
            {t.capabilitiesTitle}
          </h2>

          <div className="stack-editorial-grid">
            
            {/* Capacidad 1 */}
            <div className="capability-card">
              <div>
                <div className="capability-header" style={{ marginBottom: '12px' }}>
                  <div className="capability-icon"><Layout size={16} /></div>
                  <h3 className="capability-title">{t.cap1Title}</h3>
                </div>
                <p className="capability-desc">{t.cap1Desc}</p>
              </div>
              <div className="capability-chips">
                <span className="cap-chip">Figma</span>
                <span className="cap-chip">Framer</span>
                <span className="cap-chip">Adobe CC</span>
                <span className="cap-chip">UX Audit</span>
              </div>
            </div>

            {/* Capacidad 2 */}
            <div className="capability-card">
              <div>
                <div className="capability-header" style={{ marginBottom: '12px' }}>
                  <div className="capability-icon"><Cpu size={16} /></div>
                  <h3 className="capability-title">{t.cap2Title}</h3>
                </div>
                <p className="capability-desc">{t.cap2Desc}</p>
              </div>
              <div className="capability-chips">
                <span className="cap-chip">Design Tokens</span>
                <span className="cap-chip">React</span>
                <span className="cap-chip">HTML5 / CSS</span>
                <span className="cap-chip">SFMC</span>
              </div>
            </div>

            {/* Capacidad 3 */}
            <div className="capability-card">
              <div>
                <div className="capability-header" style={{ marginBottom: '12px' }}>
                  <div className="capability-icon"><Sparkles size={16} /></div>
                  <h3 className="capability-title">{t.cap3Title}</h3>
                </div>
                <p className="capability-desc">{t.cap3Desc}</p>
              </div>
              <div className="capability-chips">
                <span className="cap-chip">Claude Code</span>
                <span className="cap-chip">Cursor</span>
                <span className="cap-chip">Gemini</span>
                <span className="cap-chip">Prompt-to-UI</span>
              </div>
            </div>

          </div>
        </section>

        {/* 5. SECCIÓN EDITORIAL DE 3 CASOS CON CHIPS Y SPACING CALIBRADO */}
        <section id="work">
          <div className="work-section-heading"><div><span className="section-context">{lang === 'es' ? 'Una selección reciente' : 'A recent selection'}</span><h2 className="editorial-section-title">{t.workSectionTitle}</h2></div><p>{t.workIntro}</p></div>

          <div className="editorial-works-stream">
            
            {/* Caso 1: BBVA */}
            <article className="editorial-case-article">
              <a href="/casos/bbva" className="case-display-stage stage-chroma--bbva" aria-label={t.viewCase}>
                <img
                  src={bbvaCover}
                  alt="Campaña de préstamo digital diseñada para BBVA Perú"
                  className="case-cover-image"
                />
              </a>

              <div className="case-editorial-pane">
                <div>
                  <span className="case-tag-meta">{t.bbvaTag}</span>
                  <h3 className="case-title">{t.bbvaTitle}</h3>
                  <p className="case-summary">{t.bbvaDesc}</p>
                  
                  {/* Micro Chips Discretos */}
                  <div className="case-discrete-chips">
                    {t.bbvaChips.map((chip) => (
                      <span key={chip} className="project-chip">{chip}</span>
                    ))}
                  </div>
                </div>

                <a href="/casos/bbva" className="case-read-link">
                  {t.viewCase} <ArrowUpRight size={15} />
                </a>
              </div>
            </article>

            {/* Caso 2: Yape (Invertido) */}
            <article className="editorial-case-article editorial-case-article--reversed">
              <div className="case-display-stage stage-chroma--yape">
                <img
                  src={yapeCover}
                  alt="Propuesta de estado de operación en revisión para Yape"
                  className="case-cover-image"
                />
              </div>

              <div className="case-editorial-pane">
                <div>
                  <span className="case-tag-meta">{t.yapeTag}</span>
                  <h3 className="case-title">{t.yapeTitle}</h3>
                  <p className="case-summary">{t.yapeDesc}</p>
                  
                  {/* Micro Chips Discretos */}
                  <div className="case-discrete-chips">
                    {t.yapeChips.map((chip) => (
                      <span key={chip} className="project-chip">{chip}</span>
                    ))}
                  </div>
                </div>

                <span className="case-read-link case-read-link--disabled">{t.comingSoon}</span>
              </div>
            </article>

            {/* Caso 3: Allpa */}
            <article className="editorial-case-article">
              <div className="case-display-stage stage-chroma--allpa">
                <img
                  src={allpaCover}
                  alt="Aplicación Allpa presentada en Apple Watch Ultra"
                  className="case-cover-image"
                />
              </div>

              <div className="case-editorial-pane">
                <div>
                  <span className="case-tag-meta">{t.allpaTag}</span>
                  <h3 className="case-title">{t.allpaTitle}</h3>
                  <p className="case-summary">{t.allpaDesc}</p>
                  
                  {/* Micro Chips Discretos */}
                  <div className="case-discrete-chips">
                    {t.allpaChips.map((chip) => (
                      <span key={chip} className="project-chip">{chip}</span>
                    ))}
                  </div>
                </div>

                <span className="case-read-link case-read-link--disabled">{t.comingSoon}</span>
              </div>
            </article>

          </div>
        </section>

        {/* 6. PLAYGROUND GRID DE CONTACTO (CV DUAL ES / EN) */}
        <section className="playground-connect-section">
          <h2 className="editorial-section-title" style={{ fontSize: '28px', marginBottom: '24px' }}>
            {t.connectTitle}
          </h2>

          <div className="playground-grid">
            
            {/* Tile Email */}
            <div className="connect-tile" onClick={handleCopyEmail}>
              <div className="tile-arrow"><Copy size={16} /></div>
              <div className="tile-icon-bubble"><Mail size={18} /></div>
              <div>
                <div className="tile-label">{t.emailTileLabel}</div>
                <div className="tile-subtext">{copied ? t.copied : t.emailTileSub}</div>
              </div>
            </div>

            {/* Tile LinkedIn */}
            <a 
              href="https://linkedin.com/in/rodrigo-aquije" 
              target="_blank" 
              rel="noreferrer" 
              className="connect-tile"
            >
              <div className="tile-arrow"><ArrowUpRight size={16} /></div>
              <div className="tile-icon-bubble"><Linkedin size={18} /></div>
              <div>
                <div className="tile-label">{t.linkedinTileLabel}</div>
                <div className="tile-subtext">{t.linkedinTileSub}</div>
              </div>
            </a>

            {/* Tile CV Dual (ES / EN) */}
            <div className="connect-tile">
              <div className="tile-arrow"><FileText size={16} /></div>
              <div className="tile-icon-bubble"><FileText size={18} /></div>
              <div>
                <div className="tile-label">{t.cvTileLabel}</div>
                <div className="cv-sub-links">
                  <a href="/cv-es.pdf" target="_blank" rel="noreferrer" className="cv-pill-link">
                    ES ↗
                  </a>
                  <a href="/cv-en.pdf" target="_blank" rel="noreferrer" className="cv-pill-link">
                    EN ↗
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* METADATOS */}
        <div className="spatial-footer-text">
          <span>RODRIGO AQUIJE V.</span>
          <span>©2026</span>
        </div>

      </div>

      {/* 7. APPLE LIQUID GLASS DOCK FLOTANTE CON REBOTE */}
      <nav className="floating-dock-container">
        <div className="floating-dock-liquid">
          <img 
            src={avatarImage}
            alt="Rodrigo" 
            className="dock-avatar-circle"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80'; }}
          />
          <div className="dock-divider-glass" />
          <a href="#" className="dock-btn-elastic active" title="Home">
            <Home size={17} />
          </a>
          <a href="#work" className="dock-btn-elastic" title="Projects">
            <Layers size={17} />
          </a>
          <a href="/about.html" className="dock-btn-elastic" title="About">
            <User size={17} />
          </a>
          <a href="mailto:rodrigoaq996@gmail.com" className="dock-btn-elastic" title="Contact">
            <Send size={17} />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default function App() {
  return (
    <SiteDesignSystemProvider>
      <RouteScrollManager />
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/casos/bbva" element={<CaseBBVA />} />
        <Route path="/sobre-mi" element={<AboutPage />} />
      </Routes>
    </SiteDesignSystemProvider>
  );
}

function RouteScrollManager() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }
    const frame = window.requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView({ block: 'start' }));
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
