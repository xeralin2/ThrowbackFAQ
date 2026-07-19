"use client";

import { useSyncExternalStore } from "react";

import { withViewTransition } from "@/lib/view-transition";

export type Platform = "windows" | "linux";

const STORAGE_KEY = "platform";

let cached: Platform | null = null;
const listeners = new Set<() => void>();

function detectPlatform(): Platform {
  const agent = navigator.userAgent;
  return /linux/i.test(agent) && !/android/i.test(agent) ? "linux" : "windows";
}

function getSnapshot(): Platform {
  if (cached === null) {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {}
    cached =
      stored === "windows" || stored === "linux" ? stored : detectPlatform();
  }
  return cached;
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setPlatform(next: Platform) {
  cached = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {}
  withViewTransition(() => listeners.forEach((listener) => listener()));
}

export function usePlatform(): Platform {
  return useSyncExternalStore(subscribe, getSnapshot, () => "windows");
}
