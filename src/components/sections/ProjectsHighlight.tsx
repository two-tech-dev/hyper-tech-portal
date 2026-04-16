"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export function ProjectsHighlight() {
  const featured = projects.slice(0, 2);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">What we ship</p>
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
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
            >
              <Link href={`/projects/${project.slug}`} className="group block h-full">
                <div className="relative h-full rounded-2xl border border-white/8 bg-card overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                  {/* Color top accent */}
                  <div className="h-1.5 w-full" style={{ background: `linear-gradient(to right, ${project.color}60, ${project.color}20)` }} />

                  <div className="p-7">
                    <div className="flex items-center gap-2 mb-5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="rounded-full text-xs px-2.5 bg-white/6 text-foreground/70 border-0">
                          {tag}
                        </Badge>
                      ))}
                      <span className="ml-auto text-xs text-muted-foreground">{project.date}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.tagline}
                    </p>

                    <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      View case study <ExternalLink className="size-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
