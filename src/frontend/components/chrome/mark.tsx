import { identity } from "./../../shared/identity";

export function NameMark({ className }: { className?: string }) {
  return <span className={className ? `tbfm-name-mark ${className}` : "tbfm-name-mark"}>{identity.ownerName}</span>;
}
