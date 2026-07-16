import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Reworks Studio",
  description: "Explore our portfolio of cutting-edge SaaS, AI, and e-commerce platforms engineered by Reworks Studio.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
