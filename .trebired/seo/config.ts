import { defineConfig } from "@trebired/seo";
import { readProductIdentity } from "@trebired/utils";

const product = readProductIdentity({ startDir: import.meta.dir });

export default defineConfig({
    forVersion: "0.4.0",
    defaults: {
      robots: { follow: true, index: true, maxImagePreview: "large" },
      type: "website",
    },
    localeStrategy: "none",
    robotsTxt: { sitemap: true },
    site: {
      defaultLocale: "en",
      locales: ["en", "cs"],
      name: product.displayName,
      url: product.website,
    },
    sitemap: { changeFrequency: "monthly", priority: 1 },
    twitter: { card: "summary_large_image" },
});
