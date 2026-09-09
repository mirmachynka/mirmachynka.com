import type { FrontendComponentsConfig } from "@trebired/frontend/config";

export const typography = {
  container: {
    px: {
      base: "32px",
      md: "24px",
      sm: "16px",
    },
  },
} satisfies NonNullable<FrontendComponentsConfig["typography"]>;
