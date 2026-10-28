import { semantic } from "./../tokens";

export const typography = {
  container: {
    px: {
      base: "2rem",
      lg: "1.6rem",
      sm: "1.15rem",
    },
  },
  outline: {
    color: semantic.textColor,
    width: "clamp(3px, 0.6vw, 10px)",
  },
};
