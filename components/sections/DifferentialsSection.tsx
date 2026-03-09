"use client";

import { Section } from "@/components/ui/Section";
import { GlowCard } from "@/components/ui/GlowCard";
import { Reveal } from "@/components/ui/Reveal";

const DIFFERENTIALS = [
  {
    title: "Estrutura ponta a ponta",
    desc: "Da aquisição ao fechamento, cada etapa é desenhada para funcionar em conjunto.",
  },
  {
    title: "Método antes de mídia",
    desc: "Diagnóstico e estratégia vêm antes de escalar investimento.",
  },
  {
    title: "Métricas de negócio",
    desc: "Custo por lead, conversão e eficiência comercial monitorados com clareza.",
  },
  {
    title: "IA como pré-venda",
    desc: "Qualificação, follow-up e triagem contínua antes do vendedor entrar.",
  },
  {
    title: "Marketing + Comercial",
    desc: "CRM, atendimento e vendas conectados para reduzir desperdício de lead.",
  },
];

export function DifferentialsSection() {
  return (
    <Section
      id="diferenciais"
      className="relative overflow-hidden px-6 lg:px-8"
      aria-labelledby="diff-title"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bm-grayDark/50 to-transparent" aria-hidden />
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <Reveal direction="up">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-bm-yellow/70">
              Autoridade operacional
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h2
              id="diff-title"
              className="mt-3 font-display text-3xl uppercase leading-tight tracking-wide text-bm-white sm:text-4xl lg:text-5xl"
            >
              Por que nossa{" "}
              <span className="text-bm-yellow">estrutura é superior</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-bm-grayLight/80">
              Não operamos marketing em peças isoladas. Construímos um sistema
              integrado para gerar demanda com previsibilidade.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((d, i) => (
            <Reveal key={d.title} direction="up" delay={0.12 + i * 0.05}>
              <GlowCard className="group h-full">
                <div className="mb-3 h-0.5 w-8 bg-bm-yellow/50 transition-all group-hover:w-12 group-hover:bg-bm-yellow" />
                <h3 className="font-display text-lg uppercase tracking-wide text-bm-white">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bm-grayLight/70">
                  {d.desc}
                </p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
