import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

const title = "Как я сделал интернет-магазин uaartist — кейс на Django и Next.js";
const description =
  "Реальный таймлайн разработки интернет-магазина аксессуаров: Django + DRF, Next.js, ЮKassa, СДЭК/Почта России — от пустого репозитория до продакшена за месяц.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/cases/uaartist" },
  openGraph: {
    title,
    description,
    url: "/cases/uaartist",
    type: "article",
    publishedTime: "2026-08-30T00:00:00.000Z",
  },
  twitter: { card: "summary_large_image", title, description },
};

const TIMELINE = [
  {
    date: "3 июля 2026",
    title: "Старт: инфраструктура и модель данных",
    description:
      "Монорепозиторий, Django + DRF и Next.js + TypeScript в Docker Compose, версионированное API (/api/v1/). В тот же день — модель каталога: категории с вложенностью, товары с вариантами (размер/цвет как отдельные сущности с ценой и остатком).",
  },
  {
    date: "3–4 июля 2026",
    title: "Backend API и фронтенд-витрина",
    description:
      "DRF-эндпоинты с фильтрацией и пагинацией, OpenAPI-схема — из неё генерируются TypeScript-типы для фронта, чтобы бэкенд и фронт не расходились по контракту. Next.js со страницами каталога, карточки товара, корзины и оформления на серверном рендере.",
  },
  {
    date: "6 июля 2026",
    title: "Оплата: ЮKassa, полный цикл",
    description:
      "Приём платежей с чеком по 54-ФЗ, вебхук с перепроверкой статуса через API ЮKassa. В тот же день прогнан тестовый платёж тестовой картой — полный цикл до вебхука отработал с первого раза.",
  },
  {
    date: "6–7 июля 2026",
    title: "Продакшн-деплой и переезд с Vercel",
    description:
      "Прод-конфигурация (gunicorn + nginx + HTTPS) и сразу — переезд витрины с Vercel на свою VM. Причина переезда: ТСПУ душит зарубежный хостинг для российских посетителей, часть пользователей получала страницу без стилей или вообще не получала её.",
  },
  {
    title: "Конструктор косметичек — вторая попытка",
    description:
      "Первая версия (перенос вёрстки старого лендинга «в лоб») не прижилась: превью там строилось на CSS-псевдоэлементах и точной структуре DOM, на новом стеке разметка не легла, а UX разваливался. Бэкенд к тому моменту был готов и протестирован — пересчёт цены под кастомную конфигурацию делает сервер, а не клиент. Переделал фронтенд-часть с нуля под новый макет, серверный прайсинг оставил как есть.",
  },
  {
    title: "Аккаунты и остальное на продакшене",
    description:
      "JWT-авторизация, гостевой заказ без обязательной регистрации, личный кабинет с историей заказов. На проде: автопродление HTTPS-сертификатов, ежедневные бэкапы базы и еженедельные — медиафайлов (включая копию во внешнем хранилище), 6 сценариев E2E-тестов на Playwright, мониторинг серверных ошибок с алертами в Telegram.",
  },
];

const DECISIONS = [
  "Цена «замерзает» в заказе на момент покупки — не пересчитывается задним числом, если товар потом подорожает или изменится.",
  "Корзина клиентская (localStorage), но при оформлении сервер заново проверяет цены и остатки — клиенту в этом смысле не доверяют.",
  "Кастомная позиция из конструктора хранится в заказе как JSON-конфигурация, а не как искусственно заведённый «вариант товара» — комбинаций слишком много, чтобы заводить их все заранее.",
  "Гостевой заказ обязателен для MVP — обязательная регистрация перед покупкой режет конверсию.",
];

