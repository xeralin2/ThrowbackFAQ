import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { NavCard, CardGrid } from "@/components/NavCard";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "External Links",
  description:
    "Useful external tools and resources for older Rainbow Six Siege seasons.",
  path: "/external-links",
});

export default function ExternalLinks() {
  return (
    <>
      <Hero
        tag="Tools & Mods"
        corner="LINKS"
        title={<em>External Links</em>}
        description="Useful external tools and resources for older Rainbow Six Siege seasons."
      />

      <SectionTitle>External Links</SectionTitle>
      <CardGrid>
        <NavCard
          external
          href="https://github.com/JOJOVAV/r6-tools"
          title="Additional Modding Tools"
          desc="Includes R6Liberator2, R6SGlobal_ShadowLegacy, R6S_VoidEdge, Shears, and more."
          arrow="— OPEN REPO"
        />
        <NavCard
          external
          href="https://radmin-vpn.com/"
          title="Radmin VPN"
          desc="Free VPN software used to connect with other players for local multiplayer."
          arrow="— OPEN LINK"
        />
        <NavCard
          external
          href="https://zerotier.com/download/"
          title="ZeroTier"
          desc="Free VPN alternative to Radmin VPN, also available on Linux."
          arrow="— OPEN LINK"
        />
      </CardGrid>
    </>
  );
}
