import React, { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowRight, Check, CircleAlert, Clock3, Gauge, Layers3, RotateCcw, ShieldCheck, WalletCards } from 'lucide-react';
import { ArrowBendUpRightIcon } from '@phosphor-icons/react/dist/csr/ArrowBendUpRight';
import CaseStudyLayout from '../components/CaseStudyLayout.jsx';
import EditorialKicker from '../components/EditorialKicker.jsx';
import SectionLabel from '../components/SectionLabel.jsx';
import NextCase from '../components/NextCase.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { useSiteDesignSystem } from '../components/SiteDesignSystem.jsx';
import { ALLPA_CASE } from '../content/allpaCase.js';

export default function CaseAllpa() {
  const { lang } = useSiteDesignSystem();
  const t = ALLPA_CASE[lang];
  const [platform, setPlatform] = useState('watch');
  const [screenId, setScreenId] = useState('income');
  const [day, setDay] = useState(18);

  const screens = platform === 'watch' ? t.prototype.watch : t.prototype.phone;
  const activeScreen = useMemo(() => screens.find((screen) => screen.id === screenId) || screens[0], [screenId, screens]);

  useEffect(() => {
    setPlatform('watch');
    setScreenId('income');
  }, [lang]);
  useEffect(() => {
    if (screens.some((screen) => screen.id === screenId)) return;
    setScreenId(screens[0].id);
  }, [screenId, screens]);
  return <CaseStudyLayout className="allpa-case" pageTitle={t.pageTitle} headerSubtitle={t.headerSubtitle} nav={t.nav}>
    <div className="allpa-case-shell">
      <section className="allpa-hero case-reveal">
        <div className="allpa-hero-copy">
          <EditorialKicker>{t.hero.eyebrow}</EditorialKicker>
          <h1>{t.hero.title}</h1>
          <p className="allpa-hero-intro">{t.hero.intro}</p>
          <p className="allpa-disclosure"><CircleAlert />{t.hero.disclosure}</p>
          <div className="allpa-meta">{t.hero.meta.map(([label, value]) => <span key={label}><small>{label}</small><strong>{value}</strong></span>)}</div>
        </div>
        <HeroMoment hero={t.hero} lang={lang} />
        <div className="allpa-hero-thesis">
          <article><span><WalletCards /></span><small>{lang === 'es' ? 'Problema' : 'Problem'}</small><p>{t.hero.problem}</p></article>
          <ArrowRight aria-hidden="true" />
          <article><span><ShieldCheck /></span><small>{lang === 'es' ? 'Respuesta' : 'Response'}</small><p>{t.hero.solution}</p></article>
        </div>
      </section>
    </div>

    <section id="discovery" data-case-phase="discovery" className="allpa-phase allpa-discovery case-reveal">
      <div className="allpa-case-shell">
        <PhaseHeading label={t.discovery.label} title={t.discovery.title} intro={t.discovery.intro} />
        <div className="allpa-discovery-lead">
          <div className="allpa-stat"><strong>{t.discovery.stat}</strong><p>{t.discovery.statLabel}</p><small>{t.discovery.source}</small></div>
          <aside><Layers3 /><p>{t.discovery.researchNote}</p></aside>
        </div>
        <div className="allpa-bias-grid">{t.discovery.biases.map((bias) => <article key={bias.title}><h3>{bias.title}</h3><p>{bias.body}</p><strong>{bias.response}</strong><ArrowBendUpRightIcon weight="duotone" /></article>)}</div>
        <blockquote className="allpa-principle">{t.discovery.principle}</blockquote>
      </div>
    </section>

    <section id="definition" data-case-phase="definition" className="allpa-phase allpa-definition case-reveal">
      <div className="allpa-case-shell">
        <PhaseHeading label={t.definition.label} title={t.definition.title} intro={t.definition.intro} />
        <div className="allpa-personas">{t.definition.personas.map((persona) => <article key={persona.name}>
          <header><span>{persona.role}</span><h3>{persona.name}</h3></header>
          <blockquote>{persona.quote}</blockquote>
          <dl><div><dt>{lang === 'es' ? 'Objetivo' : 'Goal'}</dt><dd>{persona.goal}</dd></div><div><dt>{lang === 'es' ? 'Fricción' : 'Friction'}</dt><dd>{persona.friction}</dd></div><div><dt>{lang === 'es' ? 'Necesidad' : 'Need'}</dt><dd>{persona.need}</dd></div></dl>
        </article>)}</div>
        <div className="allpa-hmw"><small>How might we</small><p>{t.definition.hmw}</p></div>
      </div>
    </section>

    <section id="architecture" data-case-phase="architecture" className="allpa-phase allpa-architecture case-reveal">
      <div className="allpa-architecture-glow" aria-hidden="true" />
      <div className="allpa-case-shell">
        <PhaseHeading label={t.architecture.label} title={t.architecture.title} intro={t.architecture.intro} />
        <div className="allpa-flow">
          {t.architecture.steps.map((step, index) => <React.Fragment key={step.title}><article className={index === 1 || index === 4 ? 'is-decision' : ''}><span>{React.createElement([Clock3, Layers3, Gauge, WalletCards, ShieldCheck][index])}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></article>{index < t.architecture.steps.length - 1 && <ArrowDown aria-hidden="true" />}</React.Fragment>)}
        </div>
        <div className="allpa-tradeoffs">{t.architecture.tradeoffs.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
        <div className="allpa-audit"><header><SectionLabel>{lang === 'es' ? 'Auditoría heurística' : 'Heuristic audit'}</SectionLabel><h2>{lang === 'es' ? 'No salió bien a la primera.' : 'It did not work on the first try.'}</h2></header><div>{t.architecture.audit.map(([title, body], index) => <article key={title}><span>v{index + 1} → v{index + 2}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div>
      </div>
    </section>

    <section id="prototype" data-case-phase="prototype" className="allpa-phase allpa-prototype case-reveal">
      <div className="allpa-case-shell">
        <PhaseHeading label={t.prototype.label} title={t.prototype.title} intro={t.prototype.intro} />
        <div className="allpa-platform-switch" aria-label={lang === 'es' ? 'Seleccionar plataforma' : 'Choose platform'}>
          <button className={platform === 'watch' ? 'is-active' : ''} onClick={() => { setPlatform('watch'); setScreenId(t.prototype.watch[0].id); }}>{t.prototype.platformWatch}</button>
          <button className={platform === 'phone' ? 'is-active' : ''} onClick={() => { setPlatform('phone'); setScreenId(t.prototype.phone[0].id); }}>{t.prototype.platformPhone}</button>
        </div>
        <div className={`allpa-device-lab is-${platform}`}>
          <nav aria-label={t.prototype.selector}>{screens.map((screen) => <button key={screen.id} className={screen.id === activeScreen.id ? 'is-active' : ''} onClick={() => setScreenId(screen.id)}><span>{screen.tab}</span><ArrowBendUpRightIcon weight="duotone" /></button>)}</nav>
          <div className="allpa-device-stage"><AllpaDevice platform={platform} screen={activeScreen} /></div>
          <aside><small>{t.prototype.selector}</small><h3>{activeScreen.title}</h3><p>{activeScreen.rationale}</p><span><Check />{platform === 'watch' ? (lang === 'es' ? 'Decisión en menos de 5 segundos' : 'Decision in under 5 seconds') : (lang === 'es' ? 'Mismo dato, mayor profundidad' : 'Same data, greater depth')}</span></aside>
        </div>
        <div className="allpa-token-system"><header><SectionLabel>{lang === 'es' ? 'Sistema visual' : 'Visual system'}</SectionLabel><h2>{t.prototype.systemTitle}</h2></header><div>{t.prototype.tokens.map(([name, color, role]) => <article key={name}><i style={{ '--token-color': color }} /><strong>{name}</strong><span>{color}</span><p>{role}</p></article>)}</div></div>
      </div>
    </section>

    <section id="validation" data-case-phase="validation" className="allpa-phase allpa-validation case-reveal">
      <div className="allpa-case-shell">
        <PhaseHeading label={t.validation.label} title={t.validation.title} intro={t.validation.intro} />
        <CoverageSimulator t={t.validation.simulation} day={day} setDay={setDay} />
        <div className="allpa-validation-grid"><div><SectionLabel>{lang === 'es' ? 'Riesgos conocidos' : 'Known risks'}</SectionLabel>{t.validation.risks.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div><div><SectionLabel>{lang === 'es' ? 'Modelo de adopción' : 'Adoption model'}</SectionLabel>{t.validation.business.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div>
        <div className="allpa-metrics"><SectionLabel>{lang === 'es' ? 'Marco de medición' : 'Measurement framework'}</SectionLabel>{t.validation.metrics.map(([title, question, method]) => <article key={title}><h3>{title}</h3><p>{question}</p><span>{method}</span></article>)}</div>
        <blockquote className="allpa-closing">{t.validation.closing}</blockquote>
      </div>
    </section>

    <NextCase current="allpa" />
    <SiteFooter text={t.footer} className="allpa-case-shell" />
  </CaseStudyLayout>;
}

function PhaseHeading({ label, title, intro }) {
  return <header className="allpa-phase-heading"><div><SectionLabel>{label}</SectionLabel><h2>{title}</h2></div><p>{intro}</p></header>;
}

function HeroMoment({ hero, lang }) {
  return <div className="allpa-hero-moment">
    <div className="allpa-moment-top"><span>ALLPA</span><small>{lang === 'es' ? 'Intervención contextual' : 'Contextual intervention'}</small></div>
    <div className="allpa-watch-shell"><div className="allpa-watch-face"><small>{lang === 'es' ? 'Ingreso detectado' : 'Income detected'}</small><strong>S/ 2,000</strong><p>S/ 1,429 {lang === 'es' ? 'protegidos' : 'protected'}</p><button>{lang === 'es' ? 'Ver disponible' : 'View available'}</button></div></div>
    <div className="allpa-moment-copy"><Clock3 /><div><strong>{hero.moment}</strong><p>{hero.momentBody}</p></div></div>
  </div>;
}

function AllpaDevice({ platform, screen }) {
  if (platform === 'watch') return <div className={`allpa-watch-device tone-${screen.tone}`}><div className="allpa-watch-crown" /><div className="allpa-watch-screen"><small>ALLPA</small><h4>{screen.title}</h4><strong>{screen.amount}</strong><p>{screen.body}</p><button>{screen.action}</button>{screen.secondary && <span>{screen.secondary}</span>}</div></div>;
  return <div className={`allpa-phone-device tone-${screen.tone}`}><div className="allpa-phone-island" /><div className="allpa-phone-status"><span>9:41</span><span>•••</span></div><div className="allpa-phone-screen"><small>ALLPA · {screen.tab}</small><h4>{screen.title}</h4><strong>{screen.amount}</strong><p>{screen.body}</p><div className="allpa-phone-card"><span>{screen.action}</span><small>{screen.secondary}</small></div><div className="allpa-phone-bars"><i /><i /><i /></div></div><nav><span>Inicio</span><span>Detalle</span><span>¿Alcanza?</span></nav></div>;
}

function CoverageSimulator({ t, day, setDay }) {
  const amount = Math.round(571 - ((day - 1) / 27) * 523);
  const status = amount > 170 ? 'stable' : amount > 70 ? 'warning' : 'critical';
  return <div className={`allpa-simulator is-${status}`}>
    <header><div><SectionLabel>{t.title}</SectionLabel><p>{t.body}</p></div><Gauge /></header>
    <div className="allpa-simulator-readout"><small>{t.day} {String(day).padStart(2, '0')}</small><strong>S/ {amount}</strong><span>{t[status]}</span></div>
    <input type="range" min="1" max="28" value={day} onInput={(event) => setDay(Number(event.currentTarget.value))} onChange={(event) => setDay(Number(event.currentTarget.value))} aria-label={t.day} />
    <div className="allpa-simulator-scale"><span>01</span><span>14</span><span>28</span></div>
    <button onClick={() => setDay(18)}><RotateCcw />{t.day} 18</button>
  </div>;
}
