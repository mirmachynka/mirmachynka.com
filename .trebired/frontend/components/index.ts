import type { FrontendComponentsConfig } from "@trebired/frontend/config";

import { button, card } from "./button";
import { input } from "./input";
import { overlays } from "./overlays";

export const components = {
  overlays,
  primitives: { input },
  surfaces: { button, card },
} satisfies FrontendComponentsConfig;
