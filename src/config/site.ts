const discordInvite = "r6s-operation-throwback-2-0-1092820800203141130";

export const site = {
  name: "Throwback FAQ",
  description:
    "Your guide to downloading, setting up, and playing older Rainbow Six Siege seasons.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://throwback-faq.example",
  ogImage: "/media/throwback.webp",
  themeColor: "#c0152a",
  discordInvite,
  discordUrl: `https://discord.gg/${discordInvite}`,
} as const;
