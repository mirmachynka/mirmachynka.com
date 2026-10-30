# Changelog

All notable changes to `mirmachynka-com` will be documented here.

This project follows semantic versioning once published.

## 3.1.4

- Updated `@trebired/frontend` to 29.6.0 and `@trebired/bundler` to 5.19.0. Pages preload only the fonts their first screen uses, IBM Plex Sans 400 and 700 and Bricolage Grotesque 800, instead of every declared weight, so a first visit fetches fewer font files up front and the browser no longer reports unused preloads.

## 3.1.3

- Updated `@trebired/frontend` to 29.5.2. A removed frame is logged as one short line, such as `Removed tbf-unverified iframe#id "Title"`, instead of the whole element.

## 3.1.2

- Updated `@trebired/frontend` to 29.5.1. A frame a script appends to the page while it is still loading is now removed as well, not only hidden.

## 3.1.1

- Updated `@trebired/frontend` to 29.5.0. A frame the site did not declare, such as one a script adds to the page after it loads, is removed before it shows and reported in the browser console.

## 3.1.0

- Added "Made by Trebired" at the end of the footer ("Vytvořil Trebired" in Czech), with "Trebired" linking to trebired.com in a new tab, through `@trebired/frontend` 29.4.0.
- Fixed text link underlines looking twice as thick in the footer as in the header. The underline is at least 2px thick and 3px below the text, so links at 14px and 16px render the same, and large links still scale.

## 3.0.3

- Moved the page onto `createSitePages` from `@trebired/frontend` 29.3.0, which prerenders it, hydrates it and renders the error pages, in place of the site's own content island.
- Fixed `og:locale` and `og:locale:alternate` naming only the language. They name its country too (`en_GB`, `cs_CZ`), through `@trebired/seo` 0.7.0.
- Fixed the footer and accessibility dialog headings skipping levels in the page outline, through `@trebired/frontend` 29.3.0.

## 3.0.2

- Changed the Trebired logo beside the Trebired story to the colour of the text instead of the logo's own black.
- Changed the Trebired band to the same structure as contact: the text first, the logo after it, on the right on a wide screen and under the text on a phone.

## 3.0.1

- Changed the accent from aqua to `#946e93`, the purple the trebired.com landing page leads with, for link underlines, the active header link and focus rings. Buttons are filled with it mixed with 5 % of the text ink, so their white labels stay readable.
- Changed the social card to set the name, the motto and the pen larger, so they fill the card, and to underline the motto in the same purple.

## 3.0.0

- Changed the Trebired logo in the Trebired band to a larger size, on a phone as well.
- Changed the opening statement to describe Miroslav Machynka himself instead of Trebired, and set it in a wider column.
- Changed the name in the header to a larger size, a step smaller on the narrowest phones.
- Fixed the page scrolling sideways until the working principles came into view. Their drawing reached the full width with a shift that the reveal animation overrode until it ran; it now reaches it by its position.
- Changed the about section to two columns, the text on the left and the drawing of the pen on the right.
- Changed the look of the site to its own: light paper sections separated by hairline rules instead of alternating dark and grey bands, with the header, the opening and the footer on a light grey, the Trebired logo in black, and pill-shaped buttons and controls.
- Added one colour, `#9fe3dc`, the aqua the Trebired logo is printed in on the trebired.com blog, for filled buttons and link underlines. Text stays dark, so it reads on the light paper, and focus rings are dark ink. The language menu shows its flags again.
- Changed the favicon to a lowercase `mm` inside a hand-drawn ring, ink on paper.
- Changed the social card to the name and the motto "Built to outlast me.", underlined in aqua by a hand-drawn fountain pen traced from a photograph.
- Changed the drawing beside contact to a rotary dial telephone.
- Changed the drawing above the working principles to the front of a single rack server, in place of a server pulled out on its rails.

## 2.0.0

- Migrated the site to `@trebired/frontend` 29, `@trebired/bundler` 5.18, `@trebired/seo` 0.6, `@trebired/i18n` 0.7, `@trebired/startup` 0.8 and `@trebired/utils` 0.9, with the containers, links and language config those releases expect.
- Changed the page to say openly that Miroslav Machynka founded Trebired, with its own band about the organization and a link to trebired.com.
- Changed the sections to the opening, Trebired, about, how I work and contact. The work list was removed; project enquiries go to Trebired.
- Changed the opening to its own composition: the name runs across the page as one line, with the spires of the Cathedral of St Peter and Paul rising through it, and a short statement in the sky under the name. On a phone the drawing becomes a portrait crop around the cathedral.
- Added Rough.js drawings traced at build time from photographs by `@trebired/overprint/sketch`: Brno in the opening, a fountain pen ending the about page, a rack server across the working principles and a door with a letter slot beside contact.
- Added the minimal Trebired logo to the Trebired band, fetched at build time from Trebired/meta.
- Changed every section to a composition of its own: a split band for Trebired, a single narrow page for about, a drawn strip over two columns of principles, and contact set beside its drawing.
- Changed every title to plain type, without outlined words.
- Changed the site to the greys of the drawings: no colour anywhere, a language menu without flags, and text links with a plain underline in the page and on hover in the header and footer.
- Added header links to every section and a footer carrying the social profiles.
- Added structured data naming him as the founder of Trebired, a social card and an SEO audit that stops the build on an error.
- Removed the `build:client` script, which ran the same command as `build`.

## 1.3.1

- Moved to `@trebired/frontend` 13.11.1, which changes the graph cards this site does not use. The header is unchanged.

## 1.3.0

- The header bar is 5rem tall, the height `@trebired/frontend` 13.9.0 fixes for every site. It was as tall as the name inside it. The name keeps its own type size, which still grows with the window.

