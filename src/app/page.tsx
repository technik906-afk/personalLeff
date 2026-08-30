import Link from "next/link";
import { Database, LayoutGrid, Server, Infinity as InfinityIcon, MessageSquare, Plug, ShieldCheck } from "lucide-react";
import TerminalWindow from "@/components/TerminalWindow";
import TrackedExternalLink from "@/components/TrackedExternalLink";

const STACK_GROUPS = [
  {
    title: "Backend",
    icon: Database,
    tags: ["Python", "Django", "DRF", "PostgreSQL"],
  },
  {
    title: "Frontend",
    icon: LayoutGrid,
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    title: "Инфраструктура",
    icon: Server,
    tags: ["Docker", "Nginx", "VPS-деплой"],
  },
];

const WHY_ME = [
  {
    icon: InfinityIcon,
    title: "Полный цикл",
    description: "Проектирование архитектуры, бэкенд, фронтенд и настройка серверов.",
  },
  {
    icon: MessageSquare,
    title: "Прозрачная связь",
    description: "Регулярные отчёты, понятное объяснение технических деталей бизнесу.",
  },
  {
    icon: Plug,
    title: "Интеграция сервисов",
    description: "Есть возможность подключить оплату, доставку и другие внешние API — под задачу.",
  },
  {
    icon: ShieldCheck,
    title: "Сопровождение",
    description: "Поддержка проекта после релиза, мониторинг и масштабирование.",
  },
];

export default function Home() {
  return (
    <div className="max-w-(--container-content) mx-auto px-4 sm:px-10">
      <section className="grid md:grid-cols-2 gap-10 items-center py-16 sm:py-24">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Fullstack-разработчик
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Создаю надёжные веб-решения для бизнеса — от архитектуры бэкенда
            до настройки серверов и финального деплоя. Полный цикл разработки.
          </p>
          <div className="flex flex-wrap gap-4">
            <TrackedExternalLink
              href="https://t.me/leff_live"
              goal="telegram_click"
              className="rounded bg-primary-strong px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Обсудить проект
            </TrackedExternalLink>
            <Link
              href="/cases"
              className="rounded border border-surface-border-strong px-5 py-3 text-sm font-semibold hover:border-primary transition-colors"
            >
              Смотреть кейсы
            </Link>
          </div>
        </div>

        <TerminalWindow
          title="deploy.sh"
          lines={[
            { text: "user@server:~$ ./deploy_infrastructure.sh", tone: "muted" },
            { text: "[ OK ] Provisioning VPS..." },
            { text: "[ OK ] Configuring Nginx & SSL..." },
            { text: "[ OK ] Pulling Docker images..." },
            { text: "[ OK ] Running DB migrations..." },
            { text: "Deployment successful. System is online.", tone: "success" },
          ]}
        />
      </section>

      <section className="py-16 border-t border-surface-border">
        <h2 className="text-2xl font-semibold mb-8">Технологический стек</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {STACK_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-surface-border bg-surface p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <group.icon size={18} className="text-primary" />
                <h3 className="font-semibold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-background px-2.5 py-1 text-xs font-mono text-muted border border-surface-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 border-t border-surface-border">
        <h2 className="text-2xl font-semibold mb-8">Почему я</h2>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
          {WHY_ME.map((item) => (
            <div key={item.title} className="flex gap-4">
              <item.icon size={20} className="text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/cases"
          className="inline-block mt-10 rounded border border-primary text-primary px-5 py-3 text-sm font-semibold hover:bg-primary-strong hover:text-white transition-colors"
        >
          Смотреть все кейсы →
        </Link>
      </section>
    </div>
  );
}
