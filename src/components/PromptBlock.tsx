"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface PromptBlockProps {
  prompt: string;
  context?: string;
}

export default function PromptBlock({ prompt, context }: PromptBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative border-l-2 border-accent bg-surface rounded-r-lg overflow-hidden"
    >
      {context && (
        <div className="px-4 pt-3 text-xs text-dim font-mono">{context}</div>
      )}
      <div className="p-4 pr-12">
        <pre className="text-sm font-mono text-muted whitespace-pre-wrap leading-relaxed">{prompt}</pre>
      </div>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 text-xs font-mono text-dim hover:text-accent transition-colors"
      >
        {copied ? "copied!" : "copy"}
      </button>
    </motion.div>
  );
}
