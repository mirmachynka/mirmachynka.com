import type {
  FrontendDesignInteractionsConfig,
  FrontendRuntimeConfig,
  FrontendThemeConfig,
} from "@trebired/frontend/config";

import { ACCENT } from "#zjkz301x5o9k";

export const theme = {
  dark: "light",
  defaultMode: "light",
  light: "light",
  modes: {
    light: { label: "Light", scheme: "light" },
  },
} satisfies FrontendThemeConfig;

export const interactions = {
  activePress: {
    brightness: 0.95,
    enabled: true,
  },
} satisfies FrontendDesignInteractionsConfig;

export const runtime = {
  progress: {
    color: ACCENT,
    height: "3px",
  },
  theme,
} satisfies FrontendRuntimeConfig;
