import type { CSSProperties } from "react";

import rough from "roughjs";
import type { Options } from "roughjs/bin/core";

import { SECTION_SHAPES } from "#gg684ebts59s";
import type { Shape } from "#gg684ebts59s";

type ShapesProps = {
  section: string;
};

type SketchPath = {
  d: string;
  filled: boolean;
  opacity: number;
  strokeWidth: number;
};

const BOX = 200;
const generator = rough.generator();
const sketchCache = new Map<number, SketchPath[]>();

function variantFor(seed: number) {
  return {
    bowing: 0.9 + ((seed % 4) * 0.45),
    fillWeight: 2.2 + ((seed % 3) * 0.8),
    hachureAngle: -78 + ((seed % 9) * 19),
    hachureGap: 5.5 + ((seed % 4) * 1.6),
    jitter: ((seed % 7) - 3) * 2.2,
    roughness: 1.5 + ((seed % 5) * 0.24),
    span: 158 + ((seed % 6) * 4),
  };
}

function geometryFor(shape: Shape, options: Options) {
  const { jitter, span } = variantFor(shape.seed);
  const half = span / 2;
  const mid = BOX / 2;

  if (shape.kind === "circle") return generator.circle(mid, mid, span, options);
  if (shape.kind === "square") {
    return generator.rectangle(mid - half + jitter, mid - half, span, span - jitter, options);
  }

  return generator.polygon([
      [mid + jitter, mid - half],
      [mid + half, mid + half + jitter],
      [mid - half, mid + half],
    ], options);
}

function washPaths(shape: Shape): SketchPath[] {
  const variant = variantFor(shape.seed);
  const drawable = geometryFor(shape, {
      bowing: variant.bowing,
      fill: "#000000",
      fillStyle: "solid",
      roughness: variant.roughness,
      seed: shape.seed,
      stroke: "none",
  });

  return generator.toPaths(drawable)
  .map((part) => ({ d: part.d, filled: true, opacity: 0.42, strokeWidth: 0 }));
}

function inkPaths(shape: Shape): SketchPath[] {
  const variant = variantFor(shape.seed);
  const drawable = geometryFor(shape, {
      bowing: variant.bowing,
      fill: "#000000",
      fillStyle: "hachure",
      fillWeight: variant.fillWeight,
      hachureAngle: variant.hachureAngle,
      hachureGap: variant.hachureGap,
      roughness: variant.roughness,
      seed: shape.seed,
      stroke: "#000000",
      strokeWidth: 2.3,
  });

  return generator.toPaths(drawable).map((part) => ({
        d: part.d,
        filled: Boolean(part.fill) && part.fill !== "none",
        opacity: 1,
        strokeWidth: Number(part.strokeWidth) || 0,
  }));
}

function sketchFor(shape: Shape): SketchPath[] {
  const cached = sketchCache.get(shape.seed);
  if (cached) return cached;

  const built = [...washPaths(shape), ...inkPaths(shape)];
  sketchCache.set(shape.seed, built);
  return built;
}

function shapeStyle(shape: Shape): CSSProperties {
  return {
    "--shape-color": `var(--shape-${shape.hue})`,
    "--shape-rotate": shape.rotate,
    "--shape-size": shape.size,
    "--shape-x": shape.left,
    "--shape-y": shape.top,
  } as CSSProperties;
}

function SketchShape({ shape }: { shape: Shape }) {
  return (
    <svg
    className="shapes__item"
    style={shapeStyle(shape)}
    viewBox={`0 0 ${BOX} ${BOX}`}
    >
    {sketchFor(shape).map((part) => (
          <path
          d={part.d}
          fill={part.filled ? "var(--shape-color)" : "none"}
          fillOpacity={part.filled ? part.opacity : undefined}
          key={part.d.slice(0, 32)}
          stroke={part.filled ? "none" : "var(--shape-color)"}
          strokeLinecap="round"
          strokeWidth={part.strokeWidth}
          />
    ))}
    </svg>
  );
}

function Shapes({ section }: ShapesProps) {
  const shapes = SECTION_SHAPES[section] ?? [];

  return (
    <div aria-hidden="true" className="shapes">
    {shapes.map((shape) => <SketchShape key={shape.seed} shape={shape} />)}
    </div>
  );
}

export { Shapes };
