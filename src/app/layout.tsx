import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

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
            className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
        >
            <body className="min-h-full flex flex-col bg-background text-foreground">
                <TooltipProvider>{children}</TooltipProvider>
            </body>
        </html>
    );
}
