"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function TeamPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Who we are</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            The{" "}
            <span className="bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">2Tech</span>{" "}
            team
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            A small, focused team that moves fast and ships things people love.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: "⚡", title: "Move Fast", desc: "We prototype in hours, ship in days, and iterate constantly." },
            { icon: "🎯", title: "Purpose-Driven", desc: "Every line of code serves a clear user need — nothing else." },
            { icon: "🛠️", title: "Full-Stack", desc: "From DB schema to pixel-perfect UI — we own the entire stack." },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl border border-white/8 bg-card p-7 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link href="/team" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4">
            Meet the full team <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
