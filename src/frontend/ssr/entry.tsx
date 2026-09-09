import { LiveIslandMount, LocaleProvider } from "@trebired/frontend/react";
import { buildStaticIconCache, createServerIconRenderer, withIconServerRenderer } from "@trebired/frontend/server";
import { renderToString } from "react-dom/server";
import type { ReactElement } from "react";

import { ALL_ICON_SPECS } from "#0ecwvk1k07fy";
import { Footer } from "#k21ef4d3041i";
import { Header } from "#a6y8rnwh8rgt";
import { PageContent } from "#bwcts8dmtvye";

const iconRenderer = createServerIconRenderer(buildStaticIconCache(ALL_ICON_SPECS));

function renderRouteBody(path: string, locale: string): string {
  const localized = (node: ReactElement) => renderToString(
    <LocaleProvider locale={locale}>{node}</LocaleProvider>,
  );
  return withIconServerRenderer(iconRenderer, () => {
      const header = localized(<Header />);
      const content = localized(
        <LiveIslandMount rootId="live_content" stateId="live_content_state">
        <PageContent path={path} />
        </LiveIslandMount>,
      );
      const footer = localized(<Footer />);
      return `${header}${content}${footer}`;
  });
}

export { renderRouteBody };
