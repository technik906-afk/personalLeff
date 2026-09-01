import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/cases",
    "/cases/uaartist",
    "/cases/propheters",
    "/blog",
    "/blog/skolko-stoit-razrabotka-sayta",
    "/blog/konstruktor-ili-razrabotka-s-nulya",
    "/internet-magazin-na-django",
    "/price",
    "/calculator",
    "/contacts",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
