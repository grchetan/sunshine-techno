import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Briefcase, ClipboardCheck, Clock, GraduationCap, Laptop, MessageCircle, Rocket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "./about";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Sunshine Techno System | Practical IT Training" },
      { name: "description", content: "Industry-experienced trainers, practical learning, real-time scenarios, live projects and flexible batches at Sunshine Techno System, Hyderabad." },
      { property: "og:title", content: "Why Choose Sunshine Techno System" },
      { property: "og:description", content: "More than classroom training — a career-focused practical IT learning experience." },
      { property: "og:url", content: "/why-us" },
    ],
    links: [{ rel: "canonical", href: "/why-us" }],
  }),
  component: WhyUsPage,
});

function WhyUsPage() {
  const features = [
    { icon: Users, title: "Industry-Experienced Trainers", desc: "Learn from trainers with hands-on technology experience." },
    { icon: ClipboardCheck, title: "Practical Training", desc: "Concepts taught through hands-on exercises rather than theory alone." },
    { icon: Rocket, title: "Real-Time Scenarios", desc: "See how technologies are applied in actual development environments." },
    { icon: Briefcase, title: "Live Projects", desc: "Strengthen skills through practical project experience." },
    { icon: Clock, title: "Flexible Batches", desc: "Weekday, weekend and other batch options for students and professionals." },
    { icon: Laptop, title: "Online + Classroom", desc: "Choose the training method that fits your schedule and preference." },
    { icon: MessageCircle, title: "Doubt Support", desc: "Get help with technical questions and difficult concepts." },
    { icon: GraduationCap, title: "Career Preparation", desc: "Resume guidance, mock tests and interview preparation where applicable." },
    { icon: BookOpen, title: "Lab Practice", desc: "Lab and practice support to reinforce concepts and build confidence." },
  ];

  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="More Than Just Classroom Training"
        subtitle="A learning experience that combines fundamentals, real scenarios and career-focused practice."
      />

      <section className="container-page py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-border bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-muted text-brand-blue transition-colors group-hover:bg-gradient-hero group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-16 text-center">
        <div className="container-page">
          <h2 className="font-display text-3xl font-black text-navy">Ready to Learn With Us?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Explore our courses or book a free demo to experience the training firsthand.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="hero"><Link to="/courses">Explore Courses</Link></Button>
            <Button asChild size="lg" variant="sunshine"><Link to="/contact">Book Free Demo</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
