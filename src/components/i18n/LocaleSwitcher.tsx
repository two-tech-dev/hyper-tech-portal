"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";

export function LocaleSwitcher() {
  const { locale, setLocale, t } = useLocale();
  return <div aria-label={t("localeLabel")} className="flex items-center gap-1 text-xs font-semibold"><button type="button" aria-pressed={locale === "vi"} onClick={() => setLocale("vi")} className={`min-h-11 min-w-11 rounded-[var(--radius-sm)] px-2 ${locale === "vi" ? "bg-[var(--color-accent-soft)] text-[var(--color-accent-hover)]" : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"}`}>{t("localeVietnamese")}</button><span aria-hidden="true" className="text-[var(--color-border)]">/</span><button type="button" aria-pressed={locale === "en"} onClick={() => setLocale("en")} className={`min-h-11 min-w-11 rounded-[var(--radius-sm)] px-2 ${locale === "en" ? "bg-[var(--color-accent-soft)] text-[var(--color-accent-hover)]" : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"}`}>{t("localeEnglish")}</button></div>;
}
