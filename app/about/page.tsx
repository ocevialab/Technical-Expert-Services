import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaHelmetSafety, FaWhatsapp } from "react-icons/fa6";
import { RevealParts } from "@/components/motion/RevealParts";
import { SectionTag } from "@/components/ui/SectionTag";
import { site, whatsappHref } from "@/lib/site";

/** ScrollTrigger: play when this much of the section is in view (from bottom). */
const REVEAL_ON_ENTER = "top bottom-=28%";
/** Team block: fire when section top meets viewport line 10% above bottom edge. */
const REVEAL_TEAM_START = "top bottom-=10%";

/** Match home page horizontal gutters (hero, marquee, HomeAboutTeaser). */
const PAGE_GUTTER = "px-8 sm:px-10 lg:px-14 xl:px-16";
/** Match HomeAboutTeaser / primary content strips — not carousel px-4 sections. */
const BAND_PY = "py-14 sm:py-20";

/** About page visuals — distinct from Services page stock shots */
const ABOUT_HERO_IMG = "/assets/top-view-paint-can (1).jpg";
const ABOUT_STORY_IMG = "/assets/bg4-m.jpg";
const ABOUT_PROCESS_IMG = "/assets/bg3-m.jpg";

const team = [
  { name: "Ahmed Al Mansoori", role: "Operations & estimating", years: "UAE programmes since 2012" },
  { name: "Priya Nair", role: "Lead — painting", years: "Interior, villa & commercial finishes" },
  { name: "Rajesh Kumar", role: "Lead — plumbing", years: "Emergency response & fit-out" },
  { name: "Sara Al Hashimi", role: "Customer care", years: "Scheduling, updates & aftercare" },
] as const;

const stats = [
  { value: "15+", label: "Years combined on-site experience" },
  { value: "5K+", label: "Jobs delivered across the UAE" },
  { value: "24/7", label: "Emergency plumbing line" },
  { value: "100%", label: "Written scopes before we start" },
] as const;

const promises = [
  "Written scopes and transparent pricing — no surprise line items after we have surveyed.",
  "Supervisors and named leads you meet from day one, not anonymous rotating crews.",
  "Site discipline as standard: protection, dust control, and tidy handovers.",
  "Photo updates on WhatsApp from survey through sign-off so you always know the status.",
] as const;

