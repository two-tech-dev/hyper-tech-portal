"use client";

import { useRef, useEffect, type ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            el.classList.add("revealed");
            return;
        }

        // On mobile: smaller delays, lower threshold for snappier feel
        const isMobile = window.innerWidth < 768;
        const mobileDelay = isMobile ? Math.min(delay * 0.5, 150) : delay;

        el.style.transitionDelay = `${mobileDelay}ms`;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("revealed");
                    observer.unobserve(el);
                }
            },
            {
                threshold: isMobile ? 0.05 : 0.15,
                rootMargin: isMobile ? "0px 0px 0px 0px" : "0px 0px -40px 0px",
            }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div ref={ref} className={`scroll-reveal ${className}`}>
            {children}
        </div>
    );
}
