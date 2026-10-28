import { semantic, token } from "./../tokens";

const RADIUS = "1.5rem";

const HAIRLINE = token.border(semantic.borderSurface1);

const PAGE = token.frontend("page");

const INK = token.frontend("ink", "#000");

const TEXT = token.frontend("text");

export { HAIRLINE, INK, PAGE, RADIUS, TEXT };
