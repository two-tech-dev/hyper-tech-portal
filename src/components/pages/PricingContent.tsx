"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import type { TranslationKey } from "@/lib/i18n";

type Service = {
  number: string;
  title: TranslationKey;
  description: TranslationKey;
  price: string;
  priceLabel: TranslationKey;
  details: readonly [TranslationKey, TranslationKey][];
  banner?: string;
  tone: string;
};

type Product = {
  number: string;
  title: string;
  description: TranslationKey;
  duration: TranslationKey;
  plans: readonly { price: string; warranty?: TranslationKey }[];
  banner: string;
  tone: string;
};

const services: readonly Service[] = [
  { number: "01", title: "pricingAccounts", description: "pricingAccountsDescription", price: "2019–2026", priceLabel: "pricingAccountYears", details: [["pricingPrice", "pricingPriceByAccount"], ["pricingWarranty", "pricingLoginWarranty"]], banner: "/images/pricing/tkdiscord.png", tone: "var(--color-discord)" },
  { number: "02", title: "pricingNitro", description: "pricingNitroDescription", price: "59k", priceLabel: "pricingThreeMonths", details: [["pricingDuration", "pricingThreeMonths"], ["pricingWarranty", "pricingThreeMonths"]], banner: "/images/pricing/nitrotrial.png", tone: "var(--color-accent)" },
  { number: "03", title: "pricingBoost", description: "pricingBoostDescription", price: "1 / 3", priceLabel: "pricingMonths", details: [["pricingPrice", "pricingLivePrice"], ["pricingContact", "pricingHarryitz"], ["pricingWarranty", "pricingFullWarranty"]], banner: "/images/pricing/boostserver.png", tone: "var(--color-positive)" },
  { number: "04", title: "pricingNitroLink", description: "pricingNitroLinkDescription", price: "25k", priceLabel: "pricingLink", details: [["pricingDuration", "pricingThreeMonths"]], banner: "/images/pricing/linknitrotrial.png", tone: "var(--color-discord)" },
  { number: "05", title: "pricingCustomBot", description: "pricingCustomBotDescription", price: "—", priceLabel: "pricingContact", details: [["pricingContact", "pricingHarryitz"]], tone: "var(--color-discord)" },
];

const products: readonly Product[] = [
  { number: "05", title: "ChatGPT Plus 1 Tháng", description: "pricingChatGptDescription", duration: "pricingOneMonth", plans: [{ price: "90k", warranty: "pricingTwelveHours" }, { price: "120k", warranty: "pricingFullWarranty" }], banner: "/images/pricing/chatgptplus.png", tone: "var(--color-positive)" },
  { number: "06", title: "Gemini Pro 18 Tháng", description: "pricingGeminiDescription", duration: "pricingEighteenMonths", plans: [{ price: "119k", warranty: "pricingFullWarranty" }], banner: "/images/pricing/geminipro.png", tone: "var(--color-focus)" },
  { number: "07", title: "Spotify 3 Tháng", description: "pricingSpotifyDescription", duration: "pricingThreeMonths", plans: [{ price: "70k", warranty: "pricingFullWarranty" }], banner: "/images/pricing/spotify.png", tone: "var(--color-positive)" },
];

