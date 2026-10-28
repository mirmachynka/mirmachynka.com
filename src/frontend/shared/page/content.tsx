import { ERROR_STATUSES, errorRoutePath } from "@trebired/frontend";

import { canonicalPath, routeExists } from "./../utils/routes";
import { RouteProvider } from "./route";
import { SiteErrorPage } from "./../../pages/error";
import { HomePage } from "./../../pages/home";

export function preparePageContent(_path: string): Promise<void> {
  return Promise.resolve();
}

export function PageContent({ path }: { path: string }) {
  const route = canonicalPath(path);
  const errorStatus = ERROR_STATUSES.find((status) => errorRoutePath(status) === route);
  if (errorStatus) return <SiteErrorPage status={errorStatus} />;
  if (!routeExists(route)) return <SiteErrorPage status={404} />;
  return <RouteProvider path={route}><HomePage /></RouteProvider>;
}
