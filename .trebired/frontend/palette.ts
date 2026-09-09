import type { FrontendDesignConfig } from "@trebired/frontend/config";

export const ACCENT = "#1b1b1b";
export const ACCENT_INK = "#f7f7f7";
export const ACCENT_LINE = "#3d3d3d";
export const WHITE = "#ffffff";

export const PAGE = "#ffffff";
export const RAISED = "#ffffff";
export const INK = "#0e0e0e";

export const SELECTION_BG = "#1b1b1b";
export const SELECTION_INK = "#ffffff";

export const palette = {
  modes: {
    light: {
      scale: {
        site: {
          accent: ACCENT,
          accent_ink: ACCENT_INK,
          accent_line: ACCENT_LINE,
          body: "#3b3b3b",
          ink: INK,
          ink_soft: "#242424",
          line: "rgba(14, 14, 14, 0.14)",
          mist: "rgba(14, 14, 14, 0.035)",
          muted: "#6a6a6a",
          page: PAGE,
          raised: RAISED,
          selection_bg: SELECTION_BG,
          selection_ink: SELECTION_INK,
          shade: "#f0f0f0",
          stripe: "#f7f7f7",
          shape_1: "#ffd4c9",
          shape_2: "#fdeaad",
          shape_3: "#c3e6d4",
          shape_4: "#cadffb",
          shape_5: "#ded2f7",
          shape_6: "#ffdcb8",
        },
      },
    },
  },
  semantic: {
    "accent-color": { family: "site", step: "accent" },
    "accent-ink-color": { family: "site", step: "accent_ink" },
    "accent-line-color": { family: "site", step: "accent_line" },
    "background-page": { family: "site", step: "page" },
    "background-surface-1": { family: "site", step: "page" },
    "background-surface-2": { family: "site", step: "raised" },
    "border-surface-1": { family: "site", step: "line" },
    "border-surface-2": { family: "site", step: "accent" },
    "focus-color": { family: "site", step: "accent" },
    "ink-color": { family: "site", step: "ink" },
    "ink-soft-color": { family: "site", step: "ink_soft" },
    "mist-color": { family: "site", step: "mist" },
    "scroll-thumb": { family: "site", step: "line" },
    "scroll-thumb-hover": { family: "site", step: "muted" },
    "scroll-track": { family: "site", step: "page" },
    "shade-color": { family: "site", step: "shade" },
    "stripe-color": { family: "site", step: "stripe" },
    "shape-1": { family: "site", step: "shape_1" },
    "shape-2": { family: "site", step: "shape_2" },
    "shape-3": { family: "site", step: "shape_3" },
    "shape-4": { family: "site", step: "shape_4" },
    "shape-5": { family: "site", step: "shape_5" },
    "shape-6": { family: "site", step: "shape_6" },
    "surface-1": { family: "site", step: "page" },
    "surface-2": { family: "site", step: "raised" },
    "text-color": { family: "site", step: "body" },
    "text-color-muted": { family: "site", step: "muted" },
    "selection-bg": { family: "site", step: "selection_bg" },
    "selection-ink": { family: "site", step: "selection_ink" },
  },
} satisfies NonNullable<FrontendDesignConfig["palette"]>;
