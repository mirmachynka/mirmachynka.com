import { SiteHeader } from "@trebired/frontend/react";

import { useLang } from "./../../shared/lang/use";
import { A11ySwitcher } from "./a11y_switcher";
import { LangSwitcher } from "./lang_switcher";
import { NameMark } from "./mark";
import { createLayoutTranslator } from "./translator";
import { identity } from "./../../shared/identity";

function HeaderActions() {
  return (
    <>
    <A11ySwitcher />
    <LangSwitcher />
    </>
  );
}

export function Header(_props: { path?: string } = {}) {
  const lang = useLang();
  const translator = createLayoutTranslator(lang);

  return (
    <SiteHeader
    softRedirect
    actions={<HeaderActions />}
    brand={<NameMark />}
    menuActions={<HeaderActions />}
    lang={lang}
    labels={{
        closeMenu: translator("nav.menu"),
        home: identity.ownerName,
        navigation: translator("nav.main"),
        openMenu: translator("nav.menu"),
    }}
    />
  );
}
