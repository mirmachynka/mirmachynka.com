import { ICON_GITHUB, ICON_INSTAGRAM, ICON_LINKEDIN, ICON_X } from "#0ecwvk1k07fy";

type WorkId = "desktop" | "infrastructure" | "sites" | "webapps";
type ApproachId = "after" | "comments" | "gate" | "layer" | "linux" | "need";

type SocialLink = {
  icon: string;
  label: string;
  url: string;
};

const WORK_ITEMS: WorkId[] = ["sites", "webapps", "desktop", "infrastructure"];

const APPROACH_POINTS: ApproachId[] = ["need", "gate", "comments", "layer", "linux", "after"];

const SOCIAL_LINKS: SocialLink[] = [
  { icon: ICON_GITHUB, label: "GitHub", url: "https://github.com/mirmachynka" },
  { icon: ICON_LINKEDIN, label: "LinkedIn", url: "https://linkedin.com/in/mirmachynka" },
  { icon: ICON_INSTAGRAM, label: "Instagram", url: "https://instagram.com/mirmachynka" },
  { icon: ICON_X, label: "X / Twitter", url: "https://twitter.com/mirmachynka" },
];

export { APPROACH_POINTS, SOCIAL_LINKS, WORK_ITEMS };
export type { ApproachId, WorkId };
