/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
/* Hallmark · genre: modern-minimal · macrostructure: Feature Showcase · design-system: design.md · designed-as-app */
import type { Metadata } from "next";
import { ProjectsContent } from "@/components/pages/ProjectsContent";

export const metadata: Metadata = { title: "Projects", description: "Products, platforms, and tools built by 2Tech Studio." };
export default function ProjectsPage() { return <ProjectsContent />; }
