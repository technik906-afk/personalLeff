import Link from "next/link";

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
        <nav className="flex items-center gap-6">
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
      </div>
    </footer>
  );
}
