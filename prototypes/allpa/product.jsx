import React, { useMemo, useState } from 'react';
import {
  ArrowLeft, ArrowRight, CalendarDays, Check, ChevronRight, CircleAlert,
  CircleDollarSign, Eye, EyeOff, Fingerprint, Gauge, History, Home, Info,
  Landmark, LockKeyhole, Pencil, Plus, RefreshCw, ShieldCheck,
  SlidersHorizontal, Smartphone, Undo2, WalletCards, Watch
} from 'lucide-react';

const IOS_SCREENS = [
  { id: 'connection', label: 'Conexión', phase: 'Configurar', title: 'Permisos con contexto', rationale: 'Explica el alcance de la lectura y cómo retirar el acceso antes de solicitar conexión.' },
  { id: 'payments', label: 'Pagos', phase: 'Configurar', title: 'Confirmar lo que se protege', rationale: 'La persona decide qué obligaciones formarán parte de la regla.' },
  { id: 'reserve', label: 'Colchón', phase: 'Configurar', title: 'Una regla tangible', rationale: 'Porcentaje y equivalente en soles aparecen juntos para facilitar la decisión.' },
  { id: 'preview', label: 'Vista previa', phase: 'Configurar', title: 'Comprobar antes de activar', rationale: 'La ecuación completa permite anticipar el resultado y volver a editar.' },
  { id: 'income-event', label: 'Nuevo ingreso', phase: 'Intervenir', title: 'Explicación ligada al evento', rationale: 'La notificación confirma lo que Allpa ya hizo y abre el reparto de ese ingreso concreto.' },
  { id: 'home', label: 'Inicio', phase: 'Usar', title: 'Disponible con contexto', rationale: 'El monto se vincula con el ingreso que lo originó y mantiene el cálculo a un toque.' },
  { id: 'calculation', label: 'Cálculo', phase: 'Comprender', title: 'Una cifra trazable', rationale: 'Ingreso, descuentos, origen de los pagos y límites de los datos conviven en el detalle.' },
  { id: 'edit', label: 'Editar regla', phase: 'Controlar', title: 'Control después de automatizar', rationale: 'Los pagos fijos y el colchón siguen editables; el sistema comunica cuándo entran en vigor los cambios.' },
  { id: 'coverage', label: 'Proyección', phase: 'Comprender', title: 'Estimación con supuestos', rationale: 'La cobertura aparece junto con las variables y el nivel de certeza que la producen.' },
  { id: 'history', label: 'Movimientos', phase: 'Controlar', title: 'Agencia visible', rationale: 'Cada movimiento declara si fue detectado, realizado por Allpa o confirmado por la persona.' },
  { id: 'protected', label: 'Dinero protegido', phase: 'Intervenir', title: 'Fricción con consecuencia explícita', rationale: 'La persona conoce el monto exacto que saldrá de su colchón antes de continuar.' }
];

const WATCH_SCREENS = [
  { id: 'income', label: 'Ingreso', title: 'Resultado inmediato', rationale: 'El ingreso, el disponible y el monto separado se leen como un solo evento.' },
  { id: 'available', label: 'Disponible', title: 'Distribución breve', rationale: 'Los pagos fijos y el colchón acompañan a la cifra para conservar su contexto.' },
  { id: 'payment', label: 'Pago cubierto', title: 'Consecuencia del pago', rationale: 'La interfaz traduce S/ 120 al saldo restante y confirma que la protección se mantiene.' },
  { id: 'critical', label: 'Usa colchón', title: 'Alerta de dinero protegido', rationale: 'Cancelar domina la jerarquía y la alternativa nombra los S/ 32 afectados.' }
];

const INITIAL_PAYMENTS = [
  { id: 'rent', name: 'Alquiler', due: '30 ago', amount: 780, enabled: true },
  { id: 'tax', name: 'SUNAT', due: '05 sep', amount: 249, enabled: true },
  { id: 'internet', name: 'Internet', due: '07 sep', amount: 120, enabled: true },
  { id: 'equipment', name: 'Cuota del equipo', due: '12 sep', amount: 80, enabled: true }
];

