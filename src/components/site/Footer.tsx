import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-24 bg-navy-deep text-white/80">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-hero">
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-gradient-sunshine" />
              <span className="font-display text-lg font-black text-white">S</span>
            </span>
            <div className="leading-tight">
              <div className="font-display text-base font-extrabold text-white">Sunshine Techno System</div>
              <div className="text-[10px] uppercase tracking-[0.14em] text-white/50">Training Institute</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Practical IT & software training in Hyderabad. Programming, testing, SAP, data & cloud —
            classroom and live online.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[
              { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
              { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
              { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
              { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-white/70 transition-colors hover:bg-sunshine hover:text-navy-deep"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ["/", "Home"], ["/about", "About"], ["/courses", "Courses"],
              ["/reviews", "Reviews"], ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-white/60 transition-colors hover:text-sunshine">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Popular Courses</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {["Java", "Python", "Selenium", "SAP", "Data Science", "AWS"].map((c) => (
              <li key={c}>
                <Link to="/courses" className="text-white/60 transition-colors hover:text-sunshine">{c}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sunshine" />
              <span>
                {siteConfig.address.line1},<br />
                {siteConfig.address.line2},<br />
                {siteConfig.address.city} — {siteConfig.address.pin}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-sunshine" />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-sunshine">{siteConfig.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-sunshine" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-sunshine break-all">{siteConfig.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Sunshine Techno System. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-sunshine">Privacy Policy</a>
            <a href="#" className="hover:text-sunshine">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
