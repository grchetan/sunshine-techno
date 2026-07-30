import { Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { ArrowRight, MessageSquare } from "lucide-react";
import type { Course } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CourseCard({ course }: { course: Course }) {
  const Icon = (Icons[course.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>) ?? Icons.Code;
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
      <div className="flex items-start justify-between gap-3">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-hero text-white shadow-elevated transition-transform group-hover:scale-105">
          <Icon className="h-5 w-5" />
        </div>
        <Badge variant="secondary" className="border-0 bg-muted text-xs font-medium text-navy">
          {course.category}
        </Badge>
      </div>
      <h3 className="mt-5 font-display text-lg font-bold text-navy">{course.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{course.description}</p>
      <p className="mt-4 text-xs font-medium uppercase tracking-wider text-brand-blue">{course.mode}</p>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <Button asChild size="sm" variant="outline" className="flex-1 min-w-0">
          <Link to="/courses/$slug" params={{ slug: course.slug }}>View Course <ArrowRight className="h-3.5 w-3.5" /></Link>
        </Button>

        <Button asChild size="sm" variant="sunshine" className="flex-1 min-w-0">
          <Link to="/contact"><MessageSquare className="h-3.5 w-3.5" /> Enquire</Link>
        </Button>
      </div>
    </article>
  );
}
