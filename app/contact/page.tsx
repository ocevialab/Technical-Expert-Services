import ContactPageClient from "./ContactPageClient";

/** Server entry so `/contact` RSC payload stays minimal; UI + motion live in {@link ContactPageClient}. */
export default function ContactPage() {
  return <ContactPageClient />;
}
