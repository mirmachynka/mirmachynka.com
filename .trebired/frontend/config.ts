import { defineConfig } from "@trebired/frontend/config";

import { ALL_ICON_SPECS } from "#0ecwvk1k07fy";
import { components } from "./components";
import { palette } from "./palette";
import { scales } from "./scales";
import { systems } from "./systems";
import { interactions, runtime } from "./theme";
import { typography } from "./typography";

export default defineConfig({
    forVersion: "13.1.0",
    assets: {
      favicon: "src/brand/favicon.svg",
      flags: {
        countries: ["CZ", "GB"],
        ratio: "3x2",
      },
      fonts: {
        families: {
          display: {
            display: "swap",
            family: "Bricolage Grotesque",
            fontsource: "bricolage-grotesque",
            styles: ["normal"],
            subsets: ["latin", "latin-ext"],
            weights: [400, 600, 700, 800],
          },
          mono: {
            display: "swap",
            family: "JetBrains Mono",
            fontsource: "jetbrains-mono",
            styles: ["normal"],
            subsets: ["latin", "latin-ext"],
            weights: [400, 700],
          },
          text: {
            display: "swap",
            family: "Inter",
            fontsource: "inter",
            styles: ["normal"],
            subsets: ["latin", "latin-ext"],
            weights: [400, 500, 700],
          },
        },
        sans: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
      },
      icons: {
        endpoint: false,
        mode: "static",
        packs: ["remixicon"],
        specs: ALL_ICON_SPECS,
      },
    },
    components: { ...components, typography },
    design: {
      interactions,
      palette,
      scales,
      scrollBehavior: "smooth",
    },
    runtime,
    systems,
});
