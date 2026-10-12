import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start an Engineering Scoping Brief",
  description:
    "Transmit your technical requirements to Reworks Studio. Receive a comprehensive architectural response, timeline estimate, and milestone budget within 24 hours.",
  alternates: {
    canonical: "https://reworksstudio.in/connect",
  },
  openGraph: {
    title: "Start an Engineering Scoping Brief | Reworks Studio",
    description:
      "Transmit your technical requirements to Reworks Studio. 24-hour SLA on technical enquiries.",
    url: "https://reworksstudio.in/connect",
  },
};

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