function ServiceCard({ service, t }: { service: Service; t: (key: TranslationKey) => string }) {
  return <article className="surface card-lift group relative flex min-h-[25rem] flex-col overflow-hidden p-5 sm:p-6">
    <div className="absolute inset-x-0 top-0 h-1" style={{ background: service.tone }} aria-hidden="true" />
    {service.banner && <img src={service.banner} alt={t(service.title)} className="mt-3 aspect-[16/7] w-full rounded-[var(--radius-sm)] object-cover" />}
    <div className={`${service.banner ? "mt-4" : "mt-1"} flex items-center justify-between font-mono text-xs text-[var(--color-ink-muted)]`}><span>{service.number}</span><span className="size-2 rounded-full" style={{ background: service.tone }} aria-hidden="true" /></div>
    <div className="mt-6">
      <p className="font-mono text-[clamp(2.4rem,6vw,4rem)] font-medium leading-none tracking-[-0.08em]" style={{ color: service.tone }}>{service.price}</p>
      <p className="mt-3 text-sm font-semibold text-[var(--color-ink-muted)]">{t(service.priceLabel)}</p>
    </div>
    <div className="mt-10 border-t border-[var(--color-border)] pt-6">
      <h2 className="text-xl font-bold tracking-[-0.04em]">{t(service.title)}</h2>
      <p className="mt-2 text-sm leading-6 text-[var(--color-ink-muted)]">{t(service.description)}</p>
    </div>
    <dl className="mt-auto divide-y divide-[var(--color-border)] pt-6 text-sm">{service.details.map(([label, value]) => <div key={label} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.45fr)] gap-3 py-3 first:pt-0"><dt className="text-[var(--color-ink-muted)]">{t(label)}</dt><dd className="min-w-0 text-right font-semibold [overflow-wrap:anywhere]">{t(value)}</dd></div>)}</dl>
  </article>;
}

function ProductCard({ product, t }: { product: Product; t: (key: TranslationKey) => string }) {
  return <article className="surface card-lift relative flex min-h-80 flex-col overflow-hidden p-5 sm:p-6">
    <div className="absolute inset-x-0 top-0 h-1" style={{ background: product.tone }} aria-hidden="true" />
    <img src={product.banner} alt={product.title} className="mt-3 aspect-[16/7] w-full rounded-[var(--radius-sm)] object-cover" />
    <div className="mt-4 flex items-start justify-between gap-4">
      <div><p className="font-mono text-xs text-[var(--color-ink-muted)]">{product.number}</p><h3 className="mt-3 text-2xl font-bold tracking-[-0.05em]">{product.title}</h3></div>
      <span className="tag">{t(product.duration)}</span>
    </div>
    <p className="mt-3 text-sm leading-6 text-[var(--color-ink-muted)]">{t(product.description)}</p>
    <div className="mt-auto grid gap-2 pt-8">{product.plans.map((plan) => <div key={plan.price} className="flex min-w-0 items-end justify-between gap-3 border-t border-[var(--color-border)] pt-4"><span className="font-mono text-3xl font-medium tracking-[-0.07em]" style={{ color: product.tone }}>{plan.price}</span>{plan.warranty && <span className="min-w-0 text-right text-xs font-semibold text-[var(--color-ink-muted)]">{t("pricingWarranty")}: {t(plan.warranty)}</span>}</div>)}</div>
  </article>;
}

