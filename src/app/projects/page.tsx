import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | 2Tech Studio",
  description: "Browse all products and projects built by 2Tech Studio.",
};

const statusColors: Record<string, string> = {
  Live: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Beta: "bg-primary/15 text-primary border-primary/30",
  WIP: "bg-amber-500/15 text-amber-400 border-amber-500/30",
};

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <section className="flex-1 pt-36 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-16">
            <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">What we ship</p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-5">Our Projects</h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              From gaming infrastructure to payment engines — every project is built with purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group block">
                <div className="relative h-full rounded-2xl border border-white/8 bg-card overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="h-1.5 w-full" style={{ background: `linear-gradient(to right, ${project.color}70, ${project.color}20)` }} />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-5">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${statusColors[project.status] ?? ""}`}>
                        {project.status}
                      </span>
                      <span className="text-xs text-muted-foreground">{project.date}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.tagline}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="rounded-full text-xs px-2.5 bg-white/6 border-0 text-foreground/60">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      View case study <ExternalLink className="size-3" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {/* Coming soon */}
            <div className="rounded-2xl border border-dashed border-white/10 bg-card/30 flex flex-col items-center justify-center text-center p-10 min-h-[260px]">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-bold text-lg mb-1 text-foreground/50">Something&apos;s brewing</h3>
              <p className="text-muted-foreground text-sm max-w-[180px]">Our next project is in the works.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
