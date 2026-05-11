"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useCallback, useRef } from "react";
import { ProjectCompareSlider } from "@/components/gallery/ProjectCompareSlider";
import { RevealParts } from "@/components/motion/RevealParts";
import { SectionTag } from "@/components/ui/SectionTag";
import { getHomeFeaturedProjects } from "@/lib/projects";
import { site } from "@/lib/site";

const REVEAL_START = "top bottom-=28%";

function SliderNav({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex shrink-0 items-center justify-end gap-2">
      <button
        type="button"
        onClick={onPrev}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-200 bg-white text-brand-asset shadow-sm transition hover:border-primary-300 hover:bg-primary-50"
        aria-label="Scroll projects left"
      >
        <FaArrowRight className="h-4 w-4 rotate-180" aria-hidden />
      </button>
      <button
        type="button"
        onClick={onNext}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-200 bg-white text-brand-asset shadow-sm transition hover:border-primary-300 hover:bg-primary-50"
        aria-label="Scroll projects right"
      >
        <FaArrowRight className="h-4 w-4" aria-hidden />
      </button>
    </div>
  );
}

export function HomeProjectsTeaser() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const projects = getHomeFeaturedProjects();

  const scrollBy = useCallback((direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = Math.min(el.clientWidth * 0.78, 328);
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }, []);

  return (
    <section className="home-band-a overflow-x-hidden px-4 py-14 sm:px-10 sm:py-20 lg:px-14 xl:px-16">
      <RevealParts className="w-full max-w-full min-w-0" triggerStart={REVEAL_START}>
        <div className="w-full max-w-full min-w-0">
          <div className="mb-10 flex w-full min-w-0 flex-col gap-5 sm:mb-12 sm:flex-row sm:items-start sm:gap-8 lg:gap-10">
            <div className="flex min-w-0 max-w-lg flex-col space-y-4 lg:max-w-xl">
              <SectionTag data-reveal>Selected projects</SectionTag>
              <h2
                data-reveal
                className="text-balance text-3xl font-normal leading-[1.15] tracking-tight text-brand-navy sm:text-4xl md:text-[2.625rem] md:leading-[1.12]"
              >
                See the finish for yourself
              </h2>
            </div>
            <p
              data-reveal
              className="min-w-0 w-full max-w-sm text-pretty text-base leading-relaxed text-neutral-600 sm:max-w-md sm:pt-0.5 sm:text-lg sm:leading-relaxed lg:max-w-lg"
            >
              Real painting and plumbing outcomes from villas, apartments, and workplaces across {site.areas}. Drag
              each handle to compare before and after — open any card for the full case study and more photos.
            </p>
            <div data-reveal className="ml-auto flex shrink-0 sm:pt-0.5">
              <SliderNav onPrev={() => scrollBy(-1)} onNext={() => scrollBy(1)} />
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="flex min-w-0 max-w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:gap-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project) => (
              <article
                key={project.slug}
                data-reveal
                className="flex shrink-0 snap-start flex-col"
                title={`${project.title}: ${project.summary}`}
              >
                <div className="flex h-[398px] w-[min(280px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-card sm:h-[412px] sm:w-[320px] sm:rounded-3xl">
                  <ProjectCompareSlider project={project} className="relative aspect-3/2 w-full shrink-0 overflow-hidden" />
                  <div className="flex min-h-0 flex-1 flex-col border-t border-primary-100/90 px-4 pb-4 pt-3 text-left sm:px-5 sm:pb-5 sm:pt-4">
                    <h3 className="line-clamp-2 text-lg font-normal leading-snug text-brand-navy sm:text-xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 min-h-0 flex-1 text-sm leading-relaxed text-neutral-600 sm:text-base">
                      {project.summary}
                    </p>
                    <Link
                      href={`/gallery/${project.slug}`}
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-asset underline-offset-4 hover:underline"
                    >
                      Case study
                      <FaArrowRight className="h-3 w-3 shrink-0" aria-hidden />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:mt-12 sm:gap-8">
            <Link
              data-reveal
              href="/gallery"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-brand-asset bg-transparent px-8 py-3 text-sm font-semibold text-brand-asset transition hover:bg-brand-asset hover:text-white"
            >
              View gallery
            </Link>
            <Link
              data-reveal
              href="/contact"
              className="text-sm font-semibold text-primary-800 underline-offset-4 hover:text-primary-900 hover:underline"
            >
              <span className="inline-flex items-center gap-1.5">
                Request a site visit
                <FaArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
              </span>
            </Link>
          </div>
        </div>
      </RevealParts>
    </section>
  );
}
