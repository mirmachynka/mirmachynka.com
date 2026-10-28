import { token } from "./../tokens";

import type { FrontendContainer } from "@trebired/frontend/config";
import { HAIRLINE, PAGE, TEXT } from "./tokens";

const band: FrontendContainer = {
  on: {
    "& :where(p)": { maxWidth: "44rem" },
    "& .tbf-button": { position: "relative", zIndex: "1" },
    "& + .tbfm-band": { borderBlockStart: HAIRLINE },
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
    major: {
      style: { paddingBlock: token.variable("section-inset-major") },
    },
  },
};

export { band };
