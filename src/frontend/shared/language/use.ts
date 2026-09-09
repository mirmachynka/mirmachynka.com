import { useLocale } from "@trebired/frontend/react";

import { DEFAULT_LANGUAGE } from "./policy";
import type { SiteLanguage } from "./policy";

type LanguageState = {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
};

function useLanguage(): LanguageState {
  const { locale, setLocale } = useLocale();
  return { language: (locale || DEFAULT_LANGUAGE) as SiteLanguage, setLanguage: setLocale };
}

export { useLanguage };
export type { LanguageState };
