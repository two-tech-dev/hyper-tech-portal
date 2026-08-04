/* Hallmark · genre: modern-minimal · macrostructure: Service Ledger · design-system: design.md · designed-as-app */
import type { Metadata } from "next";
import { PricingContent } from "@/components/pages/PricingContent";

export const metadata: Metadata = { title: "Pricing", description: "Pricing for Discord services, ChatGPT Plus, Gemini Pro, Spotify, and automated Discord quests." };
export default function PricingPage() { return <PricingContent />; }
