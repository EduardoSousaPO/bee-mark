"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  /** Intensidade do deslocamento em pixels (ex: 20) */
  amount?: number;
};

export function Parallax({ children, className, amount = 20 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [normalizedAmount, setNormalizedAmount] = useState(amount);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 768) return Math.min(amount, 10);
      if (w < 1024) return Math.min(amount, 14);
      return amount;
    };
    const update = () => setNormalizedAmount(calc());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [amount]);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, normalizedAmount, 0]);

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
