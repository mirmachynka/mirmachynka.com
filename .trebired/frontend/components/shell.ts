import { CONTENT_MAX, ui } from "./../tokens";

export const shell = {
  category: { gap: "var(--space-sm)", linksGap: "var(--space-xs2)" },
  footer: {
    columns: { gap: "var(--space-md)", min: "8rem" },
    heading: {
      fontSize: "0.85rem",
      fontWeight: "700",
    },
    inner: { columns: "minmax(0, 4fr) minmax(0, 8fr)", gap: "var(--space-lg)" },
    maxWidth: CONTENT_MAX,
    root: {
      border: "var(--tbf-border-width, 1px) solid color-mix(in srgb, currentColor 14%, transparent)",
      py: "var(--space-xl)",
    },
    tagline: { max: "24rem" },
  },
  outline: {
    frame: { measure: CONTENT_MAX, offset: "var(--space-xl)" },
  },
  language: {
    trigger: {
      gap: "var(--space-xs)",
      height: "32px",
      padding: "0 10px",
      radius: ui.controlRadius,
    },
  },
  header: {
    actionsGap: "var(--space-sm)",
    brand: {
      button: { radius: "0.5rem" },
    },
    maxWidth: CONTENT_MAX,
    navGap: "var(--space-md)",
    menu: {
      border: "0",
      gap: "var(--space-sm)",
      groupIndent: "var(--space-sm)",
      linksGap: "var(--space-xs2)",
      py: "var(--space-sm)",
    },
    root: {
      border: "1px solid color-mix(in srgb, currentColor 14%, transparent)",
      position: "fixed",
      zIndex: "50",
    },
    toggle: { offset: "0" },
    tone: { follow: "band" },
  },
};
