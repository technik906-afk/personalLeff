import { ArrowUpRight } from "lucide-react";
import type { Case } from "@/data/cases";

export default function CaseCard({ item }: { item: Case }) {
  return (
    <article className="rounded-lg border border-surface-border bg-surface p-6 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        {item.kind === "demo" && (
          <span className="shrink-0 rounded-full border border-surface-border-strong px-2 py-0.5 text-xs text-muted font-mono">
            демо
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {item.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-background px-2.5 py-1 text-xs font-mono text-muted border border-surface-border"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-sm text-muted leading-relaxed">{item.description}</p>

      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-auto"
      >
        Смотреть сайт
        <ArrowUpRight size={16} />
      </a>
    </article>
  );
}
