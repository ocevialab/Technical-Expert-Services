"use client";

import dynamic from "next/dynamic";
import type { GalleryProject } from "@/lib/projects";

const ProjectCompareSlider = dynamic(
  () => import("./ProjectCompareSlider").then((m) => m.ProjectCompareSlider),
  {
    ssr: false,
    loading: () => (
      <div
        className="aspect-3/2 w-full animate-pulse bg-accent-50/80"
        aria-hidden
      />
    ),
  },
);

/** Before/after slider for `/gallery` grid cards (`ssr: false` for `react-compare-slider`). */
export function GalleryGridCompareCard({ project }: { project: GalleryProject }) {
  return (
    <ProjectCompareSlider
      project={project}
      className="relative aspect-3/2 w-full shrink-0 overflow-hidden"
    />
  );
}
