import Link from "next/link";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { site } from "@/lib/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services#painting", label: "Painting services" },
  { href: "/services#plumbing", label: "Plumbing services" },
  { href: "/contact", label: "Emergency repairs" },
  { href: "/contact", label: "Maintenance" },
];

const areaLinks = [
  { label: "Dubai" },
  { label: "Sharjah" },
  { label: "Ajman" },
  { label: "JVC" },
  { label: "Business Bay" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-primary-200 bg-primary-100/90 text-brand-navy/80">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12 xl:px-16">
        <div>
          <h3 className="mb-1 text-lg font-normal text-brand-navy">{site.brand}</h3>
          <p className="text-xs font-medium text-primary-700/80">{site.brandFull}</p>
          <p className="mt-3 text-sm leading-relaxed">
            Premium painting and plumbing for UAE homes and businesses. Clear pricing, tidy crews,
            and fast response when it matters.
          </p>
          <ul className="mt-4 space-y-1.5 text-sm">
            <li>
              <a href={site.phoneTel} className="inline-flex items-center gap-2 hover:text-brand-navy">
                <FaPhone className="h-4 w-4 shrink-0 text-primary-700" aria-hidden />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-brand-navy">
                <FaEnvelope className="h-4 w-4 shrink-0 text-primary-700" aria-hidden />
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-normal uppercase tracking-wide text-brand-navy">Quick links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="transition-colors hover:text-brand-navy">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-normal uppercase tracking-wide text-brand-navy">Services</h3>
          <ul className="space-y-2 text-sm">
            {serviceLinks.map(({ href, label }) => (
              <li key={label}>
                <Link href={href} className="transition-colors hover:text-brand-navy">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-normal uppercase tracking-wide text-brand-navy">Service areas</h3>
          <p className="mb-2 text-sm text-primary-800/70">{site.areas}</p>
          <ul className="flex flex-wrap gap-2 text-xs text-brand-navy/85">
            {areaLinks.map(({ label }) => (
              <li key={label}>
                <span className="rounded-full bg-white px-2.5 py-1 ring-1 ring-primary-200">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-200 py-4 text-center text-xs text-primary-800/70">
        © {new Date().getFullYear()} {site.brand}. All rights reserved.
      </div>
    </footer>
  );
}
