"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { FadeIn } from "@/components/motion/fade-in";

export function ProjectsHighlight() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24" id="projects">
      <FadeIn>
        <Link href="/projects" className="inline-flex items-center gap-2 mb-8 group">
          <h2 className="text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">
            Our Projects
          </h2>
          <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
            chevron_right
          </span>
        </Link>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.1}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex gap-4 rounded-[14px] bg-surface-container-low p-4 border border-outline-variant hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-200"
              style={{ boxShadow: 'var(--shadow-sm)' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 shrink-0 rounded-xl flex items-center justify-center overflow-hidden bg-white shadow-sm"
              >
                {project.icon ? (
                  <Image
                    src={project.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                ) : (
                  <span
                    className="material-symbols-outlined text-3xl text-white"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    code
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-on-surface mb-0.5 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-on-surface-variant mb-2">
                  {project.tags.slice(0, 2).join(" · ")}
                </p>
                <p className="text-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                  {project.tagline}
                </p>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
