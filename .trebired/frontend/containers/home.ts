import { token } from "./../tokens";

import type { FrontendContainer } from "@trebired/frontend/config";
import { HAIRLINE } from "./tokens";

const HEADER_GAP = token.css `calc(${token.frontend("shell-header-height", "5rem")} + ${token.variable("space-lg")})`;

const BREAKOUT = { inlineSize: "100vw", insetInlineStart: "50%", position: "relative", translate: "-50% 0" };

const opening: FrontendContainer = {
  at: { md: { "--text-size-xl7": "clamp(2.6rem, 16vw, 6rem)" } },
  on: { "& > .tbfm-band__inner": { paddingBlockStart: HEADER_GAP } },
  parts: {
    drawing: { style: { blockSize: "100%", display: "block", inlineSize: "100%", objectFit: "cover", objectPosition: "50% 100%" } },
    lead: {
      at: { md: { gridRow: "auto", maxInlineSize: "none" } },
      style: { gridColumn: "1", gridRow: "2", maxInlineSize: "min(24rem, 32vw)", position: "relative", zIndex: "2" },
    },
    stage: {
      at: { md: { gridTemplateRows: "auto" } },
      on: {
        "& > h1": { gridColumn: "1 / -1", gridRow: "1", paddingBlockStart: "2.4vw", position: "relative", whiteSpace: "nowrap", zIndex: "0" },
      },
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr)",
        gridTemplateRows: "auto auto 1fr",
        rowGap: token.variable("space-md"),
      },
    },
    view: {
      at: { md: { aspectRatio: "1 / 1", gridRow: "auto" }, sm: { aspectRatio: "4 / 5" } },
      style: {
        ...BREAKOUT,
        alignSelf: "end",
        aspectRatio: "2 / 1",
        gridColumn: "1 / -1",
        gridRow: "1 / 4",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: "1",
      },
    },
  },
  style: {
    "--text-size-xl7": "clamp(2.6rem, 8.6vw, 10rem)",
    justifyContent: "flex-end",
    minBlockSize: "100svh",
    overflow: "hidden",
    paddingBlockEnd: "0",
    position: "relative",
  },
};

const PICTURE = { blockSize: "auto", display: "block", inlineSize: "100%" };

const SPLIT = {
  at: { md: { gridTemplateColumns: "minmax(0, 1fr)" } },
  style: { alignItems: "center", columnGap: token.variable("space-xl"), display: "grid", rowGap: token.variable("space-lg") },
};

const founder: FrontendContainer = {
  parts: {
    layout: { ...SPLIT, style: { ...SPLIT.style, gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)" } },
    logo: {
      at: { md: { inlineSize: "min(40%, 9rem)", justifySelf: "start", order: "-1" } },
      style: { ...PICTURE, inlineSize: "min(70%, 20rem)", justifySelf: "center" },
    },
    text: { style: { maxInlineSize: "40rem" } },
  },
};

const about: FrontendContainer = {
  parts: {
    drawing: { style: { ...PICTURE, inlineSize: "min(100%, 38rem)", justifySelf: "end" } },
    page: { style: { alignSelf: "center", display: "grid", gap: token.variable("space-md"), inlineSize: "100%", maxInlineSize: "38rem" } },
  },
};

const approach: FrontendContainer = {
  parts: {
    drawing: { style: { ...PICTURE, blockSize: "100%", objectFit: "cover", objectPosition: "50% 45%" } },
    strip: { at: { md: { aspectRatio: "2 / 1" } }, style: { ...BREAKOUT, aspectRatio: "4 / 1", overflow: "hidden" } },
  },
};

const principles: FrontendContainer = {
  at: { md: { gridTemplateColumns: "minmax(0, 1fr)" } },
  on: { "& > li": { borderBlockStart: HAIRLINE, paddingBlock: token.variable("space-md") } },
  style: {
    columnGap: token.variable("space-xl"),
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    listStyle: "none",
    paddingInlineStart: "0",
  },
};

const contact: FrontendContainer = {
  parts: {
    drawing: { style: PICTURE },
    layout: { ...SPLIT, style: { ...SPLIT.style, gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)" } },
    reach: { style: { alignItems: "center", display: "flex", flexWrap: "wrap", gap: token.variable("space-lg") } },
    social: { style: { display: "flex", fontSize: "1.5rem", gap: token.variable("space-md") } },
  },
};

const nameMark: FrontendContainer = {
  style: {
    fontFamily: token.variable("font-title"),
    fontSize: "1.25rem",
    fontWeight: "800",
    lineHeight: "1",
    whiteSpace: "nowrap",
  },
  variants: { footer: { style: { fontSize: "1.75rem" } } },
};

export { about, approach, contact, founder, nameMark, opening, principles };
