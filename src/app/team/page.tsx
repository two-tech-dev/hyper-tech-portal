"use client";

import { teamMembers } from "@/data/team";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/motion/fade-in";

export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <Navbar />

      <div className="flex-grow max-w-[1280px] mx-auto px-4 sm:px-5 md:px-20 w-full mt-4 mb-24">
        <FadeIn>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-3">
              The team
            </h1>
            <p className="text-base text-on-surface-variant max-w-lg">
              A small group that moves fast and ships things people actually use.
            </p>
          </header>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {teamMembers.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.08}>
              <a
                href={member.githubUsername ? `https://github.com/${member.githubUsername}` : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[14px] bg-surface-container-low p-6 border border-outline-variant hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-200 block h-full"
              style={{ boxShadow: 'var(--shadow-sm)' }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover border border-outline-variant/20 shrink-0"
                  />
                  <div>
                    <h3 className="text-base font-semibold text-on-surface">{member.name}</h3>
                    <span className="text-sm text-on-surface-variant">{member.role}</span>
                  </div>
                </div>
                {member.bio && (
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-3">{member.bio}</p>
                )}
                {member.skills && (
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map(s => (
                      <span key={s} className="px-2 py-0.5 rounded text-xs text-on-surface-variant bg-surface-container-highest/50">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
                {member.githubUsername && (
                  <div className="mt-3 text-sm text-on-surface-variant group-hover:text-primary transition-colors">
                    @{member.githubUsername}
                  </div>
                )}
              </a>
            </FadeIn>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
