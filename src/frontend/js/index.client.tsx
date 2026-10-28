import {
  bindFrontendRuntime,
  configureLocaleRouting,
  configureSiteLinks,
  configureSpa,
  frontendEventName,
  SITE_FOOTER_ROOT_SELECTOR,
  SITE_HEADER_ROOT_SELECTOR,
} from "@trebired/frontend";
import "@trebired/frontend/static-icons";
import { LocaleProvider } from "@trebired/frontend/react";
import type { ReactElement } from "react";

import { links } from "./../../../.trebired/frontend/links";
import { Header } from "./../components/chrome/header";
import { SiteFooter } from "./../components/chrome/site/footer";
import { hydrateChromeRoots } from "./../shared/chrome_roots";
import { mountContentIsland } from "./../shared/content_island";
import { identity } from "./../shared/identity";
import { LANG_ROUTING } from "./../shared/lang/policy";
import { setLang } from "./../shared/lang/store";
import { REVEAL_SELECTOR } from "./../shared/reveal";

configureLocaleRouting(LANG_ROUTING);
configureSiteLinks(links, { origins: { main: identity.siteOrigin }, set: "main" });
configureSpa({});

const mounted = new WeakSet<Element>();

function localized(node: ReactElement) {
  return <LocaleProvider>{node}</LocaleProvider>;
}

function pending(root: Element | null, node: ReactElement): [Element, ReactElement][] {
  if (!root || mounted.has(root)) return [];
  mounted.add(root);
  return [[root, node]];
}

function mountChrome() {
  return hydrateChromeRoots([
      ...pending(document.querySelector(SITE_HEADER_ROOT_SELECTOR), localized(<Header />)),
      ...pending(document.querySelector(SITE_FOOTER_ROOT_SELECTOR), localized(<SiteFooter />)),
  ]);
}

void mountChrome()
.then(() => mountContentIsland("live_content"))
.then(() => {
    bindFrontendRuntime(document, {
        reveal: { selector: REVEAL_SELECTOR },
        locale: {
          persistLocale: async() => ({ ok: true }),
          refresh: (lang) => setLang(lang as "cs" | "en"),
        },
    });
});

document.addEventListener(frontendEventName("rehydrate"), () => {
    void mountChrome();
});
