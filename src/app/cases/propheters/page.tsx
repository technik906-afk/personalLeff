import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { OG_BASE } from "@/lib/site";

const path = "/cases/propheters";
const title = "Лендинг для метал-кор группы The Propheters — кейс";
const description =
  "Дизайн с нуля и вёрстка одностраничного сайта музыкальной группы на Next.js: медиа-грид, анимации, ссылки на стриминги и соцсети, страница контактов.";

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
    publishedTime: "2026-09-01T00:00:00.000Z",
  },
  twitter: { card: "summary_large_image", title, description },
};

const DONE = [
  "Дизайн лендинга с нуля: макет, типографика, тёмная визуальная подача под жанр группы",
  "Адаптивная вёрстка на Next.js — десктоп и мобильная версия",
  "Анимации: появление блоков при прокрутке, микровзаимодействия в навигации и на кнопках",
  "Медиа-грид на главной — фотографии и обложки релизов",
  "Блок ссылок на стриминговые площадки и социальные сети",
  "Отдельная страница контактов для организаторов и площадок",
];

export default function ProphetersCaseStudy() {
  return (
    <div className="max-w-(--container-content) mx-auto px-4 sm:px-10 py-16">
      <Breadcrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Кейсы", href: "/cases" },
          { label: "The Propheters" },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold mb-3 max-w-3xl">
        Лендинг для метал-кор группы The Propheters
      </h1>

      <p className="text-sm text-muted font-mono mb-8">
        Лев Алексеев · обновлено 1 сентября 2026
      </p>

      <p className="text-muted leading-relaxed mb-4 max-w-2xl">
        Одностраничный сайт-визитка для музыкальной группы: место, куда ведут
        ссылки из соцсетей и с концертных афиш. Задача — быстрая витрина с
        музыкой, фото и контактами, без магазина и без CMS. Моя роль —
        фронтенд целиком: дизайн и реализация.
      </p>

      <p className="text-muted leading-relaxed mb-12 max-w-2xl">
        Бэкенд не требовался — сайт статический, разворачивается на Vercel,
        правки контента вносятся прямо в разметку и выкатываются за минуты.
        Для проекта такого масштаба это дешевле и надёжнее, чем админка.
      </p>

      <div className="relative aspect-[1850/967] rounded-lg overflow-hidden border border-surface-border mb-16">
        <Image
          src="/images/propheters-hero.png"
          alt="Лендинг The Propheters — главная страница"
          fill
          sizes="(min-width: 1120px) 1040px, 100vw"
          className="object-cover object-top"
          preload
        />
      </div>

      <h2 className="text-2xl font-semibold mb-8">Что было сделано</h2>
      <ul className="flex flex-col gap-3 mb-16 max-w-2xl">
        {DONE.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm text-muted leading-relaxed"
          >
            <Check size={16} className="text-primary shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-8">Стек</h2>
      <p className="text-muted leading-relaxed mb-16 max-w-2xl">
        Next.js и TypeScript, статический экспорт, деплой на Vercel. Без
        внешних зависимостей под анимации сверх необходимого — чтобы страница
        оставалась лёгкой и быстро открывалась с телефона.
      </p>

      <div className="rounded-lg border border-surface-border bg-surface p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2 className="font-semibold mb-1.5">Нужен лендинг?</h2>
          <p className="text-sm text-muted leading-relaxed">
            Одностраничный сайт с вёрсткой под задачу — сроки и цена на
            странице «Цены».
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

      <a
        href="https://propheters.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 mt-10 text-sm text-primary hover:underline"
      >
        Смотреть сайт
        <ArrowUpRight size={14} />
      </a>
    </div>
  );
}
