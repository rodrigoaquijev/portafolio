import React, { useRef, useState } from 'react';
import { ArrowRight, Code2, Flag, Layers3, MessageSquareText, ShieldCheck, Target, Workflow } from 'lucide-react';
import CaseStudyLayout from '../components/CaseStudyLayout.jsx';
import EditorialKicker from '../components/EditorialKicker.jsx';
import SectionLabel from '../components/SectionLabel.jsx';
import NextCase from '../components/NextCase.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { useSiteDesignSystem } from '../components/SiteDesignSystem.jsx';
import { NACION_CASE } from '../content/nacionCase.js';
import { BORDERS, GRIDS, PRIMITIVE_COLORS, PRIMITIVE_DIMENSIONS, RADII, SEMANTIC_GROUPS, SHADOWS, SPACING, TYPE_STYLES } from '../content/nacionTokens.js';
import keyScreens from '../../assets/cases/banco-nacion/caso/bn-pantallas-clave.webp';
import auditApp from '../../assets/cases/banco-nacion/caso/bn-radiografia-app.webp';
import auditWeb from '../../assets/cases/banco-nacion/caso/bn-radiografia-web.webp';
import libraryIndex from '../../assets/cases/banco-nacion/caso/bn-biblioteca-indice.webp';
import libActions from '../../assets/cases/banco-nacion/caso/bn-lib-01-acciones.webp';
import libForms from '../../assets/cases/banco-nacion/caso/bn-lib-02-formularios.webp';
import libFeedback from '../../assets/cases/banco-nacion/caso/bn-lib-03-retroalimentacion.webp';
import libMoney from '../../assets/cases/banco-nacion/caso/bn-lib-04-dinero.webp';
import libNavigation from '../../assets/cases/banco-nacion/caso/bn-lib-05-navegacion.webp';
import buttonDoc from '../../assets/cases/banco-nacion/caso/bn-doc-button.webp';
import textFieldDoc from '../../assets/cases/banco-nacion/caso/bn-doc-textfield.webp';
import inlineAlertDoc from '../../assets/cases/banco-nacion/caso/bn-doc-inlinealert.webp';
import pictograms from '../../assets/cases/banco-nacion/caso/bn-pictogramas.webp';
import decisionLog from '../../assets/cases/banco-nacion/caso/bn-registro-decisiones.webp';
import transferFlow from '../../assets/cases/banco-nacion/caso/bn-flujo-transferencia.webp';
import keyStates from '../../assets/cases/banco-nacion/caso/bn-estados.webp';

const LIBRARY_IMAGES = { acciones: libActions, formularios: libForms, retroalimentacion: libFeedback, dinero: libMoney, navegacion: libNavigation };
const DOC_IMAGES = { button: buttonDoc, textfield: textFieldDoc, inlinealert: inlineAlertDoc };
const PRIMITIVE_COLOR_COUNT = PRIMITIVE_COLORS.reduce((sum, family) => sum + family.tokens.length, 0);
const SEMANTIC_COUNT = SEMANTIC_GROUPS.reduce((sum, group) => sum + group.tokens.length, 0);
const cssVar = (token) => `--${token.replaceAll('/', '-')}`;

