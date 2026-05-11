/**
 * Shared gallery / project data for home teaser, `/gallery`, and `/gallery/[slug]`.
 * Images live under `public/assets/` — only paths that exist in the repo are referenced.
 */

export const PROJECT_CATEGORY_IDS = [
  "all",
  "painting",
  "plumbing",
  "villa",
  "apartment",
  "commercial",
] as const;

export type ProjectCategoryId = (typeof PROJECT_CATEGORY_IDS)[number];

export const PROJECT_CATEGORY_LABELS: Record<Exclude<ProjectCategoryId, "all">, string> = {
  painting: "Painting",
  plumbing: "Plumbing",
  villa: "Villa",
  apartment: "Apartment",
  commercial: "Commercial",
};

export type ProjectGalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type GalleryProject = {
  slug: string;
  title: string;
  /** Short card copy (home + gallery grid). */
  summary: string;
  /** Longer story on the detail page. */
  description: string[];
  highlights: string[];
  categories: Exclude<ProjectCategoryId, "all">[];
  /** UAE neighbourhood or city label. */
  area: string;
  imageAlt: string;
  beforeSrc: string;
  afterSrc: string;
  beforePosition: string;
  afterPosition: string;
  /** Used when `beforeSrc === afterSrc` (or legacy synthetic pair). Ignored when two different assets. */
  beforeFilter: string;
  defaultPosition: number;
  /** Sort key for the home horizontal scroller (lower first). */
  homeOrder: number | null;
  /** Extra shots on the project detail page (before/after pair is shown separately). */
  gallery: ProjectGalleryImage[];
};

const PAINT_ROLLER =
  "/assets/handyman-painting-wall-with-roller-brush-dipped-white-paint-handyman-renovating-apartment-redecoration-home-construction-while-renovating-improving-repair-decorating.jpg";
const PLUMB_ONSITE = "/assets/pexels-mario-vasquez-rioja-560959392-17014386.jpg";
const INTERIOR_A = "/assets/bg3-m.jpg";
const INTERIOR_B = "/assets/bg4-m.jpg";
const PAINT_CAN = "/assets/top-view-paint-can (1).jpg";
const SERVICE_HEADER = "/assets/serviceHeader.jpg";
const DETAIL_STILL = "/assets/image.png";
const CONTACT_HERO = "/assets/contactuspage.jpg";
const CONTACT_SUPPORT = "/assets/contactusImage2.jpg";

/** Real before/after pairs (home “Selected projects” + gallery). */
const PROJECT1_BEFORE = "/assets/project1-1-before.png";
const PROJECT1_AFTER = "/assets/project1-1-after.png";
const PROJECT1_EXTRA = "/assets/project1-1.png";
const PROJECT2_BEFORE = "/assets/project2-before.png";
const PROJECT2_AFTER = "/assets/project2-after.png";
const PROJECT3_BEFORE = "/assets/project3-before.png";
const PROJECT3_AFTER = "/assets/project3-after.png";

