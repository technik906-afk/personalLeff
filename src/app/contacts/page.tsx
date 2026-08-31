import type { Metadata } from "next";
import { Send, Mail, ArrowRight } from "lucide-react";
import ContactCard from "@/components/ContactCard";
import CalBookButton from "@/components/CalBookButton";
import TrackedExternalLink from "@/components/TrackedExternalLink";

const title = "Написать разработчику — Telegram, email";
const description =
  "Открыт для новых проектов: разработка сайтов и интернет-магазинов под ключ.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contacts" },
  openGraph: { title, description, url: "/contacts" },
  twitter: { card: "summary_large_image", title, description },
};

export default function ContactsPage() {
  return (
    <div className="max-w-(--container-content) mx-auto px-4 sm:px-10 py-16">
      <h1 className="text-3xl font-bold mb-4">Контакты</h1>
      <p className="text-muted mb-10 max-w-lg">
        Готов к обсуждению технических задач и новых проектов. Свяжитесь со
        мной напрямую:
      </p>

      <div className="flex flex-col gap-4 max-w-lg">
        <ContactCard
          icon={<Send size={18} />}
          label="Telegram"
          value="@leff_live"
          href="https://t.me/leff_live"
          goal="telegram_click"
        />
        <ContactCard
          icon={<Mail size={18} />}
          label="Email"
          value="technik906@gmail.com"
          href="mailto:technik906@gmail.com"
          goal="email_click"
        />
        <CalBookButton />
      </div>

      <div className="mt-6 max-w-lg rounded-lg border border-surface-border bg-surface p-6">
        <h2 className="font-semibold mb-2">Открыт для новых проектов</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Беру задачи на разработку сайтов и интернет-магазинов под ключ.
          Расскажите, что нужно сделать — отвечу и предложу план.
        </p>
        <TrackedExternalLink
          href="https://t.me/leff_live"
          goal="telegram_click"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          Написать в Telegram
          <ArrowRight size={16} />
        </TrackedExternalLink>
      </div>
    </div>
  );
}
