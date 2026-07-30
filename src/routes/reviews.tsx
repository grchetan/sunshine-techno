import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, testimonials } from "@/lib/site-data";
import { PageHero } from "./about";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Student Reviews | Sunshine Techno System, Hyderabad" },
      { name: "description", content: `Rated ${siteConfig.rating.value} on ${siteConfig.rating.source} based on ${siteConfig.rating.count} reviews. Read student feedback on Java, Selenium, SAP FICO and Software Testing training.` },
      { property: "og:title", content: "Student Reviews | Sunshine Techno System" },
      { property: "og:description", content: `Rated ${siteConfig.rating.value}/5 by students on ${siteConfig.rating.source}.` },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What Our Students Say"
        subtitle={`Rated ${siteConfig.rating.value} on ${siteConfig.rating.source} based on ${siteConfig.rating.count} reviews.`}
      />

      <section className="container-page py-16">
        <div className="mx-auto mb-10 flex max-w-md items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-card">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-sunshine">
            <Star className="h-6 w-6 text-navy-deep" fill="currentColor" />
          </div>
          <div>
            <div className="font-display text-2xl font-black text-navy">{siteConfig.rating.value} / 5</div>
            <div className="text-sm text-muted-foreground">Based on {siteConfig.rating.count} {siteConfig.rating.source} reviews</div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name + t.course} className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-card">
              <div className="flex items-center gap-1 text-sunshine-deep">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">"{t.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-hero font-display text-sm font-bold text-white">{t.name.charAt(0)}</div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.course}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="hero" size="lg"><Link to="/contact">Join Our Next Batch</Link></Button>
        </div>
      </section>
    </>
  );
}
