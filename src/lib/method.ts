"use client";

import { useSyncExternalStore } from "react";

import { withViewTransition } from "@/lib/view-transition";
import { usePlatform } from "@/lib/platform";

export type Method = "launcher" | "downloader";

const STORAGE_KEY = "method";

let cached: Method | null = null;
const listeners = new Set<() => void>();

function getSnapshot(): Method {
  if (cached === null) {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {}
    cached =
      stored === "launcher" || stored === "downloader" ? stored : "launcher";
  }
  return cached;
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setMethod(next: Method) {
  cached = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {}
  withViewTransition(() => listeners.forEach((listener) => listener()));
}

export function useStoredMethod(): Method {
  return useSyncExternalStore(subscribe, getSnapshot, (): Method => "launcher");
}

export function useMethod(): Method {
  const platform = usePlatform();
  const method = useStoredMethod();
  return platform === "linux" ? "launcher" : method;
}
