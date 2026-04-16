import { notFound } from "next/navigation";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/data/projects";
import { ExternalLink, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | 2Tech Studio`,
    description: project.tagline,
  };
}

const statusColors: Record<string, string> = {
  Live: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
  Beta: "bg-red-500/15 text-red-600 border-red-500/30",
  WIP: "bg-amber-500/15 text-amber-600 border-amber-500/30",
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero band */}
      <section className="pt-32 pb-16 relative overflow-hidden border-b border-border/60">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${project.color}, transparent)` }}
        />
        <div className="relative container mx-auto px-4 max-w-4xl">
          {/* Back link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="size-4" /> All Projects
          </Link>

          {/* Status + Date */}
          <div className="flex items-center gap-3 mb-5">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${statusColors[project.status] ?? ""}`}>
              {project.status}
            </span>
            <span className="text-xs text-muted-foreground">{project.date}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            {project.tagline}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-full px-3 py-1 text-sm">
                {tag}
              </Badge>
            ))}
          </div>

          {/* CTA links if any */}
          {(project.links.live || project.links.github) && (
            <div className="flex gap-3">
              {project.links.live && (
                <Button render={<Link href={project.links.live} target="_blank" />} className="rounded-xl">
                  View Live <ExternalLink className="size-4 ml-1" />
                </Button>
              )}
              {project.links.github && (
                <Button variant="outline" render={<Link href={project.links.github} target="_blank" />} className="rounded-xl">
                  Source Code
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Body */}
      <section className="py-16 flex-1">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="md:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-4">Overview</h2>
                <p className="text-foreground/80 leading-relaxed text-base md:text-lg">{project.overview}</p>
              </div>

              {/* Problem */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-4">The Problem</h2>
                <div className="rounded-2xl border border-border/60 bg-muted/30 p-6">
                  <p className="text-foreground/80 leading-relaxed">{project.problem}</p>
                </div>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-4">Our Solution</h2>
                <div className="rounded-2xl border border-border/60 bg-muted/30 p-6">
                  <p className="text-foreground/80 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-4">Key Highlights</h2>
                <ul className="space-y-3">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Tech Stack */}
              <div className="rounded-2xl border border-border/60 bg-card p-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-5">Tech Stack</h2>
                <div className="space-y-3">
                  {project.techStack.map((tech) => (
                    <div key={tech.name} className="flex items-center justify-between">
                      <span className="font-medium text-sm">{tech.name}</span>
                      <Badge variant="secondary" className="rounded-full text-xs">{tech.category}</Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="rounded-2xl border border-border/60 bg-card p-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-5">Details</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <span className="font-medium">{project.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Launched</span>
                    <span className="font-medium">{project.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Team</span>
                    <span className="font-medium">2Tech Studio</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 border-t border-border/60">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-3">Interested in working with us?</h2>
          <p className="text-muted-foreground mb-6">We&apos;re always open to new ideas and collaborations.</p>
          <Button render={<Link href="mailto:hello@2tech.studio" />} className="rounded-xl px-8 h-11">
            Get in touch
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
