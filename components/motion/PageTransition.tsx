"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "./gsap-client";

/** Full-route enter only (template remounts each navigation; exit is handled by instant swap). */
const DURATION = 0.85;
const OFFSET_Y = 14;

export function PageTransition({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: OFFSET_Y },
        { opacity: 1, y: 0, duration: DURATION, ease: "power3.out" },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="w-full">
      {children}
    </div>
  );
}
