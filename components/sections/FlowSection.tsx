"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils/cn";

const STEPS = [
  { num: "01", title: "Diagnóstico", desc: "Avaliamos funil, processos e gargalos." },
  { num: "02", title: "Posicionamento", desc: "Definimos mensagem, público e diferencial." },
  { num: "03", title: "Estrutura digital", desc: "Landing pages, identidade e presença." },
  { num: "04", title: "Campanhas", desc: "Tráfego pago orientado a conversão." },
  { num: "05", title: "Entrada dos leads", desc: "Captura qualificada em todos os canais." },
  { num: "06", title: "IA qualifica", desc: "Triagem e score antes do vendedor." },
  { num: "07", title: "CRM registra", desc: "Base única com visão completa do funil." },
  { num: "08", title: "Vendedor fecha", desc: "Lead certo, na hora certa, preparado." },
];

const FLOW_LAYERS = [
  {
    title: "Aquisição",
    desc: "Tráfego e criativos para gerar entrada qualificada.",
  },
  {
    title: "Pré-venda IA",
    desc: "Conversa, triagem e follow-up antes do vendedor.",
  },
  {
    title: "CRM + Fechamento",
    desc: "Contexto completo para o humano fechar com precisão.",
  },
];

export function FlowSection() {
  const flowRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    let mounted = true;
    let cleanup: (() => void) | undefined;

    (async () => {
      const gsapModule = await import("gsap");
      const scrollModule = await import("gsap/ScrollTrigger");

      if (!mounted || !flowRef.current) return;

      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".flow-step-card");
        const progressLines = gsap.utils.toArray<HTMLElement>(".flow-progress-line");

        gsap.set(cards, { opacity: 0, y: 24 });
        gsap.set(progressLines, { scaleY: 0, transformOrigin: "top center" });

        cards.forEach((card, index) => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.02,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              end: "top 58%",
              toggleActions: "play none none reverse",
            },
          });
        });

        progressLines.forEach((line) => {
          gsap.to(line, {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: flowRef.current,
              start: "top 72%",
              end: "bottom 35%",
              scrub: true,
            },
          });
        });
      }, flowRef);

      cleanup = () => {
        ctx.revert();
      };
    })();

    return () => {
      mounted = false;
      cleanup?.();
    };
  }, [reducedMotion]);

  return (
    <Section
      id="fluxo"
      className="relative overflow-hidden px-6 lg:px-8"
      aria-labelledby="flow-title"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bm-yellow/20 to-transparent"
        aria-hidden
      />
      <div ref={flowRef} className="mx-auto max-w-5xl">
        <div className="text-center">
          <Reveal direction="up">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-bm-yellow/70">
              Processo
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h2
              id="flow-title"
              className="mt-3 font-display text-3xl uppercase leading-tight tracking-wide text-bm-white sm:text-4xl lg:text-5xl"
            >
              Do diagnóstico ao <span className="text-bm-yellow">fechamento</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-bm-grayLight/80">
              Uma jornada integrada. Cada etapa entrega valor real.
            </p>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {FLOW_LAYERS.map((layer, index) => (
            <Reveal key={layer.title} direction="up" delay={0.12 + index * 0.05}>
              <div className="rounded-bmMd border border-bm-grayDark/30 bg-bm-black/50 p-4 text-left backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-bm-yellow/70">
                  Camada {index + 1}
                </p>
                <h3 className="mt-1 font-display text-xl uppercase tracking-wide text-bm-yellow">
                  {layer.title}
                </h3>
                <p className="mt-1 text-sm text-bm-grayLight/70">{layer.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="relative mt-16">
          {/* Linha vertical central (desktop) */}
          <div
            className="absolute left-[23px] top-0 hidden h-full w-px bg-gradient-to-b from-bm-yellow/40 via-bm-yellow/15 to-transparent md:left-1/2 md:block md:-translate-x-px"
            aria-hidden
          />
          <div
            className="flow-progress-line absolute left-[23px] top-0 hidden h-full w-px bg-gradient-to-b from-bm-yellow via-bm-yellow/30 to-transparent md:left-1/2 md:block md:-translate-x-px"
            aria-hidden
          />
          <div
            className="absolute left-[23px] top-0 block h-full w-px bg-gradient-to-b from-bm-yellow/40 via-bm-yellow/15 to-transparent md:hidden"
            aria-hidden
          />
          <div
            className="flow-progress-line absolute left-[23px] top-0 block h-full w-px bg-gradient-to-b from-bm-yellow via-bm-yellow/30 to-transparent md:hidden"
            aria-hidden
          />
          <ul className="space-y-8 md:space-y-12" role="list">
            {STEPS.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <li
                  key={step.num}
                  className={cn(
                    "flow-step-card relative flex items-start gap-5 md:items-center",
                    "md:gap-0",
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Bolinha numerada */}
                  <div
                    className={cn(
                      "z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-bm-yellow/60 bg-bm-black font-display text-lg text-bm-yellow",
                      "shadow-[0_0_24px_rgba(255,240,2,0.15)] md:absolute md:left-1/2 md:-translate-x-1/2"
                    )}
                    aria-hidden
                  >
                    {step.num}
                  </div>
                  {/* Card do step */}
                  <div
                    className={cn(
                      "flex-1 rounded-bmMd border border-bm-grayDark/40 bg-bm-grayDark/20 p-5 backdrop-blur-sm",
                      "transition-colors duration-300 hover:border-bm-yellow/35",
                      "md:w-[calc(50%-48px)]",
                      isEven ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
                    )}
                  >
                    <h3 className="font-display text-lg uppercase tracking-wide text-bm-yellow">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-bm-grayLight/70">{step.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
