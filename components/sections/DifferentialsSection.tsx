"use client";

import { Section } from "@/components/ui/Section";
import { GlowCard } from "@/components/ui/GlowCard";
import { Reveal } from "@/components/ui/Reveal";

const DIFFERENTIALS = [
  {
    title: "Visão sistêmica",
    desc: "Funil completo, não peças soltas. Cada etapa conecta na próxima.",
  },
  {
    title: "Método, não pacote",
    desc: "Personalização de acordo com seu mercado, não template genérico.",
  },
  {
    title: "Métricas claras",
    desc: "Custo por lead, taxa de conversão e ROI visíveis em tempo real.",
  },
  {
    title: "IA como filtro",
    desc: "Tecnologia aplicada para qualificar lead, não para enfeitar slide.",
  },
  {
    title: "Marketing + Venda",
    desc: "CRM e atendimento integrados. O vendedor recebe o lead pronto.",
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
              Diferenciais
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h2
              id="diff-title"
              className="mt-3 font-display text-3xl uppercase leading-tight tracking-wide text-bm-white sm:text-4xl lg:text-5xl"
            >
              Por que a Beemark é{" "}
              <span className="text-bm-yellow">diferente</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-bm-grayLight/80">
              Não somos mais uma agência que entrega campanhas e some.
              Entramos quando o marketing falha e operamos o fluxo inteiro.
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
