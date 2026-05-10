"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "./gsap-client";

const LANDSCAPE_IMAGES = ["/assets/bg3.png", "/assets/bg3.jpg", "/assets/bg4.jpg"];
const PORTRAIT_IMAGES  = ["/assets/bg4-m.jpg", "/assets/bg3-m.jpg", "/assets/image.png"];

const HOLD_SECONDS = 6;
const FADE_SECONDS = 1.8;

/**
 * Always renders all slides; GSAP owns opacity entirely so React never
 * re-renders this component, avoiding removeChild conflicts on orientation change.
 */
export function HeroParallaxBg() {
  const rootRef     = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root  = rootRef.current;
    const layer = parallaxRef.current;
    if (!root || !layer) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lSlides = Array.from(layer.querySelectorAll<HTMLElement>("[data-slide-l]"));
    const pSlides = Array.from(layer.querySelectorAll<HTMLElement>("[data-slide-p]"));
    const allSlides = [...lSlides, ...pSlides];

    // Hide everything to start
    gsap.set(allSlides, { opacity: 0 });

    let crossfadeTl: gsap.core.Timeline | null = null;

    function startCrossfade(slides: HTMLElement[]) {
      crossfadeTl?.kill();
      gsap.set(allSlides, { opacity: 0 });

      if (slides.length === 0) return;
      if (slides.length === 1) { gsap.set(slides[0], { opacity: 1 }); return; }

      gsap.set(slides[0], { opacity: 1 });
      crossfadeTl = gsap.timeline({ repeat: -1 });
      slides.forEach((_, i) => {
        const next = (i + 1) % slides.length;
        crossfadeTl!.to(slides[next], { opacity: 1, duration: FADE_SECONDS, ease: "power1.inOut" }, `+=${HOLD_SECONDS}`);
        crossfadeTl!.to(slides[i],    { opacity: 0, duration: FADE_SECONDS, ease: "power1.inOut" }, "<");
      });
    }

    // Start with current orientation
    startCrossfade(window.matchMedia("(orientation: portrait)").matches ? pSlides : lSlides);

    // React to orientation changes without touching React state
    const mq = window.matchMedia("(orientation: portrait)");
    const onOrientationChange = (e: MediaQueryListEvent) =>
      startCrossfade(e.matches ? pSlides : lSlides);
    mq.addEventListener("change", onOrientationChange);

    // Parallax
    const ctx = gsap.context(() => {
      gsap.set(layer, { scale: 1.06, transformOrigin: "50% 50%" });
      gsap.fromTo(layer, { y: 0 }, {
        y: 36,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.75,
        },
      });
    }, root);

    return () => {
      mq.removeEventListener("change", onOrientationChange);
      crossfadeTl?.kill();
      ctx.revert();
    };
  }, []); // runs once — no React state dependency

  return (
    <div ref={rootRef} className="absolute inset-0 overflow-hidden" aria-hidden>
      <div
        ref={parallaxRef}
        className="absolute inset-[-10%] will-change-transform motion-reduce:translate-y-0"
      >
        {LANDSCAPE_IMAGES.map((src) => (
          <div
            key={src}
            data-slide-l
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${src})`, opacity: 0 }}
          />
        ))}
        {PORTRAIT_IMAGES.map((src) => (
          <div
            key={src}
            data-slide-p
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${src})`, opacity: 0 }}
          />
        ))}
      </div>
    </div>
  );
}
