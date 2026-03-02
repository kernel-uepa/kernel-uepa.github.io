import { en } from "./en";
import { pt } from "./pt";

export const translations = { en, pt } as const;

export type Locale = keyof typeof translations;

// Flatten keys for type-safe access (dot notation)
type FlattenKeys<T, Prefix extends string = ""> = T extends object
  ? {
      [K in keyof T]: T[K] extends readonly any[]
        ? `${Prefix}${K & string}`
        : T[K] extends object
        ? FlattenKeys<T[K], `${Prefix}${K & string}.`> | `${Prefix}${K & string}`
        : `${Prefix}${K & string}`;
    }[keyof T]
  : never;

export type TranslationKeys = FlattenKeys<typeof en> | (string & {});

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
};
