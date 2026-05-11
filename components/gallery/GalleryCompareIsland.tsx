"use client";

import dynamic from "next/dynamic";
import type { GalleryProject } from "@/lib/projects";

const ProjectCompareSlider = dynamic(
  () => import("./ProjectCompareSlider").then((m) => m.ProjectCompareSlider),
  {
    ssr: false,
    loading: () => (
      <div
        className="aspect-[16/10] w-full animate-pulse rounded-2xl border border-primary-100 bg-accent-50/80 sm:aspect-[21/9]"
        aria-hidden
      />
    ),
  },
);

/** Client-only: `react-compare-slider` is loaded without SSR to avoid hydration mismatches. */
export function GalleryCompareIsland({ project }: { project: GalleryProject }) {
  return (
    <ProjectCompareSlider
      project={project}
      className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-primary-100 shadow-card sm:aspect-[21/9]"
    />
  );
}
