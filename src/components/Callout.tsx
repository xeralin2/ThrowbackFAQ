import type { ReactNode } from "react";

type CalloutProps = {
  variant?: "notice" | "warning";
  label: string;
  children: ReactNode;
  className?: string;
};

const linkClasses =
  "[&_a]:text-[#f0c040] [&_a]:underline [&_a:hover]:text-[#ffd966] [&_code]:rounded-[4px] [&_code]:border [&_code]:px-[0.4em] [&_code]:py-[0.1em] [&_code]:font-mono [&_code]:text-[0.85em]";

const variantClasses: Record<
  NonNullable<CalloutProps["variant"]>,
  { box: string; label: string }
> = {
  notice: {
    box: "animate-notice-pulse border-[#3a3000] border-l-[3px] border-l-accent bg-[#0d0d00] text-[#c8b060] [&_code]:border-[#3a3000] [&_code]:bg-[#1a1500] [&_code]:text-[color-mix(in_srgb,#c8b060_55%,white)]",
    label: "text-accent",
  },
  warning: {
    box: "animate-warning-pulse border-[#3a0000] border-l-[3px] border-l-brand bg-[#0d0000] text-[#c86060] [&_code]:border-[#3a0000] [&_code]:bg-[#1a0000] [&_code]:text-[color-mix(in_srgb,#c86060_55%,white)]",
    label: "text-brand",
  },
};

export function Callout({
  variant = "notice",
  label,
  children,
  className = "mb-6",
}: CalloutProps) {
  const styles = variantClasses[variant];
  return (
    <div
      className={`${className} rounded-md border px-[1.1rem] py-[0.9rem] text-[0.85rem] leading-[1.5] ${linkClasses} ${styles.box}`}
    >
      <strong
        className={`mb-[0.3rem] block font-mono text-[0.72rem] tracking-[0.1em] ${styles.label}`}
      >
        {label}
      </strong>
      {children}
    </div>
  );
}