export function PricingContent() {
  const { t } = useLocale();
  return <>
    <header className="site-wrap relative overflow-hidden pb-12 pt-12 sm:pb-16 sm:pt-20">
      <div className="pointer-events-none absolute -right-20 top-8 size-64 rounded-full bg-[var(--color-accent-soft)] opacity-70 blur-3xl" aria-hidden="true" />
      <p className="eyebrow relative">{t("pricingEyebrow")}</p>
      <h1 className="display relative mt-5 max-w-4xl text-[clamp(3rem,8vw,6rem)]">{t("pricingTitle")}</h1>
      <p className="lead relative mt-6 max-w-2xl">{t("pricingDescription")}</p>
    </header>

    <section className="site-wrap site-section pt-0" aria-labelledby="pricing-services-title">
      <div className="mb-5 flex items-end justify-between gap-4 border-b border-[var(--color-border)] pb-4">
        <h2 id="pricing-services-title" className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-ink-muted)]">{t("pricingServices")}</h2>
        <span className="font-mono text-xs text-[var(--color-ink-muted)]">01—05</span>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{services.map((service) => <ServiceCard key={service.number} service={service} t={t} />)}</div>
    </section>

    <section className="site-wrap site-section pt-0" aria-labelledby="digital-products-title">
      <div className="mb-5 flex items-end justify-between gap-4 border-b border-[var(--color-border)] pb-4">
        <h2 id="digital-products-title" className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-ink-muted)]">{t("pricingDigitalProducts")}</h2>
        <span className="font-mono text-xs text-[var(--color-ink-muted)]">05—07</span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{products.map((product) => <ProductCard key={product.number} product={product} t={t} />)}</div>
    </section>

    <section className="site-wrap site-section pt-0" aria-labelledby="quest-title">
      <article className="soft-surface relative overflow-hidden p-5 sm:p-8 lg:p-12">
        <div className="pointer-events-none absolute -bottom-24 -right-24 size-80 rounded-full border-[3rem] border-[var(--color-accent-soft)] opacity-80" aria-hidden="true" />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3"><span className="flex size-9 items-center justify-center rounded-full bg-[var(--color-discord)] font-mono text-xs font-bold text-white" aria-hidden="true">08</span><p className="eyebrow">{t("pricingAutomatedService")}</p></div>
            <h2 id="quest-title" className="display mt-7 max-w-xl text-[clamp(2.25rem,5vw,4.5rem)]">{t("pricingQuest")}</h2>
            <p className="lead mt-5 max-w-xl">{t("pricingQuestDescription")}</p>
            <div className="mt-8 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-sm)]">
              <p className="text-sm font-semibold text-[var(--color-accent-hover)]">{t("pricingFirstTwo")}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-ink-muted)]">{t("pricingQuestScope")}</p>
            </div>
          </div>

          <div className="min-w-0">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-ink-muted)]">{t("pricingPackages")}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="surface p-5"><p className="font-mono text-3xl font-medium tracking-[-0.07em]"><span className="sr-only">{t("pricingTwoRunsAria")}</span><span aria-hidden="true">15🐟</span></p><p className="mt-2 text-sm font-semibold">{t("pricingTwoRuns")}</p></div>
              <div className="surface p-5"><p className="font-mono text-3xl font-medium tracking-[-0.07em]"><span className="sr-only">{t("pricingFiveRunsAria")}</span><span aria-hidden="true">30🐟</span></p><p className="mt-2 text-sm font-semibold">{t("pricingFiveRuns")}</p></div>
            </div>
            <dl className="mt-6 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)] text-sm">
              <div className="grid gap-2 py-4 sm:grid-cols-[7rem_1fr]"><dt className="text-[var(--color-ink-muted)]">{t("pricingBot")}</dt><dd className="min-w-0 font-semibold [overflow-wrap:anywhere]">@Hội Đồng Quản Trị 2Tech</dd></div>
              <div className="grid gap-3 py-4 sm:grid-cols-[7rem_1fr]"><dt className="text-[var(--color-ink-muted)]">{t("pricingCommands")}</dt><dd className="flex min-w-0 flex-wrap gap-2">{["/quest", "/status", "/mualuot"].map((command) => <code key={command} className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1.5 font-mono text-xs">{command}</code>)}</dd></div>
            </dl>
          </div>
        </div>
      </article>
    </section>

    <section className="site-wrap site-section pt-0" aria-labelledby="purchase-contact-title">
      <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-ink)] p-6 text-white shadow-[var(--shadow-md)] sm:p-9 lg:flex lg:items-center lg:justify-between lg:gap-12">
        <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full border-[3rem] border-white/5" aria-hidden="true" />
        <div className="relative max-w-xl"><p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-white/60">{t("pricingPurchaseEyebrow")}</p><h2 id="purchase-contact-title" className="mt-4 text-3xl font-bold tracking-[-0.05em] sm:text-4xl">{t("pricingPurchaseTitle")}</h2><p className="mt-3 text-sm leading-6 text-white/65">{t("pricingPurchaseDescription")}</p></div>
        <div className="relative mt-7 grid gap-3 sm:grid-cols-2 lg:mt-0 lg:min-w-[22rem]">
          <a href="https://www.facebook.com/harryitz.fb" target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-between rounded-[var(--radius-sm)] bg-[var(--color-facebook)] px-5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"><span>Facebook</span><span aria-hidden="true">↗</span></a>
          <a href="https://discord.gg/SBrjVSjA6M" target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-between rounded-[var(--radius-sm)] bg-[var(--color-discord)] px-5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"><span>Discord</span><span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  </>;
}
