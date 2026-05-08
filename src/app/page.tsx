import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-ink selection:bg-acid selection:text-ink">
      <Navbar />
      <Hero />
      <Marquee />
      <div className="relative">
        <Work />
        <About />
        <Skills />
        <Timeline />
        <Contact />
      </div>
    </main>
  );
}
