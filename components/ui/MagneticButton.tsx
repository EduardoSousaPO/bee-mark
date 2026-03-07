"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type MagneticButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  "aria-label"?: string;
};

const variantMap = {
  primary:
    "bg-bm-yellow text-bm-black font-accent uppercase tracking-wider hover:shadow-[0_0_32px_rgba(255,240,2,0.3)]",
  secondary:
    "bg-bm-grayDark text-bm-white font-accent uppercase tracking-wider hover:bg-bm-grayDark/80",
  outline:
    "border-2 border-bm-yellow bg-transparent text-bm-yellow font-accent uppercase tracking-wider hover:bg-bm-yellow hover:text-bm-black",
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  disabled,
  "aria-label": ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const base = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-bmSm px-8 py-3.5 text-sm transition-all duration-300",
    "focus:outline-none focus:ring-2 focus:ring-bm-yellow focus:ring-offset-2 focus:ring-offset-bm-black",
    "disabled:opacity-50",
    variantMap[variant],
    className
  );

  const content = (
    <motion.div
      ref={ref}
      whileHover={reducedMotion ? undefined : { scale: 1.03 }}
      whileTap={reducedMotion ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="inline-flex"
    >
      {href ? (
        <Link href={href} className={base} aria-label={ariaLabel}>
          {children}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={base}
          aria-label={ariaLabel}
        >
          {children}
        </button>
      )}
    </motion.div>
  );

  return content;
}
