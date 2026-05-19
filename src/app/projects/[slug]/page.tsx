import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { getProject, projects } from "@/data/projects";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
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

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="flex min-h-screen flex-col pt-20">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `linear-gradient(135deg, ${project.color}66, transparent 60%)`,
          }}
        />
        <div className="max-w-[1280px] mx-auto px-5 md:px-20 py-16 relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-primary mb-8 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Projects
          </Link>

          <div className="flex items-start gap-6">
            {project.icon && (
              <div
                className="w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center overflow-hidden border border-outline-variant/20"
                style={{
                  background: `linear-gradient(135deg, ${project.color}cc, ${project.color}44)`,
                }}
              >
                <Image
                  src={project.icon}
                  alt={project.title}
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain"
                />
              </div>
            )}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                  {project.status}
                </span>
                <span className="text-sm text-on-surface-variant">{project.date}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-3">
                {project.title}
              </h1>
              <p className="text-lg text-on-surface-variant max-w-xl">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Tags & Links */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm text-on-surface-variant bg-surface-container border border-outline-variant/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {(project.links.live || project.links.github) && (
            <div className="mt-6 flex gap-3">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#00d1ff] text-black px-5 py-2.5 rounded-full font-semibold text-sm hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,209,255,0.3)]"
                >
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  View Live
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-on-surface border border-outline-variant/30 hover:border-primary/50 transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">code</span>
                  Source Code
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 pb-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-4">Overview</h2>
                <p className="text-on-surface leading-relaxed">{project.overview}</p>
              </div>

              <div>
                <h2 className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-4">The Problem</h2>
                <div className="rounded-xl bg-surface-container p-6 border border-outline-variant/10">
                  <p className="text-on-surface leading-relaxed">{project.problem}</p>
                </div>
              </div>

              <div>
                <h2 className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-4">Our Approach</h2>
                <div className="rounded-xl bg-surface-container p-6 border border-outline-variant/10">
                  <p className="text-on-surface leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div>
                <h2 className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-4">Highlights</h2>
                <ul className="space-y-3">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0">check_circle</span>
                      <span className="text-on-surface text-sm">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-xl bg-surface-container p-6 border border-outline-variant/10 sticky top-24">
                <h2 className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-4">Tech Stack</h2>
                <div className="space-y-3">
                  {project.techStack.map((tech) => (
                    <div key={tech.name} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-on-surface">{tech.name}</span>
                      <span className="text-xs text-on-surface-variant bg-surface-container-high px-2 py-0.5 rounded">
                        {tech.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
