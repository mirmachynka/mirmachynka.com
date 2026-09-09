import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    items: {
      desktop: {
        note:
        "Aplikace nainstalované a spuštěné přímo na stroji, stavěné nejdřív " +
          "pro Linux a vedle toho pro macOS. Fungují i bez připojení a data " +
          "zůstávají na zařízení, ne na cizím serveru.",
        title: "Desktopové aplikace",
      },
      infrastructure: {
        note:
        "Nastavení a provoz serverů za softwarem: nasazení, zálohy, monitoring " +
          "a aktualizace. Může běžet na vlastním stroji místo cloudového účtu, " +
          "takže cenu ani data nedrží někdo jiný.",
        title: "Servery a hosting",
      },
      sites: {
        note:
        "Firemní weby, portfolia a landing pages, v jednom jazyce i ve více. " +
          "Návrh, stavba, spuštění a údržba potom. Renderované na serveru, " +
          "takže stránky naběhnou rychle a vyhledávače čtou skutečný obsah.",
        title: "Zakázkové weby",
      },
      webapps: {
        note:
        "Software s uživateli, účty, oprávněními a daty, která musí zůstat " +
          "správná: dashboardy, interní nástroje, rezervační a správní systémy. " +
          "TypeScript od rozhraní až po databázi.",
        title: "Webové aplikace",
      },
    },
});
