import type { ReactNode } from 'react';
import React, { createContext, useContext, useEffect, useState } from 'react';

import type { Theme, Language } from './types';

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
  language: Language;
  setLanguage: (l: Language) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'auto',
  setTheme: () => {},
  language: 'ru',
  setLanguage: () => {},
  isDark: false,
});

function applyTheme(theme: Theme): boolean {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const shouldBeDark = theme === 'dark' || (theme === 'auto' && prefersDark);
  document.documentElement.classList.toggle('dark', shouldBeDark);
  return shouldBeDark;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    return (localStorage.getItem('docai-theme') as Theme) || 'auto';
  });
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('docai-language') as Language) || 'ru';
  });
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const dark = applyTheme(theme);
    setIsDark(dark);
  }, [theme]);

  useEffect(() => {
    if (theme !== 'auto') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      const dark = applyTheme('auto');
      setIsDark(dark);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme]);

  const setTheme = (t: Theme) => {
    localStorage.setItem('docai-theme', t);
    setThemeState(t);
  };

  const setLanguage = (l: Language) => {
    localStorage.setItem('docai-language', l);
    setLanguageState(l);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, language, setLanguage, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
