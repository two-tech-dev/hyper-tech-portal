/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
/* Hallmark · genre: modern-minimal · macrostructure: Activity Board · design-system: design.md · designed-as-app */
"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { ContributionsBoard } from "@/components/site/ContributionsBoard";
export default function ContributionsPage() { const { t } = useLocale(); return <><header className="site-wrap pb-12 pt-12 sm:pb-16 sm:pt-20"><p className="eyebrow">{t("navOpenSource")} / {t("activity")}</p><h1 className="display mt-5 max-w-4xl text-[clamp(3rem,8vw,6rem)]">{t("contributionsTitle")}</h1><p className="lead mt-6 max-w-2xl">{t("contributionsDescription")}</p></header><section className="site-wrap site-section pt-0"><div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">{t("contribBoard")}</p><h2 className="mt-2 text-2xl font-bold tracking-[-0.04em]">{t("contribPeople")}</h2></div><a href="https://github.com/two-tech-dev" target="_blank" rel="noopener noreferrer" className="text-link text-sm">{t("contribGithub")}</a></div><ContributionsBoard /></section></> }
