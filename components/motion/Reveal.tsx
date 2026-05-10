"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "./gsap-client";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Extra delay after the trigger fires (seconds basis in GSAP `delay`). */
  delayMs?: number;
  /** GSAP ScrollTrigger `start` (default: when block enters from bottom). */
  triggerStart?: string;
};

/**
 * Scroll-triggered fade + lift via GSAP ScrollTrigger. Replays whenever the block
 * leaves and re-enters the viewport (`play reverse play reverse`). Respects reduced motion.
 */
export function Reveal({ children, className = "", delayMs = 0, triggerStart }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.set(el, { opacity: 0, y: 72, scale: 0.97 });

    let tween: gsap.core.Tween;

    const ctx = gsap.context(() => {
      tween = gsap.to(el, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.35,
        ease: "power3.out",
        delay: delayMs / 1000,
        overwrite: "auto",
        scrollTrigger: {
          trigger: el,
          start: triggerStart ?? "top bottom-=20%",
          /** When the block has mostly left upward — reverse so it can replay on the way back */
          end: "bottom top+=15%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, el);

    /** Avoid invisible above-the-fold blocks: ST start line can sit below a peeking section’s top. */
    const snapIfAlreadyVisible = () => {
      ScrollTrigger.refresh();
      const st = tween.scrollTrigger;
      if (!st) return;
      if (st.progress > 0) {
        tween.progress(1);
        return;
      }
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const navReserve = 72;
      const intersectsViewport = r.top < vh - navReserve && r.bottom > navReserve;
      if (intersectsViewport) {
        tween.progress(1);
      }
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(snapIfAlreadyVisible);
    });

    return () => ctx.revert();
  }, [delayMs, triggerStart]);

  return (
    <div ref={ref} className={`transform-gpu will-change-[opacity,transform] ${className}`}>
      {children}
    </div>
  );
}
