"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "./gsap-client";

/**
 * Full-route enter only (template remounts each navigation).
 * Paint-style reveal: horizontal clip-path wipe to mirror the hero background treatment.
 */
const PAINT_DURATION = 1.05;
const REDUCED_FADE = 0.45;

export function PageTransition({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: REDUCED_FADE, ease: "power1.out" });
        return;
      }

      gsap.fromTo(
        el,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: PAINT_DURATION,
          ease: "power3.out",
          onComplete: () => {
            gsap.set(el, { clearProps: "clipPath" });
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return <div ref={ref} className="w-full">{children}</div>;
}
