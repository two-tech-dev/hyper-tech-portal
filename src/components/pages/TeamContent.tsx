"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { teamMembers } from "@/data/team";

export function TeamContent() {
  const { t } = useLocale();
  return <><header className="site-wrap pb-12 pt-12 sm:pb-16 sm:pt-20"><p className="eyebrow">{t("teamEyebrow")}</p><h1 className="display mt-5 max-w-4xl text-[clamp(3rem,8vw,6rem)]">{t("teamTitle")}</h1><p className="lead mt-6 max-w-xl">{t("teamDescription")}</p></header><section className="site-wrap site-section pt-0"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{teamMembers.map((member) => <a key={member.name} href={member.githubUsername ? `https://github.com/${member.githubUsername}` : undefined} target="_blank" rel="noopener noreferrer" className="surface card-lift group p-5 sm:p-6"><div className="flex items-center gap-4"><img src={member.avatar} alt={member.name} className="size-14 rounded-full object-cover grayscale transition-[filter] duration-300 group-hover:grayscale-0" /><div className="min-w-0"><h2 className="truncate text-base font-bold tracking-[-0.03em]">{member.name}</h2><p className="mt-1 text-sm text-[var(--color-accent-hover)]">{member.role}</p></div></div>{member.bio && <p className="mt-5 text-sm leading-6 text-[var(--color-ink-muted)]">{member.bio}</p>}<div className="mt-5 flex flex-wrap gap-2">{member.skills?.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>{member.githubUsername && <p className="mt-6 text-sm font-semibold text-[var(--color-accent-hover)]">@{member.githubUsername} ↗</p>}</a>)}</div></section></>;
}
