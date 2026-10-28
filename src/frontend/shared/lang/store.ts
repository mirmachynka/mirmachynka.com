import { setCurrentLocale } from "@trebired/frontend";

import { DEFAULT_LANG } from "./policy";
import { matchSupportedLanguage, type SupportedLang } from "./../runtime/i18n/lang";

export type Lang = SupportedLang;

export const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "cs", label: "Čeština" },
];

export function getLang(): Lang {
  if (typeof document === "undefined") return DEFAULT_LANG;
  return matchSupportedLanguage(document.documentElement.lang) || DEFAULT_LANG;
}

export function setLang(lang: Lang): void {
  setCurrentLocale(lang);
}
