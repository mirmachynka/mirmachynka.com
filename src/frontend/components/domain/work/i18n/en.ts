import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    items: {
      desktop: {
        note:
        "Applications installed and run on the machine itself, built for Linux " +
          "first and macOS alongside it. They keep working without a " +
          "connection, and the data stays on the device instead of somebody " +
          "else's server.",
        title: "Desktop applications",
      },
      infrastructure: {
        note:
        "Setting up and running the servers behind the software: deployment, " +
          "backups, monitoring, and updates. It can run on your own machine " +
          "instead of a cloud account, so nobody else sets the price or holds " +
          "the data.",
        title: "Servers and hosting",
      },
      sites: {
        note:
        "Company sites, portfolios, and landing pages, in one language or " +
          "several. Design, build, launch, and the maintenance afterwards. " +
          "Rendered on the server, so pages arrive fast and search engines " +
          "read the real content.",
        title: "Custom websites",
      },
      webapps: {
        note:
        "Software with users, accounts, permissions, and data that has to stay " +
          "correct: dashboards, internal tools, booking and management systems. " +
          "TypeScript from the interface down to the database.",
        title: "Web applications",
      },
    },
});
