# Contributing

Expected runtime: Bun. Never use npm, and never commit a `package-lock.json`.

## Commands

```sh
bun i
bunx code-discipline fix imports
bunx code-discipline check
bun run typecheck
bun run build
```

`bun run dev` runs the app behind the Code Discipline gate. The port comes from `.trebired/startup/config.ts` and honours `PORT`. `bun run dev:app` skips the gate.

## Rules

- Code Discipline owns formatting, file and function size limits, comment removal, structural blank lines, empty folder removal, and alias-managed imports. Run one rule at a time, such as `bunx code-discipline fix imports`, and typecheck after each. Never run a bare `bunx code-discipline fix`: it applies every rule at once, including ones that rewrite and move files.
- Alias names in `.trebired/code-discipline/imports/*.json` are generated. Never hand-edit them.
- Generated output stays out of Git: `dist/`, `.ssr/`, and `.trebired/code-discipline/generated/reports/`. `.trebired/code-discipline/generated/tsconfig.paths.json` is committed, as in every Trebired repo, so `tsc` resolves the alias imports on a fresh clone with no build step.
- Generic frontend, bundling, locale, SEO, and translation behaviour belongs in the `@trebired/*` packages. Component appearance is configured in `.trebired/frontend/`; a value the config cannot reach is a package gap, fixed in the package, never overridden from application CSS or runtime patching.
- The page title and description live in `src/frontend/shared/utils/routes.ts`. The build runs the SEO audit and stops on an error.
- Translated text lives in `i18n/en.ts` and `i18n/cs.ts` beside the component that owns it. Both languages must expose the same keys, and the build fails when they do not.
- Adding a locale means adding it to `.trebired/frontend/language.ts`, `.trebired/i18n/config.ts`, and `SUPPORTED_LANGS` in `src/frontend/shared/runtime/i18n/lang.ts`. `.trebired/seo/config.ts` reads its locales from the frontend language config, and the prerendered document set and the `hreflang` tags follow from it.
- The product domain and the dev port are banned patterns outside `package.json` and `.trebired/startup/config.ts`. Read identity through the build-time defines in `src/frontend/shared/identity.ts`.
- `src/bin` logs through `@trebired/logger`. Do not call `console.log`, `process.stdout.write`, or `process.stderr.write`.

There are no test suites. Verification is `code-discipline check`, `tsc --noEmit`, and a real build.
