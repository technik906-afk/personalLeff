import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";

export const alt = "Калькулятор стоимости сайта";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    title: "Калькулятор стоимости сайта",
    subtitle: "Примерный бюджет за минуту, без заявки",
  });
}
