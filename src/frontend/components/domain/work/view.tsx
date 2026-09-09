import { createLocalTranslator } from "@trebired/i18n";

import { WORK_ITEMS } from "#8lt90xbwt260";
import { useLanguage } from "#a38rcf0jfx82";
import { Shapes } from "#nt3mbgg83wfh";

function Work() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);

  return (
    <section className="section section--panel section--work" id="work">
    <Shapes section="work" />
    <div className="section__inner work">
    {WORK_ITEMS.map((item) => (
          <article className="work__item" key={item}>
          <h2 className="section__title">{translate(`items.${item}.title`)}</h2>
          <p className="section__body">{translate(`items.${item}.note`)}</p>
          </article>
    ))}
    </div>
    </section>
  );
}

export { Work };
