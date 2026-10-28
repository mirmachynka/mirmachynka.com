import { LocaleSwitcher } from "@trebired/frontend/react";
import { LANGUAGES } from "./../../shared/lang/store";
import { useId } from "react";
import { useLang } from "./../../shared/lang/use";

const locales = LANGUAGES.map((lang) => ({
      code: lang.code,
      flagCountry: lang.flag,
      label: lang.label,
      shortLabel: lang.code.toUpperCase(),
}));

export function LangSwitcher() {
  return (
    <LocaleSwitcher
    id={`${useId().replace(/:/gu, "")}_lang`}
    lang={useLang()}
    locales={locales}
    trigger="locale"
    />
  );
}
