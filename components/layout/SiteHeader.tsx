"use client";

import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/lib/constants/brand";
import { IMAGES } from "@/lib/constants/images";
import { BRAND } from "@/lib/constants/brand";
import { cn } from "@/lib/utils/cn";

export function SiteHeader() {
  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b border-bm-yellow/10 bg-bm-black/95 backdrop-blur-md",
        "supports-[backdrop-filter]:bg-bm-black/85"
      )}
      role="banner"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
        <Link
          href={ROUTES.home}
          className="flex min-w-0 items-center gap-2 sm:gap-3 transition-opacity duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-bm-yellow focus:ring-offset-2 focus:ring-offset-bm-black"
          aria-label={`${BRAND.name} — início`}
        >
          <Image
            src={IMAGES.logoBee}
            alt=""
            width={56}
            height={56}
            className="h-9 w-9 object-contain sm:h-11 sm:w-11 md:h-14 md:w-14"
            priority
          />
          <span className="truncate font-display text-[1.9rem] uppercase tracking-wide text-bm-yellow sm:text-2xl sm:tracking-wider">
            {BRAND.name}
          </span>
        </Link>
        <nav aria-label="Principal" className="flex items-center gap-2 sm:gap-6">
          <Link
            href={ROUTES.diagnostico}
            className={cn(
              "relative inline-block whitespace-nowrap rounded-bmSm border-2 border-bm-yellow bg-bm-yellow px-3 py-2 font-accent text-[10px] uppercase tracking-[0.08em] text-bm-black sm:px-5 sm:text-xs sm:tracking-wider",
              "transition-all duration-200 hover:bg-transparent hover:text-bm-yellow",
              "focus:outline-none focus:ring-2 focus:ring-bm-yellow focus:ring-offset-2 focus:ring-offset-bm-black"
            )}
          >
            <span className="sm:hidden">Diagnóstico</span>
            <span className="hidden sm:inline">Diagnóstico gratuito</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
