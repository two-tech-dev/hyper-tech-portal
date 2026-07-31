"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/components/i18n/LocaleProvider";

export function SiteNav() {
  const pathname = usePathname();
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const links = [["/projects", t("navProjects")], ["/team", t("navTeam")], ["/contributions", t("navOpenSource")], ["/socials", t("navSocials")], ["/legits", t("navLegits")]] as const;
  const active = (href: string) => href === "/projects" ? pathname.startsWith(href) : pathname === href;

  return <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-canvas)]/90 backdrop-blur-md"><nav className="site-wrap" aria-label="Primary navigation"><div className="flex min-h-[4.5rem] items-center justify-between gap-4"><Link href="/" className="flex min-h-11 shrink-0 items-center gap-2.5"><Image src="/logo-2tech.png" width={34} height={34} alt="2Tech Studio" className="size-8 object-contain" priority /><span className="font-semibold tracking-[-0.04em]">2Tech Studio</span></Link><div className="hidden items-center gap-6 md:flex">{links.map(([href, label]) => <Link key={href} href={href} aria-current={active(href) ? "page" : undefined} className={`min-h-11 whitespace-nowrap py-3 text-sm font-medium transition-colors ${active(href) ? "text-[var(--color-accent-hover)]" : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"}`}>{label}</Link>)}</div><button type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={t(open ? "closeMenu" : "openMenu")} onClick={() => setOpen((current) => !current)} className="grid size-11 place-items-center rounded-[var(--radius-sm)] border border-[var(--color-border)] text-[var(--color-ink)] md:hidden"><span className="sr-only">{t(open ? "closeMenu" : "openMenu")}</span><span aria-hidden="true" className="relative block h-4 w-5"><span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} /><span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} /><span className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} /></span></button></div><div id="mobile-navigation" hidden={!open} className="border-t border-[var(--color-border)] pb-3 md:hidden">{links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={active(href) ? "page" : undefined} className={`flex min-h-12 items-center border-b border-[var(--color-border)] text-sm font-medium last:border-b-0 ${active(href) ? "text-[var(--color-accent-hover)]" : "text-[var(--color-ink-muted)]"}`}>{label}</Link>)}</div></nav></header>;
}
