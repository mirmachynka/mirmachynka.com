import type {
  FrontendDesignConfig,
  FrontendDesignInteractionsConfig,
  FrontendRuntimeConfig,
  FrontendThemeConfig,
} from "@trebired/frontend/config";

export const theme = {
  dark: "light",
  defaultMode: "light",
  light: "light",
  modes: {
    light: { scheme: "light" },
  },
} satisfies FrontendThemeConfig;

export const interactions = {
  activePress: {
    enabled: true,
  },
} satisfies FrontendDesignInteractionsConfig;

export const semantics = {
  radius: "1.25rem",
  radiusSm: "0.75rem",
  radiusXs: "0.375rem",
  shadow: "0 12px 40px rgba(0, 0, 0, 0.08)",
  heading: {
    fontFamily: "\"Bricolage Grotesque\", \"Helvetica Neue\", Arial, sans-serif",
    fontWeight: "800",
    letterSpacing: "0",
    lineHeight: "0.98",
    textTransform: "none",
  },
  h1: { fontSize: "clamp(2rem, 7vw, 6rem)" },
  h2: { fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)" },
  h3: { fontSize: "clamp(1.4rem, 1.6vw, 1.5rem)" },
  h4: { fontSize: "clamp(1.15rem, 1.4vw, 1.25rem)" },
  h5: { fontSize: "1rem" },
  h6: { fontSize: "0.9rem" },
  selection: {
    bg: "color-mix(in srgb, currentColor 22%, transparent)",
    text: "currentColor",
  },
  transitionFast: "120ms",
} satisfies NonNullable<FrontendDesignConfig["semantics"]>;

export const runtime = {
  theme,
} satisfies FrontendRuntimeConfig;
