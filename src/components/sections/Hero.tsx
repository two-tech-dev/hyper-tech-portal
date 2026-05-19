"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const rotatingWords = ["products", "solutions", "experiences", "platforms"];

function useTypingEffect(words: string[], typingSpeed = 120, deletingSpeed = 80, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
  const [charIndex, setCharIndex] = useState(0);

  const currentWord = words[wordIndex];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "typing") {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setPhase("pausing");
        }, pauseDuration);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => {
        setPhase("deleting");
      }, 100);
    } else if (phase === "deleting") {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCharIndex(charIndex - 1);
          setDisplayText(currentWord.slice(0, charIndex - 1));
        }, deletingSpeed);
      } else {
        const nextIndex = (wordIndex + 1) % words.length;
        setWordIndex(nextIndex);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, charIndex, currentWord, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}

export function Hero() {
  const typedText = useTypingEffect(rotatingWords);

  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-12 pb-8 sm:pb-16 lg:pt-16 lg:pb-24 overflow-hidden rounded-2xl sm:rounded-[2rem] bg-surface-container-low border border-outline-variant/20 mt-2 pt-8 sm:pt-16">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#00d1ff]/20 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#4ade80]/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        {/* Hero Text */}
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-4 sm:mb-6 tracking-tight text-on-surface">
            We build digital{" "}
            <br />
            <span className="inline-block mt-1 sm:mt-2 relative text-[#00d1ff] min-w-[120px] sm:min-w-[200px]">
              {typedText}
              <span className="inline-block w-[2px] sm:w-[3px] h-[0.85em] bg-[#00d1ff] ml-0.5 animate-[blink_1s_step-end_infinite] align-middle" />
            </span>
          </h1>
          <p className="text-base sm:text-lg text-on-surface-variant mb-6 sm:mb-10 max-w-lg leading-relaxed">
            From game servers to payment systems. We make software that works and looks good doing it.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <Link
              href="/projects"
              className="bg-[#00d1ff] hover:bg-[#00d1ff]/90 text-black px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2 shadow-[0_0_20px_rgba(0,209,255,0.3)] text-sm sm:text-base"
            >
              <span className="material-symbols-outlined text-[18px] sm:text-[20px]">arrow_downward</span>
              See our work
            </Link>
            <Link
              href="/team"
              className="px-6 py-3 sm:py-3.5 rounded-full font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container/50 transition-colors text-sm sm:text-base"
            >
              Meet the team
            </Link>
          </div>
        </div>

        {/* Hero Illustration - hidden on small mobile */}
        <div className="relative w-full max-w-xs sm:max-w-sm mx-auto lg:max-w-md lg:mx-0 flex items-center justify-center hidden sm:flex">
          <img
            alt="Teamwork Illustration"
            className="w-full h-auto object-contain mix-blend-screen"
            src="/images/hero-teamwork.png"
          />
        </div>
      </div>
    </section>
  );
}
