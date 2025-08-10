"use client";

import { Navigation } from "@/shared/components/navigation";
import { Hero } from "@/features/portfolio/views/Hero";
import { About } from "@/features/portfolio/views/About";
import { Skills } from "@/features/portfolio/views/Skills";
import { Experience } from "@/features/portfolio/views/Experience";
import { Projects } from "@/features/portfolio/views/Projects";
import { Contact } from "@/features/portfolio/views/Contact";
import { PortfolioProvider } from "@/features/portfolio/context/portfolio-context";

export default function Home() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </PortfolioProvider>
  );
}
