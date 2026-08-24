type TerminalLine = {
  text: string;
  tone?: "default" | "muted" | "success";
};

export default function TerminalWindow({
  title,
  lines,
}: {
  title: string;
  lines: TerminalLine[];
}) {
  const toneClass: Record<NonNullable<TerminalLine["tone"]>, string> = {
    default: "text-foreground",
    muted: "text-muted",
    success: "text-accent-green",
  };

  return (
    <div className="rounded-lg border border-surface-border bg-surface overflow-hidden font-mono text-sm">
      <div className="flex items-center gap-2 border-b border-surface-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f56]" />
        <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="size-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2 text-muted text-xs">{title}</span>
      </div>
      <div className="px-4 py-4 flex flex-col gap-1.5">
        {lines.map((line, i) => (
          <div key={i} className={toneClass[line.tone ?? "default"]}>
            {line.text}
          </div>
        ))}
      </div>
    </div>
  );
}
