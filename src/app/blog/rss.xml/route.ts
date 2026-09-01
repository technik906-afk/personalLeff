import { SITE_URL, SITE_NAME } from "@/lib/site";
import { posts } from "@/data/posts";

export const dynamic = "force-static";

const CHANNEL_TITLE = `Блог — ${SITE_NAME}`;
const CHANNEL_DESCRIPTION =
  "Статьи о разработке сайтов и интернет-магазинов: технологии, цены, разбор реальных проектов.";

function item(post: (typeof posts)[number]): string {
  const link = `${SITE_URL}${post.href}`;
  return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
    </item>`;
}

export function GET(): Response {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const lastBuild = sorted.length
    ? new Date(sorted[0].date).toUTCString()
    : new Date(0).toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${CHANNEL_TITLE}]]></title>
    <link>${SITE_URL}/blog</link>
    <description><![CDATA[${CHANNEL_DESCRIPTION}]]></description>
    <language>ru</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />
${sorted.map(item).join("\n")}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
