import React, { useEffect, useState } from 'react';
import { Check, Palette, RotateCcw, X } from 'lucide-react';

const DEFAULTS = {
  preset: 'obsidian',
  density: 'airy',
  layout: 'stream',
  radius: 'soft',
  motion: 'calm',
  accent: '#00E5FF'
};

const PRESETS = [
  { id: 'obsidian', label: 'Obsidian', color: '#090B10' },
  { id: 'paper', label: 'Paper', color: '#E8E2D6' },
  { id: 'cobalt', label: 'Cobalt', color: '#123BFF' },
  { id: 'moss', label: 'Moss', color: '#26372F' },
  { id: 'oxide', label: 'Oxide', color: '#A94927' }
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
    root.dataset.preset = settings.preset;
    root.dataset.density = settings.density;
    root.dataset.projectLayout = settings.layout;
    root.dataset.radius = settings.radius;
    root.dataset.motion = settings.motion;
    root.style.setProperty('--user-accent', settings.accent);
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
          <div><span>DESIGN LAB</span><strong>{es ? 'Hazlo tuyo' : 'Make it yours'}</strong></div>
          <button type="button" onClick={() => setOpen(false)} aria-label={es ? 'Cerrar' : 'Close'}><X size={16} /></button>
        </header>

        <div className="design-control">
          <label>{es ? 'Dirección visual' : 'Visual direction'}</label>
          <div className="preset-grid">
            {PRESETS.map((preset) => (
              <button key={preset.id} type="button" className={settings.preset === preset.id ? 'selected' : ''} onClick={() => update('preset', preset.id)}>
                <i style={{ background: preset.color }} />
                <span>{preset.label}</span>
                {settings.preset === preset.id && <Check size={12} />}
              </button>
            ))}
          </div>
        </div>

        <Segmented label={es ? 'Proyectos' : 'Projects'} value={settings.layout} onChange={(value) => update('layout', value)} options={[
          ['stream', es ? 'Editorial' : 'Editorial'], ['grid', es ? 'Galería' : 'Gallery'], ['focus', es ? 'Portada' : 'Feature']
        ]} />
        <Segmented label={es ? 'Densidad' : 'Density'} value={settings.density} onChange={(value) => update('density', value)} options={[
          ['airy', es ? 'Amplia' : 'Airy'], ['compact', es ? 'Compacta' : 'Compact']
        ]} />
        <Segmented label={es ? 'Forma' : 'Shape'} value={settings.radius} onChange={(value) => update('radius', value)} options={[
          ['soft', es ? 'Suave' : 'Soft'], ['sharp', es ? 'Precisa' : 'Sharp']
        ]} />
        <Segmented label={es ? 'Movimiento' : 'Motion'} value={settings.motion} onChange={(value) => update('motion', value)} options={[
          ['calm', es ? 'Calmo' : 'Calm'], ['expressive', es ? 'Expresivo' : 'Expressive']
        ]} />

        <div className="design-control accent-control">
          <label htmlFor="design-accent">{es ? 'Acento personal' : 'Personal accent'}</label>
          <div><input id="design-accent" type="color" value={settings.accent} onChange={(event) => update('accent', event.target.value)} /><code>{settings.accent.toUpperCase()}</code></div>
        </div>

        <button type="button" className="design-reset" onClick={reset}><RotateCcw size={13} /> {es ? 'Restablecer sistema' : 'Reset system'}</button>
      </section>

      <button type="button" className="design-lab-trigger" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <Palette size={17} /> <span>{es ? 'Personalizar' : 'Customize'}</span>
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