const money = (value) => `S/ ${value.toLocaleString('es-PE')}`;

export default function AllpaPrototype() {
  const [mode, setMode] = useState('foundation');
  const [iosScreen, setIosScreen] = useState('home');
  const [watchScreen, setWatchScreen] = useState('income');
  const [reservePct, setReservePct] = useState(10);
  const [payments, setPayments] = useState(INITIAL_PAYMENTS);
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [connected, setConnected] = useState(false);
  const [ruleActive, setRuleActive] = useState(false);
  const [overrideConfirmed, setOverrideConfirmed] = useState(false);

  const model = useMemo(() => {
    const income = 2000;
    const paymentsTotal = payments.filter((payment) => payment.enabled).reduce((sum, payment) => sum + payment.amount, 0);
    const reserve = Math.round(income * reservePct / 100);
    return { income, paymentsTotal, reserve, reservePct, available: Math.max(income - paymentsTotal - reserve, 0), payments };
  }, [payments, reservePct]);

  const togglePayment = (id) => setPayments((current) => current.map((payment) => payment.id === id ? { ...payment, enabled: !payment.enabled } : payment));
  const activeDescriptor = mode === 'watch' ? WATCH_SCREENS.find((item) => item.id === watchScreen) : IOS_SCREENS.find((item) => item.id === iosScreen);
  const goIos = (id) => { setMode('ios'); setIosScreen(id); };

  return <main className="kit-shell">
    <KitHeader mode={mode} setMode={setMode} />
    <KitIntro mode={mode} />
    {mode === 'foundation' && <FoundationView onContinue={() => goIos('connection')} model={model} balanceVisible={balanceVisible} setBalanceVisible={setBalanceVisible} />}
    {mode === 'ios' && <ProductWorkbench platform="ios" screens={IOS_SCREENS} activeId={iosScreen} setActiveId={setIosScreen} descriptor={activeDescriptor}>
      <PhoneShell active={iosScreen} onNavigate={setIosScreen} balanceVisible={balanceVisible} setBalanceVisible={setBalanceVisible}>
        <IosScreen id={iosScreen} model={model} payments={payments} togglePayment={togglePayment} reservePct={reservePct} setReservePct={setReservePct} onNavigate={setIosScreen} connected={connected} setConnected={setConnected} ruleActive={ruleActive} setRuleActive={setRuleActive} overrideConfirmed={overrideConfirmed} setOverrideConfirmed={setOverrideConfirmed} balanceVisible={balanceVisible} />
      </PhoneShell>
    </ProductWorkbench>}
    {mode === 'watch' && <ProductWorkbench platform="watch" screens={WATCH_SCREENS} activeId={watchScreen} setActiveId={setWatchScreen} descriptor={activeDescriptor}>
      <WatchShell tone={watchScreen === 'critical' ? 'critical' : watchScreen === 'available' ? 'success' : 'default'}><WatchScreen id={watchScreen} model={model} onNavigate={setWatchScreen} /></WatchShell>
    </ProductWorkbench>}
  </main>;
}

function AllpaLogo({ size = 'regular', wordmark = true }) {
  return <span className={`allpa-logo is-${size}`} aria-label="Allpa"><span className="allpa-alpaca" aria-hidden="true"><i /><b /><em /><small /></span>{wordmark && <strong>allpa</strong>}</span>;
}

function KitHeader({ mode, setMode }) {
  return <header className="kit-header"><div className="kit-brand"><AllpaLogo size="small" /><span><b>Product UI Kit</b><small>Entorno aislado · v0.2</small></span></div><nav aria-label="Secciones del prototipo"><button className={mode === 'foundation' ? 'is-active' : ''} onClick={() => setMode('foundation')}>Fundamentos</button><button className={mode === 'ios' ? 'is-active' : ''} onClick={() => setMode('ios')}><Smartphone />iOS</button><button className={mode === 'watch' ? 'is-active' : ''} onClick={() => setMode('watch')}><Watch />watchOS</button></nav></header>;
}

