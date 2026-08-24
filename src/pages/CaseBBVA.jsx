import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, ChevronDown, Languages, Moon, ShieldCheck, Sun } from 'lucide-react';
import { BBVA_CASE } from '../content/bbvaCase.jsx';

const OfferCard = ({ compact = false }) => (
  <div className={`bbva-mail ${compact ? 'bbva-mail--compact' : ''}`}>
    <div className="bbva-mail-brand">BBVA <span>Perú</span></div>
    <p className="bbva-mail-kicker">PRÉSTAMO PERSONAL</p>
    <h3>Un impulso para<br />lo que viene.</h3>
    <p className="bbva-mail-copy">Tienes una oferta disponible para continuar tus planes.</p>
    <div className="bbva-offer-amount"><small>MONTO DISPONIBLE</small><strong>S/ 52,100</strong></div>
    <button type="button">Revisar mi oferta <ArrowRight size={14} /></button>
    <div className="bbva-mail-trust"><ShieldCheck size={13} /> Revisa tasa, plazo y condiciones antes de continuar.</div>
  </div>
);

export default function CaseBBVA() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('es');
  const [mouseGlow, setMouseGlow] = useState({ x: 0, y: 0 });
  const t = BBVA_CASE[lang];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.title = lang === 'es' ? 'BBVA Perú — Caso de estudio | Rodrigo Aquije' : 'BBVA Peru — Case study | Rodrigo Aquije';
  }, [theme, lang]);

  return (
    <main className="case-page" onMouseMove={(event) => setMouseGlow({ x: event.clientX - 350, y: event.clientY - 350 })}>
      <div className="grain-overlay" />
      <div className="ambient-silk-glow" style={{ transform: `translate(${mouseGlow.x}px, ${mouseGlow.y}px)` }} />

      <header className="case-topbar">
        <a href="/" className="case-back"><ArrowLeft size={14} /> {t.back}</a>
        <div className="clean-controls">
          <button className="control-pill-btn" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}><Languages size={12} /> {lang.toUpperCase()}</button>
          <button className="control-pill-btn" aria-label="Cambiar tema" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun size={12} /> : <Moon size={12} />}</button>
        </div>
      </header>

      <article className="case-shell">
        <section className="case-hero">
          <span className="case-chapter">{t.eyebrow}</span>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
          <div className="case-meta">{t.meta.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
        </section>

        <section className="bbva-hero-stage" aria-label="Vista de la campaña BBVA">
          <div className="stage-note stage-note--top">HIERARCHY / MOBILE FIRST</div>
          <OfferCard />
          <div className="stage-note stage-note--bottom">MODULAR EMAIL SYSTEM · SFMC</div>
        </section>

        <section className="case-section case-two-col">
          <div><span className="case-chapter">{t.challengeLabel}</span><h2>{t.challengeTitle}</h2></div>
          <div><p className="case-body-lead">{t.challengeBody}</p><div className="business-lines">{t.business.map(([label, text]) => <div key={label}><span>{label}</span><p>{text}</p></div>)}</div></div>
        </section>

        <section className="case-section behavior-section">
          <span className="case-chapter">{t.behaviorLabel}</span>
          <div className="case-two-col"><h2>{t.behaviorTitle}</h2><p className="case-body-lead">{t.behaviorBody}</p></div>
          <div className="friction-row">{t.frictions.map(([title, text], index) => <div className="friction-item" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
          <blockquote>{t.principle}</blockquote>
        </section>

        <section className="case-section">
          <span className="case-chapter">{t.wireLabel}</span>
          <div className="case-two-col"><h2>{t.wireTitle}</h2><p className="case-body-lead">{t.wireBody}</p></div>
          <div className="wireframe-stage">
            {['Reconocimiento', 'Oferta', 'Condiciones', 'Acción', 'Respaldo legal'].map((item, index) => <div className={`wire-module wire-module--${index + 1}`} key={item}><span>0{index + 1}</span><strong>{item}</strong><i /></div>)}
            <div className="wire-reading"><span>SECUENCIA DE LECTURA</span><ChevronDown size={16} /></div>
          </div>
        </section>

        <section className="case-section ui-system-section">
          <span className="case-chapter">{t.uiLabel}</span>
          <div className="case-two-col"><h2>{t.uiTitle}</h2><p className="case-body-lead">{t.uiBody}</p></div>
          <div className="ui-specimen">
            <OfferCard compact />
            <div className="token-rail">
              <div><span>TYPE SCALE</span><strong className="token-display">S/ 52,100</strong><p>Oferta como ancla visual</p></div>
              <div><span>ACTION</span><button type="button" className="token-button">Revisar mi oferta <ArrowRight size={13} /></button><p>Verbo + expectativa</p></div>
              <div><span>TRUST LAYER</span><p className="token-trust"><Check size={13} /> Condiciones siempre accesibles</p><p>Transparencia antes del clic</p></div>
            </div>
          </div>
        </section>

        <section className="case-section impact-section">
          <span className="case-chapter">{t.impactLabel}</span>
          <div className="case-two-col"><h2>{t.impactTitle}</h2><p className="case-body-lead">{t.impactBody}</p></div>
          <div className="metrics-table">{t.metrics.map(([metric, type, desc], index) => <div className="metric-row" key={metric}><span>0{index + 1}</span><strong>{metric}</strong><em>{type}</em><p>{desc}</p></div>)}</div>
        </section>

        <section className="case-closing"><p>{t.closing}</p><a href="/#work"><span>{t.next}</span>{t.nextTitle} <ArrowRight size={18} /></a></section>
      </article>
    </main>
  );
}
