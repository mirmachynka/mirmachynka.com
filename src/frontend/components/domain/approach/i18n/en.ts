import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    title: "How I work",
    points: {
      after:
      "I stay after launch. Updates, monitoring, and fixes are part of the " +
        "work, not a separate contract you find out about later.",
      comments:
      "No comments anywhere in the codebase. If a function needs a paragraph to " +
        "explain it, the function is the thing that is wrong.",
      gate:
      "Every rule I keep is a rule that can fail the build. Discipline that " +
        "lives in a document is only a preference.",
      layer:
      "I write the shared layer myself: bundling, logging, persistence, " +
        "translations, background jobs. Twenty packages, so every project " +
        "starts from the same tested base instead of a fresh pile of " +
        "dependencies.",
      linux:
      "Linux first, always. I develop on it, deploy to it, and design for it " +
        "before anything else. macOS is supported. Windows is not a platform " +
        "I build around.",
      need:
      "I decide what a system must never get wrong before I decide anything " +
        "about how it looks. The failure cases come first, and the interface " +
        "follows from them.",
    },
});
