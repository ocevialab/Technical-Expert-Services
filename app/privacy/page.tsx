import Link from "next/link";
import { site } from "@/lib/site";

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 text-brand-navy sm:px-8 sm:py-20">
      <h1 className="font-serif text-3xl font-normal tracking-tight sm:text-4xl">Privacy policy</h1>
      <p className="mt-6 text-sm leading-relaxed text-neutral-600 sm:text-base">
        {site.brand} is committed to protecting your privacy. This summary will be replaced with a full policy covering
        data we collect through this website, quotes, and job visits. For privacy-related questions, contact us at{" "}
        <a href={`mailto:${site.email}`} className="font-medium text-primary-800 underline-offset-2 hover:underline">
          {site.email}
        </a>
        .
      </p>
      <p className="mt-8">
        <Link href="/" className="text-sm font-semibold text-primary-800 hover:text-brand-navy">
          ← Back to home
        </Link>
      </p>
    </section>
  );
}
