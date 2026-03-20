"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const TEAM = [
  {
    name: "Luiz Saraiva",
    role: "Especialista em estrutura de marketing e geração de demanda.",
    image: "/imagens/40582.png",
    alt: "Foto de Luiz Saraiva",
  },
] as const;

export function FounderSection() {
  return (
    <Section
      id="fundador"
      className="relative overflow-hidden px-6 py-16 lg:px-8 lg:py-20"
      aria-labelledby="founder-title"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bm-grayDark/60 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl text-center">
        <Reveal direction="up">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-bm-yellow/70">
            Institucional
          </p>
        </Reveal>
        <Reveal direction="up" delay={0.05}>
          <h2
            id="founder-title"
            className="mt-3 font-display text-3xl uppercase leading-tight tracking-wide text-bm-white sm:text-4xl lg:text-5xl"
          >
            Quem está por trás da <span className="text-bm-yellow">Beemark</span>
          </h2>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-md gap-6 md:grid-cols-1">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} direction="up" delay={0.1 + i * 0.05}>
              <article className="overflow-hidden rounded-bmMd border border-bm-grayDark/35 bg-bm-grayDark/10 text-left backdrop-blur-sm">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-5 text-center sm:p-6">
                  <h3 className="font-display text-3xl uppercase tracking-wide text-bm-yellow sm:text-4xl">
                    {member.name}
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-bm-grayLight/80">
                    {member.role}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
