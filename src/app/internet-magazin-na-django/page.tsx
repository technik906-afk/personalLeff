import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { SERVICES, parsePriceValue } from "@/data/services";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Интернет-магазин на Django под ключ — цена и сроки",
  description:
    "От 55 000 ₽, от 18 рабочих дней: каталог, приём оплаты, доставка. Django + DRF + Next.js — стек, проверенный в проде на реальном магазине.",
  alternates: { canonical: "/internet-magazin-na-django" },
};

const service = SERVICES.find((s) => s.title === "Интернет-магазин под ключ")!;

const serviceJsonLd = {
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
};

export default function DjangoShopPage() {
  return (
    <div className="max-w-(--container-content) mx-auto px-4 sm:px-10 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 max-w-2xl">
        Интернет-магазин на Django под ключ
      </h1>

      <p className="text-muted leading-relaxed mb-16 max-w-2xl">
        Интернет-магазин на Django + DRF (бэкенд) и Next.js + TypeScript
        (фронтенд) под ключ — {service.price}, срок {service.timeframe}. В
        стоимость входит: {service.includes.join(", ").toLowerCase()}.
      </p>

      <h2 className="text-2xl font-semibold mb-8">Что входит</h2>
      <ul className="flex flex-col gap-3 mb-16 max-w-2xl">
        {service.includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
            <Check size={16} className="text-primary shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-8">Почему Django и Next.js</h2>
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8 mb-16 max-w-2xl">
        <div>
          <h3 className="font-semibold mb-1.5">Django + DRF на бэкенде</h3>
          <p className="text-sm text-muted leading-relaxed">
            Готовая админка для управления каталогом, зрелый ORM под
            вариативные товары (размер, цвет, остатки), встроенная
            безопасность — не нужно собирать это с нуля.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-1.5">Next.js на фронтенде</h3>
          <p className="text-sm text-muted leading-relaxed">
            Серверный рендеринг страниц каталога и карточек товара — важно
            для SEO и скорости загрузки, в отличие от чисто клиентских
            SPA-магазинов.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-8">Пример в проде</h2>
      <p className="text-muted leading-relaxed mb-16 max-w-2xl">
        Этот стек уже работает в проде на интернет-магазине{" "}
        <Link href="/cases/uaartist" className="text-primary hover:underline">
          uaartist
        </Link>
        : каталог с вариантами товаров, оформление заказа с проверкой цен и
        остатков на сервере, приём оплаты ЮKassa, доставка СДЭК/Почта России
        по живым тарифам. В кейсе — реальный таймлайн и технические решения.
      </p>

      <div className="rounded-lg border border-surface-border bg-surface p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2 className="font-semibold mb-1.5">Обсудим ваш магазин?</h2>
          <p className="text-sm text-muted leading-relaxed">
            Опишите, что нужно продавать — посчитаю точный срок и цену под
            задачу.
          </p>
        </div>
        <Link
          href="/contacts"
          className="inline-flex items-center gap-1.5 rounded bg-primary-strong px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity w-fit shrink-0"
        >
          Написать
          <ArrowRight size={16} />
        </Link>
      </div>

      <Link
        href="/price"
        className="inline-flex items-center gap-1.5 mt-10 text-sm text-primary hover:underline"
      >
        Смотреть цены на остальные типы проектов
        <ArrowUpRight size={14} />
      </Link>
    </div>
  );
}
