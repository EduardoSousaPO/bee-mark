"use client";

import { Section } from "@/components/ui/Section";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { ROUTES } from "@/lib/constants/brand";
import Image from "next/image";
import { IMAGES } from "@/lib/constants/images";

export function FinalCTASection() {
  return (
    <Section
      id="cta-final"
      className="relative overflow-hidden bg-bm-yellow px-6 py-24 text-bm-black lg:px-8"
      aria-labelledby="cta-final-title"
    >
      {/* Grain/textura sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <Reveal direction="up">
          <Image
            src={IMAGES.logoBee}
            alt=""
            width={96}
            height={96}
            className="mb-4 h-20 w-20 object-contain md:h-24 md:w-24"
            aria-hidden
          />
        </Reveal>
        <Reveal direction="up" delay={0.05}>
          <h2
            id="cta-final-title"
            className="font-display text-4xl uppercase leading-tight tracking-wide sm:text-5xl lg:text-6xl"
          >
            Próximo passo: diagnóstico
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <div className="mt-5 space-y-3">
            <p className="max-w-lg text-lg text-bm-grayDark">
              Conte seu cenário. Avaliamos seu funil e indicamos o que fazer em
              seguida — sem compromisso.
            </p>
            <p className="text-xs uppercase tracking-[0.22em] text-bm-black/70">
              Inclui estratégia de IA para pré-venda no WhatsApp + CRM
            </p>
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <div className="mt-10">
            <MagneticButton
              href={ROUTES.diagnostico}
              variant="secondary"
              className="!bg-bm-black !text-bm-yellow !px-12 !py-4 !text-base hover:!bg-bm-grayDark hover:!shadow-[0_0_40px_rgba(0,0,0,0.3)]"
            >
              Solicitar diagnóstico gratuito
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
