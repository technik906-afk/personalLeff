import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES, parsePriceValue } from "@/data/services";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const title = "Стоимость и сроки разработки сайта";
const description =
  "Цены на разработку лендингов, сайтов-визиток, интернет-магазинов и веб-приложений под ключ.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/price" },
  openGraph: { title, description, url: "/price" },
  twitter: { card: "summary_large_image", title, description },
};

const PRICES_UPDATED_AT = "30 августа 2026";

const FAQ_ITEMS = [
  {
    question: "Можно ли оплатить не сразу всю сумму?",
    answer:
      "Да, оплата делится на 3 этапа: 25% после подписания договора, 45% перед стартом работ, 30% по готовности сайта.",
  },
  {
    question: "Что входит в стоимость?",
    answer:
      "Конкретный список — в карточке каждой услуги выше: от адаптивной вёрстки и базового SEO до каталога с админкой и приёма оплаты, в зависимости от типа проекта.",
  },
  {
    question: "Сколько занимает разработка?",
    answer:
      "От 2 рабочих дней (аудит) до 18 рабочих дней (интернет-магазин под ключ) — точный срок указан в карточке каждой услуги.",
  },
  {
    question: "Что после сдачи проекта — есть поддержка?",
    answer:
      "Да, сопровождение после релиза, мониторинг и масштабирование при необходимости.",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const servicesJsonLd = SERVICES.map((service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: service.title,
  provider: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  offers: {
    "@type": "Offer",
    priceCurrency: "RUB",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: parsePriceValue(service.price),
      priceCurrency: "RUB",
    },
  },
}));

export default function PricePage() {
  return (
    <div className="max-w-(--container-content) mx-auto px-4 sm:px-10 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {servicesJsonLd.map((service, index) => (
        <script
          key={SERVICES[index].title}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
        />
      ))}
      <h1 className="text-3xl font-bold mb-4">Стоимость и сроки</h1>
      <p className="text-muted mb-2 max-w-lg">
        Вилки цен и сроков по всем типам проектов. Точную цену считаю под
        конкретную задачу — опишите её в Telegram.
      </p>
      <p className="text-muted text-sm mb-10">
        Актуально на {PRICES_UPDATED_AT}
      </p>

      <div className="rounded-lg border border-surface-border bg-surface divide-y divide-surface-border">
        {SERVICES.map((service) => (
          <div key={service.title} className="p-6">
            <div className="flex items-center justify-between gap-6 mb-4">
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
            <ul className="flex flex-col gap-1.5">
              {service.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <Check size={14} className="text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            {service.detailHref && (
              <Link
                href={service.detailHref}
                className="inline-block mt-4 text-sm text-primary hover:underline"
              >
                Подробнее →
              </Link>
            )}
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-16 mb-8">
        Оплата делится на 3 этапа
      </h2>
      <div className="grid sm:grid-cols-3 gap-8">
        {PAYMENT_STAGES.map((stage) => (
          <div key={stage.step}>
            <div className="flex size-8 items-center justify-center rounded-full bg-primary-strong text-white text-sm font-semibold mb-4">
              {stage.step}
            </div>
            <h3 className="font-semibold mb-2">{stage.title}</h3>
            <p className="text-sm text-muted leading-relaxed">
              {stage.description}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-16 mb-8">Частые вопросы</h2>
      <div className="flex flex-col gap-6 max-w-2xl">
        {FAQ_ITEMS.map((item) => (
          <div key={item.question}>
            <h3 className="font-semibold mb-1.5">{item.question}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.answer}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-16 mb-8">Разобраться подробнее</h2>
      <ul className="flex flex-col gap-3 max-w-2xl">
        <li className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
          <ArrowRight size={16} className="text-primary shrink-0 mt-0.5" />
          <span>
            <Link
              href="/blog/skolko-stoit-razrabotka-sayta"
              className="text-primary hover:underline"
            >
              От чего зависит цена проекта и как читать смету
            </Link>{" "}
            — разбор в блоге
          </span>
        </li>
        <li className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
          <ArrowRight size={16} className="text-primary shrink-0 mt-0.5" />
          <span>
            <Link
              href="/internet-magazin-na-django"
              className="text-primary hover:underline"
            >
              Интернет-магазин на Django под ключ
            </Link>{" "}
            — что входит, сроки и стек по этому типу проектов
          </span>
        </li>
      </ul>

      <Link
        href="/contacts"
        className="inline-flex items-center gap-1.5 mt-16 rounded bg-primary-strong px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity w-fit"
      >
        Обсудить проект
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
