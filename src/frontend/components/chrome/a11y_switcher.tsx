import { AccessibilityMenu } from "@trebired/frontend/react";
import { useId } from "react";
import { useLang } from "./../../shared/lang/use";

export function A11ySwitcher() {
  return (
    <AccessibilityMenu
    id={`${useId().replace(/:/gu, "")}_a11y`}
    lang={useLang()}
    />
  );
}