const INFRA = [
  "Cloud.ru VM: Docker-стек nginx + gunicorn (Django) + Next.js (standalone) + PostgreSQL, обновляется через docker compose up -d --build.",
  "HTTPS через Let's Encrypt с автопродлением по cron.",
  "Бэкапы: ежедневно база, еженедельно медиа — локально и зеркалом во внешнем хранилище.",
  "Playwright E2E — 6 сценариев на ключевые пользовательские пути (каталог → корзина → оформление и так далее).",
  "Мониторинг: серверные ошибки 5xx уходят в Telegram, чтобы узнавать о сбое сразу, а не по жалобам покупателей.",
];

const REMAINING = [
  "Наполнить каталог — сейчас в нём 0 товаров, без этого коммерческий запуск не имеет смысла.",
  "Перевести ЮKassa из тестового режима в боевой — для этого нужен уже задеплоенный сайт с офертой, контактами и условиями доставки (частично встречная зависимость с пунктом ниже).",
  "Страницы оферты, доставки и возврата — ждут регистрационные реквизиты ИП.",
];

export default function UaartistCaseStudy() {
  return (
    <div className="max-w-(--container-content) mx-auto px-4 sm:px-10 py-16">
      <Breadcrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Кейсы", href: "/cases" },
          { label: "uaartist" },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold mb-3 max-w-3xl">
        Как я сделал интернет-магазин uaartist: от нуля до приёма оплаты
      </h1>

      <p className="text-sm text-muted font-mono mb-8">
        Лев Алексеев · обновлено 30 августа 2026
      </p>

      <p className="text-muted leading-relaxed mb-4 max-w-2xl">
        uaartist — интернет-магазин аксессуаров ручной работы на Django + DRF
        (бэкенд) и Next.js + TypeScript (фронтенд). Построен с нуля за июль
        2026 года: от пустого репозитория до задеплоенного магазина с рабочим
        приёмом оплаты — за первую неделю.
      </p>

      <p className="text-muted leading-relaxed mb-16 max-w-2xl">
        О текущем статусе: технически проект готов и работает на проде, но
        коммерчески ещё не запущен — каталог пуст, оплата в тестовом режиме.
        Что осталось до открытия, перечислено в конце.
      </p>

      <h2 className="text-2xl font-semibold mb-8">Таймлайн</h2>
      <div className="flex flex-col gap-8 mb-16">
        {TIMELINE.map((item) => (
          <div
            key={item.title}
            className="grid sm:grid-cols-[160px_1fr] gap-2 sm:gap-8"
          >
            {item.date ? (
              <div className="text-xs text-muted font-mono sm:pt-0.5">
                {item.date}
              </div>
            ) : (
              <div />
            )}
            <div>
              <h3 className="font-semibold mb-1.5">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-8">Технические решения</h2>
      <ul className="flex flex-col gap-3 mb-16 max-w-2xl">
        {DECISIONS.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
            <Check size={16} className="text-primary shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-8">Инфраструктура</h2>
      <ul className="flex flex-col gap-3 mb-16 max-w-2xl">
        {INFRA.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
            <Check size={16} className="text-primary shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-8">Что осталось до запуска</h2>
      <div className="rounded-lg border border-surface-border bg-surface p-6 mb-16 max-w-2xl">
        <ul className="flex flex-col gap-3">
          {REMAINING.map((item) => (
            <li key={item} className="text-sm text-muted leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-surface-border bg-surface p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2 className="font-semibold mb-1.5">Нужен похожий магазин?</h2>
          <p className="text-sm text-muted leading-relaxed">
            Что входит, сроки и цена на разработку интернет-магазина на
            Django под ключ.
          </p>
        </div>
        <Link
          href="/internet-magazin-na-django"
          className="inline-flex items-center gap-1.5 rounded bg-primary-strong px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity w-fit shrink-0"
        >
          Подробнее
          <ArrowRight size={16} />
        </Link>
      </div>

      <a
        href="https://uaartist.ru"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 mt-10 text-sm text-primary hover:underline"
      >
        Смотреть сайт uaartist.ru
        <ArrowUpRight size={14} />
      </a>
    </div>
  );
}
