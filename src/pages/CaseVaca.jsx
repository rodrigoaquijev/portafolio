import React, { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Check, CircleAlert, Landmark, ReceiptText, ShieldCheck, UsersRound, WalletCards } from 'lucide-react';
import { ArrowBendUpRightIcon } from '@phosphor-icons/react/dist/csr/ArrowBendUpRight';
import CaseStudyLayout from '../components/CaseStudyLayout.jsx';
import EditorialKicker from '../components/EditorialKicker.jsx';
import SectionLabel from '../components/SectionLabel.jsx';
import NextCase from '../components/NextCase.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { useSiteDesignSystem } from '../components/SiteDesignSystem.jsx';
import { VACA_CASE } from '../content/vacaCase.js';

export default function CaseVaca() {
  const { lang } = useSiteDesignSystem();
  const t = VACA_CASE[lang];
  const [screenId, setScreenId] = useState('home');
  const activeScreen = useMemo(() => t.prototype.screens.find((screen) => screen.id === screenId) || t.prototype.screens[0], [screenId, t]);

  useEffect(() => { setScreenId('home'); }, [lang]);
  return <CaseStudyLayout className="vaca-case" pageTitle={t.pageTitle} headerSubtitle={t.headerSubtitle} nav={t.nav}>
    <div className="vaca-case-shell">
      <section className="vaca-hero case-reveal">
        <div className="vaca-hero-copy">
          <EditorialKicker>{t.hero.eyebrow}</EditorialKicker>
          <h1>{t.hero.title}</h1>
          <div className="vaca-hero-summary">
            <p>{t.hero.intro}</p>
            <span><CircleAlert />{t.hero.disclosure}</span>
          </div>
          <div className="vaca-meta">{t.hero.meta.map(([label, value]) => <span key={label}><small>{label}</small><strong>{value}</strong></span>)}</div>
        </div>
        <VacaFundDemo lang={lang} />
        <div className="vaca-thesis">
          <article><ReceiptText /><div><small>{t.hero.current}</small><p>{t.hero.currentBody}</p></div></article>
          <ArrowRight aria-hidden="true" />
          <article><WalletCards /><div><small>{t.hero.proposal}</small><p>{t.hero.proposalBody}</p></div></article>
        </div>
      </section>
    </div>

    <section id="empathize" data-case-phase="empathize" className="vaca-phase vaca-empathize case-reveal">
      <div className="vaca-case-shell">
        <PhaseHeading label={t.empathize.label} title={t.empathize.title} intro={t.empathize.intro} />
        <div className="vaca-quote-rail">{t.empathize.quotes.map(([quote, source]) => <blockquote key={quote}><p>{quote}</p><cite>{source}</cite></blockquote>)}</div>
        <div className="vaca-personas">{t.empathize.personas.map((persona) => <article key={persona.name}>
          <header><span>{persona.role}</span><h3>{persona.name}</h3></header>
          <blockquote>{persona.quote}</blockquote>
          <dl><div><dt>{lang === 'es' ? 'Contexto' : 'Context'}</dt><dd>{persona.context}</dd></div><div><dt>{lang === 'es' ? 'Fricción' : 'Friction'}</dt><dd>{persona.friction}</dd></div></dl>
        </article>)}</div>
        <div className="vaca-journey">
          <SectionLabel>{lang === 'es' ? 'Viaje actual' : 'Current journey'}</SectionLabel>
          <div>{t.empathize.journey.map(([title, body, mood], index) => <article key={title} className={index === 3 ? 'is-pain' : ''}><span>{index + 1}</span><h3>{title}</h3><p>{body}</p><small>{mood}</small></article>)}</div>
        </div>
        <blockquote className="vaca-insight">{t.empathize.insight}</blockquote>
      </div>
    </section>

    <section id="define" data-case-phase="define" className="vaca-phase vaca-define case-reveal">
      <div className="vaca-case-shell">
        <PhaseHeading label={t.define.label} title={t.define.title} intro={t.define.intro} />
        <div className="vaca-hmw"><small>How might we</small><p>{t.define.hmw}</p></div>
        <div className="vaca-flow">{t.define.steps.map((step, index) => <React.Fragment key={step.title}>
          <article><span>{React.createElement([UsersRound, WalletCards, ShieldCheck, ReceiptText, Landmark][index])}</span><div><small>{String(index + 1).padStart(2, '0')}</small><h3>{step.title}</h3><p>{step.body}</p></div></article>
          {index < t.define.steps.length - 1 && <ArrowRight aria-hidden="true" />}
        </React.Fragment>)}</div>
        <div className="vaca-information-architecture"><header><SectionLabel>{lang === 'es' ? 'Arquitectura de información' : 'Information architecture'}</SectionLabel></header><div>{t.define.architecture.map(([area, children]) => <article key={area}><strong>{area}</strong><span>{children}</span></article>)}</div></div>
      </div>
    </section>

    <section id="ideate" data-case-phase="ideate" className="vaca-phase vaca-ideate case-reveal">
      <div className="vaca-ideate-glow" aria-hidden="true" />
      <div className="vaca-case-shell">
        <PhaseHeading label={t.ideate.label} title={t.ideate.title} intro={t.ideate.intro} />
        <div className="vaca-decisions">{t.ideate.decisions.map(([title, body], index) => <article key={title}><span>{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        <div className="vaca-money-heading"><Landmark /><div><h2>{t.ideate.moneyTitle}</h2><p>{t.ideate.moneyIntro}</p></div></div>
        <div className="vaca-money-flow">{t.ideate.moneyFlow.map(([title, body], index) => <React.Fragment key={title}><article><small>{index + 1}</small><h3>{title}</h3><p>{body}</p></article>{index < t.ideate.moneyFlow.length - 1 && <ArrowRight />}</React.Fragment>)}</div>
        <p className="vaca-scope"><ShieldCheck />{t.ideate.scope}</p>
      </div>
    </section>

    <section id="prototype" data-case-phase="prototype" className="vaca-phase vaca-prototype case-reveal">
      <div className="vaca-case-shell">
        <PhaseHeading label={t.prototype.label} title={t.prototype.title} intro={t.prototype.intro} />
        <div className="vaca-device-lab">
          <nav aria-label={t.prototype.selector}>{t.prototype.screens.map((screen) => <button key={screen.id} className={screen.id === activeScreen.id ? 'is-active' : ''} onClick={() => setScreenId(screen.id)}><span>{screen.tab}</span><ArrowBendUpRightIcon weight="duotone" /></button>)}</nav>
          <div className="vaca-device-stage"><VacaPhone screen={activeScreen} lang={lang} /></div>
          <aside><small>{t.prototype.selector}</small><h3>{activeScreen.title}</h3><p>{activeScreen.rationale}</p><span><Check />{lang === 'es' ? 'Una decisión principal por pantalla' : 'One primary decision per screen'}</span></aside>
        </div>
        <div className="vaca-system">
          <header><SectionLabel>{lang === 'es' ? 'Sistema de producto' : 'Product system'}</SectionLabel><h2>{t.prototype.systemTitle}</h2></header>
          <div className="vaca-token-list">{t.prototype.tokens.map(([name, color, role]) => <article key={name}><i style={{ '--vaca-token': color }} /><strong>{name}</strong><span>{color}</span><p>{role}</p></article>)}</div>
          <div className="vaca-component-list">{t.prototype.components.map(([name, use]) => <article key={name}><strong>{name}</strong><span>{use}</span></article>)}</div>
        </div>
      </div>
    </section>

    <section id="test" data-case-phase="test" className="vaca-phase vaca-test case-reveal">
      <div className="vaca-case-shell">
        <PhaseHeading label={t.test.label} title={t.test.title} intro={t.test.intro} />
        <div className="vaca-assumptions">{t.test.assumptions.map(([title, body]) => <article key={title}><CircleAlert /><h3>{title}</h3><p>{body}</p></article>)}</div>
        <div className="vaca-signal-board"><SectionLabel>{lang === 'es' ? 'Señales para medir' : 'Signals to measure'}</SectionLabel>{t.test.signals.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p><ArrowBendUpRightIcon weight="duotone" /></article>)}</div>
        <div className="vaca-next-step"><small>{lang === 'es' ? 'Siguiente experimento' : 'Next experiment'}</small><p>{t.test.nextStep}</p></div>
        <blockquote className="vaca-closing">{t.test.closing}</blockquote>
      </div>
    </section>

    <NextCase current="vaca" />
    <SiteFooter text={t.footer} className="vaca-case-shell" />
  </CaseStudyLayout>;
}

function PhaseHeading({ label, title, intro }) {
  return <header className="vaca-phase-heading"><div><SectionLabel>{label}</SectionLabel><h2>{title}</h2></div><p>{intro}</p></header>;
}

function VacaFundDemo({ lang }) {
  const people = lang === 'es' ? ['Rodrigo', 'Caro', 'Diego'] : ['Rodrigo', 'Caro', 'Diego'];
  const [active, setActive] = useState([true, true, false]);
  const balance = active.filter(Boolean).length * 160;
  const toggle = (index) => setActive((current) => current.map((value, itemIndex) => itemIndex === index ? !value : value));

  return <div className="vaca-fund-demo">
    <div className="vaca-fund-brand"><span>VACA</span><small>{lang === 'es' ? 'Fondo del depa' : 'Apartment fund'}</small></div>
    <div className="vaca-fund-balance"><small>{lang === 'es' ? 'Balance compartido' : 'Shared balance'}</small><strong>S/ {balance}</strong><span>{active.filter(Boolean).length} / 3 {lang === 'es' ? 'aportes listos' : 'contributions ready'}</span></div>
    <div className="vaca-fund-members">{people.map((person, index) => <button key={person} className={active[index] ? 'is-active' : ''} onClick={() => toggle(index)} aria-pressed={active[index]}><i>{person[0]}</i><span><strong>{person}</strong><small>{active[index] ? (lang === 'es' ? 'Aportó S/ 160' : 'Added S/ 160') : (lang === 'es' ? 'Aporte pendiente' : 'Contribution pending')}</small></span><b>{active[index] ? '✓' : '+'}</b></button>)}</div>
    <p>{lang === 'es' ? 'Prueba el fondo: activa o retira cada aporte.' : 'Try the fund: add or remove each contribution.'}</p>
  </div>;
}

function VacaPhone({ screen, lang }) {
  return <div className={`vaca-phone tone-${screen.tone}`}>
    <div className="vaca-phone-island" />
    <div className="vaca-phone-status"><span>9:41</span><span>•••</span></div>
    <div className="vaca-phone-screen">
      <header><span>vaca</span><i>{screen.tab}</i></header>
      <small>{screen.title}</small><strong>{screen.amount}</strong><p>{screen.body}</p>
      <div className="vaca-phone-card"><WalletCards /><span>{screen.detail}</span></div>
      <div className="vaca-phone-progress"><i /><i /><i /></div>
      <button>{screen.action}</button>
    </div>
    <nav><span>{lang === 'es' ? 'Inicio' : 'Home'}</span><span>{lang === 'es' ? 'Fondo' : 'Fund'}</span><span>{lang === 'es' ? 'Grupo' : 'Group'}</span></nav>
  </div>;
}
