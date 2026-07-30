/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
/* Hallmark · genre: modern-minimal · macrostructure: Modern Case Study · design-system: design.md · designed-as-app */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { ProjectDetailContent } from "@/components/pages/ProjectDetailContent";
interface Props { params: Promise<{ slug: string }> }
export async function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const project = getProject((await params).slug); return project ? { title: project.title, description: project.tagline } : {}; }
export default async function ProjectPage({ params }: Props) { const project = getProject((await params).slug); if (!project) notFound(); const next = projects[(projects.findIndex(({ slug }) => slug === project.slug) + 1) % projects.length]; return <ProjectDetailContent project={project} next={next} />; }
