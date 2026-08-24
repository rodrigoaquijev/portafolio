import React from 'react';
import { ArrowBendUpRightIcon } from '@phosphor-icons/react/dist/csr/ArrowBendUpRight';
import { Languages, Menu, Moon, Sun, Volume2, VolumeX, X } from 'lucide-react';
import { useSiteDesignSystem } from './SiteDesignSystem.jsx';

export default function SiteHeader({ items, open, setOpen, scrolled, currentSection = '', onNavigate, wordmarkHref, wordmarkSubtitle = 'Product Designer', variant = 'home' }) {
  const { theme, setTheme, lang, setLang, audio, setAudio } = useSiteDesignSystem();

  const sound = (frequency = 520, force = false) => {
    if (!audio && !force) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(.025, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .065);
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start();
    oscillator.stop(ctx.currentTime + .07);
  };

  const activate = (item) => {
    setOpen(false);
    sound();
    if (item.id && onNavigate) onNavigate(item.id);
  };

  const navItem = (item, mobile = false) => {
    const active = item.active || (item.id && currentSection === item.id);
    const className = active ? 'is-active' : '';
    const content = mobile ? <><span>{item.label}</span><ArrowBendUpRightIcon weight="bold" /></> : item.label;
    if (item.href) return <a key={item.href} className={className} aria-current={active ? 'page' : undefined} href={item.href} onClick={() => activate(item)}>{content}</a>;
    return <button key={item.id} className={className} aria-current={active ? 'page' : undefined} onClick={() => activate(item)}>{content}</button>;
  };

  const wordmark = <><strong>Rodrigo Aquije</strong><small>{wordmarkSubtitle}</small></>;

  return <header className={`command-deck command-deck--refined command-deck--${variant} ${open ? 'is-open' : ''} ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="command-main">
      {wordmarkHref
        ? <a className="command-wordmark" href={wordmarkHref}>{wordmark}</a>
        : <button className="command-wordmark" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{wordmark}</button>}
      <nav className="command-direct-nav" aria-label={lang === 'es' ? 'Navegación principal' : 'Primary navigation'}>{items.map((item) => navItem(item))}</nav>
      <div className="command-controls">
        <button className="nav-control" aria-label={audio ? 'Desactivar sonido' : 'Activar sonido'} aria-pressed={audio} data-tip={audio ? 'Sonido activo' : 'Sonido apagado'} onClick={() => { setAudio(!audio); if (!audio) sound(720, true); }}>{audio ? <Volume2 /> : <VolumeX />}</button>
        <button className="nav-control" aria-label={lang === 'es' ? 'Cambiar tema' : 'Change theme'} data-tip={theme === 'dark' ? (lang === 'es' ? 'Modo claro' : 'Light mode') : (lang === 'es' ? 'Modo oscuro' : 'Dark mode')} onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark'); sound(); }}>{theme === 'dark' ? <Moon /> : <Sun />}</button>
        <button className="nav-control nav-control--language" aria-label={lang === 'es' ? 'Cambiar idioma' : 'Change language'} data-tip={lang === 'es' ? 'View in English' : 'Ver en español'} onClick={() => { setLang(lang === 'es' ? 'en' : 'es'); sound(); }}><Languages /><span>{lang.toUpperCase()}</span></button>
        <button className="command-menu" aria-label={open ? (lang === 'es' ? 'Cerrar navegación' : 'Close navigation') : (lang === 'es' ? 'Abrir navegación' : 'Open navigation')} aria-expanded={open} onClick={() => { setOpen(!open); sound(460); }}>{open ? <X /> : <Menu />}</button>
      </div>
    </div>
    <div className="command-mobile-panel" inert={!open ? '' : undefined}><nav>{items.map((item) => navItem(item, true))}</nav></div>
  </header>;
}
