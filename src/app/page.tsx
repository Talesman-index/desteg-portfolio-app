import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Skills from "@/components/sections/Skills";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main-content" className="bg-[var(--background)] selection:bg-[#7C3AED] dark:selection:bg-[#8B5CF6] selection:text-white min-h-screen relative text-[var(--foreground)] transition-colors duration-300">
      <Navbar />
      <Hero />
      <Stats />
      <Skills />
      <Work />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
