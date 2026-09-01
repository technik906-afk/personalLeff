import { SITE_URL, TENCHAT_URL, VK_GROUP_URL } from "@/lib/site";

export default function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Лев Алексеев",
    url: SITE_URL,
    jobTitle: "Fullstack-разработчик",
    knowsAbout: ["Django", "Next.js", "TypeScript", "PostgreSQL", "Docker"],
    sameAs: [
      "https://t.me/leff_live",
      "https://uaartist.ru",
      TENCHAT_URL,
      VK_GROUP_URL,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
