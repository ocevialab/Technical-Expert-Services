"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "./gsap-client";

/** Images to cycle through. Add/remove paths to change the slideshow. */
const IMAGES = ["/assets/bg3.webp", "/assets/bg4.png", "/assets/bg3.jpg"];

/** Seconds each image stays fully visible before the crossfade begins. */
const HOLD_SECONDS = 6;
/** Seconds the crossfade transition takes. */
const FADE_SECONDS = 1.8;

/**
 * Hero background: stacked images that cross-fade in a loop via GSAP,
 * with a subtle scroll-parallax on the whole layer.
 * Fully disabled when prefers-reduced-motion is set.
 */
export function HeroParallaxBg() {
  const rootRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const layer = parallaxRef.current;
    if (!root || !layer) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const slides = Array.from(
      layer.querySelectorAll<HTMLElement>("[data-slide]"),
    );

    const ctx = gsap.context(() => {
      // ── Crossfade loop ──────────────────────────────────────────────────
      if (slides.length > 1) {
        gsap.set(slides, { opacity: 0 });
        gsap.set(slides[0], { opacity: 1 });

        const tl = gsap.timeline({ repeat: -1 });
        slides.forEach((_, i) => {
          const next = (i + 1) % slides.length;
          // hold, then swap
          tl.to(
            slides[next],
            {
              opacity: 1,
              duration: FADE_SECONDS,
              ease: "power1.inOut",
            },
            `+=${HOLD_SECONDS}`,
          );
          tl.to(
            slides[i],
            {
              opacity: 0,
              duration: FADE_SECONDS,
              ease: "power1.inOut",
            },
            "<",
          );
        });
      }

      // ── Parallax on scroll ──────────────────────────────────────────────
      gsap.set(layer, { scale: 1.06, transformOrigin: "50% 50%" });
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
        },
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
        {IMAGES.map((src, i) => (
          <div
            key={src}
            data-slide
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${src})`,
              opacity: i === 0 ? 1 : 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
