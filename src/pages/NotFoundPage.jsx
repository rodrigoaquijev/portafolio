import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { ArrowBendUpRightIcon } from '@phosphor-icons/react/dist/csr/ArrowBendUpRight';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import EditorialKicker from '../components/EditorialKicker.jsx';
import { useSiteDesignSystem } from '../components/SiteDesignSystem.jsx';

const CONTENT = {
  es: {
    subtitle: 'Página no encontrada',
    nav: [{ label: 'Inicio', href: '/' }, { label: 'Proyectos', href: '/#projects' }, { label: 'Sobre mí', href: '/sobre-mi' }, { label: 'Contacto', href: '/#contact' }],
    kicker: 'Esta ruta no forma parte del portafolio',
    title: 'Llegaste a una página que ya no existe.',
    body: 'Puede que el enlace haya cambiado o que el caso todavía no esté publicado. El resto del portafolio sigue disponible.',
    home: 'Volver al inicio',
    work: 'Explorar proyectos',
    footer: 'Diseñado y construido en Lima.'
  },
  en: {
    subtitle: 'Page not found',
    nav: [{ label: 'Home', href: '/' }, { label: 'Projects', href: '/#projects' }, { label: 'About', href: '/sobre-mi' }, { label: 'Contact', href: '/#contact' }],
    kicker: 'This route is not part of the portfolio',
    title: 'You reached a page that no longer exists.',
    body: 'The link may have changed or the case may not be published yet. The rest of the portfolio is still available.',
    home: 'Back to home',
    work: 'Explore projects',
    footer: 'Designed and built in Lima.'
  }
};

export default function NotFoundPage() {
  const { lang } = useSiteDesignSystem();
  const [menuOpen, setMenuOpen] = useState(false);
  const t = CONTENT[lang];

  useEffect(() => { document.title = lang === 'es' ? 'Página no encontrada | Rodrigo Aquije' : 'Page not found | Rodrigo Aquije'; }, [lang]);

  return <main className="not-found-page">
    <SiteHeader items={t.nav} open={menuOpen} setOpen={setMenuOpen} scrolled={false} wordmarkHref="/" wordmarkSubtitle={t.subtitle} variant="detail" />
    <section className="not-found-shell">
      <div className="not-found-code" aria-hidden="true"><Compass /><span>404</span></div>
      <div className="not-found-copy">
        <EditorialKicker>{t.kicker}</EditorialKicker>
        <h1>{t.title}</h1>
        <p>{t.body}</p>
        <div><Link className="not-found-primary" to="/"><ArrowLeft />{t.home}</Link><Link className="not-found-secondary" to="/#projects">{t.work}<ArrowBendUpRightIcon weight="bold" /></Link></div>
      </div>
    </section>
    <SiteFooter text={t.footer} />
  </main>;
}
