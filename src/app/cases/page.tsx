import type { Metadata } from "next";
import CaseCard from "@/components/CaseCard";
import { cases } from "@/data/cases";

const title = "Портфолио: реальные проекты на Django и Next.js";
const description =
  "Примеры разработанных сайтов и интернет-магазинов: uaartist, Propheters и демо-лендинги на Next.js.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/cases" },
  openGraph: { title, description, url: "/cases" },
};

export default function CasesPage() {
  return (
    <div className="max-w-(--container-content) mx-auto px-4 sm:px-10 py-16">
      <h1 className="text-3xl font-bold mb-10">Кейсы</h1>
      <div className="flex flex-col gap-16">
        {cases.map((item, index) => (
          <CaseCard key={item.id} item={item} priority={index === 0} />
        ))}
      </div>
    </div>
  );
}
