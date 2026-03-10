import BackgroundLayout from "@/components/BackgroundLayout";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Expertise from "@/components/sections/Expertise";
import TechDNA from "@/components/sections/TechDNA";
import CTA from "@/components/sections/CTA";
import SocialInfluence from "@/components/sections/SocialInfluence";
import SocialGrowth from "@/components/sections/SocialGrowth";
import TheArchitect from "@/components/sections/TheArchitect";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <BackgroundLayout />
      <Navbar />
      <main className="relative z-10 w-full">
        <Hero />
        <Expertise />
        <TechDNA />
        <CTA />
        <SocialInfluence />
        <SocialGrowth />
        <TheArchitect />
        <WhoWeAre />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
