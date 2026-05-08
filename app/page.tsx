import Link from "next/link";
import { HomeAboutTeaser } from "@/components/home/HomeAboutTeaser";
import { HomeProjectsTeaser } from "@/components/home/HomeProjectsTeaser";
import { HomeReviews } from "@/components/home/HomeReviews";
import { HomeServicesTeaser } from "@/components/home/HomeServicesTeaser";
import { HeroIntroReveal } from "@/components/motion/HeroIntroReveal";
import { HeroParallaxBg } from "@/components/motion/HeroParallaxBg";
import { site, whatsappHref } from "@/lib/site";

const tickerItems = [
  "INTERIOR PAINTING",
  "VILLA PAINTING",
  "PLUMBING REPAIR",
  "LEAK DETECTION",
  "DRAIN CLEANING",
  "EMERGENCY PLUMBING",
];

export default function HomePage() {
  return (
    <>
      <section className="relative -mt-16 flex min-h-dvh flex-col pt-24 sm:pt-28">
        <HeroParallaxBg />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/62"
          aria-hidden
        />

        <HeroIntroReveal className="relative z-10 flex w-full flex-1 flex-col items-start justify-end px-8 pb-14 pt-12 text-left sm:px-10 sm:pb-16 sm:pt-16 lg:px-14 lg:pb-20 xl:px-16">
          <p className="max-w-3xl text-sm font-semibold uppercase tracking-widest text-white/90 drop-shadow-md sm:text-base">
            {site.tagline}
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-3xl font-medium leading-[1.12] tracking-tight text-white drop-shadow-md sm:mt-5 sm:text-4xl md:max-w-4xl md:text-5xl lg:text-6xl lg:leading-[1.1]">
            Professional Painting &amp; Plumbing Services in the UAE
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-sm font-normal leading-relaxed text-white/92 drop-shadow-md sm:mt-6 sm:max-w-2xl sm:text-base md:max-w-3xl md:text-lg">
            Fast, clean, reliable home maintenance for villas, apartments,
            offices, and commercial spaces — one trusted team for paint and pipes.
          </p>
          <div className="mt-8 flex w-full max-w-lg flex-col gap-2.5 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-start sm:gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] min-w-[140px] flex-1 items-center justify-center rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-brand-navy shadow-sm transition hover:bg-yellow-500 sm:flex-none"
            >
              Get Free Quote
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] min-w-[140px] flex-1 items-center justify-center rounded-full border-2 border-white bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-brand-navy sm:flex-none"
            >
              WhatsApp Us
            </a>
            <a
              href={site.phoneTel}
              className="inline-flex min-h-[48px] min-w-[140px] flex-1 items-center justify-center rounded-full border-2 border-white/50 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 sm:flex-none"
            >
              Call Now
            </a>
          </div>
        </HeroIntroReveal>

        <div className="relative z-10 mt-auto w-full overflow-hidden bg-yellow-400 px-8 py-3.5 sm:px-10 lg:px-14 xl:px-16">
          <div className="flex w-max animate-marquee motion-reduce:animate-none">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 items-center gap-3 px-6 text-sm font-normal uppercase tracking-wide text-brand-navy sm:text-base"
              >
                {tickerItems.map((item, i) => (
                  <span key={`${copy}-${item}`} className="flex items-center gap-3">
                    {i > 0 && <span className="text-brand-navy">•</span>}
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeAboutTeaser />

      <HomeServicesTeaser />

      <HomeProjectsTeaser />

      <HomeReviews />
    </>
  );
}
