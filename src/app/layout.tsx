import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import DotGrid from "@/components/DotGrid";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Prompt School — You don't need a degree. You need a prompt.",
    template: "%s | Prompt School",
  },
  description:
    "The anti-college curriculum for the AI age. A free, structured prompt engineering education — from fundamentals to building real AI workflows. No tuition. No admissions. No campus.",
  openGraph: {
    title: "Prompt School — You don't need a degree. You need a prompt.",
    description:
      "The anti-college curriculum for the AI age. Free prompt engineering education from fundamentals to capstone.",
    type: "website",
    siteName: "Prompt School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prompt School — You don't need a degree. You need a prompt.",
    description:
      "The anti-college curriculum for the AI age. Free prompt engineering education from fundamentals to capstone.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <DotGrid />
        <NavBar />
        <div className="relative z-10 pt-16">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
