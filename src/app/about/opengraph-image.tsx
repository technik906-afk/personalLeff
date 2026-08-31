import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";

export const alt = "Fullstack-разработчик на Django и Next.js — Лев Алексеев";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    title: "Обо мне",
    subtitle: "Год в разработке после нескольких лет DevOps и системного администрирования",
  });
}
