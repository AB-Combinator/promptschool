import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourseBySlug } from "@/data/curriculum";
import SyllabusUnit from "@/components/SyllabusUnit";
import SectionReveal from "@/components/SectionReveal";

/* ─── Static Params ─── */

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

/* ─── Metadata ─── */

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};

  return {
    title: `${course.code}: ${course.title}`,
    description: course.description,
    openGraph: {
      title: `${course.code}: ${course.title} | Prompt School`,
      description: course.description,
    },
  };
}

/* ─── Helpers ─── */

function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case "Beginner":
      return "border-green-500/40 text-green-400";
    case "Intermediate":
      return "border-yellow-500/40 text-yellow-400";
    case "Advanced":
      return "border-red-500/40 text-red-400";
    default:
      return "border-border text-muted";
  }
}

/* ─── Page ─── */

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const courseIndex = courses.findIndex((c) => c.slug === slug);
  const prevCourse = courseIndex > 0 ? courses[courseIndex - 1] : null;
  const nextCourse =
    courseIndex < courses.length - 1 ? courses[courseIndex + 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${course.code}: ${course.title}`,
    description: course.description,
    provider: { "@type": "Organization", name: "Prompt School" },
    educationalLevel: course.difficulty,
    isAccessibleForFree: true,
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══════════ COURSE HEADER ═══════════ */}
      <SectionReveal>
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-accent text-sm bg-accent-glow px-3 py-1 rounded">
              {course.code}
            </span>
            <span className="text-xs font-mono text-dim px-2 py-1 border border-border rounded">
              Semester {course.semester}: {course.semesterName}
            </span>
            <span
              className={`text-xs font-mono px-2 py-1 border rounded ${getDifficultyColor(course.difficulty)}`}
            >
              {course.difficulty}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {course.title}
          </h1>

          <p className="text-lg text-muted leading-relaxed">
            {course.description}
          </p>
        </div>
      </SectionReveal>

      {/* ═══════════ PREREQUISITES ═══════════ */}
      <SectionReveal delay={0.1}>
        <div className="mb-12">
          <h2 className="font-mono text-accent text-sm tracking-widest uppercase mb-4">
            Prerequisites
          </h2>
          {course.prerequisites.length === 0 ? (
            <p className="text-muted">
              None &mdash; start here.
            </p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {course.prerequisites.map((prereqSlug) => {
                const prereq = getCourseBySlug(prereqSlug);
                if (!prereq) return null;
                return (
                  <Link
                    key={prereqSlug}
                    href={`/curriculum/${prereqSlug}`}
                    className="inline-flex items-center gap-2 px-3 py-2 bg-surface border border-border rounded-lg hover:border-accent/50 transition-colors group"
                  >
                    <span className="font-mono text-accent text-xs">
                      {prereq.code}
                    </span>
                    <span className="text-sm text-muted group-hover:text-foreground transition-colors">
                      {prereq.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </SectionReveal>

      {/* ═══════════ SYLLABUS ═══════════ */}
      <SectionReveal delay={0.15}>
        <div className="mb-12">
          <h2 className="font-mono text-accent text-sm tracking-widest uppercase mb-6">
            Syllabus
          </h2>
          <div className="space-y-3">
            {course.units.map((unit, i) => (
              <SyllabusUnit
                key={unit.number}
                number={unit.number}
                title={unit.title}
                concepts={unit.concepts}
                examplePrompts={unit.examplePrompts}
                assignment={unit.assignment}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* ═══════════ RECOMMENDED READING ═══════════ */}
      {course.recommendedReading.length > 0 && (
        <SectionReveal delay={0.2}>
          <div className="mb-12">
            <h2 className="font-mono text-accent text-sm tracking-widest uppercase mb-4">
              Recommended Reading
            </h2>
            <ul className="space-y-2">
              {course.recommendedReading.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors inline-flex items-center gap-2"
                  >
                    <span className="text-accent">&rarr;</span>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </SectionReveal>
      )}

      {/* ═══════════ OFFICE HOURS ═══════════ */}
      <SectionReveal delay={0.25}>
        <div className="mb-16 p-6 bg-surface border border-accent/20 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
          <h2 className="font-mono text-accent text-sm tracking-widest uppercase mb-3 pl-4">
            Office Hours
          </h2>
          <p className="text-muted leading-relaxed pl-4">
            {course.officeHours}
          </p>
        </div>
      </SectionReveal>

      {/* ═══════════ PREV / NEXT NAVIGATION ═══════════ */}
      <div className="border-t border-border pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevCourse ? (
          <Link
            href={`/curriculum/${prevCourse.slug}`}
            className="group p-4 bg-surface border border-border rounded-xl hover:border-accent/50 transition-colors"
          >
            <span className="text-xs font-mono text-dim block mb-1">
              &larr; Previous
            </span>
            <span className="font-mono text-accent text-xs">
              {prevCourse.code}
            </span>{" "}
            <span className="text-sm text-muted group-hover:text-foreground transition-colors">
              {prevCourse.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextCourse ? (
          <Link
            href={`/curriculum/${nextCourse.slug}`}
            className="group p-4 bg-surface border border-border rounded-xl hover:border-accent/50 transition-colors text-right"
          >
            <span className="text-xs font-mono text-dim block mb-1">
              Next &rarr;
            </span>
            <span className="font-mono text-accent text-xs">
              {nextCourse.code}
            </span>{" "}
            <span className="text-sm text-muted group-hover:text-foreground transition-colors">
              {nextCourse.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* ═══════════ BACK TO CURRICULUM ═══════════ */}
      <div className="text-center mt-12">
        <Link
          href="/curriculum"
          className="text-sm font-mono text-dim hover:text-accent transition-colors"
        >
          &larr; Back to Full Curriculum
        </Link>
      </div>
    </main>
  );
}
