import type { FrontendComponentsConfig } from "@trebired/frontend/config";

import { button, card } from "./button";
import { input } from "./input";
import { overlays } from "./overlays";
import { shell } from "./shell";

export const components = {
  overlays,
  primitives: { input },
  shell,
  surfaces: { button, card },
} satisfies FrontendComponentsConfig;
