import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="text-lg font-bold tracking-tight font-mono">
              <span className="text-accent">$</span> prompt.school
            </div>
            <p className="text-dim text-sm mt-2 max-w-xs">
              No tuition. No admissions. No campus. Just the curriculum that actually matters.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/manifesto" className="text-sm text-muted hover:text-foreground transition-colors">The Manifesto</Link>
            <Link href="/curriculum" className="text-sm text-muted hover:text-foreground transition-colors">Curriculum</Link>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-dim text-xs">
          &copy; {new Date().getFullYear()} Prompt School. This is not an accredited institution. That&apos;s the point.
        </div>
      </div>
    </footer>
  );
}
