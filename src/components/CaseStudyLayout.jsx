import React, { useEffect, useState } from 'react';
import SiteHeader from './SiteHeader.jsx';

export default function CaseStudyLayout({ children, className = '', pageTitle, headerSubtitle, nav }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [navTarget, setNavTarget] = useState('');

  useEffect(() => { document.title = pageTitle; }, [pageTitle]);
  useEffect(() => {
    const onScroll = () => { setScrolled(window.scrollY > 72); if (window.scrollY < 520) setCurrentSection(''); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const sections = document.querySelectorAll('[data-case-phase]');
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setCurrentSection(visible.target.dataset.casePhase);
    }, { rootMargin: '-24% 0px -58% 0px', threshold: [0, .2, .45] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const nodes = document.querySelectorAll('.case-reveal');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: .08 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    setCurrentSection(id);
    setNavTarget(id);
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    window.setTimeout(() => setNavTarget(''), 850);
  };
  const items = Object.entries(nav).map(([id, label]) => ({ id, label }));

  return <main className={`case-template ${className} ${navTarget ? 'is-navigating' : ''}`} data-nav-target={navTarget || undefined}>
    <div className="case-template-ambient" aria-hidden="true" />
    <SiteHeader items={items} open={menuOpen} setOpen={setMenuOpen} scrolled={scrolled} currentSection={currentSection} onNavigate={scrollTo} wordmarkHref="/" wordmarkSubtitle={headerSubtitle} variant="case" />
    {children}
  </main>;
}
