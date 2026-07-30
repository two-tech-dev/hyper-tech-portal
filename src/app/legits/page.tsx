/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
/* Hallmark · genre: modern-minimal · macrostructure: Transaction Ledger · design-system: design.md · designed-as-app */
import type { Metadata } from "next";
import { LegitsPageContent } from "@/components/site/LegitsPageContent";

export const metadata: Metadata = { title: "Legits", description: "Public receipts and completed transactions for checking 2Tech’s trading reputation." };
export default function LegitsPage() { return <LegitsPageContent />; }
