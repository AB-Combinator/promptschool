"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/manifesto", label: "The Manifesto" },
  { href: "/curriculum", label: "Curriculum" },
];

export default function NavBar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg font-bold tracking-tight font-mono">
            <span className="text-accent">$</span> prompt.school
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm transition-colors ${
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-x-1 -bottom-[1px] h-[2px] bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <details className="relative">
              <summary className="list-none cursor-pointer p-2 text-muted hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </summary>
              <div className="absolute right-0 mt-2 w-56 rounded-lg border border-border bg-surface p-2 shadow-xl">
                {links.map((link) => (
                  <Link key={link.href} href={link.href}
                    className={`block px-3 py-2 rounded-md text-sm ${
                      isActive(link.href) ? "text-accent bg-accent-glow" : "text-muted hover:text-foreground hover:bg-surface-hover"
                    }`}
                  >{link.label}</Link>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
