"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight, Send, Check, Mail, Clock, MapPin, Sparkles } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICES_OPTIONS = [
  { id: "web-portfolio", label: "Web / Portfolio", color: "#1b43f4" },
  { id: "dashboard", label: "SaaS Dashboard", color: "#7c3aed" },
  { id: "software", label: "Custom Software", color: "#f97316" },
  { id: "apps", label: "Mobile Apps", color: "#00c850" },
  { id: "ai-agents", label: "AI Agents", color: "#ff3eda" },
  { id: "ai-workflows", label: "AI Automation", color: "#1b43f4" },
  { id: "ai-chatbots", label: "RAG Chatbots", color: "#7c3aed" },
  { id: "ai-tools", label: "Bespoke AI Tools", color: "#f97316" }
];

const BUDGET_OPTIONS = [
  { label: "Under $5k", value: "under-5k" },
  { label: "$5k - $15k", value: "5k-15k" },
  { label: "$15k - $30k", value: "15k-30k" },
  { label: "$30k+", value: "30k-plus" }
];

// Inner form component that uses search params
function ConnectForm() {
  const searchParams = useSearchParams();
  
  // State variables for form fields
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Read search parameters from Services page calculator
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const complexityParam = searchParams.get("complexity");
    const addonsParam = searchParams.get("addons");

    if (serviceParam) {
      setSelectedServices([serviceParam]);
    }

    if (complexityParam) {
      const complexity = parseInt(complexityParam);
      // Pre-select budget bucket based on complexity & base cost
      if (complexity <= 3) {
        setBudget("under-5k");
      } else if (complexity <= 6) {
        setBudget("5k-15k");
      } else if (complexity <= 9) {
        setBudget("15k-30k");
      } else {
        setBudget("30k-plus");
      }
    }

    if (addonsParam) {
      const addonsArray = addonsParam.split(",");
      // Merge addons into selected services if applicable or write them into details
      const selectedAddons = SERVICES_OPTIONS.filter(opt => addonsArray.includes(opt.id)).map(o => o.id);
      setSelectedServices(prev => Array.from(new Set([...prev, ...selectedAddons])));
      
      setDetails(
        `Hi Reworks! I calculated an estimate on your services calculator with addons: ${addonsParam}. Let's discuss!`
      );
    }
  }, [searchParams]);

  const handleServiceToggle = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((s) => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setSubmitting(true);

    // Map selected service IDs to their readable labels
    const servicesText = selectedServices
      .map((id) => SERVICES_OPTIONS.find((s) => s.id === id)?.label ?? id)
      .join(", ") || "None selected";

    // Map budget value to readable label
    const budgetText = (BUDGET_OPTIONS.find((b) => b.value === budget)?.label ?? budget) || "Not specified";

    // Current timestamp
    const now = new Date();
    const timeText = now.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    const templateParams = {
      name,
      email,
      services: servicesText,
      budget: budgetText,
      message: details || "No additional details provided.",
      time: timeText,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Something went wrong sending your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border-2 border-brand-dark p-8 text-center space-y-4"
          style={{ boxShadow: "-6px 6px 0px 0px #00c850" }}
        >
          <div className="w-16 h-16 bg-[#e8fff2] border-2 border-[#00c850] rounded-full flex items-center justify-center mx-auto shadow-[-2px_2px_0px_0px_#131415]">
            <Check className="w-8 h-8 text-[#00c850]" />
          </div>
          <h2 className="font-anton text-2xl tracking-wider text-brand-dark uppercase">MESSAGE TRANSMITTED</h2>
          <p className="font-sans text-xs text-brand-dark/70 leading-relaxed max-w-sm mx-auto">
            Thank you, {name}! We received your project specs and will review them within 24 hours. A creative technologist will reach out to schedule an alignment call.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setName("");
              setEmail("");
              setDetails("");
              setSelectedServices([]);
              setBudget("");
            }}
            className="font-mono-roboto text-[10px] font-bold tracking-widest text-[#5e67e6] hover:underline uppercase"
          >
            Send Another Transmission ✦
          </button>
        </motion.div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white border-2 border-brand-dark p-6 md:p-8 space-y-6 relative"
          style={{ boxShadow: "-8px 8px 0px 0px #131415" }}
        >
          {/* Form Header */}
          <div className="border-b border-brand-dark/10 pb-4">
            <h3 className="font-anton text-xl tracking-wider text-brand-dark uppercase">
              PROJECT BLUEPRINT BRIEF
            </h3>
            <span className="font-sans text-[10px] text-brand-dark/40 block mt-0.5">
              Fill out your details to coordinate scope parameters.
            </span>
          </div>

          {/* 1. Services Selector Grid */}
          <div className="space-y-3">
            <label className="font-mono-roboto text-[10px] font-bold text-brand-dark/40 tracking-wider uppercase block">
              1. What system layers are we building?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {SERVICES_OPTIONS.map((opt) => {
                const isSelected = selectedServices.includes(opt.id);
                return (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => handleServiceToggle(opt.id)}
                    className={`p-3 text-left border text-[10px] font-mono-roboto font-bold transition-all relative flex items-center justify-between rounded-none ${
                      isSelected
                        ? "border-brand-dark text-white shadow-[-3px_3px_0px_0px_#131415]"
                        : "border-brand-dark/15 text-brand-dark/70 hover:border-brand-dark/30 hover:text-brand-dark bg-brand-cream/10"
                    }`}
                    style={{ backgroundColor: isSelected ? opt.color : undefined }}
                  >
                    <span>{opt.label}</span>
                    {isSelected && <Check className="w-3 h-3 text-white flex-shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Budget Range */}
          <div className="space-y-3">
            <label className="font-mono-roboto text-[10px] font-bold text-brand-dark/40 tracking-wider uppercase block">
              2. What is the approximate budget scale?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {BUDGET_OPTIONS.map((opt) => {
                const isSelected = budget === opt.value;
                return (
                  <button
                    type="button"
                    key={opt.value}
                    onClick={() => setBudget(opt.value)}
                    className={`p-3 text-center border text-[10px] font-mono-roboto font-bold transition-all rounded-none ${
                      isSelected
                        ? "bg-[#5e67e6] border-brand-dark text-white shadow-[-3px_3px_0px_0px_#131415]"
                        : "border-brand-dark/15 text-brand-dark/70 hover:border-brand-dark/30 hover:text-brand-dark bg-brand-cream/10"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Text inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-mono-roboto text-[10px] font-bold text-brand-dark/40 tracking-wider uppercase block">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Jenkins"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#fcfbfa] border-2 border-brand-dark/20 focus:border-brand-dark p-3 font-mono-roboto text-xs focus:outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-mono-roboto text-[10px] font-bold text-brand-dark/40 tracking-wider uppercase block">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="e.g. sarah@apexflow.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#fcfbfa] border-2 border-brand-dark/20 focus:border-brand-dark p-3 font-mono-roboto text-xs focus:outline-none"
              />
            </div>
          </div>

          {/* 4. Details */}
          <div className="space-y-1.5">
            <label className="font-mono-roboto text-[10px] font-bold text-brand-dark/40 tracking-wider uppercase block">
              Tell us about your project
            </label>
            <textarea
              rows={4}
              placeholder="Provide a summary of the scope, goals, integrations, and ideal launch timeline..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full bg-[#fcfbfa] border-2 border-brand-dark/20 focus:border-brand-dark p-3 font-sans text-xs focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 font-mono-roboto text-xs font-bold tracking-widest text-brand-cream bg-brand-dark hover:bg-brand-purple py-4 border-2 border-brand-dark transition-all shadow-[-4px_4px_0px_0px_#1b43f4] hover:shadow-none uppercase cursor-pointer"
          >
            {submitting ? (
              <span>TRANSMITTING SPECS...</span>
            ) : (
              <>
                <span>TRANSMIT PROJECT BRIEF</span>
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default function ConnectPage() {
  const [indiaTime, setIndiaTime] = useState("");

  // Live India Time Clock
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      } as const;
      const dateStr = new Date().toLocaleString("en-US", options);
      const dayOptions = { timeZone: "Asia/Kolkata", weekday: "short" } as const;
      const dayStr = new Date().toLocaleString("en-US", dayOptions);
      setIndiaTime(`${dayStr} - ${dateStr} - India`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-grow w-full bg-[#f5f3f0] text-brand-dark select-none pt-14">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Contact Information Folder (lg:col-span-5) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="font-mono-roboto text-xs font-bold tracking-widest text-[#5e67e6] uppercase">GET IN TOUCH</span>
            <h1 className="font-anton text-5xl md:text-6xl tracking-wide uppercase leading-none text-brand-dark">
              LET&apos;S CONNECT
            </h1>
            <p className="font-sans text-xs text-brand-dark/70 leading-relaxed max-w-sm">
              Have an idea for a custom website, database dashboard, automated AI pipelines, or specific digital art? Fill out the brief or reach out directly.
            </p>
          </div>

          {/* Details list folder layout */}
          <div className="border-2 border-brand-dark p-6 space-y-6 bg-[#efece8] shadow-[-5px_5px_0px_0px_#5e67e6]">
            {/* Email link */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border border-brand-dark bg-white flex items-center justify-center shadow-[-2px_2px_0px_0px_#131415]">
                <Mail className="w-3.5 h-3.5 text-brand-dark" />
              </div>
              <div>
                <span className="font-mono-roboto text-[9px] text-brand-dark/40 font-bold tracking-widest uppercase">DIRECT EMAIL</span>
                <a
                  href="mailto:hello@reworksstudio.in"
                  className="font-mono-roboto text-xs font-bold text-brand-dark block hover:underline"
                >
                  hello@reworksstudio.in
                </a>
              </div>
            </div>

            {/* Office locations */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border border-brand-dark bg-white flex items-center justify-center shadow-[-2px_2px_0px_0px_#131415]">
                <MapPin className="w-3.5 h-3.5 text-brand-dark" />
              </div>
              <div>
                <span className="font-mono-roboto text-[9px] text-brand-dark/40 font-bold tracking-widest uppercase">LOCATIONS</span>
                <span className="font-sans text-xs text-brand-dark/80 block leading-relaxed">
                  Gurugram, Haryana, India<br />
                  Narnaul, Haryana, India
                </span>
              </div>
            </div>

            {/* Operating hours */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border border-brand-dark bg-white flex items-center justify-center shadow-[-2px_2px_0px_0px_#131415]">
                <Clock className="w-3.5 h-3.5 text-brand-dark" />
              </div>
              <div>
                <span className="font-mono-roboto text-[9px] text-brand-dark/40 font-bold tracking-widest uppercase">AVAILABILITY</span>
                <span className="font-sans text-xs text-brand-dark/80 block leading-relaxed">
                  Monday to Friday<br />
                  10:00 AM — 07:00 PM IST
                </span>
              </div>
            </div>
          </div>

          {/* Quote card */}
          <div className="bg-[#eeedfd] border border-brand-purple/20 p-5 rounded relative overflow-hidden">
            <Sparkles className="w-5 h-5 text-brand-purple absolute top-4 right-4 animate-pulse" />
            <p className="font-handwriting text-xl text-brand-dark/80 leading-snug">
              “No complex sales meetings. Just a straight conversation about what you want to build and how we engineer it.”
            </p>
          </div>
        </div>

        {/* Right Side: Form wrapped in Suspense boundary (lg:col-span-7) */}
        <div className="lg:col-span-7">
          <Suspense fallback={
            <div className="bg-white border-2 border-brand-dark p-12 text-center" style={{ boxShadow: "-8px 8px 0px 0px #131415" }}>
              <div className="font-mono-roboto text-xs font-bold text-brand-dark/50 animate-pulse tracking-widest uppercase">
                INITIALIZING BRIEF DATA LAYER...
              </div>
            </div>
          }>
            <ConnectForm />
          </Suspense>
        </div>
      </div>

      {/* 5. Bottom Sticky Status Footer Bar */}
      <div className="w-full bg-[#efeae0] border-t border-brand-dark/10 py-4 px-6 md:px-12 flex items-center justify-between font-mono-roboto text-xs text-brand-dark/70 z-30">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#5e67e6] animate-pulse"></div>
          <span>Mail server online</span>
        </div>
        <div className="hidden sm:block font-bold tracking-wider text-brand-dark uppercase">
          Transmission Node
        </div>
        <div className="font-semibold">
          {indiaTime || "India Time"}
        </div>
      </div>
    </div>
  );
}
