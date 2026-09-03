import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Calculator from "@/components/Calculator";
import { CALC_UPDATED_AT } from "@/data/calculator";
import { OG_BASE } from "@/lib/site";

const title = "Калькулятор стоимости разработки сайта — расчёт онлайн";
const description =
  "Прикидка бюджета на разработку сайта: количество страниц, интернет-магазин, личный кабинет, блог. Примерная цена сразу, без заявки.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/calculator" },
  openGraph: { ...OG_BASE, title, description, url: "/calculator" },
  twitter: { card: "summary_large_image", title, description },
};

export default function CalculatorPage() {
  return (
    <div className="max-w-(--container-content) mx-auto px-4 sm:px-10 py-16">
      <Breadcrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Калькулятор стоимости" },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold mb-3 max-w-2xl">
        Калькулятор стоимости сайта
      </h1>
      <p className="text-muted leading-relaxed mb-2 max-w-2xl">
        Отметьте, что нужно на сайте, — увидите примерный бюджет. Считается по
        тем же цифрам, что на странице «Цены», без выдуманных цен на то, что
        отдельно никогда не оценивалось.
      </p>
      <p className="text-muted text-sm mb-10">Актуально на {CALC_UPDATED_AT}</p>

      <Calculator />

      <div className="flex flex-col items-start gap-3 mt-12">
        <Link
          href="/price"
          className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
        >
          Полный прайс со сроками по каждому типу проекта
          <ArrowUpRight size={14} />
        </Link>
        <Link
          href="/blog/skolko-stoit-razrabotka-sayta"
          className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
        >
          От чего зависит итоговая цена — разбор в блоге
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  );
}
