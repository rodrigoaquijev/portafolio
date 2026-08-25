import React, { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { SiteDesignSystemProvider } from './components/SiteDesignSystem.jsx';
import PortfolioHome from './pages/PortfolioHome.jsx';
import AboutPage from './pages/AboutPage.jsx';
import CaseBBVA from './pages/CaseBBVA.jsx';
import CaseYape from './pages/CaseYape.jsx';
import CaseAllpa from './pages/CaseAllpa.jsx';
import CaseVaca from './pages/CaseVaca.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return <SiteDesignSystemProvider>
    <RouteScrollManager />
    <Routes>
      <Route path="/" element={<PortfolioHome />} />
      <Route path="/sobre-mi" element={<AboutPage />} />
      <Route path="/casos/bbva" element={<CaseBBVA />} />
      <Route path="/casos/yape" element={<CaseYape />} />
      <Route path="/casos/allpa" element={<CaseAllpa />} />
      <Route path="/casos/vaca" element={<CaseVaca />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </SiteDesignSystemProvider>;
}

function RouteScrollManager() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView({ block: 'start' }));
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
