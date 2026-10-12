import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Reworks Studio | Leadership & Philosophy",
  description:
    "Reworks Studio is founded by Rishi Yadav and Navdeep Bhardwaj. We combine software engineering discipline with modern visual taste to deliver high-performance digital products.",
  alternates: {
    canonical: "https://reworksstudio.in/about",
  },
  openGraph: {
    title: "About Reworks Studio | Leadership & Philosophy",
    description:
      "Founded by Rishi Yadav and Navdeep Bhardwaj. Learn about our engineering principles and studio standards.",
    url: "https://reworksstudio.in/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
