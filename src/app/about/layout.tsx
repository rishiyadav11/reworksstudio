import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Reworks Studio",
  description: "Learn about Reworks Studio, our team, and our mission to build state-of-the-art digital interfaces.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
