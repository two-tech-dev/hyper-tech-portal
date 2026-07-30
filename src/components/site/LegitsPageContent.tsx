"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { LegitsBoard } from "@/components/site/LegitsBoard";

export function LegitsPageContent() {
  const { t } = useLocale();
  return <>
    <header className="site-wrap pb-8 pt-12 sm:pb-10 sm:pt-16">
      <p className="eyebrow">{t("legitsEyebrow")}</p>
      <h1 className="display mt-4 max-w-4xl text-[clamp(3rem,8vw,6rem)]">{t("legitsTitle")}</h1>
      <p className="lead mt-5 max-w-2xl">{t("legitsDescription")}</p>
    </header>
    <section className="site-wrap pb-16 sm:pb-24">
      <div className="mb-2 flex items-center justify-between gap-4 border-b border-[var(--color-border)] pb-3">
        <p className="eyebrow">{t("legitsSource")}</p>
        <span className="status">{t("legitsLive")}</span>
      </div>
      <LegitsBoard />
    </section>
  </>;
}
