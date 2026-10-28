import { Title } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import { Drawing } from "./../../components/primitives/drawing";
import { SectionBand } from "./../../components/sections/band";
import { DRAWINGS } from "./drawings";

export function AboutBand({ translator }: { translator: I18nTranslator }) {
  return (
    <SectionBand archetype="statement" className="tbfm-about" id="about" weight="major">
    <div className="tbfm-about__layout">
    <div className="tbf-column tbf-gap-md">
    <Title className="tbf-text-xl6" level={2}>{translator("about.title")}</Title>
    <p>{translator("about.text")}</p>
    <p>{translator("about.work")}</p>
    </div>
    <Drawing className="tbfm-about__drawing" drawing={DRAWINGS.pen} label={translator("about.drawing")} />
    </div>
    </SectionBand>
  );
}
