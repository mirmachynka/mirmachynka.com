<div align="center">

<p>
<img src="src/brand/favicon.svg" alt="mirmachynka.com" width="120" align="top">
</p>

**The personal site of Miroslav Machynka, founder of Trebired: who he is, the organization he started, how he works and where to reach him, in English and Czech.**

[![License](https://img.shields.io/badge/license-MIT-black)](LICENSE)
[![Runtime](https://img.shields.io/badge/runtime-Bun-black)](#install)
[![Output](https://img.shields.io/badge/output-static%20site-black)](#runtime)

</div>

---

## Contents

- [Install](#install)
- [Quick Start](#quick-start)
- [Concepts](#concepts)
- [Configuration](#configuration)
- [Runtime](#runtime)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [What It Does Not Do](#what-it-does-not-do)

## Install

Bun 1 or later.

```sh
bun i
```

## Quick Start

```sh
bun run dev
```

The dev server runs behind the Code Discipline gate, builds the client bundle, writes one HTML document per language and serves the result on port 3000. Set `PORT` to use another port. `bun run dev:app` skips the gate.

Production build:

```sh
bun run build
```

The build writes the site to `dist/`. It is a static directory; serve it with any static host.

## Concepts

### Frontend-only site

The site has no backend. `src/bin/frontend/build.ts` bundles the client and prerenders every document; nothing runs at request time. `src/bin/dev.ts` is local preview, not a production server. The header, the page and the footer hydrate as separate roots in the browser.

### One page, five sections

`src/frontend/pages/home/` holds the only page: the opening with the drawing of Brno, the Trebired founder band, the about text, the working principles and contact, each with a composition and a drawing of its own. Each section is its own file, and the copy for all of them lives in `i18n/en.ts` and `i18n/cs.ts` beside them. `src/frontend/shared/utils/routes.ts` holds the page title and description in both languages; the build reads them for the document head and the SEO audit.

### Drawings

The opening, the about section, the working principles and contact each carry a pen drawing traced from a photograph: Brno and the Cathedral of St Peter and Paul in the opening, a fountain pen in the about section, the front of a rack server above the working principles and a rotary dial telephone in contact. The photographs are in `src/art/`. At build time `src/bin/frontend/art.ts` decodes each one with `sharp` and passes the pixels to `sketch()` from `@trebired/overprint/sketch`, which traces the outlines with Rough.js, hatches the shading and leaves the background blank, and writes the drawing to `dist/art/`. `src/frontend/pages/home/drawings.ts` declares each drawing's file and size; the build stops when a drawing comes out at another size, so the image dimensions in the markup never drift. Drawings are traced near the size they are shown at, because the strokes are measured in the drawing's own pixels. Nothing generated is committed.

"Brno View 01" by Scotch Mist, the photograph of Brno, is published on Wikimedia Commons under CC BY-SA 4.0, and the drawing made from it is shared under the same licence. The pen, server and telephone photographs are public domain or CC0, from Wikimedia Commons and Unsplash. The MIT licence of this repository covers the code, not the photographs or the drawings.

### The Trebired logo

The Trebired band shows the minimal Trebired logo. The build fetches it from `brand/brand.json` in Trebired/meta through the `trebiredLogo` data source in `.trebired/bundler/config.ts`, in its tone for light surfaces, and writes it to `dist/brand/trebired.svg`. The repository keeps no copy; when GitHub cannot be reached, the build uses the copy the last build kept in `dist/data`.

### The brand mark

`src/brand/favicon.svg` is the only icon source: a lowercase `mm` in Bricolage Grotesque inside a ring drawn with Rough.js, ink on paper, with the letters converted to outlines so every browser draws it the same. `@trebired/frontend` rasterizes it at build time into the favicon set. `src/brand/social-card.svg` is the social card: the name, the motto "Built to outlast me." underlined in aqua, and a hand holding a fountain pen at the end of the line it drew, traced from a CC0 photograph with `sketch()` like the drawings on the page, with its type converted to outlines so the build needs no fonts; the build rasterizes it to `dist/social-card.png`. Nothing generated is written back into the repository.

## Configuration

| File | Owns |
| --- | --- |
| `.trebired/bundler/config.ts` | Frontend directory, output directory, public path |
| `.trebired/frontend/config.ts` | Palette, type, containers, components, systems, fonts, icons, favicons |
| `.trebired/frontend/links.ts` | Header and footer links |
| `.trebired/frontend/language.ts` | Languages, the default language, error page copy |
| `.trebired/seo/config.ts` | Site URL, locale strategy, robots policy, social card, sitemap defaults |
| `.trebired/i18n/config.ts` | Translation checking |
| `.trebired/startup/config.ts` | Dev server port requirement and shutdown timeout |
| `.trebired/code-discipline/config.ts` | Enforcement presets, banned patterns, process boundary files |
| `package.json#config` | Organization and product identity |

The contact address is derived from the product domain in `src/frontend/shared/identity.ts` and is never written as a literal. Social profiles live in `src/frontend/shared/social.ts`.

Editing a file that `.trebired/frontend/config.ts` imports does not always invalidate the compiled config cache. Clear `node_modules/.cache/frontend` when a config change does not take effect.

## Runtime

Bun runs the build and the dev server. The published output is static HTML, CSS, JavaScript and assets; the browser is the only runtime a visitor needs.

English is served at `/` and Czech at `/cs`. Each document carries its own `<html lang>`, title, description, canonical URL and language alternates, and holds the other language as an inert template. The language menu switches the page in place, without a reload and without changing the address; the language URLs exist for search engines. The build writes `sitemap.xml`, `robots.txt`, structured data describing Miroslav Machynka as the founder of Trebired, and a social card, and it stops when the SEO audit finds an error.

`netlify.toml` declares the build command, the publish directory and the Bun version, so the host needs no build settings of its own.

## Documentation

This README is the site documentation. Contributor commands are in [CONTRIBUTING.md](CONTRIBUTING.md). Released changes are in [CHANGELOG.md](CHANGELOG.md).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## What It Does Not Do

- No contact form, email delivery or message handling. Contact runs through the published email address and social profiles.
- No project intake. Enquiries about building something go to Trebired at trebired.com/contact.
- No backend, database, session or user account.
- No analytics, tracking, advertising or third-party scripts, and no cookie consent layer, because nothing needs one.
- No content management interface. Copy changes are code changes in the colocated `i18n` folders.
- No test suite. Verification is `code-discipline check`, `tsc --noEmit` and a real build.
