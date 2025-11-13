"use client";

import { useEffect, useRef } from "react";

const TRUNK_COLORS = [
  "#2f1d12",
  "#3a2516",
  "#433022",
  "#2b1a0f",
  "#371f14",
];

const CANOPY_COLORS = [
  "rgba(52, 91, 52, 0.85)",
  "rgba(42, 78, 41, 0.8)",
  "rgba(71, 116, 65, 0.82)",
  "rgba(64, 102, 58, 0.84)",
  "rgba(55, 92, 53, 0.8)",
];

const GLOW_COLORS = [
  "rgba(168, 239, 255, 0.4)",
  "rgba(238, 188, 255, 0.35)",
  "rgba(250, 224, 174, 0.45)",
];

const randomBetween = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const pick = <T,>(list: T[]): T => list[Math.floor(Math.random() * list.length)];

const drawGlow = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
) => {
  const glows = 12;
  for (let i = 0; i < glows; i++) {
    const radius = randomBetween(40, 140);
    const x = randomBetween(0, width);
    const y = randomBetween(height * 0.05, height * 0.6);
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    const glowColor = pick(GLOW_COLORS);

    gradient.addColorStop(0, glowColor);
    gradient.addColorStop(0.8, "rgba(255, 255, 255, 0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
};

const drawGround = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
) => {
  const gradient = ctx.createLinearGradient(0, height * 0.6, 0, height);
  gradient.addColorStop(0, "#164029");
  gradient.addColorStop(1, "#0a2316");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, height * 0.6, width, height * 0.4);
};

const drawTree = (
  ctx: CanvasRenderingContext2D,
  baseX: number,
  baseY: number,
  scale: number,
) => {
  const trunkWidth = randomBetween(12, 24) * scale;
  const trunkHeight = randomBetween(80, 140) * scale;
  const trunkColor = pick(TRUNK_COLORS);

  ctx.save();
  ctx.translate(baseX, baseY);
  ctx.rotate(randomBetween(-0.08, 0.08));

  ctx.fillStyle = trunkColor;
  ctx.beginPath();
  ctx.moveTo(-trunkWidth * 0.45, 0);
  ctx.lineTo(-trunkWidth * 0.2, -trunkHeight * 0.25);
  ctx.lineTo(-trunkWidth * 0.4, -trunkHeight * 0.6);
  ctx.lineTo(-trunkWidth * 0.25, -trunkHeight);
  ctx.lineTo(trunkWidth * 0.1, -trunkHeight * 0.75);
  ctx.lineTo(trunkWidth * 0.35, -trunkHeight);
  ctx.lineTo(trunkWidth * 0.5, -trunkHeight * 0.35);
  ctx.lineTo(trunkWidth * 0.25, -trunkHeight * 0.18);
  ctx.lineTo(trunkWidth * 0.4, 0);
  ctx.closePath();
  ctx.fill();

  const crownLayers = Math.floor(randomBetween(3, 6));
  const canopyColor = pick(CANOPY_COLORS);

  for (let i = 0; i < crownLayers; i++) {
    const layerHeight = randomBetween(40, 75) * scale;
    const layerWidth = randomBetween(80, 160) * scale;
    const offsetY = -trunkHeight - i * layerHeight * 0.35;

    ctx.fillStyle = canopyColor;
    ctx.beginPath();
    ctx.moveTo(-layerWidth * 0.4, offsetY);
    const bumps = Math.floor(randomBetween(4, 7));
    for (let b = 0; b <= bumps; b++) {
      const t = b / bumps;
      const x = -layerWidth * 0.4 + layerWidth * t;
      const y =
        offsetY -
        Math.sin(t * Math.PI) * layerHeight -
        Math.sin(t * Math.PI * randomBetween(1.5, 2.5)) * layerHeight * 0.2;
      ctx.lineTo(x + randomBetween(-6, 6), y);
    }
    ctx.lineTo(layerWidth * 0.45, offsetY + layerHeight * 0.2);
    ctx.lineTo(-layerWidth * 0.45, offsetY + layerHeight * 0.2);
    ctx.closePath();
    ctx.fill();
  }

  ctx.restore();
};

const drawMiracleLight = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "rgba(4, 25, 35, 0.1)");
  gradient.addColorStop(0.5, "rgba(215, 246, 255, 0.18)");
  gradient.addColorStop(1, "rgba(10, 39, 27, 0.6)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
};

const paintForest = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const dpr = window.devicePixelRatio || 1;
  const width = canvas.clientWidth * dpr;
  const height = canvas.clientHeight * dpr;
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  const bgGradient = ctx.createLinearGradient(
    0,
    0,
    canvas.clientWidth,
    canvas.clientHeight,
  );
  bgGradient.addColorStop(0, "#051321");
  bgGradient.addColorStop(0.5, "#083926");
  bgGradient.addColorStop(1, "#0f5f3a");

  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  drawGlow(ctx, canvas.clientWidth, canvas.clientHeight);

  const layers = 4;
  for (let layer = 0; layer < layers; layer++) {
    const treeCount = 6 + layer * 3;
    const layerOffset = layer * 60;
    const layerScale = 0.6 + layer * 0.25;

    for (let i = 0; i < treeCount; i++) {
      const x =
        (canvas.clientWidth / treeCount) * i +
        randomBetween(-30, 30) +
        (layer % 2 === 0 ? 40 : -10);
      const y = canvas.clientHeight * 0.75 + layerOffset;

      ctx.globalAlpha = 0.35 + layer * 0.18;
      drawTree(ctx, x, y, layerScale);
    }
  }

  ctx.globalAlpha = 1;
  drawGround(ctx, canvas.clientWidth, canvas.clientHeight);
  drawMiracleLight(ctx, canvas.clientWidth, canvas.clientHeight);

  const fireflies = 80;
  ctx.fillStyle = "rgba(255, 254, 214, 0.9)";
  for (let i = 0; i < fireflies; i++) {
    const x = randomBetween(0, canvas.clientWidth);
    const y = randomBetween(0, canvas.clientHeight * 0.9);
    const size = randomBetween(0.8, 1.8);
    ctx.globalAlpha = randomBetween(0.3, 0.9);
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
};

export function ForestScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      paintForest(canvas);
    };

    resize();
    window.addEventListener("resize", resize);

    const interval = window.setInterval(() => {
      paintForest(canvas);
    }, 5000);

    return () => {
      window.removeEventListener("resize", resize);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-900/40 via-cyan-900/40 to-slate-900/30 shadow-[0_40px_120px_-50px_rgba(12,148,128,0.9)]">
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{ width: "100%", height: "100%" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_60%)] mix-blend-screen" />
    </div>
  );
}
