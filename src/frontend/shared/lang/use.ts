import { useLocale } from "@trebired/frontend/react";

import { DEFAULT_LANG } from "./policy";
import type { SupportedLang } from "./../runtime/i18n/lang";

export function useLang(): SupportedLang {
  return (useLocale().locale || DEFAULT_LANG) as SupportedLang;
}
