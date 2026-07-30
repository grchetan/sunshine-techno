import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, BookOpen, Brain, Briefcase, CheckCircle2, ClipboardCheck,
  Clock, Cloud, GraduationCap, Laptop, MapPin, MessageCircle,
  Play, Rocket, Sparkles, Star, Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CourseCard } from "@/components/site/CourseCard";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { featuredCourses, siteConfig, technologies, testimonials, faqs } from "@/lib/site-data";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/hero-classroom.jpg";
import aboutImg from "@/assets/about-classroom.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sunshine Techno System | IT & Software Training Institute in Hyderabad" },
      { name: "description", content: "Learn Java, Python, Selenium, SAP, Data Science, AWS, Software Testing and more with practical IT training at Sunshine Techno System in Lingampally, Hyderabad." },
      { property: "og:title", content: "Sunshine Techno System | IT Training Institute in Hyderabad" },
      { property: "og:description", content: "Practical IT & software training in Hyderabad — classroom and live online across programming, testing, SAP, data science and cloud." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustStats />
      <PopularCourses />
      <AboutPreview />
      <WhyUs />
      <Process />
      <TrainingModes />
      <TechnologiesMarquee />
      <Reviews />
      <CareerSupport />
      <DemoCta />
      <FaqPreview />
      <ContactPreview />
    </>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const floats = ["Java", "Python", "SAP", "Selenium", "React", "AWS", "Data Science"];
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-24 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="absolute top-40 -right-16 h-96 w-96 rounded-full bg-sunshine/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,oklch(0.98_0.005_250)_0%,white_60%)]" />
      </div>

      <div className="container-page grid gap-12 pt-14 pb-20 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-1.5 text-xs font-semibold text-navy shadow-card">
            <span className="h-2 w-2 rounded-full bg-gradient-sunshine" />
            IT Training • Development • Career Support
          </div>

          <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] text-navy-deep sm:text-5xl md:text-6xl">
            Build Skills.<br />
            Build Projects.<br />
            Build Your{" "}
            <span className="relative inline-block">
              <span className="text-gradient-sunshine">Tech Career.</span>
              <svg aria-hidden viewBox="0 0 300 12" className="absolute -bottom-2 left-0 w-full text-sunshine-deep/70">
                <path d="M2 8 C 80 2, 220 2, 298 8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Industry-focused IT training in Hyderabad with practical learning, experienced trainers,
            real-time scenarios, live projects and flexible classroom & online training.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="hero">
              <Link to="/courses">Explore Courses <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="sunshine">
              <Link to="/contact"><Play className="h-4 w-4" /> Book Free Demo</Link>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-brand-blue" /> Lingampally, Hyderabad</span>
            <span className="inline-flex items-center gap-1.5"><Laptop className="h-4 w-4 text-brand-blue" /> Classroom + Online Training</span>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white shadow-elevated ring-1 ring-navy/5">
            <img
              src={heroImg}
              alt="Students learning programming at Sunshine Techno System training classroom in Hyderabad"
              width={1280}
              height={960}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/40 via-transparent to-transparent" />
          </div>

          {/* Floating tech chips */}
          <div className="pointer-events-none absolute inset-0">
            {floats.map((label, i) => {
              const positions = [
                "top-4 -left-4", "top-1/4 -right-6", "top-1/2 -left-8",
                "bottom-1/3 -right-4", "bottom-16 left-4", "-bottom-4 right-1/3",
                "top-8 right-1/4",
              ];
              return (
                <span
                  key={label}
                  className={`absolute ${positions[i]} animate-float rounded-xl border border-border bg-white/95 px-3 py-1.5 text-xs font-semibold text-navy shadow-elevated backdrop-blur`}
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  {label}
                </span>
              );
            })}
          </div>

          {/* Floating rating card */}
          <div className="absolute -bottom-6 left-6 hidden rounded-2xl border border-border bg-white p-4 shadow-elevated sm:flex sm:items-center sm:gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-sunshine">
              <Star className="h-5 w-5 text-navy-deep" fill="currentColor" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-extrabold text-navy">{siteConfig.rating.value} Rating</div>
              <div className="text-xs text-muted-foreground">{siteConfig.rating.count} {siteConfig.rating.source} reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUST STATS ---------------- */
