import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/sections/Footer";
import { ProjectsHighlight } from "@/components/sections/ProjectsHighlight";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <Navbar />
      <Hero />
      <div className="max-w-6xl mx-auto w-full px-6 mt-12">
        <hr className="border-outline-variant/20" />
      </div>
      <ProjectsHighlight />
      <div className="max-w-6xl mx-auto w-full px-6">
        <hr className="border-outline-variant/20" />
      </div>
      <CTA />
      <Footer />
    </main>
  );
}
