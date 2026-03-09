"use client";

import { Section } from "@/components/ui/Section";
import { GlowCard } from "@/components/ui/GlowCard";
import { Reveal } from "@/components/ui/Reveal";

const PROBLEMS = [
  {
    title: "Tráfego sem processo",
    desc: "Campanha gera volume, mas sem qualificação e sem critério de passagem para vendas.",
  },
  {
    title: "Marca sem direção comercial",
    desc: "Posicionamento desconectado da oferta gera atenção, mas não gera demanda previsível.",
  },
  {
    title: "Pré-venda lenta",
    desc: "Lead quente esfria por falta de resposta, follow-up e triagem estruturada.",
  },
  {
    title: "Comercial sem contexto",
    desc: "Vendedor recebe contato cru, sem histórico e sem prioridade clara de fechamento.",
  },
];

export function ProblemSection() {
  return (
    <Section id="problema" className="px-6 lg:px-8" aria-labelledby="problem-title">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <Reveal direction="up">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-bm-yellow/70">
              O erro mais comum
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h2
              id="problem-title"
              className="mt-3 font-display text-3xl uppercase leading-tight tracking-wide text-bm-white sm:text-4xl lg:text-5xl"
            >
              Marketing solto{" "}
              <span className="text-bm-yellow">não escala</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-bm-grayLight/80">
              O problema raramente é o anúncio isolado. O problema é não ter
              estrutura conectando posicionamento, aquisição, IA, CRM e processo
              comercial.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {PROBLEMS.map((item, i) => (
            <Reveal key={item.title} direction="up" delay={0.15 + i * 0.06}>
              <GlowCard glowColor="white" className="h-full border-l-2 border-l-bm-yellow/60 pl-6">
                <h3 className="font-display text-lg uppercase tracking-wide text-bm-yellow">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bm-grayLight/70">
                  {item.desc}
                </p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
