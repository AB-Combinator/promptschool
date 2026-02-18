"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PromptBlock from "./PromptBlock";

interface SyllabusUnitProps {
  number: number;
  title: string;
  concepts: string[];
  examplePrompts: { prompt: string; context: string }[];
  assignment: string;
  defaultOpen?: boolean;
}

export default function SyllabusUnit({
  number,
  title,
  concepts,
  examplePrompts,
  assignment,
  defaultOpen = false,
}: SyllabusUnitProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-surface">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-surface-hover transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-accent bg-accent-glow px-2 py-1 rounded">
            Unit {number}
          </span>
          <h3 className="font-semibold">{title}</h3>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-accent text-xl shrink-0"
        >+</motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 space-y-6">
              {/* Concepts */}
              <div>
                <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">Key Concepts</h4>
                <ul className="space-y-1">
                  {concepts.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-muted">
                      <span className="text-accent mt-1 shrink-0">&bull;</span>{c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Example prompts */}
              {examplePrompts.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">Example Prompts</h4>
                  <div className="space-y-3">
                    {examplePrompts.map((ep, i) => (
                      <PromptBlock key={i} prompt={ep.prompt} context={ep.context} />
                    ))}
                  </div>
                </div>
              )}

              {/* Assignment */}
              <div>
                <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">Assignment</h4>
                <div className="p-4 rounded-lg bg-accent-glow border border-accent/20 text-sm text-muted leading-relaxed">
                  {assignment}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