## 1.2.1

- Moved to `@trebired/frontend` 13.8.1, which fixes the site header menu toggle at one size. This site has no navigation links and so no toggle; nothing here changes.

## 1.2.0

- The header comes from `SiteHeader` in `@trebired/frontend` 13.8.0 instead of this repository, with its fixed translucent bar, the name and the language menu described as tokens and props. It has no navigation links, so it still shows no menu toggle and keeps the language menu visible on a phone.

## 1.1.1

- The language menu takes each language's name from `languageName` in `@trebired/frontend` 13.7.0, which names a language in that language (Čeština, English). The menu read the same before; a language added later is now named correctly without a hand-written label.
- Moved to `@trebired/logger` 3.0.0. It saves logs to SQLite and needs Bun to save them; this site logs to the console only, so nothing else changes.

## 1.1.0

- Switching language no longer reloads or changes the URL. Changing language used to navigate to `/cs`. The language menu now re-renders the page in place, and the saved language is shown before the application bundle runs. Built on `@trebired/frontend` 13.1.2.
- The `/cs` page remains for search engines only, so both languages stay indexed with `hreflang`. Visitors are never sent there; someone arriving from a search result sees their saved language if they have one.

## 1.0.5

- Removed the `frontend ready` boot log from the client entry. It was an application log line duplicated across sites for a milestone the framework does not report, so it told a visitor's console nothing the site owns.

## 1.0.4

- Added `netlify.toml` declaring `bun run build` and `dist` as the publish directory. The host had no build settings, so it ran no build and published the repository root: every URL returned the host's 404 page while the deploy reported success, and the source tree was served publicly.

## 1.0.3

- Corrected the CONTRIBUTING claim that `.trebired/code-discipline/generated/tsconfig.paths.json` is generated on clone. It is committed, as in every Trebired repo, so `tsc` resolves the alias imports with no build step.

## 1.0.2

- Moved the build output directory into `.trebired/bundler/config.ts` as `build.clientOutDir`. It was a constant in `src/bin/frontend/build.ts`, so the one value a deploy depends on lived in code rather than in the package config that owns build output.
- Moved the dev server's client and public directories onto the same resolved config instead of the `CLIENT_OUT_DIR` and `PUBLIC_DIR` constants in `src/bin/dev.ts`. `PUBLIC_DIR` still named `src/frontend/public`, which no longer exists.

## 1.0.1

- Changed the build output directory from `dist/client` to `dist`. A frontend-only application has no second build target, so the extra `client` level named a distinction that does not exist and made the deploy path differ from every other Trebired frontend-only site. Deploy `dist`.
- Removed the `frontend.publicDir` entry from `.trebired/bundler/config.ts`. It still pointed at `src/frontend/public`, which no longer exists.

## 1.0.0

- Added the site: five sections (opening, work, about, how I work, contact) rendered once per locale and deployed as static files.
- Added locale-prefixed routing. English is served at `/` and Czech at `/cs`, each as its own prerendered document with its own `<html lang>`, title, description, canonical URL, and `hreflang` set, so both locales are separately indexable. `@trebired/frontend` owns the boot script that resolves the visitor's locale before first paint and the `LocaleProvider` that keeps the server render and hydration in agreement.
- Added `@trebired/seo` for canonical URLs, `hreflang` alternates, Open Graph and Twitter tags, JSON-LD, `robots.txt`, and `sitemap.xml`.
- Added the brand mark as a single `src/brand/favicon.svg`, a lowercase `mm` in Bricolage Grotesque over a hand-drawn hatched square. `@trebired/frontend` rasterizes it at build time into `favicon.ico`, `apple-touch-icon.png`, and the PNG sizes, and writes nothing back into the repository.
- Added hand-drawn section shapes generated with Rough.js from declared seeds, so every shape is drawn its own way and the server and browser produce identical output.
- Migrated the site to the Trebired frontend-only static application layout: `.trebired/*` package configs, `src/frontend`, `src/bin`, `src/types`.
- Replaced Vite with `@trebired/bundler`, which owns the client build, SCSS compilation, asset manifest, static document generation, and the Bun dev server.
- Replaced Tailwind CSS, `clsx`, and `tailwind-merge` with `@trebired/frontend` primitives plus product SCSS. Colors, scales, button tones, field root tokens, and card tokens are declared in `.trebired/frontend/config.ts`.
- Replaced `lucide-react` with `@trebired/frontend` Remix icons, rendered from a build-time static icon cache, so the page makes no icon requests.
- Replaced `flag-icons` with the `flag()` primitive backed by the assets `@trebired/frontend` generates from `assets.flags`.
- Replaced `i18next` and `react-i18next` with `@trebired/i18n` colocated local translators. Language files live in `i18n/en.ts` and `i18n/cs.ts` beside the component that owns the text, and the build fails when the two disagree on keys.
- Added `@trebired/code-discipline` with the `@trebired/configs` preset, alias-managed imports, banned product name and port patterns, and the `dev` gate.
- Moved product and organization identity into `package.json#config` and injected it at build time through `@trebired/utils` identity readers instead of hardcoded strings.
- Routed every line `src/bin` prints through `@trebired/logger`. No `console.log`, `process.stdout.write`, or `process.stderr.write` remains.
- Moved the dev server onto `@trebired/startup`: dependency-ordered bootstrap of the build/watch and HTTP subsystems, signal-bound shutdown, and the port requirement declared in `.trebired/startup/config.ts`. The port is resolved with `resolvePrimaryPort()`, which honours `PORT`, so no port literal remains in application code.
- Added MIT `LICENSE`, `CONTRIBUTING.md`, and this changelog.
