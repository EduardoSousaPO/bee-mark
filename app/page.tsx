import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FlowSection } from "@/components/sections/FlowSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { TechSection } from "@/components/sections/TechSection";
import { CredibilitySection } from "@/components/sections/CredibilitySection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <FlowSection />
      <DifferentialsSection />
      <TechSection />
      <CredibilitySection />
      <FinalCTASection />
    </main>
  );
}
