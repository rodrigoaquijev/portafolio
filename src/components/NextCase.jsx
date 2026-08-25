import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ArrowBendUpRightIcon } from '@phosphor-icons/react/dist/csr/ArrowBendUpRight';
import { useSiteDesignSystem } from './SiteDesignSystem.jsx';
import { CASE_SEQUENCE } from '../content/caseSequence.js';

export default function NextCase({ current }) {
  const { lang } = useSiteDesignSystem();
  const entry = CASE_SEQUENCE[current];
  const content = entry?.[lang];
  if (!entry || !content) return null;

  return <section className={`next-case-panel next-case--${entry.next} case-reveal`} aria-labelledby={`next-${current}-title`}>
    <div className="next-case-orbit" aria-hidden="true"><i /><i /><span>{entry.next}</span></div>
    <div className="next-case-heading">
      <span>{lang === 'es' ? 'Siguiente caso' : 'Next case'}</span>
      <h2 id={`next-${current}-title`}>{content.title}</h2>
      <strong>{content.subtitle}</strong>
      <Link to={entry.href}>{lang === 'es' ? 'Ver caso' : 'View case'}<ArrowRight /></Link>
    </div>
    <div className="next-case-context">
      <ArrowBendUpRightIcon weight="duotone" />
      <p>{content.description}</p>
      <div>{content.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </div>
  </section>;
}
