import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, 
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

// Matriz de caracteres de alta densidad con sombreado volumétrico y textura halftone (R · A · V)
const HIGH_DENSITY_ASCII_RAV = `
::+*###%@@@@@@@@@@@@@@@@%##*+-.       .-+*###%@@@@@@@@@@@@@@@@%##*+-.       .-+*###%@@@@@@@@@@@@@@@@%##*+::
::%@@@@@@@@@@@@@@@@@@@@@@@@@@@@%+.   .=%@@@@@@@@@@@@@@@@@@@@@@@@@@@@%=.   .+%@@@@@@@@@@@@@@@@@@@@@@@@@@@@%::
::@@@@@%###*+====+*###%@@@@@@@@@@#. .#@@@@@@@@@@%###*+====+*###%@@@@@@#. .#@@@@@@@@@@%###*+====+*###%@@@@@::
::@@@@@+               .+%@@@@@@@@@=.=@@@@@@@@@%:               .+%@@@@@=.=@@@@@@@@@%:               .+@@@@@::
::@@@@@+  .+#%%%%%#*-.   .%@@@@@@@@*.*@@@@@@@@#   .+#%%%%%#*-.   .%@@@@*.*@@@@@@@@#   .+#%%%%%#*-.   +@@@@@::
::@@@@@+  =%@@@@@@@@@%:   =@@@@@@@@*.*@@@@@@@@=  .=%@@@@@@@@@%:   =@@@@*.*@@@@@@@@=  .=%@@@@@@@@@%:   +@@@@@::
::@@@@@+  =%@@@@@@@@@%:   =@@@@@@@@*.*@@@@@@@@=  .=%@@@@@@@@@%:   =@@@@*.*@@@@@@@@=  .=%@@@@@@@@@%:   +@@@@@::
::@@@@@+  .+#%%%%%#*-.   .%@@@@@@@@*.*@@@@@@@@#   .+#%%%%%#*-.   .%@@@@*.*@@@@@@@@#   .+#%%%%%#*-.   +@@@@@::
::@@@@@+               .+%@@@@@@@@@=.=@@@@@@@@@%:               .+%@@@@@=.=@@@@@@@@@%:               .+@@@@@::
::@@@@@%###*+====+*###%@@@@@@@@@@#. .#@@@@@@@@@@%###*+====+*###%@@@@@@#. .#@@@@@@@@@@%###*+====+*###%@@@@@::
::@@@@@@@@@@@@@@@@@@@@@@@@@@@@%+.   .=%@@@@@@@@@@@@@@@@@@@@@@@@@@@@%=.   .+%@@@@@@@@@@@@@@@@@@@@@@@@@@@@%::
::@@@@@%###%@@@@@@@@%###*+=-:.       .:-=+*###%@@@@@@@@%###%@@@@@@%:       .:-=+*###%@@@@@@@@%###%@@@@@@@::
::@@@@@+   .-+%@@@@@@%+:                     .-+%@@@@@@%+:   =@@@@@@=              .-+%@@@@@@%+:   =@@@@@@@::
::@@@@@+      .=%@@@@@@%+:                 .=%@@@@@@%+:      =@@@@@@=            .=%@@@@@@%+:      =@@@@@@@::
::@@@@@+        .=%@@@@@@%+:             .=%@@@@@@%+:        =@@@@@@=          .=%@@@@@@%+:        =@@@@@@@::
::@@@@@+          .=%@@@@@@%+:         .=%@@@@@@%+:          =@@@@@@=        .=%@@@@@@%+:          =@@@@@@@::
::%@@@@#-.          .=%@@@@@@%+:     .=%@@@@@@%+:          .-#@@@@@@#-.    .=%@@@@@@%+:          .-#@@@@@@%::
::+*###%@@%#*+-.       .-+*###%@@# .#@@%###*+-.       .-+*#%@@%###*+-.   .#@@%###*+-.       .-+*#%@@%###*+::
`;

