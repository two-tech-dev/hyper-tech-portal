import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Badge } from "@/components/ui/badge";
import { teamMembers } from "@/data/team";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | 2Tech Studio",
  description: "Meet the passionate people behind 2Tech Studio.",
};

const roleColors: Record<string, string> = {
  Founder: "bg-primary/20 text-primary border-primary/30",
  "Co-Founder": "bg-red-500/15 text-red-400 border-red-500/25",
  Operator: "bg-orange-500/15 text-orange-400 border-orange-500/25",
  Moderator: "bg-blue-500/15 text-blue-400 border-blue-500/25",
  Member: "bg-white/8 text-foreground/70 border-white/12",
};

export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <section className="flex-1 pt-36 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header */}
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Who we are</p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-5">Meet The Team</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A small but mighty crew building things that matter.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
            {[
              { icon: "⚡", title: "Move Fast", desc: "We prototype in hours and ship in days." },
              { icon: "🎯", title: "Purpose First", desc: "Every feature solves a real problem for real people." },
              { icon: "🔓", title: "Open Culture", desc: "We communicate openly and grow together." },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/8 bg-card p-7 hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Team grid */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-8 text-center">Core Members</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="group flex flex-col items-center text-center rounded-2xl border border-white/8 bg-card p-5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Avatar */}
                  <div className="relative mb-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="size-20 rounded-2xl object-cover border-2 border-white/10 group-hover:border-primary/40 transition-colors duration-300"
                    />
                    {/* Online dot */}
                    <span className="absolute -bottom-1 -right-1 size-3.5 rounded-full bg-emerald-500 border-2 border-card" />
                  </div>

                  {/* Name */}
                  <h3 className="font-bold text-sm leading-snug mb-1.5">{member.name}</h3>

                  {/* Role badge */}
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border ${roleColors[member.role] ?? roleColors.Member}`}>
                    {member.role}
                  </span>
                </div>
              ))}

              {/* Placeholder */}
              <div className="flex flex-col items-center justify-center text-center rounded-2xl border border-dashed border-white/10 bg-card/20 p-5 min-h-[180px]">
                <div className="text-2xl mb-2">🤝</div>
                <p className="text-muted-foreground text-xs leading-snug">We&apos;re growing</p>
              </div>
            </div>
          </div>

          {/* Bigger feature cards for leadership */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.filter(m => ["Founder", "Co-Founder"].includes(m.role)).map((member) => (
                <div
                  key={member.name}
                  className="flex items-center gap-5 rounded-2xl border border-white/8 bg-card p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="size-16 rounded-2xl object-cover border-2 border-white/10 shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-base">{member.name}</h3>
                    </div>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border mb-2 ${roleColors[member.role] ?? ""}`}>
                      {member.role}
                    </span>
                    {member.bio && <p className="text-muted-foreground text-sm leading-relaxed mt-1">{member.bio}</p>}
                    {member.skills && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {member.skills.map(s => (
                          <Badge key={s} variant="secondary" className="rounded-full text-xs bg-white/6 border-0 text-foreground/60">{s}</Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
