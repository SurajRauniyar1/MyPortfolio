import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Achievements from "../components/achievements/Achievements";
import Contact from "../components/contact/Contact";


export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#030712] text-white">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Projects />
        <Contact />
      </main>
    </>
  );
}