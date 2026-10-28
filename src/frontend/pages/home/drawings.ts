type Drawing = { height: number; href: string; width: number };

const DRAWINGS = {
  brno: { height: 801, href: "/art/brno.svg", width: 1600 },
  door: { height: 509, href: "/art/door.svg", width: 760 },
  pen: { height: 571, href: "/art/pen.svg", width: 760 },
  server: { height: 536, href: "/art/server.svg", width: 1200 },
} satisfies Record<string, Drawing>;

type DrawingName = keyof typeof DRAWINGS;

const ORGANIZATION_LOGO: Drawing = { height: 309, href: "/brand/trebired.svg", width: 338 };

export { DRAWINGS, ORGANIZATION_LOGO };
export type { Drawing, DrawingName };
