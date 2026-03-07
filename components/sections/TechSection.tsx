"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { MathCanvasBackground } from "@/components/ui/MathCanvasBackground";

const TECH_PILLARS = [
  { label: "24/7", desc: "Primeira resposta imediata para não perder lead quente." },
  { label: "Memória", desc: "IA treinada no contexto real da empresa e do processo comercial." },
  { label: "Handoff", desc: "Vendedor recebe só oportunidades com aderência e histórico." },
];

const AGENT_STAGES = [
  {
    title: "Recepção sem atrito",
    goal: "Atendimento imediato e humanizado no WhatsApp.",
    detail: "A IA abre conversa, entende contexto inicial e reduz tempo de espera para zero.",
    outputs: ["Resposta em segundos", "Tom alinhado à marca"],
  },
  {
    title: "Qualificação comercial",
    goal: "Separar curioso de comprador real com perguntas estratégicas.",
    detail: "A conversa mapeia dor, urgência, perfil e intenção real de compra em etapas.",
    outputs: ["Lead score por estágio", "Contexto salvo sem repetição"],
  },
  {
    title: "Follow-up inteligente",
    goal: "Retomar leads frios com contexto e timing.",
    detail: "A IA identifica pausas e dispara retomadas úteis sem parecer robótica.",
    outputs: ["Recuperação de oportunidades", "Menos desperdício comercial"],
  },
  {
    title: "Entrega para humano",
    goal: "Passagem limpa para fechamento consultivo.",
    detail: "O comercial recebe resumo, objeções e sinais de compra para negociar melhor.",
    outputs: ["Menos tempo em lead ruim", "Mais foco em fechamento"],
  },
];

export function TechSection() {
  const [activeStage, setActiveStage] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % AGENT_STAGES.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [reducedMotion]);

  const currentStage = AGENT_STAGES[activeStage];

  return (
    <Section
      id="tecnologia"
      className="relative overflow-hidden px-6 lg:px-8"
      aria-labelledby="tech-title"
    >
      <MathCanvasBackground className="opacity-55" fallbackVariant="lines" />
      <div className="relative mx-auto max-w-5xl">
        <div className="text-center">
          <Reveal direction="up">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-bm-yellow/70">
              Tecnologia
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h2
              id="tech-title"
              className="mt-3 font-display text-3xl uppercase leading-tight tracking-wide text-bm-white sm:text-4xl lg:text-5xl"
            >
              Tecnologia com <span className="text-bm-yellow">propósito</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-bm-grayLight/80">
              O centro da operação é o agente de IA no WhatsApp: ele atende,
              qualifica, faz follow-up e entrega contexto para o vendedor fechar
              com mais taxa de conversão.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 xl:grid-cols-12">
          <Reveal direction="up" className="xl:col-span-5">
            <article className="rounded-bmMd border border-bm-yellow/30 bg-bm-black/65 p-6 backdrop-blur-sm">
              <p className="inline-flex rounded-full border border-bm-yellow/40 bg-bm-yellow/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-bm-yellow">
                Agente de IA para pré-venda no WhatsApp
              </p>
              <h3 className="mt-4 font-display text-3xl uppercase leading-tight text-bm-yellow sm:text-4xl">
                IA treinada no seu negócio, não resposta genérica
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-bm-grayLight/80">
                Com base de conhecimento, variáveis persistentes e estágios de
                conversa, o agente identifica perfil real de compra e prepara a
                transição para o time comercial humano.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {TECH_PILLARS.map((pillar) => (
                  <div
                    key={pillar.label}
                    className="rounded-bmSm border border-bm-grayDark/40 bg-bm-black/55 p-3"
                  >
                    <p className="font-display text-2xl uppercase text-bm-yellow/90">
                      {pillar.label}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-bm-grayLight/70">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal direction="up" delay={0.08} className="xl:col-span-7">
            <article className="rounded-bmMd border border-bm-grayDark/30 bg-bm-black/60 p-5 backdrop-blur-sm">
              <div className="grid gap-3 sm:grid-cols-2">
                {AGENT_STAGES.map((stage, index) => {
                  const active = index === activeStage;
                  return (
                    <button
                      key={stage.title}
                      type="button"
                      onClick={() => setActiveStage(index)}
                      className={[
                        "rounded-bmSm border p-3 text-left transition-all duration-300",
                        active
                          ? "border-bm-yellow/70 bg-bm-yellow/10 shadow-[0_0_22px_rgba(255,240,2,0.14)] motion-safe:animate-[agentPulse_2.8s_ease-in-out_infinite]"
                          : "border-bm-grayDark/40 bg-bm-black/45 hover:border-bm-yellow/35",
                      ].join(" ")}
                      aria-pressed={active}
                    >
                      <p className="text-[10px] uppercase tracking-[0.22em] text-bm-grayLight/60">
                        Etapa {index + 1}
                      </p>
                      <p className="mt-1 font-display text-lg uppercase leading-none text-bm-yellow">
                        {stage.title}
                      </p>
                      <p className="mt-1 text-xs text-bm-grayLight/75">{stage.goal}</p>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 rounded-bmSm border border-bm-yellow/25 bg-bm-black/55 p-4">
                <div className="h-1 w-full rounded-full bg-bm-grayDark/50">
                  <div
                    className="h-full rounded-full bg-bm-yellow transition-[width] duration-500 ease-out"
                    style={{
                      width: `${((activeStage + 1) / AGENT_STAGES.length) * 100}%`,
                    }}
                  />
                </div>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-bm-yellow/80">
                  {currentStage.goal}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-bm-grayLight/80">
                  {currentStage.detail}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {currentStage.outputs.map((output) => (
                    <span
                      key={output}
                      className="rounded-full border border-bm-yellow/35 bg-bm-yellow/10 px-3 py-1 text-xs text-bm-yellow"
                    >
                      {output}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
