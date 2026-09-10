import { currentRoutePath } from "@trebired/frontend";
import { LocaleProvider, mountLiveIsland } from "@trebired/frontend/react";
import type { ReactNode } from "react";

import { PageContent } from "./page_content";

function PageIsland() {
  return <PageContent path={currentRoutePath()} />;
}

function mountContentIsland(elementId: string) {
  return mountLiveIsland({
      component: PageIsland,
      root: elementId,
      wrap: (node: ReactNode) => <LocaleProvider>{node}</LocaleProvider>,
  });
}

export { mountContentIsland };