function KitIntro({ mode }) {
  const content = {
    foundation: ['ALLPA PRODUCT SYSTEM · 01', 'Una interfaz financiera que se siente propia.', 'Archivo organiza la interfaz; Zilla Slab da carácter a montos y títulos. Los componentes explican, protegen y permiten editar el dinero.'],
    ios: ['ALLPA iOS · 11 PANTALLAS', 'Configurar, comprender y corregir desde el iPhone.', 'El flujo incluye los estados necesarios para crear una regla, comprobar el disponible y conservar el control después de automatizar.'],
    watch: ['ALLPA watchOS · 4 ESTADOS', 'La extensión para momentos que admiten una respuesta breve.', 'El reloj muestra la consecuencia principal y deriva al iPhone cuando la decisión exige profundidad.']
  }[mode];
  return <section className="kit-intro"><span className="eyebrow">{content[0]}</span><h1>{content[1]}</h1><p>{content[2]}</p></section>;
}

function FoundationView({ onContinue, model, balanceVisible, setBalanceVisible }) {
  return <div className="kit-workbench foundation-workbench"><aside className="foundation-panel" aria-label="Fundamentos visuales"><section><span className="panel-label">Identidad</span><div className="logo-stage"><AllpaLogo size="large" /></div><p>El isotipo aparece en momentos de confianza. El lockup completo identifica el producto en apertura y conexión.</p></section><section><span className="panel-label">Color funcional</span><div className="swatches"><i className="swatch is-gold"><b>Disponible</b><small>#F5A623</small></i><i className="swatch is-green"><b>Cubierto</b><small>#3ECF6E</small></i><i className="swatch is-coral"><b>Protegido</b><small>#FF5A5F</small></i><i className="swatch is-sand"><b>Comprometido</b><small>#A8957E</small></i></div></section><section><span className="panel-label">Tipografía</span><div className="type-spec"><strong>S/ 571</strong><b>Esto te queda para gastar</b><p>Archivo para interfaz · Zilla Slab para cifras y títulos</p></div></section></aside><section className="device-stage"><div className="stage-note"><span>iOS · Inicio</span><small>Pantalla representativa</small></div><PhoneShell active="home" onNavigate={() => {}} balanceVisible={balanceVisible} setBalanceVisible={setBalanceVisible}><HomeScreen model={model} onNavigate={onContinue} balanceVisible={balanceVisible} /></PhoneShell></section><aside className="component-panel"><span className="panel-label">Reglas del sistema</span><Decision index="01" title="Marca presente">La identidad acompaña sin competir con el dinero.</Decision><Decision index="02" title="Una jerarquía tipográfica">Archivo resuelve la lectura y Zilla Slab destaca montos y títulos.</Decision><Decision index="03" title="Color con significado">Disponible, cubierto y protegido conservan roles estables.</Decision><Decision index="04" title="Contenido completo">Cada monto incluye origen, estado, fecha o consecuencia.</Decision><button onClick={onContinue}>Revisar flujo iOS <ArrowRight /></button></aside></div>;
}

