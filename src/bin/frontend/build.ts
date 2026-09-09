import {
  applyProjectConfigsToFrontendBundlerOptions,
  buildFrontendApp,
  buildStaticShell,
  createFrontendAppBundlerOptions,
  resolveConfiguredFrontendGlobalClientEntries,
} from "@trebired/bundler/frontend-app";
import type {
  BundlerBuildResult,
  BundlerFrontendAppBundlerConfigOptions,
  BundlerFrontendBuildResult,
} from "@trebired/bundler";

import { createLocaleBootScript, localeShellRoutes } from "@trebired/frontend";
import path from "node:path";

import { logger } from "#f9cklujxctdn";
import { LANGUAGE_ROUTING } from "#szbf6t6578gp";
import { allRoutePaths } from "#qc7hh93g4hpq";
import { renderRouteBodies } from "./ssr";
import { siteRobotsTxt, siteShellMeta, siteSitemap, siteStructuredData } from "./seo";
import {
  findPackageJson,
  readOrganizationIdentity,
  readPackageJsonPath,
  readProductIdentity,
} from "@trebired/utils";

type SiteBuildMode = "development" | "production";

const CLIENT_OUT_DIR = "dist/client";
const SHELL_LANG = "en";

function ownerName(rootDir: string): string {
  const packageJsonPath = findPackageJson(rootDir);
  const packageJson = packageJsonPath ? readPackageJsonPath(packageJsonPath) : null;
  return String(packageJson?.author || "").replace(/\s*\([^()]*\)\s*$/u, "").trim();
}

function siteDefines(rootDir: string): Record<string, string> {
  const organization = readOrganizationIdentity({ startDir: rootDir });
  const product = readProductIdentity({ startDir: rootDir });
  return {
    __ORGANIZATION_NAME__: JSON.stringify(organization.displayName),
    __ORGANIZATION_WEBSITE__: JSON.stringify(organization.website),
    __OWNER_NAME__: JSON.stringify(ownerName(rootDir)),
    __PRODUCT_DOMAIN__: JSON.stringify(product.domain),
    __PRODUCT_NAME__: JSON.stringify(product.displayName),
    __PRODUCT_SLUG__: JSON.stringify(product.slug),
    __PRODUCT_WEBSITE__: JSON.stringify(product.website),
  };
}

async function resolveSiteBundlerOptions(
  mode: SiteBuildMode,
  rootDir: string,
): Promise<BundlerFrontendAppBundlerConfigOptions> {
  return applyProjectConfigsToFrontendBundlerOptions({
      logger,
      clientOutDir: CLIENT_OUT_DIR,
      define: siteDefines(rootDir),
      mode,
      rootDir,
      ssr: false,
  });
}

async function writeSiteShell(
  options: BundlerFrontendAppBundlerConfigOptions,
  build: BundlerFrontendBuildResult,
  rootDir: string,
): Promise<void> {
  const bodies = await renderRouteBodies(
    siteDefines(rootDir),
    [...(options.supportedI18nLanguages || [])],
    rootDir,
  );
  const owner = ownerName(rootDir);
  const routes = localeShellRoutes(allRoutePaths(), LANGUAGE_ROUTING).map((route) => ({
        body: `${bodies[route.path] || ""}${siteStructuredData(route.sourcePath, rootDir, owner)}`,
        meta: { ...siteShellMeta(route.sourcePath, route.locale), lang: route.locale },
        path: route.path,
  }));
  await buildStaticShell({
      build,
      config: options,
      meta: { bootScripts: [createLocaleBootScript(LANGUAGE_ROUTING)], lang: SHELL_LANG },
      routes,
  });
}

async function writeSeoArtifacts(rootDir: string): Promise<void> {
  const outDir = path.join(rootDir, CLIENT_OUT_DIR);
  await Bun.write(path.join(outDir, "robots.txt"), siteRobotsTxt());
  await Bun.write(path.join(outDir, "sitemap.xml"), siteSitemap());
}

function shellBuildFromClient(
  options: BundlerFrontendAppBundlerConfigOptions,
  client: BundlerBuildResult,
): BundlerFrontendBuildResult {
  const { config } = createFrontendAppBundlerOptions(options);
  return {
    client,
    globalClientEntries: resolveConfiguredFrontendGlobalClientEntries(config, client.assetManifest),
    publicDirCopied: true,
    relatedClientEntryMap: {},
    stats: {},
  };
}

async function buildSite(mode: SiteBuildMode, rootDir: string): Promise<BundlerFrontendBuildResult> {
  const options = await resolveSiteBundlerOptions(mode, rootDir);
  const build = await buildFrontendApp({ ...options, target: "client" });
  await writeSiteShell(options, build, rootDir);
  await writeSeoArtifacts(rootDir);
  return build;
}

async function runBuildCommand(argv: string[]): Promise<void> {
  const target = String(argv[2] || "client");
  if (target !== "client") throw new Error(`unsupported build target: ${target}`);
  const build = await buildSite("production", process.cwd());
  logger.success("build", `client complete :: outputs=${build.client?.outputs.length ?? 0}`);
}

if (import.meta.main) await runBuildCommand(process.argv);

export {
  CLIENT_OUT_DIR,
  buildSite,
  resolveSiteBundlerOptions,
  shellBuildFromClient,
  writeSeoArtifacts,
  writeSiteShell,
};
export type { SiteBuildMode };
