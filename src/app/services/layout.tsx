import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Reworks Studio",
  description: "Bespoke engineering services including AI integration, frontend architecture, and system automation.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
