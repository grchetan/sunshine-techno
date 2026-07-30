import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site-data";
import { PageHero } from "./about";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Sunshine Techno System, Hyderabad" },
      { name: "description", content: "Answers to common questions about courses, batches, classroom and online training at Sunshine Techno System, Lingampally, Hyderabad." },
      { property: "og:title", content: "FAQ | Sunshine Techno System" },
      { property: "og:description", content: "Common questions about IT training courses, batches and modes." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Short, clear answers about our training, batches and courses."
      />

      <section className="container-page py-16">
        <Accordion type="single" collapsible className="mx-auto max-w-3xl rounded-2xl border border-border bg-white p-2 shadow-card">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="px-4 text-left font-semibold text-navy">{f.q}</AccordionTrigger>
              <AccordionContent className="px-4 text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-muted/50 p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-navy">Still have questions?</h2>
          <p className="mt-2 text-sm text-muted-foreground">Our team is happy to help with course details, schedules and more.</p>
          <Button asChild size="lg" variant="hero" className="mt-5">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
