"use client";

import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type SkipLinkProps = {
  href: string;
  children: React.ReactNode;
};

/**
 * Skip link para acessibilidade: primeiro foco no teclado leva ao conteúdo principal.
 * Visível apenas no foco (focus-visible).
 */
export function SkipLink({ href, children }: SkipLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "absolute left-4 top-4 z-[100] -translate-y-[120%] rounded-bmSm bg-bm-yellow px-4 py-2 font-accent text-sm uppercase text-bm-black",
        "transition-transform duration-150 focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bm-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-bm-black"
      )}
    >
      {children}
    </Link>
  );
}
