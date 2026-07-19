"use client";

import Image from "next/image";
import { withBasePath } from "@/lib/asset";
import { setPlatform, usePlatform, type Platform } from "@/lib/platform";

const PLATFORMS: { id: Platform; label: string; icon: string }[] = [
  { id: "windows", label: "Windows", icon: "/media/others/windows.webp" },
  { id: "linux", label: "Linux", icon: "/media/others/steam.webp" },
];

export function PlatformSwitch() {
  const platform = usePlatform();
  return (
    <div className="relative flex rounded-lg bg-bg p-[3px]">
      <span
        aria-hidden
        className={`absolute inset-y-[3px] left-[3px] w-[calc(50%-3px)] rounded-md bg-border shadow-[0_1px_4px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-out ${
          platform === "windows" ? "translate-x-0" : "translate-x-full"
        }`}
      />
      {PLATFORMS.map((entry) => (
        <button
          key={entry.id}
          type="button"
          aria-pressed={platform === entry.id}
          onClick={() => setPlatform(entry.id)}
          className={`relative z-[1] flex flex-1 items-center justify-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.08em] transition-colors duration-150 ${
            platform === entry.id
              ? "text-text"
              : "text-text-muted hover:text-text"
          }`}
        >
          <Image
            src={withBasePath(entry.icon)}
            alt=""
            width={96}
            height={96}
            className={`h-3.5 w-3.5 object-contain transition-opacity duration-150 ${
              platform === entry.id ? "opacity-100" : "opacity-60"
            }`}
          />
          <span className="max-[30em]:hidden">{entry.label}</span>
        </button>
      ))}
    </div>
  );
}
