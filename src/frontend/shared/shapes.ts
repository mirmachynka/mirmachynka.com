type ShapeKind = "circle" | "square" | "triangle";

type Shape = {
  hue: number;
  kind: ShapeKind;
  left: string;
  rotate: string;
  seed: number;
  size: string;
  top: string;
};

const SECTION_SHAPES: Record<string, Shape[]> = {
  about: [
    { hue: 5, kind: "circle", left: "88%", rotate: "0deg", seed: 138, size: "clamp(200px, 30vw, 460px)", top: "24%" },
    { hue: 2, kind: "triangle", left: "12%", rotate: "196deg", seed: 175, size: "clamp(160px, 22vw, 340px)", top: "82%" },
  ],
  approach: [
    { hue: 4, kind: "square", left: "90%", rotate: "24deg", seed: 212, size: "clamp(190px, 27vw, 420px)", top: "18%" },
    { hue: 6, kind: "circle", left: "6%", rotate: "0deg", seed: 249, size: "clamp(220px, 32vw, 500px)", top: "76%" },
  ],
  contact: [
    { hue: 3, kind: "circle", left: "84%", rotate: "0deg", seed: 286, size: "clamp(240px, 34vw, 540px)", top: "62%" },
    { hue: 1, kind: "triangle", left: "16%", rotate: "12deg", seed: 323, size: "clamp(170px, 24vw, 360px)", top: "14%" },
  ],
  opening: [
    { hue: 1, kind: "circle", left: "82%", rotate: "0deg", seed: 360, size: "clamp(260px, 38vw, 620px)", top: "22%" },
    { hue: 4, kind: "triangle", left: "6%", rotate: "-11deg", seed: 397, size: "clamp(200px, 28vw, 460px)", top: "47%" },
    { hue: 2, kind: "square", left: "62%", rotate: "32deg", seed: 434, size: "clamp(150px, 20vw, 300px)", top: "88%" },
  ],
  work: [
    { hue: 2, kind: "circle", left: "8%", rotate: "0deg", seed: 582, size: "clamp(230px, 33vw, 520px)", top: "16%" },
    { hue: 5, kind: "square", left: "89%", rotate: "18deg", seed: 619, size: "clamp(200px, 28vw, 440px)", top: "74%" },
  ],
};

export { SECTION_SHAPES };
export type { Shape, ShapeKind };
