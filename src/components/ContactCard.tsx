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
      className="flex items-center gap-4 rounded-lg border border-surface-border bg-surface p-5 hover:border-primary transition-colors"
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-background border border-surface-border text-primary">
        <Icon size={18} />
      </span>
      <div>
        <div className="text-sm text-muted mb-0.5">{label}</div>
        <div className="font-mono text-base">{value}</div>
      </div>
    </a>
  );
}
