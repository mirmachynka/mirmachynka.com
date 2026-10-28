import { Title } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import { SectionBand } from "./../../components/sections/band";
import { Drawing } from "./../../components/primitives/drawing";
import { DRAWINGS } from "./drawings";

export function OpeningBand({ translator }: { translator: I18nTranslator }) {
  return (
    <SectionBand archetype="statement" className="tbfm-opening" weight="major">
    <div className="tbfm-opening__stage">
    <Title className="tbf-text-xl7" level={1}>{translator("opening.title")}</Title>
    <p className="tbfm-opening__lead">{translator("opening.lead")}</p>
    <div className="tbfm-opening__view">
    <Drawing className="tbfm-opening__drawing" drawing={DRAWINGS.brno} label={translator("opening.skyline")} lazy={false} />
    </div>
    </div>
    </SectionBand>
  );
}
