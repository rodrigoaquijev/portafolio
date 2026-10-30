import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownLeft, ArrowRight, Check, ChevronDown, CircleHelp, House, Leaf, SlidersHorizontal, Undo2, TriangleAlert } from 'lucide-react';
import AlpacaMark from './AlpacaMark.jsx';
import { SCENARIOS, changeAllocation, derive, money, sameAllocation, terracePath, validRecord } from './model.js';

const STORAGE_KEY = 'allpa.reparto.prototype.v1';
function readSaved() {
  try { const record = JSON.parse(localStorage.getItem(STORAGE_KEY)); return validRecord(record) ? record : null; }
  catch { return null; }
}
const initialDraft = () => ({ ...SCENARIOS.comfortable, scenario: 'comfortable' });

function Andenes({ draft, saved, beat, reduced }) {
  const { available } = derive(draft);
  const layers = [
    { id: 'available', label: 'Disponible', value: available, width: 216, y: 12, index: 2 },
    { id: 'buffer', label: 'Colchón', value: draft.buffer, width: 288, y: 93, index: 1 },
    { id: 'payments', label: 'Pagos', value: draft.payments, width: 360, y: 174, index: 0 },
  ];
  return <figure className="anden-figure">
    <svg viewBox="-4 0 368 256" role="img" aria-labelledby="anden-title anden-desc" className="block w-full overflow-visible">
      <title id="anden-title">Tu cobro en tres partes</title>
      <desc id="anden-desc">Pagos {money(draft.payments)}, colchón {money(draft.buffer)}, disponible {money(available)}. Las formas identifican categorías; su tamaño no representa proporciones.</desc>
      {layers.map(layer => <g key={layer.id} transform={`translate(${(360 - layer.width) / 2} ${layer.y})`}>
        <motion.g key={`${layer.id}-${beat}`} initial={false}
          animate={saved && !reduced ? { y: [-8 - layer.index * 4, 2, 0] } : { y: 0 }}
          transition={{ duration: reduced ? 0 : .52, delay: reduced ? 0 : layer.index * .07, times: [0, .75, 1], ease: [.22, 1, .36, 1] }}>
          <path d={terracePath(layer.width, 72)} fill={`var(--allocation-${layer.id})`} stroke="var(--text-primary)" strokeWidth="2" />
          <text x={layer.width / 2} y="30" textAnchor="middle" className="anden-label" fill={`var(--allocation-${layer.id}-foreground)`}>{layer.label}</text>
          <text x={layer.width / 2} y="55" textAnchor="middle" className="anden-value" fill={`var(--allocation-${layer.id}-foreground)`}>{money(layer.value)}</text>
        </motion.g>
      </g>)}
    </svg>
    <figcaption className="mt-5 flex items-center justify-center gap-2 text-sm text-secondary">
      <span className="h-px w-6 bg-[var(--border-control)]" /> Un cobro. Tres lugares. <span className="h-px w-6 bg-[var(--border-control)]" />
    </figcaption>
  </figure>;
}

function AllocationControl({ id, label, detail, value, max, icon: Icon, onChange, disabled }) {
  return <div className={`allocation-control allocation-${id}`}>
    <div className="flex items-start gap-3">
      <span className="category-icon"><Icon size={19} strokeWidth={1.75} aria-hidden="true" /></span>
      <div className="min-w-0 flex-1">
        <label htmlFor={id} className="block text-base font-bold">{label}</label>
        <p id={`${id}-detail`} className="mt-1 text-sm text-secondary">{detail}</p>
      </div>
      <output htmlFor={id} aria-live="off" className="pt-1 text-xl font-bold tabular-nums">{money(value)}</output>
    </div>
    <input id={id} type="range" min="0" max={max} step="100" value={value}
      aria-valuetext={money(value)} aria-describedby={`${id}-detail ${id}-limits`}
      disabled={disabled || max === 0} onChange={e => onChange(Number(e.target.value))}
      style={{ '--range-progress': `${max ? value / max * 100 : 0}%` }} />
    <div id={`${id}-limits`} className="flex justify-between text-[13px] text-secondary"><span>S/ 0</span><span>Hasta {money(max)}</span></div>
  </div>;
}