export default function CaseBancoNacion() {
  const { lang } = useSiteDesignSystem();
  const t = NACION_CASE[lang];
  const es = lang === 'es';
  const { contexto, tokens, foundations, componentes, solucion, adopcion, impacto } = t;
  const { evolution } = componentes;

  return <CaseStudyLayout className="nacion-case" pageTitle={t.pageTitle} headerSubtitle={t.headerSubtitle} nav={t.nav}>
    <div className="bn-shell">
      <section className="bn-hero case-reveal">
        <div className="bn-hero-copy">
          <EditorialKicker>{t.hero.eyebrow}</EditorialKicker>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.intro}</p>
        </div>
        <div className="bn-meta">{t.hero.meta.map(([label, value]) => <span key={label}><small>{label}</small><strong>{value}</strong></span>)}</div>
        <Figure src={keyScreens} alt={t.hero.imageAlt} className="bn-hero-figure" />
        <div className="bn-summary">
          {[[t.hero.problem, Target, es ? 'Problema' : 'Problem'], [t.hero.solution, Workflow, es ? 'Solución' : 'Solution'], [t.hero.role, Code2, es ? 'Mi rol' : 'My role']].map(([body, Icon, label]) => <article key={label}><Icon /><small>{label}</small><p>{body}</p></article>)}
        </div>
      </section>
    </div>

    <section id="contexto" data-case-phase="contexto" className="bn-phase bn-surface case-reveal">
      <div className="bn-shell">
        <PhaseHeading label={contexto.label} title={contexto.title} intro={contexto.intro} />
        <Figure src={auditApp} alt={contexto.appAlt} caption={contexto.appCaption} />
        <div className="bn-grid4"><header><SectionLabel>{contexto.findingsLabel}</SectionLabel></header>{contexto.findings.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        <div className="bn-split">
          <Figure src={auditWeb} alt={contexto.webAlt} tall />
          <div className="bn-split-copy"><h3>{contexto.webTitle}</h3><p>{contexto.webBody}</p><div className="bn-swatches"><i style={{ background: '#E11E00' }} /><span>#E11E00</span><b>Roboto</b></div></div>
        </div>
        <div className="bn-diagnosis"><SectionLabel>{contexto.diagnosisLabel}</SectionLabel>{contexto.diagnosis.map(([problem, proposal]) => <div key={problem}><p className="is-problem">{problem}</p><ArrowRight aria-hidden="true" /><p>{proposal}</p></div>)}</div>
      </div>
    </section>

    <section id="tokens" data-case-phase="tokens" className="bn-phase case-reveal">
      <div className="bn-shell">
        <PhaseHeading label={tokens.label} title={tokens.title} intro={tokens.intro} />
        <div className="bn-chain">{tokens.chain.map(([level, name, detail], index) => <React.Fragment key={level}>{index > 0 && <ArrowRight aria-hidden="true" />}<div><small>{level}</small><code>{name}</code><span>{index === 0 && <i style={{ background: '#E11E00' }} />}{detail}</span></div></React.Fragment>)}</div>
        <p className="bn-note"><Layers3 />{tokens.chainNote}</p>

        <div className="bn-tier">
          <TierHeader title={tokens.primitivesTitle} count={PRIMITIVE_COLOR_COUNT + PRIMITIVE_DIMENSIONS.length} body={tokens.primitivesBody} />
          <h4 className="bn-subhead">{tokens.colorLabel} · {PRIMITIVE_COLOR_COUNT}</h4>
          <div className="bn-palette">{PRIMITIVE_COLORS.map(({ family, tokens: tones }) => <div key={family} className="bn-palette-row">
            <code>color/{family}</code>
            <ul>{tones.map(([tone, hex]) => <li key={tone}><i style={{ background: hex }} /><span>{tone}</span><small>{hex}</small></li>)}</ul>
          </div>)}</div>
          <h4 className="bn-subhead">{tokens.dimensionsLabel} · {PRIMITIVE_DIMENSIONS.length}</h4>
          <ul className="bn-dimensions">{PRIMITIVE_DIMENSIONS.map(([token, value]) => <li key={token}><code>{token}</code><strong>{value}</strong></li>)}</ul>
        </div>

        <div className="bn-tier">
          <TierHeader title={tokens.semanticsTitle} count={SEMANTIC_COUNT} body={tokens.semanticsBody} />
          <div className="bn-semantic">{SEMANTIC_GROUPS.map((group) => <div key={group.en} className="bn-semantic-group">
            <h4 className="bn-subhead">{group[lang]} · {group.tokens.length}</h4>
            <table>
              <thead><tr>{tokens.heads.map((head) => <th key={head} scope="col">{head}</th>)}</tr></thead>
              <tbody>{group.tokens.map(([token, primitive, hex, useEs, useEn]) => <tr key={token}>
                <td><i style={{ background: hex }} /><span><code>{token}</code><small>var({cssVar(token)})</small></span></td>
                <td><code>{primitive}</code><small>{hex}</small></td>
                <td>{es ? useEs : useEn}</td>
              </tr>)}</tbody>
            </table>
          </div>)}</div>
        </div>
      </div>
    </section>

    <section id="foundations" data-case-phase="foundations" className="bn-phase bn-surface case-reveal">
      <div className="bn-shell">
        <PhaseHeading label={foundations.label} title={foundations.title} intro={foundations.intro} />

        <Foundation title={foundations.colorTitle} body={foundations.colorBody}>
          <div className="bn-reds"><h3>{foundations.redsTitle}</h3><div>{foundations.reds.map(([hex, name, token, use]) => <article key={hex}><i style={{ background: hex }} /><small>{name}</small><strong>{hex}</strong><code>{token}</code><p>{use}</p></article>)}</div><p className="bn-rule"><ShieldCheck />{foundations.redsRule}</p></div>
        </Foundation>

        <Foundation title={foundations.typeTitle} body={foundations.typeBody}>
          <div className="bn-canvas bn-type">{TYPE_STYLES.map(([style, weight, size, lineHeight, cssWeight, sampleEs, sampleEn]) => <div key={style}>
            <span><code>{style}</code><small>Roboto {weight} · {size}/{lineHeight}</small></span>
            <p style={{ fontSize: size, lineHeight: `${lineHeight}px`, fontWeight: cssWeight }}>{es ? sampleEs : sampleEn}</p>
          </div>)}</div>
        </Foundation>

        <Foundation title={foundations.spaceTitle} body={foundations.spaceBody}>
          <div className="bn-canvas bn-space">{SPACING.map(([token, px, useEs, useEn]) => <div key={token}>
            <code>{token}</code><strong>{px}</strong><i style={{ width: px, height: px }} /><span>{es ? useEs : useEn}</span>
          </div>)}</div>
        </Foundation>

        <Foundation title={foundations.shapeTitle} body={foundations.shapeBody}>
          <div className="bn-canvas bn-shapes">
            {RADII.map(([token, px, useEs, useEn]) => <div key={token}><i style={{ borderRadius: px }} /><code>{token}</code><strong>{px === 9999 ? 'full' : `${px}px`}</strong><span>{es ? useEs : useEn}</span></div>)}
            {BORDERS.map(([token, px, useEs, useEn]) => <div key={token}><i className="is-border" style={{ borderWidth: px }} /><code>{token}</code><strong>{px}px</strong><span>{es ? useEs : useEn}</span></div>)}
          </div>
        </Foundation>

        <Foundation title={foundations.shadowTitle} body={foundations.shadowBody}>
          <div className="bn-canvas bn-shadows">{SHADOWS.map(([token, shadow, useEs, useEn]) => <div key={token}>
            <i style={{ boxShadow: shadow }} /><code>{token}</code><span>{es ? useEs : useEn}</span><small>{shadow}</small>
          </div>)}</div>
        </Foundation>

        <Foundation title={foundations.gridTitle} body={foundations.gridBody}>
          <div className="bn-canvas bn-grids">{GRIDS.map(([token, columns, gutter, margin, viewport]) => {
            const [width, height] = viewport.split(' × ').map(Number);
            return <div key={token}>
              <div className="bn-grid-frame" style={{ width: width * 0.22, aspectRatio: `${width} / ${height}` }}>
                <div style={{ marginInline: `${(margin / width) * 100}%`, columnGap: `${(gutter / (width - margin * 2)) * 100}%` }}>{Array.from({ length: columns }, (_, index) => <i key={index} />)}</div>
              </div>
              <code>{token}</code>
              <dl>{foundations.gridHeads.map((head, index) => <React.Fragment key={head}><dt>{head}</dt><dd>{[columns, gutter, margin][index]}</dd></React.Fragment>)}</dl>
              <small>{viewport}</small>
            </div>;
          })}</div>
        </Foundation>
      </div>
    </section>

    <section id="componentes" data-case-phase="componentes" className="bn-phase case-reveal">
      <div className="bn-shell">
        <PhaseHeading label={componentes.label} title={componentes.title} intro={componentes.intro} />

        <div className="bn-tier bn-tier-first">
          <TierHeader title={componentes.criteria.title} body={componentes.criteria.body} />
          <ol className="bn-criteria">{componentes.criteria.steps.map(([title, body]) => <li key={title}><strong>{title}</strong><p>{body}</p></li>)}</ol>
          <Figure src={libraryIndex} alt={componentes.criteria.alt} />
        </div>

        <div className="bn-tier">
          <TierHeader title={componentes.libraryTitle} />
          <Tabs label={componentes.libraryTitle} items={componentes.library} render={(item) => <div className="bn-tab-panel">
            <div className="bn-tab-copy"><p>{item.body}</p><ul>{item.items.map((name) => <li key={name}>{name}</li>)}</ul></div>
            <Figure src={LIBRARY_IMAGES[item.id]} alt={`${componentes.libraryAlt}: ${item.tab}`} tall />
          </div>} />
        </div>

        <div className="bn-tier">
          <TierHeader title={componentes.docsTitle} body={componentes.docsBody} />
          <Tabs label={componentes.docsTitle} items={componentes.docs} render={(item) => <div className="bn-tab-panel">
            <div className="bn-tab-copy"><h4>{item.tab}</h4><p>{item.body}</p></div>
            <Figure src={DOC_IMAGES[item.id]} alt={`${componentes.docsAlt} ${item.tab}`} tall />
          </div>} />
        </div>

        <div className="bn-tier">
          <TierHeader title={evolution.title} body={evolution.body} />
          <ol className="bn-timeline">{evolution.items.map(([title, body], index) => <li key={title} className={index === evolution.items.length - 1 ? 'is-final' : ''}><strong>{title}</strong><p>{body}</p></li>)}</ol>
          <div className="bn-identity"><Figure src={pictograms} alt={evolution.pictogramsAlt} /><div>{evolution.identity.map(([title, body]) => <article key={title}><h4>{title}</h4><p>{body}</p></article>)}</div></div>
          <p className="bn-rule"><ShieldCheck />{evolution.rule}</p>
          <Figure src={decisionLog} alt={evolution.logAlt} />
        </div>
      </div>
    </section>

    <section id="solucion" data-case-phase="solucion" className="bn-phase bn-surface case-reveal">
      <div className="bn-shell">
        <PhaseHeading label={solucion.label} title={solucion.title} intro={solucion.intro} />
        <Figure src={transferFlow} alt={solucion.flowAlt} wide />
        <ol className="bn-steps">{solucion.steps.map(([title, body], index) => <li key={title}><span>{String(index).padStart(2, '0')}</span><strong>{title}</strong><p>{body}</p></li>)}</ol>

        <div className="bn-block"><header><Layers3 /><h2>{solucion.statesTitle}</h2></header>
          <Figure src={keyStates} alt={solucion.statesAlt} wide />
          <div className="bn-grid3">{solucion.states.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>

        <div className="bn-writing"><SectionLabel>{solucion.writingLabel}</SectionLabel>{solucion.writing.map(([before, after]) => <div key={before}><p className="is-before">{before}</p><ArrowRight aria-hidden="true" /><p>{after}</p></div>)}<p className="bn-note"><MessageSquareText />{solucion.writingNote}</p></div>
      </div>
    </section>

    <section id="adopcion" data-case-phase="adopcion" className="bn-phase case-reveal">
      <div className="bn-shell">
        <PhaseHeading label={adopcion.label} title={adopcion.title} intro={adopcion.intro} />

        <div className="bn-tier bn-tier-first">
          <TierHeader title={adopcion.governanceTitle} body={adopcion.governanceIntro} />
          <div className="bn-grid3">{adopcion.governance.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>

        <div className="bn-tier">
          <TierHeader title={adopcion.roadmapTitle} body={adopcion.roadmapBody} />
          <ol className="bn-roadmap">{adopcion.roadmap.map(({ phase, name, time, status, items, exit }, index) => <li key={phase} className={index === 0 ? 'is-done' : ''}>
            <header><small>{phase}</small><span>{status}</span></header>
            <h4>{name}</h4>
            <time>{time}</time>
            <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            <p><Flag aria-hidden="true" />{exit}</p>
          </li>)}</ol>
        </div>

        <div className="bn-tier">
          <TierHeader title={adopcion.okrTitle} body={adopcion.okrBody} />
          <div className="bn-okrs">{adopcion.okrs.map(({ objective, results }, index) => <article key={objective}>
            <header><small>{adopcion.okrLabel} {index + 1}</small><h4>{objective}</h4></header>
            <ol>{results.map((result, resultIndex) => <li key={result}><span>{adopcion.krLabel} {index + 1}.{resultIndex + 1}</span><p>{result}</p></li>)}</ol>
          </article>)}</div>
        </div>
      </div>
    </section>

    <section id="impacto" data-case-phase="impacto" className="bn-phase bn-surface case-reveal">
      <div className="bn-shell">
        <PhaseHeading label={impacto.label} title={impacto.title} intro={impacto.intro} />
        <div className="bn-results">
          <div><SectionLabel>{impacto.deliveredLabel}</SectionLabel><ul>{impacto.delivered.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div><SectionLabel>{impacto.checkedLabel}</SectionLabel><div className="bn-checked">{impacto.checked.map(([value, body]) => <article key={value}><strong>{value}</strong><p>{body}</p></article>)}</div></div>
        </div>
        <div className="bn-learnings"><SectionLabel>{impacto.learningsLabel}</SectionLabel><div>{impacto.learnings.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div>
        <div className="bn-sources"><SectionLabel>{impacto.sourcesLabel}</SectionLabel><ul>{impacto.sources.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noreferrer">{label}</a></li>)}<li>{impacto.photoCredit}</li></ul></div>
      </div>
    </section>

    <NextCase current="banco-nacion" />
    <SiteFooter text={t.footer} className="bn-shell" />
  </CaseStudyLayout>;
}

function PhaseHeading({ label, title, intro }) {
  return <header className="bn-phase-heading"><div><SectionLabel>{label}</SectionLabel><h2>{title}</h2></div><p>{intro}</p></header>;
}

function TierHeader({ title, count, body }) {
  return <header className="bn-tier-header"><h3>{title}{count !== undefined && <span>{count}</span>}</h3>{body && <p>{body}</p>}</header>;
}

function Foundation({ title, body, children }) {
  return <div className="bn-foundation"><header><h3>{title}</h3><p>{body}</p></header><div>{children}</div></div>;
}

function Tabs({ label, items, render }) {
  const [active, setActive] = useState(0);
  const refs = useRef([]);
  const select = (index) => {
    const next = (index + items.length) % items.length;
    setActive(next);
    refs.current[next]?.focus();
  };
  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') { event.preventDefault(); select(active + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); select(active - 1); }
  };
  const current = items[active];
  return <div className="bn-tabs">
    <div role="tablist" aria-label={label} onKeyDown={onKeyDown}>{items.map((item, index) => <button
      key={item.id} ref={(node) => { refs.current[index] = node; }} type="button" role="tab" id={`bn-tab-${item.id}`} aria-controls={`bn-panel-${item.id}`}
      aria-selected={index === active} tabIndex={index === active ? 0 : -1} onClick={() => setActive(index)}>{item.tab}</button>)}</div>
    <div role="tabpanel" id={`bn-panel-${current.id}`} aria-labelledby={`bn-tab-${current.id}`}>{render(current)}</div>
  </div>;
}

function Figure({ src, alt, caption, wide = false, tall = false, narrow = false, className = '' }) {
  return <figure className={`bn-figure ${wide ? 'is-wide' : ''} ${tall ? 'is-tall' : ''} ${narrow ? 'is-narrow' : ''} ${className}`.trim()}>
    <a href={src} target="_blank" rel="noreferrer" aria-label={alt}><img src={src} alt={alt} loading="lazy" decoding="async" /></a>
    {caption && <figcaption>{caption}</figcaption>}
  </figure>;
}
