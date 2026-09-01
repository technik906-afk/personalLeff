"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Minus, Plus, ArrowRight } from "lucide-react";
import {
  BASE_PRICE,
  PRICE_PER_EXTRA_PAGE,
  MIN_PAGES,
  MAX_PAGES,
  CALC_OPTIONS,
  CALC_NONSTANDARD,
  formatRub,
} from "@/data/calculator";

export default function Calculator() {
  const [pages, setPages] = useState(MIN_PAGES);
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const extraPages = pages - MIN_PAGES;
  const pagesCost = extraPages * PRICE_PER_EXTRA_PAGE;
  const optionsCost = CALC_OPTIONS.reduce(
    (sum, opt) => (selected[opt.id] ? sum + opt.price : sum),
    0
  );
  const total = BASE_PRICE + pagesCost + optionsCost;

  const toggle = (id: string) =>
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
      <div className="flex flex-col gap-4">
        {/* Количество страниц */}
        <div className="rounded-lg border border-surface-border bg-surface p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="font-semibold mb-1">Количество страниц</h2>
              <p className="text-sm text-muted leading-relaxed">
                Первая страница входит в базу. Дальше —{" "}
                {formatRub(PRICE_PER_EXTRA_PAGE)} за страницу.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                aria-label="Убрать страницу"
                onClick={() => setPages((n) => Math.max(MIN_PAGES, n - 1))}
                disabled={pages <= MIN_PAGES}
                className="flex size-9 items-center justify-center rounded border border-surface-border text-foreground hover:border-primary disabled:opacity-40 disabled:hover:border-surface-border transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="w-8 text-center font-mono text-lg tabular-nums">
                {pages}
              </span>
              <button
                type="button"
                aria-label="Добавить страницу"
                onClick={() => setPages((n) => Math.min(MAX_PAGES, n + 1))}
                disabled={pages >= MAX_PAGES}
                className="flex size-9 items-center justify-center rounded border border-surface-border text-foreground hover:border-primary disabled:opacity-40 disabled:hover:border-surface-border transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Опции */}
        <div className="flex flex-col gap-3">
          {CALC_OPTIONS.map((opt) => {
            const active = !!selected[opt.id];
            return (
              <button
                key={opt.id}
                type="button"
                aria-pressed={active}
                onClick={() => toggle(opt.id)}
                className={`flex items-start gap-4 rounded-lg border bg-surface p-5 text-left transition-colors ${
                  active
                    ? "border-primary"
                    : "border-surface-border hover:border-surface-border-strong"
                }`}
              >
                <span
                  className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border transition-colors ${
                    active
                      ? "border-primary bg-primary text-white"
                      : "border-surface-border-strong"
                  }`}
                >
                  {active && <Check size={14} />}
                </span>
                <span className="flex-1">
                  <span className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                    <span className="font-semibold">{opt.label}</span>
                    <span className="font-mono text-sm text-primary">
                      +{formatRub(opt.price)}
                    </span>
                  </span>
                  <span className="mt-1 block text-sm text-muted leading-relaxed">
                    {opt.hint}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Нестандартное */}
        <div className="rounded-lg border border-surface-border bg-surface p-6">
          <h2 className="font-semibold mb-3">Считается индивидуально</h2>
          <ul className="flex flex-col gap-2 mb-5">
            {CALC_NONSTANDARD.map((item) => (
              <li
                key={item}
                className="text-sm text-muted leading-relaxed pl-4 relative before:absolute before:left-0 before:content-['—']"
              >
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Не нашли то, что нужно? Обсудим задачу
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Итог */}
      <div className="rounded-lg border border-primary bg-surface p-6 lg:sticky lg:top-6">
        <div className="text-sm text-muted mb-1">Ориентировочно</div>
        <div className="font-mono text-3xl font-bold mb-4 tabular-nums">
          {formatRub(total)}
        </div>

        <dl className="flex flex-col gap-1.5 text-sm border-t border-surface-border pt-4 mb-4">
          <div className="flex justify-between gap-4">
            <dt className="text-muted">База, 1 страница</dt>
            <dd className="font-mono whitespace-nowrap shrink-0">
              {formatRub(BASE_PRICE)}
            </dd>
          </div>
          {extraPages > 0 && (
            <div className="flex justify-between gap-4">
              <dt className="text-muted">
                Ещё {extraPages}{" "}
                {extraPages === 1
                  ? "страница"
                  : extraPages < 5
                    ? "страницы"
                    : "страниц"}
              </dt>
              <dd className="font-mono whitespace-nowrap shrink-0">
                {formatRub(pagesCost)}
              </dd>
            </div>
          )}
          {CALC_OPTIONS.filter((o) => selected[o.id]).map((o) => (
            <div key={o.id} className="flex justify-between gap-4">
              <dt className="text-muted">{o.label}</dt>
              <dd className="font-mono whitespace-nowrap shrink-0">
                {formatRub(o.price)}
              </dd>
            </div>
          ))}
        </dl>

        <p className="text-xs text-muted leading-relaxed mb-4">
          Прикидка по тем же цифрам, что на странице «Цены». Дизайн, объём
          контента и правки по ходу считаются отдельно — точную цену посчитаю
          под конкретную задачу.
        </p>

        <Link
          href="/contacts"
          className="flex items-center justify-center gap-1.5 rounded bg-primary-strong px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Обсудить проект
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
