import type { Metadata } from "next";
import { Send, Mail } from "lucide-react";
import ContactCard from "@/components/ContactCard";

export const metadata: Metadata = {
  title: "Контакты — Лев Алексеев",
};

export default function ContactsPage() {
  return (
    <div className="max-w-(--container-content) mx-auto px-4 sm:px-10 py-16">
      <h1 className="text-3xl font-bold mb-4">Контакты</h1>
      <p className="text-muted mb-10 max-w-lg">
        Готов к обсуждению технических задач и новых проектов. Свяжитесь со
        мной напрямую:
      </p>

      <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
        <ContactCard
          icon={Send}
          label="Telegram"
          value="@leff_live"
          href="https://t.me/leff_live"
        />
        <ContactCard
          icon={Mail}
          label="Email"
          value="technik906@gmail.com"
          href="mailto:technik906@gmail.com"
        />
      </div>
    </div>
  );
}
