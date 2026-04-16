"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            {/* Dot grid */}
            <div
                className="absolute inset-0 opacity-[0.18]"
                style={{
                    backgroundImage:
                        "radial-gradient(oklch(0.575 0.23 25 / 0.6) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />
            {/* Red glow top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[500px] md:size-[600px] rounded-full bg-primary/10 blur-[120px] md:blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 size-[300px] md:size-[400px] rounded-full bg-primary/6 blur-[80px] md:blur-[100px] pointer-events-none" />

            <div className="relative z-10 container mx-auto px-5 flex flex-col items-center text-center pt-24 pb-16 md:pt-28 md:pb-24 gap-6 md:gap-8 max-w-5xl">
                {/* Pill badge */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Badge
                        variant="outline"
                        className="rounded-full px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-medium border-primary/30 text-primary bg-primary/8 backdrop-blur-sm gap-1.5"
                    >
                        <Zap className="size-3 fill-primary" />
                        2Tech – One team, One dream
                    </Badge>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.08] text-foreground"
                >
                    We build{" "}
                    <span className="bg-gradient-to-br from-primary via-red-400 to-orange-400 bg-clip-text text-transparent">
                        digital
                    </span>
                    <br />
                    experiences
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-sm md:max-w-lg text-sm md:text-lg text-muted-foreground leading-relaxed"
                >
                    From gaming servers to payment gateways — we craft fast,
                    beautiful, and purposeful products that resonate.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-xs sm:max-w-none"
                >
                    <Button
                        size="lg"
                        className="h-11 px-8 rounded-xl font-semibold shadow-xl shadow-primary/30 bg-primary hover:bg-primary/90"
                        render={<Link href="/projects" />}
                    >
                        View Projects <ArrowRight className="size-4 ml-1" />
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="h-11 px-8 rounded-xl font-medium border-white/10 hover:border-primary/40 hover:bg-primary/8 text-foreground/70"
                        render={<Link href="/team" />}
                    >
                        Meet the Team
                    </Button>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="flex justify-center gap-8 md:gap-10 pt-4 border-t border-white/6 w-full max-w-xs"
                >
                    {[
                        { value: "4+", label: "Projects" },
                        { value: "2025", label: "Founded" },
                        { value: "∞", label: "Passion" },
                    ].map(({ value, label }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center gap-0.5"
                        >
                            <span className="text-xl md:text-2xl font-bold text-foreground tabular-nums">
                                {value}
                            </span>
                            <span className="text-[10px] md:text-xs text-muted-foreground font-medium tracking-wide uppercase">
                                {label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </section>
    );
}
