import { createContext } from "react";
import type { Locale, TranslationKeys } from "@/i18n/translations";

export interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKeys) => string;
}

export const I18nContext = createContext<I18nContextType | undefined>(undefined);