import { normalizeLocaleRouting } from "@trebired/frontend";

import { SUPPORTED_LANGS, type SupportedLang } from "./../runtime/i18n/lang";

export const DEFAULT_LANG: SupportedLang = "en";

export const LANG_ROUTING = normalizeLocaleRouting({
    defaultLocale: DEFAULT_LANG,
    locales: [...SUPPORTED_LANGS],
    storageKey: "mirmachynka-lang",
});
