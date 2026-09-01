import Link from "next/link";
import { TENCHAT_URL, VK_GROUP_URL, GITHUB_URL } from "@/lib/site";

const NAV_ITEMS = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "Обо мне" },
  { href: "/cases", label: "Кейсы" },
  { href: "/blog", label: "Блог" },
  { href: "/price", label: "Цены" },
  { href: "/contacts", label: "Контакты" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border">
      <div className="max-w-(--container-content) mx-auto px-4 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <span>
          © {year} · technik906@gmail.com
        </span>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href={TENCHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              TenChat
            </a>
            <a
              href={VK_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              ВКонтакте
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