function ProductWorkbench({ platform, screens, activeId, setActiveId, descriptor, children }) {
  const index = screens.findIndex((screen) => screen.id === activeId);
  return <div className={`kit-workbench product-workbench is-${platform}`}><aside className="screen-rail"><span className="panel-label">Inventario de pantallas</span><nav aria-label={`Pantallas de ${platform}`}>{screens.map((screen, screenIndex) => <button key={screen.id} className={activeId === screen.id ? 'is-active' : ''} onClick={() => setActiveId(screen.id)}><span>{String(screenIndex + 1).padStart(2, '0')}</span><b>{screen.label}</b>{screen.phase && <small>{screen.phase}</small>}<ChevronRight /></button>)}</nav></aside><section className="device-stage"><div className="stage-note"><span>{platform === 'ios' ? 'iOS · Flujo principal' : 'watchOS · Extensión'}</span><small>{index + 1} / {screens.length}</small></div>{children}</section><aside className="decision-panel"><span className="panel-label">Decisión de diseño</span><h2>{descriptor.title}</h2><p>{descriptor.rationale}</p><div className="system-check"><ShieldCheck /><span><b>Consistencia de UI kit</b><small>Logo, tipo, color, espaciado y estados compartidos.</small></span></div><div className="step-controls"><button onClick={() => setActiveId(screens[Math.max(index - 1, 0)].id)} disabled={index === 0}><ArrowLeft />Anterior</button><button onClick={() => setActiveId(screens[Math.min(index + 1, screens.length - 1)].id)} disabled={index === screens.length - 1}>Siguiente<ArrowRight /></button></div></aside></div>;
}

function Decision({ index, title, children }) { return <article><span>{index}</span><div><b>{title}</b><p>{children}</p></div></article>; }

function PhoneShell({ active, onNavigate, children, balanceVisible, setBalanceVisible }) {
  const immersive = ['connection', 'payments', 'reserve', 'preview', 'income-event'].includes(active);
  return <article className={`iphone ${immersive ? 'is-immersive' : ''}`}><div className="dynamic-island" aria-hidden="true" /><div className="status-bar"><b>9:41</b><span>● ▰</span></div><div className="ios-screen"><header className="app-bar"><AllpaLogo size="small" wordmark={!immersive} />{!immersive && <button aria-label={balanceVisible ? 'Ocultar saldos' : 'Mostrar saldos'} onClick={() => setBalanceVisible((value) => !value)}>{balanceVisible ? <Eye /> : <EyeOff />}</button>}</header>{children}</div>{!immersive && <nav className="tab-bar" aria-label="Navegación de Allpa"><button className={active === 'home' ? 'is-active' : ''} onClick={() => onNavigate('home')}><Home />Inicio</button><button className={active === 'coverage' ? 'is-active' : ''} onClick={() => onNavigate('coverage')}><Gauge />Proyección</button><button className={active === 'history' ? 'is-active' : ''} onClick={() => onNavigate('history')}><History />Movimientos</button><button className={active === 'edit' ? 'is-active' : ''} onClick={() => onNavigate('edit')}><SlidersHorizontal />Reglas</button></nav>}</article>;
}

function IosScreen(props) {
  const { id } = props;
  if (id === 'connection') return <ConnectionScreen {...props} />;
  if (id === 'payments') return <PaymentsScreen {...props} />;
  if (id === 'reserve') return <ReserveScreen {...props} />;
  if (id === 'preview') return <PreviewScreen {...props} />;
  if (id === 'income-event') return <IncomeEventScreen {...props} />;
  if (id === 'home') return <HomeScreen {...props} />;
  if (id === 'calculation') return <CalculationScreen {...props} />;
  if (id === 'edit') return <EditScreen {...props} />;
  if (id === 'coverage') return <CoverageScreen {...props} />;
  if (id === 'history') return <HistoryScreen {...props} />;
  return <ProtectedScreen {...props} />;
}

function ScreenHeading({ step, title, body, back, onNavigate }) { return <><button className="ios-back" onClick={() => onNavigate(back)} aria-label="Volver"><ArrowLeft /></button><header className="screen-heading"><span>{step}</span><h2>{title}</h2><p>{body}</p></header></>; }

