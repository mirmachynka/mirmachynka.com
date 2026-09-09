import { defineConfig } from "@trebired/code-discipline";

export default defineConfig({
    presets: {
      use: ["@trebired/configs"],
    },
    helpers: {
      nodeProcessBoundary: {
        processBoundaryFiles: ["src/bin/dev.ts", "src/bin/frontend/build.ts"],
      },
    },
    rules: {
      bannedPatterns: {
        patterns: [
          { value: "mirmachynka.com", allowedFiles: ["package.json"] },
          { value: "3000", allowedFiles: [".trebired/startup/config.ts"] },
        ],
      },
    },
});
