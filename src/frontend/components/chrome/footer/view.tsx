import { TextLink } from "@trebired/frontend/react";
import { createLocalTranslator } from "@trebired/i18n";

import { SOCIAL_LINKS } from "#8lt90xbwt260";
import { contactEmail, contactHref, ownerName } from "#7thctz8gzhqd";
import { useLanguage } from "#a38rcf0jfx82";

const SECTIONS = ["work", "about", "approach", "contact"];

function FooterContent() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);

  return (
    <div className="site-foot">
    <div className="site-foot__top">
    <div className="site-foot__brand">
    <span className="site-foot__name">{ownerName}</span>
    <p className="site-foot__blurb">{translate("blurb")}</p>
    <TextLink className="site-foot__email" href={contactHref}>
    {contactEmail}
    </TextLink>
    </div>

    <div className="site-foot__cols">
    <nav aria-label={translate("nav")} className="site-foot__col">
    <span className="site-foot__heading">{translate("nav")}</span>
    {SECTIONS.map((section) => (
          <TextLink className="site-foot__link" href={`#${section}`} key={section}>
          {translate(`sections.${section}`)}
          </TextLink>
    ))}
    </nav>

    <nav aria-label={translate("elsewhere")} className="site-foot__col">
    <span className="site-foot__heading">{translate("elsewhere")}</span>
    {SOCIAL_LINKS.map((social) => (
          <TextLink className="site-foot__link" external href={social.url} key={social.url}>
          {social.label}
          </TextLink>
    ))}
    </nav>
    </div>
    </div>

    <div className="site-foot__base">
    <span className="site-foot__meta">{translate("located")}</span>
    <span className="site-foot__meta">{translate("built")}</span>
    </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
    <FooterContent />
    </footer>
  );
}

export { Footer, FooterContent };
