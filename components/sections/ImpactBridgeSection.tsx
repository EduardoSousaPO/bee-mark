"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function ImpactBridgeSection() {
  return (
    <Section
      id="impacto"
      className="relative overflow-hidden px-6 py-12 lg:px-8 lg:py-14"
      aria-labelledby="impact-title"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bm-yellow/30 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-5xl text-center">
        <Reveal direction="up">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-bm-yellow/70">
            Escala com estrutura
          </p>
        </Reveal>
        <Reveal direction="up" delay={0.05}>
          <h2
            id="impact-title"
            className="mt-4 font-display text-3xl uppercase leading-tight tracking-wide text-bm-white sm:text-4xl lg:text-5xl"
          >
            Mais de <span className="text-bm-yellow">30.000 leads</span> gerados
            em 30 dias para clientes
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-bm-grayLight/80">
            Estrutura de marketing que conecta tráfego, IA, posicionamento,
            metodologia e vendas.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

