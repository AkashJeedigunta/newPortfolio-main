import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { ParallaxBackground } from "@/components/ParallaxBackground";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <ParallaxBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      <FloatingActionButton />
    </div>
  );
}