function ConnectionScreen({ connected, setConnected, onNavigate }) {
  return <div className="flow-screen connection-screen"><div className="onboarding-brand"><AllpaLogo size="large" /></div><header className="screen-heading"><span>CONFIGURACIÓN · 1 DE 4</span><h2>Conecta la cuenta donde recibes tus pagos</h2><p>Allpa revisa tus movimientos para reconocer ingresos y pagos fijos.</p></header><div className="trust-list"><TrustRow icon={Fingerprint} title="Solo revisamos movimientos">Allpa no puede transferir ni retirar dinero.</TrustRow><TrustRow icon={LockKeyhole} title="Tú mantienes el control">Puedes desconectar la cuenta y pausar tus reglas.</TrustRow></div><button className="bank-option"><Landmark /><span><b>Cuenta principal</b><small>•••• 1842 · Interbank</small></span><Check /></button><button className="primary-button" onClick={() => { setConnected(true); onNavigate('payments'); }}>{connected ? 'Cuenta conectada' : 'Conectar mi cuenta'}<ArrowRight /></button><button className="text-button" onClick={() => onNavigate('payments')}>Explorar sin conectar</button></div>;
}

function PaymentsScreen({ model, payments, togglePayment, onNavigate }) {
  return <div className="flow-screen"><ScreenHeading step="CONFIGURACIÓN · 2 DE 4" title="¿Qué pagos quieres proteger?" body="Encontramos estos pagos recurrentes. Confirma los que deben entrar en tu cálculo." back="connection" onNavigate={onNavigate} /><div className="payment-list">{payments.map((payment) => <PaymentToggle key={payment.id} payment={payment} togglePayment={togglePayment} />)}</div><button className="add-button"><Plus />Añadir otro pago</button><div className="flow-footer"><span><small>TOTAL PROTEGIDO</small><b>{money(model.paymentsTotal)}</b></span><button className="primary-button" onClick={() => onNavigate('reserve')}>Continuar<ArrowRight /></button></div></div>;
}

function ReserveScreen({ model, reservePct, setReservePct, onNavigate }) {
  return <div className="flow-screen"><ScreenHeading step="CONFIGURACIÓN · 3 DE 4" title="Arma tu colchón" body="Separa una parte de cada ingreso para imprevistos. Puedes cambiarla cuando lo necesites." back="payments" onNavigate={onNavigate} /><div className="segmented-control"><button className="is-active">Porcentaje</button><button>Monto fijo</button></div><div className="reserve-card"><span>{reservePct}%</span><b>{money(model.reserve)} por cada S/ 2.000</b><input type="range" min="0" max="25" value={reservePct} onChange={(event) => setReservePct(Number(event.target.value))} aria-label="Porcentaje del colchón" /><div><small>0%</small><small>10%</small><small>25%</small></div></div><InfoNote>Tu colchón sigue disponible. Si necesitas usarlo, Allpa te dirá cuánto vas a tocar.</InfoNote><button className="primary-button" onClick={() => onNavigate('preview')}>Ver cómo quedaría<ArrowRight /></button></div>;
}

function PreviewScreen({ model, ruleActive, setRuleActive, onNavigate }) {
  return <div className="flow-screen"><ScreenHeading step="CONFIGURACIÓN · 4 DE 4" title="Así funcionará tu regla" body="Mira qué pasaría con un ingreso de S/ 2.000 antes de activarla." back="reserve" onNavigate={onNavigate} /><FormulaCard model={model} /><div className="success-strip"><ShieldCheck /><span><b>Todo cuadra</b><small>{model.payments.filter((payment) => payment.enabled).length} pagos fijos y tu colchón incluidos</small></span></div><button className="primary-button" onClick={() => { setRuleActive(true); onNavigate('income-event'); }}>{ruleActive ? 'Regla activa' : 'Activar mi regla'}<Check /></button><button className="text-button" onClick={() => onNavigate('edit')}>Quiero cambiar algo</button></div>;
}

