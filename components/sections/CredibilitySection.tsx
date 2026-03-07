"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const CREDIBILITY = [
  {
    title: "Diagnóstico gratuito",
    desc: "Antes de qualquer proposta, entendemos seu cenário.",
  },
  {
    title: "Metodologia transparente",
    desc: "Processo documentado. Você sabe o que será feito e por quê.",
  },
  {
    title: "Métricas visíveis",
    desc: "Dashboard com acompanhamento real do funil e do investimento.",
  },
  {
    title: "Foco em resultado",
    desc: "Não vendemos horas. Vendemos lead qualificado e previsibilidade.",
  },
];

export function CredibilitySection() {
  return (
    <Section
      id="credibilidade"
      className="relative overflow-hidden px-6 lg:px-8"
      aria-labelledby="cred-title"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bm-grayDark/50 to-transparent" aria-hidden />
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <Reveal direction="up">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-bm-yellow/70">
              Confiança
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h2
              id="cred-title"
              className="mt-3 font-display text-3xl uppercase leading-tight tracking-wide text-bm-white sm:text-4xl lg:text-5xl"
            >
              Como <span className="text-bm-yellow">operamos</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-bm-grayLight/80">
              Sem promessa milagrosa. Com método, diagnóstico e visão de funil.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {CREDIBILITY.map((c, i) => (
            <Reveal key={c.title} direction="up" delay={0.12 + i * 0.05}>
              <div className="group flex gap-4 rounded-bmMd border border-bm-grayDark/30 bg-bm-grayDark/10 p-6 transition-colors hover:border-bm-yellow/20">
                <span className="mt-0.5 flex h-3 w-3 shrink-0 rounded-full bg-bm-yellow" aria-hidden />
                <div>
                  <h3 className="font-display text-base uppercase tracking-wide text-bm-white">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-bm-grayLight/70">
                    {c.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
