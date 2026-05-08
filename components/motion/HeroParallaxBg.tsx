"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "./gsap-client";

const BG_A = "/assets/bg3.png";
const BG_B = "/assets/bg3.jpg";

/**
 * Hero backgrounds: two full-bleed images with a slow looping cross-fade, plus
 * subtle vertical parallax on scroll (disabled when prefers-reduced-motion).
 */
export function HeroParallaxBg() {
  const rootRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const layer = parallaxRef.current;
    if (!root || !layer) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.set(layer, { scale: 1.06, transformOrigin: "50% 50%" });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        layer,
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
        ref={parallaxRef}
        className="absolute inset-[-10%] will-change-transform motion-reduce:translate-y-0"
      >
        <div
          className="hero-bg-layer-a absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${BG_A})` }}
        />
        <div
          className="hero-bg-layer-b absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${BG_B})` }}
        />
      </div>
    </div>
  );
}
