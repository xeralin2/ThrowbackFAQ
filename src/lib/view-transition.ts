"use client";

import { flushSync } from "react-dom";

let switching = false;

export function isSwitching(): boolean {
  return switching;
}

export function withViewTransition(apply: () => void): void {
  const run = () => {
    switching = true;
    flushSync(apply);
    queueMicrotask(() => {
      switching = false;
    });
  };
  if (typeof document.startViewTransition !== "function") {
    run();
    return;
  }
  document.startViewTransition(run);
}
