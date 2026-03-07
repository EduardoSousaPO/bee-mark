"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HypnoWebGLBackground } from "@/components/ui/HypnoWebGLBackground";
import { Parallax } from "@/components/ui/Parallax";
import Image from "next/image";
import { BRAND, ROUTES } from "@/lib/constants/brand";
import { IMAGES } from "@/lib/constants/images";

function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <Section
      id="hero"
      className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 pb-10 text-center lg:min-h-[88vh] lg:px-8"
      aria-labelledby="hero-title"
    >
      <HypnoWebGLBackground
        className="opacity-34 md:opacity-46 xl:opacity-60"
        fallbackVariant="gradient"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-[5] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,240,2,0.06),transparent)] md:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,240,2,0.08),transparent)] xl:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,240,2,0.1),transparent)]"
        aria-hidden
      />
      <div className="relative flex flex-col items-center gap-5">
        <FadeIn delay={0.1}>
          <Image
            src={IMAGES.logoBee}
            alt=""
            width={140}
            height={140}
            className="h-24 w-24 object-contain opacity-80 md:h-28 md:w-28"
            priority
            aria-hidden
          />
        </FadeIn>
        <FadeIn delay={0.2}>
          <h1
            id="hero-title"
            className="font-display text-5xl uppercase leading-[0.95] tracking-wider text-bm-yellow sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {BRAND.name}
          </h1>
        </FadeIn>
        <FadeIn delay={0.35}>
          <p className="max-w-xl font-accent text-xl leading-relaxed text-bm-white/90 sm:text-2xl md:text-3xl">
            {BRAND.sloganPrimary}
          </p>
        </FadeIn>
        <FadeIn delay={0.45}>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-2 text-[10px] tracking-[0.16em] text-bm-grayLight/70 sm:text-sm sm:tracking-[0.25em]">
            {BRAND.taglineSecondary.map((t, i) => (
              <span key={t} className="flex items-center gap-2 whitespace-nowrap">
                {i > 0 && (
                  <span className="inline-block h-1 w-1 rounded-full bg-bm-yellow/60" />
                )}
                <span className="uppercase">{t}</span>
              </span>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.55}>
          <div className="mt-2">
            <MagneticButton
              href={ROUTES.diagnostico}
              variant="primary"
              className="px-10 py-4 text-base"
            >
              Solicitar diagnóstico gratuito
            </MagneticButton>
          </div>
        </FadeIn>
        <FadeIn delay={0.7}>
          <Parallax amount={20} className="mt-4 flex justify-center">
            <Image
              src={IMAGES.mascote}
              alt=""
              width={240}
              height={300}
              className="h-36 w-auto object-contain md:h-48"
              priority
              aria-hidden
            />
          </Parallax>
        </FadeIn>
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bm-black to-transparent"
        aria-hidden
      />
    </Section>
  );
}
