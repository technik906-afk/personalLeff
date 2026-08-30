"use client";

import type { ReactNode } from "react";
import { YANDEX_METRIKA_ID } from "@/lib/site";

export default function TrackedExternalLink({
  href,
  goal,
  className,
  children,
}: {
  href: string;
  goal: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => window.ym?.(YANDEX_METRIKA_ID, "reachGoal", goal)}
    >
      {children}
    </a>
  );
}
