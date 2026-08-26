import React, { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, CalendarDays, Check, ChevronRight, CircleAlert, Clock3, Gauge, History, Home, Info, Landmark, Layers3, LockKeyhole, Pencil, Plus, RotateCcw, Settings2, ShieldCheck, SlidersHorizontal, WalletCards } from 'lucide-react';
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
  const [platform, setPlatform] = useState('phone');
  const [screenId, setScreenId] = useState('home');
  const [day, setDay] = useState(18);
  const [reservePct, setReservePct] = useState(10);
  const [connected, setConnected] = useState(false);
  const [ruleActive, setRuleActive] = useState(false);
  const [protectedConfirmed, setProtectedConfirmed] = useState(false);
  const [payments, setPayments] = useState([
    { id: 'rent', label: lang === 'es' ? 'Alquiler' : 'Rent', amount: 780, due: lang === 'es' ? '30 ago' : 'Aug 30', enabled: true },
    { id: 'tax', label: 'SUNAT', amount: 249, due: lang === 'es' ? '05 sep' : 'Sep 05', enabled: true },
    { id: 'internet', label: 'Internet', amount: 120, due: lang === 'es' ? '07 sep' : 'Sep 07', enabled: true },
    { id: 'equipment', label: lang === 'es' ? 'Cuota del equipo' : 'Equipment installment', amount: 80, due: lang === 'es' ? '12 sep' : 'Sep 12', enabled: true }
  ]);

  const screens = platform === 'watch' ? t.prototype.watch : t.prototype.phone;
  const activeScreen = useMemo(() => screens.find((screen) => screen.id === screenId) || screens[0], [screenId, screens]);

  useEffect(() => {
    setPlatform('phone');
    setScreenId('home');
    setPayments([
      { id: 'rent', label: lang === 'es' ? 'Alquiler' : 'Rent', amount: 780, due: lang === 'es' ? '30 ago' : 'Aug 30', enabled: true },
      { id: 'tax', label: 'SUNAT', amount: 249, due: lang === 'es' ? '05 sep' : 'Sep 05', enabled: true },
      { id: 'internet', label: 'Internet', amount: 120, due: lang === 'es' ? '07 sep' : 'Sep 07', enabled: true },
      { id: 'equipment', label: lang === 'es' ? 'Cuota del equipo' : 'Equipment installment', amount: 80, due: lang === 'es' ? '12 sep' : 'Sep 12', enabled: true }
    ]);
  }, [lang]);
  useEffect(() => {
    if (screens.some((screen) => screen.id === screenId)) return;
    setScreenId(screens[0].id);
  }, [screenId, screens]);
  const income = 2000;
  const protectedPayments = payments.filter((payment) => payment.enabled).reduce((sum, payment) => sum + payment.amount, 0);
  const reserve = Math.round(income * reservePct / 100);
  const available = Math.max(income - protectedPayments - reserve, 0);
  const financialModel = { income, payments, protectedPayments, reservePct, reserve, available };
  const togglePayment = (id) => setPayments((current) => current.map((payment) => payment.id === id ? { ...payment, enabled: !payment.enabled } : payment));
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
        <div className="allpa-audit"><header><SectionLabel>{lang === 'es' ? 'Auditoría de la propuesta' : 'Proposal audit'}</SectionLabel><h2>{lang === 'es' ? 'Tres ajustes que hicieron el sistema más claro.' : 'Three changes made the system clearer.'}</h2></header><div>{t.architecture.audit.map(([title, body], index) => <article key={title}><span>v{index + 1} → v{index + 2}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div>
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
          <div className="allpa-device-stage"><AllpaDevice platform={platform} screen={activeScreen} lang={lang} onNavigate={setScreenId} model={financialModel} reservePct={reservePct} setReservePct={setReservePct} togglePayment={togglePayment} connected={connected} setConnected={setConnected} ruleActive={ruleActive} setRuleActive={setRuleActive} protectedConfirmed={protectedConfirmed} setProtectedConfirmed={setProtectedConfirmed} /></div>
          <aside><small>{t.prototype.selector}</small><h3>{activeScreen.title}</h3><p>{activeScreen.rationale}</p><span><Check />{platform === 'watch' ? (lang === 'es' ? 'Lectura breve pendiente de prueba' : 'Brief reading pending validation') : (lang === 'es' ? 'Flujo completo y editable' : 'Complete, editable flow')}</span></aside>
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

function AllpaDevice(props) {
  if (props.platform === 'watch') return <AllpaWatchScreen {...props} />;
  return <AllpaPhoneScreen {...props} />;
}

function AllpaPhoneScreen({ screen, lang, onNavigate, model, reservePct, setReservePct, togglePayment, connected, setConnected, ruleActive, setRuleActive, protectedConfirmed, setProtectedConfirmed }) {
  const isEs = lang === 'es';
  const money = (value) => `S/ ${value.toLocaleString(isEs ? 'es-PE' : 'en-US')}`;
  const shared = { isEs, onNavigate, model, money };

  if (screen.id === 'connection') return <AllpaPhoneShell {...shared} active="settings" back={null}>
    <div className="allpa-onboarding-mark"><Landmark /></div>
    <header className="allpa-app-title"><small>1 {isEs ? 'DE 4' : 'OF 4'}</small><h4>{isEs ? 'Conecta la cuenta donde cobras' : 'Connect the account you get paid into'}</h4><p>{isEs ? 'Allpa necesita leer movimientos para reconocer ingresos y pagos próximos.' : 'Allpa needs read access to recognize income and upcoming bills.'}</p></header>
    <div className="allpa-permission-list"><PermissionRow icon={ShieldCheck} title={isEs ? 'Acceso de solo lectura' : 'Read-only access'} body={isEs ? 'No podemos mover dinero sin tu confirmación.' : 'We cannot move money without your confirmation.'} /><PermissionRow icon={LockKeyhole} title={isEs ? 'Puedes desconectarla' : 'Disconnect any time'} body={isEs ? 'Tus reglas quedan pausadas de inmediato.' : 'Your rules pause immediately.'} /></div>
    <button className="allpa-primary-action" onClick={() => { setConnected(true); onNavigate('payments'); }}>{connected ? <><Check />{isEs ? 'Cuenta conectada' : 'Account connected'}</> : (isEs ? 'Conectar mi cuenta' : 'Connect my account')}</button>
    <button className="allpa-text-action" onClick={() => onNavigate('payments')}>{isEs ? 'Ver el prototipo sin conectar' : 'Preview without connecting'}</button>
  </AllpaPhoneShell>;

  if (screen.id === 'payments') return <AllpaPhoneShell {...shared} active="settings" back="connection">
    <header className="allpa-app-title"><small>2 {isEs ? 'DE 4' : 'OF 4'}</small><h4>{isEs ? '¿Qué pagos quieres proteger?' : 'Which payments should be protected?'}</h4><p>{isEs ? 'Encontramos estos pagos recurrentes. Confirma los que deben entrar en tu cálculo.' : 'We found these recurring payments. Confirm which ones belong in your calculation.'}</p></header>
    <div className="allpa-payment-list">{model.payments.map((payment) => <PaymentToggle key={payment.id} payment={payment} money={money} onToggle={togglePayment} />)}</div>
    <button className="allpa-add-row"><Plus />{isEs ? 'Añadir otro pago' : 'Add another payment'}</button>
    <div className="allpa-sticky-actions"><span>{isEs ? 'Total protegido' : 'Protected total'}<b>{money(model.protectedPayments)}</b></span><button className="allpa-primary-action" onClick={() => onNavigate('reserve')}>{isEs ? 'Continuar' : 'Continue'}<ChevronRight /></button></div>
  </AllpaPhoneShell>;

  if (screen.id === 'reserve') return <AllpaPhoneShell {...shared} active="settings" back="payments">
    <header className="allpa-app-title"><small>3 {isEs ? 'DE 4' : 'OF 4'}</small><h4>{isEs ? 'Crea una reserva para imprevistos' : 'Create a buffer for the unexpected'}</h4><p>{isEs ? 'Puedes cambiarla cuando quieras. La aplicaremos a cada ingreso.' : 'Change it whenever you need. It will apply to every payment.'}</p></header>
    <div className="allpa-reserve-control"><span>{reservePct}%</span><small>{isEs ? `S/ ${model.reserve} por cada S/ 2.000` : `S/ ${model.reserve} for every S/ 2,000`}</small><input type="range" min="0" max="25" step="1" value={reservePct} onChange={(event) => setReservePct(Number(event.currentTarget.value))} aria-label={isEs ? 'Porcentaje de reserva' : 'Reserve percentage'} /><div><i>0%</i><i>10%</i><i>25%</i></div></div>
    <div className="allpa-inline-note"><Info /><p>{isEs ? 'La reserva sigue disponible. Si necesitas usarla, Allpa te mostrará qué monto vas a tocar.' : 'The reserve stays accessible. If you need it, Allpa shows exactly how much you will use.'}</p></div>
    <button className="allpa-primary-action" onClick={() => onNavigate('preview')}>{isEs ? 'Previsualizar regla' : 'Preview rule'}<ChevronRight /></button>
  </AllpaPhoneShell>;

  if (screen.id === 'preview') return <AllpaPhoneShell {...shared} active="settings" back="reserve">
    <header className="allpa-app-title"><small>4 {isEs ? 'DE 4' : 'OF 4'}</small><h4>{isEs ? 'Así funcionará tu regla' : 'This is how your rule will work'}</h4><p>{isEs ? 'Usamos un ingreso de ejemplo para que puedas revisar el resultado.' : 'We used an example payment so you can review the result.'}</p></header>
    <FormulaCard {...shared} />
    <div className="allpa-confidence-row"><ShieldCheck /><span><b>{isEs ? 'Todo cuadra' : 'Everything adds up'}</b><small>{isEs ? '4 pagos y una reserva incluidos' : '4 bills and one reserve included'}</small></span></div>
    <button className="allpa-primary-action" onClick={() => { setRuleActive(true); onNavigate('home'); }}>{ruleActive ? (isEs ? 'Regla activa' : 'Rule active') : (isEs ? 'Activar regla' : 'Activate rule')}<Check /></button>
    <button className="allpa-text-action" onClick={() => onNavigate('edit')}>{isEs ? 'Editar antes de activar' : 'Edit before activating'}</button>
  </AllpaPhoneShell>;

  if (screen.id === 'home') return <AllpaPhoneShell {...shared} active="home">
    <div className="allpa-app-header"><div><small>{isEs ? 'Buenas tardes' : 'Good afternoon'}</small><strong>ALLPA</strong></div><button aria-label={isEs ? 'Abrir perfil' : 'Open profile'}>RA</button></div>
    <div className="allpa-available-hero"><small>{isEs ? 'Tienes esto para gastar' : 'This is what you can spend'}</small><strong>{money(model.available)}</strong><p>{isEs ? 'De los S/ 2.000 que recibiste hoy' : 'From the S/ 2,000 received today'}</p><button onClick={() => onNavigate('calculation')}>{isEs ? `Cómo calculamos ${money(model.available)}` : `How we calculated ${money(model.available)}`}<ChevronRight /></button></div>
    <AllocationCard {...shared} />
    <button className="allpa-next-payment" onClick={() => onNavigate('calculation')}><span><small>{isEs ? 'PRÓXIMO PAGO · 30 AGO' : 'NEXT PAYMENT · AUG 30'}</small><strong>{isEs ? 'Alquiler cubierto' : 'Rent covered'}</strong></span><b>S/ 780</b><ChevronRight /></button>
  </AllpaPhoneShell>;

  if (screen.id === 'calculation') return <AllpaPhoneShell {...shared} active="home" back="home">
    <header className="allpa-app-title compact"><small>{isEs ? 'ACTUALIZADO HOY · 18:42' : 'UPDATED TODAY · 18:42'}</small><h4>{isEs ? 'Cómo calculamos tu disponible' : 'How we calculated your available money'}</h4></header>
    <FormulaCard {...shared} detailed />
    <div className="allpa-included-card"><header><span>{isEs ? 'Pagos incluidos' : 'Included payments'}</span><button onClick={() => onNavigate('edit')}><Pencil />{isEs ? 'Editar' : 'Edit'}</button></header>{model.payments.filter((payment) => payment.enabled).map((payment) => <span key={payment.id}>{payment.label}<b>{money(payment.amount)}</b></span>)}</div>
    <div className="allpa-scope-note"><Info /><p><b>{isEs ? 'Este cálculo aún no incluye' : 'This calculation does not include yet'}</b>{isEs ? 'Efectivo, cuentas externas ni movimientos por confirmar.' : 'Cash, external accounts or unconfirmed movements.'}</p></div>
  </AllpaPhoneShell>;

  if (screen.id === 'edit') return <AllpaPhoneShell {...shared} active="settings" back="calculation">
    <header className="allpa-app-title compact"><small>{isEs ? 'REGLA ACTIVA' : 'ACTIVE RULE'}</small><h4>{isEs ? 'Edita tu distribución' : 'Edit your allocation'}</h4><p>{isEs ? 'Los cambios se aplican al siguiente ingreso.' : 'Changes apply to your next payment.'}</p></header>
    <div className="allpa-payment-list is-compact">{model.payments.map((payment) => <PaymentToggle key={payment.id} payment={payment} money={money} onToggle={togglePayment} />)}</div>
    <div className="allpa-mini-reserve"><span>{isEs ? 'Reserva' : 'Reserve'}<b>{reservePct}%</b></span><input type="range" min="0" max="25" value={reservePct} onChange={(event) => setReservePct(Number(event.currentTarget.value))} aria-label={isEs ? 'Porcentaje de reserva' : 'Reserve percentage'} /></div>
    <button className="allpa-primary-action" onClick={() => onNavigate('calculation')}>{isEs ? 'Guardar cambios' : 'Save changes'}<Check /></button>
  </AllpaPhoneShell>;

  if (screen.id === 'coverage') return <AllpaPhoneShell {...shared} active="coverage">
    <header className="allpa-app-title compact"><small>{isEs ? 'PROYECCIÓN' : 'FORECAST'}</small><h4>{isEs ? 'Cobertura estimada' : 'Estimated coverage'}</h4><p>{isEs ? 'Una orientación basada en los datos que Allpa puede ver.' : 'A guide based on the data Allpa can see.'}</p></header>
    <div className="allpa-coverage-ring"><div><strong>28</strong><span>{isEs ? 'días' : 'days'}</span></div></div>
    <div className="allpa-coverage-status"><Check /><p><b>{isEs ? 'Tus pagos siguen cubiertos' : 'Your bills remain covered'}</b><span>{isEs ? 'Con tu ritmo de gasto actual' : 'At your current spending pace'}</span></p></div>
    <div className="allpa-assumption-list"><span><CalendarDays />{isEs ? 'Próximo ingreso estimado' : 'Next estimated payment'}<b>22 sep</b></span><span><WalletCards />{isEs ? 'Gasto diario promedio' : 'Average daily spend'}<b>S/ 20</b></span></div>
    <button className="allpa-secondary-action" onClick={() => onNavigate('calculation')}>{isEs ? 'Revisar supuestos' : 'Review assumptions'}<ChevronRight /></button>
  </AllpaPhoneShell>;

  if (screen.id === 'history') return <AllpaPhoneShell {...shared} active="history">
    <header className="allpa-app-title compact"><small>{isEs ? 'MOVIMIENTOS' : 'ACTIVITY'}</small><h4>{isEs ? 'Lo que pasó hoy' : 'What happened today'}</h4></header>
    <div className="allpa-timeline"><TimelineItem time="18:42" icon={Landmark} title={isEs ? 'Ingreso detectado' : 'Income detected'} body="Cliente Estudio Norte" amount="+ S/ 2.000" /><TimelineItem time="18:42" icon={Settings2} title={isEs ? 'Distribución automática' : 'Automatic allocation'} body={isEs ? 'Hecho por Allpa · Regla activa' : 'Done by Allpa · Active rule'} amount="S/ 1.429" system /><TimelineItem time="19:16" icon={WalletCards} title={isEs ? 'Compra confirmada' : 'Purchase confirmed'} body={isEs ? 'Confirmado por ti' : 'Confirmed by you'} amount="− S/ 35" /></div>
    <div className="allpa-inline-note"><Info /><p>{isEs ? 'Cada movimiento indica si lo realizó Allpa o si lo confirmaste tú.' : 'Every movement shows whether Allpa made it or you confirmed it.'}</p></div>
  </AllpaPhoneShell>;

  return <AllpaPhoneShell {...shared} active="home" back="home">
    <div className={`allpa-protected-panel ${protectedConfirmed ? 'is-confirmed' : ''}`}><div className="allpa-protected-icon">{protectedConfirmed ? <Check /> : <CircleAlert />}</div><small>{isEs ? 'DINERO PROTEGIDO' : 'PROTECTED MONEY'}</small><h4>{protectedConfirmed ? (isEs ? 'Confirmaste el uso de tu reserva' : 'Reserve use confirmed') : (isEs ? 'Este pago supera tu disponible' : 'This payment exceeds your available money')}</h4><strong>S/ 603</strong><p>{protectedConfirmed ? (isEs ? 'Tu reserva ahora tiene S/ 168.' : 'Your reserve now holds S/ 168.') : (isEs ? 'Usaría S/ 32 de tu reserva para completar el pago.' : 'It would use S/ 32 from your reserve to complete the payment.')}</p></div>
    {!protectedConfirmed && <><button className="allpa-primary-action is-safe" onClick={() => onNavigate('home')}>{isEs ? 'Cancelar el pago' : 'Cancel payment'}</button><button className="allpa-danger-action" onClick={() => setProtectedConfirmed(true)}>{isEs ? 'Usar S/ 32 de mi reserva' : 'Use S/ 32 from my reserve'}</button></>}
    {protectedConfirmed && <button className="allpa-primary-action" onClick={() => { setProtectedConfirmed(false); onNavigate('home'); }}>{isEs ? 'Volver al inicio' : 'Back to home'}<ChevronRight /></button>}
  </AllpaPhoneShell>;
}

function AllpaWatchScreen({ screen, lang, onNavigate, model }) {
  const isEs = lang === 'es';
  const money = (value) => `S/ ${value.toLocaleString(isEs ? 'es-PE' : 'en-US')}`;
  const config = {
    income: { eyebrow: isEs ? 'INGRESO RECIBIDO' : 'INCOME RECEIVED', title: isEs ? 'Te llegaron S/ 2.000' : 'S/ 2,000 received', amount: `${money(model.available)} ${isEs ? 'disponibles' : 'available'}`, body: isEs ? `${money(model.protectedPayments + model.reserve)} fueron a pagos y reserva.` : `${money(model.protectedPayments + model.reserve)} went to bills and reserve.`, action: isEs ? 'Ver cálculo' : 'View calculation', next: 'available' },
    available: { eyebrow: isEs ? 'DISPONIBLE' : 'AVAILABLE', title: isEs ? 'Esto te queda para gastar' : 'This is what you can spend', amount: money(model.available), body: isEs ? `Pagos ${money(model.protectedPayments)} · Reserva ${money(model.reserve)}` : `Bills ${money(model.protectedPayments)} · Reserve ${money(model.reserve)}`, action: isEs ? 'Cómo lo calculamos' : 'How we calculated it', next: 'income' },
    payment: { eyebrow: isEs ? 'ANTES DE PAGAR' : 'BEFORE PAYING', title: isEs ? 'Si pagas S/ 120' : 'If you pay S/ 120', amount: money(Math.max(model.available - 120, 0)), body: isEs ? 'Tus pagos y tu reserva siguen cubiertos.' : 'Your bills and reserve stay covered.', action: isEs ? 'Continuar' : 'Continue', secondary: isEs ? 'Cancelar' : 'Cancel' },
    critical: { eyebrow: isEs ? 'DINERO PROTEGIDO' : 'PROTECTED MONEY', title: isEs ? 'Supera tu disponible' : 'Exceeds your available money', amount: 'S/ 80', body: isEs ? 'Usaría S/ 32 de tu reserva.' : 'It would use S/ 32 from your reserve.', action: isEs ? 'Cancelar el pago' : 'Cancel payment', secondary: isEs ? 'Usar S/ 32 de mi reserva' : 'Use S/ 32 from my reserve' }
  }[screen.id];
  return <div className={`allpa-watch-device tone-${screen.tone}`}><div className="allpa-watch-crown" /><div className="allpa-watch-screen"><small>{config.eyebrow}</small><h4>{config.title}</h4><strong>{config.amount}</strong><p>{config.body}</p><button onClick={() => config.next && onNavigate(config.next)}>{config.action}</button>{config.secondary && <button className="allpa-watch-secondary">{config.secondary}</button>}</div></div>;
}

function AllpaPhoneShell({ children, isEs, onNavigate, active = '', back }) {
  return <div className="allpa-phone-device"><div className="allpa-phone-island" /><div className="allpa-phone-status"><span>9:41</span><span>● ●●</span></div>{back && <button className="allpa-phone-back" onClick={() => onNavigate(back)} aria-label={isEs ? 'Volver' : 'Back'}><ArrowLeft /></button>}<main className="allpa-phone-screen">{children}</main><nav aria-label={isEs ? 'Navegación del prototipo' : 'Prototype navigation'}><button className={active === 'home' ? 'is-active' : ''} onClick={() => onNavigate('home')}><Home />{isEs ? 'Inicio' : 'Home'}</button><button className={active === 'coverage' ? 'is-active' : ''} onClick={() => onNavigate('coverage')}><Gauge />{isEs ? 'Proyección' : 'Forecast'}</button><button className={active === 'history' ? 'is-active' : ''} onClick={() => onNavigate('history')}><History />{isEs ? 'Movimientos' : 'Activity'}</button><button className={active === 'settings' ? 'is-active' : ''} onClick={() => onNavigate('edit')}><SlidersHorizontal />{isEs ? 'Reglas' : 'Rules'}</button></nav></div>;
}

function PermissionRow({ icon, title, body }) {
  const Icon = icon;
  return <div><Icon /><span><b>{title}</b><small>{body}</small></span><Check /></div>;
}

function PaymentToggle({ payment, money, onToggle }) {
  return <button className={payment.enabled ? 'is-enabled' : ''} onClick={() => onToggle(payment.id)} aria-pressed={payment.enabled}><span className="allpa-checkbox">{payment.enabled && <Check />}</span><span><b>{payment.label}</b><small>{payment.due}</small></span><strong>{money(payment.amount)}</strong></button>;
}

function FormulaCard({ isEs, model, money, detailed = false }) {
  return <div className={`allpa-formula-card ${detailed ? 'is-detailed' : ''}`}><small>{isEs ? 'SI RECIBES' : 'IF YOU RECEIVE'}</small><strong>{money(model.income)}</strong><div><span>{isEs ? 'Pagos próximos' : 'Upcoming bills'}<b>− {money(model.protectedPayments)}</b></span><span>{isEs ? `Reserva del ${model.reservePct}%` : `${model.reservePct}% reserve`}<b>− {money(model.reserve)}</b></span></div><footer><span>{isEs ? 'Disponible para gastar' : 'Available to spend'}</span><b>{money(model.available)}</b></footer></div>;
}

function AllocationCard({ isEs, model, money }) {
  const paymentsPct = Math.round(model.protectedPayments / model.income * 100);
  const availablePct = Math.max(100 - paymentsPct - model.reservePct, 0);
  return <div className="allpa-allocation-card"><header><span>{isEs ? 'Distribución de hoy' : 'Today’s allocation'}</span><small>18:42</small></header><div className="allpa-allocation-bar" aria-label={`${paymentsPct}% ${isEs ? 'pagos' : 'bills'}, ${model.reservePct}% ${isEs ? 'reserva' : 'reserve'}, ${availablePct}% ${isEs ? 'disponible' : 'available'}`}><i style={{ width: `${paymentsPct}%` }} /><i style={{ width: `${model.reservePct}%` }} /><i style={{ width: `${availablePct}%` }} /></div><div className="allpa-allocation-legend"><span><i />{isEs ? 'Pagos' : 'Bills'}<b>{money(model.protectedPayments)}</b></span><span><i />{isEs ? 'Reserva' : 'Reserve'}<b>{money(model.reserve)}</b></span></div></div>;
}

function TimelineItem({ time, icon, title, body, amount, system = false }) {
  const Icon = icon;
  return <article className={system ? 'is-system' : ''}><time>{time}</time><span className="allpa-timeline-icon"><Icon /></span><div><b>{title}</b><small>{body}</small></div><strong>{amount}</strong></article>;
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
