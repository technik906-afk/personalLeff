import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Конструктор сайта или разработка с нуля — что выбрать",
  description:
    "Tilda, WordPress, Wix или свой код: по каким критериям выбирать между конструктором и разработкой с нуля для лендинга, блога и интернет-магазина.",
  alternates: { canonical: "/blog/konstruktor-ili-razrabotka-s-nulya" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Конструктор сайта или разработка с нуля — что выбрать",
  datePublished: "2026-08-30",
  dateModified: "2026-08-30",
  author: { "@type": "Person", name: "Лев Алексеев" },
};

const CRITERIA = [
  {
    title: "Скорость и стоимость запуска",
    constructor:
      "Сайт можно собрать за дни своими силами или за небольшой бюджет, без разработчика.",
    custom:
      "Дороже и дольше на старте — верстается и программируется под задачу с нуля.",
  },
  {
    title: "Гибкость и нестандартная логика",
    constructor:
      "Хорошо работает через готовые блоки и плагины под типовые сценарии. Нестандартная логика — свой калькулятор цены, вариативный каталог со скидками по условиям — часто упирается в возможности платформы.",
    custom:
      "Логика проектируется конкретно под задачу — от расчёта цены до структуры каталога.",
  },
  {
    title: "Производительность",
    constructor:
      "Чем больше блоков и плагинов навешано на страницу, тем она тяжелее — типовая проблема на WordPress с несколькими одновременно установленными конструкторами страниц.",
    custom:
      "Скорость под контролем — грузится ровно то, что нужно странице.",
  },
  {
    title: "Зависимость от платформы",
    constructor:
      "Сайт живёт в экосистеме конструктора: обновления тем и плагинов, ограничения хостинга — часть из этого вне вашего контроля.",
    custom: "Код принадлежит полностью, перенести на другой сервер можно в любой момент.",
  },
];

export default function ConstructorVsCustomArticle() {
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
          { label: "Конструктор сайта или разработка с нуля" },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold mb-3 max-w-3xl">
        Конструктор сайта (Tilda, WordPress, Wix) или разработка с нуля —
        что выбрать
      </h1>

      <p className="text-sm text-muted font-mono mb-8">
        Лев Алексеев · 30 августа 2026
      </p>

      <p className="text-muted leading-relaxed mb-16 max-w-2xl">
        Конструктор и разработка с нуля решают разные задачи. Для лендинга,
        визитки или блога конструктор часто быстрее и дешевле в запуске. Для
        интернет-магазина со своей логикой каталога, нестандартными
        интеграциями или высокими требованиями к скорости обычно оправдана
        разработка с нуля. Ниже — по каким критериям выбирать.
      </p>

      <div className="flex flex-col gap-10 mb-16 max-w-2xl">
        {CRITERIA.map((item) => (
          <div key={item.title}>
            <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-surface-border bg-surface p-4">
                <div className="text-xs text-muted font-mono mb-2">
                  Конструктор
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {item.constructor}
                </p>
              </div>
              <div className="rounded-lg border border-surface-border bg-surface p-4">
                <div className="text-xs text-muted font-mono mb-2">
                  Разработка с нуля
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {item.custom}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-8">Реальный пример</h2>
      <p className="text-muted leading-relaxed mb-16 max-w-2xl">
        Аудировал сайт на WordPress с явными проблемами скорости на мобильных
        (Lighthouse 21 из 100). Причина — не WordPress сам по себе, а два
        одновременно установленных конструктора страниц и заброшенные годами
        обновления плагинов. Рекомендация по итогам была не «переезжайте на
        другой движок», а обновить PHP, отказаться от одного из двух
        конструкторов и закрыть накопленные уязвимости. Платформа редко
        бывает виновата сама по себе — чаще дело в обслуживании.
      </p>

      <h2 className="text-2xl font-semibold mb-8">Когда достаточно конструктора</h2>
      <ul className="flex flex-col gap-3 mb-16 max-w-2xl">
        {[
          "Лендинг, сайт-визитка или блог без сложной логики",
          "Нужно проверить идею быстро и с минимальным бюджетом",
          "Контент будет вести не технический человек",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
            <Check size={16} className="text-primary shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-8">Когда оправдана разработка с нуля</h2>
      <ul className="flex flex-col gap-3 mb-16 max-w-2xl">
        <li className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
          <Check size={16} className="text-primary shrink-0 mt-0.5" />
          <Link href="/internet-magazin-na-django" className="text-primary hover:underline">
            Интернет-магазин
          </Link>{" "}
          с нетиповой логикой каталога, вариантами товаров или собственным
          конструктором/калькулятором
        </li>
        <li className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
          <Check size={16} className="text-primary shrink-0 mt-0.5" />
          Важна скорость загрузки и полный контроль над SEO-структурой
        </li>
        <li className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
          <Check size={16} className="text-primary shrink-0 mt-0.5" />
          Нужны интеграции, которые плохо ложатся на готовые плагины —
          например, доставка по живым тарифам СДЭК/Почты и приём оплаты с
          вебхуками, как в{" "}
          <Link href="/cases/uaartist" className="text-primary hover:underline">
            кейсе uaartist
          </Link>
        </li>
        <li className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
          <Check size={16} className="text-primary shrink-0 mt-0.5" />
          Планируется расти дальше типового набора функций платформы
        </li>
      </ul>

      <div className="rounded-lg border border-surface-border bg-surface p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2 className="font-semibold mb-1.5">Не уверены, что подойдёт?</h2>
          <p className="text-sm text-muted leading-relaxed">
            Опишите задачу — скажу честно, нужен ли в вашем случае конструктор
            или разработка с нуля.
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
