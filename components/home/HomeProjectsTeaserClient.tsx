"use client";

import dynamic from "next/dynamic";

// react-compare-slider applies inline styles differently on server vs client,
// causing a hydration mismatch. ssr: false must live inside a Client Component.
const HomeProjectsTeaser = dynamic(
  () =>
    import("@/components/home/HomeProjectsTeaser").then(
      (m) => m.HomeProjectsTeaser,
    ),
  { ssr: false },
);

export function HomeProjectsTeaserClient() {
  return <HomeProjectsTeaser />;
}
