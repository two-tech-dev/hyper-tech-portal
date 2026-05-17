import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function ProjectsHighlight() {
    const featured = projects.slice(0, 2);

    return (
        <section className="py-24 relative" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 600px' }}>
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Header */}
                <ScrollReveal>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                        <div>
                            <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">
                                What we ship
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Featured{" "}
                                <span className="bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">
                                    Projects
                                </span>
                            </h2>
                        </div>
                        <Link
                            href="/projects"
                            className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/70 transition-colors shrink-0"
                        >
                            View all <ExternalLink className="size-3.5" />
                        </Link>
                    </div>
                </ScrollReveal>

                {/* Project Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featured.map((project, i) => (
                        <ScrollReveal key={project.slug} delay={i * 120}>
                            <Link
                                href={`/projects/${project.slug}`}
                                className="group block h-full"
                            >
                                <div className="relative h-full rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                                    {/* Visual header */}
                                    <div
                                        className="relative h-36 w-full overflow-hidden"
                                        style={{
                                            background: `linear-gradient(135deg, ${project.color}30, ${project.color}10, transparent)`,
                                        }}
                                    >
                                        {/* Dot pattern overlay */}
                                        <div
                                            className="absolute inset-0 opacity-[0.15]"
                                            style={{
                                                backgroundImage: `radial-gradient(${project.color} 1px, transparent 1px)`,
                                                backgroundSize: "16px 16px",
                                            }}
                                        />
                                        {/* Glow */}
                                        <div
                                            className="absolute -top-10 -right-10 size-40 rounded-full blur-3xl opacity-30"
                                            style={{ backgroundColor: project.color }}
                                        />
                                        {/* Icon */}
                                        {project.icon && (
                                            <div className="absolute bottom-4 right-5 size-14 rounded-xl border border-border bg-card/60 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-lg">
                                                <Image
                                                    src={project.icon}
                                                    alt={`${project.title} icon`}
                                                    width={40}
                                                    height={40}
                                                    className="object-contain"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-7">
                                        <div className="flex items-center gap-2 mb-4">
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
                                            <span className="text-xs text-muted-foreground">
                                                {project.date}
                                            </span>
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                                            {project.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                                            {project.tagline}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.slice(0, 3).map((tag) => (
                                                <Badge
                                                    key={tag}
                                                    variant="secondary"
                                                    className="rounded-full text-xs px-2.5 bg-muted text-muted-foreground border-0"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            View case study{" "}
                                            <ExternalLink className="size-3.5" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
