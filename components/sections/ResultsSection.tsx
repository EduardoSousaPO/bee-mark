"use client";

import { Section } from "@/components/ui/Section";
import { GlowCard } from "@/components/ui/GlowCard";
import { Reveal } from "@/components/ui/Reveal";

const AUTOMOTIVE_METRICS = [
  { label: "Investimento em tráfego", value: "R$ 6.903" },
  { label: "Leads gerados", value: "5.896" },
  { label: "Vendas realizadas", value: "17" },
  { label: "Faturamento gerado", value: "R$ 1.567.840" },
];

const INVESTMENT_CASE_FLOW = [
  "Qualificação contínua de leads",
  "Follow-up automático 24/7",
  "Triagem por perfil e prontidão de compra",
  "Direcionamento do lead pronto para o vendedor humano",
];

export function ResultsSection() {
  return (
    <Section
      id="resultados"
      className="relative overflow-hidden px-6 lg:px-8"
      aria-labelledby="results-title"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bm-yellow/25 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <Reveal direction="up">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-bm-yellow/70">
              Prova
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h2
              id="results-title"
              className="mt-3 font-display text-3xl uppercase leading-tight tracking-wide text-bm-white sm:text-4xl lg:text-5xl"
            >
              Resultados <span className="text-bm-yellow">reais</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-bm-grayLight/80">
              Não entregamos marketing bonito. Entregamos crescimento mensurável.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal direction="up" delay={0.12}>
            <GlowCard className="h-full border-bm-yellow/30">
              <p className="text-xs uppercase tracking-[0.2em] text-bm-grayLight/60">
                Caso real
              </p>
              <h3 className="mt-2 font-display text-2xl uppercase tracking-wide text-bm-yellow">
                Empresa do setor automotivo
              </h3>
              <div className="mt-6 space-y-4">
                {AUTOMOTIVE_METRICS.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center justify-between gap-3 border-b border-bm-grayDark/35 pb-3"
                  >
                    <span className="text-sm text-bm-grayLight/75">
                      {metric.label}
                    </span>
                    <span className="font-accent text-xl uppercase tracking-wide text-bm-white">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </GlowCard>
          </Reveal>

          <Reveal direction="up" delay={0.18}>
            <GlowCard className="h-full">
              <p className="text-xs uppercase tracking-[0.2em] text-bm-grayLight/60">
                Caso real
              </p>
              <h3 className="mt-2 font-display text-2xl uppercase tracking-wide text-bm-yellow">
                Consultoria de investimentos
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-bm-grayLight/75">
                A operação de IA assumiu o trabalho de pré-venda em rotina
                contínua, reduzindo custo de SDR e mantendo velocidade comercial.
              </p>
              <ul className="mt-5 space-y-3">
                {INVESTMENT_CASE_FLOW.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bm-yellow" />
                    <span className="text-sm leading-relaxed text-bm-grayLight/75">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-bmSm border border-bm-yellow/25 bg-bm-yellow/8 p-4 text-sm leading-relaxed text-bm-white/90">
                Capacidade operacional equivalente ao trabalho de cerca de 5 SDRs,
                com handoff qualificado para o vendedor humano.
              </p>
            </GlowCard>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

