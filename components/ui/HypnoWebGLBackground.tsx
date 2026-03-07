"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

type HypnoWebGLBackgroundProps = {
  className?: string;
  fallbackVariant?: "grid" | "gradient" | "dots" | "grid-flow" | "lines" | "pulse";
  mobileBreakpoint?: number;
};

function createShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string
) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl: WebGLRenderingContext, vertexSrc: string, fragmentSrc: string) {
  const vertex = createShader(gl, gl.VERTEX_SHADER, vertexSrc);
  const fragment = createShader(gl, gl.FRAGMENT_SHADER, fragmentSrc);
  if (!vertex || !fragment) return null;

  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);

  gl.deleteShader(vertex);
  gl.deleteShader(fragment);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }
  return program;
}

const VERTEX_SHADER = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  vec2 uv = (gl_FragCoord.xy / u_resolution.xy) * 2.0 - 1.0;
  uv.x *= u_resolution.x / u_resolution.y;

  float t = u_time * 0.12;
  float r = length(uv);
  float a = atan(uv.y, uv.x);

  float spiral = sin(8.0 * r - 2.2 * t + 4.0 * a);
  float rings = cos(22.0 * r - 1.4 * t);
  float flow = sin(uv.x * 7.0 + t) * cos(uv.y * 6.0 - t * 1.2);
  float noise = hash(floor((uv + t * 0.2) * 18.0)) * 0.35;

  float field = 0.45 * spiral + 0.35 * rings + 0.2 * flow + noise;
  field = smoothstep(-0.3, 0.9, field);

  vec3 yellow = vec3(1.0, 0.94, 0.01);
  vec3 black = vec3(0.0);
  vec3 color = mix(black, yellow, field * 0.35);

  float vignette = smoothstep(1.25, 0.35, r);
  color *= vignette;

  gl_FragColor = vec4(color, 0.8);
}
`;

export function HypnoWebGLBackground({
  className,
  fallbackVariant = "grid-flow",
  mobileBreakpoint = 1024,
}: HypnoWebGLBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mode, setMode] = useState<"auto" | "webgl" | "fallback">("auto");

  useEffect(() => {
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isMobile = window.innerWidth < mobileBreakpoint;
    if (mqReduced.matches || isMobile) {
      setMode("fallback");
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      setMode("fallback");
      return;
    }

    const gl = canvas.getContext("webgl", {
      antialias: false,
      alpha: true,
      depth: false,
      stencil: false,
      powerPreference: "low-power",
    });

    if (!gl) {
      setMode("fallback");
      return;
    }

    const program = createProgram(gl, VERTEX_SHADER, FRAGMENT_SHADER);
    if (!program) {
      setMode("fallback");
      return;
    }

    setMode("webgl");
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    if (!positionBuffer) {
      setMode("fallback");
      gl.deleteProgram(program);
      return;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
        1, -1,
        -1, 1,
        -1, 1,
        1, -1,
        1, 1,
      ]),
      gl.STATIC_DRAW
    );

    const posLocation = gl.getAttribLocation(program, "a_position");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");

    gl.enableVertexAttribArray(posLocation);
    gl.vertexAttribPointer(posLocation, 2, gl.FLOAT, false, 0, 0);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.max(1, Math.floor(canvas.clientWidth * dpr));
      const height = Math.max(1, Math.floor(canvas.clientHeight * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    const start = performance.now();
    const frame = (now: number) => {
      const elapsed = (now - start) / 1000;
      if (resolutionLocation) {
        gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      }
      if (timeLocation) {
        gl.uniform1f(timeLocation, elapsed);
      }
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      gl.deleteBuffer(positionBuffer);
      gl.deleteProgram(program);
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
