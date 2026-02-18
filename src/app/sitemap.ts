import type { MetadataRoute } from "next";
import { courses } from "@/data/curriculum";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://promptschool.vercel.app";

  const coursePages = courses.map((course) => ({
    url: `${baseUrl}/curriculum/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/manifesto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/curriculum`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...coursePages,
  ];
}
