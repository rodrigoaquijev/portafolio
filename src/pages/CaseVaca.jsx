import React, { useEffect, useMemo, useState } from 'react';
import { ArrowRight, CircleAlert, Code2, Compass, Layers3, ShieldCheck, Sparkles, Target, Workflow } from 'lucide-react';
import { ArrowBendUpRightIcon } from '@phosphor-icons/react/dist/csr/ArrowBendUpRight';
import CaseStudyLayout from '../components/CaseStudyLayout.jsx';
import EditorialKicker from '../components/EditorialKicker.jsx';
import SectionLabel from '../components/SectionLabel.jsx';
import NextCase from '../components/NextCase.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { useSiteDesignSystem } from '../components/SiteDesignSystem.jsx';
import { VACA_CASE } from '../content/vacaCase.js';
import heroInicio from '../../assets/cases/vaca/hero-inicio.webp';
import heroVaca from '../../assets/cases/vaca/hero-vaca-3d.webp';
import mainFlow from '../../assets/cases/vaca/flujo-principal.webp';
import p01 from '../../assets/cases/vaca/proceso/p01-benchmark.webp';
import p02 from '../../assets/cases/vaca/proceso/p02-journey.webp';
import p03 from '../../assets/cases/vaca/proceso/p03-definicion.webp';
import p04 from '../../assets/cases/vaca/proceso/p04-flujo-pagar.webp';
import p05 from '../../assets/cases/vaca/proceso/p05-flujo-aportar.webp';
import p06 from '../../assets/cases/vaca/proceso/p06-flujo-unirse.webp';
import p07 from '../../assets/cases/vaca/proceso/p07-arquitectura.webp';
import p08 from '../../assets/cases/vaca/proceso/p08-estados.webp';
import p09 from '../../assets/cases/vaca/proceso/p09-ui-kit.webp';
import p10 from '../../assets/cases/vaca/proceso/p10-piloto-antes-despues.webp';
import s13 from '../../assets/cases/vaca/estados/s13.webp';
import s14 from '../../assets/cases/vaca/estados/s14.webp';
import s15 from '../../assets/cases/vaca/estados/s15.webp';
import s16 from '../../assets/cases/vaca/estados/s16.webp';
import s17 from '../../assets/cases/vaca/estados/s17.webp';
import s18 from '../../assets/cases/vaca/estados/s18.webp';
import s19 from '../../assets/cases/vaca/estados/s19.webp';
import s20 from '../../assets/cases/vaca/estados/s20.webp';
import s21 from '../../assets/cases/vaca/estados/s21.webp';

const IMG = { p04, p05, p06, p07, p08, s13, s14, s15, s16, s17, s18, s19, s20, s21 };

