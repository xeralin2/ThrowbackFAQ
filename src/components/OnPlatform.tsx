"use client";

import type { ReactNode } from "react";
import { usePlatform } from "@/lib/platform";
import { useMethod } from "@/lib/method";

export function OnLinux({ children }: { children: ReactNode }) {
  return usePlatform() === "linux" ? <>{children}</> : null;
}

export function OnWindows({ children }: { children: ReactNode }) {
  return usePlatform() === "windows" ? <>{children}</> : null;
}

export function OnDownloader({ children }: { children: ReactNode }) {
  return useMethod() === "downloader" ? <>{children}</> : null;
}

export function OnLauncher({ children }: { children: ReactNode }) {
  return useMethod() === "launcher" ? <>{children}</> : null;
}
