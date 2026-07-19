"use client";

import { Tabs, type TabItem } from "@/components/Tabs";
import { setMethod, useStoredMethod, type Method } from "@/lib/method";
import { usePlatform } from "@/lib/platform";

const METHODS: TabItem<Method>[] = [
  { id: "launcher", label: "Xera's Launcher" },
  { id: "downloader", label: "JVAV's Downloader" },
];

export function MethodSwitch() {
  const method = useStoredMethod();
  const platform = usePlatform();
  const hidden = platform === "linux";
  return (
    <div
      inert={hidden ? true : undefined}
      className={`grid transition-[grid-template-rows,opacity,margin] duration-200 ease-out ${
        hidden
          ? "grid-rows-[0fr] opacity-0"
          : "mb-6 grid-rows-[1fr] opacity-100"
      }`}
    >
      <div className="overflow-hidden">
        <Tabs tabs={METHODS} active={method} onSelect={setMethod} />
      </div>
    </div>
  );
}
