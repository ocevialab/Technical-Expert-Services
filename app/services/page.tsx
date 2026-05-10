import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaBriefcase,
  FaBuilding,
  FaBroom,
  FaCheck,
  FaFaucet,
  FaFaucetDrip,
  FaGauge,
  FaHouseChimney,
  FaKitchenSet,
  FaPaintbrush,
  FaScrewdriverWrench,
  FaShieldHalved,
  FaShower,
  FaTemperatureHalf,
  FaToilet,
  FaWandSparkles,
  FaWhatsapp,
  FaWrench,
} from "react-icons/fa6";
import { Reveal } from "@/components/motion/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import { site, whatsappHref } from "@/lib/site";

/** ScrollTrigger: play when section top reaches 70% down the viewport (= 30% above bottom). */
const REVEAL_SERVICES = "top 70%";
const PAGE_GUTTER = "px-8 sm:px-10 lg:px-14 xl:px-16";
const BAND_PY = "py-14 sm:py-20";

const PAINTING_IMG =
  "/assets/handyman-painting-wall-with-roller-brush-dipped-white-paint-handyman-renovating-apartment-redecoration-home-construction-while-renovating-improving-repair-decorating.jpg";
/** On-site trade work — pairs with plumbing / maintenance story */
const PLUMBING_IMG = "/assets/pexels-mario-vasquez-rioja-560959392-17014386.jpg";

const painting: { Icon: IconType; title: string; desc: string }[] = [
  {
    Icon: FaPaintbrush,
    title: "Interior painting",
    desc: "Living areas, bedrooms, kitchens, and corridors with low-odour options where needed.",
  },
  {
    Icon: FaHouseChimney,
    title: "Exterior painting",
    desc: "Weather-resistant systems for villas and low-rise facades, including prep and repair.",
  },
  {
    Icon: FaBuilding,
    title: "Villa & apartment painting",
    desc: "Move-in / move-out packages, landlord refreshes, and full-building cycles.",
  },
  {
    Icon: FaBriefcase,
    title: "Office & commercial",
    desc: "Evening and weekend slots to minimise downtime for shops and offices.",
  },
  {
    Icon: FaScrewdriverWrench,
    title: "Wall repair & putty",
    desc: "Cracks, damp marks, and surface levelling before top coats.",
  },
  {
    Icon: FaWandSparkles,
    title: "Decorative & texture",
    desc: "Feature walls, stucco-style finishes, and designer palettes on request.",
  },
];

const plumbing: { Icon: IconType; title: string; desc: string }[] = [
  {
    Icon: FaFaucetDrip,
    title: "Water leakage repair",
    desc: "Ceilings, walls, and concealed lines traced and fixed with minimal disruption.",
  },
  {
    Icon: FaWrench,
    title: "Pipe repair",
    desc: "Copper, PEX, and PVC repairs; pressure testing after work.",
  },
  {
    Icon: FaBroom,
    title: "Drain blockage cleaning",
    desc: "Kitchen, bathroom, and main lines cleared with the right tools for the job.",
  },
  {
    Icon: FaShower,
    title: "Bathroom plumbing",
    desc: "Showers, mixers, WC sets, siliconing, and concealed cisterns.",
  },
  {
    Icon: FaKitchenSet,
    title: "Kitchen plumbing",
    desc: "Sinks, dishwashers, instant heaters, and appliance hook-ups.",
  },
  {
    Icon: FaTemperatureHalf,
    title: "Water heater install & repair",
    desc: "Storage and instant units — electrical connection by your licensed electrician.",
  },
  {
    Icon: FaFaucet,
    title: "Taps, showers & mixers",
    desc: "Replacement, reseating, and cartridge upgrades.",
  },
  {
    Icon: FaToilet,
    title: "Toilet repair",
    desc: "Flushes, fill valves, seals, and minor pan issues.",
  },
  {
    Icon: FaGauge,
    title: "Pump & tank work",
    desc: "Booster sets, pressure issues, and tank inlet/outlet maintenance.",
  },
];

