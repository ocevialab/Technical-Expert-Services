"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "./gsap-client";

/**
 * Subtle vertical parallax on the hero photo while the hero scrolls through view.
 * GSAP ScrollTrigger scrub; disabled when prefers-reduced-motion is set.
 */
export function HeroParallaxBg() {
  const rootRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const img = imgRef.current;
    if (!root || !img) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.set(img, { scale: 1.06, transformOrigin: "50% 50%" });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { y: 0 },
        {
          y: 36,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.75,
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="absolute inset-0 overflow-hidden" aria-hidden>
      <div
        ref={imgRef}
        className="absolute inset-[-10%] bg-[url('/assets/bg.jpg')] bg-cover bg-center bg-no-repeat will-change-transform motion-reduce:translate-y-0"
      />
    </div>
  );
}
