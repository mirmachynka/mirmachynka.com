import { semantic } from "./../tokens";

import { RADIUS } from "./../containers/tokens";

export const surfaces = {
  card: {
    root: {
      background: semantic.surface1,
      border: `1px solid ${semantic.borderSurface1}`,
      minHeight: "0",
      padding: "var(--space-md)",
      radius: RADIUS,
    },
  },
  hairline: { root: { radius: RADIUS } },
};
