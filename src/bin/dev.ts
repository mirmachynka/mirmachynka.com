#!/usr/bin/env bun

import { createBunStaticAssetHandler } from "@trebired/bundler/frontend-app";
import { frontendConfigCheck } from "@trebired/frontend/config";
import { resolvePrimaryPort, runStartup } from "@trebired/startup";
import { loadConfig as loadStartupConfig } from "@trebired/startup/config";
import { readProductIdentity } from "@trebired/utils";

import { buildSite } from "./frontend/site_build";
import { logger } from "./shared/logger";

type BuiltSite = Awaited<ReturnType<typeof buildSite>>["config"];

const { config: startup } = await loadStartupConfig(process.cwd());
const port = resolvePrimaryPort(startup) ?? 0;
if (!port) throw new Error("the startup config declares no port for the dev server");
const origin = `http://localhost:${port}`;
const identity = readProductIdentity();
let built: BuiltSite | null = null;
let server: ReturnType<typeof Bun.serve>|null = null;

function serve(config: BuiltSite) {
  return Bun.serve({
      port,
      fetch: createBunStaticAssetHandler({
          clientOutDir: String(config.clientOutDir || "dist"),
          mode: "development",
          publicDir: typeof config.publicDir === "string" ? config.publicDir : undefined,
          rootDir: String(config.rootDir || process.cwd()),
          spaFallback: "404.html",
      }),
  });
}

async function buildForDev() {
  built = (await buildSite({ development: true, logger, origin, rootDir: process.cwd() })).config;
}

await runStartup({
    checks: [frontendConfigCheck()],
    bootstrap: {
      subsystems: [
        { id: "frontend-build", bootstrap: buildForDev },
        {
          dependsOn: ["frontend-build"],
          id: "http-server",
          bootstrap() {
            if (!built) throw new Error("frontend build unavailable");
            server = serve(built);
          },
          async shutdown() {
            await server?.stop(true);
            server = null;
          },
        },
      ],
    },
    logger,
    messageData: { origins: [origin], ports: [port], product: { name: identity.displayName, version: identity.version } },
    terminate: (exitCode: number) => process.exit(exitCode),
});
