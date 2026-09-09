import type { FrontendPrimitiveComponentsConfig } from "@trebired/frontend/config";

export const input = {
  root: {
    fontSize: "16px",
    padding: "12px 16px",
  },
  sizes: {
    lg: {
      fontSize: "16px",
      height: "48px",
      padding: "12px 16px",
    },
  },
} satisfies NonNullable<FrontendPrimitiveComponentsConfig["input"]>;
