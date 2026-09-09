import { createBunStaticAssetHandler, createFrontendAppBundlerOptions } from "@trebired/bundler/frontend-app";
import { watch } from "@trebired/bundler";
import { loadConfig, resolvePrimaryPort, runStartup } from "@trebired/startup";
import { readProductIdentity } from "@trebired/utils";

import { logger } from "./shared/logger";
import {
  buildSite,
  resolveSiteBundlerOptions,
  shellBuildFromClient,
  writeSeoArtifacts,
  writeSiteShell,
} from "./frontend/build";

const rootDir = process.cwd();
const startup = await loadConfig(rootDir);
const port = resolvePrimaryPort(startup.config) ?? 0;
const identity = readProductIdentity({ startDir: rootDir });
const bundlerOptions = await resolveSiteBundlerOptions("development", rootDir);

function serve() {
  return Bun.serve({
      fetch: createBunStaticAssetHandler({
          clientOutDir: String(bundlerOptions.clientOutDir || "dist"),
          mode: "development",
          publicDir: typeof bundlerOptions.publicDir === "string" ? bundlerOptions.publicDir : undefined,
          rootDir,
          spaFallback: "index.html",
      }),
      port,
  });
}

async function startWatcher() {
  const options = bundlerOptions;
  const { client } = createFrontendAppBundlerOptions(options);
  return watch({
      ...client,
      async onRebuilt(result) {
        await writeSiteShell(options, shellBuildFromClient(options, result), rootDir);
        await writeSeoArtifacts(options, rootDir);
        logger.info("watch", `rebuilt :: outputs=${result.outputs.length}`);
      },
  });
}

let server: ReturnType<typeof serve>|null = null;
let session: Awaited<ReturnType<typeof startWatcher>>|null = null;

await runStartup({
    bootstrap: {
      subsystems: [
        {
          id: "frontend-build",
          async bootstrap() {
            await buildSite("development", rootDir);
            session = await startWatcher();
          },
          async shutdown() {
            await session?.dispose();
            session = null;
          },
        },
        {
          dependsOn: ["frontend-build"],
          id: "http-server",
          bootstrap() {
            server = serve();
          },
          async shutdown() {
            await server?.stop(true);
            server = null;
          },
        },
      ],
    },
    logger,
    messageData: { port, product: { name: identity.displayName, version: identity.version } },
    terminate: (exitCode: number) => process.exit(exitCode),
});
