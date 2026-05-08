"use client";

import { gsap } from "gsap";
import { useLayoutEffect, useRef, type ReactNode } from "react";

type HeroIntroRevealProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Staggers each direct child row in from below, one after the other.
 * Uses GSAP on mount; respects prefers-reduced-motion.
 */
export function HeroIntroReveal({ children, className = "" }: HeroIntroRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const rows = Array.from(el.children) as HTMLElement[];

    gsap.set(rows, { opacity: 0, y: 36 });

    const ctx = gsap.context(() => {
      gsap.to(rows, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.13,
        delay: 0.1,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
