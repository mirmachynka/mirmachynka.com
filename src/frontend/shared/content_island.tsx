import { LocaleProvider, mountLiveIsland } from "@trebired/frontend/react";
import type { ReactNode } from "react";

import { PageContent } from "./page_content";

function PageIsland() {
  const pathname = window.location.pathname.replace(/\/+$/u, "") || "/";
  return <PageContent path={pathname} />;
}

function mountContentIsland(elementId: string) {
  return mountLiveIsland({
      component: PageIsland,
      root: elementId,
      wrap: (node: ReactNode) => <LocaleProvider>{node}</LocaleProvider>,
  });
}

export { mountContentIsland };
