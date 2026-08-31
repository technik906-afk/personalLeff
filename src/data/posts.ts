export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  href: string;
};

export const posts: Post[] = [
  {
    slug: "skolko-stoit-razrabotka-sayta",
    title: "Сколько стоит разработка сайта в 2026",
    excerpt:
      "От 18 000 ₽ за лендинг до 55 000 ₽ за магазин под ключ. От чего зависит итоговая цена, из чего складывается срок и частые ошибки в бюджете — на примере кейса uaartist.",
    publishedAt: "30 августа 2026",
    href: "/blog/skolko-stoit-razrabotka-sayta",
  },
  {
    slug: "konstruktor-ili-razrabotka-s-nulya",
    title: "Конструктор сайта или разработка с нуля — что выбрать",
    excerpt:
      "Tilda, WordPress, Wix или свой код: по каким критериям выбирать между конструктором и разработкой с нуля для лендинга, блога и интернет-магазина.",
    publishedAt: "30 августа 2026",
    href: "/blog/konstruktor-ili-razrabotka-s-nulya",
  },
];