function IncomeEventScreen({ model, onNavigate }) {
  return <div className="income-event-screen"><div className="push-notification"><AllpaLogo size="small" wordmark={false} /><span><b>Allpa</b><small>ahora</small><p>Ya separamos {money(model.paymentsTotal + model.reserve)} para tus pagos fijos y tu colchón. Toca para ver cómo.</p></span></div><section className="event-summary"><span className="sheet-handle" /><small>INGRESO DE HOY · 18:42</small><h2>Te llegaron S/ 2.000</h2><p>Tu regla se aplicó automáticamente.</p><AllocationCard model={model} /><div className="event-result"><span><small>ESTO TE QUEDA PARA GASTAR</small><strong>{money(model.available)}</strong></span><Check /></div><button className="primary-button" onClick={() => onNavigate('home')}>Entendido<Check /></button><button className="text-button" onClick={() => onNavigate('edit')}>Deshacer o ajustar</button></section></div>;
}

function HomeScreen({ model, onNavigate, balanceVisible = true }) {
  return <div className="home-screen"><header className="home-greeting"><span><small>Hola,</small><b>Luis.</b></span><em><Check />Vas bien</em></header><section className="available-block"><span>ESTO TE QUEDA PARA GASTAR</span><strong>{balanceVisible ? money(model.available) : 'S/ •••'}</strong><p>Después de separar tus pagos fijos y tu colchón.</p><button onClick={() => onNavigate('calculation')}>Ver cómo se repartió<ChevronRight /></button></section><AllocationCard model={model} /><button className="next-card" onClick={() => onNavigate('calculation')}><span className="next-icon"><CalendarDays /></span><span><small>TU PRÓXIMO PAGO GRANDE</small><b>Alquiler</b></span><span className="next-status"><strong>S/ 780</strong><small>Ya está cubierto</small></span><ChevronRight /></button></div>;
}

function CalculationScreen({ model, onNavigate }) {
  return <div className="detail-screen"><button className="ios-back" onClick={() => onNavigate('home')} aria-label="Volver"><ArrowLeft /></button><header className="screen-heading compact"><span>ACTUALIZADO HOY · 18:42</span><h2>Así se repartió tu dinero</h2><p>Puedes revisar de dónde sale cada monto.</p></header><FormulaCard model={model} /><section className="included-card"><header><b>Tus pagos fijos</b><button onClick={() => onNavigate('edit')}><Pencil />Editar</button></header>{model.payments.filter((payment) => payment.enabled).map((payment) => <span key={payment.id}><b>{payment.name}</b><small>{payment.due}</small><strong>{money(payment.amount)}</strong></span>)}</section><InfoNote title="Esto todavía no aparece aquí">Efectivo, cuentas externas ni movimientos por confirmar.</InfoNote><button className="secondary-button" onClick={() => onNavigate('edit')}>Cambiar pagos o colchón<ChevronRight /></button></div>;
}

function EditScreen({ model, payments, togglePayment, reservePct, setReservePct, onNavigate }) {
  return <div className="detail-screen"><button className="ios-back" onClick={() => onNavigate('calculation')} aria-label="Volver"><ArrowLeft /></button><header className="screen-heading compact"><span>TU REGLA ESTÁ ACTIVA</span><h2>Cambia lo que Allpa separa</h2><p>Usaremos estos cambios la próxima vez que recibas un pago.</p></header><div className="payment-list compact">{payments.map((payment) => <PaymentToggle key={payment.id} payment={payment} togglePayment={togglePayment} />)}</div><section className="mini-reserve"><span><b>Tu colchón</b><strong>{reservePct}% · {money(model.reserve)}</strong></span><input type="range" min="0" max="25" value={reservePct} onChange={(event) => setReservePct(Number(event.target.value))} aria-label="Porcentaje del colchón" /></section><button className="primary-button" onClick={() => onNavigate('calculation')}>Guardar cambios<Check /></button><button className="text-button"><Undo2 />Volver a la regla anterior</button></div>;
}

