import React, { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUp, Check, CircleAlert, Clock3, MessageCircleQuestion, RefreshCw, Send, ShieldCheck, Volume2, WifiOff } from 'lucide-react';
import { ArrowBendUpRightIcon } from '@phosphor-icons/react/dist/csr/ArrowBendUpRight';
import CaseStudyLayout from '../components/CaseStudyLayout.jsx';
import SectionLabel from '../components/SectionLabel.jsx';
import SiteContact from '../components/SiteContact.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { useSiteDesignSystem } from '../components/SiteDesignSystem.jsx';
import { YAPE_CASE } from '../content/yapeCase.js';

const FLOW_ICONS = [Send, WifiOff, CircleAlert, RefreshCw, ShieldCheck];

export default function CaseYape() {
  const { lang } = useSiteDesignSystem();
  const t = YAPE_CASE[lang];
  const [auditFocus, setAuditFocus] = useState('status');
  const [systemState, setSystemState] = useState('review');
  const [screenId, setScreenId] = useState('prevent');
  const [copied, setCopied] = useState(false);
  const activeState = useMemo(() => t.system.states.find((item) => item.id === systemState), [systemState, t]);
  const activeScreen = useMemo(() => t.prototype.screens.find((item) => item.id === screenId), [screenId, t]);

  useEffect(() => { setSystemState('review'); setScreenId('prevent'); }, [lang]);
  useEffect(() => { if (!copied) return undefined; const timer = window.setTimeout(() => setCopied(false), 2200); return () => window.clearTimeout(timer); }, [copied]);

  const copyEmail = async () => {
    await navigator.clipboard.writeText('rodrigoaq996@gmail.com');
    setCopied(true);
  };

  return <CaseStudyLayout className="yape-case" pageTitle={t.pageTitle} headerSubtitle={t.headerSubtitle} nav={t.nav}>
    <div className="yape-case-shell">
      <section className="yape-hero case-reveal">
        <div className="yape-hero-copy">
          <span className="yape-eyebrow">{t.hero.eyebrow}</span>
          <h1>{t.hero.title}</h1>
          <p className="yape-hero-intro">{t.hero.intro}</p>
          <p className="yape-disclosure"><CircleAlert /> {t.hero.disclosure}</p>
          <div className="yape-meta">{t.hero.meta.map(([label, value]) => <span key={label}><small>{label}</small><strong>{value}</strong></span>)}</div>
        </div>
        <HeroComparison hero={t.hero} />
        <div className="yape-problem-chain" aria-label={lang === 'es' ? 'Resumen del problema y la respuesta' : 'Problem and response summary'}>
          <article><span><MessageCircleQuestion /></span><small>{lang === 'es' ? 'Problema' : 'Problem'}</small><p>{t.hero.problem}</p></article>
          <ArrowRight aria-hidden="true" />
          <article><span><RefreshCw /></span><small>{lang === 'es' ? 'Consecuencia' : 'Consequence'}</small><p>{t.hero.consequence}</p></article>
          <ArrowRight aria-hidden="true" />
          <article><span><ShieldCheck /></span><small>{lang === 'es' ? 'Respuesta' : 'Response'}</small><p>{t.hero.response}</p></article>
        </div>
      </section>
    </div>

    <section id="audit" data-case-phase="audit" className="yape-phase yape-audit case-reveal">
      <div className="yape-case-shell">
        <PhaseHeading label={t.audit.label} title={t.audit.title} intro={t.audit.intro} />
        <div className="yape-audit-layout">
          <AuditScreen focus={auditFocus} lang={lang} />
          <div className="yape-finding-list">
            {t.audit.findings.map((finding) => <button key={finding.key} className={auditFocus === finding.key ? 'is-active' : ''} onMouseEnter={() => setAuditFocus(finding.key)} onFocus={() => setAuditFocus(finding.key)} onClick={() => setAuditFocus(finding.key)}>
              <span>{finding.heuristic}</span><h3>{finding.title}</h3><p>{finding.body}</p><ArrowBendUpRightIcon weight="duotone" />
            </button>)}
          </div>
        </div>
        <div className="yape-cost-flow"><span>{t.audit.costLabel}</span><div>{t.audit.cost.map((item, index) => <React.Fragment key={item}><strong>{item}</strong>{index < t.audit.cost.length - 1 && <ArrowRight />}</React.Fragment>)}</div></div>
        <aside className="yape-preserve"><Check /><div><h3>{t.audit.preserveTitle}</h3><p>{t.audit.preserve}</p></div></aside>
        <PhaseOutput>{t.audit.output}</PhaseOutput>
      </div>
    </section>

    <section id="evidence" data-case-phase="evidence" className="yape-phase yape-evidence case-reveal">
      <div className="yape-case-shell">
        <PhaseHeading label={t.evidence.label} title={t.evidence.title} intro={t.evidence.intro} />
        <div className="yape-journey">
          {t.evidence.steps.map(([step, emotion], index) => {
            const Icon = FLOW_ICONS[index];
            return <article key={step} className={index === t.evidence.steps.length - 1 ? 'is-intervention' : ''}><span><Icon /></span><h3>{step}</h3><small>{emotion}</small></article>;
          })}
        </div>
        <div className="yape-evidence-grid">
          <blockquote><span>{t.evidence.interviewLabel}</span><p>{t.evidence.interview}</p></blockquote>
          <blockquote><span>{t.evidence.reviewLabel}</span><p>{t.evidence.review}</p></blockquote>
        </div>
        <div className="yape-opportunity"><span>{t.evidence.opportunityLabel}</span><p>{t.evidence.opportunity}</p><ArrowBendUpRightIcon weight="duotone" /></div>
      </div>
    </section>

    <section id="system" data-case-phase="system" className="yape-phase yape-system case-reveal">
      <div className="yape-system-glow" aria-hidden="true" />
      <div className="yape-case-shell">
        <PhaseHeading label={t.system.label} title={t.system.title} intro={t.system.intro} />
        <div className="yape-state-lab">
          <div className="yape-state-selector" aria-label={t.system.selector}>
            <small>{t.system.selector}</small>
            {t.system.states.map((state) => <button key={state.id} className={systemState === state.id ? 'is-active' : ''} onClick={() => setSystemState(state.id)}><span className={`yape-state-dot yape-state-dot--${state.id}`} />{state.name}</button>)}
          </div>
          <div className="yape-state-preview"><YapeDevice screen={{ id: systemState, state: activeState.name, title: activeState.name, body: activeState.message }} lang={lang} /></div>
          <div className="yape-state-rationale"><span>{activeState.name}</span><h3>{activeState.description}</h3><p>{activeState.rationale}</p><span className="yape-rationale-action">{activeState.action}</span></div>
        </div>
        <div className="yape-copy-system">
          <div><SectionLabel>{t.system.copyTitle}</SectionLabel><p>{t.system.accessibility}</p></div>
          <div className="yape-copy-column is-avoid"><span>{lang === 'es' ? 'Evitar' : 'Avoid'}</span>{t.system.avoid.map((item) => <p key={item}>{item}</p>)}</div>
          <div className="yape-copy-column is-prefer"><span>{lang === 'es' ? 'Preferir' : 'Prefer'}</span>{t.system.prefer.map((item) => <p key={item}>{item}</p>)}</div>
        </div>
        <PhaseOutput dark>{t.system.output}</PhaseOutput>
      </div>
    </section>

    <section id="prototype" data-case-phase="prototype" className="yape-phase yape-prototype case-reveal">
      <div className="yape-case-shell">
        <PhaseHeading label={t.prototype.label} title={t.prototype.title} intro={t.prototype.intro} />
        <div className="yape-prototype-tabs" role="tablist" aria-label={lang === 'es' ? 'Pantallas del prototipo' : 'Prototype screens'}>
          {t.prototype.screens.map((screen) => <button key={screen.id} role="tab" aria-selected={screenId === screen.id} className={screenId === screen.id ? 'is-active' : ''} onClick={() => setScreenId(screen.id)}><span>{screen.branch === 'delayed' ? t.prototype.delayed : t.prototype.failed}</span><strong>{screen.tab}</strong></button>)}
        </div>
        <div className="yape-prototype-stage">
          <div className="yape-prototype-device"><YapeDevice screen={activeScreen} lang={lang} /></div>
          <div className="yape-prototype-copy"><span>{activeScreen.branch === 'delayed' ? t.prototype.delayed : t.prototype.failed}</span><h3>{activeScreen.title}</h3><p>{activeScreen.body}</p><div><ArrowBendUpRightIcon weight="duotone" /><p>{activeScreen.rationale}</p></div></div>
        </div>
      </div>
    </section>

    <section id="impact" data-case-phase="impact" className="yape-phase yape-impact case-reveal">
      <div className="yape-case-shell">
        <PhaseHeading label={t.impact.label} title={t.impact.title} intro={t.impact.intro} />
        <div className="yape-impact-shift">
          <article><span><MessageCircleQuestion /></span><h3>{t.impact.reactive.title}</h3><p>{t.impact.reactive.body}</p></article>
          <ArrowRight />
          <article className="is-preventive"><span><ShieldCheck /></span><h3>{t.impact.preventive.title}</h3><p>{t.impact.preventive.body}</p></article>
        </div>
        <div className="yape-metric-list">{t.impact.metrics.map((metric) => <article key={metric.title}><span>{metric.direction === 'up' ? <ArrowUp /> : <ArrowDown />}</span><h3>{metric.title}</h3><div><small>{lang === 'es' ? 'Hipótesis' : 'Hypothesis'}</small><p>{metric.hypothesis}</p></div><div><small>{lang === 'es' ? 'Cómo comprobarlo' : 'How to test it'}</small><p>{metric.test}</p></div></article>)}</div>
        <p className="yape-impact-disclaimer"><CircleAlert /> {t.impact.disclaimer}</p>
        <PhaseOutput>{t.impact.output}</PhaseOutput>
      </div>
    </section>

    <section className="yape-closing yape-case-shell case-reveal">
      <div><SectionLabel>{t.learnings.label}</SectionLabel><h2>{t.learnings.title}</h2></div>
      <div className="yape-learning-list">{t.learnings.items.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p><ArrowBendUpRightIcon weight="duotone" /></article>)}</div>
      <blockquote>{t.learnings.closing}</blockquote>
      <a className="yape-next-case" href="/#projects"><span>{t.learnings.next}</span><strong>{t.learnings.nextTitle}</strong><ArrowRight /></a>
    </section>

    <SiteContact label={t.contact} title={t.contactTitle} lang={lang} linkedinNetwork={t.linkedinNetwork} onCopy={copyEmail} className="yape-case-shell yape-contact case-reveal" />
    <SiteFooter text={t.footer} className="yape-case-shell" />
    <div className={`ref-toast ${copied ? 'is-visible' : ''}`} role="status" aria-live="polite"><Check size={15} /> {t.copied}</div>
  </CaseStudyLayout>;
}

