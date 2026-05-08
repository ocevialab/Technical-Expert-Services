"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

const ROTATING_CLIPS = [
  {
    src: "/assets/videos/5998116_People_Person_3840x2160.mp4",
    description: "People & craft on site",
  },
  {
    src: "/assets/videos/6474086-uhd_3840_2160_25fps.mp4",
    description: "Behind the work",
  },
] as const;

/**
 * One visible player: clips alternate when each finishes. Respects `prefers-reduced-motion`.
 */
export function AboutTeaserVideos() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [autoplay, setAutoplay] = useState(false);
  const [index, setIndex] = useState(0);

  const clip = ROTATING_CLIPS[index % ROTATING_CLIPS.length];

  useEffect(() => {
    setAutoplay(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (!autoplay || !videoRef.current) return;
    void videoRef.current.play().catch(() => {});
  }, [autoplay, clip.src]);

  return (
    <div className="flex h-full min-h-64 w-full flex-col overflow-hidden rounded-2xl border border-primary-100 bg-neutral-950 shadow-sm sm:min-h-72 md:h-full">
      <div className="relative min-h-52 w-full flex-1 overflow-hidden bg-neutral-900 sm:min-h-56 md:min-h-64 lg:min-h-72">
        <video
          key={clip.src}
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={clip.src}
          muted
          playsInline
          autoPlay={autoplay}
          preload="metadata"
          aria-label={clip.description}
          onEnded={() => setIndex((i) => (i + 1) % ROTATING_CLIPS.length)}
        />
        {/* Legibility wash: strong at bottom, fades toward the middle of the card */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 top-[28%] bg-linear-to-t from-black/88 via-black/35 to-transparent"
          aria-hidden
        />
        <div className="pointer-events-auto absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-3 px-4 py-3.5">
          <p className="text-xs font-medium text-white drop-shadow-md sm:text-sm">Meet the company on site</p>
          <Link
            href="/about"
            className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-yellow-300 drop-shadow-md underline-offset-2 hover:text-yellow-200 hover:underline sm:text-sm"
          >
            About us
            <FaArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
