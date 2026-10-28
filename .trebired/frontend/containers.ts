import { defineContainers } from "@trebired/frontend/config";

import { footerLogo, headerLogo, siteApp } from "./containers/chrome";
import { about, approach, contact, founder, nameMark, opening, principles } from "./containers/home";
import { band } from "./containers/layout";

export const containers = defineContainers({
    about,
    approach,
    band,
    contact,
    "footer-logo": footerLogo,
    founder,
    "header-logo": headerLogo,
    "name-mark": nameMark,
    opening,
    principles,
    "site-app": siteApp,
});
