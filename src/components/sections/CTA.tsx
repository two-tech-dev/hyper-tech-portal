"use client";

import { FadeIn } from "@/components/motion/fade-in";

export function CTA() {
  return (
    <FadeIn variant="scale">
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="relative rounded-[3rem] border border-outline-variant/20 p-12 overflow-hidden bg-surface-container-low">
          {/* Gradient background effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#00d1ff]/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[200px] bg-[#7000ff]/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-on-surface">
              Ready to start your next project?
            </h2>
            <p className="text-on-surface-variant text-lg mb-8 max-w-xl mx-auto">
              Join forces with 2Tech Studio and bring your innovative ideas to life with our expert team.
            </p>
            <a
              href="mailto:two-tech-dev@proton.me"
              className="inline-block bg-[#00d1ff] text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,209,255,0.3)] hover:shadow-[0_0_40px_rgba(0,209,255,0.5)]"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
