import { createLocalTranslator } from "@trebired/i18n";

import { useLanguage } from "#a38rcf0jfx82";
import { Shapes } from "#nt3mbgg83wfh";

function About() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);

  return (
    <section className="section section--panel" id="about">
    <Shapes section="about" />
    <div className="section__inner about">
    <h2 className="section__title">{translate("title")}</h2>
    <p className="section__lead">{translate("lead")}</p>
    <p className="section__body">{translate("note")}</p>
    <p className="section__body">{translate("reach")}</p>
    </div>
    </section>
  );
}

export { About };
