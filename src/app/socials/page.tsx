"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/motion/fade-in";

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const socials = [
  {
    name: "Discord",
    displayName: "2Tech's Hangout",
    description: "Join our community server",
    href: "https://discord.gg/5CXeX3uZJm",
    icon: DiscordIcon,
    color: "#5865F2",
  },
  {
    name: "Facebook",
    displayName: "HyperTech Studios",
    description: "Follow our fanpage",
    href: "https://facebook.com/hypertech.studios",
    icon: FacebookIcon,
    color: "#1877F2",
  },
  {
    name: "Twitter / X",
    displayName: "@TwoTechDev",
    description: "Follow us on X",
    href: "https://x.com/TwoTechDev",
    icon: XIcon,
    color: "#ffffff",
  },
  {
    name: "YouTube",
    displayName: "2Tech Studio",
    description: "Watch our content",
    href: "https://www.youtube.com/@2tech.studio",
    icon: YouTubeIcon,
    color: "#FF0000",
  },
];

export default function SocialsPage() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <Navbar />

      <div className="flex-grow max-w-[1280px] mx-auto px-4 sm:px-5 md:px-20 w-full mt-4 mb-24">
        <FadeIn>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-3">
              Socials
            </h1>
            <p className="text-base text-on-surface-variant max-w-lg">
              Connect with us across the internet.
            </p>
          </header>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {socials.map((social, i) => {
            const Icon = social.icon;
            return (
              <FadeIn key={social.name} delay={i * 0.08}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 rounded-[14px] bg-surface-container-low p-6 border border-outline-variant hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-200"
                  style={{ boxShadow: 'var(--shadow-sm)' }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'}
                >
                  <div
                    className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center"
                    style={{ background: `${social.color}15` }}
                  >
                    <span style={{ color: social.color }}>
                      <Icon />
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold text-on-surface group-hover:text-primary transition-colors">
                        {social.displayName}
                      </h3>
                    </div>
                    <p className="text-sm text-on-surface-variant">
                      {social.name} · {social.description}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity text-[20px]">
                    open_in_new
                  </span>
                </a>
              </FadeIn>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