const CONTENT = {
  es: {
    role: "Product Designer & Design Engineer",
    bio: "Diseñador de producto digital con formación en economía. Combino rigor analítico, sistemas de diseño escalables y conversión para crear productos de alta complejidad técnica y financiera.",
    focusLabel: "ENFOQUE",
    focusVal: "Ecosistemas FinTech, Conversión y Arquitectura de Estados.",
    statusLabel: "ESTADO",
    statusVal: "Disponible para proyectos selectos",
    getInTouch: "Contactar",
    copied: "¡Copiado!",
    copyEmail: "Copiar Email",
    workTitle: "Proyectos Seleccionados",
    workSubtitle: "VISUAL SHOWCASE // 01-02",
    viewCase: "Ver caso",
    bbvaTitle: "Cómo diseñar con conversión y compliance bancario.",
    bbvaDesc: "Optimización técnica y visual de envíos masivos en Salesforce Marketing Cloud para BBVA Perú.",
    bbvaKpi: "Conversión de Campaña",
    yapeTitle: "La pantalla de error que te hace perder dinero.",
    yapeDesc: "Rediseño conductual de estados 'en revisión' y mitigación de fricción transaccional.",
    yapeKpi: "Tiempo de Resolución",
    cv: "Currículum Vitae",
    download: "Descargar PDF"
  },
  en: {
    role: "Product Designer & Design Engineer",
    bio: "Digital product designer with an economics background. I connect analytical rigor, scalable design systems, and conversion to build high-complexity technical and financial products.",
    focusLabel: "FOCUS",
    focusVal: "FinTech Ecosystems, Conversion & State Architecture.",
    statusLabel: "STATUS",
    statusVal: "Available for select projects",
    getInTouch: "Get in touch",
    copied: "Copied!",
    copyEmail: "Copy Email",
    workTitle: "Selected Projects",
    workSubtitle: "VISUAL SHOWCASE // 01-02",
    viewCase: "View case",
    bbvaTitle: "Designing with conversion and bank compliance.",
    bbvaDesc: "Technical and visual optimization of massive lending campaigns in Salesforce Marketing Cloud.",
    bbvaKpi: "Campaign Conversion",
    yapeTitle: "The error screen making you lose money.",
    yapeDesc: "Behavioral redesign for 'under review' states and transactional friction mitigation.",
    yapeKpi: "Resolution Time",
    cv: "Curriculum Vitae",
    download: "Download PDF"
  }
};

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('es');
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState('');
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

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

  // Partículas Futuristas Cinéticas de Fondo
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 42 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.8
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const pointColor = isDark ? 'rgba(0, 210, 255, 0.35)' : 'rgba(2, 132, 199, 0.4)';
      const lineColor = isDark ? 'rgba(129, 140, 248, 0.06)' : 'rgba(99, 102, 241, 0.08)';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = pointColor;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const toggleLang = () => setLang(prev => prev === 'es' ? 'en' : 'es');

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 14;
    const y = (e.clientY / innerHeight - 0.5) * 14;
    setMouseOffset({ x, y });
  };

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('rodrigoaq996@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const t = CONTENT[lang];

  return (
    <div onMouseMove={handleMouseMove}>
      {/* Canvas Partículas Espaciales */}
      <canvas ref={canvasRef} id="particle-canvas" />

      <div className="spatial-canvas">
        
        {/* 1. HUD STATUS BAR */}
        <header className="hud-status-bar">
          <div className="hud-left">
            <div className="hud-item">
              <Clock size={12} />
              <span>{time ? `${time} (LIMA)` : 'LIMA'}</span>
            </div>
            <div className="hud-item">
              <Globe size={12} />
              <span>-12.0464° S</span>
            </div>
          </div>

          <div className="hud-controls">
            <button type="button" className="control-pill" onClick={toggleLang}>
              <Languages size={12} />
              <span>{lang.toUpperCase()}</span>
            </button>
            <button type="button" className="control-pill" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'dark' ? <Sun size={12} /> : <Moon size={12} />}
            </button>
          </div>
        </header>

        {/* 2. PROFILE & BIO */}
        <section className="profile-row">
          <img 
            src="assets/avatar.png" 
            alt="Rodrigo Aquije V." 
            className="profile-avatar"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'; }}
          />
          <div className="profile-title-group">
            <h1>Rodrigo Aquije V.</h1>
            <p>{t.role}</p>
          </div>
        </section>

        <section className="spatial-intro">
          <div className="bio-main">
            {t.bio}
          </div>
          
          <div className="bio-meta-columns">
            <div>
              <div className="meta-label">{t.focusLabel}</div>
              <div className="meta-val">{t.focusVal}</div>
            </div>
            <div>
              <div className="meta-label">{t.statusLabel}</div>
              <div className="meta-val" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="live-dot"></span>
                <strong>{t.statusVal}</strong>
              </div>
            </div>
          </div>
        </section>

        {/* CTAs */}
        <div className="hero-cta-group">
          <a href="mailto:rodrigoaq996@gmail.com" className="pill-btn-dark">
            {t.getInTouch} ↗
          </a>
          <button type="button" className="pill-btn-glass" onClick={handleCopyEmail}>
            <span>{copied ? t.copied : 'rodrigoaq996@gmail.com'}</span>
            {copied ? <Check size={13} color="#10B981" /> : <Copy size={13} />}
          </button>
        </div>

        {/* 3. MATRIZ ASCII RAV DE ALTA DENSIDAD */}
        <div className="ascii-density-wrapper">
          <div className="ascii-gradient-glow" />
          <pre 
            className="ascii-shaded-text"
            style={{
              transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`
            }}
          >
            {HIGH_DENSITY_ASCII_RAV}
          </pre>
        </div>

        {/* 4. SHOWCASE DE TRABAJOS VISUALES */}
        <section id="work">
          <div className="work-section-head">
            <h2 className="work-section-title">{t.workTitle}</h2>
            <span className="work-section-sub">{t.workSubtitle}</span>
          </div>

          <div className="work-showcase-container">
            
            {/* Caso BBVA */}
            <div className="showcase-stage-card">
              <div className="stage-display stage-display--bbva">
                <div className="mockup-window">
                  <div className="window-header">
                    <div className="window-dots">
                      <div className="window-dot" />
                      <div className="window-dot" />
                      <div className="window-dot" />
                    </div>
                    <span className="window-title">salesforce-mc // bbva-campaign.eml</span>
                  </div>
                  <div className="window-content">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{ fontWeight: '800', color: '#004481', fontSize: '13px' }}>BBVA</span>
                      <span style={{ fontSize: '10px', background: 'rgba(0, 210, 255, 0.1)', color: 'var(--accent-cyan)', padding: '2px 8px', borderRadius: '4px', fontFamily: 'Space Mono' }}>COMPLIANT</span>
                    </div>
                    <p style={{ fontSize: '13px', fontWeight: '700', marginBottom: '12px', lineHeight: '1.3' }}>Tus préstamos aprobados empiezan hoy con abono inmediato.</p>
                    <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Monto preaprobado</span>
                        <strong style={{ display: 'block', fontSize: '16px', color: 'var(--accent-cyan)' }}>S/ 52,100</strong>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{t.bbvaKpi}</span>
                        <strong style={{ display: 'block', fontSize: '14px', color: 'var(--accent-emerald)' }}>+24.8%</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stage-meta">
                <div className="stage-info">
                  <span className="stage-client">BBVA PERÚ // FINANCIAL DESIGN</span>
                  <h3 className="stage-title">{t.bbvaTitle}</h3>
                  <p className="stage-desc">{t.bbvaDesc}</p>
                </div>
                <a href="/proyecto-bbva.html" className="stage-action">
                  {t.viewCase} <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Caso Yape */}
            <div className="showcase-stage-card">
              <div className="stage-display stage-display--yape">
                <div className="mockup-window">
                  <div className="window-header">
                    <div className="window-dots">
                      <div className="window-dot" />
                      <div className="window-dot" />
                      <div className="window-dot" />
                    </div>
                    <span className="window-title">yape // state-recovery-flow</span>
                  </div>
                  <div className="window-content">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{ fontWeight: '800', color: '#731288', fontSize: '13px' }}>Yape</span>
                      <span style={{ fontSize: '10px', background: 'rgba(251, 113, 133, 0.1)', color: 'var(--accent-rose)', padding: '2px 8px', borderRadius: '4px', fontFamily: 'Space Mono' }}>RESOLVED</span>
                    </div>
                    <p style={{ fontSize: '13px', fontWeight: '700', marginBottom: '12px', lineHeight: '1.3' }}>Gestión de transacciones en estado de revisión y mitigación de drop-off.</p>
                    <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Monto validado</span>
                        <strong style={{ display: 'block', fontSize: '16px' }}>S/ 180.00</strong>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{t.yapeKpi}</span>
                        <strong style={{ display: 'block', fontSize: '14px', color: 'var(--accent-emerald)' }}>0.2s Avg</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stage-meta">
                <div className="stage-info">
                  <span className="stage-client">YAPE // UX AUDIT & BEHAVIORAL</span>
                  <h3 className="stage-title">{t.yapeTitle}</h3>
                  <p className="stage-desc">{t.yapeDesc}</p>
                </div>
                <a href="/proyecto-yape.html" className="stage-action">
                  {t.viewCase} <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 5. REDES */}
        <div className="network-list">
          <a href="mailto:rodrigoaq996@gmail.com" className="network-row">
            <span className="network-left"><Mail size={15} /> Email</span>
            <span className="network-right">rodrigoaq996@gmail.com ↗</span>
          </a>
          <a href="https://linkedin.com/in/rodrigo-aquije" target="_blank" rel="noreferrer" className="network-row">
            <span className="network-left"><Linkedin size={15} /> LinkedIn</span>
            <span className="network-right">/in/rodrigo-aquije ↗</span>
          </a>
          <a href="#descargar-cv" className="network-row">
            <span className="network-left"><FileText size={15} /> {t.cv}</span>
            <span className="network-right">{t.download} ↗</span>
          </a>
        </div>

        {/* METADATOS */}
        <div className="spatial-footer-text">
          <span>RAV · 2040 HUD</span>
          <span>©2026 RODRIGO AQUIJE V.</span>
        </div>

      </div>

      {/* 6. DOCK FLOTANTE */}
      <nav className="floating-dock-container">
        <div className="floating-dock">
          <img 
            src="assets/avatar.png" 
            alt="Rodrigo" 
            className="dock-avatar"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80'; }}
          />
          <div className="dock-divider" />
          <a href="#" className="dock-icon-btn active" title="Home">
            <Home size={18} />
          </a>
          <a href="#work" className="dock-icon-btn" title="Projects">
            <Layers size={18} />
          </a>
          <a href="/about.html" className="dock-icon-btn" title="About">
            <User size={18} />
          </a>
          <a href="mailto:rodrigoaq996@gmail.com" className="dock-icon-btn" title="Contact">
            <Send size={18} />
          </a>
        </div>
      </nav>
    </div>
  );
}