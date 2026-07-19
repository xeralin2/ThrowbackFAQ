import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Callout } from "@/components/Callout";
import { SectionTitle } from "@/components/SectionTitle";
import { Prose } from "@/components/Prose";
import { GettingStartedSteps } from "@/components/GettingStartedSteps";
import { ExternalLink } from "@/components/ExternalLink";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Getting Started",
  description:
    "A step-by-step guide to setting up and downloading an older season of Rainbow Six Siege.",
  path: "/getting-started",
});

export default function GettingStarted() {
  return (
    <>
      <Hero
        tag="Setup Guide"
        corner="SETUP"
        title={<em>Getting Started</em>}
        description="A step-by-step guide to setting up and downloading an older season of Rainbow Six Siege."
      />

      <Callout label="// STEAM REQUIRED">
        This guide only works if you own R6S on Steam. Ubisoft Connect and Epic
        Games accounts are not supported. R6S is free on Steam — add it to your
        Steam library on its{" "}
        <ExternalLink href="https://store.steampowered.com/app/359550/">
          store page
        </ExternalLink>{" "}
        and the downloaders will work.
      </Callout>

      <GettingStartedSteps />

      <SectionTitle>Need Help?</SectionTitle>
      <Prose>
        <p>
          The <Link href="/downloaders">Downloaders page</Link> answers
          frequently asked questions about the downloaders.
        </p>
        <p>
          If you run into issues, check the{" "}
          <Link href="/common-errors">Common Errors</Link> page or visit the{" "}
          <Link href="/how-to-get-help">How To Get Help</Link> page for guidance
          on reporting problems to staff.
        </p>
      </Prose>
    </>
  );
}
