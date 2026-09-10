import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Work />
      <About />
      <Contact />
      <ScrollAnimations />
    </>
  );
}
