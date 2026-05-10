import Link from "next/link";
import { AboutTeaserVideos } from "@/components/home/AboutTeaserVideos";
import { Reveal } from "@/components/motion/Reveal";
import { RevealTitleLines } from "@/components/motion/RevealTitleLines";
import { SectionTag } from "@/components/ui/SectionTag";
import { site } from "@/lib/site";

/** Fires once the block has entered enough of the viewport to read as “visible”. */
const ABOUT_REVEAL_START = "top bottom-=28%";

const companyCards = [
  {
    title: "Why we exist",
    body: "Homes and workplaces deserve tradespeople who communicate clearly, protect finishes, and finish what they start. That is the gap we set out to close when we formed the company.",
    href: "/about",
    cta: "Our story →",
  },
  {
    title: "Where you will find us",
    body: `We are rooted in the communities we serve — ${site.areas}. Same team ethos whether it is a single flat or a full villa programme.`,
    href: "/about",
    cta: "More about us →",
  },
] as const;

export function HomeAboutTeaser() {
  return (
    <section className="border-t border-primary-100 bg-white px-8 py-14 sm:px-10 sm:py-20 lg:px-14 xl:px-16">
      <Reveal className="w-full" triggerStart={ABOUT_REVEAL_START}>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
          <div className="flex flex-col gap-6 lg:max-w-xl xl:max-w-2xl xl:gap-8">
            <div className="space-y-4">
              <SectionTag>About us</SectionTag>
              <RevealTitleLines
                title="People behind the paint"
                subtitle="And the pipes you rely on every day"
                className="text-balance text-3xl font-normal leading-[1.15] tracking-tight text-brand-navy sm:text-4xl md:text-[2.625rem] md:leading-[1.12]"
                subtitleClassName="mt-2 block font-normal text-brand-navy/75 sm:mt-3"
                triggerStart={ABOUT_REVEAL_START}
              />
            </div>
            <p className="text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg sm:leading-relaxed">
              {site.aboutTeaserIntro}
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-brand-asset/90 bg-brand-asset p-8 shadow-card sm:p-10">
            <p className="text-pretty text-base font-normal leading-relaxed text-white/90 sm:text-lg">
              {site.aboutTeaserShort}
            </p>
            <p className="mt-8">
              <Link
                href="/about"
                className="text-sm font-semibold text-accent-200 underline-offset-4 hover:text-white hover:underline sm:text-base"
              >
                About {site.brand} →
              </Link>
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-12 w-full md:mt-14" triggerStart={ABOUT_REVEAL_START}>
        <div>
          <div className="grid gap-6 md:grid-cols-3 md:items-stretch md:gap-5 lg:gap-6">
            <div className="flex h-full flex-col rounded-2xl border border-accent-300 bg-primary-50 p-6 shadow-card sm:p-7">
              <h3 className="text-lg font-normal leading-snug text-brand-navy sm:text-xl">{companyCards[0].title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 sm:text-base">{companyCards[0].body}</p>
              <Link
                href={companyCards[0].href}
                className="mt-6 text-sm font-semibold text-primary-800 underline-offset-4 hover:text-brand-navy hover:underline"
              >
                {companyCards[0].cta}
              </Link>
            </div>

            <AboutTeaserVideos />

            <div className="flex h-full flex-col rounded-2xl border border-accent-300 bg-primary-50 p-6 shadow-card sm:p-7">
              <h3 className="text-lg font-normal leading-snug text-brand-navy sm:text-xl">{companyCards[1].title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 sm:text-base">{companyCards[1].body}</p>
              <Link
                href={companyCards[1].href}
                className="mt-6 text-sm font-semibold text-primary-800 underline-offset-4 hover:text-brand-navy hover:underline"
              >
                {companyCards[1].cta}
              </Link>
            </div>
          </div>

          <p className="mt-10 text-center">
            <Link
              href="/about"
              className="text-sm font-semibold text-primary-800 underline-offset-4 hover:text-brand-navy hover:underline sm:text-base"
            >
              Read the full story of {site.brand} →
            </Link>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