function TrustStats() {
  const items = [
    { icon: Star, title: `${siteConfig.rating.value} Rating`, sub: `On ${siteConfig.rating.source}` },
    { icon: MessageCircle, title: `${siteConfig.rating.count} Reviews`, sub: "Verified student feedback" },
    { icon: ClipboardCheck, title: "Practical Training", sub: "Real-time scenarios" },
    { icon: Laptop, title: "Online + Classroom", sub: "Choose your mode" },
    { icon: Clock, title: "Flexible Batches", sub: "Weekday & weekend" },
  ];
  return (
    <section className="container-page -mt-6">
      <div className="grid gap-3 rounded-3xl border border-border bg-white p-3 shadow-card sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {items.map(({ icon: Icon, title, sub }) => (
          <div key={title} className="flex items-center gap-3 rounded-2xl p-4 transition-colors hover:bg-muted/60">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-muted text-brand-blue">
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="truncate font-display text-sm font-bold text-navy">{title}</div>
              <div className="truncate text-xs text-muted-foreground">{sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- SECTION HEADING ---------------- */
function SectionHeader({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-blue`}>
          <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
        </div>
      )}
      <h2 className="mt-4 font-display text-3xl font-black text-navy sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

/* ---------------- POPULAR COURSES ---------------- */
function PopularCourses() {
  const list = featuredCourses().slice(0, 8);
  return (
    <section className="container-page py-20 md:py-24">
      <SectionHeader
        eyebrow="Popular Courses"
        title="Build In-Demand Tech Skills"
        subtitle="Practical, career-focused training designed for students, freshers and working professionals."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((c) => <CourseCard key={c.slug} course={c} />)}
      </div>
      <div className="mt-10 text-center">
        <Button asChild size="lg" variant="hero">
          <Link to="/courses">View All Courses <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function AboutPreview() {
  const points = [
    "Experienced Trainers", "Practical Learning", "Real-Time Scenarios", "Live Projects",
    "Flexible Timings", "Online & Classroom", "Individual Attention", "Career-Oriented Training",
  ];
  return (
    <section className="bg-muted/50 py-20 md:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-white shadow-elevated ring-1 ring-navy/5">
            <img
              src={aboutImg}
              alt="Trainer teaching software development at Sunshine Techno System"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-white p-5 shadow-elevated sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-hero text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-sm font-extrabold text-navy">Learn by Doing</div>
                <div className="text-xs text-muted-foreground">Hands-on labs & projects</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow="About Us"
            title="Learn Technology the Practical Way"
            center={false}
          />
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Sunshine Techno System is an IT and software training institute serving students,
              freshers and professionals in Hyderabad.
            </p>
            <p>
              The institute focuses on practical learning, technical fundamentals, real-time
              scenarios and hands-on experience across programming, software testing, SAP, data
              science, cloud technologies and modern development tools.
            </p>
            <p>
              Training is available through classroom and online learning options, allowing
              students and professionals to choose flexible learning schedules.
            </p>
          </div>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm font-medium text-navy">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-blue" /> {p}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button asChild variant="hero" size="lg">
              <Link to="/about">More About Us <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */
function WhyUs() {
  const features = [
    { icon: Users, title: "Industry-Experienced Trainers", desc: "Learn from trainers with hands-on technology experience." },
    { icon: ClipboardCheck, title: "Practical Training", desc: "Learn concepts through hands-on exercises instead of theory alone." },
    { icon: Rocket, title: "Real-Time Scenarios", desc: "Understand how technologies are applied in actual development environments." },
    { icon: Briefcase, title: "Live Projects", desc: "Apply skills through practical project experience." },
    { icon: Clock, title: "Flexible Batches", desc: "Suitable for students and working professionals." },
    { icon: Laptop, title: "Online + Classroom", desc: "Choose the training method that works for you." },
    { icon: MessageCircle, title: "Doubt Support", desc: "Get help with technical questions and difficult concepts." },
    { icon: GraduationCap, title: "Career Preparation", desc: "Resume guidance, mock tests and interview prep where applicable." },
    { icon: BookOpen, title: "Lab Practice", desc: "Lab and practice support to strengthen learning." },
  ];
  return (
    <section className="container-page py-20 md:py-24">
      <SectionHeader
        eyebrow="Why Choose Us"
        title="More Than Just Classroom Training"
        subtitle="A learning experience that combines fundamentals, real scenarios and career-focused practice."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-border bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-muted text-brand-blue transition-colors group-hover:bg-gradient-hero group-hover:text-white">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-navy">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [
    { n: "01", title: "Choose Your Course", desc: "Pick a technology aligned with your goals and background." },
    { n: "02", title: "Attend Demo / Consultation", desc: "Meet the trainer, understand the syllabus and clarify doubts." },
    { n: "03", title: "Learn + Practice", desc: "Attend structured sessions with hands-on exercises and labs." },
    { n: "04", title: "Build Skills & Prepare", desc: "Work on live scenarios and prepare for opportunities." },
  ];
  return (
    <section className="bg-muted/50 py-20 md:py-24">
      <div className="container-page">
        <SectionHeader eyebrow="Learning Process" title="A Simple Path to Real Skills" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-white p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl font-black text-gradient-sunshine">{s.n}</span>
                <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-brand-blue lg:block">
                  <ArrowRight className="h-5 w-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRAINING MODES ---------------- */
function TrainingModes() {
  const modes = [
    { icon: MapPin, title: "Classroom Training", desc: "Learn directly with trainers at the Hyderabad training center." },
    { icon: Laptop, title: "Live Online Training", desc: "Attend instructor-led sessions remotely from anywhere." },
    { icon: Clock, title: "Flexible Batches", desc: "Weekday, weekend or suitable batch options based on availability." },
  ];
  return (
    <section className="container-page py-20 md:py-24">
      <SectionHeader eyebrow="Training Modes" title="Learn Your Way" />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {modes.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-border bg-gradient-to-b from-white to-muted/40 p-7 shadow-card">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-hero text-white">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-navy">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button asChild size="lg" variant="sunshine">
          <Link to="/contact">Ask About Upcoming Batches</Link>
        </Button>
      </div>
    </section>
  );
}

/* ---------------- TECHNOLOGIES ---------------- */
function TechnologiesMarquee() {
  const doubled = [...technologies, ...technologies];
  return (
    <section className="border-y border-border bg-white py-14">
      <div className="container-page">
        <SectionHeader eyebrow="Technologies" title="Tools & Technologies We Train On" />
      </div>
      <div className="mt-8 overflow-hidden">
        <div className="flex animate-[marquee_35s_linear_infinite] gap-3 whitespace-nowrap">
          {doubled.map((t, i) => (
            <span key={`${t}-${i}`} className="rounded-xl border border-border bg-muted/60 px-5 py-2.5 text-sm font-semibold text-navy">
              {t}
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </section>
  );
}

/* ---------------- REVIEWS ---------------- */
function Reviews() {
  return (
    <section className="bg-muted/50 py-20 md:py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Student Reviews"
          title="What Our Students Say"
          subtitle={`Rated ${siteConfig.rating.value} on ${siteConfig.rating.source} based on ${siteConfig.rating.count} reviews.`}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((t) => (
            <figure key={t.name + t.course} className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-card">
              <div className="flex items-center gap-1 text-sunshine-deep">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-hero font-display text-sm font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.course}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/reviews">Read All Reviews</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CAREER SUPPORT ---------------- */
function CareerSupport() {
  const items = ["Resume Preparation", "Mock Tests", "Interview Tips", "Technical Doubt Support", "Real-Time Scenarios", "Project Practice"];
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-sunshine/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-brand-blue/50 blur-3xl" />
      </div>
      <div className="container-page relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sunshine">
            <Brain className="h-3.5 w-3.5" /> Career Support
          </div>
          <h2 className="mt-4 font-display text-3xl font-black sm:text-4xl">Training Beyond the Syllabus</h2>
          <p className="mt-4 max-w-xl text-white/70">
            Learning a technology is only part of becoming career-ready. Sunshine Techno System
            focuses on practical understanding and professional preparation.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="sunshine">
              <Link to="/contact">Talk to a Course Advisor <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((it) => (
            <li key={it} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-sunshine" />
              <span className="text-sm font-medium">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- DEMO CTA + FORM ---------------- */
function DemoCta() {
  return (
    <section className="container-page py-20 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Free Demo"
            title="Not Sure Which Course Is Right for You?"
            subtitle="Talk to our training team and find a learning path based on your goals, experience and preferred technology."
            center={false}
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="hero">
              <Link to="/contact"><Play className="h-4 w-4" /> Book Free Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Talk to Advisor</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Cloud, label: "Latest tech stack" },
              { icon: Users, label: "Small batches" },
              { icon: Star, label: "5.0 student rating" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-xl border border-border bg-white p-3 text-sm font-medium text-navy shadow-card">
                <Icon className="h-4 w-4 text-brand-blue" /> {label}
              </div>
            ))}
          </div>
        </div>
        <EnquiryForm />
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FaqPreview() {
  return (
    <section className="bg-muted/50 py-20 md:py-24">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeader eyebrow="FAQ" title="Questions, Answered" center={false} />
          <p className="mt-4 text-sm text-muted-foreground">
            Can't find what you're looking for? Reach out and our team will be happy to help.
          </p>
          <Button asChild variant="outline" className="mt-6">
            <Link to="/faq">Read All FAQs <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
        <Accordion type="single" collapsible className="rounded-2xl border border-border bg-white p-2 shadow-card">
          {faqs.slice(0, 6).map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="px-4 text-left font-semibold text-navy">{f.q}</AccordionTrigger>
              <AccordionContent className="px-4 text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- CONTACT PREVIEW ---------------- */
function ContactPreview() {
  return (
    <section className="container-page py-20 md:py-24">
      <SectionHeader eyebrow="Get in Touch" title="Start Your Learning Journey" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <ContactCard icon={MapPin} title="Visit Us" lines={[siteConfig.address.line1, siteConfig.address.line2, `${siteConfig.address.city} — ${siteConfig.address.pin}`]} />
        <ContactCard icon={Play} title="Book a Demo" lines={["Free consultation with our team", "Understand syllabus and batch options"]} cta={{ to: "/contact", label: "Book Now" }} />
        <ContactCard icon={MessageCircle} title="Talk to Us" lines={[siteConfig.phoneDisplay, siteConfig.email]} cta={{ to: "/contact", label: "Send Enquiry" }} />
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, lines, cta }: { icon: React.ComponentType<{ className?: string }>; title: string; lines: string[]; cta?: { to: string; label: string } }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-card">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-hero text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-display text-lg font-bold text-navy">{title}</h3>
      <div className="mt-2 flex-1 space-y-1 text-sm text-muted-foreground">
        {lines.map((l) => <p key={l}>{l}</p>)}
      </div>
      {cta && (
        <Button asChild variant="outline" className="mt-5 w-fit">
          <Link to={cta.to}>{cta.label} <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      )}
    </div>
  );
}
