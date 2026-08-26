import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Стоимость и сроки разработки сайта",
  description:
    "Цены на разработку лендингов, сайтов-визиток и интернет-магазинов под ключ.",
  alternates: { canonical: "/price" },
};

const SERVICES = [
  {
    title: "Лендинг / одностраничный сайт",
    timeframe: "от 14 рабочих дней",
    price: "от 70 000 ₽",
  },
  {
    title: "Интернет-магазин под ключ",
    timeframe: "от 20 рабочих дней",
    price: "от 110 000 ₽",
  },
  {
    title: "Многостраничный сайт-визитка",
    timeframe: "от 20 рабочих дней",
    price: "от 100 000 ₽",
  },
  {
    title: "Редизайн интернет-магазина без отключения на период работ",
    timeframe: "от 5 рабочих дней",
    price: "от 40 000 ₽",
  },
  {
    title: "Личный кабинет с бонусной системой для интернет-магазина",
    timeframe: "от 5 рабочих дней",
    price: "от 30 000 ₽",
  },
  {
    title: "Аудит действующего сайта",
    timeframe: "от 3 рабочих дней",
    price: "от 5 000 ₽",
  },
];

const PAYMENT_STAGES = [
  {
    step: "1",
    title: "Предоплата после договора",
    description: "25% — в течение 1 рабочего дня после подписания договора.",
  },
  {
    step: "2",
    title: "Перед стартом работ",
    description: "45% — вношу задачу в разработку только после этого платежа.",
  },
  {
    step: "3",
    title: "Итоговая оплата",
    description: "30% — при готовности сайта на 90%, до передачи финального результата.",
  },
];

export default function PricePage() {
  return (
    <div className="max-w-(--container-content) mx-auto px-4 sm:px-10 py-16">
      <h1 className="text-3xl font-bold mb-4">Стоимость и сроки</h1>
      <p className="text-muted mb-10 max-w-lg">
        Цены и сроки ориентировочные — точная оценка зависит от задач.
        Опишите проект в Telegram, и я посчитаю конкретно под него.
      </p>

      <div className="rounded-lg border border-surface-border bg-surface divide-y divide-surface-border">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="flex items-center justify-between gap-6 p-6"
          >
            <div>
              <div className="text-xs text-muted font-mono mb-1">
                {service.timeframe}
              </div>
              <div className="font-semibold">{service.title}</div>
            </div>
            <div className="shrink-0 font-mono text-lg text-primary">
              {service.price}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-16 mb-8">
        Оплата делится на 3 этапа
      </h2>
      <div className="grid sm:grid-cols-3 gap-8">
        {PAYMENT_STAGES.map((stage) => (
          <div key={stage.step}>
            <div className="flex size-8 items-center justify-center rounded-full bg-primary text-white text-sm font-semibold mb-4">
              {stage.step}
            </div>
            <h3 className="font-semibold mb-2">{stage.title}</h3>
            <p className="text-sm text-muted leading-relaxed">
              {stage.description}
            </p>
          </div>
        ))}
      </div>

      <Link
        href="/contacts"
        className="inline-flex items-center gap-1.5 mt-16 rounded bg-primary px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity w-fit"
      >
        Обсудить проект
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
