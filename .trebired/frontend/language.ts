import type { FrontendLanguageConfig } from "@trebired/frontend/config";

export const language: FrontendLanguageConfig = {
  defaultLocale: "en",
  locales: [
    { code: "cs", flagCountry: false, label: "Čeština", shortLabel: "CS" },
    { code: "en", flagCountry: false, label: "English", shortLabel: "EN" },
  ],
  strategy: "none",
  error: {
    cs: {
      action: "Zpět na úvod",
      403: {
        title: "Nepovoleno",
        lead: "Na tuhle stránku nemáte přístup.",
      },
      404: {
        title: "Stránka nenalezena",
        lead: "Stránka, kterou hledáte, tu není. Mohla se přesunout, nebo je adresa špatně.",
      },
      410: {
        title: "Stránka odstraněna",
        lead: "Tahle stránka je pryč natrvalo.",
      },
      500: {
        title: "Něco se pokazilo",
        lead: "Na naší straně se něco pokazilo. Zkuste to prosím za chvíli znovu.",
      },
      503: {
        title: "Dočasně nedostupné",
        lead: "Web je chvíli nedostupný. Zkuste to prosím za chvíli znovu.",
      },
    },
    en: {
      action: "Back to the homepage",
      403: {
        title: "Not allowed",
        lead: "You do not have access to this page.",
      },
      404: {
        title: "Page not found",
        lead: "The page you asked for is not here. It may have moved, or the address may be wrong.",
      },
      410: {
        title: "Page removed",
        lead: "This page is gone for good.",
      },
      500: {
        title: "Something went wrong",
        lead: "Something went wrong on our side. Try again in a moment.",
      },
      503: {
        title: "Temporarily unavailable",
        lead: "The site is briefly unavailable. Try again in a moment.",
      },
    },
  },
};
