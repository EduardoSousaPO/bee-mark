"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { MathCanvasBackground } from "@/components/ui/MathCanvasBackground";
import { cn } from "@/lib/utils/cn";

const TIMELINE_STEPS = [
  {
    title: "Resposta imediata",
    detail: "Atende o lead em segundos no WhatsApp.",
  },
  {
    title: "Qualificação",
    detail: "Filtra curioso x comprador com potencial real.",
  },
  {
    title: "Follow-up",
    detail: "Retoma no tempo certo com contexto.",
  },
  {
    title: "Handoff humano",
    detail: "Entrega pronto para fechamento.",
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
      viewportWidth < 768 ? 6200 : viewportWidth < 1200 ? 5200 : 4300;

    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % TIMELINE_STEPS.length);
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
        gsap.set(cards, { opacity: 0, y: 16 });

        cards.forEach((card) => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 86%",
              end: "top 66%",
              toggleActions: "play none none reverse",
            },
          });
        });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 72%",
          end: "bottom 42%",
          scrub: true,
          onUpdate: (self) => {
            const index = Math.min(
              TIMELINE_STEPS.length - 1,
              Math.floor(self.progress * TIMELINE_STEPS.length)
            );
            setActiveStage(index);
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

  const desktopProgress =
    (activeStage / Math.max(1, TIMELINE_STEPS.length - 1)) * 100;
  const mobileProgress =
    ((activeStage + 1) / Math.max(1, TIMELINE_STEPS.length)) * 100;

  return (
    <Section
      id="tecnologia"
      className="relative overflow-hidden px-6 lg:px-8"
      aria-labelledby="tech-title"
    >
      <MathCanvasBackground
        className="opacity-30 md:opacity-42 xl:opacity-52"
        fallbackVariant="lines"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-[5] bg-[radial-gradient(circle_at_50%_20%,rgba(255,240,2,0.05),transparent_55%)]"
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
              IA comercial que trabalha{" "}
              <span className="text-bm-yellow">24/7</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-bm-grayLight/80">
              A IA atende, qualifica, faz follow-up e direciona para o vendedor
              humano com contexto completo.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-14 rounded-bmMd border border-bm-grayDark/35 bg-bm-black/50 p-5 backdrop-blur-sm sm:p-6">
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,240,2,0.02)_1px,transparent_1px),linear-gradient(rgba(255,240,2,0.02)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"
            aria-hidden
          />

          <div
            className="pointer-events-none absolute bottom-6 left-4 top-6 w-px bg-bm-yellow/25 lg:hidden"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-6 left-4 top-6 w-px origin-top bg-bm-yellow transition-transform duration-500 lg:hidden"
            style={{ transform: `scaleY(${mobileProgress / 100})` }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-bm-yellow/25 lg:block"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden h-px origin-left bg-bm-yellow transition-transform duration-500 lg:block"
            style={{ transform: `scaleX(${desktopProgress / 100})` }}
            aria-hidden
          />

          <ul className="relative grid gap-4 lg:grid-cols-4" role="list">
            {TIMELINE_STEPS.map((step, index) => {
              const active = index === activeStage;
              return (
                <li key={step.title} className="relative">
                  <span
                    className={cn(
                      "absolute left-4 top-5 z-10 h-2.5 w-2.5 rounded-full border border-bm-yellow/70 bg-bm-black lg:left-1/2 lg:top-7 lg:-translate-x-1/2 lg:-translate-y-1/2",
                      active && "bg-bm-yellow shadow-[0_0_12px_rgba(255,240,2,0.5)]"
                    )}
                    aria-hidden
                  />
                  <button
                    ref={(el) => {
                      stageRefs.current[index] = el;
                    }}
                    type="button"
                    onClick={() => setActiveStage(index)}
                    onMouseEnter={() => setActiveStage(index)}
                    className={cn(
                      "w-full rounded-bmSm border p-4 pl-9 text-left transition-all duration-300 lg:pt-10 lg:pl-4",
                      active
                        ? "border-bm-yellow/70 bg-bm-yellow/10"
                        : "border-bm-grayDark/40 bg-bm-black/45 hover:border-bm-yellow/35"
                    )}
                    aria-pressed={active}
                  >
                    <p className="text-[10px] uppercase tracking-[0.22em] text-bm-grayLight/60">
                      Etapa {index + 1}
                    </p>
                    <p className="mt-1 font-display text-xl uppercase leading-none text-bm-yellow">
                      {step.title}
                    </p>
                    <p className="mt-2 text-sm text-bm-grayLight/78">{step.detail}</p>
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="relative mt-5 border-t border-bm-grayDark/35 pt-4 text-xs uppercase tracking-[0.16em] text-bm-grayLight/58">
            Em operações B2B, esse fluxo pode absorver rotina equivalente a até
            5 SDRs.
          </p>
        </div>
      </div>
    </Section>
  );
}
