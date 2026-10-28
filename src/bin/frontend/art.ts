import { sketch, type SketchOptions } from "@trebired/overprint/sketch";
import sharp from "sharp";

import { DRAWINGS, ORGANIZATION_LOGO, type DrawingName } from "./../../frontend/pages/home/drawings";

type SketchSource = { name: DrawingName; options?: SketchOptions; photo: string };

const INK = "#222222";

const SOURCES: SketchSource[] = [
  { name: "brno", photo: "src/art/brno.jpg" },
  { name: "door", options: { detail: 0.2, shading: 0.4 }, photo: "src/art/door.jpg" },
  { name: "pen", photo: "src/art/pen.jpg" },
  { name: "server", photo: "src/art/server.jpg" },
];

async function writeSketch(outDir: string, source: SketchSource) {
  const drawing = DRAWINGS[source.name];
  const { data, info } = await sharp(source.photo).resize({ width: drawing.width }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  if (info.height !== drawing.height) throw new Error(`${source.name} drawing is ${info.height}px tall, declared ${drawing.height}px`);
  const art = sketch({ data: new Uint8ClampedArray(data), height: info.height, width: info.width }, { color: INK, stroke: 1.25, ...source.options });
  await Bun.write(`${outDir}${drawing.href}`, art.markup);
}

async function writeSketches(outDir: string) {
  await Promise.all(SOURCES.map((source) => writeSketch(outDir, source)));
}

async function writeOrganizationLogo(outDir: string, data: Record<string, unknown>) {
  const svg = (data.trebiredLogo as { svg?: string } | undefined)?.svg;
  if (!svg) throw new Error("the Trebired logo was neither fetched nor kept from an earlier build");
  await Bun.write(`${outDir}${ORGANIZATION_LOGO.href}`, svg);
}

export { writeOrganizationLogo, writeSketches };
