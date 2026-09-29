import { defineConfig } from "@trebired/bundler/config";

export default defineConfig({
    forVersion: "5.15.0",
    build: {
      clientOutDir: "dist",
      outputLayout: true,
      publicPath: "/",
    },
    frontend: {
      frontendDir: "src/frontend",
      publicDir: false,
    },
});
