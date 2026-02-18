"use client";

import SectionReveal from "@/components/SectionReveal";
import StaggerReveal, { staggerItem } from "@/components/StaggerReveal";
import TiltCard from "@/components/TiltCard";
import { semesters, getCoursesBySemester } from "@/data/curriculum";
import Link from "next/link";
import { motion } from "framer-motion";

const difficultyStyles: Record<string, string> = {
  Beginner: "border-accent text-accent",
  Intermediate: "border-blue-400 text-blue-400",
  Advanced: "border-violet-400 text-violet-400",
};

function getFirstSentence(text: string): string {
  const match = text.match(/^[^.!?]+[.!?]/);
  return match ? match[0] : text;
}

export default function CurriculumContent() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Curriculum</h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
              14 courses. 4 semesters. From writing your first prompt to building
              production AI workflows. No tuition. No admissions office. Just the
              syllabus.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Semester Sections */}
      {semesters.map((semester) => {
        const semesterCourses = getCoursesBySemester(semester.number);
        const badgeStyle =
          difficultyStyles[semester.difficulty] || difficultyStyles.Beginner;

        return (
          <section key={semester.number} className="py-12 md:py-16 px-6">
            <div className="max-w-5xl mx-auto">
              {/* Semester Header */}
              <SectionReveal>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8 md:mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Semester {semester.number}: {semester.name}
                  </h2>
                  <span
                    className={`inline-block w-fit text-xs font-mono px-3 py-1 rounded-full border ${badgeStyle}`}
                  >
                    {semester.difficulty}
                  </span>
                </div>
              </SectionReveal>

              {/* Course Cards Grid */}
              <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {semesterCourses.map((course) => {
                  const courseBadgeStyle =
                    difficultyStyles[course.difficulty] ||
                    difficultyStyles.Beginner;

                  return (
                    <motion.div key={course.slug} variants={staggerItem}>
                      <Link href={`/curriculum/${course.slug}`}>
                        <TiltCard className="h-full">
                          <div className="h-full rounded-xl border border-border bg-surface p-6 hover:border-border-light transition-colors duration-200">
                            {/* Course Code */}
                            <span className="font-mono text-sm text-accent">
                              {course.code}
                            </span>

                            {/* Title */}
                            <h3 className="text-lg font-bold mt-2 mb-2">
                              {course.title}
                            </h3>

                            {/* Description (first sentence) */}
                            <p className="text-sm text-muted leading-relaxed mb-4">
                              {getFirstSentence(course.description)}
                            </p>

                            {/* Footer: Badge + Prerequisites */}
                            <div className="flex flex-wrap items-center gap-2 mt-auto">
                              <span
                                className={`text-xs font-mono px-2 py-0.5 rounded-full border ${courseBadgeStyle}`}
                              >
                                {course.difficulty}
                              </span>

                              {course.prerequisites.length > 0 && (
                                <span className="text-xs text-dim">
                                  Requires: {course.prerequisites.join(", ")}
                                </span>
                              )}
                            </div>
                          </div>
                        </TiltCard>
                      </Link>
                    </motion.div>
                  );
                })}
              </StaggerReveal>
            </div>
          </section>
        );
      })}
    </main>
  );
}
