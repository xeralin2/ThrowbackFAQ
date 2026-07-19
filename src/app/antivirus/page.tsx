import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { MethodSwitch } from "@/components/MethodSwitch";
import { OnDownloader, OnLauncher } from "@/components/OnPlatform";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { ExternalLink } from "@/components/ExternalLink";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Antivirus",
  description:
    "Common antivirus issues and how to resolve them, including false-positive detections.",
  path: "/antivirus",
});

const faqs: FaqItem[] = [
  {
    id: 1,
    q: "My browser is blocking the download. What do I do?",
    a: (
      <>
        <p>
          Some browsers block downloads that contain executable files. To get
          around this, follow the steps for your browser.
        </p>
        <ul>
          <li>
            <strong>Chrome</strong> — Click the arrow next to the blocked
            download and select <strong>Keep</strong>
          </li>
          <li>
            <strong>Edge</strong> — Click the three dots next to the blocked
            item and select <strong>Keep</strong>
          </li>
          <li>
            <strong>Firefox</strong> — Click the download in the toolbar and
            select <strong>Allow</strong>
          </li>
        </ul>
        <p>
          If that does not work, temporarily disable the enhanced security or
          download protection in your browser, download the file, then re-enable
          it afterwards.
        </p>
        <p className="note">
          Only download files from the official repositories or the{" "}
          <ExternalLink href={site.discordUrl}>Discord server</ExternalLink>.
        </p>
      </>
    ),
  },
  {
    id: 2,
    q: "My antivirus is blocking the game. What should I do?",
    method: "launcher",
    a: (
      <>
        <p>
          Some antivirus programs flag game files as false positives. Liberator,
          Heated Metal, and the launcher itself are common targets. The fix is
          to add both your library folder and the launcher install folder as
          exclusions. For Windows Security, follow these steps.
        </p>
        <ol>
          <li>
            Search for <strong>Virus & Threat Protection</strong> in the Windows
            start menu
          </li>
          <li>
            Click <strong>Manage settings</strong> under{" "}
            <em>Virus & Threat Protection Settings</em>
          </li>
          <li>
            Scroll down to <em>Exclusions</em> and click{" "}
            <strong>Add or remove exclusions</strong>
          </li>
          <li>
            Click <strong>Add an exclusion</strong>, select{" "}
            <strong>Folder</strong>, and choose your library folder, then repeat
            for the launcher install folder at{" "}
            <code>%LOCALAPPDATA%\ThrowbackLauncher</code>
          </li>
          <li>Restart your computer and try launching the game again</li>
        </ol>
        <p className="note">
          Use <strong>Verify</strong> in the <strong>Manage</strong> tab of the
          season to restore removed game files.
        </p>
      </>
    ),
  },
  {
    id: 2,
    q: "My antivirus is blocking the game. What should I do?",
    method: "downloader",
    a: (
      <>
        <p>
          Some antivirus programs flag game files as false positives.
          ThrowbackLoader, Liberator, and Heated Metal are common targets. The
          fix is to add your R6S folder as an exclusion. For Windows Security,
          follow these steps.
        </p>
        <ol>
          <li>
            Search for <strong>Virus & Threat Protection</strong> in the Windows
            start menu
          </li>
          <li>
            Click <strong>Manage settings</strong> under{" "}
            <em>Virus & Threat Protection Settings</em>
          </li>
          <li>
            Scroll down to <em>Exclusions</em> and click{" "}
            <strong>Add or remove exclusions</strong>
          </li>
          <li>
            Click <strong>Add an exclusion</strong>, select{" "}
            <strong>Folder</strong>, and choose your R6S folder
          </li>
          <li>Restart your computer and try launching the game again</li>
        </ol>
        <p className="note">
          If the issue persists, make sure the exclusion is still in place, then
          use <strong>Verify the game</strong> in the downloader to restore the
          removed files.
        </p>
      </>
    ),
  },
  {
    id: 3,
    q: "My antivirus deleted a game file. How do I get it back?",
    method: "launcher",
    a: (
      <ol>
        <li>
          Add both your library folder and the launcher install folder as
          exclusions in your antivirus settings
        </li>
        <li>
          If the file was part of Heated Metal, clear the app cache in the
          launcher Settings so the flagged loader files are not reused
        </li>
        <li>
          Use <strong>Verify</strong> in the <strong>Manage</strong> tab of the
          season to restore the files
        </li>
      </ol>
    ),
  },
  {
    id: 3,
    q: "My antivirus deleted a game file. How do I get it back?",
    method: "downloader",
    a: (
      <ol>
        <li>Add your R6S folder as an exclusion in your antivirus settings</li>
        <li>
          Use <strong>Verify the game</strong> in the downloader to restore the
          missing files
        </li>
        <li>
          If the file was part of Heated Metal, download Heated Metal again
          after setting the exclusion
        </li>
      </ol>
    ),
  },
  {
    id: 4,
    q: "I use a third-party antivirus. Does the same apply?",
    a: (
      <p>
        Yes. The process is essentially the same for all antivirus software. You
        need to add <OnDownloader>your R6S folder as an exclusion</OnDownloader>
        <OnLauncher>
          your library and launcher install folders as exclusions
        </OnLauncher>
        . The exact steps vary by product, but look for an{" "}
        <strong>Exclusions</strong>, <strong>Exceptions</strong>, or{" "}
        <strong>Whitelist</strong> section in your antivirus settings.
      </p>
    ),
  },
];

export default function Antivirus() {
  return (
    <>
      <Hero
        tag="Troubleshooting"
        corner="AV"
        title={<em>Antivirus</em>}
        description="Common antivirus issues and how to resolve them, including false-positive detections."
      />
      <MethodSwitch />
      <FaqAccordion items={faqs} />
    </>
  );
}
