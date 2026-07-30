import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  GraduationCap,
  MessageSquare,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CourseCard } from "@/components/site/CourseCard";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { getCourseBySlug, getCourseDetail, relatedCourses, type CourseDetail } from "@/lib/course-details";
import type { Course } from "@/lib/site-data";

import { siteConfig } from "@/lib/site-data";
import { PageHero } from "./about";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = getCourseBySlug(params.slug);
    if (!course) throw notFound();
    return { course, detail: getCourseDetail(course) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Course not found | Sunshine Techno System" }, { name: "robots", content: "noindex" }] };
    }
    const { course } = loaderData;
    const title = `${course.title} Training in Hyderabad | Sunshine Techno System`;
    const desc = `${course.title} course at Sunshine Techno System, Lingampally, Hyderabad. ${course.description} Classroom & online batches with practical, hands-on training.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/courses/${course.slug}` }],
    };
  },
  notFoundComponent: CourseNotFound,
  component: CourseDetailPage,
});

function CourseNotFound() {
  return (
    <section className="container-page py-24 text-center">
      <h1 className="font-display text-3xl font-bold text-navy">Course not found</h1>
      <p className="mt-3 text-muted-foreground">The course you're looking for isn't available.</p>
      <Button asChild variant="sunshine" className="mt-6">
        <Link to="/courses"><ArrowLeft className="h-4 w-4" /> Back to Courses</Link>
      </Button>
    </section>
  );
}

function CourseDetailPage() {
  const data = Route.useLoaderData() as { course: Course; detail: CourseDetail };
  const { course, detail } = data;
  const Icon = (Icons[course.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>) ?? Icons.Code;
  const related = relatedCourses(course);


  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${course.title} Training`,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      sameAs: `https://${siteConfig.domain}`,
    },
    hasCourseInstance: detail.modes.map((m: { name: string }) => ({
      "@type": "CourseInstance",
      name: `${course.title} — ${m.name}`,
      courseMode: m.name.toLowerCase().includes("online") ? "online" : "onsite",
      location: {
        "@type": "Place",
        name: siteConfig.name,
        address: `${siteConfig.address.line1}, ${siteConfig.address.city}`,
      },
    })),
  };


  return (
    <>
      <PageHero eyebrow={course.category} title={`${course.title} Training`} subtitle={course.description} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="container-page py-12">
        <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-brand-blue">Home</Link>
          <span>/</span>
          <Link to="/courses" className="hover:text-brand-blue">Courses</Link>
          <span>/</span>
          <span className="text-navy">{course.title}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            {/* Overview card */}
            <div className="rounded-3xl border border-border bg-white p-6 shadow-card sm:p-8">
              <div className="flex items-start gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-hero text-white shadow-elevated">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <Badge variant="secondary" className="border-0 bg-muted text-xs text-navy">{course.category}</Badge>
                  <h2 className="mt-2 font-display text-2xl font-bold text-navy">Course Overview</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{course.description}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <Stat icon={Clock} label="Duration" value={detail.duration} />
                <Stat icon={GraduationCap} label="Level" value={detail.level} />
                <Stat icon={Sparkles} label="Mode" value={course.mode} />
              </div>
            </div>

            {/* Learning outcomes */}
            <Section title="What You'll Learn" icon={CheckCircle2}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {detail.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm text-navy">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Prerequisites */}
            <Section title="Prerequisites" icon={GraduationCap}>
              <ul className="space-y-2">
                {detail.prerequisites.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Syllabus */}
            <Section title="Course Syllabus" icon={Sparkles}>
              <Accordion type="single" collapsible defaultValue="mod-0" className="w-full">
                {detail.syllabus.map((m, i) => (
                  <AccordionItem key={m.title} value={`mod-${i}`}>
                    <AccordionTrigger className="text-left font-semibold text-navy">
                      <span className="mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-hero text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      {m.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="ml-10 space-y-2">
                        {m.topics.map((t) => (
                          <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Section>

            {/* Tools */}
            <Section title="Tools & Technologies" icon={Wrench}>
              <div className="flex flex-wrap gap-2">
                {detail.tools.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-navy shadow-sm">
                    {t}
                  </span>
                ))}
              </div>
            </Section>

            {/* Training Modes */}
            <Section title="Training Modes" icon={Sparkles}>
              <div className="grid gap-4 sm:grid-cols-2">
                {detail.modes.map((m) => {
                  const MIcon = (Icons[m.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>) ?? Icons.Circle;
                  return (
                    <div key={m.name} className="rounded-2xl border border-border bg-white p-5 shadow-card transition-shadow hover:shadow-elevated">
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-xl bg-muted text-brand-blue">
                          <MIcon className="h-5 w-5" />
                        </div>
                        <h4 className="font-display font-bold text-navy">{m.name}</h4>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
                    </div>
                  );
                })}
              </div>
            </Section>

            {/* Batches */}
            <Section title="Batch Timings" icon={CalendarDays}>
              <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted text-xs uppercase tracking-wider text-navy">
                    <tr>
                      <th className="px-4 py-3">Batch</th>
                      <th className="px-4 py-3">Timing</th>
                      <th className="px-4 py-3">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detail.batches.map((b) => (
                      <tr key={b.label} className="border-t border-border">
                        <td className="px-4 py-3 font-medium text-navy">{b.label}</td>
                        <td className="px-4 py-3 text-muted-foreground">{b.time}</td>
                        <td className="px-4 py-3 text-muted-foreground">{b.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Timings are indicative. Please contact us to confirm the latest batch schedule.
              </p>
            </Section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-border bg-gradient-hero p-6 text-white shadow-elevated">
              <h3 className="font-display text-xl font-bold">Book a Free Demo</h3>
              <p className="mt-2 text-sm text-white/85">
                Attend a free demo session for {course.title} and see the teaching style before you enroll.
              </p>
              <div className="mt-5 space-y-2">
                <Button asChild variant="secondary" className="w-full">
                  <Link to="/contact"><MessageSquare className="h-4 w-4" /> Enquire Now</Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-white/40 bg-transparent text-white hover:bg-white hover:text-navy">
                  <a href={`tel:${siteConfig.phone}`}>Call {siteConfig.phoneDisplay}</a>
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-white p-6 shadow-card">
              <h3 className="font-display text-lg font-bold text-navy">Quick Enquiry</h3>
              <p className="mt-1 text-xs text-muted-foreground">Share your details — we'll get back with batch info.</p>
              <div className="mt-4">
                <EnquiryForm compact />
              </div>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-navy">Related Courses</h2>
            <p className="mt-1 text-sm text-muted-foreground">More courses in {course.category}.</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => <CourseCard key={c.slug} course={c} />)}
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link to="/courses"><ArrowLeft className="h-4 w-4" /> Browse All Courses <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function Stat({ icon: I, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-muted/40 p-4">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        <I className="h-4 w-4 text-brand-blue" /> {label}
      </div>
      <p className="mt-1 font-display text-base font-bold text-navy">{value}</p>
    </div>
  );
}

function Section({ title, icon: I, children }: { title: string; icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-card sm:p-8">
      <h3 className="flex items-center gap-2 font-display text-xl font-bold text-navy">
        <I className="h-5 w-5 text-brand-blue" /> {title}
      </h3>
      <div className="mt-5">{children}</div>
    </div>
  );
}
