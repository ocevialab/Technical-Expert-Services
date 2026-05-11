"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderCssVars,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import type { GalleryProject } from "@/lib/projects";

export type ProjectCompareFields = Pick<
  GalleryProject,
  | "title"
  | "imageAlt"
  | "beforeSrc"
  | "afterSrc"
  | "beforePosition"
  | "afterPosition"
  | "beforeFilter"
  | "defaultPosition"
>;

function ComparePane({
  src,
  positionClass,
  filter,
  label,
  side,
  alt,
}: {
  src: string;
  positionClass: string;
  filter?: string;
  label: string;
  side: "before" | "after";
  alt: string;
}) {
  return (
    <div className="relative h-full min-h-0 w-full min-w-0">
      {/* Native <img>: next/image fill wraps extra nodes that break react-compare-slider clipping (one side blank). */}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover ${positionClass.replace(/\bobject-cover\b/g, "").trim()}`}
        style={filter ? { filter } : undefined}
        draggable={false}
        loading="eager"
        decoding="async"
      />
      <span
        className={`pointer-events-none absolute top-3 rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
          side === "before"
            ? "left-3 bg-brand-asset/88 text-white"
            : "right-3 bg-accent-200/95 text-brand-navy"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export function ProjectCompareSlider({
  project,
  className,
}: {
  project: ProjectCompareFields;
  className?: string;
}) {
  const sliderStyle = {
    [ReactCompareSliderCssVars.handleColor]: "#ffffff",
  } as React.CSSProperties;

  const usesPair = Boolean(project.beforeSrc && project.afterSrc && project.beforeSrc !== project.afterSrc);
  const beforeFilter = usesPair ? undefined : project.beforeFilter || undefined;
  const beforeClass = usesPair ? project.beforePosition : `object-cover ${project.beforePosition}`;
  const afterClass = usesPair ? project.afterPosition : `object-cover ${project.afterPosition}`;

  return (
    <div className={className ?? "relative aspect-3/2 w-full overflow-hidden"}>
      <ReactCompareSlider
        className="h-full w-full"
        style={sliderStyle}
        defaultPosition={project.defaultPosition}
        onlyHandleDraggable
        itemOne={
          <ComparePane
            src={project.beforeSrc}
            side="before"
            label="Before"
            positionClass={beforeClass}
            filter={beforeFilter}
            alt={`${project.imageAlt} — before`}
          />
        }
        itemTwo={
          <ComparePane
            src={project.afterSrc}
            side="after"
            label="After"
            positionClass={afterClass}
            alt={`${project.imageAlt} — after`}
          />
        }
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              backgroundColor: "#ffffff",
              border: "3px solid #4c99e0",
              boxShadow: "0 4px 14px rgba(5, 31, 50, 0.18)",
              width: "2.75rem",
              height: "2.75rem",
            }}
            linesStyle={{
              width: 3,
              opacity: 1,
              backgroundColor: "#ffffff",
            }}
          />
        }
        aria-label={`Before and after comparison: ${project.title}`}
      />
    </div>
  );
}
