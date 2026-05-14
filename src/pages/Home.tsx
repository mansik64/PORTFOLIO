import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { EducationResearch } from "@/components/EducationResearch";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <EducationResearch />
      </main>
      <Contact />
    </div>
  );
}
