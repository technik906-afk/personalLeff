import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";

export const alt = "Блог — веб-разработка, Django, Next.js";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    title: "Блог",
    subtitle: "Статьи о разработке сайтов и интернет-магазинов",
  });
}
