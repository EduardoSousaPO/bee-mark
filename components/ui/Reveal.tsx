"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
  amount?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  amount = 0.2,
}: RevealProps) {
  const reducedMotion = useReducedMotion();
  const distance = 24;
  const variants = {
    up: { y: distance, opacity: 0 },
    down: { y: -distance, opacity: 0 },
    left: { x: distance, opacity: 0 },
    right: { x: -distance, opacity: 0 },
  };
  const initial = reducedMotion ? false : variants[direction];
  const animate = { x: 0, y: 0, opacity: 1 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount }}
      transition={
        reducedMotion
          ? { duration: 0 }
          : {
              duration: 0.5,
              delay,
              ease: [0.25, 0.4, 0.25, 1],
            }
      }
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