export default function RepartoApp() {
  const [initial] = useState(readSaved);
  const [draft, setDraft] = useState(initial || initialDraft);
  const [savedRecord, setSavedRecord] = useState(initial);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [beat, setBeat] = useState(0);
  const [undoAvailable, setUndoAvailable] = useState(false);
  const [scenariosOpen, setScenariosOpen] = useState(false);
  const previousRecord = useRef(null);
  const saveLock = useRef(false);
  const reduced = useReducedMotion();
  const { available, shortfall } = derive(draft);
  const isSaved = sameAllocation(draft, savedRecord);
  const update = (key, value) => {
    setDraft(current => changeAllocation(current, key, value));
    setMessage(''); setError(''); setUndoAvailable(false);
  };
  function switchScenario(scenario) {
    setDraft({ ...SCENARIOS[scenario], scenario });
    setMessage(`Escenario ${SCENARIOS[scenario].label}. Cobro de ${money(SCENARIOS[scenario].income)}.`);
    setError(''); setUndoAvailable(false);
  }
  function save(event) {
    event.preventDefault();
    if (saveLock.current || isSaved) return;
    saveLock.current = true;
    try {
      const record = { ...draft, savedAt: new Date().toISOString() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
      previousRecord.current = savedRecord;
      setSavedRecord(record); setBeat(v => v + 1); setUndoAvailable(true); setError('');
      setMessage(`Reparto guardado en este navegador. Pagos ${money(draft.payments)}, colchón ${money(draft.buffer)}, disponible ${money(available)}.${shortfall ? ` Faltan ${money(shortfall)} para el alquiler.` : ''}`);
    } catch {
      setError('No pudimos guardar en este navegador. Tu reparto sigue aquí; puedes intentarlo otra vez.');
    } finally { saveLock.current = false; }
  }
  function undo() {
    try {
      if (previousRecord.current) localStorage.setItem(STORAGE_KEY, JSON.stringify(previousRecord.current));
      else localStorage.removeItem(STORAGE_KEY);
      setSavedRecord(previousRecord.current); setUndoAvailable(false); setError('');
      setMessage('Guardado deshecho. Puedes seguir ajustando este reparto.');
    } catch { setError('No pudimos deshacer el guardado. Inténtalo de nuevo.'); }
  }
  return <div className="allpa-app min-h-screen">
    <a href="#reparto" className="skip-link">Ir al reparto</a>
    <header className="brand-header mx-auto flex max-w-[1120px] items-center justify-between px-6 py-7 sm:px-10">
      <div className="flex items-center gap-2.5" aria-label="Allpa">
        <AlpacaMark className="h-11 w-11 text-[var(--action-primary)]" />
        <span className="wordmark">allpa</span>
      </div>
      <details className="help-popover">
        <summary className="flex min-h-11 cursor-pointer items-center gap-2 text-sm font-semibold"><CircleHelp size={19} aria-hidden="true" /><span>Cómo funciona</span></summary>
        <div><strong>Tu dinero sigue contigo.</strong><p>Allpa organiza lo que registras. Guardar un reparto no mueve dinero ni paga tu alquiler.</p><p>Esta prueba usa datos ficticios y guarda el último reparto solo en este navegador.</p></div>
      </details>
    </header>

    <main id="reparto" className="mx-auto max-w-[1040px] px-5 sm:px-10">
      <div className="step-line mb-6 flex items-center gap-3 text-[13px] font-semibold text-secondary"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--surface-brand)]"><Check size={14} aria-hidden="true" /></span>Tu cobro <span className="h-px w-8 bg-[var(--border-control)]" /><span className="step-current">2</span><span className="text-primary">Dale su lugar</span></div>
      <section className="reparto-shell">
        <div className="landscape-panel">
          <div className="relative z-10">
            <p className="eyebrow">UN POCO DE ORDEN. MÁS AIRE.</p>
            <h1 className="display-title mt-4">Cobraste.<br />Dale su lugar.</h1>
            <p className="mt-4 max-w-[29ch] text-base leading-6 text-secondary">Tus pagos, tu colchón y lo que queda para ti.</p>
            <div className="income-pill mt-7 inline-flex items-center gap-3"><span className="income-icon"><ArrowDownLeft size={20} aria-hidden="true" /></span><span><span className="block text-[13px] text-secondary">Este cobro · Yape</span><strong className="text-2xl font-bold tabular-nums">{money(draft.income)}</strong></span></div>
          </div>
          <Andenes draft={draft} saved={isSaved} beat={beat} reduced={reduced} />
        </div>

        <form onSubmit={save} className="allocation-panel">
          <div className="mb-7 flex items-center justify-between gap-3"><h2 className="text-xl font-bold">Así queda este cobro</h2><span className="edit-badge">{isSaved ? 'Guardado' : 'Editable'}</span></div>
          <AllocationControl id="payments" label="Para tus pagos" detail={`Alquiler · objetivo ${money(draft.rent)}`} icon={House}
            value={draft.payments} max={Math.min(draft.rent, draft.income - draft.buffer)} onChange={value => update('payments', value)} />
          <AllocationControl id="buffer" label="Para tu colchón" detail={draft.buffer ? 'Una parte para tus imprevistos' : 'Esta vez, puedes dejarlo en cero'} icon={Leaf}
            value={draft.buffer} max={draft.income - draft.payments} onChange={value => update('buffer', value)} />

          <div className="allocation-note" data-tone={shortfall ? 'warning' : 'neutral'}>
            {shortfall ? <TriangleAlert size={18} className="shrink-0" aria-hidden="true" /> : <Check size={18} className="shrink-0" aria-hidden="true" />}
            <p>{shortfall ? <><strong>Faltan {money(shortfall)} para el alquiler.</strong><span> Puedes guardar este avance y completarlo con otro cobro.</span></> : <><strong>El alquiler tiene su lugar.</strong><span> Los {money(draft.rent)} están contemplados en tu plan.</span></>}</p>
          </div>

          <div className="available-summary mt-6">
            <div className="flex items-center justify-between"><span className="text-sm font-semibold">Te queda disponible</span><span className="available-dot" aria-hidden="true" /></div>
            <output className="available-amount block" aria-live="off" aria-label="Disponible" htmlFor="payments buffer">{money(available)}</output>
            <p className="text-[13px] text-secondary">De este cobro, según tu reparto.</p>
          </div>
          <motion.button type="submit" aria-disabled={isSaved} className="save-button mt-6 flex w-full items-center justify-center gap-3"
            whileTap={reduced || isSaved ? undefined : { scale: .985 }}>
            {isSaved ? <><Check size={20} aria-hidden="true" />Reparto guardado</> : <>Guardar reparto<ArrowRight size={20} aria-hidden="true" /></>}
          </motion.button>
          <div className="confirmation-space">
            {isSaved ? <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[13px]"><span>Listo. Cada parte en su lugar.</span>{undoAvailable && <button type="button" onClick={undo} className="undo-button"><Undo2 size={14} aria-hidden="true" />Deshacer</button>}</div> : <p className="text-center text-[13px] text-secondary">Puedes ajustar todo antes de guardarlo.</p>}
          </div>
          {error && <p role="alert" className="error-message">{error}</p>}
        </form>
      </section>
      <footer className="mt-5 flex flex-wrap justify-between gap-2 text-[13px] text-secondary"><span>Tu dinero sigue en tus cuentas. Aquí le das un lugar.</span><span>ALLPA · PROTOTIPO</span></footer>
    </main>
    <aside className={`scenario-control ${scenariosOpen ? 'is-open' : ''}`} aria-label="Control de escenarios">
      <button type="button" className="scenario-toggle" aria-expanded={scenariosOpen} aria-controls="scenario-options" onClick={() => setScenariosOpen(v => !v)}><SlidersHorizontal size={17} aria-hidden="true" /><span>Escenarios</span><ChevronDown size={16} aria-hidden="true" className={scenariosOpen ? 'rotate-180' : ''} /></button>
      <div id="scenario-options" hidden={!scenariosOpen}>
      <div className="scenario-label"><label htmlFor="scenario">Prueba otro momento</label><span>Datos ficticios</span></div>
      <div className="relative"><select id="scenario" value={draft.scenario} onChange={e => switchScenario(e.target.value)}>
        <option value="comfortable">Cobro holgado · S/ 1,200</option>
        <option value="shortfall">Faltante · S/ 350 / alquiler S/ 500</option>
        <option value="adjustment">Reajuste voluntario · colchón S/ 0</option>
      </select><ChevronDown className="pointer-events-none absolute right-3 top-3" size={18} aria-hidden="true" /></div></div>
    </aside>
    <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">{message}</p>
  </div>;
}
