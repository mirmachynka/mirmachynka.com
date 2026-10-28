import type { FrontendOverlayComponentsConfig } from "@trebired/frontend/config";

export const overlays = {
  popover: {
    item: {
      root: {
        gap: "var(--space-sm)",
        padding: "0.5rem 0.65rem",
        radius: "0.65rem",
      },
      state: {
        hover: {
          bg: "color-mix(in srgb, currentColor 10%, transparent)",
        },
        selected: {
          bg: "transparent",
        },
      },
    },
    panel: {
      border: "0",
      minW: "14rem",
      gap: "var(--space-xs2)",
      padding: "var(--space-xs2)",
      radius: "1rem",
      shadow: "var(--tbf-shadow)",
    },
  },
} satisfies FrontendOverlayComponentsConfig;
