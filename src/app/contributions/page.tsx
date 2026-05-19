"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ContributorGrid } from "@/components/sections/ContributorGrid";

export default function ContributionsPage() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <Navbar />
      <div className="flex-grow max-w-[1280px] mx-auto px-4 sm:px-5 md:px-20 w-full mt-4 mb-24">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-3">
            GitHub Contributions
          </h1>
          <p className="text-base text-on-surface-variant max-w-2xl">
            Tracking engineering excellence and open-source impact across the 2Tech Studio ecosystem.
          </p>
        </header>
        <ContributorGrid />
      </div>
      <Footer />
    </main>
  );
}
