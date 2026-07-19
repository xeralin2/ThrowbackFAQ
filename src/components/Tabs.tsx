"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export type TabItem<T extends string> = {
  id: T;
  label: string;
};

export function Tabs<T extends string>({
  tabs,
  active,
  onSelect,
}: {
  tabs: TabItem<T>[];
  active: T;
  onSelect: (id: T) => void;
}) {
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useIsoLayoutEffect(() => {
    const el = refs.current[active];
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active]);

  useEffect(() => {
    function remeasure() {
      const el = refs.current[active];
      if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    }
    window.addEventListener("resize", remeasure);
    document.fonts?.ready.then(remeasure);
    return () => window.removeEventListener("resize", remeasure);
  }, [active]);

  return (
    <div className="border-b border-border">
      <div className="relative flex flex-wrap gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            ref={(el) => {
              refs.current[tab.id] = el;
            }}
            type="button"
            onClick={() => onSelect(tab.id)}
            className={`px-4 py-2 font-mono text-[0.75rem] uppercase tracking-[0.12em] transition-colors ${
              active === tab.id
                ? "text-text"
                : "text-text-muted hover:text-text"
            }`}
          >
            {tab.label}
          </button>
        ))}
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-[-1px] h-[2px] bg-brand transition-[left,width] duration-300 ease-out"
          style={{ left: indicator.left, width: indicator.width }}
        />
      </div>
    </div>
  );
}
