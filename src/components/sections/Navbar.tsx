"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/team", label: "Team" },
    { href: "/contributions", label: "Contributions" },
    { href: "/socials", label: "Socials" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] sm:w-[calc(100%-40px)] max-w-4xl z-50">
        <div className="flex items-center justify-between px-4 sm:px-8 py-2.5 sm:py-3 rounded-full border border-outline-variant bg-surface/80 backdrop-blur-xl" style={{ boxShadow: 'var(--shadow-md)' }}>
          <Link
            href="/"
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo-2tech.png"
              alt="2Tech"
              width={28}
              height={28}
              className="size-7 object-contain rounded"
              priority
            />
            <span className="text-base font-bold text-on-surface tracking-tighter">
              2Tech Studio
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "transition-all duration-300 hover:scale-105",
                  isActive(href)
                    ? "text-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary after:shadow-[0_0_8px_rgba(76,214,255,0.6)]"
                    : "text-on-surface-variant hover:text-on-surface"
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-on-surface-variant hover:text-on-surface transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="md:hidden mt-3 rounded-2xl border border-outline-variant/20 bg-surface/95 backdrop-blur-xl p-4 flex flex-col gap-1"
            >
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-sm font-medium px-4 py-2.5 rounded-xl transition-colors",
                    isActive(href)
                      ? "text-primary"
                      : "text-on-surface-variant hover:text-on-surface"
                  )}
                >
                  {label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
