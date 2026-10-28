import { ERROR_STATUSES, errorRoutePath } from "@trebired/frontend";
import {
  auditSeo,
  createSeoBuilder,
  personSchema,
  webSiteSchema,
  type SeoAuditIssue,
  type SeoRobots,
} from "@trebired/seo";
import { readOrganizationIdentity } from "@trebired/utils";

import seoConfig from "./../../../.trebired/seo/config";
import { language } from "./../../../.trebired/frontend/language";
import { SOCIAL_LINKS } from "./../../frontend/shared/social";
import { allRoutePaths, metaFor } from "./../../frontend/shared/utils/routes";

type Lang = "cs" | "en";

const THEME_COLOR = "#0a0a0a";
const HIDDEN: SeoRobots = { follow: true, index: false };
const LANGS: readonly Lang[] = ["cs", "en"];
const OWNER = "Miroslav Machynka";

const organization = readOrganizationIdentity();

function langOf(value: string): Lang {
  return value === "cs" ? "cs" : "en";
}

function errorStatus(path: string): number | undefined {
  return ERROR_STATUSES.find((status) => errorRoutePath(status) === path);
}

function errorCopy(status: number, lang: Lang) {
  const messages = language.error?.[lang] as Record<number, {lead:string;title:string}>|undefined;
  return messages?.[status] || { lead: "", title: String(status) };
}

function homeSchemas(origin: string, lang: Lang) {
  const employer = { "@type": "Organization", name: organization.displayName, url: organization.website };
  return [
    {
      ...personSchema({ jobTitle: "Founder", name: OWNER, sameAs: SOCIAL_LINKS.map((link) => link.href), url: origin }),
      worksFor: employer,
    },
    { ...employer, "@context": "https://schema.org", founder: { "@type": "Person", name: OWNER, url: origin } },
    webSiteSchema({ description: metaFor("/", lang).description, name: OWNER, url: origin }),
  ];
}

function auditSite(): SeoAuditIssue[] {
  return auditSeo(allRoutePaths().flatMap((path) => LANGS.map((lang) => ({ ...metaFor(path, lang), lang, path }))));
}

function createSiteSeo(origin: string) {
  const config = { ...seoConfig, site: { ...seoConfig.site, url: origin } };
  const chrome = { metas: [{ content: THEME_COLOR, name: "theme-color" }] };
  const seo = createSeoBuilder(config, { chrome, configPath: ".trebired/seo/config.ts" });

  return {
    audit: auditSite,
    robotsTxt: () => seo.robotsTxt(),
    shellMeta(path: string, lang: string) {
      const locale = langOf(lang);
      const status = errorStatus(path);
      if (!status) return seo.shellMeta({ ...metaFor(path, locale), locale, path });
      const copy = errorCopy(status, locale);
      return seo.shellMeta({ description: copy.lead, locale, path, robots: HIDDEN, title: copy.title });
    },
    sitemap: () => seo.sitemap(allRoutePaths().map((path) => ({ path }))),
    structuredData: (path: string, lang: string) => (path === "/" ? seo.structuredData(homeSchemas(origin, langOf(lang))) : ""),
  };
}

export { createSiteSeo };
