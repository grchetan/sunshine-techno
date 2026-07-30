import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Laptop, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "./about";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Training Modes — Classroom & Online | Sunshine Techno System" },
      { name: "description", content: "Choose classroom training at our Lingampally, Hyderabad center or live online instructor-led training with flexible weekday and weekend batches." },
      { property: "og:title", content: "Training Modes | Sunshine Techno System" },
      { property: "og:description", content: "Classroom + live online IT training with flexible batches in Hyderabad." },
      { property: "og:url", content: "/training" },
    ],
    links: [{ rel: "canonical", href: "/training" }],
  }),
  component: TrainingPage,
});

function TrainingPage() {
  const modes = [
    { icon: MapPin, title: "Classroom Training", desc: "Learn directly with trainers at our Lingampally, Hyderabad training center. Ideal for hands-on lab practice and in-person doubt clarification." },
    { icon: Laptop, title: "Live Online Training", desc: "Attend instructor-led sessions remotely with the same syllabus and interaction as classroom training." },
    { icon: Clock, title: "Flexible Batches", desc: "Weekday, weekend or other batch options based on trainer and seat availability." },
    { icon: Users, title: "Small Batches", desc: "Focused sessions that support individual attention and better doubt resolution." },
  ];

  const process = [
    { step: "01", title: "Choose Your Course", desc: "Pick a technology aligned with your goals and background." },
    { step: "02", title: "Attend Demo / Consultation", desc: "Meet the trainer and clarify the syllabus, mode and schedule." },
    { step: "03", title: "Learn + Practice", desc: "Attend structured sessions with hands-on exercises and labs." },
    { step: "04", title: "Build Skills", desc: "Work on real scenarios and prepare for the next step in your career." },
  ];

  return (
    <>
      <PageHero
        eyebrow="Training"
        title="Learn Your Way"
        subtitle="Classroom, live online and flexible batch options — designed for students and working professionals."
      />

      <section className="container-page py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {modes.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-white p-7 shadow-card">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-hero text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container-page">
          <h2 className="font-display text-3xl font-black text-navy sm:text-4xl">How Learning Works</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">A structured, practical learning experience — from your first demo to real skill-building.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((s) => (
              <div key={s.step} className="rounded-2xl border border-border bg-white p-6 shadow-card">
                <span className="font-display text-3xl font-black text-gradient-sunshine">{s.step}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 text-center">
        <h2 className="font-display text-3xl font-black text-navy">Ready to Get Started?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Ask about upcoming batches, book a free demo or speak with our training team.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" variant="hero"><Link to="/contact">Ask About Upcoming Batches <ArrowRight className="h-4 w-4" /></Link></Button>
          <Button asChild size="lg" variant="sunshine"><Link to="/contact">Book Free Demo</Link></Button>
        </div>
      </section>
    </>
  );
}
