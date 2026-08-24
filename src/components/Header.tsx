"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, SquareTerminal } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Главная" },
  { href: "/cases", label: "Кейсы" },
  { href: "/contacts", label: "Контакты" },
];

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm transition-colors ${
        isActive
          ? "text-primary border-b border-primary"
          : "text-foreground hover:text-primary"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-surface-border">
      <div className="max-w-(--container-content) mx-auto px-4 sm:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <SquareTerminal className="text-primary" size={20} />
          Лев Алексеев
        </Link>

        <nav className="hidden sm:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <button
          type="button"
          className="sm:hidden text-foreground"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="sm:hidden border-t border-surface-border px-4 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              onClick={() => setMenuOpen(false)}
            />
          ))}
        </nav>
      )}
    </header>
  );
}
