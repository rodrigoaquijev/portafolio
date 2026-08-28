import React from 'react';
import { ArrowBendUpRightIcon } from '@phosphor-icons/react/dist/csr/ArrowBendUpRight';
import { FileText, Linkedin, Mail } from 'lucide-react';
import SectionLabel from './SectionLabel.jsx';

export default function SiteContact({ id = 'contact', label, title, lang, linkedinNetwork, onCopy, className = '', dataSection, dataAboutSection }) {
  return <section id={id} data-section={dataSection || undefined} data-about-section={dataAboutSection || undefined} className={`ref-section ref-contact site-contact ${className}`.trim()}>
    <SectionLabel>{label}</SectionLabel>
    <h2>{title}</h2>
    <div className="contact-links">
      <button onClick={onCopy}><Mail /><span><strong>Email</strong><small>rodriaquij1994@gmail.com</small></span><ArrowBendUpRightIcon weight="bold" /></button>
      <a href="https://linkedin.com/in/rodrigo-aquije" target="_blank" rel="noreferrer"><Linkedin /><span><strong>LinkedIn</strong><small>{linkedinNetwork}</small></span><ArrowBendUpRightIcon weight="bold" /></a>
      <div className="cv-card"><FileText /><span><strong>{lang === 'es' ? 'Currículum Vitae' : 'Curriculum Vitae'}</strong><small>{lang === 'es' ? 'Descargar versión' : 'Download version'}</small></span><div className="cv-actions"><a href="/cv-es.pdf" download>Español</a><a href="/cv-en.pdf" download>English</a></div></div>
    </div>
  </section>;
}
