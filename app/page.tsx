import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactBridgeSection } from "@/components/sections/ImpactBridgeSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { ForWhomSection } from "@/components/sections/ForWhomSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FlowSection } from "@/components/sections/FlowSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { TechSection } from "@/components/sections/TechSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Beemark — A gente entra quando o marketing falha",
    description:
      "Estratégia, posicionamento e resultado. Operação integrada de crescimento.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ImpactBridgeSection />
      <ProblemSection />
      <DifferentialsSection />
      <ResultsSection />
      <ForWhomSection />
      <ServicesSection />
      <FlowSection />
      <TechSection />
      <OfferSection />
      <FounderSection />
      <FinalCTASection />
    </main>
  );
}
