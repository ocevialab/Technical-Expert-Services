import type { ReactNode } from "react";

type SectionTagProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Pill label for section headers — white surface, light blue border, navy uppercase type (Clash Grotesk via body).
 */
export function SectionTag({ children, className = "" }: SectionTagProps) {
  return (
    <p
      className={`inline-flex w-fit items-center rounded-full border border-primary-100 bg-white px-6 py-2 text-xs font-bold uppercase tracking-widest text-brand-navy ${className}`}
    >
      {children}
    </p>
  );
}
