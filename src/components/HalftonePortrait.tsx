import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import { useScroll } from "motion/react";
import portrait from "../assets/nitish-bw.webp";
import { useMotionPrefs } from "../context/MotionPrefs";

interface Props {
  /** The hero element; scroll progress through it drives the dissolve. */
  targetRef: RefObject<HTMLElement | null>;
  className?: string;
}

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

/**
 * Draws the black-and-white portrait as a grid of dots (bigger dot = brighter pixel).
 * - Intro: dots grow outward from the face.
 * - Scroll: the portrait fades and its dots ripple into waves.
 * - Pointer: dots near the cursor are pushed away.
 * With motion off it draws once, static.
 */
export function HalftonePortrait({ targetRef, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { enabled } = useMotionPrefs();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const ctx: CanvasRenderingContext2D = context;

    let raf = 0;
    let visible = true;
    let W = 0;
    let H = 0;
    let cell = 7;
    let cols = 0;
    let rows = 0;
    let lum = new Float32Array(0);
    let ready = false;
    const mouse = { x: -9999, y: -9999 };
    const t0 = performance.now();
    const img = new Image();

    const sample = () => {
      if (!ready || W === 0) return;
      cols = Math.ceil(W / cell);
      rows = Math.ceil(H / cell);
      const off = document.createElement("canvas");
      off.width = cols;
      off.height = rows;
      const octx = off.getContext("2d", { willReadFrequently: true });
      if (!octx) return;
      octx.imageSmoothingQuality = "high";
      octx.drawImage(img, 0, 0, cols, rows);
      const data = octx.getImageData(0, 0, cols, rows).data;
      lum = new Float32Array(cols * rows);
      for (let i = 0; i < cols * rows; i++) lum[i] = data[i * 4] / 255;
    };

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cell = W < 420 ? 4 : W < 640 ? 5 : 6;
      sample();
      draw(performance.now());
    };

    function draw(now: number) {
      if (!ready || lum.length === 0) return;
      const t = (now - t0) / 1000;
      const p = enabled ? clamp(scrollYProgress.get() * 1.7) : 0;
      const intro = enabled ? clamp(t / 1.9) : 1;
      const cx0 = W / 2;
      const cy0 = H * 0.36;
      const maxD = Math.hypot(W / 2, H * 0.7);
      const amp = 44 * p;
      const pointer = enabled && mouse.x > -999;

      ctx.clearRect(0, 0, W, H);
      ctx.globalAlpha = 1 - 0.86 * p;
      ctx.fillStyle = "#f0eadf";
      ctx.beginPath();

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const base = lum[r * cols + c];
          if (base < 0.07) continue;
          let v = Math.pow((base - 0.07) / 0.93, 1.12);
          let x = (c + 0.5) * cell;
          let y = (r + 0.5) * cell;

          if (intro < 1) {
            const d = Math.hypot(x - cx0, y - cy0) / maxD;
            const k = clamp((intro * 1.7 - d) / 0.55);
            v *= k * k * (3 - 2 * k);
          }
          if (p > 0) {
            y +=
              Math.sin(x * 0.013 + t * 1.1) * amp +
              Math.sin(x * 0.034 - t * 0.7 + r * 0.02) * amp * 0.4;
            v *= 1 - 0.3 * p;
          }
          if (pointer) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const d = Math.hypot(dx, dy);
            if (d < 110 && d > 0.01) {
              const f = (1 - d / 110) ** 2;
              x += (dx / d) * f * 16;
              y += (dy / d) * f * 16;
              v *= 1 + 0.35 * f;
            }
          }

          const rad = cell * 0.52 * v;
          if (rad < 0.3) continue;
          ctx.moveTo(x + rad, y);
          ctx.arc(x, y, rad, 0, Math.PI * 2);
        }
      }
      ctx.fill();
    }

    const loop = (now: number) => {
      if (visible) draw(now);
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };

    img.onload = () => {
      ready = true;
      resize();
      if (enabled) raf = requestAnimationFrame(loop);
    };
    img.src = portrait;

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(
      ([entry]) => (visible = entry.isIntersecting),
      { rootMargin: "120px" },
    );
    io.observe(canvas);
    if (enabled) {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled, scrollYProgress]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Black and white halftone portrait of Nitish Vishwakarma"
      className={className}
      // Matches the 4:5 source photo; without it the canvas takes its own 300px default width.
      style={{ aspectRatio: "4 / 5" }}
    />
  );
}
