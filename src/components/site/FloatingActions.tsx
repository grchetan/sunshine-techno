import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-data";
import { Link } from "@tanstack/react-router";

export function FloatingActions() {
  const wa = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi Sunshine Techno System, I'd like to enquire about a course.",
  )}`;
  return (
    <>
      {/* Desktop / tablet floating buttons */}
      <div className="fixed bottom-6 right-4 z-40 hidden md:flex flex-col gap-3">
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elevated transition-transform hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a
          href={`tel:${siteConfig.phone}`}
          aria-label="Call now"
          className="grid h-14 w-14 place-items-center rounded-full bg-gradient-hero text-white shadow-elevated transition-transform hover:scale-105"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden border-t border-border bg-white/95 backdrop-blur">
        <div className="grid grid-cols-3">
          <a href={`tel:${siteConfig.phone}`} className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-navy">
            <Phone className="h-4 w-4" /> Call
          </a>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-[#128C7E] border-x border-border">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <Link to="/contact" className="flex items-center justify-center gap-2 py-3 text-sm font-semibold bg-gradient-sunshine text-navy-deep">
            Enquire
          </Link>
        </div>
      </div>
    </>
  );
}
