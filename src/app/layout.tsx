import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-heading",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "2Tech | We build digital experiences",
    description:
        "2Tech - One team, One dream. Building cutting edge digital experiences, SaaS platforms, and performance engines.",
    keywords: [
        "2Tech",
        "tech team",
        "digital experiences",
        "startup",
        "projects",
        "team",
    ],
    icons: {
        icon: "/logo-2tech.png",
        shortcut: "/logo-2tech.png",
        apple: "/logo-2tech.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased light`}
            suppressHydrationWarning
        >
            <head>
                {/* Inline script to prevent FOUC — applies stored/system theme before paint */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var t=localStorage.getItem("2tech-theme");var d=t==="light"?"light":t==="dark"?"dark":"light";document.documentElement.classList.remove("light","dark");document.documentElement.classList.add(d);document.documentElement.style.colorScheme=d}catch(e){}})()`,
                    }}
                />
            </head>
            <body className="min-h-full flex flex-col bg-background text-foreground">
                <ThemeProvider>
                    <TooltipProvider>{children}</TooltipProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
