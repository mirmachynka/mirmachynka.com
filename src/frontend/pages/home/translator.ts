import { createTranslator, type I18nTranslator } from "@trebired/i18n";

import type { Lang } from "./../../shared/lang/store";
import cs from "./i18n/cs";
import en from "./i18n/en";

export function createHomeTranslator(lang: Lang): I18nTranslator {
  return createTranslator({ cs, en }, lang);
}
