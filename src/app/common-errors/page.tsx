import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { ContentImage } from "@/components/ContentImage";
import { ExternalLink } from "@/components/ExternalLink";
import { MethodSwitch } from "@/components/MethodSwitch";
import { OnDownloader, OnLauncher, OnWindows } from "@/components/OnPlatform";
import { withBasePath } from "@/lib/asset";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Common Errors",
  description:
    "Solutions to the most frequently encountered game issues and errors.",
  path: "/common-errors",
});

const faqs: FaqItem[] = [
  {
    id: 1,
    q: "Why is my game stuck on controller input?",
    a: (
      <ol>
        <li>
          <strong>Restart the game</strong> — This mostly happens on the first
          launch after a download and is gone for good afterwards
        </li>
        <li>
          <strong>Unplug your controller</strong> — If that did not help,
          restart without it and plug it back in afterwards
        </li>
      </ol>
    ),
  },
  {
    id: 2,
    q: "How do I fix the MSVCRXXX.dll error?",
    display: (
      <>
        How do I fix the <code>MSVCRXXX.dll</code> error?
      </>
    ),
    platform: "windows",
    a: (
      <>
        <p>
          This error means your system is missing a required Microsoft Visual
          C++ Redistributable package.
        </p>
        <ol>
          <li>
            Visit this{" "}
            <ExternalLink href="https://github.com/abbodi1406/vcredist/releases/latest">
              repository
            </ExternalLink>
          </li>
          <li>
            Download <code>VisualCppRedist_AIO_x86_x64.exe</code> and run it as
            administrator
          </li>
          <li>Restart your computer and try launching the game again</li>
        </ol>
        <p className="note">
          If the error persists, make sure Windows is fully up to date, then
          repeat the steps above.
        </p>
      </>
    ),
  },
  {
    id: 3,
    q: "How do I fix the uplay_rx_loader64.dll error?",
    display: (
      <>
        How do I fix the <code>uplay_rx_loader64.dll</code> error?
      </>
    ),
    platform: "windows",
    a: (
      <>
        <p>
          This error usually occurs when your antivirus has blocked or removed a
          required file.
        </p>
        <ol>
          <OnDownloader>
            <li>
              Add your R6S folder as an exclusion in your antivirus settings —
              the <Link href="/antivirus#q2">Antivirus page</Link> has the full
              steps
            </li>
            <li>Re-apply the crack files to your season folder</li>
          </OnDownloader>
          <OnLauncher>
            <li>
              Add your library folder as an exclusion in your antivirus settings
              — the <Link href="/antivirus#q2">Antivirus page</Link> has the
              full steps
            </li>
            <li>
              Use <strong>Verify</strong> in the <strong>Manage</strong> tab of
              the season to restore the removed files
            </li>
          </OnLauncher>
        </ol>
      </>
    ),
  },
  {
    id: 4,
    q: "How do I fix missing or corrupt DLL files?",
    a: (
      <>
        <p>
          If you get an error mentioning any of the following files, the fix is
          the same for all of them.
        </p>
        <ul>
          <li>
            <code>amd_ags_x64.dll</code>
          </li>
          <li>
            <code>gfsdk_ssao_d3d11.win64.dll</code>
          </li>
          <li>
            <code>vivoxsdk_x64.dll</code>
          </li>
          <li>
            <code>bink2w64.dll</code>
          </li>
        </ul>
        <ol>
          <OnLauncher>
            <li>
              Delete the specified <code>.dll</code> file from the season folder
              inside your library
            </li>
          </OnLauncher>
          <OnDownloader>
            <li>
              Delete the specified <code>.dll</code> file from your season
              folder
            </li>
            <li>
              Use <strong>Verify the game</strong> in the downloader to restore
              the missing files
            </li>
          </OnDownloader>
          <OnLauncher>
            <li>
              Use <strong>Verify</strong> in the <strong>Manage</strong> tab of
              the season to restore missing files
            </li>
          </OnLauncher>
        </ol>
      </>
    ),
  },
  {
    id: 5,
    q: "My old R6S version opens the current version or Ubisoft Connect instead.",
    platform: "windows",
    method: "downloader",
    a: (
      <>
        <ol>
          <li>
            <strong>Check your antivirus</strong> — Crack files may be flagged
            and removed, so make sure your R6S folder has an exclusion set up
            (see the <Link href="/antivirus#q2">Antivirus page</Link>)
          </li>
          <li>
            <strong>Verify your files</strong> — Use{" "}
            <strong>Verify the game</strong> in the downloader to restore the
            correct files
          </li>
          <li>
            <strong>Replace files</strong> — Copy the contents of the crack
            folder into your season folder, replacing existing files
          </li>
        </ol>
        <p>Once done, try launching the game again.</p>
      </>
    ),
  },
  {
    id: 5,
    q: "My old R6S version opens the current version or Ubisoft Connect instead.",
    platform: "windows",
    method: "launcher",
    a: (
      <>
        <ol>
          <li>
            <strong>Check your antivirus</strong> — Loader files may be flagged
            and removed, so make sure your library folder has an exclusion set
            up (see the <Link href="/antivirus#q2">Antivirus page</Link>)
          </li>
          <li>
            <strong>Verify your files</strong> — Use <strong>Verify</strong> in
            the launcher to restore the correct files
          </li>
        </ol>
        <p>Once done, try launching the game again.</p>
      </>
    ),
  },
  {
    id: 6,
    q: 'My game is stuck on "Preparing Content". How do I fix it?',
    display: (
      <>
        My game is stuck on <em>Preparing Content</em>. How do I fix it?
      </>
    ),
    a: (
      <>
        <ol>
          <li>
            <strong>Restart the game</strong> — Close it completely
            <OnLauncher>
              {" "}
              with <strong>Stop</strong> in the launcher
            </OnLauncher>
            <OnWindows>
              <OnLauncher> or</OnLauncher> via Task Manager
            </OnWindows>{" "}
            and try again
          </li>
          <OnDownloader>
            <li>
              <strong>Verify your files</strong> — Use{" "}
              <strong>Verify the game</strong> in the downloader to check for
              missing or corrupted files
            </li>
          </OnDownloader>
          <OnLauncher>
            <li>
              <strong>Verify your files</strong> — Use <strong>Verify</strong>{" "}
              in the <strong>Manage</strong> tab of the season to check for
              missing or corrupted files
            </li>
          </OnLauncher>
          <OnWindows>
            <OnDownloader>
              <li>
                <strong>Check your antivirus</strong> — If files were removed,
                exclude your R6S folder (see the{" "}
                <Link href="/antivirus#q2">Antivirus page</Link>) and re-apply
                the crack
              </li>
            </OnDownloader>
            <OnLauncher>
              <li>
                <strong>Check your antivirus</strong> — If files were removed,
                exclude your library folder (see the{" "}
                <Link href="/antivirus#q2">Antivirus page</Link>) and run{" "}
                <strong>Verify</strong> again
              </li>
            </OnLauncher>
          </OnWindows>
        </ol>
        <p className="note">
          This issue usually resolves itself after a restart. Verifying files is
          a reliable second step.
        </p>
      </>
    ),
  },
  {
    id: 7,
    q: "Why is my .exe file missing?",
    display: (
      <>
        Why is my <code>.exe</code> file missing?
      </>
    ),
    platform: "windows",
    method: "downloader",
    a: (
      <>
        <p>
          If the executable is missing, it is usually caused by your antivirus
          removing it.
        </p>
        <ol>
          <li>
            Add your R6S folder as an exclusion in your antivirus settings — the{" "}
            <Link href="/antivirus#q2">Antivirus page</Link> has the full steps
          </li>
          <li>
            Use <strong>Verify the game</strong> in the downloader to restore
            the missing files
          </li>
        </ol>
        <p className="note">
          If files keep going missing after verifying, double-check that your
          antivirus exclusion is set correctly before running the downloader
          again.
        </p>
        <p>
          If verifying does not help, you may need SKU RUS — see{" "}
          <Link href="/downloaders#q13">What is SKU RUS and do I need it?</Link>{" "}
          on the Downloaders page.
        </p>
      </>
    ),
  },
  {
    id: 7,
    q: "Why is my .exe file missing?",
    display: (
      <>
        Why is my <code>.exe</code> file missing?
      </>
    ),
    platform: "windows",
    method: "launcher",
    a: (
      <>
        <p>
          If the executable is missing, it is usually caused by your antivirus
          removing it.
        </p>
        <ol>
          <li>
            Add your library folder as an exclusion in your antivirus settings —
            the <Link href="/antivirus#q2">Antivirus page</Link> has the full
            steps
          </li>
          <li>
            Use <strong>Verify</strong> in the <strong>Manage</strong> tab of
            the season to re-download any missing files
          </li>
        </ol>
        <p className="note">
          If files keep going missing after verifying, double-check that your
          antivirus exclusion is set correctly before running{" "}
          <strong>Verify</strong> again.
        </p>
      </>
    ),
  },
  {
    id: 8,
    q: "My game is in Russian. How do I switch to English?",
    a: (
      <>
        <p>
          Some Steam accounts own a regional version of the game called SKU RUS,
          which is in Russian by default. If yours is affected, switch the
          language with these steps.
        </p>
        <ol>
          <li>
            Download the{" "}
            <a
              href={withBasePath("/downloads/localization.lang")}
              download="localization.lang"
            >
              <code>localization.lang</code>
            </a>{" "}
            file
          </li>
          <li>
            Move it into the folder of the affected season inside your library,
            replacing the existing file
          </li>
          <li>Launch the game — it should now be in English</li>
        </ol>
        <ContentImage
          src="/media/others/sku-rus.webp"
          alt="SKU RUS regions map"
          width={768}
          height={112}
        />
      </>
    ),
  },
  {
    id: 9,
    q: 'Why do I get a "User profile loading failed" error?',
    display: (
      <>
        Why do I get a <em>User profile loading failed</em> error?
      </>
    ),
    a: (
      <p>
        This error is expected and does not affect gameplay. Click{" "}
        <strong>OK</strong> and the game will continue as normal.
      </p>
    ),
  },
];

export default function CommonErrors() {
  return (
    <>
      <Hero
        tag="Troubleshooting"
        corner="ERR"
        title={<em>Common Errors</em>}
        description="Solutions to the most frequently encountered game issues and errors."
      />
      <MethodSwitch />
      <FaqAccordion items={faqs} />
    </>
  );
}