function PhaseHeading({ label, title, intro }) {
  return <header className="yape-phase-heading"><div><SectionLabel>{label}</SectionLabel><h2>{title}</h2></div><p>{intro}</p></header>;
}

function PhaseOutput({ children, dark = false }) {
  return <p className={`yape-phase-output ${dark ? 'is-dark' : ''}`}><span aria-hidden="true" /><strong>{children}</strong></p>;
}

function HeroComparison({ hero }) {
  return <div className="yape-hero-comparison">
    <article className="yape-comparison-card is-before"><header><span>{hero.before}</span><WifiOff /></header><div><CircleAlert /><h3>{hero.beforeTitle}</h3><p>{hero.beforeBody}</p><span className="yape-mock-action">{hero.beforeAction}</span></div></article>
    <span className="yape-comparison-arrow"><ArrowRight /></span>
    <article className="yape-comparison-card is-after"><header><span>{hero.after}</span><Clock3 /></header><div><span className="yape-review-badge"><i />{hero.afterState}</span><h3>{hero.afterTitle}</h3><p>{hero.afterBody}</p><span className="yape-mock-action">{hero.afterAction}</span></div></article>
  </div>;
}

function AuditScreen({ focus, lang }) {
  const copy = lang === 'es'
    ? { title: 'Ups, algo salió mal.', body: 'Cierra la aplicación y vuelve a intentarlo.', action: 'Aceptar', support: 'Necesito ayuda' }
    : { title: 'Something went wrong.', body: 'Close the application and try again.', action: 'Accept', support: 'I need help' };
  return <div className={`yape-audit-screen is-${focus}`}>
    <div className="yape-audit-phone"><header><strong>yape</strong><span>5:00</span></header><div><CircleAlert /><h3 data-audit-part="status">{copy.title}</h3><p data-audit-part="action">{copy.body}</p><span className="yape-audit-action" data-audit-part="recovery">{copy.action}</span><span className="yape-audit-support">{copy.support}</span></div></div>
    <span className="audit-focus-ring" aria-hidden="true" />
  </div>;
}

