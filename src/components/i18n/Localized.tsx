"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import type { TranslationKey } from "@/lib/i18n";

type ElementTag = "span" | "p" | "h1" | "h2" | "h3" | "strong" | "div";

export function Localized({ k, as = "span", className }: { k: TranslationKey; as?: ElementTag; className?: string }) {
  const { t } = useLocale();
  const Component = as;
  return <Component className={className}>{t(k)}</Component>;
}
