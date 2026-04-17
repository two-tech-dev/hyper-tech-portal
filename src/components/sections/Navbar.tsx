"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/team", label: "Team" },
];

export function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50">
                <div className="mx-auto mt-3 max-w-5xl px-4">
                    <div className="flex items-center justify-between h-14 rounded-2xl border border-white/8 bg-background/80 backdrop-blur-md shadow-xl shadow-black/40 px-4">
                        {/* Logo wordmark */}
                        <Link
                            href="/"
                            className="flex items-center gap-2"
                            onClick={() => setOpen(false)}
                        >
                            <Image
                                src="/logo-2tech.png"
                                alt="2Tech icon"
                                width={32}
                                height={32}
                                className="size-8 object-contain rounded-lg"
                                style={{ mixBlendMode: "screen" }}
                                priority
                            />
                            <span className="font-bold text-[15px] tracking-tight text-foreground">
                                2Tech
                                <span className="text-primary">.studio</span>
                            </span>
                        </Link>

                        {/* Desktop nav */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className={cn(
                                        "text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-200",
                                        pathname === href
                                            ? "bg-primary/20 text-primary"
                                            : "text-foreground/55 hover:text-foreground hover:bg-white/6",
                                    )}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>

                        {/* Right side */}
                        <div className="flex items-center gap-2">
                            <Button
                                size="sm"
                                className="hidden md:flex rounded-xl text-sm font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
                            >
                                Contact Us
                            </Button>
                            {/* Mobile hamburger */}
                            <button
                                onClick={() => setOpen(!open)}
                                className="md:hidden flex items-center justify-center size-9 rounded-xl border border-white/10 text-foreground/70 hover:text-foreground hover:border-white/20 transition-all"
                                aria-label="Toggle menu"
                            >
                                {open ? (
                                    <X className="size-4" />
                                ) : (
                                    <Menu className="size-4" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile dropdown */}
                    {open && (
                        <div className="md:hidden mt-2 rounded-2xl border border-white/8 bg-background/90 backdrop-blur-xl shadow-xl shadow-black/40 p-3 flex flex-col gap-1">
                            {navLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={() => setOpen(false)}
                                    className={cn(
                                        "text-sm font-medium px-4 py-2.5 rounded-xl transition-all",
                                        pathname === href
                                            ? "bg-primary/20 text-primary"
                                            : "text-foreground/70 hover:text-foreground hover:bg-white/6",
                                    )}
                                >
                                    {label}
                                </Link>
                            ))}
                            <div className="h-px bg-white/8 my-1" />
                            <Link
                                href="mailto:support@2tech.studio"
                                onClick={() => setOpen(false)}
                                className="text-sm font-semibold px-4 py-2.5 rounded-xl bg-primary/15 text-primary hover:bg-primary/25 transition-all"
                            >
                                Contact Us →
                            </Link>
                        </div>
                    )}
                </div>
            </nav>

            {/* Tap-outside overlay */}
            {open && (
                <div
                    className="fixed inset-0 z-40 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}
        </>
    );
}
