import { FaWhatsapp } from "react-icons/fa6";
import { site, whatsappHref } from "@/lib/site";

/** Fixed bottom-right WhatsApp entry point on every page. */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      title={`WhatsApp ${site.brand}`}
      aria-label={`Open WhatsApp chat with ${site.brand}`}
      className="fixed z-40 flex h-14 w-14 items-center justify-center rounded-full p-1 text-[#25D366] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy motion-reduce:transition-none motion-reduce:hover:scale-100 sm:h-[3.75rem] sm:w-[3.75rem] bottom-[max(1.25rem,env(safe-area-inset-bottom,0.75rem))] right-[max(1.25rem,env(safe-area-inset-right,0.75rem))]"
    >
      <FaWhatsapp
        className="floating-whatsapp-icon h-8 w-8 drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)] sm:h-9 sm:w-9"
        aria-hidden
      />
    </a>
  );
}
