import { currentLocale, parseLocalePathname } from "@trebired/frontend";
import { LocaleProvider, mountLiveIsland } from "@trebired/frontend/react";
import type { ReactNode } from "react";

import { LANGUAGE_ROUTING } from "./language/policy";
import { PageContent } from "./page_content";

function PageIsland() {
  const { pathname } = parseLocalePathname(window.location.pathname, LANGUAGE_ROUTING);
  return <PageContent path={pathname} />;
}

function mountContentIsland(elementId: string) {
  return mountLiveIsland({
      component: PageIsland,
      root: elementId,
      wrap: (node: ReactNode) => <LocaleProvider locale={currentLocale()}>{node}</LocaleProvider>,
  });
}

export { mountContentIsland };
