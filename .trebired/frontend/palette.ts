const neutral = {
  "0": "oklch(1 0 0)",
  "50": "oklch(0.98 0 0)",
  "100": "oklch(0.97 0 0)",
  "200": "oklch(0.93 0 0)",
  "250": "oklch(0.91 0 0)",
  "300": "oklch(0.89 0 0)",
  "400": "oklch(0.84 0 0)",
  "500": "oklch(0.49 0 0)",
  "600": "oklch(0.45 0 0)",
  "900": "oklch(0.24 0 0)",
};

export const palette = {
  modes: {
    light: {
      scale: {
        aqua: { "500": "#9fe3dc" },
        neutral,
        primary: { "500": "oklch(0.24 0 0)" },
        white: { "500": "oklch(1 0 0)" },
      },
    },
  },
  semantic: {
    accent: { family: "neutral", step: "300" },
    "background-page": { family: "neutral", step: "100" },
    "border-surface-1": { family: "neutral", step: "400" },
    "border-surface-2": { family: "neutral", step: "300" },
    "focus-color": { family: "neutral", step: "900" },
    "surface-1": { family: "neutral", step: "0" },
    "surface-2": { family: "neutral", step: "200" },
    "text-color": { family: "neutral", step: "900" },
    "text-color-muted": { family: "neutral", step: "500" },
  },
};
