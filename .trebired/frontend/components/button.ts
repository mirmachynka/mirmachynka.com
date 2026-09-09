import type { FrontendSurfaceComponentsConfig } from "@trebired/frontend/config";

import { ACCENT, ACCENT_INK, INK, WHITE } from "#zjkz301x5o9k";

export const button = {
  root: {
    fontSize: "16px",
    fontWeight: 700,
    gap: "8px",
    minHeight: "48px",
    padding: "12px 24px",
    radius: "999px",
  },
  sizes: {
    sm: {
      fontSize: "14px",
      height: "40px",
      px: "16px",
    },
  },
  tones: {
    accent: {
      background: ACCENT,
      borderColor: ACCENT,
      color: ACCENT_INK,
      states: {
        hover: {
          background: INK,
          borderColor: INK,
          color: WHITE,
        },
      },
    },
    chip: {
      background: "transparent",
      borderColor: "var(--border-surface-1)",
      color: "var(--ink-color)",
      states: {
        hover: {
          background: "var(--mist-color)",
          borderColor: "var(--ink-color)",
          color: "var(--ink-color)",
        },
      },
    },
    outline: {
      background: "transparent",
      borderColor: "var(--border-surface-1)",
      color: "var(--ink-color)",
      states: {
        hover: {
          background: INK,
          borderColor: INK,
          color: WHITE,
        },
      },
    },
    solid: {
      background: INK,
      borderColor: INK,
      color: WHITE,
      states: {
        hover: {
          background: ACCENT,
          borderColor: ACCENT,
          color: ACCENT_INK,
        },
      },
    },
  },
} satisfies NonNullable<FrontendSurfaceComponentsConfig["button"]>;

export const card = {
  root: {
    background: "var(--background-surface-2)",
    borderColor: "var(--border-surface-1)",
    radius: "var(--radius-lg)",
  },
  states: {
    hover: {
      borderColor: ACCENT,
    },
  },
} satisfies NonNullable<FrontendSurfaceComponentsConfig["card"]>;
