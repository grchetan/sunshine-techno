import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, GraduationCap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about-classroom.jpg";
import { siteConfig } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sunshine Techno System | IT Training in Hyderabad" },
      { name: "description", content: "Learn about Sunshine Techno System — an IT and software training institute in Lingampally, Hyderabad focused on practical learning and career-oriented training." },
      { property: "og:title", content: "About Sunshine Techno System" },
      { property: "og:description", content: "IT training institute in Lingampally, Hyderabad focused on practical learning across programming, testing, SAP, data and cloud." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const highlights = [
    "Experienced Trainers", "Practical Learning", "Real-Time Scenarios", "Live Projects",
    "Flexible Timings", "Online & Classroom", "Individual Attention", "Career-Oriented Training",
  ];

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Learn Technology the Practical Way"
        subtitle="An IT and software training institute in Hyderabad focused on hands-on learning and career preparation."
      />

      <section className="container-page grid gap-12 py-16 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-3xl border border-white shadow-elevated ring-1 ring-navy/5">
          <img src={aboutImg} alt="Sunshine Techno System training classroom" width={1200} height={900} loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Sunshine Techno System is an IT and software training institute serving students,
              freshers and professionals in Hyderabad.
            </p>
            <p>
              The institute focuses on practical learning, technical fundamentals, real-time
              scenarios and hands-on experience across programming, software testing, SAP,
              data science, cloud technologies and modern development tools.
            </p>
            <p>
              Training is available through classroom and online learning options, allowing
              students and professionals to choose flexible learning schedules that suit their
              goals.
            </p>
          </div>

          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {highlights.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm font-medium text-navy">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-blue" /> {p}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/courses">Explore Courses <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Talk to Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container-page grid gap-6 md:grid-cols-3">
          <InfoCard icon={GraduationCap} title="Our Approach" desc="Concepts explained clearly, followed by hands-on practice, examples and doubt clarification." />
          <InfoCard icon={CheckCircle2} title="Who We Train" desc="Students, freshers and working professionals across programming, testing, SAP, data and cloud." />
          <InfoCard icon={MapPin} title="Where We Are" desc={`${siteConfig.address.line1}, ${siteConfig.address.city} — ${siteConfig.address.pin}.`} />
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon: Icon, title, desc }: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-hero text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 text-white md:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-sunshine/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-brand-blue/60 blur-3xl" />
      </div>
      <div className="container-page relative">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sunshine">
          {eyebrow}
        </div>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-white/70">{subtitle}</p>}
      </div>
    </section>
  );
}
