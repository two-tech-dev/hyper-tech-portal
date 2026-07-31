/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
/* Hallmark · genre: modern-minimal · macrostructure: Activity Board · design-system: design.md · designed-as-app */
import type { Metadata } from "next";
import { ContributionsContent } from "@/components/pages/ContributionsContent";

export const metadata: Metadata = { title: "Open source", description: "Contribution activity across 2Tech Studio's GitHub organization." };
export default function ContributionsPage() { return <ContributionsContent />; }
