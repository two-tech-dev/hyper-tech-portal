"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    date: "10/12/2025",
    title: "Hyper Tech Studio Founded",
    icon: "🚀",
    side: "right" as const,
  },
  {
    date: "26/12/2025",
    title: "Jasper Wild MCPE Server",
    icon: "⛏️",
    side: "left" as const,
  },
  {
    date: "08/03/2026",
    title: "Rebrand → 2Tech Studio",
    icon: "⚡",
    side: "right" as const,
  },
  {
    date: "14/04/2026",
    title: "Hyper Payment Launch",
    icon: "💳",
    side: "left" as const,
  },
];

export function Timeline() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative container mx-auto px-4 max-w-4xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">
            Our Story
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            A history of{" "}
            <span className="bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">
              2Tech
            </span>
          </h2>
        </motion.div>

        {/* Timeline track */}
        <div className="relative">
          {/* Central axis line */}
          <div className="absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 overflow-hidden">
            <motion.div
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-b from-transparent via-primary/50 to-transparent"
            />
          </div>

          <div className="flex flex-col gap-0">
            {milestones.map((item, i) => {
              const isRight = item.side === "right";
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRight ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                  className="relative flex items-center min-h-[110px]"
                >
                  {/* Left half */}
                  <div className="w-1/2 pr-12 flex justify-end">
                    {isRight ? (
                      <DateLabel date={item.date} align="right" />
                    ) : (
                      <MilestoneCard title={item.title} icon={item.icon} align="right" />
                    )}
                  </div>

                  {/* Center node */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="relative">
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 rounded-full bg-primary/30 blur-md scale-150" />
                      {/* Pulsing ring */}
                      <motion.div
                        animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                        className="absolute inset-0 rounded-full border border-primary/60"
                      />
                      {/* Core dot */}
                      <div className="relative size-4 rounded-full bg-primary shadow-lg shadow-primary/60 border-2 border-background" />
                    </div>
                  </div>

                  {/* Right half */}
                  <div className="w-1/2 pl-12 flex justify-start">
                    {isRight ? (
                      <MilestoneCard title={item.title} icon={item.icon} align="left" />
                    ) : (
                      <DateLabel date={item.date} align="left" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Sub-components ────────────────────────────────── */

function DateLabel({ date, align }: { date: string; align: "left" | "right" }) {
  return (
    <div className={`flex flex-col ${align === "right" ? "items-end" : "items-start"}`}>
      <span className="text-2xl md:text-3xl font-bold text-foreground/40 tabular-nums tracking-tight">
        {date}
      </span>
    </div>
  );
}

function MilestoneCard({ title, icon, align }: { title: string; icon: string; align: "left" | "right" }) {
  const isLeft = align === "left";
  return (
    <div className="group relative max-w-[220px]">
      {/* Connector line to dot */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 h-px w-10 bg-gradient-to-r ${
          isLeft
            ? "left-0 -translate-x-full from-primary/50 to-transparent flex-row-reverse"
            : "right-0 translate-x-full from-transparent to-primary/50"
        }`}
      />

      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-card/80 backdrop-blur-sm px-4 py-3.5 shadow-xl shadow-black/30 hover:border-primary/30 hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5">
        {/* Subtle top gradient accent */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className={`flex items-center gap-3 ${isLeft ? "" : "flex-row-reverse"}`}>
          {/* Icon */}
          <span className="text-xl shrink-0 leading-none">{icon}</span>
          <h3 className={`font-semibold text-sm leading-snug text-foreground ${isLeft ? "text-left" : "text-right"}`}>
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}
