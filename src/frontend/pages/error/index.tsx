import { ErrorPage } from "@trebired/frontend/react";
import { useLang } from "./../../shared/lang/use";

export function SiteErrorPage({ status }: { status: number }) {
  return (
    <main>
    <ErrorPage lang={useLang()} status={status} />
    </main>
  );
}
