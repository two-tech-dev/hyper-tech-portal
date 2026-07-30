"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_LOCALE, isLocale, translate, type Locale, type TranslationKey } from "@/lib/i18n";

const STORAGE_KEY = "2tech-locale";
const LocaleContext = createContext<{ locale: Locale; setLocale: (locale: Locale) => void; t: (key: TranslationKey) => string }>({ locale: DEFAULT_LOCALE, setLocale: () => undefined, t: (key) => translate(DEFAULT_LOCALE, key) });

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const detected = isLocale(stored) ? stored : Intl.DateTimeFormat().resolvedOptions().timeZone === "Asia/Ho_Chi_Minh" ? "vi" : DEFAULT_LOCALE;
    setLocaleState(detected);
    document.documentElement.lang = detected;
    document.documentElement.dataset.localeReady = "true";
  }, []);
  const setLocale = (next: Locale) => { setLocaleState(next); window.localStorage.setItem(STORAGE_KEY, next); document.documentElement.lang = next; };
  const value = useMemo(() => ({ locale, setLocale, t: (key: TranslationKey) => translate(locale, key) }), [locale]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() { return useContext(LocaleContext); }
