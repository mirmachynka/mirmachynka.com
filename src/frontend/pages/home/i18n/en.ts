import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    about: {
      drawing: "A pen drawing of a fountain pen writing on lined paper.",
      text:
      "I am a software developer from Brno. I take a project from the first conversation to running software: the design, the code, " +
        "the servers it runs on, and the maintenance once it is live.",
      title: "About me",
      work:
      "Whoever designed it maintains it, so every decision has a reason someone still remembers. I work in Czech and English, " +
        "and Linux is where I develop, deploy and design first.",
    },
    approach: {
      drawing: "A pen drawing of a rack server pulled out of its rack on rails.",
      points: {
        after: "I stay after launch. Updates, monitoring and fixes are part of the work, not a separate contract found out about later.",
        comments: "There are no comments in the code. If a function needs a paragraph to explain it, the function is what is wrong.",
        gate: "Every rule I keep can fail the build. Discipline that lives only in a document is a preference.",
        layer:
        "I write the shared layer myself: bundling, logging, storage, translations and background jobs, so every project starts " +
          "from the same tested packages instead of a fresh pile of dependencies.",
        linux: "Linux first, always. I develop on it, deploy to it and design for it before anything else.",
        need:
        "I decide what a system must never get wrong before I decide how it looks. The failure cases come first, and the " +
          "interface follows from them.",
      },
      title: "How I work",
    },
    contact: {
      drawing: "A pen drawing of an old wooden door with a brass letter slot.",
      email: "Write to me",
      project: "Start a project with Trebired",
      text: "For a website, an application or anything else you want built, write to Trebired. Everything else comes to me directly.",
      title: "Write to me",
    },
    founder: {
      action: "Visit trebired.com",
      origin:
      "I started it against software that is rented by the month, runs on someone else's servers and stops when its vendor " +
        "decides. I write the @trebired packages everything is built from, products such as AdmitPress, and the sites on top " +
        "of them, trebired.com included. Every commit and every release carries my name.",
      text:
      "Trebired is an independent software organization. It designs and builds websites, web applications and Linux software " +
        "for people and businesses, runs its own products on the same code, and publishes everything it writes. It is paid by " +
        "its clients and by donations, never by investors, advertising or data.",
      title: "I founded Trebired",
    },
    opening: {
      lead:
      "I founded Trebired and I maintain it. I write the packages it is built on, the products it runs and the websites it " +
        "publishes, and every line of it is open source.",
      skyline: "A pen drawing of Brno: the Cathedral of St Peter and Paul on Petrov hill, above the rooftops of the old town.",
      title: "Miroslav Machynka",
    },
});
