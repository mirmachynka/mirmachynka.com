import { createLocalTranslator } from "@trebired/i18n";

import { APPROACH_POINTS } from "#8lt90xbwt260";
import { useLanguage } from "#a38rcf0jfx82";
import { Shapes } from "#nt3mbgg83wfh";

function Approach() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);

  return (
    <section className="section section--panel" id="approach">
    <Shapes section="approach" />
    <div className="section__inner approach">
    <h2 className="section__title">{translate("title")}</h2>
    {APPROACH_POINTS.map((point) => (
          <p className="section__body" key={point}>
          {translate(`points.${point}`)}
          </p>
    ))}
    </div>
    </section>
  );
}

export { Approach };
