import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  LOCALES,
  translate,
} from './translations.js';

const LocaleContext = createContext(null);

function detectInitialLocale() {
  try {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved && LOCALES.some((l) => l.code === saved)) return saved;
  } catch {
    /* ignore */
  }

  const nav = (typeof navigator !== 'undefined' && navigator.language) || '';
  const short = nav.slice(0, 2).toLowerCase();
  if (LOCALES.some((l) => l.code === short)) return short;
  return DEFAULT_LOCALE;
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(DEFAULT_LOCALE);

  useEffect(() => {
    setLocaleState(detectInitialLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
  }, [locale]);

  const setLocale = useCallback((code) => {
    if (LOCALES.some((l) => l.code === code)) {
      setLocaleState(code);
    }
  }, []);

  const t = useCallback(
    (path, vars) => translate(locale, path, vars),
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, t, locales: LOCALES }),
    [locale, setLocale, t]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return ctx;
}
