import { currentRoutePath, onPageChange, stripLocalePrefix } from "@trebired/frontend";
import { useEffect, useState } from "react";

export function useRoutePath(): string {
  const [path, setPath] = useState(() => currentRoutePath());

  useEffect(() => onPageChange((page) => {
        setPath(stripLocalePrefix(new URL(page.url, window.location.origin).pathname));
    }), []);

  return path;
}
