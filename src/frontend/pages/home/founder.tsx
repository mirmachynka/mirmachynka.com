import { button as PrimitiveButton, Icon, Title } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import { Drawing } from "./../../components/primitives/drawing";
import { SectionBand } from "./../../components/sections/band";
import { identity } from "./../../shared/identity";
import { ORGANIZATION_LOGO } from "./drawings";

export function FounderBand({ translator }: { translator: I18nTranslator }) {
  return (
    <SectionBand archetype="statement" className="tbfm-founder" id="trebired" tone="inverse" weight="major">
    <div className="tbfm-founder__layout">
    <Drawing className="tbfm-founder__logo" drawing={ORGANIZATION_LOGO} label={identity.organizationName} />
    <div className="tbfm-founder__text tbf-column tbf-gap-md">
    <Title className="tbf-text-xl6" level={2}>{translator("founder.title")}</Title>
    <p>{translator("founder.text")}</p>
    <p>{translator("founder.origin")}</p>
    <div className="tbf-inline-row tbf-hor-right">
    <PrimitiveButton href={identity.organizationWebsite} rel="noreferrer" target="_blank" variant="primary">
    {translator("founder.action")}
    <Icon spec="remixicon:external-link-line" />
    </PrimitiveButton>
    </div>
    </div>
    </div>
    </SectionBand>
  );
}
