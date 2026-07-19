"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { useMethod } from "@/lib/method";
import { usePlatform } from "@/lib/platform";

export type FaqItem = {
  id: number;
  q: string;
  display?: ReactNode;
  a: ReactNode;
  platform?: "windows" | "linux";
  method?: "launcher" | "downloader";
};

function Chevron() {
  return (
    <svg
      className="question-chevron"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      className="question-copy-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="question-copy-check"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Item({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [copied, setCopied] = useState(0);
  const copyTimer = useRef(0);
  const answerId = `faq-${index}-answer`;
  const anchor = `q${item.id}`;

  function copyLink() {
    const url = `${window.location.href.split("#")[0]}#${anchor}`;
    navigator.clipboard.writeText(url).catch(() => {});
    setCopied((tick) => tick + 1);
    window.clearTimeout(copyTimer.current);
    copyTimer.current = window.setTimeout(() => setCopied(0), 1400);
  }

  useEffect(() => {
    function openFromHash() {
      if (window.location.hash.slice(1) !== anchor) return;
      setOpen(true);
      setPulse(true);
      requestAnimationFrame(() =>
        document.getElementById(anchor)?.scrollIntoView({ block: "start" }),
      );
    }
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [anchor]);

  return (
    <div
      id={anchor}
      onAnimationEnd={(event) => {
        if (event.animationName === "hashPulse") setPulse(false);
      }}
      className={`question${open ? " open" : ""}${pulse ? " hash-pulse" : ""}`}
    >
      <div className="question-row">
        <button
          type="button"
          className="question-header"
          aria-expanded={open}
          aria-controls={answerId}
          onClick={() => {
            const next = !open;
            if (next) window.history.replaceState(null, "", `#${anchor}`);
            setOpen(next);
          }}
        >
          <span className="question-title">{item.display ?? item.q}</span>
          <Chevron />
        </button>
        <button
          type="button"
          className={copied > 0 ? "question-copy copied" : "question-copy"}
          aria-label={copied > 0 ? "Link copied" : "Copy link"}
          onClick={copyLink}
        >
          <CopyIcon />
          {copied > 0 && <CheckIcon key={copied} />}
        </button>
      </div>
      <div id={answerId} className="answer" inert={!open ? true : undefined}>
        <div className="answer-clip">
          <div className="answer-inner">{item.a}</div>
        </div>
      </div>
    </div>
  );
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const platform = usePlatform();
  const method = useMethod();
  const visible = items.filter(
    (item) =>
      (!item.platform || item.platform === platform) &&
      (!item.method || item.method === method),
  );
  return (
    <div className="faq-list">
      {visible.map((item, index) => (
        <Item key={item.q} item={item} index={index} />
      ))}
    </div>
  );
}
