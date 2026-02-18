import type { Metadata } from "next";
import CurriculumContent from "./CurriculumContent";

export const metadata: Metadata = {
  title: "Curriculum",
  description:
    "The full Prompt School curriculum: 14 courses across 4 semesters, from prompt fundamentals to building real AI workflows. Free and structured.",
};

export default function CurriculumPage() {
  return <CurriculumContent />;
}
