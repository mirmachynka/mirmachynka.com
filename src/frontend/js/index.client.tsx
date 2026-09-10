import {
  bindFrontendRuntime,
  bootPageLoadProgress,
  configureLocaleRouting,
  configureSpa,
} from "@trebired/frontend";
import "@trebired/frontend/static-icons";
import { LocaleProvider } from "@trebired/frontend/react";
import { createBrowserLog } from "@trebired/logger/browser";
import { LogErrorBoundary, LogProvider } from "@trebired/logger/browser/react";
import type { ReactElement } from "react";

import { productSlug } from "#7thctz8gzhqd";
import { FooterContent } from "#k21ef4d3041i";
import { HeaderContent } from "#a6y8rnwh8rgt";
import { hydrateChromeRoots } from "#7dgyurrmpuqq";
import { mountContentIsland } from "#80v43kgu6tk7";
import { LANGUAGE_ROUTING } from "#szbf6t6578gp";

const log = createBrowserLog({
    group: "frontend.app",
    source: productSlug,
});

configureLocaleRouting(LANGUAGE_ROUTING);

function observed(node: ReactElement) {
  return (
    <LogProvider log={log}>
    <LocaleProvider>
    <LogErrorBoundary group="frontend.chrome">{node}</LogErrorBoundary>
    </LocaleProvider>
    </LogProvider>
  );
}

bootPageLoadProgress({ minVisibleMs: 320 });
configureSpa({});

void hydrateChromeRoots([
    [document.querySelector("header"), observed(<HeaderContent />)],
    [document.querySelector("footer"), observed(<FooterContent />)],
]).then(() => {
    bindFrontendRuntime(document, { icons: { mode: "static" } });
    mountContentIsland("live_content");
});
