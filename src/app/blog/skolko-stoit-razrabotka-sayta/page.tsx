import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Сколько стоит разработка сайта в 2026",
  description:
    "От 18 000 ₽ за лендинг до 55 000 ₽ и выше за интернет-магазин под ключ. Разбивка по типам проектов и реальный пример на кейсе uaartist.",
  alternates: { canonical: "/blog/skolko-stoit-razrabotka-sayta" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Сколько стоит разработка сайта в 2026",
  datePublished: "2026-08-30",
  dateModified: "2026-08-30",
  author: { "@type": "Person", name: "Лев Алексеев" },
};

export default function PricingArticle() {
  return (
    <div className="max-w-(--container-content) mx-auto px-4 sm:px-10 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Блог", href: "/blog" },
          { label: "Сколько стоит разработка сайта в 2026" },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold mb-3 max-w-3xl">
        Сколько стоит разработка сайта в 2026
      </h1>

      <p className="text-sm text-muted font-mono mb-8">
        Лев Алексеев · 30 августа 2026
      </p>

      <p className="text-muted leading-relaxed mb-16 max-w-2xl">
        Разработка сайта в 2026 году стоит от 18 000 ₽ за лендинг до 55 000 ₽
        и выше за интернет-магазин под ключ. Сроки — от 7 до 18+ рабочих дней
        в зависимости от сложности. Ниже — разбивка по типам проектов и то,
        как разработка выглядит на практике, на примере реального кейса.
      </p>

      <h2 className="text-2xl font-semibold mb-8">Цены и сроки по типам проектов</h2>

      {/* Таблица — от sm и выше */}
      <div className="hidden sm:block mb-16">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-surface-border text-left text-muted">
              <th className="py-3 pr-4 font-medium">Тип проекта</th>
              <th className="py-3 pr-4 font-medium whitespace-nowrap">Срок</th>
              <th className="py-3 font-medium whitespace-nowrap">Цена</th>
            </tr>
          </thead>
          <tbody>
            {SERVICES.map((service) => (
              <tr key={service.title} className="border-b border-surface-border">
                <td className="py-3 pr-4">{service.title}</td>
                <td className="py-3 pr-4 font-mono text-muted whitespace-nowrap">
                  {service.timeframe}
                </td>
                <td className="py-3 font-mono text-primary whitespace-nowrap">
                  {service.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Карточки — на мобильном, таблица с 3 колонками туда не влезает читаемо */}
      <div className="sm:hidden rounded-lg border border-surface-border bg-surface divide-y divide-surface-border mb-16">
        {SERVICES.map((service) => (
          <div key={service.title} className="p-4">
            <div className="font-semibold mb-1.5">{service.title}</div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted font-mono">{service.timeframe}</span>
              <span className="text-primary font-mono">{service.price}</span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-8">
        Как это выглядит на практике: кейс uaartist
      </h2>
      <p className="text-muted leading-relaxed mb-4 max-w-2xl">
        Технически ядро интернет-магазина{" "}
        <Link href="/cases/uaartist" className="text-primary hover:underline">
          uaartist
        </Link>{" "}
        — каталог, корзина, оформление заказа, оплата, личный кабинет — было
        готово за 4 дня (3–6 июля 2026), ещё через день сайт был на проде.
        Полный таймлайн со всеми датами — в самом кейсе.
      </p>

      <p className="text-muted leading-relaxed mb-16 max-w-2xl">
        Это не значит, что заказ на аналогичный магазин займёт 4 дня: это был
        собственный проект без внешних правок и без ограничения по часам в
        сутках. Срок «от 18 рабочих дней» в таблице выше учитывает
        согласование с заказчиком, правки по ходу работы и обычный рабочий
        график, а не рекорд скорости на своём проекте.
      </p>

      <div className="rounded-lg border border-surface-border bg-surface p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2 className="font-semibold mb-1.5">Нужна точная оценка?</h2>
          <p className="text-sm text-muted leading-relaxed">
            Опишите проект — посчитаю конкретно под него, с учётом реальных
            задач.
          </p>
        </div>
        <Link
          href="/price"
          className="inline-flex items-center gap-1.5 rounded bg-primary-strong px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity w-fit shrink-0"
        >
          Смотреть цены
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
