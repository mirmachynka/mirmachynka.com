type RenderRequest = { entryPath: string; locales: string[]; routes: string[] };

type WorkerScope = { onmessage: ((event: MessageEvent<RenderRequest>) => void) | null; postMessage: (message: unknown) => void };

const scope = globalThis as unknown as WorkerScope;

type SsrEntry = { renderRouteBody: (routePath: string, locale: string) => Promise<string> };

scope.onmessage = async(event: MessageEvent<RenderRequest>) => {
  try {
    const { entryPath, locales, routes } = event.data;
    const entry = (await import(`${entryPath}?t=${Date.now()}`)) as SsrEntry;
    const bodies: Record<string, Record<string, string>> = {};
    for (const route of routes) {
      const rendered = await Promise.all(locales.map(async(locale) => [locale, await entry.renderRouteBody(route, locale)]));
      bodies[route] = Object.fromEntries(rendered);
    }
    scope.postMessage({ bodies });
  } catch (error) {
    scope.postMessage({ error: error instanceof Error ? error.stack || error.message : String(error) });
  }
};
