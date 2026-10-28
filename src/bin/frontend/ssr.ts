import { bundle } from "@trebired/bundler";
import path from "node:path";

import { allRoutePaths } from "./../../frontend/shared/utils/routes";
import { ERROR_STATUSES, errorRoutePath } from "@trebired/frontend";
import { createSiteDefines } from "./options";
import { LANG_ROUTING } from "./../../frontend/shared/lang/policy";
import type { BundlerLogger } from "@trebired/bundler";

const SSR_OUT_ROOT = ".ssr";

type RenderSite = { development: boolean; logger?: BundlerLogger; origin: string; rootDir: string };

async function buildSsrBundle({ development, logger, origin, rootDir }: RenderSite, supportedLanguages: readonly string[]) {
  await bundle({
      define: createSiteDefines(origin, development),
      discover: {
        dir: "./src/frontend",
        rules: [
          { key: "ssr-entry", include: ["ssr/entry.tsx"], strategy: "entry" },
          { key: "ignore-client", include: ["**/*.client.ts", "**/*.client.tsx", "js/**"], strategy: "ignore" },
          { key: "shared", include: ["**/*.ts", "**/*.tsx"], exclude: ["ssr/entry.tsx"], strategy: "bundle" },
          { key: "ignore-rest", include: ["**/*"], strategy: "ignore" },
        ],
      },
      environment: "node",
      external: ["react", "react-dom", "react-dom/server"],
      format: "esm",
      i18n: { supportedLanguages: [...supportedLanguages] },
      logger,
      outDir: `./${SSR_OUT_ROOT}`,
      rootDir,
  });
}

async function renderRouteBodies(render: RenderSite, supportedLanguages: readonly string[]): Promise<Record<string, Record<string, string>>> {
  await buildSsrBundle(render, supportedLanguages);

  const entryPath = path.resolve(render.rootDir, `${SSR_OUT_ROOT}/src/frontend/ssr/entry.js`);
  const routes = [...allRoutePaths(), ...ERROR_STATUSES.map(errorRoutePath)];
  return renderInWorker({ entryPath, locales: [...LANG_ROUTING.locales], routes });
}

type RenderReply = { bodies?: Record<string, Record<string, string>>; error?: string };

function renderInWorker(request: { entryPath: string; locales: string[]; routes: string[] }): Promise<Record<string, Record<string, string>>> {
  const worker = new Worker(new URL("./render_worker.ts", import.meta.url).href);
  return new Promise<Record<string, Record<string, string>>>((resolve, reject) => {
      worker.onmessage = (event: MessageEvent<RenderReply>) => {
        if (event.data.bodies) resolve(event.data.bodies);
        else reject(new Error(`server render failed :: ${event.data.error || "no output"}`));
      };
      worker.onerror = (event) => reject(new Error(`server render worker failed :: ${event.message}`));
      worker.postMessage(request);
  }).finally(() => worker.terminate());
}

export { renderRouteBodies };
