import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { posts } from "@/data/posts";
import { OG_BASE } from "@/lib/site";

const title = "Блог — веб-разработка, Django, Next.js";
const description =
  "Статьи о разработке сайтов и интернет-магазинов: технологии, цены, разбор реальных проектов.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/rss.xml" },
  },
  openGraph: { ...OG_BASE, title, description, url: "/blog" },
  twitter: { card: "summary_large_image", title, description },
};

export default function BlogPage() {
  return (
    <div className="max-w-(--container-content) mx-auto px-4 sm:px-10 py-16">
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Блог" }]} />

      <h1 className="text-3xl font-bold mb-10 max-w-3xl">
        Блог о разработке сайтов и интернет-магазинов
      </h1>

      {posts.length === 0 ? (
        <p className="text-muted">Первые статьи скоро появятся здесь.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={post.href}
              className="block rounded-lg border border-surface-border bg-surface p-6 hover:border-primary transition-colors"
            >
              <div className="text-xs text-muted font-mono mb-2">
                {post.publishedAt}
              </div>
              <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
              <p className="text-sm text-muted leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