function CoverageScreen({ onNavigate }) {
  return <div className="coverage-screen"><header className="screen-heading compact"><span>¿TE ALCANZA EL MES?</span><h2>Con este ritmo, tienes 28 días</h2><p>Usamos tus pagos fijos y los gastos que Allpa reconoce.</p></header><div className="coverage-ring"><div><strong>28</strong><span>días</span></div></div><div className="success-strip"><Check /><span><b>Vas bien</b><small>Tus pagos fijos y tu colchón siguen cubiertos</small></span></div><section className="assumptions"><span><CalendarDays /><b>Próximo ingreso</b><strong>22 sep</strong></span><span><CircleDollarSign /><b>Gastas por día</b><strong>S/ 20</strong></span><span><RefreshCw /><b>Revisamos</b><strong>30 días</strong></span></section><InfoNote title="Esta proyección puede cambiar">Hay dos movimientos que todavía necesitamos clasificar.</InfoNote><button className="secondary-button" onClick={() => onNavigate('calculation')}>Ver qué estamos considerando<ChevronRight /></button></div>;
}

function HistoryScreen() {
  return <div className="history-screen"><header className="screen-heading compact"><span>MOVIMIENTOS</span><h2>Lo que pasó hoy</h2><p>Martes 14 · cada movimiento dice quién lo hizo.</p></header><div className="timeline"><Timeline time="18:42" icon={Landmark} title="Te pagaron" meta="Empresa Tech SAC · Detectado" amount="+ S/ 2.000" /><Timeline time="18:43" icon={SlidersHorizontal} title="Apartamos tus pagos fijos" meta="Hecho por Allpa · Automático" amount="− S/ 1.229" system /><Timeline time="18:43" icon={ShieldCheck} title="Guardamos en tu colchón" meta="Hecho por Allpa · Automático" amount="− S/ 200" system /><Timeline time="20:15" icon={WalletCards} title="Compra con tarjeta" meta="Confirmado por ti · Visa ••24" amount="− S/ 22" /></div><InfoNote>“Hecho por Allpa” identifica automatizaciones. “Confirmado por ti” registra tus decisiones.</InfoNote></div>;
}

function ProtectedScreen({ overrideConfirmed, setOverrideConfirmed, onNavigate }) {
  return <div className="protected-screen"><div className={`protected-card ${overrideConfirmed ? 'is-confirmed' : ''}`}><span className="protected-icon">{overrideConfirmed ? <Check /> : <CircleAlert />}</span><small>{overrideConfirmed ? 'PAGO CONFIRMADO' : 'CUIDADO'}</small><h2>{overrideConfirmed ? 'Usaste parte de tu colchón' : 'No te va a alcanzar'}</h2><strong>S/ 603</strong><p>{overrideConfirmed ? 'Ahora tienes S/ 168 guardados.' : 'Este pago usaría S/ 32 de tu colchón.'}</p><div><span>Proveedor Creativo SAC</span><b>Hoy · 20:04</b></div></div>{!overrideConfirmed ? <><button className="primary-button safe" onClick={() => onNavigate('home')}>Cancelar el pago</button><button className="danger-button" onClick={() => setOverrideConfirmed(true)}>Usar S/ 32 de mi colchón</button><p className="microcopy">Nada se enviará hasta que elijas una opción.</p></> : <button className="primary-button" onClick={() => { setOverrideConfirmed(false); onNavigate('history'); }}>Ver en Movimientos<ArrowRight /></button>}</div>;
}

