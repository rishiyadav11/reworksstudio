"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex-grow w-full bg-[#f5f3f0] text-[#131415] pt-14 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-20">
        <h1 className="font-anton text-5xl md:text-7xl tracking-wide uppercase mb-8">PRIVACY POLICY</h1>
        <div className="font-sans text-sm md:text-base text-brand-dark/80 leading-relaxed space-y-6">
          <p><strong>Last Updated:</strong> July 2026</p>
          
          <h2 className="font-anton text-2xl tracking-wide uppercase mt-8 text-brand-dark">1. Introduction</h2>
          <p>
            Welcome to Reworks Studio ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="font-anton text-2xl tracking-wide uppercase mt-8 text-brand-dark">2. The Data We Collect About You</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes billing address, email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
          </ul>

          <h2 className="font-anton text-2xl tracking-wide uppercase mt-8 text-brand-dark">3. How We Use Your Personal Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2 className="font-anton text-2xl tracking-wide uppercase mt-8 text-brand-dark">4. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
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
