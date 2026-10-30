import React from 'react';
import { ArrowBendUpRightIcon } from '@phosphor-icons/react/dist/csr/ArrowBendUpRight';
import { Linkedin, Mail } from 'lucide-react';
import SectionLabel from './SectionLabel.jsx';

export default function SiteContact({ id = 'contact', label, title, lang, linkedinNetwork, onCopy, className = '', dataSection, dataAboutSection }) {
  return <section id={id} data-section={dataSection || undefined} data-about-section={dataAboutSection || undefined} className={`ref-section ref-contact site-contact ${className}`.trim()}>
    <SectionLabel>{label}</SectionLabel>
    <h2>{title}</h2>
    <div className="contact-links">
      <button onClick={onCopy}><Mail /><span><strong>Email</strong><small>rodriaquij1994@gmail.com</small></span><ArrowBendUpRightIcon weight="bold" /></button>
      <a href="https://linkedin.com/in/rodrigo-aquije" target="_blank" rel="noreferrer"><Linkedin /><span><strong>LinkedIn</strong><small>{linkedinNetwork}</small></span><ArrowBendUpRightIcon weight="bold" /></a>
    </div>
  </section>;
}
