import { Icon, TextLink } from "@trebired/frontend/react";
import { createLocalTranslator } from "@trebired/i18n";

import { SOCIAL_LINKS } from "#8lt90xbwt260";
import { contactEmail, contactHref } from "#7thctz8gzhqd";
import { useLanguage } from "#a38rcf0jfx82";
import { Shapes } from "#nt3mbgg83wfh";

function Contact() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);

  return (
    <section className="section section--panel section--contact" id="contact">
    <Shapes section="contact" />
    <div className="section__inner contact">
    <h2 className="section__title">{translate("prompt")}</h2>
    <p className="section__body">{translate("note")}</p>

    <TextLink className="contact__email" href={contactHref}>
    {contactEmail}
    </TextLink>

    <div className="contact__links inline-row wrap gap-sm">
    {SOCIAL_LINKS.map((social) => (
          <TextLink
          aria-label={social.label}
          className="contact__link"
          external
          href={social.url}
          key={social.url}
          >
          <Icon aria-hidden="true" spec={social.icon} />
          </TextLink>
    ))}
    </div>
    </div>
    </section>
  );
}

export { Contact };
