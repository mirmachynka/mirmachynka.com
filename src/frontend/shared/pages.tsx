import { createSitePages } from "@trebired/frontend/react";

import { SiteErrorPage } from "./../pages/error";

export const sitePages = createSitePages({
    error: SiteErrorPage,
    pages: {
      "/": async() => (await import("./../pages/home")).HomePage,
    },
});
