import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Linkedin, Copy, Check, Download, ArrowUpRight, Mail } from 'lucide-react';

// Componente con Físicas Juguetonas (Spring Tilt & Playful Scale)
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
    
    // Inclinación ligeramente más pronunciada y dinámica
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.01)`,
      boxShadow: '0 30px 60px rgba(244, 63, 94, 0.12)'
    });

    setSpotlight({ opacity: 1, x, y });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
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
        transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease'
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
          background: `radial-gradient(circle 400px at ${spotlight.x}px ${spotlight.y}px, rgba(244, 63, 94, 0.12), transparent 80%)`,
          zIndex: 10
        }}
      />
      {children}
    </div>
  );
}

const PROJECTS = [
  {
    id: 1,
    slug: 'bbva',
    company: 'BBVA Perú',
    title: 'Cómo diseñar con conversión y compliance bancario.',
    description: 'El reto técnico y visual de enviar campañas de préstamos masivas en Salesforce MC sin romper las reglas (ni el diseño).',
    tags: ['Email UX', 'Salesforce MC', 'Banca Regulada', 'Compliance', 'Figma'],
    link: '#',
    mockup: (
      <div className="screen-box">
        <span className="mock-tag">BBVA</span>
        <p className="mock-head">Tus préstamos aprobados empiezan hoy.</p>
        <div className="mock-card">
          <p>Recíbelo en tu cuenta en minutos</p>
          <strong>S/ 52,100</strong>
        </div>
      </div>
    )
  },
  {
    id: 2,
    slug: 'yape',
    company: 'Yape',
    title: 'La pantalla de error que te hace perder dinero.',
    description: 'Un audit de UX sobre los estados "en revisión" de Yape, para que el silencio de la app deje de leerse como una falla.',
    tags: ['UX Audit', 'Microcopy', 'Sistemas de Estado', 'Figma'],
    link: '#',
    mockup: (
      <div className="phone-box">
        <div className="phone-screen">
          <span className="badge-yape">Yape</span>
          <div className="phone-amount">S/ 6.80</div>
          <div className="phone-alert">¡Ocurrió un problema técnico!</div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    slug: 'allpa',
    company: 'Allpa',
    title: 'El sistema que te impide gastar tu propia plata.',
    description: 'Un concepto de diseño conductual para Apple Watch e iOS que interviene en el flujo de caja antes de que tomes una mala decisión.',
    tags: ['Ecosistema iOS/watchOS', 'Economía Conductual', 'Growth', 'Figma'],
    link: '#',
    mockup: (
      <div className="watch-box">
        <div className="watch-screen">
          <div className="watch-logo">🦙</div>
          <div className="watch-text">allpa</div>
        </div>
      </div>
    )
  }
];

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
      {/* Barra de progreso superior con brillo */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          backgroundColor: 'var(--accent-playful)',
          boxShadow: '0 0 10px var(--accent-playful)',
          width: `${scrollProgress}%`,
          zIndex: 9999,
          transition: 'width 0.1s ease-out'
        }}
      />

      <div className="site-container">
        {/* Navbar */}
        <header className="navbar">
          <div className="nav-brand">
            <strong>R · A · V</strong> <span className="divider">·</span> <span className="subtext">Design Engineer</span>
          </div>
          <nav className="nav-links">
            <a href="#proyectos" className="nav-link active">Proyectos</a>
            <a href="/about.html" className="nav-link">Sobre mí</a>
          </nav>
        </header>

        {/* Hero Card */}
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
              <p className="hero-role">Product Designer especializado en FinTech & Conversión.</p>
              <p className="hero-bio">
                Diseño experiencias digitales con rigor analítico y ejecución visual impecable, conectando economía conductual, sistemas de diseño y código nativo.
              </p>
              <div className="hero-meta">
                <span className="meta-item"><MapPin size={14} color="#10B981" /> Lima, Perú</span>
                <a href="https://linkedin.com/in/rodrigo-aquije" target="_blank" rel="noreferrer" className="meta-link">
                  <Linkedin size={14} /> LinkedIn
                </a>
                <button type="button" className="meta-btn" onClick={handleCopyEmail}>
                  {copied ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
                  <span style={{ color: copied ? '#10B981' : 'inherit' }}>
                    {copied ? '¡Copiado con éxito!' : 'Copiar Email'}
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
          <h2 className="section-title">Casos de Estudio</h2>
          <div className="projects-list">
            {PROJECTS.map(project => (
              <TiltCard key={project.id} className="project-card">
                <div className={`project-preview project-preview--${project.slug}`}>
                  <img src={`assets/project-${project.slug}.png`} alt={project.title} className="preview-img" onError={(e) => { e.target.style.display = 'none'; }} />
                  <div className={`mockup-placeholder ${project.slug}-mock`}>
                    {project.mockup}
                  </div>
                </div>
                <div className="project-details">
                  <span className="project-company">{project.company}</span>
                  <h3 className="project-heading">{project.title}</h3>
                  <p className="project-summary">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <a href={`/proyecto-${project.slug}.html`} className="btn-action">
                    Ver caso completo <span>↗</span>
                  </a>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* Logos Strip */}
        <section className="logos-strip">
          <div className="logo-item">BBVA PERÚ</div>
          <div className="logo-item">CENTRUM PUCP</div>
          <div className="logo-item">AMSTERDAM AGENCY</div>
          <div className="logo-item">UTOPIQ</div>
        </section>

        {/* Footer Two Columns */}
        <section className="footer-columns">
          <TiltCard className="card-column">
            <h3 className="column-title">Economía + Diseño + Código.</h3>
            <p className="column-body">
              Mi pasado en el sector financiero y banca corporativa me da una perspectiva única: entiendo las métricas de negocio, el compliance y las restricciones técnicas antes de trazar el primer píxel.
            </p>
            <a href="/about.html" className="btn-dark">
              Conoce mi historia <ArrowUpRight size={16} />
            </a>
          </TiltCard>

          <TiltCard className="card-column">
            <h3 className="column-title">Hablemos</h3>
            <p className="column-body">
              ¿Buscando un Product Designer con fuerte criterio técnico y de negocio? Mi bandeja de entrada está abierta para nuevos retos.
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
          <span>R. Aquije V. — Crafting Digital Products</span>
          <span>©2026</span>
        </footer>
      </div>

      {/* Toast Notificación con rebote elástico */}
      {copied && (
        <div
          style={{
            position: 'fixed',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%) translateY(0)',
            backgroundColor: '#1E293B',
            color: '#FFFFFF',
            border: '1px solid var(--accent-neon)',
            padding: '12px 24px',
            borderRadius: '9999px',
            fontSize: '13px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 20px 40px rgba(16, 185, 129, 0.25)',
            zIndex: 10000,
            animation: 'bounceIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
        >
          <Check size={16} color="#10B981" />
          ¡Correo copiado al portapapeles!
        </div>
      )}
    </>
  );
}