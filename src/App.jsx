import React, { useState, useEffect, useRef } from 'react';
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

const DENSITY_RAMP = " .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";

function RealtimeAsciiEngine({ mousePos }) {
  const [asciiText, setAsciiText] = useState('');
  const hiddenCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = hiddenCanvasRef.current || document.createElement('canvas');
    hiddenCanvasRef.current = canvas;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    // Dimensiones de muestreo: matriz de alta resolución
    const cols = 96;
    const rows = 36;
    canvas.width = cols;
    canvas.height = rows;

    let frame = 0;
    let animationId;

    const render = () => {
      frame++;
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, cols, rows);

      const time = frame * 0.035;
      const morphFactor = (Math.sin(time * 0.5) + 1) / 2; // Oscila entre 0 (Esfera) y 1 (Letras RAV)

      ctx.save();
      ctx.translate(cols / 2, rows / 2);

      // 1. Dibujar núcleo esférico/mecatrónico 3D con sombreado
      if (morphFactor < 0.85) {
        const radius = 12 * (1 - morphFactor * 0.5);
        const grad = ctx.createRadialGradient(
          mousePos.x * 0.4,
          mousePos.y * 0.4,
          1,
          0,
          0,
          radius
        );
        grad.addColorStop(0, '#FFFFFF');
        grad.addColorStop(0.4, '#888888');
        grad.addColorStop(0.85, '#222222');
        grad.addColorStop(1, '#000000');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.fill();

        // Anillos mecatrónicos orbitales
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.8 * (1 - morphFactor)})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.ellipse(0, 0, radius * 1.5, radius * 0.5, time + mousePos.x * 0.05, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 2. Dibujar tipografía volumétrica RAV
      if (morphFactor > 0.15) {
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, morphFactor * 1.4)})`;
        ctx.font = '900 18px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('R · A · V', 0, 0);

        // Subtítulo técnico
        ctx.font = '700 6px monospace';
        ctx.fillText('[ 2040 ENGINE ]', 0, 11);
      }

      ctx.restore();

      // 3. Pixel-Sampling: Escaneo y conversión matemática a ASCII
      const imgData = ctx.getImageData(0, 0, cols, rows).data;
      let output = '';

      for (let y = 0; y < rows; y++) {
        let line = '';
        for (let x = 0; x < cols; x++) {
          const idx = (y * cols + x) * 4;
          const r = imgData[idx];
          const g = imgData[idx + 1];
          const b = imgData[idx + 2];
          // Luminancia ponderada
          const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
          const charIndex = Math.floor((brightness / 255) * (DENSITY_RAMP.length - 1));
          line += DENSITY_RAMP[charIndex];
        }
        output += line + '\n';
      }

      setAsciiText(output);
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationId);
  }, [mousePos]);

  return <pre className="ascii-hd-output">{asciiText}</pre>;
}

const CONTENT = {
  es: {
    role: "Product Designer & Design Engineer",
    bio: "Diseñador de producto digital con formación en economía. Combino rigor analítico, sistemas de diseño escalables y conversión para crear interfaces financieras intuitivas y viables.",
    focusLabel: "ENFOQUE",
    focusVal: "Ecosistemas FinTech, Conversión y Arquitectura de Estados.",
    statusLabel: "ESTADO",
    statusVal: "Disponible para proyectos selectos",
    getInTouch: "Contactar",
    copied: "¡Copiado!",
    copyEmail: "Copiar Email",
    workTitle: "Trabajos Seleccionados",
    workSubtitle: "FEATURED CASE STUDIES // 01-02",
    viewCase: "Explorar caso",
    bbvaTitle: "Cómo diseñar con conversión y compliance bancario.",
    bbvaDesc: "Optimización técnica y visual de envíos masivos en Salesforce Marketing Cloud para BBVA Perú sin romper reglas regulatorias.",
    bbvaKpi: "Conversión de Campaña",
    yapeTitle: "La pantalla de error que te hace perder dinero.",
    yapeDesc: "Rediseño conductual de estados 'en revisión' de Yape para eliminar la percepción de fallo transaccional.",
    yapeKpi: "Tiempo de Respuesta",
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
    workTitle: "Selected Works",
    workSubtitle: "FEATURED CASE STUDIES // 01-02",
    viewCase: "Explore case",
    bbvaTitle: "Designing with conversion and bank compliance.",
    bbvaDesc: "Technical and visual optimization of massive lending campaigns in Salesforce Marketing Cloud for BBVA Perú.",
    bbvaKpi: "Campaign Conversion",
    yapeTitle: "The error screen making you lose money.",
    yapeDesc: "Behavioral redesign for Yape's 'under review' states to eliminate transactional friction.",
    yapeKpi: "Response Time",
    cv: "Curriculum Vitae",
    download: "Download PDF"
  }
};

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('es');
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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

  // Captura de coordenadas del mouse normalizadas
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  // Partículas Iridiscentes de Fondo
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

    const particles = Array.from({ length: 32 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.8
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const pointColor = isDark ? 'rgba(0, 240, 255, 0.4)' : 'rgba(0, 119, 255, 0.35)';
      const lineColor = isDark ? 'rgba(112, 0, 255, 0.08)' : 'rgba(107, 33, 168, 0.08)';

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
          if (dist < 140) {
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

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('rodrigoaq996@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const t = CONTENT[lang];

  return (
    <div onMouseMove={handleMouseMove}>
      <canvas ref={canvasRef} id="particle-canvas" />

      <div className="spatial-canvas">
        
        {/* 1. HUD STATUS BAR */}
        <header className="hud-status-bar">
          <div className="hud-left">
            <div className="hud-item">
              <Clock size={12} />
              <span>{time ? `${time} (LIMA, GMT-5)` : 'LIMA, GMT-5'}</span>
            </div>
            <div className="hud-item">
              <span className="live-dot" />
              <span>SYSTEM READY</span>
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
                <span className="live-dot" />
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
            {copied ? <Check size={13} color="#00F0FF" /> : <Copy size={13} />}
          </button>
        </div>

        {/* 3. ARTEFACTO ASCII HD CON CANVAS PIXEL-SAMPLING EN TIEMPO REAL */}
        <div className="ascii-hd-stage">
          <div className="ascii-stage-header">
            <span>[SYS_RENDER // CANVAS PIXEL-SAMPLING ENGINE]</span>
            <span>96x36 HD RESOLUTION</span>
          </div>
          <div 
            className="iridescent-plasma-sphere" 
            style={{
              transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`
            }}
          />
          <RealtimeAsciiEngine mousePos={mousePos} />
        </div>

        {/* 4. SHOWCASE DE TRABAJOS VISUALES */}
        <section id="work">
          <div className="work-section-head">
            <h2 className="work-section-title">{t.workTitle}</h2>
            <span className="work-section-sub">{t.workSubtitle}</span>
          </div>

          <div className="work-showcase-container">
            
            {/* Caso 1: BBVA */}
            <div className="showcase-stage-card">
              <div className="stage-display stage-display--bbva">
                <div className="mockup-window">
                  <div className="window-header">
                    <div className="window-dots">
                      <div className="window-dot" />
                      <div className="window-dot" />
                      <div className="window-dot" />
                    </div>
                    <span className="window-title">salesforce-mc // bbva-lending-v3.eml</span>
                  </div>
                  <div className="window-content">
                    <div className="mockup-header-row">
                      <span className="brand-badge brand-badge--bbva">BBVA</span>
                      <span className="status-chip status-chip--bbva">COMPLIANT VERIFIED</span>
                    </div>
                    <p className="mockup-headline">Tus préstamos aprobados empiezan hoy con abono en 3 minutos.</p>
                    <div className="mockup-kpi-card">
                      <div>
                        <div className="kpi-label">Monto Aprobado</div>
                        <div className="kpi-amount">S/ 52,100</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div className="kpi-label">{t.bbvaKpi}</div>
                        <div className="kpi-metric-badge">+24.8%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="stage-meta">
                <div className="stage-info">
                  <span className="stage-client">BBVA PERÚ // FINANCIAL UX & CONVERSION</span>
                  <h3 className="stage-title">{t.bbvaTitle}</h3>
                  <p className="stage-desc">{t.bbvaDesc}</p>
                </div>
                <a href="/proyecto-bbva.html" className="stage-action">
                  {t.viewCase} <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Caso 2: Yape */}
            <div className="showcase-stage-card">
              <div className="stage-display stage-display--yape">
                <div className="mockup-window">
                  <div className="window-header">
                    <div className="window-dots">
                      <div className="window-dot" />
                      <div className="window-dot" />
                      <div className="window-dot" />
                    </div>
                    <span className="window-title">yape // state-recovery-flow.fig</span>
                  </div>
                  <div className="window-content">
                    <div className="mockup-header-row">
                      <span className="brand-badge brand-badge--yape">Yape</span>
                      <span className="status-chip status-chip--yape">STATE RESOLVED</span>
                    </div>
                    <p className="mockup-headline">Validación conductual para estados 'en revisión' sin fricción para el usuario.</p>
                    <div className="mockup-kpi-card">
                      <div>
                        <div className="kpi-label">Monto en Validación</div>
                        <div className="kpi-amount">S/ 180.00</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div className="kpi-label">{t.yapeKpi}</div>
                        <div className="kpi-metric-badge">0.2s Avg</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="stage-meta">
                <div className="stage-info">
                  <span className="stage-client">YAPE // BEHAVIORAL AUDIT & STATE SYSTEMS</span>
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
          <span>RAV · SYSTEM HUD</span>
          <span>©2026 RODRIGO AQUIJE V.</span>
        </div>

      </div>

      {/* 6. FLOATING DOCK INFERIOR */}
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