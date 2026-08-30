"use client";

import type { ReactNode } from "react";
import { YANDEX_METRIKA_ID } from "@/lib/site";

export default function ContactCard({
  icon,
  label,
  value,
  href,
  goal,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  goal?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-lg border border-surface-border bg-surface p-5 hover:border-primary transition-colors"
      onClick={() => goal && window.ym?.(YANDEX_METRIKA_ID, "reachGoal", goal)}
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-background border border-surface-border text-primary">
        {icon}
      </span>
      <div>
        <div className="text-sm text-muted mb-0.5">{label}</div>
        <div className="font-mono text-base">{value}</div>
      </div>
    </a>
  );
}
