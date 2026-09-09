import { defineConfig } from "@trebired/bundler/config";

export default defineConfig({
    forVersion: "5.13.1",
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
