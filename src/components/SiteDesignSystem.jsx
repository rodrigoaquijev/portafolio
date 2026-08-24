import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const SiteDesignSystemContext = createContext(null);

const readPreference = (key, fallback) => {
  if (typeof window === 'undefined') return fallback;
  return window.localStorage.getItem(key) || fallback;
};

export function SiteDesignSystemProvider({ children }) {
  const [theme, setTheme] = useState(() => readPreference('ra-theme', 'light'));
  const [lang, setLang] = useState(() => readPreference('ra-lang', 'es'));
  const [audio, setAudio] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.documentElement.dataset.audio = audio ? 'on' : 'off';
    document.documentElement.dataset.typePair = 'contrast';
    document.documentElement.dataset.typeScale = 'major-third';
    window.localStorage.setItem('ra-theme', theme);
    window.localStorage.setItem('ra-lang', lang);
  }, [theme, lang, audio]);

  const value = useMemo(() => ({ theme, setTheme, lang, setLang, audio, setAudio }), [theme, lang, audio]);
  return <SiteDesignSystemContext.Provider value={value}>{children}</SiteDesignSystemContext.Provider>;
}

export function useSiteDesignSystem() {
  const context = useContext(SiteDesignSystemContext);
  if (!context) throw new Error('useSiteDesignSystem must be used inside SiteDesignSystemProvider');
  return context;
}
