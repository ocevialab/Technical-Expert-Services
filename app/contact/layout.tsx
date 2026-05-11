import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact — ${site.brand}`,
  description: `Get a quote or book a visit. Phone, WhatsApp, email, and inquiry form for ${site.brand} across ${site.areas}.`,
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
