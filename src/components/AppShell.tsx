"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { ScrollReveal } from "./ScrollReveal";
import { breadcrumbFor, normalizePath } from "@/config/nav";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      const target = event.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement
      )
        return;
      if (open) {
        setOpen(false);
        return;
      }
      const current = normalizePath(pathname);
      const crumbs = breadcrumbFor(current);
      const parent = crumbs.length > 1 ? crumbs[crumbs.length - 2].href : null;
      if (!parent || normalizePath(parent) === current) return;
      router.push(parent);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pathname, router, open]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const sidebar = document.getElementById("sidebar");
      const hamburger = document.getElementById("hamburger");
      const target = event.target as Node;
      if (
        sidebar &&
        !sidebar.contains(target) &&
        hamburger &&
        !hamburger.contains(target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <button
        id="hamburger"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        aria-controls="sidebar"
        onClick={() => setOpen((value) => !value)}
        className="fixed left-3 top-3 z-[200] hidden flex-col gap-1 px-2 py-2.5 max-[56.25em]:flex"
      >
        <span
          className={`block h-0.5 w-[18px] rounded-sm bg-text transition-transform duration-300 ease-in-out ${
            open ? "translate-y-[3px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-[18px] rounded-sm bg-text transition-transform duration-300 ease-in-out ${
            open ? "-translate-y-[3px] -rotate-45" : ""
          }`}
        />
      </button>

      <div className="flex min-h-screen">
        <Sidebar open={open} onNavigate={() => setOpen(false)} />
        <div className="ml-[var(--sidebar-w)] flex min-h-screen min-w-0 flex-1 flex-col overflow-y-clip max-[56.25em]:ml-0">
          <Topbar />
          <main
            key={pathname}
            className="w-full animate-fade-up p-8 max-[48em]:p-5 min-[100em]:px-12 min-[100em]:py-10 min-[125em]:px-16 min-[125em]:py-12"
          >
            {children}
          </main>
        </div>
      </div>

      <ScrollReveal />
    </>
  );
}
