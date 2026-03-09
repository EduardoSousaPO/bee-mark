"use client";

import { Section } from "@/components/ui/Section";
import { GlowCard } from "@/components/ui/GlowCard";
import { Reveal } from "@/components/ui/Reveal";

const SERVICES = [
  {
    num: "01",
    title: "Diagnóstico estratégico",
    desc: "Mapeamento de gargalos em funil, campanhas, atendimento e comercial.",
  },
  {
    num: "02",
    title: "Posicionamento e oferta",
    desc: "Mensagem comercial clara para atrair o lead certo.",
  },
  {
    num: "03",
    title: "Aquisição e criativos",
    desc: "Tráfego pago orientado a demanda qualificada e não só volume.",
  },
  {
    num: "04",
    title: "IA para pré-venda",
    desc: "Qualificação, follow-up e triagem contínua antes do vendedor.",
  },
  {
    num: "05",
    title: "CRM e operação de vendas",
    desc: "Processo integrado para fechar mais com controle de funil.",
  },
  {
    num: "06",
    title: "Escala por dados",
    desc: "Decisões de otimização baseadas em métricas de negócio.",
  },
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
              Entrega
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h2
              id="services-title"
              className="mt-3 font-display text-3xl uppercase leading-tight tracking-wide text-bm-white sm:text-4xl lg:text-5xl"
            >
              O que a Beemark <span className="text-bm-yellow">entrega</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-bm-grayLight/80">
              Estrutura completa para transformar marketing em venda previsível.
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
