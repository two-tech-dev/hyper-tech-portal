"use client";

import { useEffect, useState } from "react";
import { teamMembers } from "@/data/team";
import { useLocale } from "@/components/i18n/LocaleProvider";

type Contributor = { login: string; avatar_url: string; html_url: string; contributions: number };

export function ContributionsBoard() {
  const { locale, t } = useLocale();
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const visibleContributors = contributors.filter((contributor) => teamMembers.some((member) => member.githubUsername?.trim().toLowerCase() === contributor.login.trim().toLowerCase()));

  useEffect(() => {
    fetch("/api/contributions")
      .then((response) => {
        if (!response.ok) throw new Error("Request failed");
        return response.json();
      })
      .then((data) => { setContributors(data); setStatus("ready"); })
      .catch(() => setStatus("error"));
  }, []);

  if (status === "loading") return <div aria-busy="true" aria-label={t("contributionsLoading")} className="border-t border-[var(--color-border)]">{Array.from({ length: 5 }).map((_, index) => <div key={index} className="grid grid-cols-[3rem_1fr_5rem] gap-4 border-b border-[var(--color-border)] py-6"><span className="h-4 rounded bg-[var(--color-surface-soft)]" /><span className="h-4 rounded bg-[var(--color-surface-soft)]" /><span className="h-4 rounded bg-[var(--color-surface-soft)]" /></div>)}</div>;

  if (status === "error" || visibleContributors.length === 0) return <div role="status" className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-10"><p className="eyebrow">{t("contribBoard")}</p><h2 className="display mt-4 text-3xl">{t("contributionsUnavailable")}</h2></div>;

  return <div className="surface overflow-hidden"><div className="hidden overflow-x-auto md:block"><table className="w-full border-collapse text-left"><thead className="bg-[var(--color-surface-soft)]"><tr className="border-b border-[var(--color-border)]"><th className="px-5 py-4 text-xs font-semibold text-[var(--color-ink-muted)]">{t("rank")}</th><th className="px-5 py-4 text-xs font-semibold text-[var(--color-ink-muted)]">{t("engineer")}</th><th className="px-5 py-4 text-right text-xs font-semibold text-[var(--color-ink-muted)]">{t("commits")}</th><th className="px-5 py-4 text-right text-xs font-semibold text-[var(--color-ink-muted)]">{t("role")}</th></tr></thead><tbody>{visibleContributors.map((contributor, index) => { const member = teamMembers.find(({ githubUsername }) => githubUsername?.toLowerCase() === contributor.login.toLowerCase()); return <tr key={contributor.login} className="border-b border-[var(--color-border)] last:border-0 hover:bg-[var(--color-surface-soft)]"><td className={`px-5 py-5 font-[var(--font-utility)] text-sm ${index === 0 ? "text-[var(--color-accent)]" : "text-[var(--color-ink-muted)]"}`}>{String(index + 1).padStart(2, "0")}</td><td className="px-5 py-5"><div className="flex items-center gap-3"><img src={member?.avatar || contributor.avatar_url} alt="" className="size-10 rounded-full object-cover" /><span><a href={contributor.html_url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-[var(--color-accent-hover)]">{member?.name || contributor.login} ↗</a><span className="mt-1 block font-[var(--font-utility)] text-[10px] text-[var(--color-ink-muted)]">@{contributor.login}</span></span></div></td><td className="px-5 py-5 text-right font-[var(--font-utility)] text-sm">{contributor.contributions.toLocaleString(locale === "vi" ? "vi-VN" : "en-US")}</td><td className="px-5 py-5 text-right text-xs text-[var(--color-ink-muted)]">{member?.role || t("contributor")}</td></tr>; })}</tbody></table></div><ol className="divide-y divide-[var(--color-border)] md:hidden">{visibleContributors.map((contributor, index) => { const member = teamMembers.find(({ githubUsername }) => githubUsername?.toLowerCase() === contributor.login.toLowerCase()); return <li key={contributor.login} className="p-5"><div className="flex items-start justify-between gap-4"><span className="font-[var(--font-utility)] text-xs text-[var(--color-accent)]">#{String(index + 1).padStart(2, "0")}</span><strong className="font-[var(--font-utility)] text-sm">{contributor.contributions.toLocaleString(locale === "vi" ? "vi-VN" : "en-US")} {t("commits")}</strong></div><div className="mt-4 flex items-center gap-3"><img src={member?.avatar || contributor.avatar_url} alt="" className="size-11 rounded-full object-cover" /><div className="min-w-0"><a href={contributor.html_url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-[var(--color-accent-hover)]">{member?.name || contributor.login} ↗</a><span className="mt-1 block truncate font-[var(--font-utility)] text-[10px] text-[var(--color-ink-muted)]">@{contributor.login} · {member?.role || t("contributor")}</span></div></div></li>; })}</ol><div className="flex justify-end border-t border-[var(--color-border)] p-4"><a href="https://github.com/two-tech-dev" target="_blank" rel="noopener noreferrer" className="text-link text-sm">{t("viewOrganization")}</a></div></div>;
}
