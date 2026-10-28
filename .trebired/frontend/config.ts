import { defineConfig, siteSocialIconSpecs } from "@trebired/frontend/config";

import { components } from "./components";
import { containers } from "./containers";
import { language } from "./language";
import { links } from "./links";
import { palette } from "./palette";
import { systems } from "./systems";
import { interactions, runtime, semantics } from "./theme";
import { breakpoints } from "./typography";

export default defineConfig({
    forVersion: "29.2.0",
    containers,
    links,
    assets: {
      favicon: {
        default: "src/brand/favicon.svg",
        light: "src/brand/favicon.svg",
        dark: "src/brand/favicon.svg",
      },
      flags: {
        countries: ["cz", "gb"],
      },
      icons: {
        mode: "static",
        specs: [
          "remixicon:arrow-down-s-line",
          "remixicon:arrow-right-line",
          "remixicon:arrow-right-s-line",
          "remixicon:check-line",
          "remixicon:close-line",
          "remixicon:external-link-line",
          "remixicon:mail-line",
          "remixicon:translate-2",
          "remixicon:wheelchair-line",
          "remixicon:instagram-line",
          ...siteSocialIconSpecs(["github", "linkedin", "x"]),
        ],
      },
      fonts: {
        families: {
          bricolage: {
            package: "bricolage-grotesque",
            family: "Bricolage Grotesque",
            subsets: ["latin", "latin-ext"],
            weights: [700, 800],
          },
          plexSans: {
            package: "ibm-plex-sans",
            family: "IBM Plex Sans",
            subsets: ["latin", "latin-ext"],
            weights: [400, 500, 600, 700],
          },
        },
        sans: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif',
      },
    },
    components,
    language,
    design: {
      breakpoints,
      glass: { tint: "light" },
      titles: { fit: { below: "md" } },
      interactions,
      palette,
      scales: {
        spacing: { lg: 40, md: 24, sm: 12, xl: 56, xl2: 72, xl3: 96, xs: 8, xs2: 4 },
        textBody: "lg",
        textSize: { lg: 20, md: 16, sm: 14, xl: 24, xl2: 32, xl3: 40, xl4: 56, xl5: 72, xl6: 108, xl7: 208, xs: 12 },
      },
      scrollBehavior: "smooth",
      semantics,
    },
    runtime,
    systems,
});
