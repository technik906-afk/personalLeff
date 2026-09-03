import {
  SITE_URL,
  SITE_NAME,
  TENCHAT_URL,
  VK_GROUP_URL,
  GITHUB_URL,
} from "@/lib/site";

export const PERSON_ID = `${SITE_URL}/#person`;

export default function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "Лев Алексеев",
        url: SITE_URL,
        jobTitle: "Fullstack-разработчик",
        knowsAbout: ["Django", "Next.js", "TypeScript", "PostgreSQL", "Docker"],
        sameAs: [
          "https://t.me/leff_live",
          "https://uaartist.ru",
          GITHUB_URL,
          TENCHAT_URL,
          VK_GROUP_URL,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "ru-RU",
        publisher: { "@id": PERSON_ID },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
