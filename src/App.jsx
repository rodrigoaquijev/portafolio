import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Linkedin, Copy, Check, Download, ArrowUpRight, Mail } from 'lucide-react';

// Componente interactivo con 3D Tilt y Spotlight
function TiltCard({ children, className = '', ...props }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [spotlight, setSpotlight] = useState({ opacity: 0, x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`,
      boxShadow: '0 20px 40px rgba(29, 42, 50, 0.08)'
    });

    setSpotlight({ opacity: 1, x, y });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
      boxShadow: 'none'
    });
    setSpotlight(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        ...style,
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.15s ease-out, box-shadow 0.25s ease'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          borderRadius: 'inherit',
          opacity: spotlight.opacity,
          transition: 'opacity 0.3s ease',
          background: `radial-gradient(circle 350px at ${spotlight.x}px ${spotlight.y}px, rgba(255,255,255,0.18), transparent 80%)`,
          zIndex: 10
        }}
      />
      {children}
    </div>
  );
}

export default function App() {
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setScrollProgress((window.scrollY / total) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('rodrigoaq996@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* Barra de progreso de lectura superior */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          backgroundColor: 'var(--accent-terra, #B85D43)',
          width: `${scrollProgress}%`,
          zIndex: 9999,
          transition: 'width 0.1s ease-out'
        }}
      />

      <div className="site-container">
        {/* Navbar */}
        <header className="navbar">
          <div className="nav-brand">
            <strong>R · A · V</strong> <span className="divider">|</span> <span className="subtext">Portafolio</span>
          </div>
          <nav className="nav-links">
            <a href="#proyectos" className="nav-link active">Proyectos</a>
            <a href="/about.html" className="nav-link">Sobre mí</a>
          </nav>
        </header>

        {/* Hero Card con 3D Tilt */}
        <TiltCard className="hero-card">
          <div className="hero-content">
            <img 
              src="assets/avatar.png" 
              alt="Rodrigo Aquije V." 
              className="hero-avatar" 
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80'; }} 
            />
            <div className="hero-info">
              <h1 className="hero-name">Rodrigo Aquije V.</h1>
              <p className="hero-role">Product Designer especializado en FinTech y conversión.</p>
              <p className="hero-bio">
                Diseño experiencias digitales claras, confiables y comercialmente viables, conectando comportamiento, negocio y precisión visual.
              </p>
              <div className="hero-meta">
                <span className="meta-item"><MapPin size={14} /> Lima, Perú</span>
                <a href="https://linkedin.com/in/rodrigo-aquije" target="_blank" rel="noreferrer" className="meta-link">
                  <Linkedin size={14} /> LinkedIn
                </a>
                <button type="button" className="meta-btn" onClick={handleCopyEmail}>
                  {copied ? <Check size={14} color="#6EA876" /> : <Copy size={14} />}
                  <span style={{ color: copied ? '#6EA876' : 'inherit' }}>
                    {copied ? '¡Copiado!' : 'Copiar Email'}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-actions">
            <a href="#descargar-cv" className="btn-primary">
              <Download size={15} /> Descargar CV
            </a>
          </div>
        </TiltCard>

        {/* Proyectos */}
        <section id="proyectos">
          <h2 className="section-title">Proyectos</h2>
          <div className="projects-list">

            {/* Caso 1: BBVA */}
            <TiltCard className="project-card">
              <div className="project-preview project-preview--bbva">
                <img src="assets/project-bbva.png" alt="Caso BBVA Perú" className="preview-img" onError={(e) => { e.target.style.display = 'none'; }} />
                <div className="mockup-placeholder bbva-mock">
                  <div className="screen-box">
                    <span className="mock-tag">BBVA</span>
                    <p className="mock-head">Tus préstamos aprobados empiezan hoy.</p>
                    <div className="mock-card">
                      <p>Recíbelo en tu cuenta en minutos</p>
                      <strong>S/ 52,100</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-details">
                <span className="project-company">BBVA Perú</span>
                <h3 className="project-heading">Cómo diseñar con conversión y compliance bancario.</h3>
                <p className="project-summary">
                  El reto técnico y visual de enviar campañas de préstamos masivas en Salesforce MC sin romper las reglas (ni el diseño).
                </p>
                <div className="project-tags">
                  <span className="tag">Email UX</span>
                  <span className="tag">Salesforce MC</span>
                  <span className="tag">Banca Regulada</span>
                  <span className="tag">Compliance</span>
                  <span className="tag">Figma</span>
                </div>
                <a href="/proyecto-bbva.html" className="btn-action">
                  Ver caso <span>↗</span>
                </a>
              </div>
            </TiltCard>

            {/* Caso 2: Yape */}
            <TiltCard className="project-card">
              <div className="project-preview project-preview--yape">
                <img src="assets/project-yape.png" alt="Caso Yape" className="preview-img" onError={(e) => { e.target.style.display = 'none'; }} />
                <div className="mockup-placeholder yape-mock">
                  <div className="phone-box">
                    <div className="phone-screen">
                      <span className="badge-yape">Yape</span>
                      <div className="phone-amount">S/ 6.80</div>
                      <div className="phone-alert">¡Ocurrió un problema técnico!</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-details">
                <span className="project-company">Yape</span>
                <h3 className="project-heading">La pantalla de error que te hace perder dinero.</h3>
                <p className="project-summary">
                  Un audit de UX sobre los estados "en revisión" de Yape, para que el silencio de la app deje de leerse como una falla.
                </p>
                <div className="project-tags">
                  <span className="tag">UX Audit</span>
                  <span className="tag">Microcopy</span>
                  <span className="tag">Sistemas de Estado</span>
                  <span className="tag">Figma</span>
                </div>
                <a href="/proyecto-yape.html" className="btn-action">
                  Ver caso <span>↗</span>
                </a>
              </div>
            </TiltCard>

            {/* Caso 3: Allpa */}
            <TiltCard className="project-card">
              <div className="project-preview project-preview--allpa">
                <img src="assets/project-allpa.png" alt="Caso Allpa" className="preview-img" onError={(e) => { e.target.style.display = 'none'; }} />
                <div className="mockup-placeholder allpa-mock">
                  <div className="watch-box">
                    <div className="watch-screen">
                      <div className="watch-logo">🦙</div>
                      <div className="watch-text">allpa</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-details">
                <span className="project-company">Allpa</span>
                <h3 className="project-heading">El sistema que te impide gastar tu propia plata.</h3>
                <p className="project-summary">
                  Un concepto de diseño conductual para Apple Watch e iOS que interviene en el flujo de caja antes de que tomes una mala decisión.
                </p>
                <div className="project-tags">
                  <span className="tag">Ecosistema iOS/watchOS</span>
                  <span className="tag">Economía Conductual</span>
                  <span className="tag">Growth</span>
                  <span className="tag">Figma</span>
                </div>
                <a href="/proyecto-allpa.html" className="btn-action">
                  Ver caso <span>↗</span>
                </a>
              </div>
            </TiltCard>

          </div>
        </section>

        {/* Logos Strip */}
        <section className="logos-strip">
          <div className="logo-item brand-bbva">BBVA</div>
          <div className="logo-item brand-centrum">centrum PUCP</div>
          <div className="logo-item brand-amsterdam">AMSTERDAM</div>
          <div className="logo-item brand-utopiq">UTOPIQ</div>
        </section>

        {/* Footer Two Columns */}
        <section className="footer-columns">
          <TiltCard className="card-column card-vision">
            <h3 className="column-title">Product Designer con visión de negocio.</h3>
            <p className="column-body">
              Diseño productos digitales enfocados en el usuario, pero con los pies en la tierra. Mi experiencia previa trabajando dentro del sector financiero me enseñó a hablar el idioma del negocio y hoy uso ese contexto para crear interfaces que sean tan intuitivas de usar como rentables de mantener.
            </p>
            <a href="/about.html" className="btn-dark">
              Conóceme <ArrowUpRight size={16} />
            </a>
          </TiltCard>

          <TiltCard className="card-column card-contact">
            <h3 className="column-title">Hablemos</h3>
            <p className="column-body">
              Siempre estoy abierto a una buena conversación. Si estás armando un equipo, tienes un proyecto en mente, o simplemente quieres intercambiar ideas sobre diseño y finanzas, mi bandeja de entrada está abierta.
            </p>
            <div className="contact-links">
              <a href="mailto:rodrigoaq996@gmail.com" className="contact-row">
                <Mail size={15} /> rodrigoaq996@gmail.com
              </a>
              <a href="https://linkedin.com/in/rodrigo-aquije" target="_blank" rel="noreferrer" className="contact-row">
                <Linkedin size={15} /> linkedin.com/in/rodrigo-aquije
              </a>
            </div>
          </TiltCard>
        </section>

        {/* Footer Bottom */}
        <footer className="footer-bottom">
          <span>R. Aquije V.</span>
          <span>©2026</span>
        </footer>
      </div>

      {/* Toast Notificación flotante */}
      {copied && (
        <div
          style={{
            position: 'fixed',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#1C2A38',
            color: '#FFFFFF',
            padding: '12px 24px',
            borderRadius: '9999px',
            fontSize: '13px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
            zIndex: 10000
          }}
        >
          <Check size={16} color="#6EA876" />
          Email copiado al portapapeles
        </div>
      )}
    </>
  );
}