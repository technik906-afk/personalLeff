import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Case } from "@/data/cases";

export default function CaseCard({
  item,
  priority,
}: {
  item: Case;
  priority?: boolean;
}) {
  return (
    <article className="rounded-lg border border-surface-border bg-surface p-6 sm:p-8 overflow-visible">
      <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 items-center">
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-semibold">{item.title}</h3>
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

          <p className="text-sm text-muted leading-relaxed">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded bg-primary-strong px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity w-fit"
            >
              Смотреть сайт
              <ArrowUpRight size={16} />
            </a>
            {item.caseStudyHref && (
              <Link
                href={item.caseStudyHref}
                className="inline-flex items-center gap-1.5 rounded border border-primary text-primary px-4 py-2.5 text-sm font-semibold hover:bg-primary-strong hover:text-white hover:border-primary-strong transition-colors w-fit"
              >
                Читать историю проекта
              </Link>
            )}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[1850/967] rounded-md overflow-hidden border border-surface-border shadow-xl">
            <Image
              src={item.desktopImage}
              alt={`${item.title} — десктоп`}
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover object-top"
              preload={priority}
              loading={priority ? "eager" : undefined}
              fetchPriority={priority ? "high" : undefined}
            />
          </div>

          {item.mobileImage && (
            <div className="absolute -bottom-8 -right-4 sm:-right-8 w-[28%] min-w-[90px] aspect-[576/1280] rounded-xl overflow-hidden border border-surface-border-strong shadow-2xl">
              <Image
                src={item.mobileImage}
                alt={`${item.title} — мобильная версия`}
                fill
                sizes="20vw"
                className="object-cover object-top"
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
