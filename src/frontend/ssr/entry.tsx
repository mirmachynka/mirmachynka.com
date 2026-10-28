import { configureFrontendLanguage, configureLocaleRouting, configureSiteLinks, isErrorRoutePath, siteBodyHtml } from "@trebired/frontend";
import { LiveIslandMount, LocaleProvider, RenderCurrentUrlProvider } from "@trebired/frontend/react";
import { createServerIconRenderer, withIconServerRenderer } from "@trebired/frontend/server";
import type { ReactElement } from "react";
import { renderToString } from "react-dom/server";

import { language } from "./../../../.trebired/frontend/language";
import { links } from "./../../../.trebired/frontend/links";
import { Header } from "./../components/chrome/header";
import { SiteFooter } from "./../components/chrome/site/footer";
import { identity } from "./../shared/identity";
import { LANG_ROUTING } from "./../shared/lang/policy";
import { PageContent, preparePageContent } from "./../shared/page/content";
import { canonicalPath, routeExists } from "./../shared/utils/routes";

configureFrontendLanguage(language);
configureLocaleRouting(LANG_ROUTING);
configureSiteLinks(links, { origins: { main: identity.siteOrigin }, set: "main" });

const iconRenderer = createServerIconRenderer({});

export async function renderRouteBody(path: string, locale: string): Promise<string> {
  await preparePageContent(path);
  const localized = (node: ReactElement) => withIconServerRenderer(
    iconRenderer,
    () => renderToString(
      <RenderCurrentUrlProvider currentUrl={path}>
      <LocaleProvider locale={locale}>{node}</LocaleProvider>
      </RenderCurrentUrlProvider>,
    ),
  );

  const header = localized(<Header path={path} />);
  const content = localized(
    <LiveIslandMount rootId="live_content">
    <PageContent path={path} />
    </LiveIslandMount>,
  );
  const footer = localized(<SiteFooter />);
  const route = canonicalPath(path);
  const chrome = !isErrorRoutePath(route) && routeExists(route);
  return `<div class="tbfm-site-app">${siteBodyHtml({ chrome, content, footer, header, path })}</div>`;
}
