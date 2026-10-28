import type { Drawing as DrawingFile } from "./../../pages/home/drawings";

type DrawingProps = { className?: string; drawing: DrawingFile; label: string; lazy?: boolean };

export function Drawing({ className, drawing, label, lazy = true }: DrawingProps) {
  return (
    <img
    alt={label}
    className={className}
    decoding="async"
    height={drawing.height}
    loading={lazy ? "lazy" : undefined}
    src={drawing.href}
    width={drawing.width}
    />
  );
}
