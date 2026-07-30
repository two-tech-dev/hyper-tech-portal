"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/components/i18n/LocaleProvider";

export function SiteNav() {
  const pathname = usePathname();
  const { t } = useLocale();
  const links = [["/projects", t("navProjects")], ["/team", t("navTeam")], ["/contributions", t("navOpenSource")], ["/socials", t("navSocials")], ["/legits", t("navLegits")]] as const;
  const active = (href: string) => href === "/projects" ? pathname.startsWith(href) : pathname === href;
  return <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-canvas)]/90 backdrop-blur-md"><nav className="site-wrap flex min-h-[4.5rem] items-center justify-between gap-4" aria-label="Primary navigation"><Link href="/" className="flex min-h-11 shrink-0 items-center gap-2.5"><Image src="/logo-2tech.png" width={34} height={34} alt="2Tech Studio" className="size-8 object-contain" priority /><span className="font-semibold tracking-[-0.04em]">2Tech Studio</span></Link><div className="hidden items-center gap-6 md:flex">{links.map(([href, label]) => <Link key={href} href={href} aria-current={active(href) ? "page" : undefined} className={`min-h-11 whitespace-nowrap py-3 text-sm font-medium transition-colors ${active(href) ? "text-[var(--color-accent-hover)]" : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"}`}>{label}</Link>)}</div></nav></header>;
}