const processSteps = [
  {
    step: "01",
    title: "Survey",
    body: "We review the space, photos, or plans — on site or remotely — and agree what “done” looks like.",
  },
  {
    step: "02",
    title: "Scope & quote",
    body: "You receive a clear written scope with materials grade and timeline before any deposit.",
  },
  {
    step: "03",
    title: "Schedule",
    body: "We phase rooms or trades so you can keep living or working on site whenever possible.",
  },
  {
    step: "04",
    title: "Walkthrough",
    body: "Final inspection together; snag list closed before we invoice the balance.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <section
        className={`about-hero-unified relative z-0 overflow-hidden ${PAGE_GUTTER} -mt-16 pb-20 pt-24 text-center text-white sm:pb-24 sm:pt-28 lg:pb-28`}
      >
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <Image
            src={ABOUT_HERO_IMG}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[82%_center] opacity-[0.52] sm:object-[72%_center] lg:object-right"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 18%, rgba(0,0,0,0.75) 36%, black 52%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 18%, rgba(0,0,0,0.75) 36%, black 52%)",
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
            }}
          />
        </div>
        <RevealParts triggerStart={REVEAL_ON_ENTER} className="relative z-10">
          <div className="relative mx-auto max-w-3xl [text-shadow:0_2px_20px_rgba(5,31,50,0.45)]">
            <p
              data-reveal
              className="text-xs font-semibold uppercase tracking-widest text-white/95 sm:text-sm"
            >
              About us
            </p>
            <h1
              data-reveal
              className="mt-3 text-3xl font-normal leading-tight sm:mt-4 sm:text-4xl md:text-5xl lg:text-[3.15rem]"
            >
              People behind the paint &amp; pipes
            </h1>
            <p
              data-reveal
              className="mx-auto mt-3 max-w-2xl text-pretty text-base leading-relaxed text-white sm:mt-4 sm:text-lg"
            >
              {site.brandFull}. Villas, apartments, offices, and retail across {site.areas}.
            </p>
          </div>
        </RevealParts>
      </section>

      <section
        className={`home-band-a ${PAGE_GUTTER} -mt-px pb-14 pt-[calc(1.5rem+1px)] sm:pb-20 sm:pt-[calc(2rem+1px)]`}
      >
        <RevealParts triggerStart={REVEAL_ON_ENTER}>
          <div className="w-full">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="order-2 flex flex-col lg:order-1 lg:max-w-xl xl:max-w-2xl">
                <SectionTag data-reveal className="mb-4">
                  Our story
                </SectionTag>
                <h2
                  data-reveal
                  className="text-3xl font-normal leading-tight text-brand-navy md:text-4xl"
                >
                  Built on referrals, held to a higher site standard
                </h2>
                <p data-reveal className="mt-5 leading-relaxed text-neutral-600">
                  {site.aboutTeaserIntro}
                </p>
                <p data-reveal className="mt-4 leading-relaxed text-neutral-600">
                  {site.aboutTeaserShort}
                </p>
                <ul className="mt-8 space-y-3">
                  {promises.map((line) => (
                    <li
                      key={line}
                      data-reveal
                      className="flex gap-3 text-sm leading-relaxed text-brand-navy"
                    >
                      <FaCheck
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-asset"
                        aria-hidden
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div
                  data-reveal
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-primary-100/90 shadow-card"
                >
                  <Image
                    src={ABOUT_STORY_IMG}
                    alt="Residential interior — finishing and property care across homes we serve in the UAE"
                    fill
                    className="object-cover object-center"
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

            <div className="mt-14 grid w-full grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 lg:gap-6">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  data-reveal
                  className="rounded-2xl border border-primary-100/80 bg-white/70 px-4 py-5 text-center shadow-card backdrop-blur-sm sm:px-5 sm:py-6"
                >
                  <div className="text-2xl font-normal text-brand-asset sm:text-3xl">{value}</div>
                  <div className="mt-2 text-xs leading-snug text-neutral-600 sm:text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </RevealParts>
      </section>

      <section className={`home-band-b ${PAGE_GUTTER} ${BAND_PY}`}>
        <RevealParts triggerStart={REVEAL_ON_ENTER}>
          <div className="w-full">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12 xl:gap-16">
              <div className="lg:max-w-xl">
                <h2
                  data-reveal
                  className="text-3xl font-normal leading-tight text-brand-navy md:text-4xl"
                >
                  From first message to handover
                </h2>
                <p data-reveal className="mt-5 max-w-xl leading-relaxed text-neutral-600">
                  Whether it is a single leak or a multi-room repaint, the sequence stays predictable — so you can plan
                  around us with confidence.
                </p>
                <div className="mt-10 space-y-6">
                  {processSteps.map(({ step, title, body }) => (
                    <div
                      key={step}
                      data-reveal
                      className="flex gap-4 rounded-xl border border-primary-100/70 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-sm"
                    >
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-navy text-xs font-semibold text-white"
                        aria-hidden
                      >
                        {step}
                      </span>
                      <div>
                        <h3 className="font-normal text-brand-navy">{title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-neutral-600">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative grid min-h-0 lg:h-full lg:grid-rows-[minmax(0,1fr)_auto]">
                <div
                  data-reveal
                  className="relative aspect-[4/3] min-h-[14rem] overflow-hidden rounded-2xl border border-primary-100/90 shadow-card lg:aspect-auto lg:min-h-0"
                >
                  <Image
                    src={ABOUT_PROCESS_IMG}
                    alt="Trade professional completing finishing work on site"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-brand-navy/35 via-transparent to-transparent"
                    aria-hidden
                  />
                </div>
                <p data-reveal className="mt-4 text-center text-xs text-neutral-500 lg:text-left">
                  Real crews, real sites — coordination and communication stay with us from quote to completion.
                </p>
              </div>
            </div>
          </div>
        </RevealParts>
      </section>

      <section className={`home-band-a ${PAGE_GUTTER} ${BAND_PY}`}>
        <RevealParts triggerStart={REVEAL_TEAM_START}>
          <div className="w-full">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <SectionTag data-reveal className="mx-auto mb-4">
                Team
              </SectionTag>
              <h2 data-reveal className="text-3xl font-normal text-brand-navy md:text-4xl">
                Who you work with
              </h2>
              <p data-reveal className="mt-4 text-neutral-600">
                Supervisors and discipline leads on site — aligned with one coordinator so nothing falls between trades.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map(({ name, role, years }) => (
                <div
                  key={name}
                  data-reveal
                  className="rounded-2xl border border-primary-100 bg-white/90 p-6 text-center shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-primary-100 to-accent-50 text-brand-asset">
                    <FaHelmetSafety className="h-8 w-8" aria-hidden />
                  </div>
                  <h3 className="font-normal text-brand-navy">{name}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-asset">{role}</p>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-500">{years}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealParts>
      </section>

      <section className={`home-band-b ${PAGE_GUTTER} ${BAND_PY} text-center`}>
        <RevealParts triggerStart={REVEAL_ON_ENTER}>
          <h2 data-reveal className="text-3xl font-normal text-brand-navy md:text-4xl">
            Ready for a walkthrough or quote?
          </h2>
          <p
            data-reveal
            className="mx-auto mt-5 max-w-xl text-pretty text-sm leading-relaxed text-neutral-600 sm:text-base"
          >
            Send photos on WhatsApp or book a site visit — we respond quickly across {site.areas}.
          </p>
          <div data-reveal className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
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
        </RevealParts>
      </section>

      <div className="home-footer-bridge w-full shrink-0" aria-hidden />
    </>
  );
}
