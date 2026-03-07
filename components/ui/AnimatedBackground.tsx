"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils/cn";

type AnimatedBackgroundProps = {
  className?: string;
  variant?: "grid" | "gradient" | "dots" | "grid-flow" | "lines" | "pulse";
};

export function AnimatedBackground({
  className,
  variant = "grid",
}: AnimatedBackgroundProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (reducedMotion) {
    return (
      <div
        className={cn(
          "absolute inset-0 -z-10 bg-bm-black",
          variant === "gradient" && "bg-gradient-to-b from-bm-grayDark/30 to-bm-black",
          className
        )}
        aria-hidden
      />
    );
  }

  /* Grid estático */
  if (variant === "grid") {
    return (
      <div
        className={cn(
          "absolute inset-0 -z-10 overflow-hidden bg-bm-black",
          "bg-[linear-gradient(rgba(255,240,2,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,240,2,0.03)_1px,transparent_1px)] bg-[size:48px_48px]",
          "md:bg-[size:64px_64px]",
          className
        )}
        aria-hidden
      />
    );
  }

  /* Grid com movimento sutil (fluxo de dados) — CSS only */
  if (variant === "grid-flow") {
    return (
      <div
        className={cn(
          "absolute inset-0 -z-10 overflow-hidden bg-bm-black",
          "bg-[linear-gradient(rgba(255,240,2,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,240,2,0.04)_1px,transparent_1px)] bg-[size:48px_48px] md:bg-[size:64px_64px]",
          "animate-[gridFlow_20s_linear_infinite]",
          className
        )}
        aria-hidden
      />
    );
  }

  /* Linhas horizontais em movimento suave */
  if (variant === "lines") {
    return (
      <div
        className={cn(
          "absolute inset-0 -z-10 overflow-hidden bg-bm-black",
          "before:absolute before:inset-0 before:bg-[repeating-linear-gradient(rgba(255,240,2,0.03)_0px,rgba(255,240,2,0.03)_1px,transparent_1px,transparent_24px)] before:animate-[lineFlow_12s_linear_infinite]",
          "after:absolute after:inset-0 after:bg-[repeating-linear-gradient(rgba(255,240,2,0.02)_0px,rgba(255,240,2,0.02)_1px,transparent_1px,transparent_32px)] after:animate-[lineFlow_18s_linear_infinite_reverse]",
          className
        )}
        aria-hidden
      />
    );
  }

  /* Grid com pulso leve de opacidade */
  if (variant === "pulse") {
    return (
      <div
        className={cn(
          "absolute inset-0 -z-10 overflow-hidden bg-bm-black",
          "bg-[linear-gradient(rgba(255,240,2,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,240,2,0.05)_1px,transparent_1px)] bg-[size:48px_48px] md:bg-[size:64px_64px]",
          "animate-[gridPulse_4s_ease_in_out_infinite]",
          className
        )}
        aria-hidden
      />
    );
  }

  if (variant === "dots") {
    return (
      <div
        className={cn(
          "absolute inset-0 -z-10 bg-bm-black",
          "bg-[radial-gradient(circle_at_50%_50%,rgba(255,240,2,0.06)_1px,transparent_1px)] bg-[size:24px_24px]",
          "md:bg-[size:32px_32px]",
          className
        )}
        aria-hidden
      />
    );
  }

  /* gradient */
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 bg-gradient-to-b from-bm-grayDark/40 via-bm-black to-bm-black",
        "bg-[length:100%_400%] animate-[gradientShift_15s_ease_in_out_infinite]",
        className
      )}
      aria-hidden
    />
  );
}
