import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

// Matriz de arte ASCII Generativo para el centro de refracción
const ASCII_HOLOGRAM = `
              @@@
          @@#  #@@%
       @@@@@@  @@@@@@@
     @@@@@  #@@  @@@@@@@
    @@@@@   %@@    @@@@@@
   @@@@@    @@@      @@@@@
  @@@@@     @@@       @@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@     @@@       @@@@@
   @@@@@    @@@      @@@@@
    @@@@@   %@@    @@@@@@
     @@@@@  #@@  @@@@@@@
       @@@@@@  @@@@@@@
          @@#  #@@%
              @@@
              |||
              |||
             // \\\\
`;

const PROJECTS = [
  {
    id: '01',
    company: 'BBVA PERÚ',
    category: 'FinTech Ecosystem',
    title: 'Conversión de préstamos y compliance masivo en Salesforce MC',
    tags: ['Email UX', 'Salesforce MC', 'Compliance'],
    link: '/proyecto-bbva.html'
  },
  {
    id: '02',
    company: 'YAPE',
    category: 'UX Audit & Behavioral',
    title: 'Sistemas de estado y resolución en transacciones en revisión',
    tags: ['Microcopy', 'State Systems', 'Figma'],
    link: '/proyecto-yape.html'
  },
  {
    id: '03',
    company: 'ALLPA',
    category: 'Behavioral Finance / iOS',
    title: 'Intervención de flujo de caja para Apple Watch y ecosistema Apple',
    tags: ['watchOS', 'Economía Conductual', 'Growth'],
    link: '/proyecto-allpa.html'
  }
];

export default function App() {
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('rodrigoaq996@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <div className="scanlines-overlay" />

      {/* 2040 HUD HERO VIEWPORT */}
      <section className="hud-hero">
        {/* 4 Esquinas de Navegación HUD */}
        <div className="hud-corner hud-top-left">
          <span>RODRIGO AQUIJE V.</span>
        </div>

        <div className="hud-corner hud-top-right">
          <a href="#proyectos">WORK</a>
          <a href="/about.html">DOSSIER</a>
          <a href="#contacto">TRANSMIT</a>
        </div>

        <div className="hud-corner hud-bottom-left">
          <span>[SYS_MODE // 2040 KINETIC]</span>
        </div>

        <div className="hud-corner hud-bottom-right">
          <span>LIMA, PE // -12.0464° S</span>
        </div>

        {/* Tipografía Monumental Desestructurada */}
        <h1 className="hero-title-left">
          RODRIGO<br />AQUIJE
        </h1>

        <div className="hero-bio-stream">
          <p>
            Product Designer con formación en economía, especializado en rigor analítico, sistemas de diseño FinTech y conversión sin fricción.
          </p>
        </div>

        {/* Artefacto Central Tornasolado con ASCII */}
        <div
          className="iridescent-centerpiece"
          style={{
            transform: `translate(calc(-50% + ${mousePos.x}px), calc(-50% + ${mousePos.y}px))`
          }}
        >
          <div className="hologram-glow" />
          <pre className="ascii-flower-matrix">{ASCII_HOLOGRAM}</pre>
        </div>

        <h2 className="hero-title-right">
          DESIGN<br />& SYSTEMS
        </h2>
      </section>

      {/* DATA-STREAM DE PROYECTOS (SIN TARJETAS) */}
      <section id="proyectos" className="index-container">
        <div className="index-header">
          <h2 className="index-title">INDEX // 01-03</h2>
          <span className="index-caption">SELECTED CASE STUDIES</span>
        </div>

        <div className="project-rows-stream">
          {PROJECTS.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="stream-row"
            >
              <span className="row-index">{project.id}</span>
              <span className="row-client">{project.company}</span>
              <span className="row-desc">{project.title}</span>
              <div className="row-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="stream-tag">{tag}</span>
                ))}
              </div>
              <span className="row-action">
                <ArrowUpRight size={18} />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER DOSSIER */}
      <footer id="contacto" className="hud-dossier-footer">
        <div>
          <h3 className="dossier-heading">Economía, interfaces y ejecución técnica.</h3>
          <p className="dossier-text">
            Diseño productos escalables uniendo la perspectiva del modelo de negocio con arquitectura de interfaz moderna.
          </p>
        </div>

        <div className="dossier-links">
          <button type="button" className="hud-btn" onClick={handleCopyEmail}>
            <span>{copied ? '[EMAIL COPIED TO CLIPBOARD]' : 'rodrigoaq996@gmail.com'}</span>
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
          <a
            href="https://linkedin.com/in/rodrigo-aquije"
            target="_blank"
            rel="noreferrer"
            className="hud-btn"
          >
            <span>LINKEDIN // PROFILE</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
    </>
  );
}