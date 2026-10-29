import { defineConfig } from "@trebired/seo";
import { readProductIdentity } from "@trebired/utils";
import { language } from "./../frontend/language";

const product = readProductIdentity({ startDir: import.meta.dir });

export default defineConfig({
    forVersion: "0.7.0",
    defaults: {
      image: { alt: product.displayName, height: 630, type: "image/png", url: "/social-card.png", width: 1200 },
      robots: { follow: true, index: true, maxImagePreview: "large" },
      type: "website",
    },
    localeStrategy: "prefix",
    robotsTxt: { sitemap: true },
    site: {
      defaultLocale: language.defaultLocale || "en",
      locales: (language.locales || []).map((locale) => locale.code),
      name: product.displayName,
      url: product.website,
    },
    sitemap: { changeFrequency: "monthly", priority: 1 },
    twitter: { card: "summary_large_image" },
});
