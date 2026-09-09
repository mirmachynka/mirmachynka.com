import { normalizeLocaleRouting } from "@trebired/frontend";

const SUPPORTED_LANGUAGES = ["en", "cs"] as const;

type SiteLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const DEFAULT_LANGUAGE: SiteLanguage = "en";

const LANGUAGE_COUNTRIES: Record<SiteLanguage, string> = {
  cs: "CZ",
  en: "GB",
};

const LANGUAGE_LABELS: Record<SiteLanguage, string> = {
  cs: "Čeština",
  en: "English",
};

const LANGUAGE_ROUTING = normalizeLocaleRouting({
    defaultLocale: DEFAULT_LANGUAGE,
    locales: [...SUPPORTED_LANGUAGES],
    storageKey: "site-language",
});

export {
  DEFAULT_LANGUAGE,
  LANGUAGE_COUNTRIES,
  LANGUAGE_LABELS,
  LANGUAGE_ROUTING,
  SUPPORTED_LANGUAGES,
};
export type { SiteLanguage };
