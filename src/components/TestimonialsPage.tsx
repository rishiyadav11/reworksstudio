"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Ananya Sharma",
    title: "Product Manager at ZenTech",
    text: "Reworks Studio exceeded our expectations. Their team is creative, responsive, and truly cares about the final product.",
    avatar: "/members/seo.jpg",
  },
  {
    name: "Rahul Verma",
    title: "Founder at CodeCraft",
    text: "From branding to design, they handled everything with professionalism. Our users love the new look!",
    avatar: "/members/market.jpg",
  },
  {
    name: "Emily Tan",
    title: "Social Media Lead at Nova",
    text: "Their social media strategy helped us 3x our engagement in just 2 months. Reworks knows how to deliver!",
    avatar: "/members/developer.jpg",
  },
  {
    name: "Jay Patel",
    title: "CEO at CloudLabs",
    text: "What stood out was their communication and commitment. They’re more like partners than a service provider.",
    avatar: "/members/editor.jpg",
  },
];

export default function TestimonialsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="relative z-20 bg-gradient-to-b from-neutral-600 to-white bg-clip-text py-2 text-center font-sans text-2xl font-bold tracking-tight text-transparent md:py-10 md:text-4xl lg:text-6xl">
          What Our <span className="text-[#00FFFF]">Clients Say</span>
        </h2>
        <p className="mb-12 text-gray-400">
          Real words from real partners we have worked with.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur-md"
            >
              <div className="mb-4 flex items-center gap-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  height={200}
                  width={200}
                  className="h-14 w-14 rounded-full border border-cyan-400"
                />
                <div className="text-left">
                  <h4 className="text-lg font-semibold">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.title}</p>
                </div>
              </div>
              <p className="text-sm text-gray-200">“{t.text}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
