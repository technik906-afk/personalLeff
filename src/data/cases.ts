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
    description:
      "Демо-лендинг — инициативная работа для питчинга локальному бизнесу, не оплаченный заказ.",
    stack: ["Next.js", "CSS Modules"],
    url: "https://prosvet.vercel.app",
    kind: "demo",
  },
  {
    id: "pur-pur-dark",
    title: "Лендинг кофейни «Пур Пур» — тёмный вариант",
    description:
      "Один из двух альтернативных дизайн-концептов, предложенных кофейне на спекулятивной основе.",
    stack: ["Next.js", "CSS Modules"],
    url: "https://pur-pur-dark.vercel.app",
    kind: "demo",
  },
  {
    id: "pur-pur-light",
    title: "Лендинг кофейни «Пур Пур» — светлый вариант",
    description:
      "Второй из двух альтернативных дизайн-концептов, предложенных кофейне на спекулятивной основе.",
    stack: ["Next.js", "CSS Modules"],
    url: "https://pur-pur-cafe-light.vercel.app",
    kind: "demo",
  },
];
