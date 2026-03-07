"use client";

import { Section } from "@/components/ui/Section";
import { GlowCard } from "@/components/ui/GlowCard";
import { Reveal } from "@/components/ui/Reveal";

const SERVICES = [
  { num: "01", title: "Posicionamento", desc: "Estratégia e mensagem que conectam oferta e mercado." },
  { num: "02", title: "Presença digital", desc: "Design, landing pages e identidade que convertem." },
  { num: "03", title: "Tráfego e criativos", desc: "Campanhas pagas e criativos orientados a resultado." },
  { num: "04", title: "IA para qualificação", desc: "Triagem e score de leads antes do vendedor." },
  { num: "05", title: "CRM e dados", desc: "Base única, métricas e visão completa do funil." },
  { num: "06", title: "Fechamento humano", desc: "Lead qualificado na mão certa, no momento certo." },
];

export function ServicesSection() {
  return (
    <Section
      id="servicos"
      className="relative overflow-hidden px-6 lg:px-8"
      aria-labelledby="services-title"
    >
      {/* Gradiente sutil na borda superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bm-yellow/20 to-transparent" aria-hidden />
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal direction="up">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-bm-yellow/70">
              Serviços
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h2
              id="services-title"
              className="mt-3 font-display text-3xl uppercase leading-tight tracking-wide text-bm-white sm:text-4xl lg:text-5xl"
            >
              O que a Beemark <span className="text-bm-yellow">constrói</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-bm-grayLight/80">
              Uma operação integrada: da estratégia ao fechamento.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.num} direction="up" delay={0.12 + i * 0.05}>
              <GlowCard className="group h-full">
                <span className="font-display text-3xl text-bm-yellow/30 transition-colors group-hover:text-bm-yellow/60">
                  {s.num}
                </span>
                <h3 className="mt-3 font-display text-lg uppercase tracking-wide text-bm-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bm-grayLight/70">
                  {s.desc}
                </p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
