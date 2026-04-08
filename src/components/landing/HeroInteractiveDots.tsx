"use client";

import { useEffect, useRef } from "react";

/** Zodpovedá predchádzajúcemu statickému CSS (glob + hrúbka bodky) */
const GRID = 44;
const DOT_RADIUS = 1.1;
const DEFAULT_DOT_COLOR = "#000000";
const REPULSE_RADIUS = 120;
const REPULSE_STRENGTH = 34;

/** Veľkosť bunky masky (px); menšie = presnejšie, väčšie pole */
const MASK_CELL = 2;

type GlyphRect = { left: number; top: number; right: number; bottom: number };

/** Obdĺžniky znakov (bez medzier) vo súradniciach relatívnych k wrap */
function collectGlyphRects(
  cluster: HTMLElement,
  wrap: HTMLElement,
  w: number,
  h: number,
): GlyphRect[] {
  const wr = wrap.getBoundingClientRect();
  const rects: GlyphRect[] = [];
  const walker = document.createTreeWalker(cluster, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    if (node.nodeType !== Node.TEXT_NODE) {
      node = walker.nextNode();
      continue;
    }
    const text = node.textContent;
    if (!text) {
      node = walker.nextNode();
      continue;
    }
    for (let i = 0; i < text.length; i++) {
      if (/\s/.test(text[i])) continue;
      const range = document.createRange();
      try {
        range.setStart(node, i);
        range.setEnd(node, i + 1);
      } catch {
        continue;
      }
      const r = range.getBoundingClientRect();
      if (r.width < 0.2 && r.height < 0.2) continue;
      const left = r.left - wr.left;
      const top = r.top - wr.top;
      const right = r.right - wr.left;
      const bottom = r.bottom - wr.top;
      if (right < 0 || bottom < 0 || left > w || top > h) continue;
      rects.push({
        left: Math.max(0, left),
        top: Math.max(0, top),
        right: Math.min(w, right),
        bottom: Math.min(h, bottom),
      });
    }
    node = walker.nextNode();
  }
  return rects;
}

function buildGlyphMask(
  w: number,
  h: number,
  rects: GlyphRect[],
): { cols: number; rows: number; data: Uint8Array } | null {
  if (w < 1 || h < 1) return null;
  const cols = Math.ceil(w / MASK_CELL);
  const rows = Math.ceil(h / MASK_CELL);
  const data = new Uint8Array(cols * rows);

  for (const r of rects) {
    const xStart = Math.max(0, Math.floor(r.left / MASK_CELL));
    const xEnd = Math.min(cols, Math.ceil(r.right / MASK_CELL));
    const yStart = Math.max(0, Math.floor(r.top / MASK_CELL));
    const yEnd = Math.min(rows, Math.ceil(r.bottom / MASK_CELL));
    if (xStart >= xEnd || yStart >= yEnd) continue;
    for (let cy = yStart; cy < yEnd; cy++) {
      const row = cy * cols;
      for (let cx = xStart; cx < xEnd; cx++) {
        data[cx + row] = 1;
      }
    }
  }

  return { cols, rows, data };
}

/** Bodka sa nevykreslí, ak zasahuje do masky (stred alebo okraj bodky) */
function isOverGlyph(
  ox: number,
  oy: number,
  mask: { cols: number; rows: number; data: Uint8Array } | null,
): boolean {
  if (!mask) return false;
  const { cols, rows, data } = mask;
  const samples: [number, number][] = [
    [ox, oy],
    [ox - DOT_RADIUS, oy],
    [ox + DOT_RADIUS, oy],
    [ox, oy - DOT_RADIUS],
    [ox, oy + DOT_RADIUS],
  ];
  for (const [px, py] of samples) {
    const cx = Math.floor(px / MASK_CELL);
    const cy = Math.floor(py / MASK_CELL);
    if (cx >= 0 && cx < cols && cy >= 0 && cy < rows) {
      if (data[cx + cy * cols]) return true;
    }
  }
  return false;
}

function getRepulsed(
  baseX: number,
  baseY: number,
  mx: number,
  my: number,
  reducedMotion: boolean,
): { ox: number; oy: number } {
  if (reducedMotion) return { ox: baseX, oy: baseY };
  const dx = baseX - mx;
  const dy = baseY - my;
  const dist = Math.hypot(dx, dy);
  if (dist < REPULSE_RADIUS && dist > 0.001) {
    const t = 1 - dist / REPULSE_RADIUS;
    const f = t * t * REPULSE_STRENGTH;
    return {
      ox: baseX + (dx / dist) * f,
      oy: baseY + (dy / dist) * f,
    };
  }
  return { ox: baseX, oy: baseY };
}

/** ~30 FPS – menej práce na GPU pri plnej viditeľnosti */
const MIN_FRAME_MS = 1000 / 30;

const DEFAULT_TEXT_MASK = ".hero-top-text-cluster";

