import { SiteFooter as PackageFooter } from "@trebired/frontend/react";

import { identity } from "./../../../shared/identity";
import { useLang } from "./../../../shared/lang/use";
import { SOCIAL_LINKS } from "./../../../shared/social";
import { NameMark } from "./../mark";
import { createSiteTranslator } from "./translator";

export function SiteFooter() {
  const translator = createSiteTranslator(useLang());

  return (
    <PackageFooter
    credit
    softRedirect
    social={SOCIAL_LINKS}
    brand={<NameMark className="tbfm-name-mark--footer" />}
    note={<span>© {new Date().getFullYear()} {identity.ownerName}. {translator("footer.rights")}</span>}
    tagline={translator("footer.tagline")}
    />
  );
}
