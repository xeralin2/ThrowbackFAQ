type NavItem = { href: string; label: string; platform?: "windows" | "linux" };
type NavSection = { label: string; items: NavItem[] };
export type Crumb = { label: string; href: string };

export const navSections: NavSection[] = [
  {
    label: "General",
    items: [
      { href: "/", label: "Home" },
      { href: "/getting-started", label: "Getting Started" },
    ],
  },
  {
    label: "Support",
    items: [
      { href: "/common-errors", label: "Common Errors" },
      { href: "/antivirus", label: "Antivirus", platform: "windows" },
      { href: "/multiplayer", label: "Multiplayer" },
      { href: "/how-to-get-help", label: "How To Get Help" },
    ],
  },
  {
    label: "Tools & Mods",
    items: [
      { href: "/downloaders", label: "Downloaders" },
      { href: "/liberator", label: "Liberator" },
      { href: "/heated-metal", label: "Heated Metal" },
      { href: "/cheat-engine", label: "Cheat Engine" },
      { href: "/external-links", label: "External Links" },
    ],
  },
  {
    label: "Community",
    items: [
      { href: "/extended-rules", label: "Extended Rules" },
      { href: "/credits", label: "Credits" },
    ],
  },
];

export const allRoutes: string[] = navSections.flatMap((section) =>
  section.items.map((item) => item.href),
);

const HOME: Crumb = { label: "FAQ", href: "/" };

const breadcrumbs: Record<string, Crumb[]> = {
  "/": [HOME, { label: "Home", href: "/" }],
  "/getting-started": [
    HOME,
    { label: "Getting Started", href: "/getting-started" },
  ],
  "/common-errors": [HOME, { label: "Common Errors", href: "/common-errors" }],
  "/antivirus": [HOME, { label: "Antivirus", href: "/antivirus" }],
  "/multiplayer": [HOME, { label: "Multiplayer", href: "/multiplayer" }],
  "/how-to-get-help": [
    HOME,
    { label: "How To Get Help", href: "/how-to-get-help" },
  ],
  "/downloaders": [HOME, { label: "Downloaders", href: "/downloaders" }],
  "/liberator": [HOME, { label: "Liberator", href: "/liberator" }],
  "/heated-metal": [HOME, { label: "Heated Metal", href: "/heated-metal" }],
  "/cheat-engine": [HOME, { label: "Cheat Engine", href: "/cheat-engine" }],
  "/external-links": [
    HOME,
    { label: "External Links", href: "/external-links" },
  ],
  "/extended-rules": [
    HOME,
    { label: "Extended Rules", href: "/extended-rules" },
  ],
  "/credits": [HOME, { label: "Credits", href: "/credits" }],
};

export function normalizePath(path: string): string {
  if (!path) return "/";
  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

export function breadcrumbFor(path: string): Crumb[] {
  return breadcrumbs[normalizePath(path)] ?? [HOME];
}
