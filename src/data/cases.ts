export type CaseKind = "real" | "demo";

export type Case = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  url: string;
  kind: CaseKind;
};

export const cases: Case[] = [
  {
    id: "uaartist",
    title: "Интернет-магазин аксессуаров uaartist",
    description:
      "Магазин под ключ: каталог, приём оплаты ЮKassa, доставка СДЭК/Почта России. Деплой на VPS.",
    stack: ["Django", "DRF", "Next.js", "VPS", "ЮKassa"],
    url: "https://uaartist.ru",
    kind: "real",
  },
  {
    id: "prosvet",
    title: "Лендинг кофейни-пекарни «Просвет»",
    description: "Одностраничный сайт: меню, о заведении, контакты.",
    stack: ["Next.js", "CSS Modules"],
    url: "https://prosvet.vercel.app",
    kind: "demo",
  },
  {
    id: "pur-pur-dark",
    title: "Лендинг кофейни «Пур Пур» — тёмный вариант",
    description: "Одностраничный лендинг: меню, галерея, контакты.",
    stack: ["Next.js", "CSS Modules"],
    url: "https://pur-pur-dark.vercel.app",
    kind: "demo",
  },
  {
    id: "pur-pur-light",
    title: "Лендинг кофейни «Пур Пур» — светлый вариант",
    description: "Одностраничный лендинг: меню, галерея, контакты.",
    stack: ["Next.js", "CSS Modules"],
    url: "https://pur-pur-cafe-light.vercel.app",
    kind: "demo",
  },
];
