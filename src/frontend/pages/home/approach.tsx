import { Title } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import { Drawing } from "./../../components/primitives/drawing";
import { SectionBand } from "./../../components/sections/band";
import { DRAWINGS } from "./drawings";

const POINTS = ["need", "gate", "comments", "layer", "linux", "after"];

export function ApproachBand({ translator }: { translator: I18nTranslator }) {
  return (
    <SectionBand archetype="statement" className="tbfm-approach" id="approach" weight="major">
    <div className="tbfm-approach__strip">
    <Drawing className="tbfm-approach__drawing" drawing={DRAWINGS.server} label={translator("approach.drawing")} />
    </div>
    <Title className="tbf-text-xl6" level={2}>{translator("approach.title")}</Title>
    <ul className="tbfm-principles">
    {POINTS.map((point) => <li key={point}><p>{translator(`approach.points.${point}`)}</p></li>)}
    </ul>
    </SectionBand>
  );
}
