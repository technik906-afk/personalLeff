import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Database, LayoutGrid, Server } from "lucide-react";
import { OG_BASE } from "@/lib/site";

const title = "Fullstack-разработчик на Django и Next.js — Лев Алексеев";
const description =
  "Год в разработке (Django + DRF, Next.js + TypeScript) после нескольких лет системного администрирования и DevOps в команде с микросервисной архитектурой.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { ...OG_BASE, title, description, url: "/about" },
  twitter: { card: "summary_large_image", title, description },
};

const STACK_GROUPS = [
  {
    title: "Backend",
    icon: Database,
    tags: ["Python", "Django", "DRF", "PostgreSQL"],
  },
  {
    title: "Frontend",
    icon: LayoutGrid,
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    title: "Инфраструктура и эксплуатация",
    icon: Server,
    tags: ["Docker", "Nginx", "HTTPS/Let's Encrypt", "Бэкапы", "Мониторинг", "VPS-деплой"],
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-(--container-content) mx-auto px-4 sm:px-10 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 max-w-2xl">
        Fullstack-разработчик на Django и Next.js
      </h1>

      <p className="text-muted leading-relaxed mb-4 max-w-2xl">
        Я — Лев Алексеев, разрабатываю сайты и интернет-магазины на Django +
        DRF (бэкенд) и Next.js + TypeScript (фронтенд). Непосредственно
        разработкой занимаюсь около года.
      </p>

      <p className="text-muted leading-relaxed mb-16 max-w-2xl">
        До этого несколько лет работал системным администратором, а затем
        DevOps-инженером в команде разработки — строил инфраструктуру под
        проект с микросервисной архитектурой и отвечал за отказоустойчивость.
        На фриланс вышел недавно: в портфолио пока один полный проект под
        ключ — интернет-магазин{" "}
        <Link href="/cases/uaartist" className="text-primary hover:underline">
          uaartist
        </Link>
        .
      </p>

      <h2 className="text-2xl font-semibold mb-8">Что это значит на практике</h2>
      <p className="text-muted leading-relaxed mb-16 max-w-2xl">
        Я несколько лет занимался построением инфраструктуры в команде, до
        того как сам начал писать бэкенд и фронтенд. В кейсе uaartist
        реализовано: автопродление HTTPS-сертификатов, бэкапы по расписанию,
        мониторинг серверных ошибок с алертами в Telegram. Для заказчика это
        значит — стабильный запуск, без форсмажоров.
      </p>

      <h2 className="text-2xl font-semibold mb-8">Стек</h2>
      <div className="grid sm:grid-cols-3 gap-4 mb-16">
        {STACK_GROUPS.map((group) => (
          <div
            key={group.title}
            className="rounded-lg border border-surface-border bg-surface p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <group.icon size={18} className="text-primary" />
              <h3 className="font-semibold">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-background px-2.5 py-1 text-xs font-mono text-muted border border-surface-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-8">Как строю работу с клиентом</h2>
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8 mb-16 max-w-2xl">
        <div>
          <h3 className="font-semibold mb-1.5">Полный цикл</h3>
          <p className="text-sm text-muted leading-relaxed">
            От проектирования архитектуры до бэкенда, фронтенда и настройки
            сервера — весь проект делаю сам.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-1.5">Понятные отчёты</h3>
          <p className="text-sm text-muted leading-relaxed">
            Регулярная связь по ходу проекта, объяснение технических решений
            понятным языком.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-1.5">Оплата поэтапно</h3>
          <p className="text-sm text-muted leading-relaxed">
            Оплата делится на 3 этапа, подробно расписано на странице
            «Цены».
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-1.5">Сопровождение после сдачи</h3>
          <p className="text-sm text-muted leading-relaxed">
            Настраиваю мониторинг и бэкапы, показываю, как ими пользоваться.
            Дальнейшие доработки и масштабирование — отдельным проектом по
            договорённости.
          </p>
        </div>
      </div>

      <div className="rounded-lg border border-surface-border bg-surface p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2 className="font-semibold mb-1.5">Хотите обсудить проект?</h2>
          <p className="text-sm text-muted leading-relaxed">
            Сроки и цены на разработку — на странице «Цены», или сразу
            напишите в Telegram.
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
