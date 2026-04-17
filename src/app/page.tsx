import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/sections/Footer";
import dynamic from "next/dynamic";

const Timeline = dynamic(() =>
    import("@/components/sections/Timeline").then((m) => ({
        default: m.Timeline,
    })),
);
const ProjectsHighlight = dynamic(() =>
    import("@/components/sections/ProjectsHighlight").then((m) => ({
        default: m.ProjectsHighlight,
    })),
);
const TeamPreview = dynamic(() =>
    import("@/components/sections/TeamPreview").then((m) => ({
        default: m.TeamPreview,
    })),
);
const CTA = dynamic(() =>
    import("@/components/sections/CTA").then((m) => ({ default: m.CTA })),
);

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
