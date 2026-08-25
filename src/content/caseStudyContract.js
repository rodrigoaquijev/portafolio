const REQUIRED_LANGUAGES = ['es', 'en'];

export function defineCaseStudy({ slug, name, methodology, phases, phaseLabels = {}, translations }) {
  if (!slug || !name || !methodology || !Array.isArray(phases) || !phases.length) {
    throw new Error('Every case study needs a slug, name, methodology and ordered phases.');
  }

  const normalized = Object.fromEntries(REQUIRED_LANGUAGES.map((language) => {
    const source = translations[language];
    if (!source) throw new Error(`${name} is missing the ${language} translation.`);

    const hero = source.hero || {
      eyebrow: source.eyebrow,
      title: source.title,
      intro: source.intro,
      meta: source.meta
    };
    const nav = source.nav || Object.fromEntries(phases.map((phase) => [phase, phaseLabels[language]?.[phase] || phase]));

    return [language, Object.freeze({
      ...source,
      pageTitle: source.pageTitle || `${name} — ${language === 'es' ? 'Caso de estudio' : 'Case study'} | Rodrigo Aquije`,
      headerSubtitle: source.headerSubtitle || `${language === 'es' ? 'Caso de estudio' : 'Case study'} · ${name}`,
      nav: Object.freeze(nav),
      hero: Object.freeze(hero),
      contact: source.contact || (language === 'es' ? 'Conectemos' : 'Let’s connect'),
      contactTitle: source.contactTitle || (language === 'es' ? 'Conversemos sobre el problema real.' : 'Let’s discuss the real problem.'),
      linkedinNetwork: source.linkedinNetwork || (language === 'es' ? 'Red profesional' : 'Professional network'),
      copied: source.copied || (language === 'es' ? 'Email copiado' : 'Email copied'),
      footer: source.footer || (language === 'es' ? 'Diseñado y construido en Lima.' : 'Designed and built in Lima.')
    })];
  }));

  return Object.freeze({
    meta: Object.freeze({ slug, name, methodology, phases: Object.freeze([...phases]) }),
    ...normalized
  });
}
