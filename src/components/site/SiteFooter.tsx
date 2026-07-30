"use client";

import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { LocaleSwitcher } from "@/components/i18n/LocaleSwitcher";

export function SiteFooter() {
  const { t } = useLocale();
  return <footer className="mt-10 border-t border-[var(--color-border)]"><div className="site-wrap grid gap-8 py-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow">2Tech Studio</p><h2 className="display mt-4 max-w-xl text-4xl sm:text-5xl">{t("footerTitle")}</h2><p className="lead mt-4 max-w-md text-sm">{t("footerDescription")}</p></div><div className="flex flex-col items-start gap-4 lg:items-end"><a href={`mailto:${t("email")}`} className="text-link">{t("email")} ↗</a><div className="flex flex-wrap gap-4 text-sm text-[var(--color-ink-muted)]"><Link href="/projects" className="hover:text-[var(--color-accent-hover)]">{t("navProjects")}</Link><Link href="/team" className="hover:text-[var(--color-accent-hover)]">{t("navTeam")}</Link><Link href="/legits" className="hover:text-[var(--color-accent-hover)]">{t("navLegits")}</Link><Link href="/socials" className="hover:text-[var(--color-accent-hover)]">{t("navSocials")}</Link></div><LocaleSwitcher /><p className="text-xs text-[var(--color-ink-muted)]">© 2026 2Tech Studio. {t("footerRights")}</p></div></div></footer>;
}
