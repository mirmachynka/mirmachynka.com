import { createLocalTranslator } from "@trebired/i18n";

import { useLanguage } from "#a38rcf0jfx82";
import { Shapes } from "#nt3mbgg83wfh";

function Opening() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);

  return (
    <section className="section section--opening" id="top">
    <Shapes section="opening" />
    <div className="section__inner opening">
    <h1 className="opening__title">{translate("title")}</h1>
    <p className="section__lead">{translate("sub")}</p>
    </div>
    </section>
  );
}

export { Opening };
