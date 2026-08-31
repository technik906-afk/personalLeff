import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";

export const alt = "Стоимость и сроки разработки сайта";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    title: "Стоимость и сроки",
    subtitle: "От 18 000 ₽ за лендинг до 55 000 ₽ за интернет-магазин под ключ",
  });
}
