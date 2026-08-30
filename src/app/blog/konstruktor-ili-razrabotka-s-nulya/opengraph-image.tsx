import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";

export const alt = "Конструктор сайта или разработка с нуля";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    title: "Конструктор или разработка с нуля",
    subtitle: "Tilda, WordPress, Wix или свой код — что выбрать",
  });
}
