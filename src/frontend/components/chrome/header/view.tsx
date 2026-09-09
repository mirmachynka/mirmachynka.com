import { TextLink } from "@trebired/frontend/react";

import { LanguageMenu } from "#p3v71yp3qjy7";
import { ownerName } from "#7thctz8gzhqd";

function HeaderContent() {
  return (
    <div className="site-bar">
    <TextLink className="site-bar__name" href="#top">
    {ownerName}
    </TextLink>
    <div className="site-bar__lang">
    <LanguageMenu />
    </div>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
    <HeaderContent />
    </header>
  );
}

export { Header, HeaderContent };
