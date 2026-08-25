import React, { useEffect, useMemo, useState } from 'react';
import { ArrowRight, CircleAlert, Code2, Landmark, MonitorSmartphone, ShieldCheck, Smartphone, SunMoon, Target, Workflow } from 'lucide-react';
import { ArrowBendUpRightIcon } from '@phosphor-icons/react/dist/csr/ArrowBendUpRight';
import CaseStudyLayout from '../components/CaseStudyLayout.jsx';
import EditorialKicker from '../components/EditorialKicker.jsx';
import SectionLabel from '../components/SectionLabel.jsx';
import NextCase from '../components/NextCase.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { useSiteDesignSystem } from '../components/SiteDesignSystem.jsx';
import { BBVA_CASE } from '../content/bbvaCase.js';

export default function CaseBBVA() {
  const { lang } = useSiteDesignSystem();
  const t = BBVA_CASE[lang];
  const [segmentId, setSegmentId] = useState('stability');
  const activeSegment = useMemo(() => t.deliver.segments.find((segment) => segment.id === segmentId) || t.deliver.segments[0], [segmentId, t]);

  useEffect(() => { setSegmentId('stability'); }, [lang]);

  return <CaseStudyLayout className="bbva-case" pageTitle={t.pageTitle} headerSubtitle={t.headerSubtitle} nav={t.nav}>
    <div className="bbva-case-shell">
      <section className="bbva-new-hero case-reveal">
        <div className="bbva-new-hero-copy">
          <EditorialKicker>{t.hero.eyebrow}</EditorialKicker>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.intro}</p>
          <span className="bbva-confidential"><CircleAlert />{t.hero.disclosure}</span>
          <div className="bbva-new-meta">{t.hero.meta.map(([label, value]) => <span key={label}><small>{label}</small><strong>{value}</strong></span>)}</div>
        </div>
        <BBVAEmailPreview segment={activeSegment} lang={lang} />
        <div className="bbva-executive-summary">
          {[['problem', t.hero.problem], ['solution', t.hero.solution], ['role', t.hero.role]].map(([type, body], index) => {
            const Icon = [Target, Workflow, Code2][index];
            return <article key={type}><Icon /><small>{lang === 'es' ? ['Problema', 'Solución', 'Mi rol'][index] : ['Problem', 'Solution', 'My role'][index]}</small><p>{body}</p></article>;
          })}
        </div>
        <MethodMap method={t.method} />
      </section>
    </div>

    <section id="discover" data-case-phase="discover" className="bbva-new-phase bbva-discover case-reveal">
      <div className="bbva-case-shell">
        <PhaseHeading label={t.discover.label} title={t.discover.title} intro={t.discover.intro} />
        <blockquote className="bbva-brief-quote">{t.discover.brief}</blockquote>
        <div className="bbva-constraint-list">{t.discover.constraints.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        <div className="bbva-context-block"><header><SectionLabel>{lang === 'es' ? 'Contexto de lectura' : 'Reading context'}</SectionLabel><h2>{t.discover.contextTitle}</h2></header><div>{t.discover.context.map(([title, body], index) => <article key={title}>{index === 0 ? <Smartphone /> : <ShieldCheck />}<h3>{title}</h3><p>{body}</p></article>)}</div></div>
      </div>
    </section>

    <section id="define" data-case-phase="define" className="bbva-new-phase bbva-define case-reveal">
      <div className="bbva-case-shell">
        <PhaseHeading label={t.define.label} title={t.define.title} intro={t.define.intro} />
        <div className="bbva-architecture">
          <div className="bbva-architecture-stack">{t.define.order.map(([title, body], index) => <article key={title} style={{ '--bbva-order': index }}><span>{String(index + 1).padStart(2, '0')}</span><strong>{title}</strong><p>{body}</p></article>)}</div>
          <aside><div>{t.define.patterns.map(([title, body]) => <article key={title}><ArrowBendUpRightIcon weight="duotone" /><h3>{title}</h3><p>{body}</p></article>)}</div><blockquote>{t.define.nonNegotiable}</blockquote></aside>
        </div>
      </div>
    </section>

    <section id="develop" data-case-phase="develop" className="bbva-new-phase bbva-develop case-reveal">
      <div className="bbva-case-shell">
        <PhaseHeading label={t.develop.label} title={t.develop.title} intro={t.develop.intro} />
        <div className="bbva-decision-grid">{t.develop.decisions.map(([title, body], index) => <article key={title}><span>{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        <div className="bbva-nudge-lab">
          <div className="bbva-offer-widget"><header><span>BBVA</span><small>{t.develop.prototypeLabel}</small></header><div><small>{lang === 'es' ? 'Hasta' : 'Up to'}</small><strong>{t.develop.prototypeAmount}</strong><i><b /></i><button>{t.develop.prototypeAction}</button></div><footer><ShieldCheck />{lang === 'es' ? 'TCEA y condiciones siempre accesibles' : 'APR and conditions always accessible'}</footer></div>
          <div className="bbva-copy-shift"><SectionLabel>{lang === 'es' ? 'Cambio de narrativa' : 'Narrative shift'}</SectionLabel><div><span>{lang === 'es' ? 'Antes' : 'Before'}</span><p>{t.develop.before}</p></div><ArrowRight /><div className="is-after"><span>{lang === 'es' ? 'Después' : 'After'}</span><p>{t.develop.after}</p></div></div>
        </div>
      </div>
    </section>

    <section id="deliver" data-case-phase="deliver" className="bbva-new-phase bbva-deliver case-reveal">
      <div className="bbva-case-shell">
        <PhaseHeading label={t.deliver.label} title={t.deliver.title} intro={t.deliver.intro} />
        <div className="bbva-segment-lab">
          <nav aria-label={lang === 'es' ? 'Seleccionar segmento' : 'Choose segment'}>{t.deliver.segments.map((segment) => <button key={segment.id} className={segment.id === activeSegment.id ? 'is-active' : ''} onClick={() => setSegmentId(segment.id)}><span>{segment.tab}</span><ArrowBendUpRightIcon weight="duotone" /></button>)}</nav>
          <div className="bbva-segment-preview"><BBVAEmailPreview segment={activeSegment} lang={lang} compact /></div>
          <aside><small>{activeSegment.profile}</small><h3>{activeSegment.title}</h3><p>{activeSegment.body}</p><span>{lang === 'es' ? 'Tono' : 'Tone'} · {activeSegment.tone}</span></aside>
        </div>

        <div className="bbva-engineering"><header><MonitorSmartphone /><div><SectionLabel>{lang === 'es' ? 'Ejecución técnica' : 'Technical execution'}</SectionLabel><h2>{lang === 'es' ? 'El mismo diseño en cada pantalla.' : 'The same design on every screen.'}</h2></div></header><div>{t.deliver.engineering.map(([title, body], index) => {
          const Icon = [Smartphone, MonitorSmartphone, Code2][index];
          return <article key={title}><Icon /><h3>{title}</h3><p>{body}</p></article>;
        })}</div></div>

        <div className="bbva-modes"><header><SunMoon /><h2>{t.deliver.modesTitle}</h2></header><div className="bbva-mode-preview"><div className="is-light"><span>BBVA</span><strong>S/ 34,600</strong><button>{t.develop.prototypeAction}</button></div><div className="is-dark"><span>BBVA</span><strong>S/ 34,600</strong><button>{t.develop.prototypeAction}</button></div></div><div className="bbva-mode-notes">{t.deliver.modes.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div>

        <div className="bbva-measurement"><header><Landmark /><div><SectionLabel>{lang === 'es' ? 'Instrumentación' : 'Instrumentation'}</SectionLabel><h2>{t.deliver.metricsTitle}</h2></div></header><div>{t.deliver.metrics.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div><p><CircleAlert />{t.deliver.measurement}</p></div>
        <div className="bbva-learnings"><SectionLabel>{lang === 'es' ? 'Reflexión' : 'Reflection'}</SectionLabel><div>{t.deliver.learnings.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div>
      </div>
    </section>

    <NextCase current="bbva" />
    <SiteFooter text={t.footer} />
  </CaseStudyLayout>;
}

function PhaseHeading({ label, title, intro }) {
  return <header className="bbva-phase-heading"><div><SectionLabel>{label}</SectionLabel><h2>{title}</h2></div><p>{intro}</p></header>;
}

function MethodMap({ method }) {
  return <div className="bbva-method"><header><SectionLabel>{method.label}</SectionLabel><h2>{method.title}</h2><p>{method.intro}</p></header><div>{method.phases.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><i /><h3>{title}</h3><p>{body}</p></article>)}</div></div>;
}

function BBVAEmailPreview({ segment, lang, compact = false }) {
  return <div className={`bbva-email-preview ${compact ? 'is-compact' : ''}`}>
    <div className="bbva-email-chrome"><i /><i /><i /><span>mail.bbva.pe</span></div>
    <div className="bbva-email-canvas">
      <header>BBVA</header>
      <div className="bbva-email-banner"><small>{segment.profile}</small><h3>{segment.title}</h3><p>{segment.body}</p><button>{segment.action}</button></div>
      <div className="bbva-email-body"><span>{lang === 'es' ? 'Hola Julia,' : 'Hello Julia,'}</span><p>{lang === 'es' ? 'Tienes una oferta preaprobada y disponible para activar.' : 'You have a pre-approved offer ready to activate.'}</p><article><small>{lang === 'es' ? 'Hasta' : 'Up to'}</small><strong>S/ 34,600</strong><i><b /></i><button>{segment.action}</button></article><footer><ShieldCheck />TCEA 24.90% · {lang === 'es' ? 'Ver condiciones' : 'View conditions'}</footer></div>
    </div>
  </div>;
}
