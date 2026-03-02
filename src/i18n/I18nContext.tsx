import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, type Locale, type TranslationKeys } from "@/i18n/translations";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKeys) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function detectLocale(): Locale {
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
    let value: any = translations[locale];
    for (const k of keys) {
      value = value?.[k];
    }
    return (value as string) ?? key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
