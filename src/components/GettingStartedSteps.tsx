"use client";

import Link from "next/link";
import { Callout } from "@/components/Callout";
import { SectionTitle } from "@/components/SectionTitle";
import { Prose } from "@/components/Prose";
import { ContentImage } from "@/components/ContentImage";
import { ContentVideo } from "@/components/ContentVideo";
import { ExternalLink } from "@/components/ExternalLink";
import { MethodSwitch } from "@/components/MethodSwitch";
import { OnLinux, OnWindows } from "@/components/OnPlatform";
import { useMethod } from "@/lib/method";

function LauncherSteps() {
  return (
    <>
      <SectionTitle>Install the Launcher</SectionTitle>
      <Prose>
        <OnWindows>
          <ol>
            <li>
              Download <code>Launcher.exe</code> from the{" "}
              <ExternalLink href="https://github.com/xeralin/ThrowbackLauncher/releases/latest">
                latest release
              </ExternalLink>{" "}
              and run it
            </li>
            <li>
              If Windows Security removes the installer, allow it under{" "}
              <strong>Protection history</strong> and run it again
            </li>
            <li>
              If Windows shows <strong>Windows protected your PC</strong>, click{" "}
              <strong>More info</strong> and then <strong>Run anyway</strong>
            </li>
          </ol>
          <div className="flex flex-wrap gap-3">
            <ContentImage
              src="/media/others/smartscreen-blocked.webp"
              alt="Windows SmartScreen blocking the installer"
              width={530}
              height={497}
              className="max-w-[300px] rounded-md border border-border"
            />
            <ContentImage
              src="/media/others/smartscreen-run-anyway.webp"
              alt="SmartScreen after clicking More info, showing Run anyway"
              width={530}
              height={497}
              className="max-w-[300px] rounded-md border border-border"
            />
          </div>
        </OnWindows>
        <OnLinux>
          <ol>
            <li>
              Download <code>Launcher.AppImage</code> from the{" "}
              <ExternalLink href="https://github.com/xeralin/ThrowbackLauncher/releases/latest">
                latest release
              </ExternalLink>
            </li>
            <li>Open it</li>
          </ol>
          <p>
            The launcher picks a Proton version that you have installed. You
            can change it in the launcher Settings.
          </p>
        </OnLinux>
      </Prose>
    </>
  );
}

function JvavSteps() {
  return (
    <>
      <SectionTitle>Step 1 — Prepare an R6S Folder</SectionTitle>
      <Prose>
        <p>
          Create a dedicated folder for the game on whichever drive you want to
          store it.
        </p>
        <p>
          Keep the name simple — no spaces or special characters. We recommend
          naming it <strong>R6S</strong>.
        </p>

        <ContentVideo
          src="/media/game-folder.webm"
          label="Creating an R6S folder"
          width={1920}
          height={1080}
        />

        <Callout variant="warning" label="// WARNING">
          Do not place the R6S folder inside OneDrive or any other cloud storage
          service. This will cause issues.
        </Callout>
      </Prose>

      <SectionTitle>Step 2 — Add a Windows Security Exclusion</SectionTitle>
      <Prose>
        <p>
          Before downloading the game, add your R6S folder as an exclusion in
          Windows Security so it does not interfere with game files.
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
        </ol>
        <ContentVideo
          src="/media/antivirus-exclusion.webm"
          label="Adding an antivirus exclusion"
          width={1920}
          height={1080}
        />
        <p>
          If you use a different antivirus, add the same folder exclusion there.
        </p>
        <p>
          The <Link href="/antivirus">Antivirus page</Link> covers common
          antivirus issues.
        </p>
      </Prose>

      <SectionTitle>Step 3 — Download the Game</SectionTitle>
      <Prose>
        <p className="note">Requires .NET 9.0 or newer.</p>
        <ol>
          <li>
            Download the <code>.bat</code> file from the{" "}
            <ExternalLink href="https://github.com/JOJOVAV/r6-downloader/releases/latest">
              latest release
            </ExternalLink>{" "}
            and place it inside your R6S folder
          </li>
          <li>
            Run the <code>.bat</code> file — it will automatically download
            everything it needs
          </li>
          <li>Enter your Steam account name, not your profile name</li>
          <li>
            Select <strong>Game Downloader</strong> from the main menu
          </li>
          <li>
            Choose the <strong>year</strong>, then the <strong>season</strong>{" "}
            you want to download
          </li>
          <li>
            Log in to your Steam account and wait for the download to complete
          </li>
          <li>
            Navigate to your R6S folder → <code>Downloads</code> →{" "}
            <code>Season</code>
          </li>
          <li>
            Run <code>LaunchR6.bat</code> to launch the game
          </li>
        </ol>
      </Prose>
    </>
  );
}

export function GettingStartedSteps() {
  const method = useMethod();

  return (
    <>
      <MethodSwitch />
      {method === "launcher" ? <LauncherSteps /> : <JvavSteps />}
    </>
  );
}
