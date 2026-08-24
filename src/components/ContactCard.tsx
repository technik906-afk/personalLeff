import type { LucideIcon } from "lucide-react";

export default function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg border border-surface-border bg-surface p-6 flex flex-col gap-4 hover:border-primary transition-colors"
    >
      <span className="flex size-10 items-center justify-center rounded bg-background border border-surface-border text-primary">
        <Icon size={18} />
      </span>
      <div>
        <div className="text-sm text-muted mb-1">{label}</div>
        <div className="font-mono text-base">{value}</div>
      </div>
    </a>
  );
}
