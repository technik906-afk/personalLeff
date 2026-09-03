export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO-дата публикации, для RSS и разметки */
  date: string;
  /** ISO-дата последнего существенного обновления контента, если было */
  updated?: string;
  /** та же дата в человекочитаемом виде, для UI */
  publishedAt: string;
  href: string;
};

export const posts: Post[] = [
  {
    slug: "skolko-stoit-razrabotka-sayta",
    title: "Сколько стоит разработка сайта в 2026",
    excerpt:
      "От 18 000 ₽ за лендинг до 55 000 ₽ за магазин под ключ. От чего зависит итоговая цена, из чего складывается срок и частые ошибки в бюджете — на примере кейса uaartist.",
    date: "2026-08-30",
    updated: "2026-08-31",
    publishedAt: "30 августа 2026",
    href: "/blog/skolko-stoit-razrabotka-sayta",
  },
  {
    slug: "konstruktor-ili-razrabotka-s-nulya",
    title: "Конструктор сайта или разработка с нуля — что выбрать",
    excerpt:
      "Tilda, WordPress, Wix или свой код: по каким критериям выбирать между конструктором и разработкой с нуля для лендинга, блога и интернет-магазина.",
    date: "2026-08-30",
    publishedAt: "30 августа 2026",
    href: "/blog/konstruktor-ili-razrabotka-s-nulya",
  },
];
