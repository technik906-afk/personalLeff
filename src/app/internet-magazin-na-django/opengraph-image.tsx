import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";

export const alt = "Интернет-магазин на Django под ключ";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    title: "Интернет-магазин на Django под ключ",
    subtitle: "От 55 000 ₽, от 18 рабочих дней",
  });
}
