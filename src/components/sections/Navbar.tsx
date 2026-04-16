"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/team', label: 'Team' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-3 max-w-5xl px-4">
        <div className="flex items-center justify-between h-14 rounded-2xl border border-white/8 bg-background/60 backdrop-blur-xl shadow-xl shadow-black/40 px-5">

          {/* Wordmark Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/logo-2tech.png"
              alt="2Tech icon"
              className="size-8 object-contain rounded-lg"
              style={{ mixBlendMode: 'screen' }}
            />
            <span className="font-bold text-[15px] tracking-tight text-foreground">
              2Tech<span className="text-primary">.studio</span>
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-200',
                  pathname === href
                    ? 'bg-primary/20 text-primary'
                    : 'text-foreground/55 hover:text-foreground hover:bg-white/6'
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Button
            size="sm"
            className="rounded-xl text-sm font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
}
