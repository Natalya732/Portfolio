import { Navigation } from "@/shared/components/navigation";
import { Hero } from "@/features/portfolio/views/Hero";
import { About } from "@/features/portfolio/views/About";
import { Skills } from "@/features/portfolio/views/Skills";
import { Experience } from "@/features/portfolio/views/Experience";
import { Projects } from "@/features/portfolio/views/Projects";
import { Contact } from "@/features/portfolio/views/Contact";

// Remove "use client" to enable static generation
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

// Add metadata for SEO
export const metadata = {
  title: "Nikita - Flutter Developer Portfolio",
  description:
    "A passionate Flutter developer with 4 years of experience building high-performance, cross-platform mobile applications.",
  keywords: ["Flutter", "Mobile Development", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Nikita" }],
  creator: "Nikita",
  openGraph: {
    title: "Nikita - Flutter Developer Portfolio",
    description:
      "A passionate Flutter developer with 4 years of experience building high-performance, cross-platform mobile applications.",
    type: "website",
  },
};
