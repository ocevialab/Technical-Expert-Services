import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Gallery & projects — ${site.brand}`,
  description: `Before-and-after painting and plumbing projects across ${site.areas}. Filter by job type and open each case study for more photos.`,
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
