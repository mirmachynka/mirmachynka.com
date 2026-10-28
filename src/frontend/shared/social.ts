export type SocialService = "github" | "instagram" | "linkedin" | "x";

export const SOCIAL_LINKS: { href: string; icon: string; label: string; service: SocialService }[] = [
  { href: "https://github.com/mirmachynka", icon: "simple-icons:github", label: "GitHub", service: "github" },
  { href: "https://www.linkedin.com/in/mirmachynka", icon: "remixicon:linkedin-fill", label: "LinkedIn", service: "linkedin" },
  { href: "https://www.instagram.com/mirmachynka", icon: "remixicon:instagram-line", label: "Instagram", service: "instagram" },
  { href: "https://x.com/mirmachynka", icon: "simple-icons:x", label: "X", service: "x" },
];
