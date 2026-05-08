"use client";

import { gsap } from "gsap";
import { useLayoutEffect, useRef, type ReactNode } from "react";

type HeroIntroRevealProps = {
  children: ReactNode;
  className?: string;
};

/**
 * One-shot hero column entrance (opacity + lift + light scale). GSAP on mount; respects reduced motion.
 */
export function HeroIntroReveal({ children, className = "" }: HeroIntroRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.set(el, { opacity: 0, y: 48, scale: 0.97 });
    const ctx = gsap.context(() => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.3,
        ease: "power3.out",
        delay: 0.08,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={`transform-gpu will-change-[opacity,transform] ${className}`}>
      {children}
    </div>
  );
}
