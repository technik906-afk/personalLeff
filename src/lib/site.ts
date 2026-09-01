export const SITE_URL = "https://leff-dev.ru";
export const SITE_NAME = "Лев Алексеев";

export const TENCHAT_URL = "https://tenchat.ru/5284587";
export const VK_GROUP_URL = "https://vk.ru/club241106502";
export const GITHUB_URL = "https://github.com/technik906-afk";

export const CAL_LINK = "lev-alekseev/30min";

export const YANDEX_METRIKA_ID = 111964632;

// Next мёржит metadata поверхностно: если страница задаёт свой openGraph,
// поля из корневого layout не наследуются. Разворачиваем это в каждый
// openGraph, чтобы siteName/locale были на всех страницах, а не только на «/».
export const OG_BASE = {
  siteName: SITE_NAME,
  locale: "ru_RU",
} as const;
