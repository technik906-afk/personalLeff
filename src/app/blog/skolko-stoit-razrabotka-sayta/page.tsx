import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { SERVICES } from "@/data/services";
import { SITE_URL, SITE_NAME, OG_BASE } from "@/lib/site";

const path = "/blog/skolko-stoit-razrabotka-sayta";
const title = "Сколько стоит разработка сайта в 2026";
const description =
  "От чего зависит цена разработки сайта, как читать смету и не ошибиться с бюджетом. Вилки по типам проектов и реальный пример на кейсе uaartist.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    ...OG_BASE,
    title,
    description,
    url: path,
    type: "article",
    publishedTime: "2026-08-30T00:00:00.000Z",
    modifiedTime: "2026-08-31T00:00:00.000Z",
  },
  twitter: { card: "summary_large_image", title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Сколько стоит разработка сайта в 2026",
  datePublished: "2026-08-30",
  dateModified: "2026-08-31",
  image: [`${SITE_URL}${path}/opengraph-image`],
  author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  publisher: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  mainEntityOfPage: `${SITE_URL}${path}`,
};

const PRICE_FACTORS = [
  {
    title: "Количество и типы страниц",
    description:
      "Лендинг — это одна длинная страница, визитка — до пяти, каталог — сотни страниц по одному шаблону. Стоит не количество адресов, а количество уникальных шаблонов: каждый новый тип страницы верстается отдельно. В прайсе это видно по разнице между лендингом (от 18 000 ₽) и визиткой до пяти страниц (от 30 000 ₽).",
  },
  {
    title: "Каталог и варианты товара",
    description:
      "Товар с размером, цветом и отдельным остатком по каждой комбинации — это не список позиций, а модель данных с админкой под неё. В кейсе uaartist размер и цвет заведены как отдельные сущности со своей ценой и остатком, иначе корректно считать наличие невозможно.",
  },
  {
    title: "Приём оплаты и интеграции",
    description:
      "Эквайринг — это не только кнопка «оплатить»: чек по 54-ФЗ, вебхук с перепроверкой статуса платежа через API банка, обработка отказов и повторных попыток. Доставка по актуальным тарифам СДЭК или Почты — ещё одна отдельная интеграция со своими граничными случаями.",
  },
  {
    title: "Личный кабинет и авторизация",
    description:
      "Регистрация, вход, восстановление пароля, история заказов, бонусы или скидки — каждый пункт это экраны плюс серверная логика. Поэтому личный кабинет с бонусной системой стоит в прайсе отдельной строкой (от 18 000 ₽), а не идёт бесплатным довеском к магазину.",
  },
  {
    title: "Дизайн",
    description:
      "Адаптация готового шаблона под контент дешевле, чем макет с нуля под фирменный стиль с индивидуальными экранами. Оба варианта рабочие — разница в бюджете и сроке, а не в том, что один хуже другого.",
  },
  {
    title: "Контент",
    description:
      "Тексты и фотографии товаров кто-то должен подготовить. Если это на стороне заказчика — в смету разработки они не входят, но напрямую влияют на дату запуска: пустой каталог не даёт продавать, даже когда сайт технически готов.",
  },
  {
    title: "Нестандартная логика",
    description:
      "Калькулятор цены, конфигуратор товара, нетиповые условия скидок — это оценивается индивидуально. Готовой средней цифры для такого нет, и подставлять её в прайс было бы гаданием.",
  },
];

const PROJECT_STAGES = [
  {
    title: "ТЗ и структура",
    description:
      "Прописывается до вёрстки. Для магазина структура каталога должна повторять реальные поисковые запросы, а не общие категории, — это решается на бумаге, пока код ещё не написан. Сэкономить здесь обычно значит переделывать потом.",
  },
  {
    title: "Бэкенд и модель данных",
    description:
      "Сущности, связи, админка, API. От того, насколько точно модель описывает предметную область, зависит стоимость каждой последующей доработки.",
  },
  {
    title: "Фронтенд по макету",
    description:
      "Адаптивная вёрстка страниц, состояния форм, поведение на мобильных. Серверный рендер каталога и карточек товара — ради скорости и индексации.",
  },
  {
    title: "Интеграции и тестирование",
    description:
      "Оплата прогоняется тестовым платежом до сдачи, ключевые пользовательские пути закрываются E2E-тестами. Баг в приёме денег, найденный на проде, обходится дороже, чем время на тесты.",
  },
  {
    title: "Деплой и эксплуатация",
    description:
      "Сервер, HTTPS с автопродлением, бэкапы базы и медиафайлов, мониторинг ошибок. Это часть работы, а не отдельная необязательная опция.",
  },
  {
    title: "Согласование и правки",
    description:
      "Правки по ходу — норма, и они заложены в формулировку «от N рабочих дней». Свой проект без внешних согласований делается быстрее клиентского при том же объёме.",
  },
];

