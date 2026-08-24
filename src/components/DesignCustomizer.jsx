import React, { useEffect, useState } from 'react';
import { Check, Type, RotateCcw, X } from 'lucide-react';

const DEFAULTS = {
  typePair: 'atelier',
  typeScale: 'balanced'
};

const TYPE_PAIRS = [
  { id: 'atelier', label: 'Atelier', specimen: 'Cabinet / General' },
  { id: 'swiss', label: 'Swiss', specimen: 'General / Geist Mono' },
  { id: 'contrast', label: 'Contrast', specimen: 'Clash / Gambetta' }
];

function readSettings() {
  try {
    return { ...DEFAULTS, ...JSON.parse(localStorage.getItem('rodrigo-design-lab') || '{}') };
  } catch {
    return DEFAULTS;
  }
}

export default function DesignCustomizer({ lang = 'es' }) {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(readSettings);
  const es = lang === 'es';

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.preset = 'oxide';
    root.dataset.density = 'compact';
    root.dataset.projectLayout = 'stream';
    root.dataset.radius = 'soft';
    root.dataset.motion = 'calm';
    root.dataset.typePair = settings.typePair;
    root.dataset.typeScale = settings.typeScale;
    root.style.setProperty('--user-accent', '#3CAA94');
    localStorage.setItem('rodrigo-design-lab', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const update = (key, value) => setSettings((current) => ({ ...current, [key]: value }));
  const reset = () => setSettings(DEFAULTS);

  return (
    <aside className={`design-lab ${open ? 'is-open' : ''}`}>
      {open && <button className="design-lab-scrim" aria-label={es ? 'Cerrar editor' : 'Close editor'} onClick={() => setOpen(false)} />}
      <section className="design-lab-panel" aria-hidden={!open} aria-label={es ? 'Editor visual' : 'Visual editor'}>
        <header className="design-lab-header">
          <div><span>{es ? 'TIPOGRAFÍA' : 'TYPOGRAPHY'}</span><strong>{es ? 'Ritmo y voz' : 'Rhythm & voice'}</strong></div>
          <button type="button" onClick={() => setOpen(false)} aria-label={es ? 'Cerrar' : 'Close'}><X size={16} /></button>
        </header>

        <div className="design-control">
          <label>{es ? 'Combinación' : 'Pairing'}</label>
          <div className="type-pair-grid">
            {TYPE_PAIRS.map((pair) => (
              <button key={pair.id} type="button" className={settings.typePair === pair.id ? 'selected' : ''} onClick={() => update('typePair', pair.id)}>
                <span className="type-pair-name">{pair.label}</span>
                <small>{pair.specimen}</small>
                {settings.typePair === pair.id && <Check size={12} />}
              </button>
            ))}
          </div>
        </div>

        <Segmented label={es ? 'Escala tipográfica' : 'Type scale'} value={settings.typeScale} onChange={(value) => update('typeScale', value)} options={[
          ['compact', es ? 'Menor 1.125' : 'Minor 1.125'], ['balanced', es ? 'Mayor 1.250' : 'Major 1.250'], ['display', es ? 'Aumentada 1.333' : 'Augmented 1.333']
        ]} />

        <button type="button" className="design-reset" onClick={reset}><RotateCcw size={13} /> {es ? 'Restablecer sistema' : 'Reset system'}</button>
      </section>

      <button type="button" className="design-lab-trigger" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <Type size={17} /> <span>{es ? 'Tipografía' : 'Typography'}</span>
      </button>
    </aside>
  );
}

function Segmented({ label, value, onChange, options }) {
  return (
    <div className="design-control">
      <label>{label}</label>
      <div className="segmented-control">
        {options.map(([id, text]) => <button key={id} type="button" className={value === id ? 'selected' : ''} onClick={() => onChange(id)}>{text}</button>)}
      </div>
    </div>
  );
}
