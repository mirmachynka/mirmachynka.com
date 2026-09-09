import { defineConfig } from "@trebired/bundler/config";

export default defineConfig({
    forVersion: "5.12.1",
    build: {
      outputLayout: true,
      publicPath: "/",
    },
    frontend: {
      frontendDir: "src/frontend",
      publicDir: false,
    },
});
