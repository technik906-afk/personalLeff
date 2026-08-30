import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";

export const alt = "Лев Алексеев — Fullstack-разработчик";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    title: "Fullstack-разработчик",
    subtitle: "Django + Next.js — сайты и интернет-магазины на заказ",
  });
}
