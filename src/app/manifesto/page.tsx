import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "The Manifesto",
  description:
    "College is obsolete. The 4-year degree was built for a world that no longer exists. Here's why Prompt School exists — and why it's free.",
};

export default function ManifestoPage() {
  return (
    <main className="min-h-screen px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl space-y-20">
        {/* Page Header */}
        <SectionReveal>
          <p className="font-mono text-sm tracking-widest text-accent uppercase mb-4">
            // manifesto
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
            The degree is dead.
            <br />
            <span className="text-muted">Long live the curriculum.</span>
          </h1>
        </SectionReveal>

        {/* Section 1: The Old Model */}
        <SectionReveal delay={0.1}>
          <section className="space-y-6">
            <h2 className="font-mono text-accent text-lg md:text-xl tracking-tight">
              01 — The Old Model
            </h2>
            <div className="space-y-4 text-muted leading-relaxed text-lg">
              <p>
                College was designed for a different era. Lecture halls, semesters,
                accreditation committees, tenured professors reading from slides they
                made in 2011 — all of it was built for a world where knowledge was
                scarce and credentials were the only signal of competence.
              </p>
              <p>
                For decades, the deal was simple: pay six figures, sit in rooms for
                four years, and receive a piece of paper that told employers you could
                probably do the job. It was never efficient. It was never equitable.
                But it was the only game in town.
              </p>
              <p>
                That game is over.
              </p>
            </div>
          </section>
        </SectionReveal>

        {/* Section 2: What Changed */}
        <SectionReveal delay={0.1}>
          <section className="space-y-6">
            <h2 className="font-mono text-accent text-lg md:text-xl tracking-tight">
              02 — What Changed
            </h2>
            <div className="space-y-4 text-muted leading-relaxed text-lg">
              <p>
                AI happened. Not slowly, not gradually — like a freight train through
                the wall of every industry simultaneously. In 18 months, the entire
                landscape of knowledge work shifted beneath our feet.
              </p>
              <p>
                The skills that took four years to teach are being automated. Writing
                boilerplate code, summarizing documents, analyzing datasets, generating
                reports — these were the bread and butter of entry-level knowledge work.
                Now they&apos;re a prompt away.
              </p>
              <p>
                The skills that actually matter now — working <em>with</em> AI,
                crafting precise prompts, building autonomous workflows, knowing when to
                trust the output and when to override it — aren&apos;t taught in any
                university on Earth. No department. No major. No elective. Nothing.
              </p>
              <p>
                The world changed. The institutions didn&apos;t.
              </p>
            </div>
          </section>
        </SectionReveal>

        {/* Section 3: The Real Skill Gap */}
        <SectionReveal delay={0.1}>
          <section className="space-y-6">
            <h2 className="font-mono text-accent text-lg md:text-xl tracking-tight">
              03 — The Real Skill Gap
            </h2>
            <div className="space-y-4 text-muted leading-relaxed text-lg">
              <p>
                Let&apos;s talk numbers. Not projections — real data from the world
                we&apos;re living in right now.
              </p>
            </div>

            <div className="my-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-surface p-6 space-y-2">
                <p className="font-mono text-2xl md:text-3xl font-bold text-accent">
                  $37,574
                </p>
                <p className="text-sm text-muted">
                  Average US student loan debt
                </p>
                <p className="text-xs text-dim">
                  Federal Reserve, 2023
                </p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-6 space-y-2">
                <p className="font-mono text-2xl md:text-3xl font-bold text-accent">
                  $146,000
                </p>
                <p className="text-sm text-muted">
                  Average cost of a 4-year degree
                </p>
                <p className="text-xs text-dim">
                  Education Data Initiative
                </p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-6 space-y-2">
                <p className="font-mono text-2xl md:text-3xl font-bold text-accent">
                  300%+
                </p>
                <p className="text-sm text-muted">
                  Increase in &ldquo;prompt engineering&rdquo; job postings
                </p>
                <p className="text-xs text-dim">
                  2023&ndash;2024 hiring data
                </p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-6 space-y-2">
                <p className="font-mono text-2xl md:text-3xl font-bold text-accent">
                  40%
                </p>
                <p className="text-sm text-muted">
                  Enterprise apps embedding AI agents by end of 2026
                </p>
                <p className="text-xs text-dim">
                  Gartner forecast
                </p>
              </div>
            </div>

            <div className="space-y-4 text-muted leading-relaxed text-lg">
              <p>
                The gap is enormous. Employers need people who can work with AI.
                Universities are still debating whether to allow ChatGPT in
                classrooms. Students are graduating with six-figure debt and skills
                that were automated before they received their diplomas.
              </p>
              <p>
                This isn&apos;t a future problem. This is happening right now.
              </p>
            </div>
          </section>
        </SectionReveal>

        {/* Section 4: The Math */}
        <SectionReveal delay={0.1}>
          <section className="space-y-6">
            <h2 className="font-mono text-accent text-lg md:text-xl tracking-tight">
              04 — The Math
            </h2>
            <div className="space-y-4 text-muted leading-relaxed text-lg">
              <p>
                Here&apos;s the comparison that should make every prospective college
                student pause:
              </p>
            </div>

            <div className="my-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-surface p-6 space-y-4">
                <p className="font-mono text-sm text-dim uppercase tracking-widest">
                  The Old Way
                </p>
                <ul className="space-y-3 text-muted">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-dim select-none">&bull;</span>
                    <span>4 years of your life</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-dim select-none">&bull;</span>
                    <span>$146,000 in costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-dim select-none">&bull;</span>
                    <span>Decades of loan repayment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-dim select-none">&bull;</span>
                    <span>Skills that may be outdated by graduation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-dim select-none">&bull;</span>
                    <span>No guarantee of employment</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-accent/30 bg-accent-glow p-6 space-y-4">
                <p className="font-mono text-sm text-accent uppercase tracking-widest">
                  Prompt School
                </p>
                <ul className="space-y-3 text-muted">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-accent select-none">&bull;</span>
                    <span>14 courses, self-paced</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-accent select-none">&bull;</span>
                    <span>$0 tuition — free, forever</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-accent select-none">&bull;</span>
                    <span>Start today, not next September</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-accent select-none">&bull;</span>
                    <span>Skills built for the world as it exists right now</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-accent select-none">&bull;</span>
                    <span>Practical assignments with real AI tools</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 text-muted leading-relaxed text-lg">
              <p>
                Four years and $146,000 for a credential. Or 14 courses and $0 for
                the actual skills. The math isn&apos;t close. It&apos;s not even in
                the same universe.
              </p>
            </div>
          </section>
        </SectionReveal>

        {/* Section 5: The Alternative */}
        <SectionReveal delay={0.1}>
          <section className="space-y-6">
            <h2 className="font-mono text-accent text-lg md:text-xl tracking-tight">
              05 — The Alternative
            </h2>
            <div className="space-y-4 text-muted leading-relaxed text-lg">
              <p>
                Prompt School is a structured, four-semester curriculum that takes you
                from writing your first prompt to building autonomous AI agent
                workflows. It&apos;s designed like a real degree program — with course
                codes, prerequisites, syllabi, and assignments — because structure
                matters. Random YouTube tutorials don&apos;t add up to competence.
              </p>
              <p>
                Every course teaches a real, applicable skill. You&apos;ll learn prompt
                engineering fundamentals, then move into retrieval-augmented generation,
                multi-modal AI, agent orchestration, domain-specific applications, and
                a capstone project where you build something real.
              </p>
              <p>
                There are no admissions officers. No SAT scores. No legacy
                preferences. No geographic restrictions. If you have a browser and
                curiosity, you&apos;re in.
              </p>
              <p>
                The curriculum is open. The knowledge is free. The only barrier is
                whether you&apos;re willing to do the work.
              </p>
            </div>
          </section>
        </SectionReveal>

        {/* Section 6: Closing */}
        <SectionReveal delay={0.1}>
          <section className="space-y-8">
            <h2 className="font-mono text-accent text-lg md:text-xl tracking-tight">
              06 — This Is Prompt School
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p className="text-xl md:text-2xl font-semibold text-foreground leading-snug">
                No tuition. No admissions. No campus.
                <br />
                Just the curriculum that actually matters.
              </p>
              <p className="text-muted text-lg">
                We built Prompt School because we believe the most important skill of
                the next decade shouldn&apos;t cost six figures to learn. It
                shouldn&apos;t require moving across the country. It shouldn&apos;t
                depend on who your parents are or what zip code you grew up in.
              </p>
              <p className="text-muted text-lg">
                Education that matters should be free and accessible to everyone. Full
                stop.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/curriculum"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-8 py-3 font-mono text-sm font-semibold text-background transition-colors hover:bg-accent-hover"
              >
                View the Curriculum
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </section>
        </SectionReveal>
      </div>
    </main>
  );
}
