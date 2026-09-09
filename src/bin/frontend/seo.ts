import { createSeoBuilder, personSchema } from "@trebired/seo";
import { readProductIdentity } from "@trebired/utils";

import { PAGE } from "#zjkz301x5o9k";
import seoConfig from "#pkbxbfph188h";
import { SOCIAL_LINKS } from "#8lt90xbwt260";
import { allRoutePaths, metaFor } from "#qc7hh93g4hpq";

const seo = createSeoBuilder(seoConfig, {
    chrome: {
      metas: [{ content: PAGE, name: "theme-color" }],
    },
    configPath: ".trebired/seo/config.ts",
});

function siteShellMeta(path: string, language: string) {
  const copy = metaFor(path, language);
  return seo.shellMeta({
      description: copy.description,
      locale: language,
      path,
      title: copy.title,
  });
}

function siteStructuredData(path: string, rootDir: string, owner: string): string {
  if (path !== "/") return "";
  return seo.structuredData([
      personSchema({
          jobTitle: "Software developer",
          name: owner,
          sameAs: SOCIAL_LINKS.map((social) => social.url),
          url: readProductIdentity({ startDir: rootDir }).website,
      }),
  ]);
}

function siteRobotsTxt(): string {
  return seo.robotsTxt();
}

function siteSitemap(): string {
  return seo.sitemap(allRoutePaths().map((path) => ({ path })));
}

export { siteRobotsTxt, siteShellMeta, siteSitemap, siteStructuredData };
