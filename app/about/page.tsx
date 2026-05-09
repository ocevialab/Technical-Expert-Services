import Link from "next/link";
import { FaHelmetSafety } from "react-icons/fa6";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

/** ScrollTrigger: play when this much of the section is in view (from bottom). */
const REVEAL_ON_ENTER = "top bottom-=28%";

const team = [
  { name: "Ahmed Al Mansoori", role: "Operations & Estimating", years: "UAE projects since 2012" },
  { name: "Priya Nair", role: "Lead — Painting", years: "Interior & villa specialist" },
  { name: "Rajesh Kumar", role: "Lead — Plumbing", years: "Emergency & fit-out expert" },
  { name: "Sara Al Hashimi", role: "Customer Care", years: "Scheduling & follow-up" },
];

const stats = [
  { value: "15+", label: "Years combined experience" },
  { value: "5K+", label: "Jobs across the UAE" },
  { value: "24/7", label: "Emergency plumbing line" },
  { value: "100%", label: "Transparent quotations" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-linear-to-br from-primary-900 to-primary-700 px-6 py-20 text-center text-white sm:px-8 lg:px-12 xl:px-16">
        <Reveal triggerStart={REVEAL_ON_ENTER}>
          <h1 className="mb-4 text-4xl font-normal md:text-5xl">About {site.brand}</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-100">
            {site.brandFull} — serving villas, apartments, and commercial clients across Dubai, Sharjah,
            Ajman, and nearby communities.
          </p>
        </Reveal>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-12 xl:px-16">
        <Reveal triggerStart={REVEAL_ON_ENTER}>
          <div className="mx-auto grid max-w-4xl items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-normal text-brand-navy">Our story</h2>
            <p className="mb-4 leading-relaxed text-gray-600">
              {site.brand} is your UAE partner for finishing and maintenance: skilled painters for crisp
              interiors and exteriors, and licensed plumbers for everyday fixes and emergencies.
            </p>
            <p className="mb-4 leading-relaxed text-gray-600">
              We work with clear scopes, quality materials, and crews who respect your home — shoe
              covers, dust control, and tidy handovers are standard, not optional extras.
            </p>
            <p className="leading-relaxed text-gray-600">
              From a single bathroom leak to a full villa repaint before handover, we scale with your
              timeline and keep you updated on WhatsApp from survey to sign-off.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 rounded-2xl bg-primary-50 p-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-normal text-primary-700">{value}</div>
                <div className="mt-1 text-sm text-gray-600">{label}</div>
              </div>
            ))}
          </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-primary-50/70 px-6 py-16 sm:px-8 lg:px-12 xl:px-16">
        <Reveal triggerStart={REVEAL_ON_ENTER}>
          <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-center text-3xl font-normal text-brand-navy">Meet the team</h2>
          <p className="mb-12 text-center text-gray-500">
            Supervisors and leads on site every day — not anonymous subcontractors.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map(({ name, role, years }) => (
              <div
                key={name}
                className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-card transition-shadow hover:shadow-card-hover"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                  <FaHelmetSafety className="h-8 w-8" aria-hidden />
                </div>
                <h3 className="font-normal text-brand-navy">{name}</h3>
                <p className="mt-1 text-sm text-primary-700">{role}</p>
                <p className="mt-1 text-xs text-gray-500">{years}</p>
              </div>
            ))}
          </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-primary-800 px-6 py-14 text-center text-white sm:px-8 lg:px-12 xl:px-16">
        <Reveal triggerStart={REVEAL_ON_ENTER}>
          <h2 className="mb-4 text-2xl font-normal">Ready for a walkthrough or quote?</h2>
          <p className="mx-auto mb-6 max-w-lg text-sm text-primary-100">
            Send photos on WhatsApp or book a site visit — we respond quickly across {site.areas}.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-white px-8 py-3 font-normal text-brand-navy transition-colors hover:bg-primary-100"
          >
            Contact {site.brand}
          </Link>
        </Reveal>
      </section>
    </>
  );
}
