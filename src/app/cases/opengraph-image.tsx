import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";

export const alt = "Портфолио: реальные проекты на Django и Next.js";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    title: "Кейсы",
    subtitle: "Интернет-магазины и лендинги на Django и Next.js",
  });
}
