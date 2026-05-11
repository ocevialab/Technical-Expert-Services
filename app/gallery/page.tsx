import Image from "next/image";
import Link from "next/link";
import { GalleryPageClient } from "@/components/gallery/GalleryPageClient";
import { RevealParts } from "@/components/motion/RevealParts";
import { site } from "@/lib/site";

const REVEAL = "top bottom-=28%";
const PAGE_GUTTER = "px-8 sm:px-10 lg:px-14 xl:px-16";
const GALLERY_HERO_IMG = "/assets/handyman-painting-wall-with-roller-brush-dipped-white-paint-handyman-renovating-apartment-redecoration-home-construction-while-renovating-improving-repair-decorating.jpg";

export default function GalleryPage() {
  return (
    <>
      <section
        className={`gallery-page-hero relative z-0 overflow-hidden ${PAGE_GUTTER} -mt-16 pb-20 pt-24 text-center text-white sm:pb-24 sm:pt-28 lg:pb-28`}
      >
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <Image
            src={GALLERY_HERO_IMG}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_42%] opacity-[0.45] sm:object-center"
          />
          <div
            className="absolute inset-0 bg-linear-to-b from-brand-navy/55 via-brand-navy/25 to-brand-navy/65"
            aria-hidden
          />
        </div>
        <RevealParts triggerStart={REVEAL} className="relative z-10">
          <div className="relative mx-auto max-w-3xl [text-shadow:0_2px_32px_rgba(5,31,50,0.72),0_1px_6px_rgba(5,31,50,0.55)]">
            <p
              data-reveal
              className="text-xs font-semibold uppercase tracking-widest text-white/95 sm:text-sm"
            >
              Gallery
            </p>
            <h1
              data-reveal
              className="mt-3 text-3xl font-normal leading-tight sm:mt-4 sm:text-4xl md:text-5xl lg:text-[3.15rem]"
            >
              Projects &amp; before / after
            </h1>
            <p
              data-reveal
              className="mx-auto mt-3 max-w-2xl text-pretty text-base leading-relaxed text-white sm:mt-4 sm:text-lg"
            >
              Real outcomes from villas, apartments, and workplaces across {site.areas}. Filter the grid, then open any
              project for the full comparison slider and extra site photography.
            </p>
            <div data-reveal className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand-navy shadow-md transition hover:bg-accent-50"
              >
                Get free quote
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold text-white/95 underline-offset-4 hover:underline"
              >
                View services
              </Link>
            </div>
          </div>
        </RevealParts>
      </section>

      <GalleryPageClient />
    </>
  );
}
