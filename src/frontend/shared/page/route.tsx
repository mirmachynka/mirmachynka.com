import { createContext, useContext, type ReactNode } from "react";

const RouteContext = createContext("/");

export function RouteProvider({ children, path }: { children: ReactNode; path: string }) {
  return <RouteContext.Provider value={path}>{children}</RouteContext.Provider>;
}

export function useCurrentRoute(): string {
  return useContext(RouteContext);
}
