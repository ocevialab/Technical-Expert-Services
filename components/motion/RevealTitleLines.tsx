"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "./gsap-client";

type RevealTitleLinesProps = {
  title: string;
  subtitle: string;
  /** Typography / colour on the `<h2>` (first line inherits). */
  className: string;
  /** Wrapper around the second line (overflow clip + spacing + muted colour). */
  subtitleClassName?: string;
  /** ScrollTrigger `start` (same vocabulary as `Reveal`). */
  triggerStart?: string;
};

/**
 * Two-line headline: each line rises from behind a clip mask when the heading
 * crosses the viewport. Mirrors `Reveal` toggle behaviour. Respects reduced motion.
 */
export function RevealTitleLines({
  title,
  subtitle,
  className,
  subtitleClassName = "mt-2 block font-normal text-brand-navy/75 sm:mt-3",
  triggerStart = "top bottom-=26%",
}: RevealTitleLinesProps) {
  const rootRef = useRef<HTMLHeadingElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const l1 = line1Ref.current;
    const l2 = line2Ref.current;
    if (!root || !l1 || !l2) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lines = [l1, l2];
    gsap.set(lines, { yPercent: 108, opacity: 0 });

    const ctx = gsap.context(() => {
      gsap.to(lines, {
        yPercent: 0,
        opacity: 1,
        duration: 1.05,
        ease: "power3.out",
        stagger: 0.12,
        overwrite: "auto",
        scrollTrigger: {
          trigger: root,
          start: triggerStart,
          end: "bottom top+=18%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, root);

    return () => ctx.revert();
  }, [title, subtitle, triggerStart]);

  return (
    <h2 ref={rootRef} className={className}>
      <span className="block overflow-hidden pb-[0.08em]">
        <span ref={line1Ref} className="inline-block will-change-transform">
          {title}
        </span>
      </span>
      <span className={`block overflow-hidden pb-[0.08em] ${subtitleClassName}`}>
        <span ref={line2Ref} className="inline-block will-change-transform">
          {subtitle}
        </span>
      </span>
    </h2>
  );
}
