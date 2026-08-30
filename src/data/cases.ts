export type CaseKind = "real" | "demo";

export type Case = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  url: string;
  kind: CaseKind;
  desktopImage: string;
  mobileImage?: string;
  caseStudyHref?: string;
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
    desktopImage: "/images/uaartist-hero.png",
    mobileImage: "/images/uaartist-mobile-hero.jpg",
    caseStudyHref: "/cases/uaartist",
  },
  {
    id: "propheters",
    title: "Лендинг метал-кор группы The Propheters",
    description:
      "Медиа-грид на главной, ссылки на стриминги и соцсети, страница контактов.",
    stack: ["Next.js"],
    url: "https://propheters.vercel.app",
    kind: "real",
    desktopImage: "/images/propheters-hero.png",
  },
  {
    id: "prosvet",
    title: "Лендинг кофейни-пекарни «Просвет»",
    description: "Одностраничный сайт: меню, о заведении, контакты.",
    stack: ["Next.js", "CSS Modules"],
    url: "https://prosvet.vercel.app",
    kind: "demo",
    desktopImage: "/images/prosvet-hero.png",
    mobileImage: "/images/prosvet-mobile-hero.jpg",
  },
  {
    id: "pur-pur-dark",
    title: "Лендинг кофейни «Пур Пур» — тёмный вариант",
    description: "Одностраничный лендинг: меню, галерея, контакты.",
    stack: ["Next.js", "CSS Modules"],
    url: "https://pur-pur-dark.vercel.app",
    kind: "demo",
    desktopImage: "/images/pur-pur-dark-hero.png",
    mobileImage: "/images/pur-pur-dark-mobile-hero.jpg",
  },
  {
    id: "pur-pur-light",
    title: "Лендинг кофейни «Пур Пур» — светлый вариант",
    description: "Одностраничный лендинг: меню, галерея, контакты.",
    stack: ["Next.js", "CSS Modules"],
    url: "https://pur-pur-cafe-light.vercel.app",
    kind: "demo",
    desktopImage: "/images/pur-pur-light-hero.png",
    mobileImage: "/images/pur-pur-light-mobile-hero.jpg",
  },
];