function YapeDevice({ screen, lang }) {
  const isHistory = screen.id === 'history';
  const isCanceled = screen.id === 'returned' || screen.id === 'canceled';
  const isComplete = screen.id === 'complete';
  const statusClass = isCanceled ? 'canceled' : isComplete ? 'complete' : 'review';
  return <div className={`yape-device yape-device--${screen.id}`}>
    <header><span>10:30</span><strong>yape</strong><i><Volume2 /></i></header>
    <main>
      {isHistory ? <>
        <div className="yape-device-title"><h4>{lang === 'es' ? 'Mis movimientos' : 'My activity'}</h4><small>{lang === 'es' ? 'Hoy' : 'Today'}</small></div>
        <DeviceMovement name="Juan P." amount="− S/ 50.00" status={lang === 'es' ? 'Completado' : 'Completed'} type="complete" />
        <DeviceMovement name="María R." amount="− S/ 150.00" status={screen.state} type="review" />
        <DeviceMovement name="Pedro R." amount="S/ 20.00" status={lang === 'es' ? 'Cancelada' : 'Canceled'} type="canceled" />
      </> : <>
        <div className={`yape-device-state is-${statusClass}`}><i />{screen.state}</div>
        <div className="yape-device-amount"><small>{lang === 'es' ? 'Monto' : 'Amount'}</small><strong>S/ 150.00</strong><span>{lang === 'es' ? 'Para María Rodríguez' : 'To María Rodríguez'}</span></div>
        <div className={`yape-device-message is-${statusClass}`}><Clock3 /><div><strong>{screen.title}</strong><p>{screen.body}</p></div></div>
        <span className="yape-device-action">{lang === 'es' ? 'Entendido' : 'Got it'}</span>
      </>}
    </main>
  </div>;
}

function DeviceMovement({ name, amount, status, type }) {
  return <div className={`yape-device-movement is-${type}`}><span>{name.slice(0, 2)}</span><div><strong>{name}</strong><small>10:28</small></div><div><strong>{amount}</strong><small>{status}</small></div></div>;
}
