"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useCallback, useRef } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderCssVars,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import { RevealParts } from "@/components/motion/RevealParts";
import { SectionTag } from "@/components/ui/SectionTag";
import { site } from "@/lib/site";

const REVEAL_START = "top bottom-=28%";

const HERO_IMAGE = "/assets/bg.jpg";

type ProjectCard = {
  title: string;
  desc: string;
  imageAlt: string;
  /** When set with `afterSrc`, real before/after assets; otherwise `HERO_IMAGE` + filter/position. */
  beforeSrc?: string;
  afterSrc?: string;
  beforePosition: string;
  afterPosition: string;
  beforeFilter: string;
  defaultPosition: number;
};

const projects: ProjectCard[] = [
  {
    title: "Villa exterior repaint — JVC",
    desc: "Full prep, weather-resistant coatings, and tidy masking around glazing — curb appeal restored before handover.",
    imageAlt: "Villa exterior painting before and after",
    beforeSrc: "/assets/project1-1-before.png",
    afterSrc: "/assets/project1-1-after.png",
    beforePosition: "object-cover object-center",
    afterPosition: "object-cover object-center",
    beforeFilter: "",
    defaultPosition: 48,
  },
  {
    title: "Bathroom leak & siliconing — Dubai Marina",
    desc: "Ceiling stain traced, repair completed, and wet-area siliconing redone — minimal opening, tidy reinstatement.",
    imageAlt: "Bathroom plumbing and finishing before and after",
    beforeSrc: "/assets/project2-before.png",
    afterSrc: "/assets/project2-after.png",
    beforePosition: "object-[center_55%]",
    afterPosition: "object-[center_40%]",
    beforeFilter: "brightness(0.72) saturate(0.65)",
    defaultPosition: 52,
  },
  {
    title: "Office corridor repaint — Business Bay",
    desc: "Evening slots, cordoned walkways, and a durable scrubbable system so the floor could keep operating.",
    imageAlt: "Commercial corridor painting before and after",
    beforeSrc: "/assets/project3-before.png",
    afterSrc: "/assets/project3-after.png",
    beforePosition: "object-[center_45%]",
    afterPosition: "object-[center_35%]",
    beforeFilter: "grayscale(20%) brightness(0.8) contrast(0.88)",
    defaultPosition: 44,
  },
  {
    title: "Emergency pipe repair — Sharjah",
    desc: "Pressure-tested copper repair after a concealed line weep — site left clean and documented for your records.",
    imageAlt: "Plumbing repair work before and after",
    beforePosition: "object-[center_50%]",
    afterPosition: "object-[center_58%]",
    beforeFilter: "brightness(0.74) saturate(0.7)",
    defaultPosition: 50,
  },
  {
    title: "Retail storefront refresh — Ajman",
    desc: "High-traffic shopfront prep, brand colours matched to sample boards, and a fast reopen window so trading could resume.",
    imageAlt: "Retail shop interior painting before and after",
    beforePosition: "object-[center_33%]",
    afterPosition: "object-[center_46%]",
    beforeFilter: "grayscale(25%) brightness(0.8) contrast(0.9)",
    defaultPosition: 48,
  },
  {
    title: "Kitchen sink & waste rework — Dubai Hills",
    desc: "New sink bowl, trap, and waste run with leak-free joints — coordinated with your countertop supplier for a clean cut-in.",
    imageAlt: "Kitchen plumbing installation before and after",
    beforePosition: "object-[center_48%]",
    afterPosition: "object-[center_62%]",
    beforeFilter: "brightness(0.7) saturate(0.68)",
    defaultPosition: 54,
  },
];

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

function ComparePane({
  src,
  positionClass,
  filter,
  label,
  side,
  alt,
}: {
  src: string;
  positionClass: string;
  filter?: string;
  label: string;
  side: "before" | "after";
  alt: string;
}) {
  return (
    <div className="relative h-full min-h-0 w-full min-w-0">
      {/* Native <img>: next/image fill wraps extra nodes that break react-compare-slider clipping (one side blank). */}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full ${positionClass}`}
        style={filter ? { filter } : undefined}
        draggable={false}
        loading="eager"
        decoding="async"
      />
      <span
        className={`pointer-events-none absolute top-3 rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
          side === "before"
            ? "left-3 bg-brand-asset/88 text-white"
            : "right-3 bg-accent-200/95 text-brand-navy"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function ProjectCompareCard({ project }: { project: ProjectCard }) {
  const sliderStyle = {
    [ReactCompareSliderCssVars.handleColor]: "#ffffff",
  } as React.CSSProperties;

  const usesPair = Boolean(project.beforeSrc && project.afterSrc);
  const beforeSrc = project.beforeSrc ?? HERO_IMAGE;
  const afterSrc = project.afterSrc ?? HERO_IMAGE;
  const beforeFilter = usesPair ? undefined : project.beforeFilter || undefined;
  const beforeClass = usesPair
    ? project.beforePosition
    : `object-cover ${project.beforePosition}`;
  const afterClass = usesPair
    ? project.afterPosition
    : `object-cover ${project.afterPosition}`;

  return (
    <div className="relative aspect-3/2 w-full shrink-0 overflow-hidden">
      <ReactCompareSlider
        className="h-full w-full"
        style={sliderStyle}
        defaultPosition={project.defaultPosition}
        onlyHandleDraggable
        itemOne={
          <ComparePane
            src={beforeSrc}
            side="before"
            label="Before"
            positionClass={beforeClass}
            filter={beforeFilter}
            alt={`${project.imageAlt} — before`}
          />
        }
        itemTwo={
          <ComparePane
            src={afterSrc}
            side="after"
            label="After"
            positionClass={afterClass}
            alt={`${project.imageAlt} — after`}
          />
        }
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              backgroundColor: "#ffffff",
              border: "3px solid #4c99e0",
              boxShadow: "0 4px 14px rgba(5, 31, 50, 0.18)",
              width: "2.75rem",
              height: "2.75rem",
            }}
            linesStyle={{
              width: 3,
              opacity: 1,
              backgroundColor: "#ffffff",
            }}
          />
        }
        aria-label={`Before and after comparison: ${project.title}`}
      />
    </div>
  );
}

export function HomeProjectsTeaser() {
  const scrollerRef = useRef<HTMLDivElement>(null);

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
              Real painting and plumbing outcomes from villas, apartments, and
              workplaces across {site.areas}. Drag each handle to compare before
              and after — the gallery will grow as we add more cleared project
              photography.
            </p>
            <div data-reveal className="ml-auto flex shrink-0 sm:pt-0.5">
              <SliderNav
                onPrev={() => scrollBy(-1)}
                onNext={() => scrollBy(1)}
              />
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="flex min-w-0 max-w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:gap-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project) => (
              <article
                key={project.title}
                data-reveal
                className="flex shrink-0 snap-start flex-col"
                title={`${project.title}: ${project.desc}`}
              >
                <div className="flex h-[398px] w-[min(280px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-card sm:h-[412px] sm:w-[320px] sm:rounded-3xl">
                  <ProjectCompareCard project={project} />
                  <div className="flex min-h-0 flex-1 flex-col border-t border-primary-100/90 px-4 pb-4 pt-3 text-left sm:px-5 sm:pb-5 sm:pt-4">
                    <h3 className="line-clamp-2 text-lg font-normal leading-snug text-brand-navy sm:text-xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-4 min-h-0 flex-1 text-sm leading-relaxed text-neutral-600 sm:text-base">
                      {project.desc}
                    </p>
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
