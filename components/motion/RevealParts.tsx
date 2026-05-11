"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "./gsap-client";

/** Mark any descendant with this attribute to stagger it in (opacity + slight lift). */
export const REVEAL_PART_ATTR = "data-reveal" as const;

type RevealPartsProps = {
  children: ReactNode;
  className?: string;
  /** GSAP ScrollTrigger `start` on the container (same vocabulary as `Reveal`). */
  triggerStart?: string;
  /** ScrollTrigger `end` (short window keeps replay predictable). */
  triggerEnd?: string;
  /** Starting vertical offset (px) — keep small for micro motion. */
  y?: number;
  /** Delay between each marked element (seconds). Keep ≤ ~0.08 per product rules. */
  staggerSec?: number;
  /** Duration of each item’s tween (seconds). */
  durationSec?: number;
};

/**
 * Container stays visible; only `[data-reveal]` descendants animate in with a calm stagger.
 * Replays on leave/re-enter (`toggleActions` matches `Reveal`). Respects reduced motion.
 */
export function RevealParts({
  children,
  className = "",
  triggerStart,
  triggerEnd = "bottom top+=12%",
  y = 28,
  staggerSec = 0.065,
  durationSec = 0.88,
}: RevealPartsProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const items = root.querySelectorAll<HTMLElement>("[data-reveal]");
    if (items.length === 0) return;

    gsap.set(items, { opacity: 0, y });

    let tl: gsap.core.Timeline;

    const ctx = gsap.context(() => {
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: triggerStart ?? "top bottom-=22%",
          end: triggerEnd,
          toggleActions: "play reverse play reverse",
        },
      });
      tl.to(items, {
        opacity: 1,
        y: 0,
        duration: durationSec,
        stagger: staggerSec,
        ease: "power3.out",
      });
    }, root);

    /** Only jump to complete if ScrollTrigger already reports past the start line.
     * Avoid a loose viewport-rect check — it can complete the timeline while content
     * is only peeking in, so the stagger never reads as visible. */
    const snapIfAlreadyVisible = () => {
      ScrollTrigger.refresh();
      const st = tl.scrollTrigger;
      if (!st) return;
      st.update();
      if (st.progress > 0) tl.progress(1);
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(snapIfAlreadyVisible);
    });

    return () => ctx.revert();
  }, [triggerStart, triggerEnd, y, staggerSec, durationSec]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
