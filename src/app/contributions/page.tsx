import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ContributorGrid } from "@/components/sections/ContributorGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contributions - 2Tech Studio",
  description: "Leaderboard of open-source contributions for the 2Tech organization.",
};

export default function ContributionsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Navbar />
      <div className="container mx-auto px-4 py-24 flex-1 w-full">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-sm">
              Developer Leaderboard
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Recognizing the incredible developers building the future of 2Tech. Here are our top contributors based on GitHub commits.
            </p>
          </div>
          <ContributorGrid />
        </div>
      </div>
      <Footer />
    </main>
  );
}
