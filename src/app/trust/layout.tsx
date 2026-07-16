import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust & Credibility | Reworks Studio",
  description: "Learn about our strict engineering standards, transparent delivery pipelines, and the guarantee of a no black-box agency experience.",
};

export default function TrustLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
