import React, { useState, useEffect } from 'react';
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
  FileText
} from 'lucide-react';

// Artefacto ASCII con las iniciales 'RAV'
const ASCII_RAV = `
  RRRR    AAAA   V     V
  R   R  A    A  V     V
  RRRR   AAAAAA   V   V 
  R  R   A    A    V V  
  R   R  A    A     V   
`;

export default function App() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState('');
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Reloj dinámico de Lima (GMT-5)
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
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
  }, []);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 20;
    const y = (e.clientY / innerHeight - 0.5) * 20;
    setMouseOffset({ x, y });
  };

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('rodrigoaq996@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <div className="spatial-canvas">
        
        {/* 1. HUD STATUS BAR SUPERIOR */}
        <header className="hud-status-bar">
          <div className="hud-item">
            <Clock size={12} />
            <span>{time ? `${time} (LIMA, GMT-5)` : 'LIMA, GMT-5'}</span>
          </div>
          <div className="hud-item">
            <Globe size={12} />
            <span>-12.0464° S, -77.0428° W</span>
          </div>
        </header>

        {/* 2. PROFILE & INTRO */}
        <section className="profile-row">
          <img 
            src="assets/avatar.png" 
            alt="Rodrigo Aquije V." 
            className="profile-avatar"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'; }}
          />
          <div className="profile-title-group">
            <h1>Rodrigo Aquije V.</h1>
            <p>Product Designer & Design Engineer</p>
          </div>
        </section>

        <section className="spatial-intro">
          <div className="bio-main">
            Diseñador de producto digital con formación en economía. Combino rigor analítico, sistemas de diseño escalables y conversión para crear productos de alta complejidad técnica y financiera.
          </div>
          
          <div className="bio-meta-columns">
            <div>
              <div className="meta-label">FOCUS</div>
              <div className="meta-val">FinTech Ecosystems, Conversion & State Architecture.</div>
            </div>
            <div>
              <div className="meta-label">STATUS</div>
              <div className="meta-val" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="live-dot"></span>
                <strong>Available for select projects</strong>
              </div>
            </div>
          </div>
        </section>

        {/* BOTONES PRINCIPALES DE CONTACTO */}
        <div className="hero-cta-group">
          <a href="mailto:rodrigoaq996@gmail.com" className="pill-btn-dark">
            Get in touch ↗
          </a>
          <button type="button" className="pill-btn-glass" onClick={handleCopyEmail}>
            <span>{copied ? 'Copied to clipboard' : 'rodrigoaq996@gmail.com'}</span>
            {copied ? <Check size={13} color="#10B981" /> : <Copy size={13} />}
          </button>
        </div>

        {/* 3. ARTEFACTO HOLOGRÁFICO CON INICIALES 'RAV' */}
        <div className="hologram-viewport">
          <div 
            className="hologram-glow-sphere"
            style={{
              transform: `translate(${mouseOffset.x * 1.5}px, ${mouseOffset.y * 1.5}px)`
            }}
          />
          <pre 
            className="ascii-rav-signature"
            style={{
              transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`
            }}
          >
            {ASCII_RAV}
          </pre>
        </div>

        {/* 4. SHOWCASE DE PROYECTOS TIPO SOFTWARE DESIGN */}
        <div id="work" className="showcase-stage">
          <div className="case-grid">
            <div className="case-panel">
              <div className="case-mockup-inner">
                <div style={{ color: '#00E5FF', fontWeight: 'bold', marginBottom: '4px' }}>BBVA // Salesforce MC</div>
                <p style={{ color: '#8E95A5', fontSize: '11px', marginBottom: '8px' }}>Optimización de préstamos masivos bajo compliance estricto.</p>
                <div style={{ background: '#090A0C', padding: '8px', borderRadius: '6px', color: '#10B981', fontFamily: 'monospace' }}>
                  +24.8% CR · Verified
                </div>
              </div>
            </div>

            <div className="case-panel">
              <div className="case-mockup-inner">
                <div style={{ color: '#FF2E74', fontWeight: 'bold', marginBottom: '4px' }}>Yape // UX Recovery</div>
                <p style={{ color: '#8E95A5', fontSize: '11px', marginBottom: '8px' }}>Arquitectura de estados para transacciones en revisión.</p>
                <div style={{ background: '#090A0C', padding: '8px', borderRadius: '6px', color: '#FFF', fontFamily: 'monospace' }}>
                  State: Resolved [0.2s]
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. REDES & CONTACTO */}
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
            <span className="network-left"><FileText size={15} /> Curriculum Vitae</span>
            <span className="network-right">Download PDF ↗</span>
          </a>
        </div>

        {/* METADATOS DE CIERRE */}
        <div className="spatial-footer-text">
          <span>RAV · 2040</span>
          <span>©2026 RODRIGO AQUIJE V.</span>
        </div>

      </div>

      {/* 6. DOCK FLOTANTE INFERIOR FLUIDO */}
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