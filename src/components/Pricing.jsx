import { PiCheckCircleFill } from "react-icons/pi";
import { useState } from "react";
import ContactPopup from "../components/ContactPopup";

const marketingPlans = [
  {
    name: "Starter Growth Plan",
    price: "₹30,000 / month",
    features: [
      "5–8 High-Quality Reels (AI, UGC, Offers, Promo, Reviews)",
      "5–10 Engaging Instagram Stories",
      "5–6 Eye-Catching Promotional Posters",
      "Footfall Ads to Increase Walk-Ins",
      "Offer-Based Ad Campaigns (BOGO, Festive, Combos)",
      "Retargeting Ads for Interested Customers",
      "Complete Instagram + Facebook Management",
      "Captions, Hashtags & Posting Schedule",
      "Monthly Lead & Conversion Report",
      "Detailed Ad Performance Report",
      "Monthly Growth Strategy Call",
      "100% Transparent Billing — No Extra Ad Charges",
    ],
    description:
      "Perfect for local businesses that need consistent content and more walk-ins through simple, effective ads.",
  },

  {
    name: "Advanced Growth & Retention Plan",
    price: "₹45,000 / month",
    features: [
      "Everything Included in Starter Plan",
      "Higher Reel Volume for Faster Growth",
      "Strategic Scripts to Strengthen Brand Identity",
      "Customer Journey Videos (Trust Building)",
      "Customer Retention Strategy (Repeat Buyers)",
      "Automated Follow-Ups to Convert Leads",
      "Full DM + Comment Reply Handling",
      "Complete Engagement Management",
      "Private Dashboard to Track All Reports",
      "4 Monthly Strategy & Performance Meetings",
      "High-Converting Sales Landing Page Included",
    ],
    description:
      "Best for businesses ready to scale with stronger branding, customer retention, and consistent follow-up systems.",
  },

  {
    name: "Automation + Daily Content System",
    price: "₹70,000+ / month",
    features: [
      "Daily Reels (1 Reel Every Day — 30/Month)",
      "Daily Stories & Daily Engagement Handling",
      "Real-Time Content Strategy Based on Trends",
      "High-Converting Website or Landing Page",
      "WhatsApp Broadcast & Customer List System",
      "CRM Setup for Lead Capture & Tracking",
      "AI-Based Instant Reply System",
      "Complete Funnel Setup (Ads → Page → WhatsApp → Customer)",
      "Daily Metrics Dashboard + Weekly Review Calls",
      "Dedicated Account Manager for Your Brand",
      "Full Website + Digital Presence Setup Included",
    ],
    description:
      "Ideal for businesses who want full automation, daily content, and a system that consistently brings customers.",
  },
];

const websitePlans = [
  {
    name: "Website Starter",
    price: "₹20,000 One-Time",
    features: [
      "Modern 4–5 Page Website",
      "Responsive UI (Mobile + Desktop)",
      "SEO-Ready Structure",
      "Fast Loading Speed",
      "Contact Form + Map",
      "Basic On-Page SEO",
      "WhatsApp Chat Integration",
    ],
    description:
      "Perfect for new businesses needing a sleek, modern online presence.",
  },

  {
    name: "Website Growth",
    price: "₹45,000 One-Time",
    features: [
      "8–10 Page Premium Website",
      "Custom UI/UX Design",
      "Animations + Micro Interactions",
      "High-Speed Optimization",
      "Blog Setup + Dashboard",
      "SEO Optimization (Meta Tags + Schema)",
      "Lead Form + Automations",
      "Email Integration",
    ],
    description: "Best for brands who want a premium website with SEO + leads.",
  },

  {
    name: "Website Performance Suite",
    price: "₹80,000+ One-Time",
    features: [
      "Complete Custom Website (Unlimited Pages)",
      "Advanced UI/UX + Animations",
      "Full SEO Strategy",
      "Landing Pages for Ads",
      "CRM Integration",
      "Automations + Funnels",
      "Fastest Speed Optimization",
      "Priority Support",
    ],
    description:
      "Designed for companies who need a high-performing website with funnels and SEO.",
  },
];

const Pricing = () => {
  const [openPlan, setOpenPlan] = useState(null);

  return (
    <div id="plans" className="w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="flex items-center justify-center flex-col">
        <div className="text-5xl pb-10 font-bold md:pb-20 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">
          Simple Pricing <br /> Choose your plan
        </div>

        {/* ✅ DIGITAL MARKETING SECTION */}
        <h2 className="text-3xl md:text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-6">
          Digital Media Marketing Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 pb-20">
          {marketingPlans.map((plan) => (
            <div
              key={plan.name}
              className="h-full flex flex-col justify-between border border-purple-300/20 rounded-3xl px-6 hover:border-purple-500/40 transition"
            >
              <div className="rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50">
                <div className="text-4xl font-medium">{plan.name}</div>
                {/* <div className="text-3xl pt-6">{plan.price}</div> */}
                <div className="py-6">{plan.description}</div>

                <ul>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-lg py-2 flex items-center"
                    >
                      <PiCheckCircleFill className="text-green-500 mr-2 text-xl" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ✅ CONTACT BUTTON */}
              <button
                onClick={() => setOpenPlan(plan.name)}
                className="rounded-3xl my-4 py-2 cursor-pointer text-white w-full mx-auto flex justify-center bg-gradient-to-r from-purple-500 to-pink-300"
              >
                Contact
              </button>
            </div>
          ))}
        </div>

        {/* ✅ WEBSITE SECTION */}
        <h2 className="text-3xl px-2 text-center md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">
          Website Development Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 pb-28">
          {websitePlans.map((plan) => (
            <div
              key={plan.name}
              className="h-full flex flex-col justify-between border border-blue-300/20 rounded-3xl px-6 hover:border-blue-500/40 transition"
            >
              <div className="rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50">
                <div className="text-4xl font-medium">{plan.name}</div>
                {/* <div className="text-3xl pt-6">{plan.price}</div> */}
                <div className="py-6">{plan.description}</div>

                <ul>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-lg py-2 flex items-center"
                    >
                      <PiCheckCircleFill className="text-green-500 mr-2 text-xl" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setOpenPlan(plan.name)}
                className="rounded-3xl my-4 cursor-pointer  py-2 text-white w-full mx-auto flex justify-center bg-gradient-to-r from-blue-500 to-cyan-300"
              >
                Contact
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ CONTACT POPUP */}
      <ContactPopup
        isOpen={!!openPlan}
        onClose={() => setOpenPlan(null)}
        planName={openPlan}
      />
    </div>
  );
};

export default Pricing;
