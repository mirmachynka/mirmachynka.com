import { createFrontendTokenHelpers } from "@trebired/frontend/config";

import { palette } from "./palette";

const token = createFrontendTokenHelpers(palette);

const semantic = {
  accent: token.semantic("accent"),
  backgroundPage: token.semantic("background-page"),
  borderSurface1: token.semantic("border-surface-1"),
  borderSurface2: token.semantic("border-surface-2"),
  highlight: token.semantic("accent"),
  surface1: token.semantic("surface-1"),
  surface2: token.semantic("surface-2"),
  textColor: token.semantic("text-color"),
  textMuted: token.semantic("text-color-muted"),
};

const purple = {
  deep: token.colorMix(token.color("purple", "500"), "82%", semantic.textColor),
  fill: token.colorMix(token.color("purple", "500"), "95%", semantic.textColor),
  root: token.color("purple", "500"),
};

const shade = token.color("neutral", "250");

const ui = {
  controlRadius: "999px",
  iconControlRadius: "999px",
  fontSans: token.variable("tbf-font-sans", "Geist, sans-serif"),
};

const CONTENT_MAX = "110rem";

export { CONTENT_MAX, purple, semantic, shade, token, ui };
