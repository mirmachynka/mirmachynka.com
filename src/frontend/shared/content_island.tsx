import { currentRoutePath, stripLocalePrefix } from "@trebired/frontend";
import { LocaleProvider, mountLiveIsland } from "@trebired/frontend/react";
import type { ReactNode } from "react";

import { PageContent, preparePageContent } from "./page/content";

let preparedPath = "";

function PageIsland() {
  return <PageContent path={preparedPath || currentRoutePath()} />;
}

function prepareIsland({ url }: { url: string }) {
  preparedPath = stripLocalePrefix(new URL(url, window.location.href).pathname);
  return preparePageContent(preparedPath);
}

export function mountContentIsland(elementId: string) {
  return mountLiveIsland({
      component: PageIsland,
      prepare: prepareIsland,
      root: elementId,
      wrap: (node: ReactNode) => <LocaleProvider>{node}</LocaleProvider>,
  });
}
