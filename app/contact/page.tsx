import type { Metadata } from "next";
import Image from "next/image";
import {
  FaChevronDown,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaTriangleExclamation,
  FaWhatsapp,
} from "react-icons/fa6";
import { ContactForm } from "./ContactForm";
import { SectionTag } from "@/components/ui/SectionTag";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact — ${site.brand}`,
  description: `Get a quote or book a visit. Phone, WhatsApp, email, and inquiry form for ${site.brand} across ${site.areas}.`,
};

const PAGE_GUTTER = "px-8 sm:px-10 lg:px-14 xl:px-16";
const BAND_PY = "py-14 sm:py-20";
const CONTACT_HERO_IMG = "/assets/serviceHeader.jpg";
const FAQ_SIDE_IMG = "/assets/bg3-m.jpg";

const faqs = [
  {
    q: "How quickly will someone get back to me?",
    a: "We aim to reply within about an hour during business hours (Sun–Thu 8am–7pm, Fri 9am–2pm). For active leaks or flooding, call or WhatsApp immediately — we prioritise emergencies.",
  },
  {
    q: "Is the quote free?",
    a: "Yes. We provide a clear written scope and pricing after we understand the job — from photos, a short call, or an on-site visit when needed. There is no obligation to proceed.",
  },
  {
    q: "Which areas do you serve?",
    a: `We work across ${site.areas}. If you are unsure, send your community or building name in the inquiry form or on WhatsApp and we will confirm straight away.`,
  },
  {
    q: "Do you handle emergency plumbing?",
    a: "Yes. Our phone and WhatsApp lines are staffed for urgent water issues. We focus first on shut-off and making the site safe, then schedule the permanent repair.",
  },
  {
    q: "How do deposits and payment work?",
    a: "Larger jobs typically use a deposit against materials and scheduling, with the balance tied to agreed milestones or handover. We explain everything in writing before work starts.",
  },
  {
    q: "Can I send photos instead of a site visit?",
    a: "Often, yes — especially for painting colour changes, visible leaks, or scope planning. For concealed pipework or structural damp, we may still recommend a short survey visit.",
  },
] as const;

const contactInfoIconClass = "mt-0.5 h-6 w-6 shrink-0 text-brand-asset";

export default function ContactPage() {
  return (
    <>
      <section
        className={`contact-page-hero relative z-0 overflow-hidden ${PAGE_GUTTER} -mt-16 pb-20 pt-24 text-center text-white sm:pb-24 sm:pt-28 lg:pb-28`}
      >
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <Image
            src={CONTACT_HERO_IMG}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[78%_55%] opacity-[0.52] sm:object-[70%_50%] lg:object-[85%_center]"
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
        <div className="relative z-10">
          <div className="relative mx-auto max-w-3xl [text-shadow:0_2px_32px_rgba(5,31,50,0.72),0_1px_6px_rgba(5,31,50,0.55)]">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/95 sm:text-sm">Contact</p>
            <h1 className="mt-3 text-3xl font-normal leading-tight sm:mt-4 sm:text-4xl md:text-5xl lg:text-[3.15rem]">
              Get in touch
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-base leading-relaxed text-white sm:mt-4 sm:text-lg">
              Request a free quotation, send site photos, or book a visit. We aim to reply within about one hour
              during business hours across {site.areas}.
            </p>
          </div>
        </div>
      </section>

      <section
        className={`home-band-a ${PAGE_GUTTER} -mt-px pb-14 pt-[calc(1.5rem+1px)] sm:pb-20 sm:pt-[calc(2rem+1px)]`}
      >
        <div className="grid w-full gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="lg:max-w-xl xl:max-w-2xl">
            <SectionTag className="mb-4">Contact</SectionTag>
            <h2 className="mb-6 text-2xl font-normal text-brand-navy">How to reach us</h2>
            <ul className="space-y-5 text-foreground">
              <li className="flex items-start gap-4">
                <FaPhone className={contactInfoIconClass} aria-hidden />
                <div>
                  <p className="font-semibold text-brand-navy">Phone</p>
                  <a href={`tel:${site.phoneTel}`} className="text-brand-asset hover:underline">
                    {site.phoneDisplay}
                  </a>
                  <p className="mt-0.5 text-xs text-neutral-600">Emergency plumbing — call anytime</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaWhatsapp className={contactInfoIconClass} aria-hidden />
                <div>
                  <p className="font-semibold text-brand-navy">WhatsApp</p>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-asset hover:underline"
                  >
                    Message {site.brand}
                  </a>
                  <p className="mt-0.5 text-xs text-neutral-600">Photos welcome for faster estimates</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaEnvelope className={contactInfoIconClass} aria-hidden />
                <div>
                  <p className="font-semibold text-brand-navy">Email</p>
                  <a href={`mailto:${site.email}`} className="text-brand-asset hover:underline">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaLocationDot className={contactInfoIconClass} aria-hidden />
                <div>
                  <p className="font-semibold text-brand-navy">Service areas</p>
                  <p>{site.areas}</p>
                  <p className="mt-0.5 text-xs text-neutral-600">
                    Sun–Thu 8am–7pm · Fri 9am–2pm · Sat by appointment
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 rounded-2xl border border-accent-100 bg-accent-50/80 p-5 shadow-card">
              <p className="mb-1 flex items-center gap-2 font-normal text-brand-navy">
                <FaTriangleExclamation className="h-5 w-5 shrink-0 text-accent-700" aria-hidden />
                Active leak or flooding?
              </p>
              <p className="text-sm text-foreground">
                Call or WhatsApp immediately — we prioritise water shut-off and temporary repairs, then schedule the
                full fix.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="inline-block rounded-xl bg-brand-asset px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
                >
                  Call now
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-xl border-2 border-brand-asset bg-white px-5 py-2.5 text-sm font-semibold text-brand-asset transition-colors hover:bg-brand-asset hover:text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section
        className={`home-band-b ${PAGE_GUTTER} ${BAND_PY} border-t border-primary-100/80`}
        aria-labelledby="contact-faq-heading"
      >
        <div className="grid w-full items-stretch gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex h-full w-full flex-col lg:min-h-0">
            <div className="relative aspect-4/3 w-full min-h-0 flex-1 overflow-hidden rounded-xl border border-primary-100 bg-white/90 shadow-card lg:aspect-auto lg:min-h-56">
              <Image
                src={FAQ_SIDE_IMG}
                alt="On-site work across the UAE — ask us anything before you book"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="min-w-0">
            <SectionTag className="mb-4">FAQ</SectionTag>
            <h2 id="contact-faq-heading" className="mb-3 text-2xl font-normal text-brand-navy sm:text-3xl">
              Common questions
            </h2>
            <p className="mb-8 text-pretty text-foreground">
              Quick answers about quotes, coverage, and emergencies. Still unsure?{" "}
              <a href={whatsappHref} className="font-medium text-brand-asset hover:underline">
                WhatsApp us
              </a>{" "}
              or use the form above.
            </p>
            <div className="flex flex-col gap-3">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-primary-100 bg-white/90 px-4 py-3 shadow-card open:border-accent-200 open:shadow-card-hover sm:px-5 sm:py-4"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-left font-medium text-brand-navy marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>{item.q}</span>
                    <FaChevronDown
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-asset transition-transform duration-200 group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>
                  <p className="mt-3 border-t border-primary-100 pt-3 text-sm leading-relaxed text-foreground">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
