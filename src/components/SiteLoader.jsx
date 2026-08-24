import React from 'react';

export default function SiteLoader({ visible, subtitle = 'Product Design · Lima' }) {
  return <div className={`loading-screen ${visible ? 'is-visible' : 'is-complete'}`} role="status" aria-live="polite" aria-label="Cargando portafolio"><div><strong>Rodrigo Aquije</strong><span>{subtitle}</span><i aria-hidden="true" /></div></div>;
}
