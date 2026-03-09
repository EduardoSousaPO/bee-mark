"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function FounderSection() {
  return (
    <Section
      id="fundador"
      className="relative overflow-hidden px-6 py-16 lg:px-8 lg:py-20"
      aria-labelledby="founder-title"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bm-grayDark/60 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-4xl text-center">
        <Reveal direction="up">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-bm-yellow/70">
            Institucional
          </p>
        </Reveal>
        <Reveal direction="up" delay={0.05}>
          <h2
            id="founder-title"
            className="mt-3 font-display text-3xl uppercase leading-tight tracking-wide text-bm-white sm:text-4xl lg:text-5xl"
          >
            Quem está por trás da <span className="text-bm-yellow">Beemark</span>
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <p className="mt-7 font-display text-4xl uppercase tracking-wider text-bm-yellow sm:text-5xl">
            Luiz Saraiva
          </p>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-bm-grayLight/78 sm:text-lg">
            Especialista em estrutura de marketing e geração de demanda.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

