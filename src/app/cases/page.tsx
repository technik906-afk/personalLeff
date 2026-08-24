import type { Metadata } from "next";
import CaseCard from "@/components/CaseCard";
import { cases } from "@/data/cases";

export const metadata: Metadata = {
  title: "Кейсы — Лев Алексеев",
};

export default function CasesPage() {
  return (
    <div className="max-w-(--container-content) mx-auto px-4 sm:px-10 py-16">
      <h1 className="text-3xl font-bold mb-10">Кейсы</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {cases.map((item) => (
          <CaseCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
