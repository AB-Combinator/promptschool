"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import StaggerReveal, { staggerItem } from "@/components/StaggerReveal";
import StatCounter from "@/components/StatCounter";
import TiltCard from "@/components/TiltCard";
import { semesters, getCoursesBySemester } from "@/data/curriculum";

/* ─── Testimonials ─── */
const testimonials = [
  {
    name: "Sarah Chen",
    role: "Prompt Engineer at a Series B startup",
    quote:
      "I dropped out of my CS master's program after Semester 1. I was learning more here in a week than I learned in a semester.",
  },
  {
    name: "Marcus Williams",
    role: "Freelance AI Consultant",
    quote:
      "I went from writing 'hey can you help me with this' to architecting multi-step agent workflows. My clients think I'm a wizard. I just took the courses.",
  },
  {
    name: "Priya Patel",
    role: "Product Manager, Fortune 500",
    quote:
      "Semester 3 changed how I think about building products. I now spec features as prompt chains. My engineering team actually likes my PRDs now.",
  },
  {
    name: "Jake Morrison",
    role: "Career Switcher, ex-Barista",
    quote:
      "Six months ago I was pulling espresso shots. Now I'm pulling six figures building AI automations for small businesses. No degree required.",
  },
];

/* ─── Semester descriptions ─── */
const semesterDescriptions: Record<number, string> = {
  1: "Start here. Learn what a prompt actually is, how LLMs think, and the fundamental patterns that separate amateurs from professionals.",
  2: "Go deeper. Multi-turn reasoning, persona engineering, chain-of-thought prompting, and techniques that unlock real problem-solving.",
  3: "Build real things. AI-assisted coding, content pipelines, retrieval-augmented generation, and multi-agent orchestration.",
  4: "Put it all together. A capstone project, ethics deep-dive, and the portfolio that proves you know what you're doing.",
};

export default function Home() {
  return (
    <main>
      {/* ═══════════ HERO ═══════════ */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-24">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-accent text-sm tracking-widest uppercase mb-6"
        >
          The Anti-College
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Prompt School
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-xl md:text-2xl text-muted max-w-2xl font-mono"
        >
          You don&apos;t need a degree. You need a prompt.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Link
            href="/manifesto"
            className="px-8 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent-hover transition-colors text-center"
          >
            Read the Manifesto
          </Link>
          <Link
            href="/curriculum"
            className="px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:border-accent hover:text-accent transition-colors text-center"
          >
            Browse Curriculum
          </Link>
        </motion.div>
      </section>

      {/* ═══════════ PITCH ═══════════ */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <SectionReveal>
          <h2 className="font-mono text-accent text-sm tracking-widest uppercase mb-8">
            Why This Exists
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <p className="text-lg text-muted leading-relaxed mb-6">
            AI is the biggest shift since the internet. It&apos;s rewriting
            every job, every industry, every workflow. And the institutions
            that are supposed to prepare you for the future? They&apos;re
            still teaching you to write five-paragraph essays and memorize
            textbook chapters. The gap between what universities teach and
            what the world actually needs has never been wider.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <p className="text-lg text-muted leading-relaxed mb-6">
            The most valuable skill of the next decade isn&apos;t coding,
            design, or data science in isolation. It&apos;s the ability to
            think clearly and communicate precisely with AI systems. Prompt
            engineering isn&apos;t a gimmick &mdash; it&apos;s the new
            literacy. And nobody is teaching it properly.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <p className="text-lg text-muted leading-relaxed mb-6">
            Traditional education charges you six figures for a credential
            that took four years to earn and was outdated before you
            graduated. Meanwhile, the people actually building the future are
            learning by doing &mdash; iterating on prompts, shipping
            AI-powered products, and outpacing entire departments.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.25}>
          <p className="text-lg text-foreground leading-relaxed font-medium">
            Prompt School is the alternative. A free, structured,
            no-bullshit curriculum that takes you from zero to building real
            AI workflows. Four semesters. Fourteen courses. No tuition. No
            admissions committee. Just the education that actually matters
            right now.
          </p>
        </SectionReveal>
      </section>

      {/* ═══════════ SEMESTER OVERVIEW ═══════════ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionReveal>
          <h2 className="font-mono text-accent text-sm tracking-widest uppercase mb-2">
            The Curriculum
          </h2>
          <p className="text-3xl md:text-4xl font-bold mb-12">
            Four semesters. Zero tuition.
          </p>
        </SectionReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {semesters.map((sem) => {
            const courseCount = getCoursesBySemester(sem.number).length;
            return (
              <motion.div key={sem.number} variants={staggerItem}>
                <Link href="/curriculum">
                  <TiltCard className="block">
                    <div className="bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-colors h-full">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-accent text-sm">
                          Semester {sem.number}
                        </span>
                        <span className="text-xs text-dim font-mono px-2 py-1 border border-border rounded">
                          {sem.difficulty}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{sem.name}</h3>
                      <p className="text-muted text-sm leading-relaxed mb-4">
                        {semesterDescriptions[sem.number]}
                      </p>
                      <p className="text-dim text-xs font-mono">
                        {courseCount} {courseCount === 1 ? "course" : "courses"}
                      </p>
                    </div>
                  </TiltCard>
                </Link>
              </motion.div>
            );
          })}
        </StaggerReveal>
      </section>

      {/* ═══════════ STATS STRIP ═══════════ */}
      <section className="border-y border-border bg-surface/50 py-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          <StatCounter
            end={37574}
            prefix="$"
            label="Avg. student debt"
          />
          <StatCounter end={0} prefix="$" label="Prompt School tuition" />
          <StatCounter end={4} label="Years for a degree" />
          <StatCounter end={14} label="Courses here" />
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionReveal>
          <h2 className="font-mono text-accent text-sm tracking-widest uppercase mb-2">
            Graduates
          </h2>
          <p className="text-3xl md:text-4xl font-bold mb-12">
            What our students say
          </p>
        </SectionReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={staggerItem}>
              <div className="bg-surface border border-border rounded-xl p-6 h-full flex flex-col">
                <p className="text-muted leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-dim text-sm font-mono">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerReveal>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="text-center px-6 py-24">
        <SectionReveal>
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-4">
            Ready?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The first class is free. So is the last one.
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-10">
            No signup. No paywall. No catch. Start with Semester 1 and work
            your way through fourteen courses of real, structured prompt
            engineering education.
          </p>
          <Link
            href="/curriculum"
            className="inline-block px-10 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent-hover transition-colors text-lg"
          >
            Start Semester 1
          </Link>
        </SectionReveal>
      </section>
    </main>
  );
}
