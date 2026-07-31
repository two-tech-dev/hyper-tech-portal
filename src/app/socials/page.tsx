/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
/* Hallmark · genre: modern-minimal · macrostructure: Friendly Channel Directory · design-system: design.md · designed-as-app */
import type { Metadata } from "next";
import { SocialsContent } from "@/components/pages/SocialsContent";

export const metadata: Metadata = { title: "Socials", description: "Follow and join 2Tech Studio's community channels." };
export default function SocialsPage() { return <SocialsContent />; }