export default function CaseVaca() {
  const { lang } = useSiteDesignSystem();
  const t = VACA_CASE[lang];
  const es = lang === 'es';
  const [stateId, setStateId] = useState('s13');
  const [flowId, setFlowId] = useState('pagar');
  const activeState = useMemo(() => t.deliver.states.find((s) => s.id === stateId) || t.deliver.states[0], [stateId, t]);
  const activeFlow = useMemo(() => t.develop.flows.find((f) => f.id === flowId) || t.develop.flows[0], [flowId, t]);

  useEffect(() => { setStateId('s13'); setFlowId('pagar'); }, [lang]);

  return <CaseStudyLayout className="vaca-case" pageTitle={t.pageTitle} headerSubtitle={t.headerSubtitle} nav={t.nav}>
    <div className="vc-shell">
      <section className="vc-hero case-reveal">
        <div className="vc-hero-copy">
          <EditorialKicker>{t.hero.eyebrow}</EditorialKicker>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.intro}</p>
          <span className="vc-disclosure"><CircleAlert />{t.hero.disclosure}</span>
          <div className="vc-meta">{t.hero.meta.map(([label, value]) => <span key={label}><small>{label}</small><strong>{value}</strong></span>)}</div>
        </div>
        <div className="vc-hero-visual" aria-hidden="true">
          <img className="vc-hero-cow" src={heroVaca} alt="" />
          <img className="vc-hero-phone" src={heroInicio} alt="" />
        </div>
        <div className="vc-summary">
          {[[t.hero.problem, Target, es ? 'Problema' : 'Problem'], [t.hero.solution, Workflow, es ? 'Solución' : 'Solution'], [t.hero.role, Code2, es ? 'Mi rol' : 'My role']].map(([body, Icon, label]) => <article key={label}><Icon /><small>{label}</small><p>{body}</p></article>)}
        </div>
        <div className="vc-method"><header><SectionLabel>{t.method.label}</SectionLabel><h2>{t.method.title}</h2><p>{t.method.intro}</p></header><div>{t.method.phases.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><i /><h3>{title}</h3><p>{body}</p></article>)}</div></div>
      </section>
    </div>

    <section id="discover" data-case-phase="discover" className="vc-phase vc-discover case-reveal">
      <div className="vc-shell">
        <PhaseHeading label={t.discover.label} title={t.discover.title} intro={t.discover.intro} />
        <blockquote className="vc-quote">{t.discover.quote}</blockquote>
        <Figure src={p02} alt={t.discover.journeyAlt} wide />
        <h3 className="vc-subtitle">{t.discover.benchmarkTitle}</h3>
        <Figure src={p01} alt={t.discover.benchmarkAlt} wide />
        <div className="vc-grid4">{t.discover.findings.map(([title, body], index) => <article key={title} className={index === 3 ? 'is-key' : ''}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </div>
    </section>

    <section id="define" data-case-phase="define" className="vc-phase vc-define case-reveal">
      <div className="vc-shell">
        <PhaseHeading label={t.define.label} title={t.define.title} intro={t.define.intro} />
        <div className="vc-jtbd"><div><small>Job to be Done</small><p>{t.define.jtbd}</p></div><div><small>How Might We</small><p>{t.define.hmw}</p></div></div>
        <div className="vc-assumptions"><header><SectionLabel>{es ? 'Supuestos más riesgosos' : 'Riskiest assumptions'}</SectionLabel></header><div>{t.define.assumptions.map(([title, body]) => <article key={title}><CircleAlert /><h3>{title}</h3><p>{body}</p></article>)}</div></div>
        <Figure src={p03} alt={t.define.definitionAlt} wide />
        <div className="vc-grid4 vc-constraints"><header><SectionLabel>{es ? 'Restricciones y trade-offs' : 'Constraints and trade-offs'}</SectionLabel></header>{t.define.constraints.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </div>
    </section>

    <section id="develop" data-case-phase="develop" className="vc-phase vc-develop case-reveal">
      <div className="vc-shell">
        <PhaseHeading label={t.develop.label} title={t.develop.title} intro={t.develop.intro} />
        <div className="vc-decisions">{t.develop.decisions.map(([title, body], index) => <article key={title}><span>{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        <div className="vc-equation" aria-label={`${t.develop.equation.total} S/ 480 = ${t.develop.equation.reserved} S/ 219 + ${t.develop.equation.free} S/ 261`}>
          <div><small>{t.develop.equation.total}</small><strong>S/ 480</strong></div><b>=</b>
          <div><small>{t.develop.equation.reserved}</small><strong>S/ 219</strong></div><b>+</b>
          <div className="is-free"><small>{t.develop.equation.free}</small><strong>S/ 261</strong></div>
          <p>{t.develop.equation.note}</p>
        </div>
        <div className="vc-lab vc-flow-lab">
          <nav aria-label={t.develop.flowsLabel}>{t.develop.flows.map((flow) => <button type="button" key={flow.id} className={flow.id === activeFlow.id ? 'is-active' : ''} aria-pressed={flow.id === activeFlow.id} onClick={() => setFlowId(flow.id)}><span>{flow.tab}</span><ArrowBendUpRightIcon weight="duotone" /></button>)}</nav>
          <div className="vc-flow-stage"><Figure src={IMG[activeFlow.src]} alt={`${activeFlow.tab}. ${activeFlow.caption}`} caption={activeFlow.caption} wide key={activeFlow.id} /></div>
        </div>
        <div className="vc-discarded"><SectionLabel>{es ? 'Lo que descarté' : 'What I discarded'}</SectionLabel><div>{t.develop.discarded.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div>
      </div>
    </section>

    <section id="deliver" data-case-phase="deliver" className="vc-phase vc-deliver case-reveal">
      <div className="vc-shell">
        <PhaseHeading label={t.deliver.label} title={t.deliver.title} intro={t.deliver.intro} />
        <div className="vc-lab vc-state-lab">
          <nav aria-label={t.deliver.statesLabel}>{t.deliver.states.map((state) => <button type="button" key={state.id} className={state.id === activeState.id ? 'is-active' : ''} aria-pressed={state.id === activeState.id} onClick={() => setStateId(state.id)}><span>{state.tab}</span><ArrowBendUpRightIcon weight="duotone" /></button>)}</nav>
          <div className="vc-state-stage"><img key={activeState.id} src={IMG[activeState.id]} alt={`${activeState.tab}: ${activeState.title}`} width="390" height="844" /></div>
          <aside><small>{activeState.tab}</small><h3>{activeState.title}</h3><p>{activeState.body}</p><span><ShieldCheck />{activeState.rule}</span></aside>
        </div>

        <div className="vc-block"><header><Layers3 /><h2>{t.deliver.mainFlowTitle}</h2></header><Figure src={mainFlow} alt={t.deliver.mainFlowAlt} tall /></div>

        <div className="vc-block"><header><Compass /><h2>{t.deliver.systemTitle}</h2></header>
          <div className="vc-system"><Figure src={p09} alt={t.deliver.systemAlt} /><div>{t.deliver.system.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div>
        </div>

        <div className="vc-writing"><SectionLabel>{t.deliver.writingLabel}</SectionLabel>{t.deliver.writing.map(([before, after]) => <div key={before}><p className="is-before">{before}</p><ArrowRight aria-hidden="true" /><p className="is-after">{after}</p></div>)}</div>

        <div className="vc-block"><header><Sparkles /><h2>{t.deliver.aiTitle}</h2></header>
          <div className="vc-grid4 vc-ai">{t.deliver.ai.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
          <p className="vc-note"><CircleAlert />{t.deliver.aiNote}</p>
        </div>

        <div className="vc-block"><header><Target /><div><h2>{t.deliver.pilotTitle}</h2><p>{t.deliver.pilotIntro}</p></div></header>
          <Figure src={p10} alt={t.deliver.pilotAlt} wide />
          <div className="vc-grid4">{t.deliver.pilot.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>

        <div className="vc-block vc-tests"><header><Workflow /><h2>{t.deliver.testTitle}</h2></header>
          <ol>{t.deliver.tests.map(([task, criterion]) => <li key={task}><strong>{task}</strong><span>{criterion}</span></li>)}</ol>
          <p className="vc-note"><ShieldCheck />{t.deliver.rules}</p>
        </div>

        <div className="vc-learnings"><SectionLabel>{es ? 'Reflexión' : 'Reflection'}</SectionLabel><div>{t.deliver.learnings.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div>
      </div>
    </section>

    <NextCase current="vaca" />
    <SiteFooter text={t.footer} className="vc-shell" />
  </CaseStudyLayout>;
}

function PhaseHeading({ label, title, intro }) {
  return <header className="vc-phase-heading"><div><SectionLabel>{label}</SectionLabel><h2>{title}</h2></div><p>{intro}</p></header>;
}

function Figure({ src, alt, caption, wide = false, tall = false }) {
  return <figure className={`vc-figure ${wide ? 'is-wide' : ''} ${tall ? 'is-tall' : ''}`}>
    <a href={src} target="_blank" rel="noreferrer" aria-label={alt}><img src={src} alt={alt} loading="lazy" decoding="async" /></a>
    {caption && <figcaption>{caption}</figcaption>}
  </figure>;
}
