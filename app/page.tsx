
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import MyIntro from "@/components/MyIntro";
import ProjectSection from "@/components/ProjectSection";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/Skills";

export default function Home() {
  return <main className="flex flex-col justify-center items-center px-4">
    
    <MyIntro />
    <SectionDivider />
    <About />
    <ProjectSection />
    <Skills />
    <Experience />
    <Contact />
    
  </main>;
}
