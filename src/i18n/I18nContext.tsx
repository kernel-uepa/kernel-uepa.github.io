import { useState, useEffect, type ReactNode } from "react";
import { translations, type Locale, type TranslationKeys } from "@/i18n/translations";
import { I18nContext } from "@/i18n/I18nContextStore";

function detectLocale(): Locale {
  const searchLang = new URLSearchParams(window.location.search).get("lang");
  if (searchLang && searchLang in translations) return searchLang as Locale;

  const hashQuery = window.location.hash.includes("?")
    ? window.location.hash.split("?")[1]
    : "";
  const hashLang = hashQuery ? new URLSearchParams(hashQuery).get("lang") : null;
  if (hashLang && hashLang in translations) return hashLang as Locale;

  const saved = localStorage.getItem("locale");
  if (saved && saved in translations) return saved as Locale;
  const browserLang = navigator.language.slice(0, 2);
  if (browserLang === "pt") return "pt";
  return "en";
}

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
    document.documentElement.lang = l;
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = (key: TranslationKeys): string => {
    const keys = key.split(".");
    let value: unknown = translations[locale];
    for (const k of keys) {
      if (typeof value !== "object" || value === null || !(k in value)) {
        return key;
      }
      value = (value as Record<string, unknown>)[k];
    }
    return typeof value === "string" ? value : key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

