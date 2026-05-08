import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaBriefcase,
  FaBuilding,
  FaBroom,
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
  FaWrench,
} from "react-icons/fa6";
import { Reveal } from "@/components/motion/Reveal";

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
    <div className="flex flex-col rounded-2xl border border-primary-100 bg-white p-6 transition-shadow hover:shadow-lg">
      <div className="mb-4 text-primary-700">
        <Icon className="h-9 w-9" aria-hidden />
      </div>
      <h3 className="mb-2 text-xl font-normal text-brand-navy">{title}</h3>
      <p className="mb-4 flex-1 text-sm text-gray-600">{desc}</p>
      <div className="mt-auto flex items-center justify-between border-t border-gray-200 pt-4">
        <span className="text-sm font-semibold text-primary-700">Free estimate</span>
        <Link
          href="/contact"
          className="rounded-lg bg-primary-700 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-primary-600"
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
      <section className="bg-linear-to-br from-primary-900 to-primary-700 px-6 py-20 text-center text-white sm:px-8 lg:px-12 xl:px-16">
        <Reveal>
          <h1 className="mb-4 text-4xl font-normal md:text-5xl">Services</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-100">
            Painting and plumbing under one roof — villas, apartments, offices, and retail across the UAE.
          </p>
        </Reveal>
      </section>

      <section id="painting" className="scroll-mt-24 bg-white px-6 py-16 sm:px-8 lg:px-12 xl:px-16">
        <Reveal>
          <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-normal text-brand-navy">Painting</h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-600">
            Interior, exterior, villa, apartment, office, wall repair, putty, ceilings, woodwork, and
            decorative finishes — quoted clearly before we start.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {painting.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          </div>
        </Reveal>
      </section>

      <section id="plumbing" className="scroll-mt-24 border-t border-primary-100 bg-primary-50/80 px-6 py-16 sm:px-8 lg:px-12 xl:px-16">
        <Reveal>
          <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-normal text-brand-navy">Plumbing</h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-600">
            Leakage repair, pipes, drains, wet areas, heaters, fixtures, toilets, pumps, and tanks — plus
            rapid response when water cannot wait.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plumbing.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-primary-50 px-6 py-14 text-center sm:px-8 lg:px-12 xl:px-16">
        <Reveal>
          <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex justify-center text-primary-700">
            <FaShieldHalved className="h-12 w-12" aria-hidden />
          </div>
          <h2 className="mb-3 text-2xl font-normal text-brand-navy">Satisfaction guarantee</h2>
          <p className="mb-6 leading-relaxed text-gray-600">
            If something we completed is not right, we return to make it right — workmanship matters when
            you invite us into your home or office.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-primary-700 px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Get a free estimate
          </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
