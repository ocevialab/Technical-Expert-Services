import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { SectionTag } from "@/components/ui/SectionTag";
import { site } from "@/lib/site";

type Review = {
  id: string;
  name: string;
  area: string;
  quote: string;
  posted: string;
  rating: number;
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="mt-3 flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar
          key={i}
          className={`h-3.5 w-3.5 ${i < rating ? "text-yellow-500" : "text-yellow-200"}`}
          aria-hidden
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="w-[min(100vw-2rem,300px)] shrink-0 rounded-2xl border border-primary-100 bg-white p-5 shadow-card sm:w-[320px]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-900"
            aria-hidden
          >
            {initials(review.name)}
          </div>
          <div className="min-w-0">
            <p className="truncate font-semibold text-brand-navy">{review.name}</p>
            <p className="text-xs text-neutral-500">{review.area}</p>
          </div>
        </div>
        <time className="shrink-0 text-xs text-neutral-400">{review.posted}</time>
      </div>
      <StarRow rating={review.rating} />
      <p className="mt-3 text-sm leading-relaxed text-neutral-600">{review.quote}</p>
      <Link
        href="/contact"
        className="mt-3 inline-block text-sm font-semibold text-primary-800 underline-offset-4 hover:text-brand-navy hover:underline"
      >
        Read more
      </Link>
    </article>
  );
}

const rowTop: Review[] = [
  {
    id: "1",
    name: "Omar Al Farsi",
    area: "Dubai Marina · painting",
    quote:
      "Full villa repaint with furniture still on site — crews masked everything, worked room by room, and the handover walkthrough was spotless.",
    posted: "3 weeks ago",
    rating: 5,
  },
  {
    id: "2",
    name: "Priya Menon",
    area: "JVC · plumbing",
    quote:
      "Ceiling leak from the flat above — they traced it quickly, opened only what was needed, and left the bathroom looking untouched after siliconing.",
    posted: "1 month ago",
    rating: 5,
  },
  {
    id: "3",
    name: "James Hartley",
    area: "Business Bay · commercial",
    quote:
      "Evening painting in our office corridor with zero surprise extras on the invoice. Communication on WhatsApp was clear every day.",
    posted: "6 weeks ago",
    rating: 5,
  },
  {
    id: "4",
    name: "Layla Ibrahim",
    area: "Sharjah · emergency",
    quote:
      "Burst pipe at night — someone answered on the second ring, talked us through the shut-off, and a team was on site before breakfast.",
    posted: "2 months ago",
    rating: 5,
  },
];

const rowBottom: Review[] = [
  {
    id: "5",
    name: "Raj Malhotra",
    area: "Ajman · villa exterior",
    quote:
      "Scaffolding and prep were tidy; neighbours even commented on how quiet the crew was. Finish still looks sharp after the first sandstorm week.",
    posted: "4 weeks ago",
    rating: 5,
  },
  {
    id: "6",
    name: "Sara Al Nuaimi",
    area: "Dubai Hills · kitchen",
    quote:
      "New sink, trap, and dishwasher line — coordinated with our joinery team so the countertop went back the same day.",
    posted: "5 weeks ago",
    rating: 4,
  },
  {
    id: "7",
    name: "Michael O’Brien",
    area: "JBR · apartment",
    quote:
      "Low-odour paint for our baby’s room — no smell lingering, and edges along skirting and cornice are razor clean.",
    posted: "2 weeks ago",
    rating: 5,
  },
  {
    id: "8",
    name: "Fatima Hassan",
    area: "Dubai · landlord refresh",
    quote:
      "Turnover package between tenants: patch, paint, and two minor plumbing fixes — ready for new keys on schedule.",
    posted: "1 week ago",
    rating: 5,
  },
];

function MarqueeRow({
  reviews,
  direction,
}: {
  reviews: Review[];
  direction: "left" | "right";
}) {
  return (
    <div className="relative overflow-hidden py-1">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-home-blue-soft to-transparent sm:w-16"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-home-blue-soft to-transparent sm:w-16"
        aria-hidden
      />
      <div
        className="flex w-max"
        style={{
          animation:
            direction === "left"
              ? "reviews-marquee-left 40s linear infinite"
              : "reviews-marquee-right 44s linear infinite",
        }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-5 pr-5 sm:gap-6 sm:pr-6">
            {reviews.map((r) => (
              <ReviewCard key={`${copy}-${r.id}`} review={r} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function HomeReviews() {
  return (
    <section
      id="testimonials"
      className="home-band-b min-h-svh scroll-mt-16 overflow-x-hidden px-4 py-14 sm:px-10 sm:py-20 lg:px-14 xl:px-16 [scroll-snap-align:start] [scroll-snap-stop:always]"
    >
      {/* No Reveal/GSAP: scroll-linked y/scale felt like the section sank while it filled the viewport. */}
      <div className="w-full max-w-full min-w-0">
          <div className="mb-10 flex w-full min-w-0 flex-col gap-5 sm:mb-12 sm:flex-row sm:items-start sm:gap-8 lg:gap-10">
            <div className="flex min-w-0 max-w-lg flex-col space-y-4 lg:max-w-xl">
              <SectionTag>Testimonials</SectionTag>
              <h2 className="min-w-0 max-w-full text-balance text-3xl font-normal leading-[1.15] tracking-tight text-brand-navy sm:text-4xl md:text-[2.625rem] md:leading-[1.12]">
                <span className="block">What our</span>
                <span className="mt-1 block text-brand-navy/72 sm:mt-2">customers are saying</span>
              </h2>
            </div>
            <p className="min-w-0 w-full max-w-sm text-pretty text-base leading-relaxed text-neutral-600 sm:max-w-md sm:pt-0.5 sm:text-lg lg:max-w-lg">
              Real feedback from painting and plumbing clients across {site.areas}. Every job is quoted clearly and
              finished with the same site standards we expect for our own homes.
            </p>
            <div className="ml-auto flex shrink-0 sm:pt-0.5">
              <div className="flex flex-wrap items-center gap-6 rounded-2xl border border-primary-100 bg-white px-5 py-4 shadow-card sm:gap-8 sm:px-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Average rating</p>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="flex gap-0.5" aria-hidden>
                      {Array.from({ length: 5 }, (_, i) => (
                        <FaStar key={i} className="h-4 w-4 text-yellow-500" />
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-brand-navy">4.9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5 sm:space-y-6">
            <MarqueeRow reviews={rowTop} direction="right" />
            <MarqueeRow reviews={rowBottom} direction="left" />
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-neutral-500 sm:mt-12">
            Quotes shown as typical client feedback; names and timelines are illustrative. Ask us for references on
            your next project.
          </p>
      </div>
    </section>
  );
}
