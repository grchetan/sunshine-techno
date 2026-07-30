import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { siteConfig } from "@/lib/site-data";
import { PageHero } from "./about";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sunshine Techno System | Lingampally, Hyderabad" },
      { name: "description", content: "Contact Sunshine Techno System at Lingampally, Hyderabad for IT training enquiries, demo bookings and course details. Classroom + online training available." },
      { property: "og:title", content: "Contact Sunshine Techno System" },
      { property: "og:description", content: "Get in touch for course enquiries and free demo bookings." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${siteConfig.mapsQuery}&output=embed`;
  const wa = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${siteConfig.mapsQuery}`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start Your Learning Journey"
        subtitle="Reach out for course details, batch schedules, demo bookings or any other questions."
      />

      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
            <h2 className="font-display text-xl font-bold text-navy">Sunshine Techno System</h2>
            <div className="mt-5 space-y-4 text-sm">
              <ContactRow icon={MapPin} label="Address">
                {siteConfig.address.line1}<br />
                {siteConfig.address.line2}<br />
                {siteConfig.address.city} — {siteConfig.address.pin}<br />
                {siteConfig.address.state}, {siteConfig.address.country}
              </ContactRow>
              <ContactRow icon={Phone} label="Phone">
                <a href={`tel:${siteConfig.phone}`} className="hover:text-brand-blue">{siteConfig.phoneDisplay}</a>
              </ContactRow>
              <ContactRow icon={Mail} label="Email">
                <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-blue break-all">{siteConfig.email}</a>
              </ContactRow>
              <ContactRow icon={MessageCircle} label="WhatsApp">
                <a href={wa} target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue">Chat with us on WhatsApp</a>
              </ContactRow>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Button asChild variant="hero"><a href={directions} target="_blank" rel="noopener noreferrer"><Navigation className="h-4 w-4" /> Get Directions</a></Button>
              <Button asChild variant="outline"><a href={`https://${siteConfig.domain}`} target="_blank" rel="noopener noreferrer">Visit Website</a></Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title="Sunshine Techno System location"
              src={mapSrc}
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-navy">Send an Enquiry</h2>
          <p className="mt-2 text-sm text-muted-foreground">Share your details and our team will call you back with course, batch and fee information.</p>
          <div className="mt-5">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({ icon: Icon, label, children }: { icon: React.ComponentType<{ className?: string }>; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-muted text-brand-blue">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-sm text-navy">{children}</div>
      </div>
    </div>
  );
}