const BUDGET_MISTAKES = [
  {
    title: "Нет буфера на правки",
    description:
      "Правки по ходу работы — не форс-мажор, а обычная часть процесса. Бюджет впритык под первоначальную смету почти всегда придётся расширять.",
  },
  {
    title: "Забыты регулярные расходы",
    description:
      "Домен, хостинг или сервер, комиссия платёжной системы, почтовые и SMS-рассылки — это ежемесячные траты сверх стоимости разработки.",
  },
  {
    title: "Экономия на ТЗ",
    description:
      "Без проработанной структуры переделки после старта вёрстки съедают больше, чем удалось сэкономить на этапе планирования.",
  },
  {
    title: "«Дизайн потом»",
    description:
      "Переверстать готовый сайт под новый макет дороже, чем один раз сверстать по утверждённому макету. Порядок «сначала макет, потом код» дешевле обратного.",
  },
];

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
        Лев Алексеев · обновлено 31 августа 2026
      </p>

      <p className="text-muted leading-relaxed mb-6 max-w-2xl">
        Короткий ответ: от 18 000 ₽ за лендинг до 55 000 ₽ и выше за
        интернет-магазин под ключ, сроки — от 7 до 18+ рабочих дней. Вилка
        широкая, и попадание в её нижнюю или верхнюю границу зависит от
        вполне конкретных вещей. Ниже — от чего именно, из чего складывается
        срок и на чём чаще всего ошибаются в бюджете.
      </p>

      <p className="text-muted leading-relaxed mb-16 max-w-2xl">
        Актуальный прайс по всем типам проектов — на странице{" "}
        <Link href="/price" className="text-primary hover:underline">
          «Стоимость и сроки»
        </Link>
        . Эта статья объясняет, что стоит за цифрами.
      </p>

      <h2 className="text-2xl font-semibold mb-8">Вилки по типам проектов</h2>

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

      <h2 className="text-2xl font-semibold mb-8">От чего зависит итоговая цена</h2>
      <div className="flex flex-col gap-8 mb-16 max-w-2xl">
        {PRICE_FACTORS.map((item) => (
          <div key={item.title}>
            <h3 className="font-semibold mb-1.5">{item.title}</h3>
            <p className="text-sm text-muted leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-8">Из чего складывается срок</h2>
      <div className="flex flex-col gap-8 mb-16 max-w-2xl">
        {PROJECT_STAGES.map((item) => (
          <div key={item.title}>
            <h3 className="font-semibold mb-1.5">{item.title}</h3>
            <p className="text-sm text-muted leading-relaxed">
              {item.description}
            </p>
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

      <h2 className="text-2xl font-semibold mb-8">Частые ошибки в бюджете</h2>
      <ul className="flex flex-col gap-4 mb-16 max-w-2xl">
        {BUDGET_MISTAKES.map((item) => (
          <li
            key={item.title}
            className="flex items-start gap-2.5 text-sm text-muted leading-relaxed"
          >
            <Check size={16} className="text-primary shrink-0 mt-0.5" />
            <span>
              <span className="text-foreground font-medium">{item.title}.</span>{" "}
              {item.description}
            </span>
          </li>
        ))}
      </ul>

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

      <RelatedLinks
        items={[
          {
            href: "/internet-magazin-na-django",
            label: "Интернет-магазин на Django под ключ",
            note: "цена, сроки и что входит именно по этому типу проектов",
          },
          {
            href: "/blog/konstruktor-ili-razrabotka-s-nulya",
            label: "Конструктор сайта или разработка с нуля",
            note: "на чём можно сэкономить, а на чём выйдет дороже",
          },
          {
            href: "/cases/uaartist",
            label: "Кейс uaartist",
            note: "полный таймлайн разработки магазина с датами и решениями",
          },
        ]}
      />
    </div>
  );
}
