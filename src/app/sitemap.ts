import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { posts } from "@/data/posts";

// Дата последнего осмысленного изменения контента страницы (не билда).
// Правится руками при правках; для статей блога берётся из posts.ts.
const STATIC_PAGES: Record<string, string> = {
  "/": "2026-09-01",
  "/about": "2026-08-30",
  "/cases": "2026-09-01",
  "/cases/uaartist": "2026-08-30",
  "/cases/propheters": "2026-09-01",
  "/blog": "2026-09-01",
  "/internet-magazin-na-django": "2026-08-31",
  "/price": "2026-09-01",
  "/calculator": "2026-09-01",
  "/contacts": "2026-08-24",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = Object.entries(STATIC_PAGES).map(([path, date]) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: new Date(date),
  }));

  const postEntries = posts.map((post) => ({
    url: `${SITE_URL}${post.href}`,
    lastModified: new Date(post.updated ?? post.date),
  }));

  return [...staticEntries, ...postEntries];
}