function PaymentToggle({ payment, togglePayment }) { return <button className={payment.enabled ? 'is-enabled' : ''} onClick={() => togglePayment(payment.id)} aria-pressed={payment.enabled}><span className="checkbox">{payment.enabled && <Check />}</span><span><b>{payment.name}</b><small>{payment.due}</small></span><strong>{money(payment.amount)}</strong></button>; }
function FormulaCard({ model }) { return <section className="formula-card"><span><small>TE LLEGARON</small><strong>{money(model.income)}</strong></span><div><p>Tus pagos fijos<b>− {money(model.paymentsTotal)}</b></p><p>Tu colchón · {model.reservePct}%<b>− {money(model.reserve)}</b></p></div><footer><span>Esto te queda para gastar</span><strong>{money(model.available)}</strong></footer></section>; }
function AllocationCard({ model }) { const paymentsPct = Math.round(model.paymentsTotal / model.income * 100); const availablePct = Math.max(100 - paymentsPct - model.reservePct, 0); return <section className="allocation-card"><header><b>Tu dinero está organizado</b><ShieldCheck /></header><div className="allocation-track" aria-label={`${paymentsPct}% pagos, ${model.reservePct}% colchón y ${availablePct}% para gastar`}><i style={{ width: `${paymentsPct}%` }} /><i style={{ width: `${model.reservePct}%` }} /><i style={{ width: `${availablePct}%` }} /></div><div className="allocation-rows"><span><i className="dot sand" /><span><b>Tus pagos fijos</b><small>Ya están cubiertos</small></span><strong>{money(model.paymentsTotal)}</strong></span><span><i className="dot green" /><span><b>Tu colchón · {model.reservePct}%</b><small>Guardado para imprevistos</small></span><strong>{money(model.reserve)}</strong></span></div></section>; }
function TrustRow({ icon, title, children }) { const Icon = icon; return <div><Icon /><span><b>{title}</b><small>{children}</small></span><Check /></div>; }
function InfoNote({ title, children }) { return <aside className="info-note"><Info /><span>{title && <b>{title}</b>}<p>{children}</p></span></aside>; }
function Timeline({ time, icon, title, meta, amount, system = false }) { const Icon = icon; return <article className={system ? 'is-system' : ''}><time>{time}</time><span><Icon /></span><div><b>{title}</b><small>{meta}</small></div><strong>{amount}</strong></article>; }

function WatchShell({ children, tone }) { return <article className={`apple-watch tone-${tone}`}><div className="watch-crown" /><div className="watch-display">{children}</div></article>; }
function WatchScreen({ id, model, onNavigate }) {
  if (id === 'income') return <div className="watch-content"><header><AllpaLogo size="watch" wordmark={false} /><span>AHORA</span></header><small>TE LLEGÓ UN PAGO</small><h2>S/ 2.000 de Empresa Tech SAC</h2><p>Ya separamos <b>{money(model.paymentsTotal + model.reserve)}</b> para tus pagos fijos y tu colchón.</p><button onClick={() => onNavigate('available')}>Entendido</button><button className="watch-link">Deshacer o ajustar</button></div>;
  if (id === 'available') return <div className="watch-content"><header><AllpaLogo size="watch" wordmark={false} /><span>18:42</span></header><small>¡LISTO, YA ESTÁ GUARDADO!</small><strong className="watch-amount">{money(model.available)}</strong><p>Esto puedes gastar.</p><div className="watch-breakdown"><span>Pagos fijos<b>Cubiertos</b></span><span>Tu colchón<b>Seguro</b></span></div><button onClick={() => onNavigate('income')}>Ver detalle</button></div>;
  if (id === 'payment') return <div className="watch-content"><header><AllpaLogo size="watch" wordmark={false} /><span>ANTES DE PAGAR</span></header><small>PAGO CUBIERTO</small><h2>¿Vas a pagar S/ 120?</h2><strong>S/ 451</strong><b>te quedan para el mes</b><div className="watch-success"><Check />Pagos fijos y colchón cubiertos</div><button>Sí, pagar</button><button className="watch-link">No enviar</button></div>;
  return <div className="watch-content critical"><header><AllpaLogo size="watch" wordmark={false} /><span>ATENCIÓN</span></header><small>CUIDADO</small><h2>No te va a alcanzar</h2><strong>S/ 80</strong><p>Este pago usaría <b>S/ 32</b> de tu colchón.</p><button>Cancelar el pago</button><button className="watch-link">Usar S/ 32 de mi colchón</button></div>;
}
