import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";
import { SiteLogo } from "@/components/SiteLogo";
import { site, whatsappHref } from "@/lib/site";

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/#testimonials", label: "Testimonials" },
];

const supportLinks = [
  { href: "/contact", label: "Help" },
  { href: "/contact", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of service" },
  { href: "/cookies", label: "Cookies" },
];

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const base =
    "flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400";
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`${base} border-accent-400 text-accent-400 hover:bg-white/10 hover:text-accent-300`}
      >
        {children}
      </a>
    );
  }
  return (
    <span
      className={`${base} cursor-default border-white/25 text-white/35`}
      title={`${label} — add URL in lib/site.ts`}
      aria-label={`${label} (link not configured)`}
    >
      {children}
    </span>
  );
}

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-white">{title}</h3>
      <ul className="space-y-2.5 text-sm text-primary-100/90">
        {links.map(({ href, label }) => (
          <li key={`${href}-${label}`}>
            <Link href={href} className="transition-colors hover:text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const { social } = site;
  const watermark = site.brand.split(/\s+/).slice(0, 2).join(" ").toUpperCase();

  return (
    <footer className="relative mt-auto w-full overflow-hidden bg-brand-navy text-white">
      <div className="relative z-10 w-full px-8 pt-12 pb-32 sm:px-10 sm:pt-14 sm:pb-36 lg:px-14 lg:pb-40 xl:px-16">
        <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-md shrink-0">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-xl outline-offset-4"
            >
              <SiteLogo size={44} />
              <span className="text-lg font-semibold tracking-tight text-white">
                {site.brand}
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-100/90">
              {site.description}
            </p>
            <p className="mt-3 text-xs text-primary-200/80">{site.areas}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <SocialIcon href={social.facebook} label="Facebook">
                <FaFacebookF className="h-4 w-4" aria-hidden />
              </SocialIcon>
              <SocialIcon href={social.instagram} label="Instagram">
                <FaInstagram className="h-4 w-4" aria-hidden />
              </SocialIcon>
              <SocialIcon href={whatsappHref} label="WhatsApp">
                <FaWhatsapp className="h-4 w-4" aria-hidden />
              </SocialIcon>
              <SocialIcon href={social.tiktok} label="TikTok">
                <FaTiktok className="h-4 w-4" aria-hidden />
              </SocialIcon>
            </div>
            <p className="relative z-20 mt-6 text-xs text-primary-200/90 sm:mt-7">
              <a
                href={`tel:${site.phoneTel}`}
                className="font-medium text-white hover:underline"
              >
                {site.phoneDisplay}
              </a>
              <span className="mx-2 text-primary-300/80" aria-hidden>
                ·
              </span>
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-white hover:underline"
              >
                {site.email}
              </a>
            </p>
          </div>

          <div className="grid w-full max-w-xl grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-12 lg:max-w-none lg:justify-end">
            <LinkColumn title="Pages" links={pageLinks} />
            <LinkColumn title="Support" links={supportLinks} />
            <LinkColumn title="Legal" links={legalLinks} />
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-12 left-1/2 z-0 w-[120%] max-w-none -translate-x-1/2 select-none text-center font-sans text-[clamp(2.75rem,14vw,9rem)] font-black leading-none tracking-[0.06em] text-white/[0.07] [word-spacing:0.14em] sm:bottom-14"
        aria-hidden
      >
        {watermark}
      </div>

      <div className="relative z-10 w-full border-t border-white/10 px-8 py-4 text-center text-xs text-primary-100/85 sm:px-10 lg:px-14 xl:px-16">
        © {new Date().getFullYear()} {site.brand}. All rights reserved.
      </div>
    </footer>
  );
}
