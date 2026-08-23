import React, { useState, useEffect } from 'react';
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
  Languages
} from 'lucide-react';

const CONTENT = {
  es: {
    role: "Product Designer & Design Engineer",
    bio: "Diseñador de producto digital con formación en economía. Conecto rigor analítico, sistemas de diseño escalables y conversión para construir interfaces financieras intuitivas, viables y de alto impacto.",
    focusLabel: "ENFOQUE",
    focusVal: "FinTech, Arquitectura de Estados & Conversión",
    locationLabel: "UBICACIÓN",
    locationVal: "Lima, Perú",
    getInTouch: "Contactar",
    copied: "¡Copiado!",
    copyEmail: "Copiar Email",
    workTitle: "Trabajos Seleccionados",
    viewCase: "Explorar caso completo",
    bbvaCategory: "FINANCIAL DESIGN SYSTEM // SALESFORCE MC",
    bbvaTitle: "Cómo diseñar con conversión y compliance bancario.",
    bbvaDesc: "Optimización técnica y visual de envíos masivos para BBVA Perú manteniendo integridad regulatoria.",
    bbvaKpi: "Conversión",
    yapeCategory: "BEHAVIORAL AUDIT & STATE SYSTEMS",
    yapeTitle: "La pantalla de error que te hace perder dinero.",
    yapeDesc: "Rediseño conductual de los estados 'en revisión' de Yape para mitigar fricción y drop-off.",
    yapeKpi: "Resolución",
    cv: "Currículum Vitae",
    download: "Descargar PDF"
  },
  en: {
    role: "Product Designer & Design Engineer",
    bio: "Digital product designer with an economics background. I connect analytical rigor, scalable design systems, and conversion to build intuitive, viable, and high-impact financial interfaces.",
    focusLabel: "FOCUS",
    focusVal: "FinTech, State Architecture & Conversion",
    locationLabel: "LOCATION",
    locationVal: "Lima, Peru",
    getInTouch: "Get in touch",
    copied: "Copied!",
    copyEmail: "Copy Email",
    workTitle: "Selected Works",
    viewCase: "Explore full case",
    bbvaCategory: "FINANCIAL DESIGN SYSTEM // SALESFORCE MC",
    bbvaTitle: "Designing with conversion and bank compliance.",
    bbvaDesc: "Technical and visual optimization of massive lending campaigns in Salesforce Marketing Cloud for BBVA Perú.",
    bbvaKpi: "Conversion",
    yapeCategory: "BEHAVIORAL AUDIT & STATE SYSTEMS",
    yapeTitle: "The error screen making you lose money.",
    yapeDesc: "Behavioral redesign for Yape's 'under review' states to eliminate transactional friction.",
    yapeKpi: "Resolution",
    cv: "Curriculum Vitae",
    download: "Download PDF"
  }
};