const paintingIntroBullets = [
  "Colour consultation and sample patches when you want certainty before full coverage.",
  "Protection for floors and fixtures; dust-conscious sanding and vacuum-assisted prep.",
  "Acrylic, washable, and moisture-tolerant systems matched to each room.",
] as const;

const plumbingIntroBullets = [
  "Leak tracing before rip-out — we explain what failed and what we are fixing.",
  "Pressure checks after repairs on supply lines where appropriate.",
  "Emergency line for urgent water issues across our service areas.",
] as const;

function ServiceCard({
  Icon,
  title,
  desc,
}: {
  Icon: IconType;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-primary-100/80 bg-white/90 p-6 shadow-card transition-shadow hover:shadow-card-hover">
      <div className="mb-4 text-brand-asset">
        <Icon className="h-9 w-9" aria-hidden />
      </div>
      <h3 className="mb-2 text-xl font-normal text-brand-navy">{title}</h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-600">{desc}</p>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-primary-100/80 pt-4">
        <span className="text-sm font-semibold text-brand-asset">Free estimate</span>
        <Link
          href="/contact"
          className="rounded-full bg-brand-navy px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110 motion-reduce:hover:brightness-100"
        >
          Request quote
        </Link>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section
        className={`services-page-hero relative z-0 ${PAGE_GUTTER} -mt-16 pb-20 pt-24 text-center text-white sm:pb-24 sm:pt-28 lg:pb-28`}
      >
        <Reveal triggerStart={REVEAL_SERVICES} className="relative z-10">
          <div className="relative mx-auto max-w-3xl [text-shadow:0_2px_32px_rgba(5,31,50,0.72),0_1px_6px_rgba(5,31,50,0.55)]">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/95 sm:text-sm">
              Services
            </p>
            <h1 className="mt-3 text-3xl font-normal leading-tight sm:mt-4 sm:text-4xl md:text-5xl lg:text-[3.15rem]">
              Painting &amp; plumbing under one roof
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-base leading-relaxed text-white sm:mt-4 sm:text-lg">
              Villas, apartments, offices, and retail across {site.areas}. Clear scopes, disciplined crews,
              and updates you can follow from quote to sign-off.
            </p>
          </div>
        </Reveal>
      </section>

      <section
        className={`home-band-a ${PAGE_GUTTER} -mt-px pb-14 pt-[calc(1.5rem+1px)] sm:pb-20 sm:pt-[calc(2rem+1px)]`}
      >
        <Reveal triggerStart={REVEAL_SERVICES}>
          <div className="w-full">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="order-2 flex flex-col pt-1 lg:order-1 lg:max-w-xl xl:max-w-2xl">
                <SectionTag className="mb-4">Painting services</SectionTag>
                <h2 className="text-3xl font-normal leading-tight text-brand-navy md:text-4xl">
                  Finishes that survive UAE heat, humidity, and daily life
                </h2>
                <p className="mt-5 text-base leading-relaxed text-neutral-700">
                  Interior and exterior programmes with prep you can see — not just a quick coat. We phase
                  rooms so you can stay on site where practical, and we agree materials before pots open.
                </p>
                <ul className="mt-8 space-y-3.5">
                  {paintingIntroBullets.map((line) => (
                    <li key={line} className="flex gap-3 text-base leading-relaxed text-brand-navy">
                      <FaCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-asset" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-primary-100/90 shadow-card lg:aspect-auto lg:h-[clamp(17rem,30vw,24rem)] lg:max-w-none">
                  <Image
                    src={PAINTING_IMG}
                    alt="Professional painter rolling a fresh coat on an interior wall"
                    fill
                    className="object-cover object-[center_35%]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-linear-to-tr from-brand-navy/25 via-transparent to-transparent"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section
        id="painting"
        className={`home-band-b scroll-mt-24 ${PAGE_GUTTER} ${BAND_PY}`}
      >
        <Reveal triggerStart={REVEAL_SERVICES}>
          <div className="w-full">
            <SectionTag className="mb-4">What we paint</SectionTag>
            <h2 className="max-w-2xl text-3xl font-normal leading-tight text-brand-navy md:text-4xl">
              Residential and commercial painting
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">
              Interior, exterior, villas, apartments, offices, repairs, ceilings, and decorative finishes —
              quoted clearly before we start.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {painting.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className={`home-band-a ${PAGE_GUTTER} ${BAND_PY}`}>
        <Reveal triggerStart={REVEAL_SERVICES}>
          <div className="w-full">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="order-1">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-primary-100/90 shadow-card lg:aspect-auto lg:h-[clamp(17rem,30vw,24rem)]">
                  <Image
                    src={PLUMBING_IMG}
                    alt="Trade professional on site coordinating plumbing and finishing work"
                    fill
                    className="object-cover object-[center_45%]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-brand-navy/30 via-transparent to-transparent"
                    aria-hidden
                  />
                </div>
              </div>
              <div className="order-2 pt-1 lg:max-w-xl xl:max-w-2xl">
                <SectionTag className="mb-4">Plumbing services</SectionTag>
                <h2 className="text-3xl font-normal leading-tight text-brand-navy md:text-4xl">
                  Wet areas, supply lines, and emergencies — handled methodically
                </h2>
                <p className="mt-5 text-base leading-relaxed text-neutral-700">
                  From concealed leaks to blocked drains and fixture swaps, we work tidy, explain findings,
                  and leave pressure-tested supply where it matters.
                </p>
                <ul className="mt-8 space-y-3.5">
                  {plumbingIntroBullets.map((line) => (
                    <li key={line} className="flex gap-3 text-base leading-relaxed text-brand-navy">
                      <FaCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-asset" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="plumbing" className={`home-band-b scroll-mt-24 ${PAGE_GUTTER} ${BAND_PY}`}>
        <Reveal triggerStart={REVEAL_SERVICES}>
          <div className="w-full">
            <SectionTag className="mb-4">What we fix &amp; install</SectionTag>
            <h2 className="max-w-2xl text-3xl font-normal leading-tight text-brand-navy md:text-4xl">
              Plumbing services
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">
              Leakage repair, pipes, drains, wet areas, heaters, fixtures, toilets, pumps, and tanks — plus
              rapid response when water cannot wait.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {plumbing.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className={`home-band-a ${PAGE_GUTTER} ${BAND_PY}`}>
        <Reveal triggerStart={REVEAL_SERVICES}>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-5 flex justify-center text-brand-asset">
              <FaShieldHalved className="h-12 w-12" aria-hidden />
            </div>
            <h2 className="text-3xl font-normal text-brand-navy md:text-4xl">Satisfaction guarantee</h2>
            <p className="mt-4 leading-relaxed text-neutral-600">
              If something we completed is not right, we return to make it right — workmanship matters when
              you invite us into your home or office.
            </p>
          </div>
        </Reveal>
      </section>

      <section className={`home-band-b ${PAGE_GUTTER} ${BAND_PY} text-center`}>
        <Reveal triggerStart={REVEAL_SERVICES}>
          <h2 className="text-3xl font-normal text-brand-navy md:text-4xl">Ready for a scoped quote?</h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-sm leading-relaxed text-neutral-600 sm:text-base">
            Send photos on WhatsApp or tell us what rooms and fixtures are involved — we respond quickly
            across {site.areas}.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-brand-navy px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 motion-reduce:hover:brightness-100"
            >
              Contact {site.brand}
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-brand-asset bg-white/80 px-8 py-3 text-sm font-semibold text-brand-asset shadow-sm backdrop-blur-sm transition hover:bg-brand-asset hover:text-white"
            >
              <FaWhatsapp className="h-5 w-5" aria-hidden />
              WhatsApp us
            </a>
          </div>
        </Reveal>
      </section>

      <div className="home-footer-bridge w-full shrink-0" aria-hidden />
    </>
  );
}
