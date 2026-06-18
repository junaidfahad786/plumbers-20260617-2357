import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import EmergencyCTA from "@/components/EmergencyCTA";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <EmergencyCTA />
      <Services />
      <About />
      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
}
