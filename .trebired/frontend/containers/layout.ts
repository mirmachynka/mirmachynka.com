import { token } from "./../tokens";

import type { FrontendContainer } from "@trebired/frontend/config";
import { HAIRLINE, INK, PAGE, RADIUS, TEXT } from "./tokens";

const MUTED = token.colorMix(token.frontend("surface-muted"), "45%", PAGE);

const band: FrontendContainer = {
  on: {
    "& :where(p)": { maxWidth: "44rem" },
    "& .tbf-button": { position: "relative", zIndex: "1" },
    "&:nth-child(even of .tbfm-band):not(.tbfm-band--inverse)": { background: MUTED },
  },
  parts: {
    inner: {
      style: {
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        width: token.css `min(${token.variable("band-max")}, 100%)`,
      },
    },
  },
  style: {
    alignItems: "center",
    background: PAGE,
    color: TEXT,
    display: "flex",
    flexDirection: "column",
    paddingBlock: token.variable("section-inset-minor"),
    paddingInline: token.frontend("container-px"),
  },
  variants: {
    call: {
      on: { "& > .tbfm-band__inner": { alignItems: "center" } },
    },
    inverse: {
      style: {
        "--tbf-ui-btn-variants-primary-bg": "oklch(0.97 0 0)",
        "--tbf-ui-btn-variants-primary-color": "oklch(0.15 0 0)",
        "--tbf-ui-btn-variants-primary-state-hover-bg": "oklch(0.88 0 0)",
        "--tbf-ui-btn-variants-primary-state-hover-color": "oklch(0.15 0 0)",
        background: INK,
      },
      tone: "dark",
    },
    major: {
      style: { paddingBlock: token.variable("section-inset-major") },
    },
    muted: {
      style: { background: MUTED },
    },
  },
};

const card: FrontendContainer = {
  on: {
    "&[data-interactive]:hover": { background: token.frontend("surface-muted"), borderColor: token.frontend("focus") },
  },
  style: {
    background: PAGE,
    border: HAIRLINE,
    borderRadius: RADIUS,
    boxSizing: "border-box",
    color: TEXT,
    minWidth: "0",
    padding: token.gap("md"),
    textDecoration: "none",
    transition: "border-color 0.25s ease, background-color 0.25s ease, color 0.25s ease",
  },
  tone: "light",
};

const cell: FrontendContainer = {
  at: { md: { "--cell-term": "1.5rem" } },
  on: {
    "& code": {
      fontFamily: token.variable("font-sans"),
      fontSize: "1.05rem",
      fontWeight: "600",
    },
    "& dd": { color: token.frontend("text-muted"), fontSize: "0.85rem" },
    "& dt": {
      fontFamily: token.variable("font-title"),
      fontSize: token.variable("cell-term", "1.875rem"),
      fontWeight: token.variable("title-weight"),
      letterSpacing: token.variable("title-letter-spacing"),
      textTransform: token.variable("title-text-transform"),
    },
    "& pre": {
      borderTop: HAIRLINE,
      color: token.frontend("text-muted"),
      fontFamily: token.variable("font-sans"),
      fontSize: "12.5px",
      lineHeight: "1.75",
      maxHeight: "34rem",
      overflowWrap: "break-word",
      overflowY: "auto",
      paddingTop: token.variable("space-md"),
      whiteSpace: "pre-wrap",
    },
    "& pre:has(code)": {
      background: token.frontend("ink", "#000"),
      borderRadius: RADIUS,
      borderTop: "0",
      color: token.frontend("page"),
      fontSize: "0.82rem",
      lineHeight: "1.65",
      maxHeight: "none",
      overflowX: "auto",
      padding: "1rem",
    },
    "& small": { fontSize: "0.85rem", lineHeight: "1.65", opacity: "0.55" },
    "[data-interactive]:hover": {
      background: INK,
      color: PAGE,
    },
  },
  style: {
    alignContent: "start",
    background: PAGE,
    display: "grid",
    gap: token.gap("sm"),
    minWidth: "0",
    padding: token.gap("md"),
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
  tone: "light",
  variants: {
    center: { style: { justifyItems: "center", textAlign: "center" } },
    foot: { style: { paddingTop: "0" } },
    head: { style: { paddingBottom: "0" } },
  },
};

const panel: FrontendContainer = {
  style: {
    background: token.frontend("border"),
    border: HAIRLINE,
    borderRadius: RADIUS,
    display: "grid",
    gap: token.variable("border-width", "1px"),
    gridTemplateColumns: token.css `repeat(auto-fit, minmax(min(${token.variable("panel-min", "16rem")}, 100%), 1fr))`,
    listStyle: "none",
    overflow: "hidden",
    paddingInlineStart: "0",
  },
};

const row: FrontendContainer = {
  on: { "& + .tbfm-row": { borderTop: HAIRLINE } },
  style: {
    alignItems: "center",
    display: "flex",
    gap: token.gap("sm"),
    minWidth: "0",
    padding: token.css `${token.gap("sm")} 0`,
  },
};

const frame: FrontendContainer = {
  style: {
    aspectRatio: token.variable("frame-ratio", "4 / 3"),
    background: token.frontend("surface-muted"),
    borderRadius: RADIUS,
    display: "block",
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },
};

const chapter: FrontendContainer = {
  on: {
    "& :where(p)": { maxWidth: "44rem" },
  },
  style: {
    background: PAGE,
    color: TEXT,
    paddingBlock: token.variable("space-xl"),
  },
  variants: {
    muted: {
      style: { background: token.colorMix(token.frontend("surface-muted"), "45%", PAGE) },
    },
  },
};

export { band, card, cell, chapter, frame, panel, row };
