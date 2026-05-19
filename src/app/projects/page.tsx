"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/motion/fade-in";

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <Navbar />

      <div className="flex-grow max-w-[1280px] mx-auto px-4 sm:px-5 md:px-20 w-full pb-16 sm:pb-32">
        <FadeIn>
          <section className="mb-10 mt-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-on-surface mb-4">
              Projects
            </h1>
            <p className="text-base md:text-lg text-on-surface-variant max-w-2xl">
              What we ship
            </p>
          </section>
        </FadeIn>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.1}>
              <Link
                href={`/projects/${project.slug}`}
                className="bg-surface-container rounded-xl overflow-hidden group block hover:ring-2 hover:ring-primary/50 transition-all duration-300 flex flex-col h-full"
              >
                <div
                  className="h-40 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}cc, ${project.color}33 70%, #0e0e0e)`,
                  }}
                >
                  {project.icon ? (
                    <div className="w-20 h-20 bg-white rounded-2xl p-3 border border-white/50 z-10 transition-transform duration-500 group-hover:scale-110 shadow-lg">
                      <Image
                        src={project.icon}
                        alt={`${project.title} Logo`}
                        width={56}
                        height={56}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm z-10 transition-transform duration-500 group-hover:scale-110">
                      <span
                        className="material-symbols-outlined text-5xl text-white"
                        style={{ fontVariationSettings: "'FILL' 0" }}
                      >
                        code
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-on-surface mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">
                    {project.tagline}
                  </p>
                  <div className="mt-auto flex justify-between items-center">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs text-on-surface-variant bg-surface-container-high rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="px-3 py-1 bg-surface-container-high text-xs font-medium text-on-surface rounded-md">
                      {project.status}
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </section>
      </div>

      <Footer />
    </main>
  );
}
