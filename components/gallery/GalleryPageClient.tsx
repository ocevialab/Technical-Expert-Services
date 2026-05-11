"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { GalleryGridCompareCard } from "@/components/gallery/GalleryGridCompareCard";
import {
  PROJECT_CATEGORY_IDS,
  PROJECT_CATEGORY_LABELS,
  type ProjectCategoryId,
  galleryProjects,
} from "@/lib/projects";

function categoryPillClass(active: boolean) {
  return active
    ? "border-brand-asset bg-brand-asset text-white shadow-sm"
    : "border-primary-200 bg-white/90 text-brand-navy hover:border-primary-300 hover:bg-primary-50";
}

export function GalleryPageClient() {
  const [filter, setFilter] = useState<ProjectCategoryId>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return galleryProjects;
    return galleryProjects.filter((p) => p.categories.includes(filter));
  }, [filter]);

  return (
    <section
      className={`home-band-a px-8 pb-16 pt-[calc(1.5rem+1px)] sm:px-10 sm:pb-20 sm:pt-[calc(2rem+1px)] lg:px-14 xl:px-16`}
    >
      <div className="w-full">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-asset">Filter</p>
            <h2 className="mt-2 text-2xl font-normal text-brand-navy sm:text-3xl">
              Browse by type or property
            </h2>
            <p className="mt-2 text-pretty text-neutral-600">
              Tap a category to narrow the grid. Drag the handle on each card to compare before and after, then open
              the project for the full case study and more photos.
            </p>
          </div>
          <p className="text-sm text-neutral-500 lg:text-right">
            Showing <span className="font-semibold text-brand-navy">{filtered.length}</span> of{" "}
            {galleryProjects.length} projects
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-2" role="toolbar" aria-label="Project categories">
          {PROJECT_CATEGORY_IDS.map((id) => {
            const label = id === "all" ? "All" : PROJECT_CATEGORY_LABELS[id];
            return (
              <button
                key={id}
                type="button"
                onClick={() => setFilter(id)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${categoryPillClass(filter === id)}`}
                aria-pressed={filter === id}
              >
                {label}
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <p className="rounded-2xl border border-primary-100 bg-white/90 p-8 text-center text-neutral-600 shadow-card">
            No projects in this category yet. Choose <strong>All</strong> to see every job.
          </p>
        ) : (
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((project) => (
              <li key={project.slug}>
                <article
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary-100 bg-white/90 shadow-card transition-shadow hover:shadow-card-hover"
                  style={{ scrollMarginTop: "6rem" }}
                >
                  <GalleryGridCompareCard project={project} />
                  <Link
                    href={`/gallery/${project.slug}`}
                    className="flex flex-1 flex-col border-t border-primary-100/90 px-5 pb-5 pt-4 outline-none ring-brand-asset/40 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    <div className="mb-2 flex flex-wrap gap-1.5">
                      {project.categories.map((c) => (
                        <span
                          key={c}
                          className="rounded-md bg-accent-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-accent-800"
                        >
                          {PROJECT_CATEGORY_LABELS[c]}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-normal leading-snug text-brand-navy group-hover:text-brand-asset sm:text-xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-neutral-600">{project.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-asset">
                      View project
                      <FaArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
