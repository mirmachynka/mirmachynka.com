import type { FrontendLinksConfig } from "@trebired/frontend/config";

import cs from "./../../src/frontend/components/chrome/site/i18n/cs";
import en from "./../../src/frontend/components/chrome/site/i18n/en";

export const links: FrontendLinksConfig = {
  categories: {
    elsewhere: ["trebired_site", "github"],
    site: ["trebired", "about", "approach", "contact"],
  },
  links: {
    about: { href: "/#about", site: "main" },
    approach: { href: "/#approach", site: "main" },
    contact: { href: "/#contact", site: "main" },
    github: { external: true, href: "https://github.com/mirmachynka" },
    home: { href: "/", site: "main" },
    trebired: { href: "/#trebired", site: "main" },
    trebired_site: { external: true, href: "https://trebired.com" },
  },
  messages: { cs: cs.links, en: en.links },
  sets: {
    main: {
      footer: { columns: [["site"], ["elsewhere"]], note: [] },
      header: ["trebired", "about", "approach", "contact"],
    },
  },
};
