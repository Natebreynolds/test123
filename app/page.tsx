import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </main>
  );
}