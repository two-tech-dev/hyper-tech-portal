import Link from 'next/link';
import { Mail } from 'lucide-react';

const navLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'Team', href: '/team' },
];

const socialLinks = [
  {
    label: 'Discord',
    href: 'https://discord.gg/ExhrFdQWS9',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/hypertech.studios',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:support@2tech.studio',
    icon: <Mail className="size-4" />,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-background">
      <div className="container mx-auto px-4 py-14 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* Brand Column */}
          <div className="flex flex-col gap-5 max-w-xs">
            {/* Logo image — full size in footer looks great */}
            <Link href="/">
              <img
                src="/logo.png"
                alt="2Tech Studio"
                className="h-10 w-auto object-contain"
                style={{ mixBlendMode: 'screen' }}
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              One team. One dream. Building digital experiences that matter — from Vietnam to the world.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {socialLinks.map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="size-9 rounded-xl border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/8 transition-all duration-200"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Studio</p>
              {navLinks.map(({ label, href }) => (
                <Link key={label} href={href} className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Contact</p>
              <Link href="mailto:support@2tech.studio" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                support@2tech.studio
              </Link>
              <Link href="https://discord.gg/ExhrFdQWS9" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                Discord Server
              </Link>
              <Link href="https://www.facebook.com/hypertech.studios" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                Fanpage
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row gap-2 justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} 2Tech Studio. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Built with ❤️ in Vietnam</p>
        </div>
      </div>
    </footer>
  );
}
