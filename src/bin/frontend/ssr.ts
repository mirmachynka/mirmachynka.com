import { bundle } from "@trebired/bundler";
import { createLocaleDocumentBody } from "@trebired/frontend";
import path from "node:path";

import { logger } from "#f9cklujxctdn";
import { LANGUAGE_ROUTING } from "#szbf6t6578gp";
import { allRoutePaths } from "#qc7hh93g4hpq";
import { siteShellMeta } from "./seo";

const SSR_OUT_DIR = ".ssr";
const SSR_ENTRY_OUTPUT = `${SSR_OUT_DIR}/src/frontend/ssr/entry.js`;

async function buildSsrBundle(
  define: Record<string, string>,
  supportedLanguages: string[],
  rootDir: string,
) {
  await bundle({
      define,
      discover: {
        dir: "./src/frontend",
        rules: [
          { key: "ssr-entry", include: ["ssr/entry.tsx"], strategy: "entry" },
          { key: "ignore-client", include: ["**/*.client.ts", "**/*.client.tsx", "js/**"], strategy: "ignore" },
          { key: "ignore-styles", include: ["**/*.scss", "**/*.css", "**/styles/**", "css/**"], strategy: "ignore" },
          { key: "ignore-public", include: ["public/**"], strategy: "ignore" },
          { key: "shared", include: ["**/*.ts", "**/*.tsx"], exclude: ["ssr/entry.tsx"], strategy: "bundle" },
        ],
      },
      environment: "node",
      external: ["react", "react-dom", "react-dom/server"],
      format: "esm",
      i18n: { supportedLanguages },
      logger,
      outDir: `./${SSR_OUT_DIR}`,
      rootDir,
  });
}

function localizedBody(routePath: string, render: (locale: string) => string): string {
  const locales = LANGUAGE_ROUTING.locales;
  const meta = locales.map((locale) => {
      const shell = siteShellMeta(routePath, locale);
      return [locale, { description: shell.description, title: shell.title }];
  });
  return createLocaleDocumentBody({
      bodies: Object.fromEntries(locales.map((locale) => [locale, render(locale)])),
      defaultLocale: LANGUAGE_ROUTING.defaultLocale,
      meta: Object.fromEntries(meta),
  });
}

async function renderRouteBodies(
  define: Record<string, string>,
  supportedLanguages: string[],
  rootDir: string,
): Promise<Record<string, string>> {
  await buildSsrBundle(define, supportedLanguages, rootDir);

  const entryPath = path.resolve(rootDir, SSR_ENTRY_OUTPUT);
  const mod = (await import(`${entryPath}?t=${Date.now()}`)) as {
    renderRouteBody: (routePath: string, locale: string) => string;
  };

  const bodies: Record<string, string> = {};
  for (const routePath of allRoutePaths()) {
    bodies[routePath] = localizedBody(routePath, (locale) => mod.renderRouteBody(routePath, locale));
  }
  return bodies;
}

export { renderRouteBodies };
