"use client";

import { Section } from "@/components/ui/Section";
import { GlowCard } from "@/components/ui/GlowCard";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ROUTES } from "@/lib/constants/brand";

const DIAGNOSTIC_ITEMS = [
  "Funil comercial",
  "Campanhas ativas",
  "Estrutura digital",
  "Atendimento",
  "Processo comercial",
];

export function OfferSection() {
  return (
    <Section
      id="oferta"
      className="relative overflow-hidden px-6 lg:px-8"
      aria-labelledby="offer-title"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bm-yellow/25 to-transparent"
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Reveal direction="up">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-bm-yellow/70">
              Oferta principal
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h2
              id="offer-title"
              className="mt-3 font-display text-3xl uppercase leading-tight tracking-wide text-bm-white sm:text-4xl lg:text-5xl"
            >
              Diagnóstico <span className="text-bm-yellow">Beemark</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bm-grayLight/80">
              Você compra clareza estratégica. Nós analisamos sua operação e
              entregamos um plano de crescimento com prioridades reais de
              execução.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <div className="mt-8">
              <MagneticButton
                href={ROUTES.diagnostico}
                variant="primary"
                className="px-10 py-4 text-base"
              >
                Solicitar diagnóstico estratégico
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <Reveal direction="up" delay={0.15}>
          <GlowCard className="h-full border-bm-yellow/25">
            <p className="text-xs uppercase tracking-[0.22em] text-bm-grayLight/60">
              Inclui análise completa de:
            </p>
            <ul className="mt-5 space-y-3">
              {DIAGNOSTIC_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-bm-yellow" />
                  <span className="text-sm text-bm-grayLight/80">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-bmSm border border-bm-yellow/20 bg-bm-yellow/10 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-bm-yellow/80">
                Entrega final
              </p>
              <p className="mt-2 text-sm leading-relaxed text-bm-white/90">
                Plano de crescimento com gargalos, prioridades e próximos passos
                para escalar sem perder controle.
              </p>
            </div>
          </GlowCard>
        </Reveal>
      </div>
    </Section>
  );
}

