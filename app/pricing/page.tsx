import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

const packages = [
  {
    name: "Apartment refresh",
    desc: "Interior repaint up to two bedrooms, standard ceilings, inclusive of basic wall prep.",
    note: "Priced after site survey — typical range shared on WhatsApp.",
  },
  {
    name: "Villa exterior",
    desc: "Pressure wash, repairs, primer, and premium exterior topcoat systems suited to UAE climate.",
    note: "Scaffold or access equipment quoted separately when required.",
  },
  {
    name: "Plumbing inspection",
    desc: "Visual inspection of wet areas, pressure check, and written recommendations.",
    note: `Credited toward labour if you proceed with ${site.brand} for the quoted work.`,
  },
];

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 xl:px-16">
      <Reveal>
        <h1 className="text-center text-3xl font-normal text-brand-navy sm:text-4xl">Packages &amp; pricing</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
          Every property is different — we confirm scope on site or via your photos, then share a clear,
          itemised quotation in AED. No surprise add-ons for work already agreed in writing.
        </p>
        <ul className="mx-auto mt-12 grid max-w-4xl gap-6">
          {packages.map(({ name, desc, note }) => (
            <li
              key={name}
              className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-6 text-left shadow-sm"
            >
              <h2 className="text-lg font-normal text-brand-navy">{name}</h2>
              <p className="mt-2 text-sm text-neutral-600">{desc}</p>
              <p className="mt-3 text-xs font-medium text-neutral-500">{note}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="rounded-full border-2 border-primary-900 px-6 py-3 text-sm font-semibold text-brand-navy hover:bg-primary-900 hover:text-white"
          >
            Request a tailored quote
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
