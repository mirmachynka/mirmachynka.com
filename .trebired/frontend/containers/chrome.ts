import { CONTENT_MAX, token } from "./../tokens";

import type { FrontendContainer } from "@trebired/frontend/config";

const REVEAL_EASE = token.css `${token.frontend("reveal-duration", "0.55s")} ${token.frontend("reveal-easing", "cubic-bezier(0.22, 0.61, 0.36, 1)")}`;

const HOVER_EASE = "0.3s ease";

const MOVE = token.css `opacity ${REVEAL_EASE}, translate ${REVEAL_EASE}`;

const PAINT = `background-color ${HOVER_EASE}, border-color ${HOVER_EASE}, outline-color ${HOVER_EASE}, color ${HOVER_EASE}`;

const REVEALED = token.css `${MOVE}, ${PAINT}`;

const siteApp: FrontendContainer = {
  on: {
    "& :is(.tbfm-figure, .tbfm-card)[data-tbf-reveal]": { transition: REVEALED },
    "& :where(p)": { color: "color-mix(in srgb, currentcolor 78%, transparent)", lineHeight: "1.75", textWrap: "pretty" },
    "& :where(ul:not([class]), ol:not([class]))": {
      display: "grid",
      gap: token.variable("space-xs"),
      lineHeight: "1.75",
      paddingInlineStart: "0",
    },
    "& [data-page]": { "--tbf-ui-link-root-decoration-line": "underline", display: "grid", gridTemplateColumns: "minmax(0, 1fr)" },
    "& [data-page] > *": { minWidth: "0" },
  },
  style: {
    "--band-max": CONTENT_MAX,
    "--font-sans": "\"IBM Plex Sans\", \"Helvetica Neue\", Arial, sans-serif",
    "--font-title": "\"Bricolage Grotesque\", \"Helvetica Neue\", Arial, sans-serif",
    "--section-inset-major": token.variable("space-xl3"),
    "--section-inset-minor": token.variable("space-xl"),
    "--text-size-xl2": "clamp(1.5rem, 2.4vw, 2rem)",
    "--text-size-xl3": "clamp(1.75rem, 3.2vw, 2.5rem)",
    "--text-size-xl4": "clamp(2rem, 4.4vw, 3.5rem)",
    "--text-size-xl5": "clamp(2.25rem, 5.6vw, 4.5rem)",
    "--text-size-xl6": "clamp(2.4rem, 6.4vw, 6.8rem)",
    "--text-size-xl7": "clamp(3.2rem, 12vw, 13rem)",
    "--tbf-font-mono": "\"IBM Plex Sans\", \"Helvetica Neue\", Arial, sans-serif",
    "--title-letter-spacing": "0",
    "--title-line-height-min": "0",
    "--title-text-transform": "none",
    "--title-weight": "800",
    fontFamily: token.variable("font-sans"),
    lineHeight: "1.5",
    textRendering: "optimizeLegibility",
  },
};

const headerLogo: FrontendContainer = {
  at: {
    md: {
      "--tbf-surf-logo-root-height": "calc(var(--site-header-logo-height, 1.95rem) * 1.15)",
      "--tbf-surf-logo-root-max": "calc(100vw - 6.5rem)",
    },
  },
  style: {
    "--tbf-surf-logo-root-height": "calc(var(--site-header-logo-height, 1.95rem) * 1.15)",
    "--tbf-surf-logo-root-max": "min(var(--site-header-logo-max-width, 14rem) * 1.15, 100vw - 7rem)",
  },
};

const footerLogo: FrontendContainer = {
  style: {
    "--tbf-surf-logo-root-height": token.variable("site-footer-logo-height", "2.2rem"),
    "--tbf-surf-logo-root-max": "min(var(--site-footer-logo-max-width, 20rem), 78vw)",
  },
};

export { footerLogo, headerLogo, siteApp };