export type HeroInteractiveDotsProps = {
  /** Farba bodiek (default čierna ako hero); pre svetlé pozadie napr. rgba(29,31,35,0.1) */
  dotColor?: string;
  /** Selektor bloku s textom: bodky sa v ňom nevykreslia (maska). */
  textMaskSelector?: string;
  /**
   * Ak false: statická mriežka bez nepretržitej animácie a bez interakcie myšou
   * (menej JS/GPU). Hero nechaj true.
   */
  pointerInteraction?: boolean;
};

export function HeroInteractiveDots({
  dotColor = DEFAULT_DOT_COLOR,
  textMaskSelector = DEFAULT_TEXT_MASK,
  pointerInteraction = true,
}: HeroInteractiveDotsProps = {}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -99999, y: -99999 });
  const rafRef = useRef(0);
  const lastFrameTimeRef = useRef(0);
  const glyphMaskRef = useRef<ReturnType<typeof buildGlyphMask>>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let cancelled = false;

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let heroVisible = true;

    /** Bodky s „repulse“ len na šírku lg+ (myš); na mobile statická mriežka. */
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    let pointerDesktop = mqDesktop.matches;
    const repulseOff = () =>
      reducedMotion || !pointerDesktop || !pointerInteraction;

    const rebuildGlyphMask = () => {
      const shell = wrap.parentElement;
      const cluster = shell?.querySelector(
        textMaskSelector,
      ) as HTMLElement | null;
      if (!cluster || w < 1 || h < 1) {
        glyphMaskRef.current = null;
        return;
      }
      const rects = collectGlyphRects(cluster, wrap, w, h);
      glyphMaskRef.current = buildGlyphMask(w, h, rects);
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      rebuildGlyphMask();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mask = glyphMaskRef.current;

      for (let x = GRID / 2; x < w; x += GRID) {
        for (let y = GRID / 2; y < h; y += GRID) {
          const { ox, oy } = getRepulsed(x, y, mx, my, repulseOff());
          if (isOverGlyph(ox, oy, mask)) continue;
          ctx.beginPath();
          ctx.arc(ox, oy, DOT_RADIUS, 0, Math.PI * 2);
          ctx.fillStyle = dotColor;
          ctx.fill();
        }
      }
    };

    const cancelLoop = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
      }
    };

    const loop = (time: number) => {
      if (cancelled || !heroVisible) return;
      if (time - lastFrameTimeRef.current < MIN_FRAME_MS) {
        rafRef.current = requestAnimationFrame(loop);
        return;
      }
      lastFrameTimeRef.current = time;
      draw();
      rafRef.current = requestAnimationFrame(loop);
    };

    const scheduleLoop = () => {
      if (cancelled || repulseOff() || !heroVisible) return;
      cancelLoop();
      lastFrameTimeRef.current = 0;
      rafRef.current = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      const inside =
        e.clientX >= r.left &&
        e.clientX <= r.right &&
        e.clientY >= r.top &&
        e.clientY <= r.bottom;
      if (inside) {
        mouseRef.current = {
          x: e.clientX - r.left,
          y: e.clientY - r.top,
        };
      } else {
        mouseRef.current = { x: -99999, y: -99999 };
      }
    };

    const onPointerModeChange = () => {
      pointerDesktop = mqDesktop.matches;
      mouseRef.current = { x: -99999, y: -99999 };
      if (!pointerDesktop) {
        window.removeEventListener("mousemove", onMove);
        cancelLoop();
        draw();
      } else if (pointerInteraction) {
        window.addEventListener("mousemove", onMove, { passive: true });
        if (!reducedMotion && heroVisible) scheduleLoop();
      } else {
        draw();
      }
    };

    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });

    ro.observe(wrap);
    const shell = wrap.parentElement;
    if (shell) ro.observe(shell);
    const cluster = shell?.querySelector(
      textMaskSelector,
    ) as HTMLElement | null;
    if (cluster) ro.observe(cluster);

    resize();

    void document.fonts.ready.then(() => {
      if (cancelled) return;
      rebuildGlyphMask();
      draw();
    });

    if (pointerDesktop && pointerInteraction) {
      window.addEventListener("mousemove", onMove, { passive: true });
    }
    mqDesktop.addEventListener("change", onPointerModeChange);

    let io: IntersectionObserver | null = null;
    if (shell) {
      io = new IntersectionObserver(
        (entries) => {
          const e = entries[0];
          if (!e) return;
          heroVisible = e.isIntersecting;
          if (heroVisible) {
            draw();
            if (!repulseOff()) scheduleLoop();
          } else {
            cancelLoop();
          }
        },
        { root: null, rootMargin: "0px 0px 80px 0px", threshold: 0 },
      );
      io.observe(shell);
    }

    if (reducedMotion) {
      draw();
    } else if (heroVisible && !repulseOff()) {
      scheduleLoop();
    } else {
      draw();
    }

    return () => {
      cancelled = true;
      mqDesktop.removeEventListener("change", onPointerModeChange);
      if (pointerInteraction) {
        window.removeEventListener("mousemove", onMove);
      }
      ro.disconnect();
      io?.disconnect();
      cancelLoop();
    };
  }, [dotColor, textMaskSelector, pointerInteraction]);

  return (
    <div
      ref={wrapRef}
      className="home-hero-top-dots pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
      aria-hidden
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
