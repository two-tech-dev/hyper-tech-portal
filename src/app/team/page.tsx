/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
/* Hallmark · genre: modern-minimal · macrostructure: People Grid · design-system: design.md · designed-as-app */
import type { Metadata } from "next";
import { TeamContent } from "@/components/pages/TeamContent";

export const metadata: Metadata = { title: "Team", description: "People building products at 2Tech Studio." };
export default function TeamPage() { return <TeamContent />; }
