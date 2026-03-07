"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
  glowColor?: "yellow" | "white";
};

export function GlowCard({
  children,
  className,
  glowColor = "yellow",
}: GlowCardProps) {
  const reducedMotion = useReducedMotion();

  const glowHover =
    glowColor === "yellow"
      ? "0 0 48px -10px rgba(255,240,2,0.25)"
      : "0 0 48px -10px rgba(255,255,255,0.1)";

  return (
    <motion.div
      className={cn(
        "rounded-bmMd border border-bm-grayDark/40 bg-bm-grayDark/15 p-6 backdrop-blur-sm",
        "transition-colors duration-300",
        glowColor === "yellow" && "hover:border-bm-yellow/20",
        glowColor === "white" && "hover:border-bm-grayLight/20",
        className
      )}
      initial={false}
      whileHover={
        reducedMotion
          ? undefined
          : { scale: 1.015, boxShadow: glowHover }
      }
      whileTap={reducedMotion ? undefined : { scale: 0.99 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.div>
  );
}
