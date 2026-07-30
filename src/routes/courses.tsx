import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CourseCard } from "@/components/site/CourseCard";
import { courseCategories, courses, type CourseCategory } from "@/lib/site-data";
import { PageHero } from "./about";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "IT & Software Courses in Hyderabad | Sunshine Techno System" },
      { name: "description", content: "Explore Java, Python, Selenium, SAP, Data Science, AWS, React and more IT & software training courses at Sunshine Techno System, Lingampally, Hyderabad." },
      { property: "og:title", content: "IT & Software Courses | Sunshine Techno System" },
      { property: "og:description", content: "Practical, career-focused courses across programming, testing, SAP, data & cloud." },
      { property: "og:url", content: "/courses" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  const [filter, setFilter] = useState<CourseCategory | "All">("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return courses.filter((c) => {
      const catOk = filter === "All" || c.category === filter;
      const qOk = !query || c.title.toLowerCase().includes(query) || c.description.toLowerCase().includes(query);
      return catOk && qOk;
    });
  }, [filter, q]);

  return (
    <>
      <PageHero
        eyebrow="Courses"
        title="Build In-Demand Tech Skills"
        subtitle="Practical, career-focused training designed for students, freshers and working professionals."
      />

      <section className="container-page py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {courseCategories.map((c) => {
              const active = filter === c;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-gradient-hero text-white shadow-elevated"
                      : "border border-border bg-white text-navy hover:bg-muted"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
          <div className="relative md:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search courses..." className="pl-9" />
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-muted-foreground">No courses match your search.</p>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((c) => <CourseCard key={c.slug} course={c} />)}
          </div>
        )}
      </section>
    </>
  );
}