export const galleryProjects: GalleryProject[] = [
  {
    slug: "villa-exterior-jvc",
    title: "Villa exterior repaint — JVC",
    summary:
      "Full prep, weather-resistant coatings, and tidy masking around glazing — curb appeal restored before handover.",
    description: [
      "The façade had chalking acrylic and sun-faded bands above the roofline. We washed down, opened failed joints, and reprimed exposed masonry before two full coats of weather-flexible topcoat.",
      "Masking stayed on through a short weather window; we coordinated scaffold touch-points with security so the household could stay in place during the programme.",
    ],
    highlights: [
      "Pressure-wash and fungicidal treatment on north-facing elevations",
      "Premium exterior system with documented film thickness checks",
      "Glazing and aluminium trim fully masked; silicone renewed where failed",
    ],
    categories: ["painting", "villa"],
    area: "Jumeirah Village Circle, Dubai",
    imageAlt: "Villa exterior painting before and after",
    beforeSrc: PROJECT1_BEFORE,
    afterSrc: PROJECT1_AFTER,
    beforePosition: "object-cover object-center",
    afterPosition: "object-cover object-center",
    beforeFilter: "",
    defaultPosition: 48,
    homeOrder: 0,
    gallery: [
      { src: PROJECT1_EXTRA, alt: "Villa exterior painting project overview", caption: "Site overview during the repaint programme." },
      { src: PAINT_CAN, alt: "Paint tins and tools ready on site", caption: "Specified system — tins batched and logged." },
      { src: SERVICE_HEADER, alt: "Team briefing on site", caption: "Supervisor sign-off at end of each day." },
    ],
  },
  {
    slug: "bathroom-leak-marina",
    title: "Bathroom leak & siliconing — Dubai Marina",
    summary:
      "Ceiling stain traced, repair completed, and wet-area siliconing redone — minimal opening, tidy reinstatement.",
    description: [
      "A recurring ceiling stain under an ensuite traced to failed silicon and a slow waste weep. We opened a controlled inspection slot, renewed joints, and pressure-checked the run before closing.",
      "Finishing matched the existing paint sheen so the repair disappears into the room — photos and a short report were left for building management.",
    ],
    highlights: [
      "Moisture mapping before any rip-out",
      "Wet-area silicon replaced with mould-resistant product",
      "Ceiling made good and spot-blended to existing white",
    ],
    categories: ["plumbing", "apartment"],
    area: "Dubai Marina",
    imageAlt: "Bathroom plumbing and finishing before and after",
    beforeSrc: PROJECT2_BEFORE,
    afterSrc: PROJECT2_AFTER,
    beforePosition: "object-[center_55%]",
    afterPosition: "object-[center_40%]",
    beforeFilter: "",
    defaultPosition: 52,
    homeOrder: 1,
    gallery: [
      { src: PROJECT2_BEFORE, alt: "Bathroom repair area before completion", caption: "Condition at survey before siliconing and reinstatement." },
      { src: PROJECT2_AFTER, alt: "Bathroom repair area after completion", caption: "Finished wet area and ceiling blend." },
      { src: CONTACT_SUPPORT, alt: "Customer coordination", caption: "We kept the owner updated on access slots." },
    ],
  },
  {
    slug: "office-corridor-business-bay",
    title: "Office corridor repaint — Business Bay",
    summary:
      "Evening slots, cordoned walkways, and a durable scrubbable system so the floor could keep operating.",
    description: [
      "High-traffic corridors needed a scrubbable vinyl matt without strong odour for daytime occupancy on other floors. Works ran after 6pm with signed fire panel isolations where required.",
      "Colour was matched to landlord samples; we staged lifts floor-by-floor so wayfinding stayed legible each morning.",
    ],
    highlights: [
      "Low-odour system for occupied building rules",
      "Cordons and signage each night; full tidy for tenant arrival",
      "Durable finish rated for chair scuffs and cleaning cycles",
    ],
    categories: ["painting", "commercial"],
    area: "Business Bay, Dubai",
    imageAlt: "Commercial corridor painting before and after",
    beforeSrc: PROJECT3_BEFORE,
    afterSrc: PROJECT3_AFTER,
    beforePosition: "object-[center_45%]",
    afterPosition: "object-[center_35%]",
    beforeFilter: "",
    defaultPosition: 44,
    homeOrder: 2,
    gallery: [
      { src: PROJECT3_BEFORE, alt: "Office corridor before repaint", caption: "High-traffic passage before evening programme." },
      { src: PROJECT3_AFTER, alt: "Office corridor after repaint", caption: "Scrubbable finish with even light and colour." },
      { src: SERVICE_HEADER, alt: "Site supervisor on commercial project", caption: "Building manager walk-through before handover." },
    ],
  },
  {
    slug: "emergency-pipe-sharjah",
    title: "Emergency pipe repair — Sharjah",
    summary:
      "Pressure-tested copper repair after a concealed line weep — site left clean and documented for your records.",
    description: [
      "A concealed hot line weeped into a service cupboard. We isolated, drained down the affected leg, and sleeved the failed joint with a documented copper repair.",
      "Reinstatement included insulation and labels so future maintenance is straightforward — photos attached to your invoice pack.",
    ],
    highlights: [
      "Fast isolation and make-safe on arrival",
      "Pressure test recorded after repair",
      "Cupboard reinstated same evening where access allowed",
    ],
    categories: ["plumbing", "villa"],
    area: "Sharjah",
    imageAlt: "Plumbing repair work before and after",
    beforeSrc: PLUMB_ONSITE,
    afterSrc: PLUMB_ONSITE,
    beforePosition: "object-[center_50%]",
    afterPosition: "object-[center_58%]",
    beforeFilter: "brightness(0.74) saturate(0.7)",
    defaultPosition: 50,
    homeOrder: 3,
    gallery: [
      { src: INTERIOR_A, alt: "Service cupboard after reinstatement", caption: "Insulation and access labels restored." },
      { src: DETAIL_STILL, alt: "Joint detail after repair", caption: "Swept joints and dry test before close-up." },
    ],
  },
  {
    slug: "retail-storefront-ajman",
    title: "Retail storefront refresh — Ajman",
    summary:
      "High-traffic shopfront prep, brand colours matched to sample boards, and a fast reopen window so trading could resume.",
    description: [
      "The unit needed a tight reopen window. We matched brand greens to signed-off sample boards, masked shopfront glazing, and ran base + two finish coats overnight where the mall rules allowed.",
      "Floor protection and dust barriers kept the sales floor usable for partial trading during the programme.",
    ],
    highlights: [
      "Colour match to approved sample boards",
      "Phased work so partial trading could continue",
      "Scuff-resistant finish at dado and counter heights",
    ],
    categories: ["painting", "commercial"],
    area: "Ajman",
    imageAlt: "Retail shop interior painting before and after",
    beforeSrc: PAINT_CAN,
    afterSrc: PAINT_ROLLER,
    beforePosition: "object-[center_33%]",
    afterPosition: "object-[center_46%]",
    beforeFilter: "",
    defaultPosition: 48,
    homeOrder: 4,
    gallery: [
      { src: INTERIOR_B, alt: "Retail interior after refresh", caption: "Brand colours rolled wall-to-wall." },
      { src: SERVICE_HEADER, alt: "Site coordination", caption: "Mall access and noise curfew respected." },
    ],
  },
  {
    slug: "kitchen-sink-dubai-hills",
    title: "Kitchen sink & waste rework — Dubai Hills",
    summary:
      "New sink bowl, trap, and waste run with leak-free joints — coordinated with your countertop supplier for a clean cut-in.",
    description: [
      "The existing composite sink cracked at the bowl corner. We templated the replacement, coordinated cut-in with the countertop team, and renewed the trap and waste with accessible joints.",
      "Silicon and splashback edges were renewed so the wet zone reads crisp for handover photos.",
    ],
    highlights: [
      "Leak test on waste and trap before silicone",
      "Coordinated cut-in with countertop supplier",
      "Photos of serial numbers for warranty file",
    ],
    categories: ["plumbing", "villa"],
    area: "Dubai Hills",
    imageAlt: "Kitchen plumbing installation before and after",
    beforeSrc: PLUMB_ONSITE,
    afterSrc: INTERIOR_B,
    beforePosition: "object-[center_48%]",
    afterPosition: "object-[center_62%]",
    beforeFilter: "",
    defaultPosition: 54,
    homeOrder: 5,
    gallery: [
      { src: PAINT_ROLLER, alt: "Finished kitchen run", caption: "Clean lines after bowl and waste upgrade." },
      { src: INTERIOR_A, alt: "Under-sink access after work", caption: "Accessible joints for future service." },
    ],
  },
  {
    slug: "apartment-repaint-difc",
    title: "Full apartment repaint — DIFC",
    summary:
      "Two-bed plus study refreshed between tenancies: filled picture holes, ceiling flatness pass, and a warm white palette for viewings.",
    description: [
      "Landlord turnover with a one-week window. We staged room-by-room dust barriers, filled and sanded all previous fixings, and rolled ceilings first before walls in the agreed LRV.",
      "Skirting and architraves were caulked and finished in a durable trim semi-gloss that survives chair bumps during viewings.",
    ],
    highlights: [
      "Room-by-room sequencing for dust control",
      "Ceiling flatness pass under raking light",
      "Keysafe / building concierge access handled for you",
    ],
    categories: ["painting", "apartment"],
    area: "DIFC, Dubai",
    imageAlt: "Apartment interior repaint before and after",
    beforeSrc: INTERIOR_B,
    afterSrc: INTERIOR_A,
    beforePosition: "object-[center_42%]",
    afterPosition: "object-[center_38%]",
    beforeFilter: "brightness(0.82) saturate(0.85)",
    defaultPosition: 46,
    homeOrder: null,
    gallery: [
      { src: PAINT_ROLLER, alt: "Wall coating in progress", caption: "Two full coats after filled and sanded walls." },
      { src: PAINT_CAN, alt: "Materials staged at entry", caption: "Batch numbers noted for consistency." },
      { src: CONTACT_HERO, alt: "Bright living space after repaint", caption: "Ready for photography and listings." },
    ],
  },
  {
    slug: "pump-room-deck-waterproofing",
    title: "Plant deck waterproofing detail — Deira",
    summary:
      "Localized membrane reinstatement around penetrations after recurring damp reports — coordinated with MEP for shutdown slots.",
    description: [
      "Lift motor room and pump deck showed recurring damp at cable penetrations. We lifted local finishes, cleaned substrates, and reinstated compatible membrane laps with new dressings.",
      "Shutdown windows were short; we pre-cut materials and staged so each slot ended with a weather-tight detail.",
    ],
    highlights: [
      "Photo log before / during / after each penetration",
      "Compatible primer system to existing deck build-up",
      "MEP sign-off on drain-down and refill timing",
    ],
    categories: ["plumbing", "commercial"],
    area: "Deira, Dubai",
    imageAlt: "Commercial waterproofing and deck detail before and after",
    beforeSrc: SERVICE_HEADER,
    afterSrc: CONTACT_SUPPORT,
    beforePosition: "object-[center_52%]",
    afterPosition: "object-[center_45%]",
    beforeFilter: "brightness(0.78) contrast(0.92)",
    defaultPosition: 50,
    homeOrder: null,
    gallery: [
      { src: PLUMB_ONSITE, alt: "Technician on plant level", caption: "Supervised access and PPE as per building rules." },
      { src: DETAIL_STILL, alt: "Detail of dressed penetration", caption: "Dressings sealed and labelled." },
    ],
  },
  {
    slug: "villa-lobby-stairwell-mirdif",
    title: "Villa lobby & stairwell — Mirdif",
    summary:
      "Double-height stairwell and lobby in a single warm palette: stringers, skirting, and feature wall tied together for a calm arrival moment.",
    description: [
      "The brief was a cohesive arrival sequence — stair stringers, dado, and lobby feature wall in one calibrated palette with trim in a slightly deeper tone.",
      "We protected marble floors with breathable ramboard, used low-odour coatings for occupied works, and staged scaff towers only when the household was off-site.",
    ],
    highlights: [
      "Floor protection rated for marble and inlay borders",
      "Feature wall rolled and brushed for even texture under gallery lighting",
      "Touch-up kit left labelled for future picture hanging",
    ],
    categories: ["painting", "villa"],
    area: "Mirdif, Dubai",
    imageAlt: "Villa stairwell and lobby painting before and after",
    beforeSrc: CONTACT_HERO,
    afterSrc: INTERIOR_A,
    beforePosition: "object-[center_40%]",
    afterPosition: "object-[center_36%]",
    beforeFilter: "saturate(0.75) brightness(0.88)",
    defaultPosition: 45,
    homeOrder: null,
    gallery: [
      { src: INTERIOR_B, alt: "Stairwell after painting", caption: "Stringers and walls in coordinated tones." },
      { src: PAINT_ROLLER, alt: "Brush and roller finish on feature wall", caption: "Hand-finished for even sheen." },
      { src: PAINT_CAN, alt: "Materials in villa entry", caption: "Low-odour system for occupied home." },
    ],
  },
];

export function getGalleryProjectSlugs(): string[] {
  return galleryProjects.map((p) => p.slug);
}

export function getGalleryProjectBySlug(slug: string): GalleryProject | undefined {
  return galleryProjects.find((p) => p.slug === slug);
}

export function getHomeFeaturedProjects(): GalleryProject[] {
  return galleryProjects
    .filter((p) => p.homeOrder !== null)
    .sort((a, b) => (a.homeOrder ?? 0) - (b.homeOrder ?? 0));
}
