"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { MathCanvasBackground } from "@/components/ui/MathCanvasBackground";
import { cn } from "@/lib/utils/cn";

const TECH_PILLARS = [
  { label: "24/7", desc: "Responde no WhatsApp sem fila e sem perder timing." },
  { label: "Memoria", desc: "Usa contexto do negocio para conduzir conversa real." },
  { label: "CRM", desc: "Registra sinais comerciais para gestao e decisao." },
];

const AGENT_STAGES = [
  {
    title: "Recepcao instantanea",
    goal: "Primeiro contato imediato e natural no WhatsApp.",
    detail:
      "A IA inicia conversa em segundos, apresenta contexto e reduz atrito ja no primeiro toque.",
    outputs: ["Resposta em segundos", "Tom alinhado a marca"],
  },
  {
    title: "Qualificacao comercial",
    goal: "Separar curioso de comprador real com logica por estagios.",
    detail:
      "A conversa mapeia dor, urgencia, momento de compra e aderencia antes de ocupar o vendedor.",
    outputs: ["Lead score por estagio", "Contexto salvo sem repeticao"],
  },
  {
    title: "Nutricao e follow-up",
    goal: "Retomar conversas sem perder historico e sem soar robotico.",
    detail:
      "Quando o lead esfria, a IA continua de onde parou e mantem o interesse ativo ate o proximo passo.",
    outputs: ["Retomada com contexto", "Mais leads aquecidos"],
  },
  {
    title: "Handoff para fechamento",
    goal: "Entrega de oportunidade pronta para o humano negociar.",
    detail:
      "O time comercial recebe resumo, objecoes e sinais de compra para focar no fechamento.",
    outputs: ["Menos tempo com lead frio", "Mais foco em fechamento"],
  },
];

export function TechSection() {
  const [activeStage, setActiveStage] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(1440);
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const intervalMs =
      viewportWidth < 1024 ? 6200 : viewportWidth < 1440 ? 5200 : 4300;

    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % AGENT_STAGES.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [reducedMotion, viewportWidth]);

  useEffect(() => {
    if (reducedMotion) return;

    let mounted = true;
    let cleanup: (() => void) | undefined;

    (async () => {
      const gsapModule = await import("gsap");
      const scrollModule = await import("gsap/ScrollTrigger");

      if (!mounted || !sectionRef.current) return;

      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const cards = stageRefs.current.filter(Boolean) as HTMLButtonElement[];
        const links = gsap.utils.toArray<SVGPathElement>(".agent-link");

        gsap.set(cards, { opacity: 0, y: 18 });
        gsap.set(links, { opacity: 0.2 });

        cards.forEach((card) => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 86%",
              end: "top 62%",
              toggleActions: "play none none reverse",
            },
          });
        });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 72%",
          end: "bottom 38%",
          scrub: true,
          onUpdate: (self) => {
            const index = Math.min(
              AGENT_STAGES.length - 1,
              Math.floor(self.progress * AGENT_STAGES.length)
            );
            setActiveStage(index);
          },
        });

        gsap.to(links, {
          opacity: 0.55,
          duration: 0.9,
          stagger: 0.12,
          ease: "power1.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }, sectionRef);

      cleanup = () => ctx.revert();
    })();

    return () => {
      mounted = false;
      cleanup?.();
    };
  }, [reducedMotion]);

  const currentStage = AGENT_STAGES[activeStage];

  return (
    <Section
      id="tecnologia"
      className="relative overflow-hidden px-6 lg:px-8"
      aria-labelledby="tech-title"
    >
      <MathCanvasBackground
        className="opacity-38 md:opacity-48 xl:opacity-58"
        fallbackVariant="lines"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-[5] bg-[radial-gradient(circle_at_70%_30%,rgba(255,240,2,0.06),transparent_52%)] md:bg-[radial-gradient(circle_at_70%_30%,rgba(255,240,2,0.08),transparent_50%)] xl:bg-[radial-gradient(circle_at_70%_30%,rgba(255,240,2,0.1),transparent_48%)]"
        aria-hidden
      />
      <div ref={sectionRef} className="relative mx-auto max-w-6xl">
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
              Tecnologia com <span className="text-bm-yellow">proposito</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-bm-grayLight/80">
              O centro da operacao e o agente de IA no WhatsApp: ele atende,
              qualifica, nutre e transfere so oportunidades com contexto para o
              vendedor fechar com mais taxa de conversao.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 xl:grid-cols-[1fr_1.35fr]">
          <Reveal direction="up">
            <article className="rounded-bmMd border border-bm-yellow/30 bg-bm-black/65 p-6 backdrop-blur-sm">
              <p className="inline-flex rounded-full border border-bm-yellow/40 bg-bm-yellow/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-bm-yellow">
                Agente de IA para pre-venda no WhatsApp
              </p>
              <h3 className="mt-4 font-display text-3xl uppercase leading-tight text-bm-yellow sm:text-4xl">
                IA treinada no seu negocio, nao script generico
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-bm-grayLight/80">
                Com base de conhecimento, variaveis persistentes e estagios de
                conversa, o agente identifica perfil real de compra e prepara a
                transicao para o time comercial humano.
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

          <Reveal direction="up" delay={0.08}>
            <article className="relative overflow-hidden rounded-bmMd border border-bm-grayDark/30 bg-bm-black/60 p-5 backdrop-blur-sm">
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,240,2,0.03)_1px,transparent_1px),linear-gradient(rgba(255,240,2,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"
                aria-hidden
              />

              <div className="relative grid gap-3 sm:grid-cols-2">
                <svg
                  className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    className="agent-link animate-[dataDash_8s_linear_infinite]"
                    d="M25 23 C38 23 42 23 50 23"
                    stroke="rgba(255,240,2,0.55)"
                    strokeWidth="0.45"
                    fill="none"
                    strokeDasharray="2 2"
                  />
                  <path
                    className="agent-link animate-[dataDash_7s_linear_infinite_reverse]"
                    d="M25 23 C25 45 25 45 25 73"
                    stroke="rgba(255,240,2,0.45)"
                    strokeWidth="0.45"
                    fill="none"
                    strokeDasharray="2 2"
                  />
                  <path
                    className="agent-link animate-[dataDash_9s_linear_infinite]"
                    d="M50 23 C63 23 67 23 75 23"
                    stroke="rgba(255,240,2,0.45)"
                    strokeWidth="0.45"
                    fill="none"
                    strokeDasharray="2 2"
                  />
                  <path
                    className="agent-link animate-[dataDash_10s_linear_infinite_reverse]"
                    d="M75 23 C75 45 75 45 75 73"
                    stroke="rgba(255,240,2,0.38)"
                    strokeWidth="0.45"
                    fill="none"
                    strokeDasharray="2 2"
                  />
                </svg>

                {AGENT_STAGES.map((stage, index) => {
                  const active = index === activeStage;
                  return (
                    <button
                      key={stage.title}
                      ref={(el) => {
                        stageRefs.current[index] = el;
                      }}
                      type="button"
                      onClick={() => setActiveStage(index)}
                      className={cn(
                        "relative rounded-bmSm border p-3 text-left transition-all duration-300",
                        active
                          ? "border-bm-yellow/70 bg-bm-yellow/10 shadow-[0_0_22px_rgba(255,240,2,0.14)] motion-safe:animate-[agentPulse_2.8s_ease-in-out_infinite]"
                          : "border-bm-grayDark/40 bg-bm-black/45 hover:border-bm-yellow/35"
                      )}
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

              <div className="relative mt-4 rounded-bmSm border border-bm-yellow/25 bg-bm-black/55 p-4">
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
