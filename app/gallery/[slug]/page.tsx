import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GalleryCompareIsland } from "@/components/gallery/GalleryCompareIsland";
import { RevealParts } from "@/components/motion/RevealParts";
import { SectionTag } from "@/components/ui/SectionTag";
import { PROJECT_CATEGORY_LABELS, getGalleryProjectBySlug, getGalleryProjectSlugs } from "@/lib/projects";
import { site, whatsappHref } from "@/lib/site";

const REVEAL = "top bottom-=26%";
const PAGE_GUTTER = "px-8 sm:px-10 lg:px-14 xl:px-16";
const BAND_PY = "py-14 sm:py-20";

export function generateStaticParams() {
  return getGalleryProjectSlugs().map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getGalleryProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} — ${site.brand}`,
    description: project.summary,
  };
}

export default async function GalleryProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getGalleryProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <section className={`home-band-a ${PAGE_GUTTER} -mt-16 pb-12 pt-20 sm:pb-16 sm:pt-24 lg:pt-28`}>
        <nav aria-label="Breadcrumb" className="text-sm text-neutral-600">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link href="/" className="font-medium text-brand-asset hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-neutral-400">
              /
            </li>
            <li>
              <Link href="/gallery" className="font-medium text-brand-asset hover:underline">
                Gallery
              </Link>
            </li>
            <li aria-hidden className="text-neutral-400">
              /
            </li>
            <li className="font-medium text-brand-navy">{project.title}</li>
          </ol>
        </nav>

        <RevealParts triggerStart={REVEAL}>
          <div className="mt-8 w-full">
            <div data-reveal className="mb-4 flex flex-wrap gap-2">
              {project.categories.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-800"
                >
                  {PROJECT_CATEGORY_LABELS[c]}
                </span>
              ))}
            </div>
            <SectionTag data-reveal className="mb-3">
              Project
            </SectionTag>
            <h1
              data-reveal
              className="text-3xl font-normal leading-tight text-brand-navy sm:text-4xl md:text-[2.35rem]"
            >
              {project.title}
            </h1>
            <p data-reveal className="mt-3 text-sm font-medium text-brand-asset sm:text-base">
              {project.area}
            </p>
            <p data-reveal className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
              {project.summary}
            </p>
          </div>
        </RevealParts>
      </section>

      <section className={`home-band-b ${PAGE_GUTTER} ${BAND_PY} border-t border-primary-100/80`}>
        <RevealParts triggerStart={REVEAL}>
          <div data-reveal className="w-full">
            <h2 className="sr-only">Before and after</h2>
            <GalleryCompareIsland project={project} />
            <p className="mt-3 text-center text-xs text-neutral-500">Drag the handle to compare before and after.</p>
          </div>
        </RevealParts>
      </section>

      <section className={`home-band-a ${PAGE_GUTTER} ${BAND_PY} border-t border-primary-100/80`}>
        <RevealParts triggerStart={REVEAL}>
          <div className="grid w-full gap-10 lg:grid-cols-5 lg:gap-12">
            <div data-reveal className="lg:col-span-3">
              <h2 className="text-2xl font-normal text-brand-navy sm:text-3xl">On this job</h2>
              <div className="mt-5 space-y-4 text-pretty text-base leading-relaxed text-neutral-600">
                {project.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <div data-reveal className="lg:col-span-2">
              <h3 className="text-xl font-normal text-brand-navy">Highlights</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-asset" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealParts>
      </section>

      <section className={`home-band-b ${PAGE_GUTTER} ${BAND_PY} border-t border-primary-100/80`}>
        <RevealParts triggerStart={REVEAL}>
          <div className="w-full">
            <h2 data-reveal className="text-2xl font-normal text-brand-navy sm:text-3xl">
              More from this site
            </h2>
            <p data-reveal className="mt-2 max-w-2xl text-pretty text-neutral-600">
              Additional photography from the same programme — scope, protection, and handover details.
            </p>
            <ul
              data-reveal
              className="mt-10 grid gap-6 sm:grid-cols-2"
            >
              {project.gallery.map((img, i) => (
                <li
                  key={`${project.slug}-gallery-${i}`}
                  className="overflow-hidden rounded-2xl border border-primary-100 bg-white/90 shadow-card"
                >
                  <div className="relative aspect-4/3 w-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                  {img.caption ? (
                    <p className="border-t border-primary-100/80 px-4 py-3 text-sm text-neutral-600">{img.caption}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </RevealParts>
      </section>

      <section className={`home-band-a ${PAGE_GUTTER} ${BAND_PY} border-t border-primary-100/80`}>
        <RevealParts triggerStart={REVEAL}>
          <div
            data-reveal
            className="mx-auto flex max-w-3xl flex-col items-center rounded-2xl border border-primary-100 bg-white/90 px-6 py-10 text-center shadow-card sm:px-10"
          >
            <h2 className="text-2xl font-normal text-brand-navy sm:text-3xl">Planning something similar?</h2>
            <p className="mt-3 max-w-xl text-pretty text-neutral-600">
              Send photos on WhatsApp or use the contact form — we will confirm scope, timing, and a written estimate.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-brand-asset px-8 py-3 text-sm font-semibold text-white transition hover:bg-accent-600"
              >
                Get free quote
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-brand-asset bg-transparent px-8 py-3 text-sm font-semibold text-brand-asset transition hover:bg-brand-asset hover:text-white"
              >
                WhatsApp {site.brand}
              </a>
            </div>
            <Link
              href="/gallery"
              className="mt-6 text-sm font-semibold text-primary-800 underline-offset-4 hover:text-brand-navy hover:underline"
            >
              ← Back to gallery
            </Link>
          </div>
        </RevealParts>
      </section>
    </>
  );
}
