/** Shared marketing copy & contact placeholders — replace with real details for production. */
export const site = {
  brand: "Technical Expert Services",
  brandFull: "Painting, plumbing & property care across the UAE",
  tagline: "Expert workmanship. Clear quotes. One trusted team.",
  description:
    "Technical Expert Services — professional painting and plumbing across the UAE: villas, apartments, offices, and commercial spaces. Fast quotes by phone or WhatsApp.",
  phoneDisplay: "+971 50 123 4567",
  phoneTel: "+971501234567",
  whatsappDigits: "971501234567",
  email: "info@technicalexpertservices.ae",
  areas: "Dubai, Sharjah, Ajman, JVC, Business Bay & more",
  /** Home about teaser — lead paragraph under headline (company, not services list). */
  aboutTeaserIntro:
    "Technical Expert Services grew from repeat referrals across the UAE. We are small enough to stay accountable and organised enough to run multi-room programmes on schedule — with supervisors and leads you meet from day one.",
  /** Home about teaser — right column snapshot (culture / promise). */
  aboutTeaserShort:
    "We raise the bar on site discipline: shoe covers, dust control, and handovers you can walk through with pride. That standard applies to every crew, every visit — because reputation is the company we keep.",
  /**
   * Optional social profile URLs for the footer. Leave empty to show a muted icon (add links when ready).
   */
  social: {
    facebook: "",
    instagram: "",
    x: "",
    tiktok: "",
  },
} as const;

export const whatsappHref = `https://wa.me/${site.whatsappDigits}`;
