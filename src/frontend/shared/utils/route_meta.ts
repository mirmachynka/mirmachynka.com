export type RouteMeta = {
  description: string;
  title: string;
};

export const TITLE_SEPARATOR = " | ";

export function pageTitle(...parts: string[]): string {
  return parts.join(TITLE_SEPARATOR);
}
