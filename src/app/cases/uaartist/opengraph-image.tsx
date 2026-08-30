import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";

export const alt = "Как я сделал интернет-магазин uaartist";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    title: "Как я сделал uaartist",
    subtitle: "От нуля до приёма оплаты — Django, Next.js, ЮKassa",
    tags: ["Django", "DRF", "Next.js", "ЮKassa"],
  });
}
