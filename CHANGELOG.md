# Changelog

All notable changes to `mirmachynka-com` will be documented here.

This project follows semantic versioning once published.

## 1.1.0

- Both languages are served from `/`, and switching language no longer reloads. Czech had its own `/cs` URL and changing language navigated to it. The page is now one prerendered document carrying English as live markup and Czech as an inert template; the saved, cookie or browser language is shown before the application bundle runs, and the language menu re-renders the page in place. Built on `@trebired/frontend` 13.0.0.
- The `/cs` URL is gone and search engines index the English page.

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
