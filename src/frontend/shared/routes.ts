import { hasOwn } from "@trebired/utils";

import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "./language/policy";
import type { SiteLanguage } from "./language/policy";

type RouteMeta = {
  description: string;
  title: string;
};

const ROUTES: Record<string, Record<SiteLanguage, RouteMeta>> = {
  "/": {
    en: {
      title: "Miroslav Machynka | Software built to a standard",
      description:
      "Miroslav Machynka builds custom websites, web apps, desktop software, " +
        "and the servers behind them. From scratch, Linux first, maintained " +
        "after launch.",
    },
    cs: {
      title: "Miroslav Machynka | Software stavěný podle standardu",
      description:
      "Miroslav Machynka staví zakázkové weby, webové aplikace, desktopový " +
        "software a servery za tím vším. Od nuly, Linux především, s údržbou " +
        "po spuštění.",
    },
  },
};

function stripTrailingSlash(path: string): string {
  return path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
}

function canonicalPath(path: string): string {
  const normalized = stripTrailingSlash(String(path || "/"));
  return normalized || "/";
}

function routeExists(path: string): boolean {
  return hasOwn(ROUTES, canonicalPath(path));
}

function allRoutePaths(): string[] {
  return Object.keys(ROUTES);
}

function matchRouteLanguage(input: unknown): SiteLanguage {
  return SUPPORTED_LANGUAGES.includes(input as SiteLanguage)
  ? (input as SiteLanguage)
  : DEFAULT_LANGUAGE;
}

function metaFor(path: string, languageInput: unknown = DEFAULT_LANGUAGE): RouteMeta {
  const language = matchRouteLanguage(languageInput);
  return ROUTES[canonicalPath(path)]?.[language] ?? ROUTES["/"][language];
}

export { allRoutePaths, canonicalPath, metaFor, routeExists };
export type { RouteMeta };
