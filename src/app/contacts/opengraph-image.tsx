import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";

export const alt = "Написать разработчику — Telegram, email";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    title: "Контакты",
    subtitle: "Открыт для новых проектов — разработка сайтов и интернет-магазинов",
  });
}
