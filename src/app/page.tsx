import { Navigation } from "@/components/home/Navigation";
import { Hero } from "@/components/home/Hero";
import { WhyMicrogrids } from "@/components/home/WhyMicrogrids";
import { Platform } from "@/components/home/Platform";
import { Solutions } from "@/components/home/Solutions";
import { EVCharging } from "@/components/home/EVCharging";
import { Partners } from "@/components/home/Partners";
import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <WhyMicrogrids />
        <Platform />
        <Solutions />
        <EVCharging />
        <Partners />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
