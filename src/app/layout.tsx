import type { Metadata } from "next";
import { Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Localized } from "@/components/i18n/Localized";
import "./globals.css";

const vietnam = Be_Vietnam_Pro({ variable: "--font-be-vietnam", subsets: ["latin", "vietnamese"], display: "swap", weight: ["400", "500", "600", "700"] });
const mono = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin", "vietnamese"], display: "swap", weight: ["400", "500"] });

export const metadata: Metadata = { title: { default: "2Tech Studio", template: "%s — 2Tech Studio" }, description: "A Vietnamese technology studio building useful digital products.", icons: { icon: "/favicon.svg?v=3", shortcut: "/favicon.svg?v=3" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${vietnam.variable} ${mono.variable}`}><body><LocaleProvider><a href="#main-content" className="fixed left-4 top-4 z-50 -translate-y-24 rounded-[var(--radius-sm)] bg-[var(--color-ink)] px-4 py-3 text-sm text-white transition-transform focus:translate-y-0"><Localized k="skipContent" /></a><SiteNav /><main id="main-content">{children}</main><SiteFooter /></LocaleProvider></body></html>;
}
