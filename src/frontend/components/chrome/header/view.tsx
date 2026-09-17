import { SiteHeader } from "@trebired/frontend/react";

import { LanguageMenu } from "#p3v71yp3qjy7";
import { ownerName } from "#7thctz8gzhqd";

function Header() {
  return <SiteHeader actions={<LanguageMenu />} brand={ownerName} brandHref="#top" />;
}

export { Header };
