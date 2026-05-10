import { PageTransition } from "@/components/motion/PageTransition";

/**
 * Remounts on client navigations so {@link PageTransition} can run an enter animation
 * without wrapping every page manually.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
