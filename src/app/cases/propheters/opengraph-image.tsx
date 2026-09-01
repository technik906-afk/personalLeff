import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";

export const alt = "Лендинг для метал-кор группы The Propheters — кейс";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    title: "Лендинг для группы The Propheters",
    subtitle: "Дизайн и вёрстка одностраничного сайта на Next.js",
    tags: ["Next.js", "TypeScript", "Дизайн", "Анимации"],
  });
}
