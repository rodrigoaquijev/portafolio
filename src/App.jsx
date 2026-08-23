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
    getInTouch: "Contactar",
    copied: "¡Copiado!",
    copyEmail: "Copiar Email",
    workSectionTitle: "Casos de Estudio",
    viewCase: "Explorar caso completo",
    
    // Caso 1: BBVA
    bbvaTag: "FINANCIAL DESIGN // SALESFORCE MC",
    bbvaTitle: "Cómo diseñar con conversión y compliance bancario.",
    bbvaDesc: "Optimización técnica y visual de envíos masivos para BBVA Perú manteniendo integridad regulatoria.",
    bbvaKpi: "Conversión de Campaña",

    // Caso 2: Yape
    yapeTag: "BEHAVIORAL AUDIT & STATE SYSTEMS",
    yapeTitle: "La pantalla de error que te hace perder dinero.",
    yapeDesc: "Rediseño conductual de los estados 'en revisión' de Yape para mitigar fricción y drop-off.",
    yapeKpi: "Resolución",

    // Caso 3: Allpa
    allpaTag: "BEHAVIORAL FINANCE // APPLE ECOSYSTEM",
    allpaTitle: "El sistema que te impide gastar tu propia plata.",
    allpaDesc: "Concepto de diseño conductual para Apple Watch e iOS que interviene en el flujo de caja antes de una compra impulsiva.",
    allpaKpi: "Retención de Ahorro",

    cv: "Currículum Vitae",
    download: "Descargar PDF"
  },
  en: {
    role: "Product Designer & Design Engineer",
    bio: "Digital product designer with an economics background. I connect analytical rigor, scalable design systems, and conversion to build intuitive, viable, and high-impact financial interfaces.",
    getInTouch: "Get in touch",
    copied: "Copied!",
    copyEmail: "Copy Email",
    workSectionTitle: "Selected Works",
    viewCase: "Explore full case",

    // Caso 1: BBVA
    bbvaTag: "FINANCIAL DESIGN // SALESFORCE MC",
    bbvaTitle: "Designing with conversion and bank compliance.",
    bbvaDesc: "Technical and visual optimization of massive lending campaigns in Salesforce Marketing Cloud for BBVA Perú.",
    bbvaKpi: "Campaign Conversion",

    // Caso 2: Yape
    yapeTag: "BEHAVIORAL AUDIT & STATE SYSTEMS",
    yapeTitle: "The error screen making you lose money.",
    yapeDesc: "Behavioral redesign for Yape's 'under review' states to eliminate transactional friction.",
    yapeKpi: "Resolution",

    // Caso 3: Allpa
    allpaTag: "BEHAVIORAL FINANCE // APPLE ECOSYSTEM",
    allpaTitle: "The system that prevents you from overspending.",
    allpaDesc: "Behavioral design concept for Apple Watch & iOS that intervenes in cash flow before impulse purchases.",
    allpaKpi: "Savings Retention",

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

  // Interpolación suave del halo ambiental sedoso
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

        {/* 2. HERO SECTION CON AVATAR INTEGRADO & TIPOGRAFÍA SERIF INDIE */}
        <section className="hero-editorial-grid">
          <div className="hero-text-flow">
            <h1 className="hero-name-title">
              Rodrigo <em>Aquije</em>
            </h1>
            <p className="hero-role-lead">{t.role}</p>
            <p className="hero-description">{t.bio}</p>

            <div className="hero-action-cluster">
              <a href="mailto:rodrigoaq996@gmail.com" className="btn-primary-action">
                {t.getInTouch} ↗
              </a>
              <button type="button" className="btn-glass-action" onClick={handleCopyEmail}>
                <span>{copied ? t.copied : 'rodrigoaq996@gmail.com'}</span>
                {copied ? <Check size={13} color="#10B981" /> : <Copy size={13} />}
              </button>
            </div>
          </div>

          <div className="hero-avatar-wrapper">
            <img 
              src="assets/avatar.png" 
              alt="Rodrigo Aquije V." 
              className="hero-avatar-img"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'; }}
            />
          </div>
        </section>

        {/* 3. SECCIÓN EDITORIAL DE 3 CASOS (SIN LÍNEAS NI CLICHÉS) */}
        <section id="work">
          <h2 className="editorial-section-title">
            {t.workSectionTitle}
          </h2>

          <div className="editorial-works-stream">
            
            {/* Caso 1: BBVA */}
            <article className="editorial-case-article">
              <div className="case-display-stage stage-chroma--bbva">
                <div className="case-ui-window">
                  <div className="case-ui-bar">
                    <div className="case-ui-dots">
                      <div className="case-ui-dot" />
                      <div className="case-ui-dot" />
                      <div className="case-ui-dot" />
                    </div>
                    <span className="case-ui-tag">salesforce-mc // bbva.eml</span>
                  </div>
                  <div className="case-ui-content">
                    <p className="ui-headline">Tus préstamos aprobados empiezan hoy con abono instantáneo.</p>
                    <div className="ui-metric-row">
                      <div className="ui-amount">S/ 52,100</div>
                      <div className="ui-kpi-badge">+24.8% CR</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="case-editorial-pane">
                <div>
                  <span className="case-tag-meta">{t.bbvaTag}</span>
                  <h3 className="case-title">{t.bbvaTitle}</h3>
                  <p className="case-summary">{t.bbvaDesc}</p>
                </div>
                <a href="/proyecto-bbva.html" className="case-read-link">
                  {t.viewCase} <ArrowUpRight size={15} />
                </a>
              </div>
            </article>

            {/* Caso 2: Yape (Invertido Asimétricamente) */}
            <article className="editorial-case-article editorial-case-article--reversed">
              <div className="case-display-stage stage-chroma--yape">
                <div className="case-ui-window">
                  <div className="case-ui-bar">
                    <div className="case-ui-dots">
                      <div className="case-ui-dot" />
                      <div className="case-ui-dot" />
                      <div className="case-ui-dot" />
                    </div>
                    <span className="case-ui-tag">yape // state-recovery</span>
                  </div>
                  <div className="case-ui-content">
                    <p className="ui-headline">Validación conductual para estados 'en revisión' sin fricción.</p>
                    <div className="ui-metric-row">
                      <div className="ui-amount">S/ 180.00</div>
                      <div className="ui-kpi-badge">0.2s Avg</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="case-editorial-pane">
                <div>
                  <span className="case-tag-meta">{t.yapeTag}</span>
                  <h3 className="case-title">{t.yapeTitle}</h3>
                  <p className="case-summary">{t.yapeDesc}</p>
                </div>
                <a href="/proyecto-yape.html" className="case-read-link">
                  {t.viewCase} <ArrowUpRight size={15} />
                </a>
              </div>
            </article>

            {/* Caso 3: Allpa */}
            <article className="editorial-case-article">
              <div className="case-display-stage stage-chroma--allpa">
                <div className="case-ui-window">
                  <div className="case-ui-bar">
                    <div className="case-ui-dots">
                      <div className="case-ui-dot" />
                      <div className="case-ui-dot" />
                      <div className="case-ui-dot" />
                    </div>
                    <span className="case-ui-tag">allpa // watchOS-flow</span>
                  </div>
                  <div className="case-ui-content">
                    <p className="ui-headline">Intervención de flujo de caja antes de una decisión de gasto impulsiva.</p>
                    <div className="ui-metric-row">
                      <div className="ui-amount">Budget Locked</div>
                      <div className="ui-kpi-badge">+38% Saved</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="case-editorial-pane">
                <div>
                  <span className="case-tag-meta">{t.allpaTag}</span>
                  <h3 className="case-title">{t.allpaTitle}</h3>
                  <p className="case-summary">{t.allpaDesc}</p>
                </div>
                <a href="/proyecto-allpa.html" className="case-read-link">
                  {t.viewCase} <ArrowUpRight size={15} />
                </a>
              </div>
            </article>

          </div>
        </section>

        {/* 4. REDES Y ENLACES */}
        <div className="editorial-network-stream">
          <a href="mailto:rodrigoaq996@gmail.com" className="editorial-network-row">
            <span className="network-left"><Mail size={15} /> Email</span>
            <span className="network-right">rodrigoaq996@gmail.com ↗</span>
          </a>
          <a href="https://linkedin.com/in/rodrigo-aquije" target="_blank" rel="noreferrer" className="editorial-network-row">
            <span className="network-left"><Linkedin size={15} /> LinkedIn</span>
            <span className="network-right">/in/rodrigo-aquije ↗</span>
          </a>
          <a href="#descargar-cv" className="editorial-network-row">
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

      {/* 5. APPLE LIQUID GLASS DOCK FLOTANTE CON FÍSICAS DE REBOTE */}
      <nav className="floating-dock-container">
        <div className="floating-dock-liquid">
          <img 
            src="assets/avatar.png" 
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