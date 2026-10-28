import { button as PrimitiveButton, Icon, TextLink, Title } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import { Drawing } from "./../../components/primitives/drawing";
import { SectionBand } from "./../../components/sections/band";
import { identity } from "./../../shared/identity";
import { SOCIAL_LINKS } from "./../../shared/social";
import { DRAWINGS } from "./drawings";

export function ContactBand({ translator }: { translator: I18nTranslator }) {
  return (
    <SectionBand archetype="statement" className="tbfm-contact" id="contact" weight="major">
    <div className="tbfm-contact__layout">
    <div className="tbfm-contact__text tbf-column tbf-gap-md">
    <Title className="tbf-text-xl6" level={2}>{translator("contact.title")}</Title>
    <p>{translator("contact.text")}</p>
    <div className="tbfm-contact__reach">
    <TextLink className="tbf-text-xl3" href={`mailto:${identity.contactEmail}`}>{identity.contactEmail}</TextLink>
    <ul aria-label={translator("contact.email")} className="tbfm-contact__social tbf-list-plain">
    {SOCIAL_LINKS.map((link) => (
          <li key={link.service}>
          <TextLink aria-label={link.label} external href={link.href}><Icon spec={link.icon} /></TextLink>
          </li>
    ))}
    </ul>
    </div>
    <div className="tbf-inline-row tbf-hor-right">
    <PrimitiveButton href={`${identity.organizationWebsite}/contact`} rel="noreferrer" target="_blank" variant="primary">
    {translator("contact.project")}
    <Icon spec="remixicon:arrow-right-line" />
    </PrimitiveButton>
    </div>
    </div>
    <Drawing className="tbfm-contact__drawing" drawing={DRAWINGS.phone} label={translator("contact.drawing")} />
    </div>
    </SectionBand>
  );
}
