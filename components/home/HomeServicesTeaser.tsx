"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaPhone } from "react-icons/fa6";
import { useCallback, useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import { site, whatsappHref } from "@/lib/site";

const REVEAL_START = "top bottom-=28%";

const services = [
  {
    title: "Interior & exterior painting",
    desc: "Villas, apartments, and offices — prep, premium coatings, and clean handovers that respect your finishes.",
    href: "/services#painting",
    imagePosition: "object-[center_35%]" as const,
    imageAlt: "Interior painting and finishing work",
  },
  {
    title: "Plumbing repair & installs",
    desc: "Leaks, drains, wet rooms, pumps, and tanks. Licensed work with clear scopes and tidy sites.",
    href: "/services#plumbing",
    imagePosition: "object-[center_55%]" as const,
    imageAlt: "Plumbing and property maintenance",
  },
  {
    title: "Villa & apartment programmes",
    desc: "Move-in refreshes, landlord turnovers, and full-building cycles — phased so you can keep living or working on site.",
    href: "/services#painting",
    imagePosition: "object-[center_30%]" as const,
    imageAlt: "Villa and apartment painting project",
  },
  {
    title: "Leak tracing & concealed lines",
    desc: "Ceiling and wall leaks traced with minimal opening, pressure-tested repairs, and tidy reinstatement.",
    href: "/services#plumbing",
    imagePosition: "object-[center_50%]" as const,
    imageAlt: "Leak detection and pipe repair",
  },
  {
    title: "Drain & blockage clearing",
    desc: "Kitchen, bathroom, and main lines cleared with the right equipment — including stubborn grease and scale build-up.",
    href: "/services#plumbing",
    imagePosition: "object-[center_60%]" as const,
    imageAlt: "Drain cleaning and plumbing service",
  },
  {
    title: "Water heaters & wet-area fixtures",
    desc: "Heaters, mixers, WC sets, siliconing, and concealed cisterns — coordinated with your electrician where needed.",
    href: "/services#plumbing",
    imagePosition: "object-[center_42%]" as const,
    imageAlt: "Bathroom and water heater plumbing",
  },
  {
    title: "Office & commercial painting",
    desc: "Evening and weekend slots, low-odour options, and clear cordoning so shops and offices stay presentable.",
    href: "/services#painting",
    imagePosition: "object-[center_38%]" as const,
    imageAlt: "Commercial interior painting",
  },
  {
    title: "Emergency response",
    desc: "Active leaks and blockages get priority — call or WhatsApp for same-day support across our service areas.",
    href: "/contact",
    imagePosition: "object-[center_45%]" as const,
    imageAlt: "Trades team on a residential project",
  },
  {
    title: "Planned maintenance",
    desc: "Recurring checks and touch-ups so paint systems and pipework stay reliable between handovers.",
    href: "/contact",
    imagePosition: "object-[center_40%]" as const,
    imageAlt: "Property care and upkeep",
  },
] as const;

function SliderNav({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="flex shrink-0 items-center justify-end gap-2">
      <button
        type="button"
        onClick={onPrev}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-200 bg-white text-brand-asset shadow-sm transition hover:border-primary-300 hover:bg-primary-50"
        aria-label="Scroll services left"
      >
        <FaArrowRight className="h-4 w-4 rotate-180" aria-hidden />
      </button>
      <button
        type="button"
        onClick={onNext}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-200 bg-white text-brand-asset shadow-sm transition hover:border-primary-300 hover:bg-primary-50"
        aria-label="Scroll services right"
      >
        <FaArrowRight className="h-4 w-4" aria-hidden />
      </button>
    </div>
  );
}

function ArrowLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="absolute bottom-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-asset bg-white text-brand-asset transition hover:bg-accent-100"
      aria-label={label}
    >
      <FaArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}

export function HomeServicesTeaser() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = useCallback((direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = Math.min(el.clientWidth * 0.82, 360);
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }, []);

  return (
    <section className="overflow-x-hidden border-t border-primary-100 bg-white px-4 py-14 sm:px-10 sm:py-20 lg:px-14 xl:px-16">
      <Reveal className="w-full max-w-full min-w-0" triggerStart={REVEAL_START}>
        <div className="w-full max-w-full min-w-0">
          <div className="mb-10 flex w-full min-w-0 flex-col gap-5 sm:mb-12 sm:flex-row sm:items-start sm:gap-8 lg:gap-10">
            <div className="flex min-w-0 max-w-lg flex-col space-y-4 lg:max-w-xl">
              <SectionTag>Our services</SectionTag>
              <h2 className="min-w-0 max-w-full text-balance text-3xl font-normal leading-[1.15] tracking-tight text-brand-navy sm:text-4xl md:text-[2.625rem] md:leading-[1.12]">
                <span className="block">Painting &amp; plumbing</span>
                <span className="mt-1 block text-brand-navy/80 sm:mt-2">built for UAE properties</span>
              </h2>
            </div>
            <p className="min-w-0 w-full max-w-sm text-pretty text-base leading-relaxed text-neutral-600 sm:max-w-md sm:pt-0.5 sm:text-lg lg:max-w-lg">
              From full repaints to urgent plumbing, we scope honestly, protect your space, and finish on
              time — villas, apartments, and workplaces across {site.areas}.
            </p>
            <div className="ml-auto flex shrink-0 sm:pt-0.5">
              <SliderNav onPrev={() => scrollBy(-1)} onNext={() => scrollBy(1)} />
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="flex min-w-0 max-w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:gap-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <article className="hidden w-[min(340px,100%)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border-2 border-brand-asset/35 bg-brand-asset shadow-sm sm:flex sm:w-[360px]">
              <div className="flex flex-1 flex-col p-7 pb-6">
                <p className="text-sm font-normal uppercase tracking-wide text-accent-200">Call now</p>
                <p className="mt-3 text-base font-semibold leading-snug text-white/90 sm:text-lg">
                  Speak with our coordinator for a free quote or emergency line.
                </p>
                <div className="mt-auto pt-8">
                  <a
                    href={site.phoneTel}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-brand-asset shadow-sm transition hover:bg-accent-100"
                  >
                    <FaPhone className="h-4 w-4 shrink-0" aria-hidden />
                    {site.phoneDisplay}
                  </a>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block text-center text-sm font-semibold text-accent-200 underline-offset-4 hover:text-white hover:underline"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      Or message on WhatsApp
                      <FaArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    </span>
                  </a>
                </div>
              </div>
            </article>

            {services.map(({ title, desc, href, imagePosition, imageAlt }) => (
              <article
                key={title}
                className="flex w-[min(340px,100%)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm sm:w-[360px]"
              >
                <div className="flex flex-1 flex-col p-7 pb-4">
                  <h3 className="text-lg font-normal leading-snug text-brand-navy sm:text-xl">{title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 sm:text-base">{desc}</p>
                </div>
                <div className="relative mt-auto h-44 w-full shrink-0 border-t border-primary-100 bg-primary-50">
                  <Image
                    src="/assets/bg.jpg"
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 640px) 95vw, 360px"
                    className={`object-cover ${imagePosition}`}
                  />
                  <ArrowLink href={href} label={`View ${title}`} />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            <Link
              href="/services"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-brand-asset bg-transparent px-8 py-3 text-sm font-semibold text-brand-asset transition hover:bg-brand-asset hover:text-white"
            >
              View all services
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-primary-800 underline-offset-4 hover:text-primary-900 hover:underline"
            >
              <span className="inline-flex items-center gap-1.5">
                Book a site visit
                <FaArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
              </span>
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
