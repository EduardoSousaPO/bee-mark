"use client";

import { Section } from "@/components/ui/Section";
import { GlowCard } from "@/components/ui/GlowCard";
import { Reveal } from "@/components/ui/Reveal";

const ICP_BLOCKS = [
  {
    title: "Empresas que precisam vender mais",
    desc: "Negócios que já investem em marketing, mas não têm previsibilidade.",
  },
  {
    title: "Empresas com equipe comercial",
    desc: "Operações que precisam de lead qualificado, e não apenas volume.",
  },
  {
    title: "Empresas que querem escala",
    desc: "Estrutura pronta para crescer sem perder controle do funil.",
  },
];

export function ForWhomSection() {
  return (
    <Section
      id="para-quem"
      className="relative overflow-hidden px-6 lg:px-8"
      aria-labelledby="for-whom-title"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bm-grayDark/60 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <Reveal direction="up">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-bm-yellow/70">
              ICP
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h2
              id="for-whom-title"
              className="mt-3 font-display text-3xl uppercase leading-tight tracking-wide text-bm-white sm:text-4xl lg:text-5xl"
            >
              Para quem é a <span className="text-bm-yellow">Beemark</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-bm-grayLight/80">
              Se você precisa transformar marketing em venda com método e
              previsibilidade, essa estrutura foi feita para sua operação.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {ICP_BLOCKS.map((block, i) => (
            <Reveal key={block.title} direction="up" delay={0.12 + i * 0.05}>
              <GlowCard className="h-full border-l-2 border-l-bm-yellow/55 pl-5">
                <h3 className="font-display text-lg uppercase tracking-wide text-bm-yellow">
                  {block.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bm-grayLight/72">
                  {block.desc}
                </p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