export default function App() {
  const [theme, setTheme] = useState('dark');
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

  // Seguimiento suave del halo ambiental interactivo
  const handleMouseMove = (e) => {
    setMouseGlow({
      x: e.clientX - 300,
      y: e.clientY - 300
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
      <div className="noise-overlay" />
      <div 
        className="ambient-glow" 
        style={{
          transform: `translate(${mouseGlow.x}px, ${mouseGlow.y}px)`
        }}
      />

      <div className="spatial-canvas">
        
        {/* 1. CABECERA ASIMÉTRICA SOBRIA */}
        <header className="clean-status-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={12} />
            <span>{time ? `${time} (LIMA, GMT-5)` : 'LIMA, GMT-5'}</span>
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

        {/* 2. HERO SECTION ASIMÉTRICO (60/40 LAYOUT) */}
        <section className="hero-asymmetric-layout">
          <div className="hero-main-column">
            <h1 className="hero-title">Rodrigo Aquije V.</h1>
            <p className="hero-tagline">{t.role}</p>
            <p className="hero-statement">{t.bio}</p>

            <div className="hero-cta-row">
              <a href="mailto:rodrigoaq996@gmail.com" className="btn-primary-cta">
                {t.getInTouch} ↗
              </a>
              <button type="button" className="btn-glass-cta" onClick={handleCopyEmail}>
                <span>{copied ? t.copied : 'rodrigoaq996@gmail.com'}</span>
                {copied ? <Check size={13} color="#10B981" /> : <Copy size={13} />}
              </button>
            </div>
          </div>

          <div className="hero-side-card">
            <div className="side-data-block">
              <span className="side-data-label">{t.focusLabel}</span>
              <span className="side-data-val">{t.focusVal}</span>
            </div>
            <div className="side-data-block">
              <span className="side-data-label">{t.locationLabel}</span>
              <span className="side-data-val">{t.locationVal}</span>
            </div>
          </div>
        </section>

        {/* 3. SHOWCASE DE PROYECTOS CON DIAGRAMACIÓN DINÁMICA */}
        <section id="work">
          <div className="work-section-header">
            <h2 className="work-section-title">{t.workTitle}</h2>
            <span className="work-section-counter">01 — 02</span>
          </div>

          <div className="work-asymmetric-stream">
            
            {/* Caso 1: Monolito Principal Full-Width (BBVA) */}
            <div className="project-monolith-primary">
              <div className="showcase-viewport-bbva">
                <div className="ui-mockup-frame">
                  <div className="ui-frame-top">
                    <div className="ui-frame-dots">
                      <div className="ui-frame-dot" />
                      <div className="ui-frame-dot" />
                      <div className="ui-frame-dot" />
                    </div>
                    <span className="ui-frame-title">salesforce-mc // bbva-campaign.eml</span>
                  </div>
                  <div className="ui-frame-body">
                    <div className="ui-badge-row">
                      <span className="ui-brand-tag ui-brand-tag--bbva">BBVA</span>
                      <span className="ui-status-tag ui-status-tag--bbva">COMPLIANT VERIFIED</span>
                    </div>
                    <p className="ui-title-text">Tus préstamos preaprobados empiezan hoy con abono instantáneo.</p>
                    <div className="ui-data-metric">
                      <div>
                        <div style={{ fontSize: '10px', color: '#94A3B8' }}>Monto preaprobado</div>
                        <div className="ui-data-num">S/ 52,100</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '10px', color: '#94A3B8' }}>{t.bbvaKpi}</div>
                        <div className="ui-data-badge">+24.8%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-details-pane">
                <div>
                  <span className="project-category">{t.bbvaCategory}</span>
                  <h3 className="project-heading">{t.bbvaTitle}</h3>
                  <p className="project-desc">{t.bbvaDesc}</p>
                </div>
                <a href="/proyecto-bbva.html" className="project-action-link">
                  {t.viewCase} <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            {/* Caso 2: Split Asimétrico (Yape) */}
            <div className="project-split-secondary">
              <div className="showcase-viewport-yape">
                <div className="ui-mockup-frame">
                  <div className="ui-frame-top">
                    <div className="ui-frame-dots">
                      <div className="ui-frame-dot" />
                      <div className="ui-frame-dot" />
                      <div className="ui-frame-dot" />
                    </div>
                    <span className="ui-frame-title">yape // state-recovery-flow.fig</span>
                  </div>
                  <div className="ui-frame-body">
                    <div className="ui-badge-row">
                      <span className="ui-brand-tag ui-brand-tag--yape">Yape</span>
                      <span className="ui-status-tag ui-status-tag--yape">STATE RESOLVED</span>
                    </div>
                    <p className="ui-title-text">Validación conductual para estados 'en revisión' sin fricción para el usuario.</p>
                    <div className="ui-data-metric">
                      <div>
                        <div style={{ fontSize: '10px', color: '#94A3B8' }}>Monto validado</div>
                        <div className="ui-data-num">S/ 180.00</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '10px', color: '#94A3B8' }}>{t.yapeKpi}</div>
                        <div className="ui-data-badge">0.2s Avg</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-details-pane">
                <div>
                  <span className="project-category">{t.yapeCategory}</span>
                  <h3 className="project-heading">{t.yapeTitle}</h3>
                  <p className="project-desc">{t.yapeDesc}</p>
                </div>
                <a href="/proyecto-yape.html" className="project-action-link">
                  {t.viewCase} <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 4. REDES Y ENLACES */}
        <div className="network-stream">
          <a href="mailto:rodrigoaq996@gmail.com" className="network-stream-row">
            <span className="network-left"><Mail size={15} /> Email</span>
            <span className="network-right">rodrigoaq996@gmail.com ↗</span>
          </a>
          <a href="https://linkedin.com/in/rodrigo-aquije" target="_blank" rel="noreferrer" className="network-stream-row">
            <span className="network-left"><Linkedin size={15} /> LinkedIn</span>
            <span className="network-right">/in/rodrigo-aquije ↗</span>
          </a>
          <a href="#descargar-cv" className="network-stream-row">
            <span className="network-left"><FileText size={15} /> {t.cv}</span>
            <span className="network-right">{t.download} ↗</span>
          </a>
        </div>

        {/* METADATOS */}
        <div className="spatial-footer-text">
          <span>RODRIGO AQUIJE V.</span>
          <span>©2026</span>
        </div>

      </div>

      {/* 5. DOCK FLOTANTE MINIMALISTA PULIDO */}
      <nav className="floating-dock-container">
        <div className="floating-dock-minimal">
          <img 
            src="assets/avatar.png" 
            alt="Rodrigo" 
            className="dock-avatar"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80'; }}
          />
          <div className="dock-divider" />
          <a href="#" className="dock-icon-btn active" title="Home">
            <Home size={17} />
          </a>
          <a href="#work" className="dock-icon-btn" title="Projects">
            <Layers size={17} />
          </a>
          <a href="/about.html" className="dock-icon-btn" title="About">
            <User size={17} />
          </a>
          <a href="mailto:rodrigoaq996@gmail.com" className="dock-icon-btn" title="Contact">
            <Send size={17} />
          </a>
        </div>
      </nav>
    </div>
  );
}