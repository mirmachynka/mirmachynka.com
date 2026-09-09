import type { FrontendOverlayComponentsConfig } from "@trebired/frontend/config";

export const popover = {
  item: {
    root: {
      gap: "10px",
      height: "40px",
      padding: "0 12px",
      radius: "var(--radius-sm)",
    },
    states: {
      hover: {
        background: "var(--mist-color)",
        color: "var(--ink-color)",
      },
    },
  },
  panel: {
    background: "var(--background-page)",
    border: "1px solid var(--border-surface-1)",
    color: "var(--text-color-muted)",
    gap: "2px",
    padding: "6px",
    radius: "var(--radius-lg)",
    shadow: "0 18px 40px rgba(24, 24, 24, 0.14)",
  },
} satisfies NonNullable<FrontendOverlayComponentsConfig["popover"]>;

export const overlays = { popover } satisfies FrontendOverlayComponentsConfig;
