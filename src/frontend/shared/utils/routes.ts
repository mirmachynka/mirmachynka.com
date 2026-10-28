import { matchSupportedLanguage, type SupportedLang } from "./../runtime/i18n/lang";
import { pageTitle, type RouteMeta } from "./route_meta";

const OWNER = "Miroslav Machynka";

const ROUTES: Record<string, Record<SupportedLang, RouteMeta>> = {
  "/": {
    en: {
      title: `${OWNER}, founder of Trebired`,
      description:
      `${OWNER} founded and maintains Trebired, an independent open-source software organization. ` +
        "He writes its packages, products and websites.",
    },
    cs: {
      title: `${OWNER}, zakladatel organizace Trebired`,
      description:
      `${OWNER} založil a spravuje Trebired, nezávislou softwarovou organizaci s otevřeným kódem. ` +
        "Píše její balíčky, produkty i weby.",
    },
  },
};

const NOT_FOUND: Record<SupportedLang, RouteMeta> = {
  cs: { description: "Tato stránka neexistuje.", title: pageTitle("Stránka nenalezena", OWNER) },
  en: { description: "This page does not exist.", title: pageTitle("Page not found", OWNER) },
};

export function routeExists(path: string): boolean {
  return Object.hasOwn(ROUTES, path);
}

export function metaFor(path: string, langInput: unknown = "en"): RouteMeta {
  const lang = matchSupportedLanguage(langInput) || "en";
  return ROUTES[path]?.[lang] || NOT_FOUND[lang];
}

export function allRoutePaths(): string[] {
  return Object.keys(ROUTES);
}

export function canonicalPath(path: string): string {
  const trimmed = String(path || "/").replace(/\/+$/u, "");
  return trimmed || "/";
}
