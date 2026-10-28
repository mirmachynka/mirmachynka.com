import { createTranslator, type I18nTranslator } from "@trebired/i18n";
import type { Lang } from "./../../shared/lang/store";
import csMessages from "./i18n/cs";
import enMessages from "./i18n/en";

const layoutMessages = {
  cs: csMessages,
  en: enMessages,
};

export function createLayoutTranslator(lang: Lang): I18nTranslator {
  return createTranslator(layoutMessages, lang);
}
