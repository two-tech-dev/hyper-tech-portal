import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Timeline } from "@/components/sections/Timeline";
import { ProjectsHighlight } from "@/components/sections/ProjectsHighlight";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Timeline />
      <ProjectsHighlight />
      <TeamPreview />
      <CTA />
      <Footer />
    </main>
  );
}
