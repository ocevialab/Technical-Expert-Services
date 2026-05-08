import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 xl:px-16">
      <Reveal>
        <h1 className="text-center text-3xl font-normal text-brand-navy sm:text-4xl">Gallery &amp; projects</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
          Before-and-after painting, plumbing repairs, and fit-out snapshots will appear here — real jobs
          from villas, apartments, and offices across the UAE.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-neutral-500">
          Categories will include painting, plumbing, villa, apartment, and commercial — filters and
          project cards are ready to plug in when your media is available.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-brand-navy hover:bg-yellow-500"
          >
            Get free quote
          </Link>
          <Link
            href="/"
            className="rounded-full border-2 border-primary-900 px-6 py-3 text-sm font-semibold text-brand-navy hover:bg-primary-900 hover:text-white"
          >
            Back to home
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
