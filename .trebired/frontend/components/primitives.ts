import type { FrontendPrimitiveComponentsConfig } from "@trebired/frontend/config";

import { purple, semantic, ui } from "./../tokens";

export const primitives = {
  button: {
    root: {
      border: "1px solid transparent",
      fontSize: "0.9rem",
      fontWeight: "700",
      gap: "var(--space-xs)",
      height: "2.75rem",
      padding: "0 1.2rem",
      radius: ui.controlRadius,
      width: "fit-content",
      transition: "color var(--tbf-tone-change), background-color 0.3s ease, border-color 0.3s ease",
      whiteSpace: "nowrap",
    },
    sizes: {
      lg: { fontSize: "0.9rem", height: "3rem", px: "1.75rem" },
      md: { fontSize: "0.9rem", height: "2.75rem", px: "1.2rem" },
      sm: { fontSize: "0.875rem", height: "2.45rem", px: "1.1rem" },
    },
    slots: {
      icon: { radius: ui.iconControlRadius },
    },
    variants: {
      ghost: {
        bg: "transparent",
        border: "transparent",
        state: {
          hover: {
            bg: semantic.surface2,
            border: "transparent",
          },
        },
      },
      primary: {
        bg: purple.fill,
        border: "transparent",
        color: semantic.surface1,
        state: {
          hover: {
            bg: purple.deep,
            border: "transparent",
            color: semantic.surface1,
          },
        },
      },
      secondary: {
        bg: "transparent",
        state: {
          hover: {
            bg: "color-mix(in srgb, currentColor 6%, transparent)",
          },
        },
      },
    },
  },
  choice: {
    checked: { border: "color-mix(in srgb, currentColor 24%, transparent)" },
  },
  input: {
    root: {
      bg: "transparent",
      border: "1px solid color-mix(in srgb, currentColor 14%, transparent)",
    },
  },
  marquee: {
    item: { gap: "var(--space-md)" },
    root: {
      bg: semantic.textColor,
      border: "1px",
      color: semantic.backgroundPage,
      py: "1.1rem",
    },
    separator: { fontSize: "1.35em", opacity: "0.5" },
  },
  pill: {
    root: {
      bg: "transparent",
      fontSize: "0.9375rem",
      padding: "0.45rem 0.9rem",
      radius: ui.controlRadius,
    },
  },
  tabs: {
    root: { radius: ui.controlRadius },
  },
  textLink: {
    root: {
      color: "currentColor",
      decorationColor: purple.root,
      decorationLine: "none",
      decorationThickness: "max(2px, 0.1em)",
      decorationUnderlineOffset: "max(3px, 0.16em)",
      fontWeight: "500",
      underlineHeight: "0px",
    },
    state: {
      hover: { color: "currentColor", decorationColor: purple.deep, decorationLine: "underline" },
    },
  },
} satisfies FrontendPrimitiveComponentsConfig;
