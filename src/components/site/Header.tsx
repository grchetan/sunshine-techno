import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { siteConfig } from "@/lib/site-data";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/training", label: "Training" },
  { to: "/why-us", label: "Why Us" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-lg border-b border-border shadow-card"
          : "bg-white/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-navy bg-muted" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-navy hover:bg-muted/60" }}
              className="rounded-lg px-3 py-2 text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="text-navy">
            <a href={`tel:${siteConfig.phone}`}>
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </Button>
          <Button asChild variant="sunshine" size="sm">
            <Link to="/contact">Enquire Now</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-navy"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white/95 backdrop-blur">
          <nav className="container-page flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "bg-muted text-navy" }}
                inactiveProps={{ className: "text-foreground/80" }}
                className="rounded-lg px-3 py-2.5 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Button asChild variant="outline" size="sm">
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="h-4 w-4" /> Call
                </a>
              </Button>
              <Button asChild variant="sunshine" size="sm" onClick={() => setOpen(false)}>
                <Link to="/contact">Enquire</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
