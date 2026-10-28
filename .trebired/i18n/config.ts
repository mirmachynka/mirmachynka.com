import { defineConfig } from "@trebired/i18n/config";

export default defineConfig({
    forVersion: "0.7.3",
    defaultLanguage: "en",
    fallbackLanguage: "en",
    supportedLanguages: ["en", "cs"],
    check: {
      rootDir: "src/frontend",
      strict: true,
    },
});
