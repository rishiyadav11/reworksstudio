"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="flex-grow w-full bg-[#f5f3f0] text-[#131415] pt-14 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-20">
        <h1 className="font-anton text-5xl md:text-7xl tracking-wide uppercase mb-8">TERMS OF SERVICE</h1>
        <div className="font-sans text-sm md:text-base text-brand-dark/80 leading-relaxed space-y-6">
          <p><strong>Last Updated:</strong> July 2026</p>
          
          <h2 className="font-anton text-2xl tracking-wide uppercase mt-8 text-brand-dark">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the services provided by Reworks Studio, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.
          </p>

          <h2 className="font-anton text-2xl tracking-wide uppercase mt-8 text-brand-dark">2. Services Provided</h2>
          <p>
            Reworks Studio provides custom software engineering, web development, AI agent implementation, and design services. The specific scope, deliverables, and timelines for each project will be outlined in a separate Statement of Work (SOW) or proposal agreed upon by both parties.
          </p>

          <h2 className="font-anton text-2xl tracking-wide uppercase mt-8 text-brand-dark">3. Intellectual Property Rights</h2>
          <p>
            Upon full payment for the services rendered, Reworks Studio grants the client all rights, title, and interest in the final deliverables, unless otherwise specified in the Statement of Work. Reworks Studio reserves the right to use the final deliverables for portfolio and promotional purposes.
          </p>
          
          <h2 className="font-anton text-2xl tracking-wide uppercase mt-8 text-brand-dark">4. Limitation of Liability</h2>
          <p>
            In no event shall Reworks Studio, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2 className="font-anton text-2xl tracking-wide uppercase mt-8 text-brand-dark">5. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="font-mono-roboto font-bold">hello@reworksstudio.in</p>
          
          <div className="mt-12 pt-8 border-t border-brand-dark/10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono-roboto text-[11px] font-bold uppercase tracking-wider text-brand-dark hover:underline"
            >
              Return to Home <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
