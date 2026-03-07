"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { cn } from "@/lib/utils/cn";

type MathCanvasBackgroundProps = {
  className?: string;
  fallbackVariant?: "grid" | "gradient" | "dots" | "grid-flow" | "lines" | "pulse";
  mobileBreakpoint?: number;
};

type Point = {
  x: number;
  y: number;
  life: number;
};

type CanvasProfile = {
  minPoints: number;
  maxPoints: number;
  areaDivisor: number;
  trailAlpha: number;
  speedBase: number;
  speedVariance: number;
  strokeBase: number;
  strokeVariance: number;
  lifeMax: number;
  scale: number;
  timeStep: number;
  maxDpr: number;
  targetFps: number;
};

const TAU = Math.PI * 2;

function randomPoint(width: number, height: number): Point {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    life: Math.random() * 1000,
  };
}

function getCanvasProfile(width: number): CanvasProfile {
  if (width < 1024) {
    return {
      minPoints: 60,
      maxPoints: 150,
      areaDivisor: 22000,
      trailAlpha: 0.12,
      speedBase: 0.48,
      speedVariance: 0.2,
      strokeBase: 0.05,
      strokeVariance: 0.03,
      lifeMax: 900,
      scale: 0.0035,
      timeStep: 0.0045,
      maxDpr: 1.2,
      targetFps: 22,
    };
  }
  if (width < 1440) {
    return {
      minPoints: 80,
      maxPoints: 200,
      areaDivisor: 18000,
      trailAlpha: 0.095,
      speedBase: 0.62,
      speedVariance: 0.25,
      strokeBase: 0.07,
      strokeVariance: 0.035,
      lifeMax: 1050,
      scale: 0.0039,
      timeStep: 0.0054,
      maxDpr: 1.35,
      targetFps: 30,
    };
  }
  return {
    minPoints: 110,
    maxPoints: 260,
    areaDivisor: 15000,
    trailAlpha: 0.078,
    speedBase: 0.72,
    speedVariance: 0.3,
    strokeBase: 0.085,
    strokeVariance: 0.04,
    lifeMax: 1200,
    scale: 0.0042,
    timeStep: 0.0062,
    maxDpr: 1.5,
    targetFps: 45,
  };
}

export function MathCanvasBackground({
  className,
  fallbackVariant = "lines",
  mobileBreakpoint = 390,
}: MathCanvasBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mode, setMode] = useState<"auto" | "canvas" | "fallback">("auto");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isMobile = window.innerWidth < mobileBreakpoint;
    if (reduced.matches || isMobile) {
      setMode("fallback");
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      setMode("fallback");
      return;
    }

    const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true });
    if (!ctx) {
      setMode("fallback");
      return;
    }

    setMode("canvas");

    let profile = getCanvasProfile(window.innerWidth);

    const resize = () => {
      profile = getCanvasProfile(window.innerWidth);
      const dpr = Math.min(window.devicePixelRatio || 1, profile.maxDpr);
      const width = Math.max(1, Math.floor(canvas.clientWidth * dpr));
      const height = Math.max(1, Math.floor(canvas.clientHeight * dpr));
      canvas.width = width;
      canvas.height = height;
    };

    resize();

    let points: Point[] = [];
    const resetPoints = () => {
      const area = canvas.width * canvas.height;
      const count = Math.min(
        profile.maxPoints,
        Math.max(profile.minPoints, Math.floor(area / profile.areaDivisor))
      );
      points = Array.from({ length: count }, () => randomPoint(canvas.width, canvas.height));
    };
    resetPoints();

    let raf = 0;
    let t = 0;
    let lastFrame = performance.now();

    const draw = (now: number) => {
      const frameInterval = 1000 / profile.targetFps;
      if (now - lastFrame < frameInterval) {
        raf = requestAnimationFrame(draw);
        return;
      }
      lastFrame = now;
      t += profile.timeStep;

      // Trail adaptativo para manter hipnose no desktop e legibilidade no tablet.
      ctx.fillStyle = `rgba(0, 0, 0, ${profile.trailAlpha})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const scale = profile.scale;

      for (let i = 0; i < points.length; i += 1) {
        const p = points[i];
        const nx = (p.x - cx) * scale;
        const ny = (p.y - cy) * scale;

        const angle =
          Math.sin(nx * 6.0 + t * 1.3) +
          Math.cos(ny * 7.0 - t * 1.1) +
          0.7 * Math.sin((nx + ny) * 4.5 + t * 0.9);
        const speed =
          profile.speedBase + profile.speedVariance * Math.sin(t * 2.0 + i * 0.05);
        const vx = Math.cos(angle * TAU) * speed;
        const vy = Math.sin(angle * TAU) * speed;

        const oldX = p.x;
        const oldY = p.y;

        p.x += vx;
        p.y += vy;
        p.life += 1;

        if (
          p.x < -10 ||
          p.x > canvas.width + 10 ||
          p.y < -10 ||
          p.y > canvas.height + 10 ||
          p.life > profile.lifeMax
        ) {
          points[i] = randomPoint(canvas.width, canvas.height);
          continue;
        }

        const alpha = profile.strokeBase + profile.strokeVariance * ((i % 7) / 7);
        ctx.strokeStyle = `rgba(255,240,2,${alpha.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(oldX, oldY);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }

      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    const onResize = () => {
      resize();
      resetPoints();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileBreakpoint]);

  if (mode === "fallback") {
    return <AnimatedBackground variant={fallbackVariant} className={className} />;
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("absolute inset-0 -z-10 h-full w-full", className)}
    />
  );
}
