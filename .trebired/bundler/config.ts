import { defineConfig } from "@trebired/bundler/config";

import { brandLogoSource } from "./../../src/bin/frontend/sources/brand";

export default defineConfig({
    forVersion: "5.19.0",
    build: {
      clientOutDir: "dist",
      outputLayout: true,
      publicPath: "/",
    },
    data: {
      dir: "dist/data",
      sources: {
        trebiredLogo: brandLogoSource({ dir: "brand", kind: "minimal", org: "Trebired", repo: "meta", tone: "light" }),
      },
    },
    frontend: {
      frontendDir: "src/frontend",
      publicDir: false,
    },
});
