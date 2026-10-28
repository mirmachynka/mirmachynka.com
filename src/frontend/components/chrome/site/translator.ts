import { createTranslator, type I18nTranslator } from "@trebired/i18n";
import type { Lang } from "./../../../shared/lang/store";
import csMessages from "./i18n/cs";
import enMessages from "./i18n/en";

const siteMessages = {
  cs: csMessages,
  en: enMessages,
};

export function createSiteTranslator(lang: Lang): I18nTranslator {
  return createTranslator(siteMessages, lang);
}
