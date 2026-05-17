import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | 2Tech Studio",
  description: "Browse all products and projects built by 2Tech Studio.",
};

export default function ProjectsPage() {
  const [featured, ...rest] = projects;

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <section className="flex-1 pt-36 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">What we ship</p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-5">Our Projects</h1>
              <p className="text-muted-foreground text-lg max-w-xl">
                From gaming infrastructure to payment engines — every project is built with purpose.
              </p>
            </div>
          </ScrollReveal>

          {/* Featured Hero Card */}
          {featured && (
            <ScrollReveal>
              <Link href={`/projects/${featured.slug}`} className="group block mb-10">
                <div className="relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                  {/* Large visual header */}
                  <div
                    className="relative h-48 md:h-64 w-full overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${featured.color}35, ${featured.color}15, transparent)`,
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-[0.12]"
                      style={{
                        backgroundImage: `radial-gradient(${featured.color} 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                      }}
                    />
                    <div
                      className="absolute -top-20 -right-20 size-72 rounded-full blur-[80px] opacity-25"
                      style={{ backgroundColor: featured.color }}
                    />
                    {featured.icon && (
                      <div className="absolute bottom-6 right-8 size-20 rounded-2xl border border-border bg-card/60 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-xl">
                        <Image
                          src={featured.icon}
                          alt={`${featured.title} icon`}
                          width={56}
                          height={56}
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div className="absolute top-6 left-8">
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Featured</span>
                    </div>
                  </div>

                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border"
                        style={{
                          backgroundColor: `${featured.color}15`,
                          color: featured.color,
                          borderColor: `${featured.color}30`,
                        }}
                      >
                        {featured.status}
                      </span>
                      <span className="text-sm text-muted-foreground">{featured.date}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-primary transition-colors">{featured.title}</h2>
                    <p className="text-muted-foreground text-base leading-relaxed mb-6 max-w-2xl">{featured.tagline}</p>
                    <div className="flex flex-wrap gap-2">
                      {featured.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="rounded-full text-xs px-3 bg-muted border-0 text-muted-foreground">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      View case study <ExternalLink className="size-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Remaining projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 80}>
                <Link href={`/projects/${project.slug}`} className="group block">
                  <div className="relative h-full rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                    {/* Visual header */}
                    <div
                      className="relative h-32 w-full overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}30, ${project.color}10, transparent)`,
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-[0.12]"
                        style={{
                          backgroundImage: `radial-gradient(${project.color} 1px, transparent 1px)`,
                          backgroundSize: "16px 16px",
                        }}
                      />
                      <div
                        className="absolute -top-10 -right-10 size-40 rounded-full blur-3xl opacity-25"
                        style={{ backgroundColor: project.color }}
                      />
                      {project.icon && (
                        <div className="absolute bottom-3 right-4 size-12 rounded-xl border border-border bg-card/60 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-lg">
                          <Image
                            src={project.icon}
                            alt={`${project.title} icon`}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border"
                          style={{
                            backgroundColor: `${project.color}15`,
                            color: project.color,
                            borderColor: `${project.color}30`,
                          }}
                        >
                          {project.status}
                        </span>
                        <span className="text-xs text-muted-foreground">{project.date}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.tagline}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="rounded-full text-xs px-2.5 bg-muted border-0 text-muted-foreground">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        View case study <ExternalLink className="size-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}

            {/* Coming soon */}
            <ScrollReveal delay={rest.length * 80}>
              <div className="rounded-2xl border border-dashed border-border bg-card/30 flex flex-col items-center justify-center text-center p-10 min-h-[300px]">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-bold text-lg mb-1 text-foreground/50">Something&apos;s brewing</h3>
                <p className="text-muted-foreground text-sm max-w-[180px]">Our next project is in the works.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
