import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type RelatedItem = {
  href: string;
  label: string;
  note?: string;
};

export default function RelatedLinks({
  title = "Ещё по теме",
  items,
}: {
  title?: string;
  items: RelatedItem[];
}) {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-16 mb-6">{title}</h2>
      <ul className="flex flex-col gap-3 max-w-2xl">
        {items.map((item) => (
          <li
            key={item.href}
            className="flex items-start gap-2.5 text-sm text-muted leading-relaxed"
          >
            <ArrowUpRight size={16} className="text-primary shrink-0 mt-0.5" />
            <span>
              <Link
                href={item.href}
                className="text-primary hover:underline"
              >
                {item.label}
              </Link>
              {item.note ? ` — ${item.note}` : null}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
