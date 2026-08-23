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

// Renderizador del Retrato Halftone (Morfología de gato en alta fidelidad)
function HalftoneCatEngine({ mousePos }) {
  const [asciiText, setAsciiText] = useState('');
  const hiddenCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = hiddenCanvasRef.current || document.createElement('canvas');
    hiddenCanvasRef.current = canvas;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    const cols = 92;
    const rows = 38;
    canvas.width = cols;
    canvas.height = rows;

    let frame = 0;
    let animationId;

    const render = () => {
      frame++;
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, cols, rows);

      ctx.save();
      ctx.translate(cols / 2, rows / 2);

      const lookX = mousePos.x * 0.12;
      const lookY = mousePos.y * 0.12;

      // 1. Cabeza y silueta del gato
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.ellipse(0, 4, 22, 16, 0, 0, Math.PI * 2);
      ctx.fill();

      // 2. Orejas triangulares estilizadas
      ctx.beginPath();
      // Oreja izquierda
      ctx.moveTo(-16, -2);
      ctx.lineTo(-20, -18);
      ctx.lineTo(-6, -10);
      ctx.closePath();
      ctx.fill();

      // Oreja derecha
      ctx.moveTo(16, -2);
      ctx.lineTo(20, -18);
      ctx.lineTo(6, -10);
      ctx.closePath();
      ctx.fill();

      // Interior de orejas (sombra)
      ctx.fillStyle = '#444444';
      ctx.beginPath();
      ctx.moveTo(-15, -3);
      ctx.lineTo(-18, -14);
      ctx.lineTo(-8, -9);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(15, -3);
      ctx.lineTo(18, -14);
      ctx.lineTo(8, -9);
      ctx.closePath();
      ctx.fill();

      // 3. Ojos felinos expresivos
      ctx.fillStyle = '#111111';
      ctx.beginPath();
      ctx.ellipse(-9 + lookX, 0 + lookY, 4.5, 5.5, -0.1, 0, Math.PI * 2);
      ctx.ellipse(9 + lookX, 0 + lookY, 4.5, 5.5, 0.1, 0, Math.PI * 2);
      ctx.fill();

      // Brillo en los ojos (pupilas reflectivas)
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(-8 + lookX, -1 + lookY, 1.4, 0, Math.PI * 2);
      ctx.arc(10 + lookX, -1 + lookY, 1.4, 0, Math.PI * 2);
      ctx.fill();

      // 4. Nariz y hocico
      ctx.fillStyle = '#222222';
      ctx.beginPath();
      ctx.moveTo(-2, 7);
      ctx.lineTo(2, 7);
      ctx.lineTo(0, 9.5);
      ctx.closePath();
      ctx.fill();

      // 5. Bigotes finos
      ctx.strokeStyle = '#DDDDDD';
      ctx.lineWidth = 0.8;
      
      // Bigotes izquierda
      ctx.beginPath();
      ctx.moveTo(-5, 9);
      ctx.lineTo(-26, 6 + Math.sin(frame * 0.05) * 0.8);
      ctx.moveTo(-5, 10);
      ctx.lineTo(-25, 12 + Math.sin(frame * 0.05) * 0.8);
      ctx.moveTo(-5, 11);
      ctx.lineTo(-22, 17);

      // Bigotes derecha
      ctx.moveTo(5, 9);
      ctx.lineTo(26, 6 + Math.sin(frame * 0.05) * 0.8);
      ctx.moveTo(5, 10);
      ctx.lineTo(25, 12 + Math.sin(frame * 0.05) * 0.8);
      ctx.moveTo(5, 11);
      ctx.lineTo(22, 17);
      ctx.stroke();

      ctx.restore();

      // Pixel-Sampling
      const imgData = ctx.getImageData(0, 0, cols, rows).data;
      let output = '';

      for (let y = 0; y < rows; y++) {
        let line = '';
        for (let x = 0; x < cols; x++) {
          const idx = (y * cols + x) * 4;
          const r = imgData[idx];
          const g = imgData[idx + 1];
          const b = imgData[idx + 2];
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

  return <pre className="ascii-cat-render">{asciiText}</pre>;
}

const CONTENT = {
  es: {
    role: "Product Designer & Design Engineer",
    bio: "Diseñador de producto digital con formación en economía. Combino rigor analítico, sistemas de diseño escalables y conversión para crear interfaces financieras intuitivas y viables.",
    focusLabel: "ENFOQUE",
    focusVal: "Ecosistemas FinTech, Conversión y Arquitectura de Estados.",
    statusLabel: "UBICACIÓN",
    statusVal: "Lima, Perú",
    getInTouch: "Contactar",
    copied: "¡Copiado!",
    copyEmail: "Copiar Email",
    workTitle: "Trabajos Seleccionados",
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
    statusLabel: "LOCATION",
    statusVal: "Lima, Peru",
    getInTouch: "Get in touch",
    copied: "Copied!",
    copyEmail: "Copy Email",
    workTitle: "Selected Works",
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
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setMousePos({ x, y });
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
      <div className="spatial-canvas">
        
        {/* 1. CABECERA CUADRADA */}
        <header className="clean-status-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={12} />
            <span>{time ? `${time} (LIMA, GMT-5)` : 'LIMA, GMT-5'}</span>
          </div>

          <div className="clean-controls">
            <button type="button" className="square-btn-3d" onClick={toggleLang}>
              <Languages size={12} />
              <span>{lang.toUpperCase()}</span>
            </button>
            <button type="button" className="square-btn-3d" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'dark' ? <Sun size={12} /> : <Moon size={12} />}
            </button>
          </div>
        </header>

        {/* 2. PROFILE */}
        <section className="profile-row">
          <div className="profile-avatar-square">
            <img 
              src="assets/avatar.png" 
              alt="Rodrigo Aquije V." 
              className="profile-avatar"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'; }}
            />
          </div>
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
              <div className="meta-val">{t.statusVal}</div>
            </div>
          </div>
        </section>

        {/* CTAs */}
        <div className="hero-cta-group">
          <a href="mailto:rodrigoaq996@gmail.com" className="cta-square-primary">
            {t.getInTouch} ↗
          </a>
          <button type="button" className="square-btn-3d" onClick={handleCopyEmail}>
            <span>{copied ? t.copied : 'rodrigoaq996@gmail.com'}</span>
            {copied ? <Check size={13} color="#00E5FF" /> : <Copy size={13} />}
          </button>
        </div>

        {/* 3. ARTE ASCII HALFTONE DEL GATO */}
        <div className="ascii-cat-stage">
          <HalftoneCatEngine mousePos={mousePos} />
        </div>

        {/* 4. SHOWCASE DE PROYECTOS CUADRADOS */}
        <section id="work">
          <div className="work-section-head">
            <h2 className="work-section-title">{t.workTitle}</h2>
          </div>

          <div className="work-showcase-container">
            
            {/* Caso 1: BBVA */}
            <div className="monolith-square-card">
              <div className="stage-display stage-display--bbva">
                <div className="mockup-window-square">
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
                      <span className="status-chip-square status-chip-square--bbva">COMPLIANT</span>
                    </div>
                    <p className="mockup-headline">Tus préstamos aprobados empiezan hoy con abono en 3 minutos.</p>
                    <div className="mockup-kpi-square">
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
                <a href="/proyecto-bbva.html" className="cta-square-primary">
                  {t.viewCase} <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Caso 2: Yape */}
            <div className="monolith-square-card">
              <div className="stage-display stage-display--yape">
                <div className="mockup-window-square">
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
                      <span className="status-chip-square status-chip-square--yape">RESOLVED</span>
                    </div>
                    <p className="mockup-headline">Validación conductual para estados 'en revisión' sin fricción para el usuario.</p>
                    <div className="mockup-kpi-square">
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
                <a href="/proyecto-yape.html" className="cta-square-primary">
                  {t.viewCase} <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 5. REDES EN FILAS CUADRADAS */}
        <div className="network-list">
          <a href="mailto:rodrigoaq996@gmail.com" className="network-square-row">
            <span className="network-left"><Mail size={15} /> Email</span>
            <span className="network-right">rodrigoaq996@gmail.com ↗</span>
          </a>
          <a href="https://linkedin.com/in/rodrigo-aquije" target="_blank" rel="noreferrer" className="network-square-row">
            <span className="network-left"><Linkedin size={15} /> LinkedIn</span>
            <span className="network-right">/in/rodrigo-aquije ↗</span>
          </a>
          <a href="#descargar-cv" className="network-square-row">
            <span className="network-left"><FileText size={15} /> {t.cv}</span>
            <span className="network-right">{t.download} ↗</span>
          </a>
        </div>

        {/* METADATOS */}
        <div className="spatial-footer-text">
          <span>RAV</span>
          <span>©2026 RODRIGO AQUIJE V.</span>
        </div>

      </div>

      {/* 6. DOCK FLOTANTE CON INCLINACIÓN 3D EN EL EJE Y */}
      <nav className="floating-dock-container">
        <div className="floating-dock-3d-y">
          <img 
            src="assets/avatar.png" 
            alt="Rodrigo" 
            className="dock-avatar-square"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80'; }}
          />
          <div className="dock-divider-square" />
          <a href="#" className="dock-icon-btn-square active" title="Home">
            <Home size={17} />
          </a>
          <a href="#work" className="dock-icon-btn-square" title="Projects">
            <Layers size={17} />
          </a>
          <a href="/about.html" className="dock-icon-btn-square" title="About">
            <User size={17} />
          </a>
          <a href="mailto:rodrigoaq996@gmail.com" className="dock-icon-btn-square" title="Contact">
            <Send size={17} />
          </a>
        </div>
      </nav>
    </div>
  );
}