import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#030712] text-white">
        <Hero />
        <About />
      </main>
    </>
  );
}