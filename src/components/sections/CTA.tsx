import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export function CTA() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="animate-fade-in-up-view relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/12 via-card to-card p-10 md:p-16 text-center">
                    {/* Decorative glows */}
                    <div className="absolute -top-24 -left-24 size-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -right-24 size-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase">
                            Ready to build?
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-xl leading-tight">
                            Let&apos;s create something{" "}
                            <span className="bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">
                                amazing
                            </span>{" "}
                            together
                        </h2>
                        <p className="text-muted-foreground max-w-md text-base">
                            Got a project idea? We&apos;d love to hear about it.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 mt-2">
                            <Button
                                size="lg"
                                className="h-12 px-8 rounded-xl text-base font-semibold shadow-xl shadow-primary/30 bg-primary hover:bg-primary/90"
                                render={
                                    <Link href="mailto:support@2tech.studio" />
                                }
                            >
                                <Mail className="size-4 mr-1.5" />
                                support@2tech.studio
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-12 px-8 rounded-xl text-base border-white/10 hover:border-primary/40 hover:bg-primary/8 text-foreground/80"
                                render={<Link href="/projects" />}
                            >
                                Browse Projects
                                <ArrowRight className="size-4 ml-1.5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
