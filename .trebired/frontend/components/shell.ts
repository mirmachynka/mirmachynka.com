export const shell = {
  header: {
    brand: {
      color: "var(--ink-color)",
      fontFamily: "var(--tbf-font-family-display), Georgia, sans-serif",
      fontSize: "clamp(22px, 2.8vw, 30px)",
      fontWeight: "700",
      hoverOpacity: "0.7",
      letterSpacing: "-0.02em",
    },
    gap: "var(--space-sm)",
    height: "auto",
    maxWidth: "var(--site-line-max)",
    paddingBlock: "var(--space-sm)",
    paddingInline: "var(--site-gutter)",
    root: {
      backdropFilter: "blur(18px) saturate(140%)",
      background: "color-mix(in srgb, var(--background-page) 62%, transparent)",
      border: "1px solid var(--border-surface-1)",
      position: "fixed",
      zIndex: "50",
    },
  },
};
