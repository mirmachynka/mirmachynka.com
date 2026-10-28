import { useLang } from "./../../shared/lang/use";
import { AboutBand } from "./about";
import { ApproachBand } from "./approach";
import { ContactBand } from "./contact";
import { FounderBand } from "./founder";
import { OpeningBand } from "./opening";
import { createHomeTranslator } from "./translator";

export function HomePage() {
  const translator = createHomeTranslator(useLang());

  return (
    <main data-page="">
    <OpeningBand translator={translator} />
    <FounderBand translator={translator} />
    <AboutBand translator={translator} />
    <ApproachBand translator={translator} />
    <ContactBand translator={translator} />
    </main>
  );
}
