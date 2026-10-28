import { applyProjectConfigsToFrontendBundlerOptions, buildFrontendApp, buildStaticShell, syncBundlerData } from "@trebired/bundler/frontend-app";
import type { BundlerLogger } from "@trebired/bundler";
import {
  configureFrontendA11y,
  configureFrontendLanguage,
  createLocaleShellRoutes,
  ERROR_STATUSES,
  errorRoutePath,
  errorShellFileName,
  frontendBoot,
} from "@trebired/frontend";
import { loadConfig as loadFrontendConfig } from "@trebired/frontend/config";
import type { SeoAuditIssue } from "@trebired/seo";
import sharp from "sharp";

import seoConfig from "./../../../.trebired/seo/config";
import { LANG_ROUTING } from "./../../frontend/shared/lang/policy";
import { allRoutePaths } from "./../../frontend/shared/utils/routes";
import { writeOrganizationLogo, writeSketches } from "./art";
import { createSiteDefines } from "./options";
import { createSiteSeo } from "./seo";
import { renderRouteBodies } from "./ssr";

type SiteBuildOptions = { development: boolean; logger?: BundlerLogger; origin: string; rootDir: string };

const SOCIAL_CARD = "src/brand/social-card.svg";

function seoWarnings(issues: SeoAuditIssue[]): string[] {
  const errors = issues.filter((found) => found.level === "error");
  if (errors.length) throw new Error(`seo audit failed: ${errors.map((found) => `${found.lang} ${found.path} ${found.message}`).join("; ")}`);
  return issues.map((found) => `${found.lang} ${found.path}: ${found.message}`);
}

async function writeSocialCard(outDir: string) {
  await sharp(SOCIAL_CARD, { density: 144 }).resize({ height: 630, width: 1200 }).png().toFile(`${outDir}/social-card.png`);
}

async function writeCrawlerFiles(outDir: string, seo: ReturnType<typeof createSiteSeo>) {
  await writeSocialCard(outDir);
  await Bun.write(`${outDir}/robots.txt`, seo.robotsTxt());
  await Bun.write(`${outDir}/sitemap.xml`, seo.sitemap());
}

async function buildSite({ development, logger, origin, rootDir }: SiteBuildOptions) {
  const synced = await syncBundlerData({ logger, rootDir });
  const seo = createSiteSeo(origin);
  const seoNotes = seoWarnings(seo.audit());
  const config = await applyProjectConfigsToFrontendBundlerOptions({
      define: createSiteDefines(origin, development),
      logger,
      mode: development ? "development" : "production",
      rootDir,
      ssr: false,
  });
  const { config: frontendConfig } = await loadFrontendConfig(rootDir);
  const a11y = configureFrontendA11y(frontendConfig.a11y);
  const language = configureFrontendLanguage(frontendConfig.language);
  const [build, bodies] = await Promise.all([
      buildFrontendApp({ ...config, target: "client" }),
      renderRouteBodies({ development, logger, origin, rootDir }, config.supportedI18nLanguages || []),
  ]);
  const strategy = seoConfig.localeStrategy;
  const routes = createLocaleShellRoutes({
      meta: seo.shellMeta,
      paths: [...allRoutePaths(), ...ERROR_STATUSES.map(errorRoutePath)],
      render: (routePath, locale) => bodies[routePath]?.[locale] || "",
      routing: LANG_ROUTING,
      strategy,
  }).map((route) => ({ ...route, body: `${route.body}${seo.structuredData(route.sourcePath, route.locale)}` }));
  const boot = frontendBoot({ locale: { a11y, language, routing: LANG_ROUTING, strategy } });
  const shell = await buildStaticShell({ build, config, meta: { ...boot, lang: "en" }, routes });

  for (const file of shell.files) await Bun.write(file.outFile, file.html);
  for (const status of ERROR_STATUSES) {
    const file = shell.files.find((entry) => entry.path === errorRoutePath(status));
    if (file) await Bun.write(`${config.clientOutDir}/${errorShellFileName(status)}`, file.html);
  }
  await writeCrawlerFiles(String(config.clientOutDir), seo);
  await writeSketches(String(config.clientOutDir));
  await writeOrganizationLogo(String(config.clientOutDir), synced.data);

  return { build, config, seoNotes, shell };
}

export { buildSite };
